import moment from "moment";
import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import styles from "./styles.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Popover from "../Popover/Popover";
import SmallCalendar from "../SmallCalendar/SmallCalendar";

import {addCharToDate} from "./utils";

class DatePicker extends React.Component {

    constructor(props) {
        super(props);
        const {value, format, opened, invalid, manageInvalid} = this.props;

        let dateValue = moment(value, format);
        let invalidValue = invalid || ( value && !manageInvalid && !dateValue.isValid());

        this.state = {
            stringValue: value,
            currentDate: dateValue.isValid() ? dateValue.toDate() : null,
            isOpened: opened,
            isInvalid: invalidValue
        }

        this.inputRef = null;

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
            this.setState({stringValue: newDateString})
        }
    }

    dateSelected(date){
        const {manageValue, onValueChange} = this.props;
        let dateInFormat =  moment(date).format(this.props.format);

        if(!manageValue)
        {
            onValueChange({oldValue: this.state.stringValue, newValue: dateInFormat});
            this.setState({
                currentDate: date,
                stringValue: dateInFormat
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
            this.openCalendar();
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


    render() {
        const {label, format, message, required} = this.props;
        const {stringValue, currentDate, isOpened, isInvalid} = this.state

        const calendarPositions = [
            {target: "bottom-center", content: "top-center"},
            {target: "top-center", content: "bottom-center"},
            {target: "center-end", content: "center-start"},
            {target: "center-start", content: "center-end"},
        ]

        return (
            <>
                <style type="text/css">{styles}</style>
                <div ref = {el => this.inputRef = {current: el}}>
                    <Input
                        label={label}
                        placeholder={format}
                        value={stringValue}
                        manageInvalid={true}
                        invalid = {isInvalid}
                        onInvalid={() => this.invalidInput(true)}
                        onChange={(e) => this.changeValue(e)}
                        message = {message}
                        required={required}
                    >
                        <Input.End>
                            <Button
                                icon={"calendar"}
                                variant={"tertiary"}
                                onClick={() => this.openCalendar()}
                            />
                        </Input.End>
                    </Input>
                    { this.inputRef &&
                        <Popover
                            hideTail={true}
                            manageOpened={true}
                            opened={isOpened}
                            positions={calendarPositions}
                            positionTarget={this.inputRef}
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
        )
    }
}

DatePicker.defaultProps = {
    label: undefined,
    format: "MM.DD.YYYY",
    value: "",
    required: false,
    readonly: false,
    invalid: false,
    opened: false,
    manageOpened: false,
    manageInvalid: false,
    manageValue: false,
    onOpen: () => void 0,
    onInvalid: () => void 0,
    onValueChange: () => void 0
}

DatePicker.propTypes = {
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
    message: propTypes.arrayOf(propTypes.shape({
        status: propTypes.oneOf(["critical", "warning", "positive", "info", "suggestion"]),
        content: propTypes.string,
        icon: propTypes.string
    })),
    onOpen: propTypes.func,
    onInvalid: propTypes,
    onValueChange: propTypes.func,
}

export default DatePicker
