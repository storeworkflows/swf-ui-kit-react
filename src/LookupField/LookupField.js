import * as React from "react";
import propTypes from "prop-types";
import graphqlRequest from "../utils/graphqlRequest/graphqlRequest";
import {query} from "./datasource";
import _ from "lodash";
import {Input} from "../index";
import DeclarativeUIActions from "./DeclarativeUIActions";
import Result from "./Result";
import Pill from "../Pill/Pill";
import Popover from "../Popover/Popover";
import {noop} from "../utils";
import PropTypes from "prop-types";

class LookupField extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.getReferenceList = this.getReferenceList.bind(this);
        this.getReferenceList = _.debounce(this.getReferenceList, 500);
        this.listHandleClick = this.listHandleClick.bind(this);
        this.referenceHandleClick = this.referenceHandleClick.bind(this);
        this.deleteValue = this.deleteValue.bind(this);
        this.renderListPills = this.renderListPills.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);

        this.controllerRef = React.createRef();
        this.inputRef = React.createRef();

        this.isList = this.props.type === "glide_list";

        this.state = {
            records: [],
            referenceRecord: {
                sysId: this.isList ? "" : this.props.value || null,
                displayValue: this.isList ? "" : this.props.displayValue || ""
            },
            listRecords: {
                value: this.props.value?.split(",") ?? [],
                displayValue: this.props.displayValue?.split(",") ?? []
            },
            searchValue: "",
            matchesCount: 0,
            loading: false,
            loaded: false,
            focused: true
        }
    }

    async getReferenceList(value) {
        try {
            this.setState({
                loading: true,
                records: [],
                loaded: false
            });

            const response = await graphqlRequest({
                operationName: "reference",
                query,
                variables: {
                    chars: value,
                    encodedRecord: "",
                    field: this.props.name,
                    ignoreRefQual: false,
                    paginationLimit: 25,
                    serializedChanges: "{}",
                    sortBy: "",
                    sys_id: this.props.tableRecordSysId,
                    table: this.props.table
                },
                params: {
                    signal: this.controllerRef.current.signal
                }
            });
            const json = await response.json();
            const {
                referenceDataList,
                referenceRecentDataList,
                totalCount
            } = _.get(json, "[0].data.GlideLayout_Query.referenceDataRetriever");

            this.setState({
                loading: false,
                loaded: true,
                records: [...referenceDataList, ...referenceRecentDataList],
                matchesCount: totalCount
            });

        } catch (error) {
            console.error(error)
        }
    }

    onChange(event) {
        const {target: {value}} = event;
        if (this.controllerRef.current) {
            this.controllerRef.current.abort();
        }
        this.setState({
            referenceRecord: {
                sysId: null,
                displayValue: value
            }
        })

        this.controllerRef.current = new AbortController();

        this.getReferenceList(value);
    }

    referenceHandleClick(record) {
        const {sysId, referenceData} = record;

        this.setState({
            referenceRecord: {
                sysId,
                displayValue: referenceData[0].value
            },
            loaded: false
        })

        this.props.onValueChange(this.props.name, sysId, referenceData[0].value);
    }

    listHandleClick(record) {
        const {sysId, referenceData} = record;

        const listRecords = {
            value: Array.from(new Set([...this.state.listRecords.value, sysId])),
            displayValue: Array.from(new Set([...this.state.listRecords.displayValue, referenceData[0].value]))
        }

        this.setState({
            listRecords,
            loaded: false
        })

        this.props.onValueChange(this.props.name, listRecords.value.filter(Boolean).join(","), listRecords.displayValue.filter(Boolean).join(","));
    }

    deleteValue ({label}) {
        const value = new Map(this.state.listRecords.value.map((v, i) => [i, v]));
        const displayValue = new Map(this.state.listRecords.displayValue.map((v ,i) => [v, i]));

        const id = displayValue.get(label);
        value["delete"](id);
        displayValue["delete"](label);

        const listRecords = {
            value: Array.from(value.values()),
            displayValue: Array.from(displayValue.keys())
        }

        this.setState({listRecords});

        this.props.onValueChange(this.props.name, listRecords.value.filter(Boolean).join(","), listRecords.displayValue.filter(Boolean).join(","));
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     const {loading, loaded, records} = this.state;
    //     console.log(records, loading, loaded);
    // }

    onClick(record) {
        const isReference = this.props?.type === "reference"
        return isReference ? this.referenceHandleClick(record) : this.listHandleClick(record)
    }

    onFocus(event) {
        this.setState({focused: true});
        if (this.controllerRef.current) {
            this.controllerRef.current.abort();
        }

        this.controllerRef.current = new AbortController();
        !this.props.readonly && this.getReferenceList("**");
    }

    onBlur(event) {
        this.setState({focused: false});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const isList = nextProps.type === "glide_list";

        if (isList) {
            return this.setState({
                listRecords: {
                    value: nextProps.value?.split(",") ?? [],
                    displayValue: nextProps.displayValue?.split(",") ?? []
                },
            })
        }

        return this.setState({
            referenceRecord: {
                sysId: nextProps.value || null,
                displayValue: nextProps.displayValue || ""
            }
        })
    }

    static getDerivedStateFromProps(nextProps) {
        const isList = nextProps.type === "glide_list";

        if (isList) {
            return {
                listRecords: {
                    value: nextProps.value?.split(",") ?? [],
                    displayValue: nextProps.displayValue?.split(",") ?? []
                },
            }
        }

        return {
            referenceRecord: {
                sysId: nextProps.value || null,
                displayValue: nextProps.displayValue || ""
            }
        }
    }

    renderListPills() {
        return (
            <Input.Start>{this.state.listRecords.displayValue.map((label) => <Pill label={label}
                                                                                   canDismiss={true} onDelete={this.deleteValue}/>)}</Input.Start>
        )
    }

    render() {
        const {matchesCount, records, loading, loaded, focused, referenceRecord} = this.state;

        const {label, declarativeUiActions, type, name, readonly,
            invalid, required, onInvalid, message, visible} = this.props;

        const hasMatches = matchesCount > 0;

        const showResults = loading || (loaded && focused);

        const isList = type === "glide_list";

        return (
            visible ?
            <>
                <div className="swf-reference" tabIndex="0" onFocus={this.onFocus} onBlur={this.onBlur}>
                    <Input
                        internalRef={this.inputRef}
                        className="swf-reference--input"
                        value={referenceRecord.displayValue}
                        containerClass={isList ? "list-field-group" : ""}
                        label={label}
                        name={name}
                        onInput={this.onChange}
                        readonly={readonly}
                        onInvalid={onInvalid}
                        invalid={invalid}
                        required={required}
                        message={message}
                    >
                        {isList && this.renderListPills()}
                        {/*<Input.End><DeclarativeUIActions declarativeUiActions={declarativeUiActions} record={referenceRecord}/></Input.End>*/}
                    </Input>
                    {this.inputRef && this.inputRef.current &&
                        <Popover
                            hideTail={true}
                            manageOpened={true}
                            opened={showResults}
                            positionTarget={this.inputRef}
                            positions={[
                                {target: "bottom-center", content: "top-center"},
                                {target: "top-center", content: "bottom-center"}
                                ]}
                        >
                            <Popover.Content>
                                <ul className="result" style={{width: `${this.inputRef?.current?.offsetWidth - 16}px`}}>
                                    {loading ? <span className="message">Loading...</span> : null}
                                    {loaded && !hasMatches ? <span className="message">No Results Found</span> : null}
                                    {loaded && <Result records={records} onClick={this.onClick}/>}
                                </ul>
                            </Popover.Content>
                        </Popover>
                    }
                </div>
            </>
                : null
        )
    }
}

LookupField.defaultProps = {
    label: "",
    name: "default",
    onValueChange: () => void 0,
    declarativeUiActions: [],
    type: "reference",
    readonly: false,
    required: false,
    invalid: false,
    onInvalid: () => void 0,
    message: [],
    visible: true
}

LookupField.propTypes = {
    onValueChange: propTypes.func,
    value: propTypes.string,
    displayValue: propTypes.string,
    declarativeUiActions: propTypes.object,
    label: propTypes.string,
    name: propTypes.string,
    type: propTypes.oneOf(["reference", "glide_list"]),
    table: propTypes.string,
    tableRecordSysId: propTypes.string,
    readonly: propTypes.bool,
    required: propTypes.bool,
    invalid: propTypes.bool,
    onInvalid: propTypes.func,
    message: PropTypes.arrayOf(PropTypes.shape({
        status: PropTypes.oneOf(["critical", "warning", "positive", "info", "suggestion"]),
        content: PropTypes.string,
        icon: PropTypes.string,
        className: propTypes.object,
        iconSize: PropTypes.number
    })),
    visible: propTypes.bool
}


export default LookupField