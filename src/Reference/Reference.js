import * as React from "react";
import propTypes from "prop-types";
import graphqlRequest from "../utils/graphqlRequest/graphqlRequest";
import {query} from "./datasource";
import _ from "lodash";
import {Input} from "../index";
import styles from "./styles.css";
import DeclarativeUIActions from "./DeclarativeUIActions";

class Reference extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.getReferenceList = this.getReferenceList.bind(this);
        this.getReferenceList = _.debounce(this.getReferenceList, 500);
        this.onClick = this.onClick.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);

        this.controllerRef = React.createRef();
        this.state = {
            records: [],
            chosenRecord: {
                sysId: null,
                displayValue: ""
            },
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
                    field: "opened_by",
                    ignoreRefQual: false,
                    paginationLimit: 25,
                    serializedChanges: "",
                    sortBy: "",
                    sys_id: "1ca56c38db1624103d9aca3239961996",
                    table: "x_mobi_swf_item"
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
            chosenRecord: {
                sysId: null,
                displayValue: value
            }
        })

        this.controllerRef.current = new AbortController();

        this.getReferenceList(value);
    }

    onClick(record) {
        const {sysId, referenceData} = record;

        this.setState({
            chosenRecord: {
                sysId,
                displayValue: referenceData[0].value
            },
            loaded: false
        })

        this.props.onValueChange(this.props.name, sysId, referenceData[0].value);
    }

    onFocus(event) {
        this.setState({focused: true});
    }

    onBlur(event) {
        this.setState({focused: false});
    }

    render() {
        const {matchesCount, records, loading, loaded, focused, chosenRecord} = this.state;

        const {label, declarativeUiActions, name} = this.props;

        const hasMatches = matchesCount > 0;

        const showResults = loading || (loaded && focused);

        return (
            <>
                <style type="text/css">{styles}</style>
                <div className="swf-reference" tabIndex="0" onFocus={this.onFocus} onBlur={this.onBlur}>
                    <Input
                        className="swf-reference--input"
                        value={chosenRecord.displayValue}
                        label={label}
                        name={name}
                        onInput={this.onChange}
                    >
                        <Input.End><DeclarativeUIActions declarativeUiActions={declarativeUiActions} record={chosenRecord}/></Input.End>
                    </Input>
                    {showResults ? <ul className="result">
                        {loading ? <span className="message">Loading...</span> : null}
                        {loaded && !hasMatches ? <span className="message">No Results Found</span> : null}
                        {loaded && records.map(record => {
                            const hasAdditionalInfo = record.referenceData.length > 1;

                            return (
                                <li className="result--item" key={record.sysId}
                                    onMouseDown={() => this.onClick(record)}>
                                    <h3 className="main">{record.referenceData[0].value}</h3>
                                    {hasAdditionalInfo ?
                                        <span className="additional">{record.referenceData[1].value}</span> : null}
                                </li>
                            )
                        })}
                    </ul> : null}
                </div>
            </>
        )
    }
}

Reference.defaultProps = {
    label: "",
    name: "default",
    onValueChange: () => void 0,
    declarativeUiActions: []
}

Reference.propTypes = {
    onValueChange: propTypes.func,
    value: propTypes.string,
    declarativeUiActions: propTypes.object,
    label: propTypes.string,
    name: propTypes.string
}

export default Reference