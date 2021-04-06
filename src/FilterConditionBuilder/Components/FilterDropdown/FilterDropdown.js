import * as React from "react";
import { Icon } from "../../../index";
import FilterDropdownList from "../FilterDropdownList/FilterDropdownList";

export default class FilterDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownExpanded: false,
            dropdownValue: ""
        }
    }

    changeDropdownValue = (value) => {
        this.setState({dropdownValue: value})
    }

    expandDropdown = (columnsArr) => {
        const { dropdownExpanded } = this.state;
        columnsArr.length && this.setState({ dropdownExpanded: !dropdownExpanded })
    }

    render() {
        const { dropdownExpanded, dropdownValue } = this.state;
        const { tableFields } = this.props;
        const { columns } = tableFields;
        const columnsArr = Object.values(columns).sort((a, b) => a.label < b.label ? -1 : 0);
        const styles = dropdownExpanded ? {
            borderBottomLeftRadius: 0
        } : {}
        return(
            <>
                <button className="filter-dropdown-btn" style={styles} onClick={() => this.expandDropdown(columnsArr)}>
                    {!!columnsArr.length ? <span className="dropdown-value">{dropdownValue ? dropdownValue : columnsArr[0].label}</span> : "..."}
                    <Icon icon="caret-down-fill" size="sm" />
                </button>
                <FilterDropdownList dropdownExpanded={dropdownExpanded} columnsArr={columnsArr} changeDropdownValue={this.changeDropdownValue} />
            </>
        )
    }
}

FilterDropdown.defaultProps = {
    tableFields: {
        columns: {}
    }
}