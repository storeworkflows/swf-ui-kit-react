import moment from "moment";
import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Popover from "../Popover/Popover";
import SmallCalendar from "../SmallCalendar/SmallCalendar";

import {addCharToDate} from "./utils";
import PropTypes from "prop-types";

class DatePicker extends React.Component {

    constructor(props) {
        super(props);
        const {value, format, opened, invalid, manageInvalid, onInvalid} = this.props;

        let dateValue = value ? moment(value, format) : null;
        let isInvalidValue = (value) ? !dateValue.isValid() : false;;
        let invalidValue = manageInvalid ? invalid : isInvalidValue;

        if(isInvalidValue)
            onInvalid(true)

        this.state = {
            stringValue: dateValue && dateValue.format(format),
            currentDate: value && !isInvalidValue ? dateValue.toDate() : null,
            isOpened: opened,
            isInvalid: invalidValue
        }

        this.inputRef = null;


        this.renderInput = this.renderInput.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
        this.dateSelected = this.dateSelected.bind(this);
        this.invalidInput = this.invalidInput.bind(this);
    }

    changeValue(e){
        e.preventDefault();
        let input = e.nativeEvent.data;
        const {format, manageValue, onValueChange} = this.props;
        const {stringValue} = this.state;

        onValueChange({oldValue: stringValue, input: input});

        if(!manageValue) {
            let newDateString = addCharToDate(format, stringValue, input);

            if(moment(newDateString, format, true).isValid())
                this.setState({currentDate: newDateString});
            this.setState({stringValue: newDateString})
        }
    }

    dateSelected(date){
        const {manageValue, onValueChange, format} = this.props;
        let dateInFormat =  moment(date).format(format);

        if(!manageValue)
        {
            onValueChange({oldValue: this.state.stringValue, newValue: dateInFormat});
            this.setState({
                currentDate: date,
                stringValue: dateInFormat,
                isOpened: false
            })
        }
    }

    invalidInput(isInvalid){
        const {manageInvalid, onInvalid} = this.props;

        if(!manageInvalid)
            this.setState({isInvalid: isInvalid});
        onInvalid(isInvalid);
    }

    openCalendar(){
        const {manageOpened, onOpen, format} = this.props;
        const {isOpened, stringValue} = this.state;

        let openState = isOpened;
        let isValidStringDate = moment(stringValue, format).isValid();

        if(!manageOpened) {
            openState = !openState;

            if(isValidStringDate)
                this.setState({currentDate: moment(stringValue, format).toDate()})
            else
                this.setState( {
                    stringValue: '',
                    currentDate: null
                });

            this.setState({isOpened: openState});
        }

        onOpen(openState)
    }

    componentDidUpdate() {
        const {manageInvalid, manageOpened, manageValue, opened, invalid, value, format} = this.props
        const {isInvalid, isOpened, stringValue} = this.state;

        if(manageInvalid && isInvalid !== invalid)
            this.invalidInput(invalid)

        if(manageOpened && opened!==isOpened)
            this.setState({isOpened: opened});

        if(manageValue && value!==stringValue)
        {
            let dateValue = moment(value, format);
            let invalidValue = invalid || ( value && !manageInvalid && !dateValue.isValid());

            this.setState({
                stringValue: value,
                currentDate: dateValue.isValid() ? dateValue.toDate() : null,
                invalid: invalidValue
            })
        }

    }

    componentDidMount() {
        if(this.inputRef && this.inputRef.current){
            let inputEl = this.inputRef.current.querySelector('input');
            inputEl.onclick = (e) =>
                inputEl.selectionStart = inputEl.selectionEnd = this.state.stringValue.length;

            inputEl.onkeydown = (e) =>
                setTimeout(()=>{ inputEl.selectionStart = inputEl.selectionEnd = this.state.stringValue.length; }, 0);
        }
    }

    renderInput(){
        const {label, format, message, required, name, className} = this.props;
        const {stringValue, isInvalid} = this.state

        return (
            <Input
                label={label}
                placeholder={(label) ? "" : format}
                value={stringValue}
                name={name}
                manageInvalid={true}
                invalid = {isInvalid}
                onInvalid={() => this.invalidInput(true)}
                onChange={this.changeValue}
                message = {message}
                required={required}
                className={className}
            >
                <Input.End>
                    <Button
                        icon={"calendar"}
                        variant={"tertiary"}
                        onClick={this.openCalendar}
                    />
                </Input.End>
            </Input>
        )
    }


    render() {
        const {visible} = this.props;
        const {currentDate, isOpened} = this.state

        const calendarPositions = [
            {target: "bottom-end", content: "top-end"},
            {target: "top-end", content: "bottom-end"},
            {target: "bottom-center", content: "top-center"},
            {target: "top-center", content: "bottom-center"},
            {target: "center-end", content: "center-start"},
            {target: "center-start", content: "center-end"},
        ]

        return (
            visible ?
            <>
                <div ref = {el => this.inputRef = {current: el}}>
                    { this.renderInput() }
                    { this.inputRef &&
                        <Popover
                            hideTail={true}
                            manageOpened={true}
                            opened={isOpened}
                            positions={calendarPositions}
                            positionTarget={this.inputRef}
                            onOuterPopoverClicked={this.openCalendar}
                        >
                            <Popover.Content>
                                <SmallCalendar
                                    onSelected={({date}) => this.dateSelected(date)}
                                    openedDate={currentDate}
                                />
                            </Popover.Content>
                        </Popover>
                    }
                </div>
            </>
            : null
        )
    }
}

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
    onValueChange: () => void 0,
    visible: true,
    className: {}
}

DatePicker.propTypes = {
    name: propTypes.string,
    label: propTypes.string,
    value: propTypes.string,
    format: propTypes.string,
    required: propTypes.bool,
    readonly: propTypes.bool,
    invalid: propTypes.bool,
    opened: propTypes.bool,
    manageOpened: propTypes.bool,
    manageInvalid: propTypes.bool,
    manageValue: propTypes.bool,
    message: PropTypes.arrayOf(PropTypes.shape({
        status: PropTypes.oneOf(["critical", "warning", "positive", "info", "suggestion"]),
        content: PropTypes.string,
        icon: PropTypes.string,
        className: propTypes.object,
        iconSize: PropTypes.number
    })),
    onOpen: propTypes.func,
    onInvalid: propTypes.func,
    onValueChange: propTypes.func,
    visible: propTypes.bool,
    className: propTypes.oneOfType([propTypes.string, propTypes.object])
}

export default DatePicker
