import * as React from "react";
import propTypes, {shape} from "prop-types";
import {useCallback, useEffect, useRef, useState} from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Popover from "../Popover/Popover";
import SmallCalendar from "../SmallCalendar/SmallCalendar";
import RequiredLabel from "../RequiredLabel/RequiredLabel";
import classnames from "classnames";
import Icon from "../Icon/Icon";


const RangePicker = React.forwardRef((props, ref) => {
    const {
        opened, format, min, max, visible, invalid,
        manageValue, onValueChange, onValueSet,
        manageInvalid, onInvalid, name,
        manageOpened, onOpen, label, required, readonly, disabled,
        firstValue, secondValue, className, value: {first, second}
    } = props;

    const [focused, setFocused] = useState(false);


    const invalidInput = () => {

    }

    const changeValue = () => {

    }

    const openCalendar = () => {

    }

    const onBlur = () => {
        setFocused(false)
    }



    const renderDateInput = (dateValue, isFirst = true) => {
        const inputClasses = classnames({
            "date-input-control": true,
            "--invalid": invalid,
            "--readonly": readonly,
        })

        return <input
            className={inputClasses}
            placeholder={ dateValue.placeholder || format}
            value={dateValue.value}
            name={dateValue.name || name}
            aria-required={required}
            aria-invalid={dateValue.invalid || invalid}
            onInvalid={(e) => invalidInput(e, dateValue, onInvalid)}
            onChange={e => changeValue(e,onValueChange, isFirst)}
            max={max}
            min={min}
            required={required}
            onBlur={onBlur}
            onFocus={() => setFocused(true)}
            readOnly={dateValue.readonly || readonly}
            disabled={dateValue.disabled || disabled}
        />
    }

    const containerStyles = classnames(
        "range-picker",
        "swf-form-group",
        className, {
            "--focused": focused,
            "--readonly": readonly,
            "--invalid": invalid
        });

    const labelClasses = classnames("inp-label", {"--readonly": readonly});


    return <div ref={ref} className={containerStyles}>
        <RequiredLabel
            className={labelClasses}
            required={required}
            invalid={invalid}
            label={label}
            htmlFor={name}
        />
        {renderDateInput(first)}
        <Icon icon={"arrow-right-short"} className={"range-picker-element"}/>
        {renderDateInput(second, false)}
        {readonly ? <span/> : <Button
            className={"datepicker-button range-picker-element"}
            icon={"calendar"}
            variant={"tertiary"}
            onClick={openCalendar}
        />}
  </div>;
})

RangePicker.defaultProps = {
    format: "YYYY-MM-DD",
    required: false,
    readonly: false,
    invalid: false,
    opened: false,
    manageOpened: false,
    manageInvalid: false,
    manageValue: false,
    onOpen: () => void 0,
    onInvalid: () => void 0,
    onValueSet: () => void 0,
    onValueChange: () => void 0,
    visible: true,
    disabled: false,
    value: {
        first: {
            onValueSet:  () => void 0,
            onInvalid:  () => void 0,
            onValueChange:  () => void 0
        },
        second: {
            onValueSet:  () => void 0,
            onInvalid:  () => void 0,
            onValueChange:  () => void 0
        }
    }
}

const dateInputShape = {
    value: propTypes.oneOfType([propTypes.string, propTypes.object]),
    readonly: propTypes.bool,
    disabled: propTypes.bool,
    invalid: propTypes.bool,

    placeholder: propTypes.string,
    name: propTypes.string,

    onValueSet: propTypes.func,
    onInvalid: propTypes.func,
    onValueChange: propTypes.func
}

RangePicker.propTypes = {
    name: propTypes.string,
    label: propTypes.string,
    value: propTypes.shape({
        first: propTypes.shape(dateInputShape),
        second: propTypes.shape(dateInputShape)
    }),

    min: propTypes.oneOfType([propTypes.string, propTypes.object]),
    max: propTypes.oneOfType([propTypes.string, propTypes.object]),

    format: propTypes.string,
    required: propTypes.bool,
    readonly: propTypes.bool,
    disabled: propTypes.bool,
    invalid: propTypes.bool,
    opened: propTypes.bool,
    manageOpened: propTypes.bool,
    manageInvalid: propTypes.bool,
    manageValue: propTypes.bool,
    message: propTypes.arrayOf(propTypes.shape({
        status: propTypes.oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
        content: propTypes.string,
        icon: propTypes.string,
        className: propTypes.object,
        iconSize: propTypes.number
    })),
    onOpen: propTypes.func,
    onInvalid: propTypes.func,
    onValueChange: propTypes.func,
    onValueSet: propTypes.func,
    visible: propTypes.bool,
    className: propTypes.oneOfType([propTypes.string, propTypes.object])
}

export default RangePicker