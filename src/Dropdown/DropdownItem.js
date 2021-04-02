import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

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

        const { id, label, disabled, isSelected, className } = this.props;

        let classes = classnames(
            className,
            "dropdown-item",
            {
                "disabled": disabled,
                "selected": isSelected
            });

        return (
            <>
               <div className={classes}
                    onClick={this.itemSelected}
                    data-key={id}
                    ref = {el => this.itemRef = el}
               >
                   {label}
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
    className: propTypes.object
}

export default DropdownItem