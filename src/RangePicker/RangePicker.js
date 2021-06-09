import moment from "moment";
import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import {useCallback, useEffect, useRef, useState} from "react";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import Popover from "../Popover/Popover";
import RequiredLabel from "../RequiredLabel/RequiredLabel";
import RangeCalendar from "../SmallCalendar/Renge Calendar";

import {getErrors} from "./utils";
import {addCharToDate} from "../DatePicker/utils";
import InfoMessage from "../InfoMessage/InfoMessage";


const RangePicker = React.forwardRef((props, ref) => {
    const {
        opened, format, min, max, visible, invalid,
        manageValue, onValueChange, onValueSet,
        manageInvalid, onInvalid, name,
        manageOpened, onOpen, label, required, readonly, disabled,
        className, value: {start, end}, message
    } = props;

    const [errorMessages, setErrorMessages] = useState([]);
    const [focused, setFocused] = useState(false);
    const [isInvalid, setIsInvalid] = useState(invalid);
    const [openedDate, setOpenedDate] = useState(null);

    const [selectedDates, setSelectedDate] = useState({start: start.value, end: end.value});
    const [isFirstSelecting, setIsFirstSelecting] = useState(true);
    const [isOpenedInFirst, setIsOpenedInFirst] = useState(true);

    const invalidValue = manageInvalid ? invalid : isInvalid;
    const targetRef = useRef(null);

    useEffect(() => invalidInput(selectedDates), [openedDate])

    useEffect(() => !focused && invalidInput(selectedDates), [focused])

    useEffect(() => manageValue && setDateFromProps(), [manageValue, start, end, format])

    useEffect(() => {
        if (manageOpened)
            opened ? changeOpenedDate() : setOpenedDate(null);
    }, [manageOpened, opened])

    useEffect(() => {
        setDateFromProps();
        opened && changeOpenedDate();
    }, [])

    const changeOpenedDate = () => {
        const isStartOpen = !start.disabled && !start.readonly
        setIsOpenedInFirst(true)
        onFocused(isStartOpen);

        const openedDate =  selectedDates.start && isStartOpen ? selectedDates.start : selectedDates.end;
        setOpenedDate(openedDate ? new Date(openedDate) : new Date());
    }

    const setDateFromProps = useCallback(() => {
        const startValue = start.value;
        const endValue = end.value;

        if (moment(startValue, format, true).isValid() && moment(endValue, format, true).isValid()) {
            setSelectedDate({
                start: moment(startValue).format(format),
                end: moment(endValue).format(format)
            });
        } else {
            const valueToSet = {start: startValue, end: endValue};
            setSelectedDate(valueToSet);
        }
    }, [start, end, format])

    const actAction = (isFirst, action, startParam, endParam) => {
        isFirst
            ? start[action] && start[action](startParam)
            : end[action] && end[action](endParam)
    }

    const changeSelectedValue = (isFirst, updatedValue, input) => {
        !manageValue && setSelectedDate(updatedValue);
        onValueChange({oldValue: selectedDates, input, updatedValue, isFirstSelecting});

        actAction(isFirst, 'onValueChange',
            {oldValue: selectedDates.start, input, updatedValue: updatedValue.start},
            {oldValue: selectedDates.end, input, updatedValue: updatedValue.end})
    }

    const setValue = (isFirst, updatedValue) => {
        onValueSet(updatedValue);
        actAction(isFirst, 'onValueSet', updatedValue.start, updatedValue.end)
    }

    const changeValue = (e, isFirst) => {
        e.preventDefault();
        const input = e.nativeEvent.data;
        const value = isFirst ? selectedDates.start : selectedDates.end;
        let newValue = addCharToDate(format, value, input);

        let updatedDates = isFirst
            ? {start: newValue, end: selectedDates.end}
            : {start: selectedDates.start, end: newValue};

        changeSelectedValue(isFirst, updatedDates, input);

        if (!newValue.length) {
            setValue(isFirst, updatedDates);
            invalidInput();
        } else if (moment(newValue, format, true).isValid()) {
            setValue(isFirst, updatedDates);
            invalidInput(updatedDates);
        }

    }

    const onSelected = ({updated}) => {
        const endValue = isOpenedInFirst ? "" : (updated.end && moment(updated.end).format(format))
        const updatedDates = {
            start: updated.start && moment(updated.start).format(format),
            end: endValue
        }

        isOpenedInFirst && setIsOpenedInFirst(false);
        changeSelectedValue(isFirstSelecting, updatedDates);
        setValue(isFirstSelecting, updatedDates);

        if (isFirstSelecting && !updatedDates.end)
            setIsFirstSelecting(false);
        else if (!isFirstSelecting && !updatedDates.start)
            setIsFirstSelecting(true);
        else
            openCalendar();
    }

    const invalidInput = (selectedDates) => {
        let errors = selectedDates ? getErrors(selectedDates, format, min, max) : [];
        let isInvalidCurrent = errors.length > 0;

        if (!manageInvalid) {
            setIsInvalid(isInvalidCurrent);
            setErrorMessages(errors);
        }

        if (!_.isEqual(errorMessages.sort(), errors.sort()) || (isInvalidCurrent !== invalidValue)) {
            const onInvalidObj = {isInvalid: isInvalidCurrent, errors, selectedDates};
            onInvalid(onInvalidObj);
            actAction(isFirstSelecting, 'onInvalid', onInvalidObj, onInvalidObj)
        }
    }

    const openCalendar = () => {
        const isOpened = Boolean(openedDate)

        if (!manageOpened) {
            isOpened
                ? setOpenedDate(null)
                : changeOpenedDate()
            onOpen(!isOpened)
        } else
            onOpen(isOpened)
    }

    const onFocused = (isFirst) => {
        setFocused(true);
        setIsFirstSelecting(isFirst);
    }

    const renderRangeCalendar = () => {

        const calendarPositions = [
            {target: "bottom-end", content: "top-end"},
            {target: "bottom-end", content: "top-center"},
            {target: "top-end", content: "bottom-end"},
            {target: "bottom-center", content: "top-center"},
            {target: "top-center", content: "bottom-center"},
            {target: "center-end", content: "center-start"},
            {target: "center-start", content: "center-end"},
        ]

        const popoverTarget = targetRef?.current

        return popoverTarget && Boolean(openedDate) &&  <Popover
            hideTail
            manageOpened
            opened={Boolean(openedDate)}
            positions={calendarPositions}
            positionTarget={{current: popoverTarget}}
            onOuterPopoverClicked={openCalendar}
        >
            <Popover.Content>
                <RangeCalendar
                    openedDate={openedDate}
                    onSelected={onSelected}
                    startDay={selectedDates.start}
                    endDay={selectedDates.end}
                    isFirstSelecting={isFirstSelecting}
                    manageSelected
                    addDisabled={!isFirstSelecting}
                />
            </Popover.Content>
        </Popover>
    }


    const renderDateInput = (dateValue, isFirst = true) => {
        const inputClasses = classnames({
            "date-input-control": true,
            "--invalid": invalid,
            "--readonly": readonly,
            "--focus": (focused || openedDate) && (isFirst === isFirstSelecting)
        })

        const value = isFirst ? selectedDates.start : selectedDates.end;
        const canFocus = !(Boolean(openedDate) && isOpenedInFirst)

        return <input
            className={inputClasses}
            placeholder={dateValue.placeholder || format}
            value={value || ""}
            name={dateValue.name || name}
            aria-required={required}
            aria-invalid={dateValue.invalid || invalid}
            onInvalid={(e) => invalidInput(e, dateValue, onInvalid)}
            onChange={e => changeValue(e, isFirst)}
            max={max}
            min={min}
            required={required}
            onBlur={() => setFocused(false)}
            onFocus={() => canFocus && onFocused(isFirst)}
            readOnly={dateValue.readonly || readonly}
            disabled={dateValue.disabled || disabled}
        />
    }

    const renderMessages = () => {
        const allMessages = errorMessages.concat(message);
        if (!allMessages)
            return;

        return allMessages.map((el, index) => el &&
            <InfoMessage
                {...el}
                key={index}
            />)
    }

    const containerStyles = classnames(
        "range-picker",
        "swf-form-group",
        className, {
            "--focused": focused || openedDate,
            "--readonly": readonly,
            "--invalid": invalid
        });

    const labelClasses = classnames("inp-label", {"--readonly": readonly});

    return visible && <div ref={ref} className={"range-picker-container"}>
        <div className={containerStyles} ref={targetRef}>
            <RequiredLabel
                className={labelClasses}
                required={required}
                invalid={invalid}
                label={label}
                htmlFor={name}
            />
            {renderDateInput(start)}
            <div className={"range-picker-element"}>
            <Icon icon={"arrow-right-short"} />
            </div>
            {renderDateInput(end, false)}
            {readonly ? <span/> : <Button
                className={"datepicker-button range-picker-element"}
                icon={"calendar"}
                variant={"tertiary"}
                onClick={openCalendar}
            />}
        </div>
        {renderRangeCalendar()}
        {renderMessages()}
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
    value: {}
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
        start: propTypes.shape(dateInputShape),
        end: propTypes.shape(dateInputShape)
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