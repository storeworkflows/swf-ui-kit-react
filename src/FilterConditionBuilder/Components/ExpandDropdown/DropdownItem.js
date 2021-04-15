import classnames from "classnames";
import propTypes from "prop-types";
import * as React from "react";

import Icon from "../../../Icon/Icon";

class DropdownItem extends React.Component {

    constructor(props) {
        super(props);
    }

    itemSelected = ({dropdownClicked}) => {
        const {id, disabled, onSelectAction, listIndex} = this.props;

        if(!disabled)
            onSelectAction({id, dropdownClicked, listIndex});
    }

    

    render() {
        const {
            id,
            expandIcon,
            label,
            disabled,
            isSelected,
            reference,
            isDropdown
        } = this.props;

        return (
            <>
               <div className={classnames({
                   "dropdown-item": true,
                   "disabled": disabled,
                   "selected": isSelected
               })}
                    onClick={(e) => {
                        this.itemSelected({dropdownClicked: false});
                        e.stopPropagation();
                    }}
                    data-key={id}
               >
                   {label}
                   {(expandIcon && !!reference) && <div style={{display: "flex", alignSelf: "center"}} onClick={(e) => {
                            this.itemSelected({dropdownClicked: true});
                            e.stopPropagation();
                       }}><Icon icon={(isDropdown) ? `${expandIcon}-fill` : expandIcon} size="sm" /></div>}
               </div>
            </>
        )
    }
}

DropdownItem.defaultProps = {
    disabled: false,
    isSelected: false,
}

DropdownItem.propTypes = {
    id: propTypes.oneOfType([
        propTypes.string,
        propTypes.number
    ]),
    label: propTypes.string,
    disabled: propTypes.bool,
    onSelectAction: propTypes.func,
    isSelected: propTypes.bool,
    icon: propTypes.string
}

export default DropdownItem