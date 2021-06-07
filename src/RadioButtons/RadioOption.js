import * as React from "react";
import propTypes from "prop-types";

import classnames from "classnames";

const RadioOption = React.forwardRef((props, ref) => {

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
        required,
        className
    } = props;

    let optionClasses = classnames(
        className,
        "radio-option-container",
        {
            "disabled": disabled,
            "readonly": readonly,
            "invalid": invalid,
            "horizontal": isHorizontal
        })

    let canChangeValue = !readonly && !disabled;
    return (
        <>
            <div className={optionClasses}
                 onClick={() => {
                     canChangeValue && onChangeAction({id: id, name: name, value: value})
                 }}
                 ref={ref}
            >
                <input
                    className={classnames("radio-option", {"checked": checked})}
                    type="radio"
                    id={id}
                    checked={checked}
                    value={value ? value : label}
                    disabled={disabled}
                    readOnly={readonly}
                    name={name}
                    required={required}
                    onChange={() => {
                    }}
                    onInvalid={(e) => onInvalidAction({e, id: id})}
                />
                <label className={"radio-option-label"}>{label}</label>
            </div>
        </>
    );
});

RadioOption.defaultProps = {
    checked: false,
    readonly: false,
    disabled: false,
    invalid: false,
    isHorizontal: false,
    required: false,
    name: "",
    label: "",
    className: {}
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
    required: propTypes.bool,
    className: propTypes.object
}


export default React.memo(RadioOption)
