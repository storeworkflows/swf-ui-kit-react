import moment from "moment";
import * as React from "react";
import propTypes from "prop-types";
import {useEffect, useRef, useState} from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Popover from "../Popover/Popover";
import SmallCalendar from "../SmallCalendar/SmallCalendar";

import {addCharToDate, getErrorMessages} from "./utils";

const DatePicker = React.forwardRef((props, ref) => {

    const {
        opened, value, format, min, max, visible, invalid,
        manageValue, onValueChange, onValueSet,
        manageInvalid, onInvalid,
        manageOpened, onOpen
    } = props;

    const [dateValue, setDateValue] = useState(value);
    const [isOpened, setIsOpened] = useState(opened);
    const [isInvalid, setIsInvalid] = useState(invalid);
    const [errorMessages, setErrorMessages] = useState([]);

    const inputRef = useRef(null);

    const invalidValue = manageInvalid ? invalid : isInvalid;
    const openedValue = manageOpened ? opened : isOpened;

    const setDateFromProps = () => {
        if(moment(value, format, true).isValid()){
            let errors = getErrorMessages(value, format, min, max);
            invalidInput(errors, value);
            setDateValue( moment(value).format(format));
        } else
            setDateValue(value);
    }

    const changeValue = (e) => {
        e.preventDefault();
        let input = e.nativeEvent.data;
        let newValue = addCharToDate(format, dateValue, input);

        !manageValue && setDateValue(newValue)

        if (!newValue.length) {
            onValueSet({value: ""});
            invalidInput([], "");
        } else if(moment(newValue, format, true).isValid()){
            let errors = getErrorMessages(newValue, format, min, max);
            invalidInput(errors, newValue);

            !errors.length && onValueSet({value: newValue});
        }

        onValueChange({oldValue: dateValue, input, newValue});
    }

    const dateSelected = (date) => {
        let newValue = moment(date).format(format);

        let errors = getErrorMessages(newValue, format, min, max);
        invalidInput(errors, newValue);

        !manageValue && setDateValue(newValue);

        !errors.length && onValueSet({value: newValue});
        onValueChange({oldValue: dateValue, newValue});
    }

    const invalidInput = (errors = [], date) => {
        let isInvalidCurrent = errors.length > 0;

        if (!manageInvalid) {
            setIsInvalid(isInvalidCurrent);
            setErrorMessages(errors);
        }

        if (!_.isEqual(errorMessages.sort(), errors.sort()) || (isInvalidCurrent !== invalidValue))
            onInvalid({
                isInvalid: isInvalidCurrent,
                errors, date
            });
    }

    const openCalendar = (e, onFocusClose) => {
        if (!onFocusClose || openedValue) {
            let openState = openedValue;

            if (!manageOpened) {
                openState = !openedValue;
                setIsOpened(openState)

                let isValidStringDate = moment(dateValue, format).isValid();
                !isValidStringDate && setDateValue('');
            }

            onOpen({openState})
            if (!onFocusClose && !openState) {
                let errors = getErrorMessages(dateValue, format, min, max);
                invalidInput(errors, dateValue);
            }
       }
    }

    const onBlur = (e) => {
        let sameParent = e.target?.parentElement === e.relatedTarget?.parentElement?.parentElement;

        if (!sameParent) {
            let errors = getErrorMessages(dateValue, format, min, max);
            invalidInput(errors, dateValue);
        }
    }

    useEffect(() => manageValue && setDateFromProps(), [value]);

    useEffect(() => {
        setDateFromProps();
        if(inputRef?.current) {

            let inputEl = inputRef.current.querySelector('input');
            inputEl.onclick = () =>
                inputEl.selectionStart = inputEl.selectionEnd = inputEl.value.length;

            inputEl.onkeydown = () =>
                setTimeout(() =>
                    inputEl.selectionStart = inputEl.selectionEnd = inputEl.value.length, 0);
        }
    }, [])

    const renderInput = () => {
        const {label, message = [], required, readonly, name, className} = props;
        let allMessages = errorMessages.concat(message);
        let dateStr = dateValue.toString();

        return <Input
            label={label}
            placeholder={ label ? "" : format}
            value={dateStr}
            name={name}
            manageInvalid={true}
            invalid={invalidValue}
            onInvalid={(e) => invalidInput([e], dateValue)}
            onChange={changeValue}
            onFocus={(e) => openCalendar(e, true)}
            message={allMessages}
            required={required}
            className={className}
            onBlur={onBlur}
            readonly={readonly}
            manageValue={true}
        >
            <Input.End>
                {readonly ? <span/> : <Button
                    className={"datepicker-button"}
                    icon={"calendar"}
                    variant={"tertiary"}
                    onClick={openCalendar}
                />}
            </Input.End>
        </Input>
    }

    const calendarPositions = [
        {target: "bottom-end", content: "top-end"},
        {target: "top-end", content: "bottom-end"},
        {target: "bottom-center", content: "top-center"},
        {target: "top-center", content: "bottom-center"},
        {target: "center-end", content: "center-start"},
        {target: "center-start", content: "center-end"},
    ]

    let popoverTarget = inputRef?.current?.getElementsByClassName("input-group")[0]
    return (
        visible ?
            <div ref={el => inputRef.current = el}>
                {renderInput()}
                {popoverTarget &&
                <Popover
                    hideTail={true}
                    manageOpened={true}
                    opened={openedValue}
                    positions={calendarPositions}
                    positionTarget={{current: popoverTarget}}
                    onOuterPopoverClicked={openCalendar}
                >
                    <Popover.Content>
                        <SmallCalendar
                            onSelected={({date}) => dateSelected(date)}
                            openedDate={dateValue}
                        />
                    </Popover.Content>
                </Popover>
                }
            </div>
            : null
    )

});

DatePicker.defaultProps = {
    value: new Date(),
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
    visible: true
}

DatePicker.propTypes = {
    name: propTypes.string,
    label: propTypes.string,
    value: propTypes.oneOfType([propTypes.string, propTypes.object]),

    min: propTypes.oneOfType([propTypes.string, propTypes.object]),
    max: propTypes.oneOfType([propTypes.string, propTypes.object]),

    format: propTypes.string,
    required: propTypes.bool,
    readonly: propTypes.bool,
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

export default DatePicker
