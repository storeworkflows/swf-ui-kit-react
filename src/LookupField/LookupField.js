import * as React from "react";
import propTypes from "prop-types";
import graphqlRequest from "../utils/graphqlRequest/graphqlRequest";
import {query} from "./datasource";
import _ from "lodash";
import {Button, Input, Preloader} from "../index";
import Result from "./Result";
import Pill from "../Pill/Pill";
import Popover from "../Popover/Popover";
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
                value: this.props.value?.split(",").filter(Boolean) || [],
                displayValue: this.props.displayValue?.split(",").filter(Boolean) || []
            },
            searchValue: "",
            matchesCount: 0,
            loading: false,
            loaded: false,
            focused: false,
            preloader: false,
            repeat: 0
        }
    }

    makeRequest = async (chars) => {
        const response = await graphqlRequest({
            operationName: "reference",
            query,
            variables: {
                chars,
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
//
        let res = await response;
        return await response.json();
        //  return await response.json();
    }

    async getReferenceList(value) {
        try {
            this.setState({
                loading: true,
                records: [],
                loaded: false
            });

            const data = await this.makeRequest(value);
            const {
                referenceDataList,
                referenceRecentDataList,
                totalCount
            } = _.get(data, "[0].data.GlideLayout_Query.referenceDataRetriever");

            this.setState({
                loading: false,
                loaded: true,
                records: [...referenceDataList, ...referenceRecentDataList],
                matchesCount: totalCount
            });

        } catch (error) {
            console.error(error);
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

        this.getReferenceList(value).then();
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
            referenceRecord: {
                sysId: null,
                displayValue: ""
            },
            loaded: false
        })

        this.props.onValueChange(this.props.name, listRecords.value.filter(Boolean).join(","), listRecords.displayValue.filter(Boolean).join(","));
    }

    deleteValue({label}) {
        const value = new Map(this.state.listRecords.value.map((v, i) => [i, v]));
        const displayValue = new Map(this.state.listRecords.displayValue.map((v, i) => [v, i]));

        const id = displayValue.get(label);
        value["delete"](id);
        displayValue["delete"](label);

        const listRecords = {
            value: Array.from(value.values()).filter(Boolean),
            displayValue: Array.from(displayValue.keys()).filter(Boolean)
        }

        this.setState({listRecords});

        this.props.onValueChange(this.props.name, listRecords.value.toString(), listRecords.displayValue.toString());
    }

    onClick(record) {
        const isReference = this.props?.type === "reference"
        return isReference ? this.referenceHandleClick(record) : this.listHandleClick(record)
    }

    showPreloader(repeat = 4) {
        return <Input.Start><Preloader count={repeat}
                                       flexDirectionGeneral="row"
                                       mainStyles={{backgroundColor: "transparent"}}
                                       items={[
                                           {
                                               repeat: 1,
                                               width: "6rem",
                                               height: "2rem",
                                               itemStyles: {justifyContent: "space-between"},
                                               round: false
                                           },
                                       ]}/></Input.Start>
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

    onPaste = async (event) => {
        if (!this.isList) return

        event.preventDefault();
        event.stopPropagation();

        const value = event.clipboardData.getData("Text");

        if (!value) return;

        this.setState({focused: false, preloader: true});

        const charsArray = value.split(/,|\\n/).map(chars => chars.trim());

        this.setState({focused: false, preloader: true, repeat: charsArray.length});

        const result = await fetch(`api/x_aaro2_teamwork/swf_api/list`, {
            method: "post",
            credentials: 'same-origin',
            body: JSON.stringify({
                table: this.props.reference,
                search_string: charsArray
            }),
            headers: {
                'content-type': "application/json",
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck
            }
        });

        const data = await result.json();

        this.setState({focused: false, preloader: false});

        const listRecords = {
            value: Array.from(new Set([...this.state.listRecords.value, ...data.map(({sysId}) => sysId)])),
            displayValue: Array.from(new Set([...this.state.listRecords.displayValue, ... data.map(({referenceData}) => referenceData[0].value)]))
        }

        this.setState({
            listRecords,
            referenceRecord: {
                sysId: null,
                displayValue: ""
            },
            loaded: false
        })

        this.props.onValueChange(this.props.name, listRecords.value.filter(Boolean).join(","), listRecords.displayValue.filter(Boolean));
    }

    // UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    //     const isList = nextProps.type === "glide_list";
    //
    //     if (isList) {
    //         return this.setState({
    //             listRecords: {
    //                 value: nextProps.value?.split(",") ?? [],
    //                 displayValue: nextProps.displayValue?.split(",") ?? [],
    //                 loading: false,
    //                 focused: false
    //             }
    //         })
    //     }
    // }

    static getDerivedStateFromProps(nextProps) {
        const isList = nextProps.type === "glide_list";

        if (isList) {
            return {
                listRecords: {
                    value: nextProps.value?.split(",") ?? [],
                    displayValue: nextProps.displayValue?.split(",") ?? [],
                    loading: false,
                    focused: false
                }
            }
        }
    }

    renderListPills() {
        return (
            <Input.Start>{this.state.listRecords.displayValue.map((label) => {
                if (!label) return null;
                return <Pill
                    key={label}
                    label={label}
                    canDismiss={true}
                    onDelete={this.deleteValue}/>
            })
            }</Input.Start>
        )
    }

    clearValue = () => {
        this.setState({
            referenceList: {
                value: "",
                displayValue: ""
            }
        });
        this.props.onValueChange(this.props.name, "", "");
    }

    render() {
        const {
            matchesCount,
            records,
            loading,
            loaded,
            preloader,
            repeat,
            focused,
            referenceRecord,
            listRecords
        } = this.state;

        const {
            label, declarativeUiActions, type, name, readonly,
            invalid, required, onInvalid, message, visible
        } = this.props;

        const hasMatches = matchesCount > 0;

        const showResults = loading || (loaded && focused);

        const isList = type === "glide_list";

        const hasValue = Boolean(referenceRecord.sysId);

        const showDeleteButton = !isList && hasValue && !readonly;

        const count = listRecords.displayValue.filter(Boolean).length;

        return (
            visible ?
                <>
                    <div className="swf-reference" tabIndex="0" onFocus={this.onFocus} onBlur={this.onBlur}
                         ref={elm => this.props.internalRef.current = elm}>
                        <Input
                            internalRef={this.inputRef}
                            className="swf-reference--input"
                            value={referenceRecord.displayValue}
                            containerClass={isList ? "list-field-group" : ""}
                            label={`${label} ${isList ? count + " selected" : ""}`}
                            manageValue={true}
                            name={name}
                            onInput={this.onChange}
                            readonly={readonly}
                            onInvalid={onInvalid}
                            onPaste={this.onPaste}
                            invalid={invalid}
                            required={required}
                            message={message}
                        >
                            {preloader && this.showPreloader(repeat)}
                            {isList && !preloader && this.renderListPills()}
                            {!readonly && <Input.End>{showDeleteButton &&
                            <Button bare variant="tertiary" icon="x" size="md" tooltipContent="Clear"
                                    onClick={this.clearValue}/>}</Input.End>}
                        </Input>
                        {this.inputRef && this.inputRef.current &&
                        <Popover
                            hideTail
                            manageOpened
                            opened={showResults}
                            positionTarget={this.inputRef}
                            positions={[
                                {target: "bottom-center", content: "top-center"},
                                {target: "top-center", content: "bottom-center"}
                            ]}

                        >
                            {/*style={{width: `${this.inputRef?.current?.offsetWidth - 16}px`}}*/}
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
    visible: true,
    internalRef: React.createRef()
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
    visible: propTypes.bool,
    internalRef: PropTypes.oneOfType([
        propTypes.func,
        propTypes.shape({current: propTypes.any})
    ])
}


export default LookupField