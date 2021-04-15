import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import Icon from "../Icon/Icon";

class DropdownItem extends React.Component {

    constructor(props) {
        super(props);
        this.itemSelected = this.itemSelected.bind(this);

        this.itemRef = null;
    }

    itemSelected() {
        const {id, disabled, onSelectAction} = this.props;

        if(!disabled)
            onSelectAction({id: id});
    }

    componentDidMount() {
        const {showOnMount, isSelected} = this.props;
        if(this.itemRef && isSelected && showOnMount)
            this.itemRef.scrollIntoView();
    }

    render() {

        const { id, label, disabled, isSelected, className, sublabel, number, icon } = this.props;

        let classes = classnames(
            className,
            "swf-dropdown-item",
            {
                "disabled": disabled,
                "selected": isSelected,
                "--no-icon": !icon
            });

        return (
            <>
               <div className={classes}
                    onClick={this.itemSelected}
                    data-key={id}
                    ref = {el => this.itemRef = el}
               >
                   {icon && <Icon
                       className={"item-element item-start"}
                       icon={icon}
                       customSize={20}
                   />}
                   <div className={"text-items"}>
                       <label className={"label"}>{label}</label>
                       {sublabel && <div className={"sublabel"}>{sublabel}</div>}
                   </div>
                   {number && <span className={"item-element item-end"}>{number}</span>}
               </div>
            </>
        )
    }
}

DropdownItem.defaultProps = {
    disabled: false,
    isSelected: false,
    showOnMount: true,
    className: {}
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
    showOnMount: propTypes.bool,
    className: propTypes.object,
    sublabel: propTypes.string,
    number: propTypes.number,
    icon: propTypes.string,
}

export default DropdownItem