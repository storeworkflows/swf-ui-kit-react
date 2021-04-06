import * as React from "react";
import FilterDropdownItem from "../FilterDropdownItem/FilterDropdownItem";

export default class FilterDropdownList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { columnsArr, dropdownExpanded, changeDropdownValue } = this.props
        return(
            <div style={{display: dropdownExpanded ? "inline-block" : "none"}} className="filter-dropdown-list">
                {columnsArr.map((column) => <FilterDropdownItem key={column.name} column={column} changeDropdownValue={changeDropdownValue} />)}
            </div>
        )
    }
}

FilterDropdownList.defaultProps = {
    tableFields: {
        columns: {}
    }
}