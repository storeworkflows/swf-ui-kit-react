import * as React from "react";
import { Input } from "../../../../index";
import fetch from "cross-fetch"

export default class PopoverContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterList: []
        }
    }

    componentDidMount() {
        this.setState({filterList: this.props.filterList});
    }

    render() {
        const { filterList } = this.state;
        return(
            <div className="filter-templates">
                <div className="popover-header">
                    <p className="header-title">All filters</p>
                    <Input name="filterSearch" placeholder="Search for Filter" step="any" />
                </div>
                {filterList.length > 0 ? <div className="filter-list">
                    {filterList.map(filterInfo => (
                        <div className="filter-card">
                            <div className="card-content">
                                <span className="card-header">{filterInfo.title}</span>
                                <span className="card-query">{filterInfo.filter}</span>
                            </div>
                        </div>
                    ))}
                </div> : <h3 className="filter-none">No filters unabled</h3>}
            </div>
        )
    }
}