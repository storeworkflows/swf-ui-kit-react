import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import findByType, {createSubComponent} from "../utils/findByType";

class LabelValue extends React.Component {

    constructor(props) {
        super(props);
    }

    renderValue(){
        const {children, value, valueClassName, inline} = this.props;
        const valueClasses = classnames(
            "value-content",
            valueClassName, {
                "--text-value": value,
                "--inline": inline
            }
        )

        if(value)
            return <span className={valueClasses}>{value}</span>

        const slotValue = findByType(children, "Value");

        if (!slotValue || slotValue.length<1)
            return null;

        return <div className={valueClasses}>{slotValue}</div>
    }


    render() {
        const {
            labelClassName,
            importantLabel,
            className,
            onClick,
            inline,
            label,
            size
        } = this.props;

        const classes = classnames(
            "label-value-container",
            `--${size}`,
            className, {
                "--display-flex": inline,
                "--unimportant": !importantLabel
            }
        )

        const labelClasses = classnames(
            "label-content",
            labelClassName, {
                "--unimportant": !importantLabel
            }
        )

        return (
            <>
                <div
                    className={classes}
                    onClick={onClick}
                >
                    {label && <label className={labelClasses}>{label}</label>}
                    {this.renderValue()}
                </div>
            </>
        )
    }
}

LabelValue.Value = createSubComponent("Value");

LabelValue.defaultProps = {
    className: {},
    labelClassName: {},
    valueClassName: {},
    inline: false,
    onClick: () => void 0,
    importantLabel: true,
    size: "md"
}

LabelValue.propTypes = {
    label: propTypes.string,
    className: propTypes.oneOfType([propTypes.string, propTypes.object]),
    labelClassName: propTypes.oneOfType([propTypes.string, propTypes.object]),
    valueClassName: propTypes.oneOfType([propTypes.string, propTypes.object]),
    onClick: propTypes.func,
    inline: propTypes.bool,
    value: propTypes.string,
    importantLabel: propTypes.bool,
    size: propTypes.oneOf(["sm", "md", "lg"])
}

export default LabelValue