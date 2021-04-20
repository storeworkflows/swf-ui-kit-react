import moment from "moment";
import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Popover from "../Popover/Popover";
import SmallCalendar from "../SmallCalendar/SmallCalendar";

import {addCharToDate, getErrorOnBoundaryValue} from "./utils";
import PropTypes from "prop-types";

const invalidFormatMess = {content: `Invalid date format`, icon: "exclamation-circle", delay: 5000}

class DatePicker extends React.Component {

    constructor(props) {
        super(props);
        const {value, format, opened, invalid, manageInvalid, onInvalid} = this.props;


        let dateValue = value ? moment(value, format) : null;
        let isInvalidValue = (value) ? !dateValue.isValid() : false;
        let invalidValue = manageInvalid ? invalid : isInvalidValue;

        if(isInvalidValue)
            onInvalid(true)

        this.state = {
            stringValue: dateValue && dateValue.format(format),
            currentDate: value && !isInvalidValue ? dateValue.toDate() : null,
            isOpened: opened,
            isInvalid: invalidValue,
            errorMessages: invalidValue ? [invalidFormatMess] : []
        }

        this.inputRef = React.createRef();

        this.onBlur = this.onBlur.bind(this);
        this.renderInput = this.renderInput.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
        this.dateSelected = this.dateSelected.bind(this);
        this.invalidInput = this.invalidInput.bind(this);
        this.checkIsInvalid = this.checkIsInvalid.bind(this);
    }

    changeValue(e){
        e.preventDefault();
        let input = e.nativeEvent.data;
        const {format, manageValue, onValueChange, manageInvalid, onValueSet, min, max} = this.props;
        const {stringValue} = this.state;


      //  if(!manageValue) {
            let newDateString = addCharToDate(format, stringValue, input);

            if(moment(newDateString, format, true).isValid()) {
                let minError =  getErrorOnBoundaryValue(newDateString, min, format);
                let maxError = getErrorOnBoundaryValue(newDateString, max, format, false);

                if(minError || maxError) {
                    this.invalidInput(true);
                    this.setState({
                        errorMessages: [minError || maxError]
                    })
                } else{
                    this.invalidInput(false);
                    this.setState({
                        currentDate: newDateString,
                        errorMessages: []
                    });
                    onValueSet({value: newDateString});
                }
            }
        !manageValue && this.setState({stringValue: newDateString})
        onValueChange({oldValue: stringValue, input: input, newValue: newDateString});
       // } else
        //    onValueChange({oldValue: stringValue, input: input});
    }

    dateSelected(date){
        const {onValueChange, format, onValueSet, min, max} = this.props;
        let dateInFormat =  moment(date).format(format);

            let minError =  getErrorOnBoundaryValue(dateInFormat, min, format);
            let maxError = getErrorOnBoundaryValue(dateInFormat, max, format,  false);

            if(minError || maxError){
                this.invalidInput(true);
                this.setState({
                    errorMessages: [minError || maxError]
                })
            } else {
                this.invalidInput(false);
                this.setState({
                    currentDate: date,
                    stringValue: dateInFormat,
                    isOpened: false,
                    errorMessages: []
                })
            }

        onValueChange({oldValue: this.state.stringValue, newValue: dateInFormat});
        onValueSet({value: dateInFormat});
    }

    invalidInput(isInvalid){
        const {manageInvalid, onInvalid} = this.props;

        if(!manageInvalid) {
            this.setState({isInvalid: isInvalid});
            if(!isInvalid)
                this.setState({errorMessages: []});
        }
        onInvalid(isInvalid);
    }

    openCalendar(event){
        const {manageOpened, onOpen, format} = this.props;
        const {isOpened, stringValue} = this.state;

        let openState = isOpened;
        let isValidStringDate = moment(stringValue, format).isValid();

        if(!manageOpened) {
            openState = !openState;

            if(isValidStringDate)
                this.setState({
                    currentDate: moment(stringValue, format).toDate()
                })
            else
                this.setState({
                    stringValue: '',
                    currentDate: null
                });

            this.checkIsInvalid()
            this.setState({isOpened: openState});
        }

        onOpen({openState, event})
    }

    checkIsInvalid(){
        const {format, manageInvalid, min, max} = this.props;
        const {stringValue} = this.state;

        let isEmptyStr = !stringValue || stringValue.length < 1;
        let isValidValue = isEmptyStr || moment(stringValue, format, true).isValid();

        let errorMessages = [];
        if(!manageInvalid && !isValidValue)
            errorMessages = [invalidFormatMess]
        else if(isValidValue){
            let minError =  getErrorOnBoundaryValue(stringValue, min, format);
            let maxError = getErrorOnBoundaryValue(stringValue, max, format, false);

            let hasError = minError || maxError;
            if(hasError){
                isValidValue = false;
                errorMessages = [hasError];
            }
        }

        this.setState({errorMessages: errorMessages})
        this.invalidInput(!isValidValue)
    }

    onBlur(e){
        let sameParent = e.target?.parentElement === e.relatedTarget?.parentElement?.parentElement;

        if(!sameParent)
            this.checkIsInvalid();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {manageInvalid, manageOpened, manageValue, opened, invalid, value, format} = this.props
        const {isInvalid, isOpened, stringValue} = this.state;

        if(manageInvalid && isInvalid !== invalid)
            this.invalidInput(invalid)

        if(manageOpened && opened!==isOpened)
            this.setState({isOpened: opened});

        if(manageValue && (value!==prevProps.value))
        {
            let dateValue = value ? moment(value, format) : null;
            let newStr = dateValue && dateValue.format(format);

            let invalidValue = invalid || ( value && !manageInvalid && !dateValue.isValid());

            this.setState({
                stringValue: newStr,
                currentDate: dateValue?.isValid() ? dateValue.toDate() : null,
                invalid: invalidValue
            })
        }

    }

    componentDidMount() {
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
        const {label, format, message = [], required, name, className, min, max} = this.props;
        const {stringValue, isInvalid, errorMessages} = this.state

        let allMessages = errorMessages.concat(message);

        return  <Input
                label={label}
                placeholder={(label) ? "" : format}
                value={stringValue}
                name={name}
                manageInvalid={true}
                invalid = {isInvalid}
                onInvalid={() => this.invalidInput(true)}
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
    manageValueChange: false,
    manageValueSet: false,
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
    manageValueChange: propTypes.bool,
    manageValueSet: propTypes.bool,
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
