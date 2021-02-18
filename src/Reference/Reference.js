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
        this.state = {
            records: []
        }
    }

    onChange (event) {
        const {target: {value}} = event;
        graphqlRequest("reference", query, {
            chars: value,
            encodedRecord: "",
            field: "opened_by",
            ignoreRefQual: false,
            paginationLimit: 25,
            serializedChanges: "",
            sortBy: "",
            sys_id: "1ca56c38db1624103d9aca3239961996",
            table: "x_mobi_swf_item"
        })
            .then(async response =>  {
                const json = await response.json();
                this.setState({
                    records: _.get(json, "[0].data.GlideLayout_Query.referenceDataRetriever")
                })
                console.log({response: json})
            })
            .catch(error => console.error(error))
    }

    render() {
        console.log(this.state.records)
        return (
            <div className="swf-reference">
                <Input className="swf-reference--input" onInput={this.onChange}/>
            </div>
        )
    }
}

Reference.propTypes = {
    onValueChange: propTypes.func,
    value: propTypes.string,
    declarativeActionsProps: propTypes.object
}

export default Reference