import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

class DropdownItem extends React.Component {

    constructor(props) {
        super(props);
        this.itemSelected = this.itemSelected.bind(this);
    }

    itemSelected() {
        const {id, disabled, onSelectAction} = this.props;

        if(!disabled)
            onSelectAction({id: id});
    }

    render() {

        const {
            label,
            disabled,
            isSelected
        } = this.props;

        return (
            <>
               <div className={classnames({
                   "dropdown-item": true,
                   "disabled": disabled,
                   "selected": isSelected
               })}
                    onClick={() => this.itemSelected()}
               >
                   {label}
               </div>
            </>
        )
    }
}

DropdownItem.defaultProps = {
    disabled: false,
    isSelected: false
}

DropdownItem.propTypes = {
    id: propTypes.oneOfType([
        propTypes.string,
        propTypes.number
    ]),
    label: propTypes.string,
    disabled: propTypes.bool,
    onSelectAction: propTypes.func,
    isSelected: propTypes.bool
}

export default DropdownItem