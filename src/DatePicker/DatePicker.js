import moment from "moment";
import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Popover from "../Popover/Popover";
import SmallCalendar from "../SmallCalendar/SmallCalendar";

import {addCharToDate, getErrorMessages, getErrorOnBoundaryValue} from "./utils";
import PropTypes from "prop-types";

const invalidFormatMess = {content: `Invalid date format`, icon: "exclamation-circle", delay: 5000}

class DatePicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stringValue: "",
            currentDate: null,
            isOpened: this.props.opened,
            isInvalid: false,
            errorMessages: []
        }

        this.inputRef = React.createRef();

        this.onBlur = this.onBlur.bind(this);
        this.renderInput = this.renderInput.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
        this.dateSelected = this.dateSelected.bind(this);
        this.invalidInput = this.invalidInput.bind(this);
        this.setDateFromProps = this.setDateFromProps.bind(this);
    }

    setDateFromProps() {
        const {value, format, min, max} = this.props;

        if (moment(value, format, true).isValid()) {
            let errors = getErrorMessages(value, format, min, max);
            this.invalidInput(errors, value);

            this.setState({
                stringValue: moment(value).format(format),
                currentDate: value
            })
        }
        else {
            this.setState({
                stringValue: value,
                currentDate: null
            });
        }
    }

    changeValue(e){
        e.preventDefault();
        let input = e.nativeEvent.data;

        const {format, onValueChange, onValueSet, min, max, manageValue} = this.props;
        const {stringValue} = this.state;
        let newDateString = addCharToDate(format, stringValue, input);

        if(!manageValue)
            this.setState({stringValue: newDateString})

        if (moment(newDateString, format, true).isValid()) {
            let errors = getErrorMessages(newDateString, format, min, max);
            this.invalidInput(errors, newDateString);

            if(!manageValue)
                this.setState({currentDate: newDateString});

            onValueSet({value: newDateString});
        } else if (newDateString.length === 0)
            onValueSet({value: ""});


        onValueChange({oldValue: stringValue, input: input, newValue: newDateString});
    }

    dateSelected(date){
        const {onValueChange, format, onValueSet, min, max, manageValue} = this.props;
        let dateInFormat =  moment(date).format(format);

        let errors = getErrorMessages(dateInFormat, format, min, max);
        this.invalidInput(errors, dateInFormat);


        if (errors.length === 0 && !manageValue)
            this.setState({
                currentDate: date,
                stringValue: dateInFormat,
                isOpened: false
            })

        onValueSet({value: dateInFormat});
        onValueChange({oldValue: this.state.stringValue, newValue: dateInFormat});
    }

    invalidInput(errors = [], date){
        const {manageInvalid, onInvalid} = this.props;
        let isInvalid = errors.length>0;

        if(!manageInvalid) {
            this.setState({
                isInvalid: isInvalid,
                errorMessages: errors
            });
        }
        onInvalid({isInvalid: errors.length>0, errors: errors, date: date});
    }

    openCalendar(event){
        const {manageOpened, onOpen, format} = this.props;
        const {isOpened, stringValue} = this.state;

        let openState = isOpened;
        let isValidStringDate = moment(stringValue, format).isValid();

        if(!manageOpened) {
            openState = !openState;

            if(isValidStringDate)
                this.setState({ currentDate: moment(stringValue, format).toDate()  })
            else
                this.setState({
                    stringValue: '',
                    currentDate: null
                });

            this.setState({ isOpened: openState });
        }

        onOpen({openState, event})
    }


    onBlur(e){
        const {stringValue} = this.state;
        const {format, min, max} = this.props;
        let sameParent = e.target?.parentElement === e.relatedTarget?.parentElement?.parentElement;

        if(!sameParent){
            let errors = getErrorMessages(stringValue, format, min, max);
            this.invalidInput(errors, stringValue);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {manageInvalid, manageOpened, manageValue, opened, invalid, value} = this.props
        const {isInvalid, isOpened} = this.state;

        if(manageInvalid && isInvalid !== invalid)
            this.setState({invalid: invalid})

        if(manageOpened && opened!==isOpened)
            this.setState({isOpened: opened});

        if(manageValue && (value!==prevProps.value))
            this.setDateFromProps();
    }

    componentDidMount() {
        this.setDateFromProps();

        if(this.inputRef && this.inputRef.current){

            let inputEl = this.inputRef.current.querySelector('input');
            inputEl.onclick = (e) =>
                inputEl.selectionStart = inputEl.selectionEnd =
                    (this.state.stringValue === null) ? 0 : this.state.stringValue.length;

            inputEl.onkeydown = (e) =>
                setTimeout(()=>{ inputEl.selectionStart = inputEl.selectionEnd =
                    (this.state.stringValue === null) ? 0 : this.state.stringValue.length; }, 0);
        }
    }

    renderInput(){
        const {label, format, message = [], required, name, className} = this.props;
        const {stringValue, isInvalid, errorMessages} = this.state

        let allMessages = errorMessages.concat(message);

        return  <Input
                label={label}
                placeholder={(label) ? "" : format}
                value={stringValue}
                name={name}
                manageInvalid={true}
                invalid = {isInvalid}
                onInvalid={(e) => this.invalidInput([e], stringValue)}
                onChange={this.changeValue}
                message = {allMessages}
                required={required}
                className={className}
                onBlur={this.onBlur}
            >
                <Input.End>
                    <Button
                        icon={"calendar"}
                        variant={"tertiary"}
                        onClick={this.openCalendar}
                    />
                </Input.End>
        </Input>
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

        let refExist = this.inputRef && this.inputRef.current;

        return (
            visible ?
                <div ref = {el => this.inputRef.current =  el}>
                    { this.renderInput() }
                    { refExist &&
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
    message: PropTypes.arrayOf(PropTypes.shape({
        status: PropTypes.oneOf(["yellow" , "red" , "green" , "blue" , "grey" , "grey-blue"]),
        content: PropTypes.string,
        icon: PropTypes.string,
        className: propTypes.object,
        iconSize: PropTypes.number
    })),
    onOpen: propTypes.func,
    onInvalid: propTypes.func,
    onValueChange: propTypes.func,
    onValueSet: propTypes.func,
    visible: propTypes.bool,
    className: propTypes.oneOfType([propTypes.string, propTypes.object])
}

export default DatePicker
