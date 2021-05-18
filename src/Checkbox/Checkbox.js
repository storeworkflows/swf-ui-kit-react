import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import RequiredLabel from "../RequiredLabel/RequiredLabel";
import {useEffect, useRef, useState} from "react";

const Checkbox = React.forwardRef((props, ref) => {
    const {
        checked, invalid,
        manageChecked, manageInvalid,
        onChange, onInvalid,
        readonly, disabled, label, name, value,
        required,
        visible,
        className,
        labelClassName,
        inlineRequired
    } = props;

    const [checkedSate, setCheckedState] = useState(checked);
    const [invalidSate, setInvalidState] = useState(invalid);

    const checkedFinal = manageChecked ? checked : checkedSate;
    const invalidFinal = manageInvalid ? invalid : invalidSate;

    const checkboxRef = useRef(null);

    const onChangeAction = (e) => {
        e?.preventDefault();
        let newValue = (checkedFinal === "indeterminate") || !checkedFinal;
        let canChange = !readonly && !disabled;

        if (!canChange) return;

        !manageChecked && setCheckedState(newValue);
        onChange({
            value: manageChecked ? checked : newValue,
            valueName: value, label, name
        });
    }

    const onInvalidAction = (e) => {
        !manageInvalid && setInvalidState(true)
        onInvalid(e, {
            value: manageInvalid ? invalid : true,
            valueName: value, label: label, name: name
        });
    }

    const setIndeterminate = () => {
        if (checkboxRef?.current) {
            let isIndeterminate = checkedFinal === "indeterminate";
            let input = checkboxRef.current.querySelector('input');

            if(input)
                input.indeterminate = isIndeterminate;
        }
    }

    useEffect(() => setIndeterminate(), [])
    useEffect(() => setIndeterminate(), [checked, checkedSate])

    let isIndeterminate = checkedFinal === 'indeterminate'
    let checkedInputValue = isIndeterminate || checkedFinal;

    let checkBoxClasses = classnames({
        "swf-checkbox-container": true,
        "disabled": disabled,
        "readonly": readonly,
        "invalid": invalidFinal
    })

    return (
        visible ?
            <>
                <div className={className} ref={ref}>
                    {(label || required) &&
                        <RequiredLabel className={labelClassName}
                                       invalid={invalidFinal}
                                       required={required}
                                       label={label}
                        />
                    }

                    <div className={checkBoxClasses}
                         ref={checkboxRef}
                         onClick={onChangeAction}
                    >
                        <input
                            className={"checkbox-input"}
                            type="checkbox"
                            disabled={disabled}
                            required={required}
                            name={name}
                            value={checkedFinal}
                            checked={checkedInputValue}
                            onInvalid={onInvalidAction}
                            onChange={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        />
                        <div className={"checkbox-information"}>
                            {value &&
                            <RequiredLabel
                                htmlFor={name}
                                className={"checkbox-label"}
                                required={inlineRequired}
                                label={value}
                            />
                            }
                        </div>
                    </div>
                </div>
            </>
            : null
    );

});

Checkbox.defaultProps = {
    checked: false,
    disabled: false,
    invalid: false,
    manageChecked: false,
    manageInvalid: false,
    readonly: false,
    required: false,
    visible: true,
    onInvalid: () => void 0,
    onChange: () => void 0,
    inlineRequired: false,
    className: "",
    labelClassName: "",
};

Checkbox.propTypes = {
    checked: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["indeterminate"])
    ]),
    disabled: propTypes.bool,
    invalid: propTypes.bool,
    label: propTypes.string,
    manageChecked: propTypes.bool,
    manageInvalid: propTypes.bool,
    name: propTypes.string,
    readonly: propTypes.bool,
    required: propTypes.bool,
    onInvalid: propTypes.func,
    onChange: propTypes.func,
    visible: propTypes.bool,
    className: propTypes.oneOfType([propTypes.string, propTypes.object]),
    value: propTypes.string,
    labelClassName: propTypes.oneOfType([propTypes.string, propTypes.object]),
    inlineRequired: propTypes.bool
}

export default Checkbox