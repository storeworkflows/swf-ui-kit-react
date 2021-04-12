import * as React from "react";

import { Input } from "../../../../index";

export default class PopoverContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { inputValue, filterList, onSearch, setQuery, managePopover } = this.props;
        return(
            <div className="filter-templates">
                <div className="popover-header">
                    <p className="header-title">All filters</p>
                    <Input autofocus={true} name="filterSearch" value={inputValue} onInput={(e) => onSearch({value: e.target.value})} placeholder="Search for Filter" step="any" />
                </div>
                {filterList.length > 0 ? <div className="filter-list">
                    {filterList.map(filterInfo => (
                        <div className="filter-card" onClick={() => {
                                setQuery({query: filterInfo.filter});
                                managePopover();
                            }}>
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