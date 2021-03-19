import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import findByType, {createSubComponent} from "../utils/findByType";

class LabelValue extends React.Component {

    constructor(props) {
        super(props);
    }

    renderValue(){
        const {children} = this.props;
        const value = findByType(children, "Value");

        if (!value || value.length<1)
            return null;
        return <div className={"label-value-content"}>{value}</div>
    }


    render() {
        const {
            labelClassName,
            className,
            onClick,
            label
        } = this.props;

        const classes = classnames(
            "label-value-container",
            className
        )

        return (
            <>
                <div
                    className={classes}
                    onClick={onClick}
                >
                    {label && <label className={labelClassName}>{label}</label>}
                    {this.renderValue()}
                </div>
            </>
        )
    }
}

LabelValue.Value = createSubComponent("Value");

LabelValue.defaultProps = {
    className: {},
    onClick: () => void 0
}

LabelValue.propTypes = {
    label: propTypes.string,
    className: propTypes.object,
    labelClassName: propTypes.object,
    onClick: propTypes.func
}

export default LabelValue