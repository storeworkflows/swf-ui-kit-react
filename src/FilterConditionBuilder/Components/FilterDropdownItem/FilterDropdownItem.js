import * as React from "react";
import propTypes from "prop-types";
import { Icon } from "../../../index";
import classnames from "classnames";

export default class FilterDropdownItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isItemActive: false
        };
    }
    render() {
        const { column, changeDropdownValue } = this.props;
        const { isItemActive } = this.state;
        return(
            <div
                className={
                    classnames({
                        "dropdown-item": true,
                        "--active": isItemActive
                    })
                }
                onClick={() => {
                    this.setState({isItemActive: true});
                    changeDropdownValue(column.label)
                }
            }>
                <div className="dropdown-item__label">
                    {column.label}
                </div>
                {!!column.reference && <div className="dropdown-item__reference-icon">
                    <Icon icon={isItemActive ?  "arrow-right-circle-fill" : "arrow-right-circle"} size="sm" color={isItemActive && "rgb(23,100,82)"} />
                </div>}
            </div>
        )
    }
}

FilterDropdownItem.defaultProps = {
    column: []
}