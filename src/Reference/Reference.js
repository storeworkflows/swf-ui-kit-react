import * as React from "react";
import propTypes from "prop-types";
import graphqlRequest from "../utils/graphqlRequest/graphqlRequest";
import {query} from "./datasource";
import _ from "lodash";
import {Input} from "../index";

class Reference extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.getReferenceList = this.getReferenceList.bind(this);
        this.getReferenceList = _.debounce(this.getReferenceList, 500)
        this.controllerRef = React.createRef();
        this.state = {
            records: []
        }
    }

    getReferenceList (value) {
        graphqlRequest( {
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
        })
            .then(async response => {
                const json = await response.json();
                this.setState({
                    records: _.get(json, "[0].data.GlideLayout_Query.referenceDataRetriever")
                })
                console.log({response: json})
            })
            .catch(error => console.error(error))
    }

    onChange(event) {
        const {target: {value}} = event;
        if (this.controllerRef.current) {
            this.controllerRef.current.abort();
        }

        this.controllerRef.current = new AbortController();

        this.getReferenceList(value);
    }

    render() {
        console.log(this.state.records)
        return (
            <div className="swf-reference">
                <Input className="swf-reference--input" label={this.props.label} onInput={this.onChange}/>
            </div>
        )
    }
}

Reference.defaultProps = {
    label: ""
}

Reference.propTypes = {
    onValueChange: propTypes.func,
    value: propTypes.string,
    declarativeActionsProps: propTypes.object,
    label: propTypes.string
}

export default Reference