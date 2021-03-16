import * as React from "react";
import propTypes from "prop-types";

import styles from "./styles.scss"
import classnames from "classnames";

class RadioOption extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {
            id,
            checked,
            readonly,
            disabled,
            name,
            value,
            label,
            onChangeAction,
            onInvalidAction,
            invalid,
            isHorizontal,
            required
        } = this.props;

        let canChangeValue = !readonly && !disabled;
        return (
            <>
                <style type="text/css">{styles}</style>
                <div className={classnames({
                    "radio-option-container": true,
                    "disabled": disabled,
                    "readonly": readonly,
                    "invalid": invalid,
                    "horizontal": isHorizontal
                })}
                     onClick={()=> canChangeValue && onChangeAction({id: id, name: name, value: value})}
                >
                    <input
                        className={"radio-option"}
                        type="radio"
                        id={id}
                        checked={checked}
                        value={value ? value : label}
                        disabled={disabled}
                        readOnly={readonly}
                        name={name}
                        required={required}
                        onChange={() => canChangeValue && onChangeAction({id: id, name: name, value: value})}
                        onInvalid={() => onInvalidAction({id: id})}
                    />
                    <label className={"radio-option-label"}>{label}</label>
                </div>
            </>
        );
    }
}

RadioOption.defaultProps = {
    checked: false,
    readonly: false,
    disabled: false,
    invalid: false,
    isHorizontal: false,
    required: false,
    name: "",
    label: ""
};

RadioOption.propTypes = {
    id: propTypes.string,
    label: propTypes.string,
    value: propTypes.string,
    checked: propTypes.bool,
    readonly: propTypes.bool,
    disabled: propTypes.bool,
    invalid: propTypes.bool,
    isHorizontal: propTypes.bool,
    name: propTypes.string,
    onChangeAction: propTypes.func,
    onInvalidAction: propTypes.func,
    required: propTypes.bool
}

export default RadioOption
