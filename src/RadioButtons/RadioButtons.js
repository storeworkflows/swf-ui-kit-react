import * as React from "react";
import propTypes from "prop-types";

import styles from "./styles.scss"
import RadioOption from "./RadioOption.js"
import Icon from "../Icon/Icon";

class RadioButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    renderValue(option, name){
        const {
            id,
            label,
            value,
            checked,
            readonly,
            disabled
        } = option;

        let isChecked = this.props.value ? this.props.value === id : checked
        return (
            <RadioOption
                key={id}
                id = {id}
                label = {label}
                value = {value}
                checked = {isChecked}
                readonly = {readonly || this.props.readonly}
                disabled = {disabled || this.props.disabled}
                name = {name}
            />
        )
    }

    render() {

        const {
            invalid,
            label,
            layout,
            manageValue,
            name,
            options,
            required
        } = this.props;

        return (
            <>
                <style type="text/css">{styles}</style>
                <div className={"radio-buttons-container"}>
                    { label && <span>{label}</span>}
                    { required &&
                        <Icon
                            icon={"exclamation"}
                            customSize={20}
                            color={ invalid ? "red" : "black" }
                        />
                    }
                    <div className={"group-of-radio-buttons"}>
                        {options.map((option) => this.renderValue(option, name))}
                    </div>
                </div>
            </>
        );
    }
};

RadioButtons.defaultProps = {
    disabled: false,
    layout: "vertical",
    manageValue: false,
    options: [],
    readonly: false,
    required: false
};

RadioButtons.propTypes = {
    disabled: propTypes.bool,
    invalid: propTypes.bool,
    label: propTypes.string,
    layout: propTypes.oneOf(["vertical", "horizontal"]),
    manageValue: propTypes.bool,
    name: propTypes.string,
    options: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string,
            label: propTypes.string,
            value: propTypes.string,
            checked: propTypes.bool,
            readonly: propTypes.bool,
            disabled: propTypes.bool
    })),
    readonly: propTypes.bool,
    required: propTypes.bool,
    value: propTypes.string
}

export default RadioButtons