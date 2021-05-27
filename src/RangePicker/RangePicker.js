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
import RangeCalendar from "../SmallCalendar/Renge Calendar";
import moment from "moment";
import {addCharToDate, getErrorMessages} from "../DatePicker/utils";
import {getErrors} from "./utils";


const RangePicker = React.forwardRef((props, ref) => {
    const {
        opened, format, min, max, visible, invalid,
        manageValue, onValueChange, onValueSet,
        manageInvalid, onInvalid, name,
        manageOpened, onOpen, label, required, readonly, disabled,
        className, value: {first, second}
    } = props;

    const targetRef = useRef(null)

    const [errorMessages, setErrorMessages] = useState([]);
    const [focused, setFocused] = useState(false);
    const [isInvalid, setIsInvalid] = useState(invalid);
    const [isOpened, setIsOpened] = useState(opened);

    const [selectedDates, setSelectedDate] = useState({start: first.value, end: second.value});
    const [isFirstSelecting, setIsFirstSelecting] = useState(true);

    const invalidValue = manageInvalid ? invalid : isInvalid;
    const openedFinal = manageOpened ? opened : isOpened;

    const setValue = (isFirst, updatedValue) => {
        onValueSet(updatedValue);
        isFirst
            ? first.onValueSet(updatedValue.start)
            : second.onValueSet(updatedValue.end)
    }

    const changeValue = (e, isFirst) => {
        e.preventDefault();
        let input = e.nativeEvent.data;

        const value = isFirst ? selectedDates.start : selectedDates.end;
        const strValue = value ? moment(value).format(format) : "";

        let newValue = addCharToDate(format, strValue, input);
        console.log(newValue)
        let updatedDates = isFirst
            ? { start: newValue,
                end: selectedDates.end}
            : { start: selectedDates.start,
                end: newValue};

        !manageValue && setSelectedDate(updatedDates);

        if (!newValue.length) {
            setValue(isFirst, updatedDates);
            invalidInput([], "");
        } else if(moment(newValue, format, true).isValid()){
            let errors = getErrorMessages(newValue, format, min, max);
            invalidInput(errors, newValue);
            !errors.length && setValue(isFirst, updatedDates);
        }

        onValueChange({oldValue: strValue, input, newValue});
    }

    const onSelected = ({updated}) => {

        !manageValue && setSelectedDate({
            start: moment(updated.startDay).format(format),
            end: moment(updated.endDay).format(format)
        });
        setValue(isFirstSelecting, updated);

        if(isFirstSelecting && !updated.endDay)
            setIsFirstSelecting(false);
        else if(!isFirstSelecting && !updated.startDay)
            setIsFirstSelecting(true);
        else
            openCalendar();
    }

    const invalidInput = (errors = [], selectedDates) => {
        let isInvalidCurrent = errors.length > 0;

        if (!manageInvalid) {
            setIsInvalid(isInvalidCurrent);
            setErrorMessages(errors);
        }

        if (!_.isEqual(errorMessages.sort(), errors.sort()) || (isInvalidCurrent !== invalidValue))
            onInvalid({
                isInvalid: isInvalidCurrent,
                errors, selectedDates
            });
    }

    const openCalendar = () => {
        !manageOpened && setIsOpened(!openedFinal)
        onOpen(manageOpened ? opened : !isOpened);

        let errors = getErrors(selectedDates, format, min, max);
        invalidInput(errors, selectedDates);
    }

    const onFocused = (isFirst) => {
        setFocused(true);
        setIsFirstSelecting(isFirst);
    }


    const renderRangeCalendar = () => {

        const calendarPositions = [
            {target: "bottom-end", content: "top-end"},
            {target: "top-end", content: "bottom-end"},
            {target: "bottom-center", content: "top-center"},
            {target: "top-center", content: "bottom-center"},
            {target: "center-end", content: "center-start"},
            {target: "center-start", content: "center-end"},
        ]
        const nextToEnd =  selectedDates.end && moment(selectedDates.end).add(-1, "month").toDate();
        const openedDate = isFirstSelecting ? selectedDates.start : nextToEnd;
        const popoverTarget = targetRef?.current

        return popoverTarget && <Popover
                        hideTail
                        manageOpened
                        opened={openedFinal}
                        positions={calendarPositions}
                        positionTarget={{current: popoverTarget}}
                        onOuterPopoverClicked={openCalendar}
                    >
                        <Popover.Content>
                            <RangeCalendar
                                 openedDate={openedDate ? new Date(openedDate) : new Date()}
                                 onSelected={onSelected}
                                 startDay={new Date(selectedDates.start)}
                                 endDay={new Date(selectedDates.end)}
                                 isFirstSelecting={isFirstSelecting}
                                 manageSelected
                            />
            </Popover.Content>
        </Popover>
    }



    const renderDateInput = (dateValue, isFirst = true) => {
        const inputClasses = classnames({
            "date-input-control": true,
            "--invalid": invalid,
            "--readonly": readonly,
            "--focus": (focused || openedFinal) && (isFirst === isFirstSelecting)
        })

        const value = isFirst ? selectedDates.start : selectedDates.end;

        return <input
            className={inputClasses}
            placeholder={ dateValue.placeholder || format}
            value={value}
            name={dateValue.name || name}
            aria-required={required}
            aria-invalid={dateValue.invalid || invalid}
            onInvalid={(e) => invalidInput(e, dateValue, onInvalid)}
            onChange={e => changeValue(e, isFirst)}
            max={max}
            min={min}
            required={required}
            onBlur={() => setFocused(false)}
            onFocus={() => onFocused(isFirst)}
            readOnly={dateValue.readonly || readonly}
            disabled={dateValue.disabled || disabled}

        />
    }

    const containerStyles = classnames(
        "range-picker",
        "swf-form-group",
        className, {
            "--focused": focused || openedFinal,
            "--readonly": readonly,
            "--invalid": invalid
        });

    const labelClasses = classnames("inp-label", {"--readonly": readonly});

    return visible && <div ref={el => {ref = el; targetRef.current = el;}}
                className={containerStyles}>
        <RequiredLabel
            className={labelClasses}
            required={required}
            invalid={invalid}
            label={label}
            htmlFor={name}
        />
        {renderDateInput(first)}
        <Icon icon={"arrow-right-short"} className={"range-picker-element"}/>
        {renderDateInput( second, false)}
        {readonly ? <span/> : <Button
            className={"datepicker-button range-picker-element"}
            icon={"calendar"}
            variant={"tertiary"}
            onClick={openCalendar}
        />}
        {renderRangeCalendar()}
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