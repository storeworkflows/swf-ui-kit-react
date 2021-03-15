import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import styles from "./styles.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Popover from "../Popover/Popover";
import SmallCalendar from "../SmallCalendar/SmallCalendar";

class DatePicker extends React.Component {

    constructor(props) {
        super(props);
        const {value} = this.props;
        let currentDateValue = (value) ? new Date(value) : null;

        this.state = {
            stringValue: currentDateValue,
            currentDate: currentDateValue,
            isOpenedCalendar: false
        }

        this.inputRef = null;

        this.changeValue = this.changeValue.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
        this.dateSelected = this.dateSelected.bind(this);
    }

    changeValue({input}){
        console.log(input)
        const {pattern} = this.props;
        const {stringValue} = this.state;

        let isYearFirst = (pattern[0] === 'Y');
        let separator = isYearFirst ? pattern[4] : pattern[2];
        let currentPosition = stringValue.length;

        let isNumber = input>='0' && input <='9';
        if(isNumber){
           // if(currentPosition ===0 && )
        }

        this.setState((state)=>{return {stringValue: state.stringValue+input}})
    }

    dateSelected(date){
        this.setState({currentDate: date, stringValue: date})
    }

l
    openCalendar(){
        this.setState((state) => {
            return{isOpenedCalendar: !state.isOpenedCalendar}
        });
    }

    getDateString(date, pattern){

        let monthNumber = date.getMonth() + 1;
        let dayNumber = date.getDate();

        let month = monthNumber<10 ? `0${monthNumber}` : monthNumber;
        let day = dayNumber<10 ? `0${dayNumber}` : dayNumber;
        let year =date.getFullYear();

        return pattern.replace('MM', month).replace('DD', day).replace('YYYY', year);
    }

    componentDidMount() {
        if(this.inputRef && this.inputRef.current){
            let input = this.inputRef.current.querySelector("input");
            //console.log("mount", input)
        }
    }


    render() {
        const {label, value, pattern} = this.props;
        const {stringValue, currentDate, isOpenedCalendar} = this.state


        let dateValue = (currentDate)
            ? this.getDateString(currentDate, pattern)
            : '';

        let separator = (pattern[0] === 'Y') ? pattern[4] : pattern[2];
        let patternValue = `d{2}${separator}d{2}${separator}d{4}`
        // console.log(separator, patternValue);

        return (
            <>
                <style type="text/css">{styles}</style>
                <div ref = {el => this.inputRef = {current: el}}>
                    <Input
                        label={label}
                        value={dateValue}
                        //onChange={(e)=> this.changeValue({ input: e.nativeEvent.data})}
                        placeholder={pattern}
                        pattern={patternValue}
                        invalid = {true}
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
                            positionTarget={this.inputRef}
                            positions={[
                                {target: "bottom-center", content: "top-center"},
                                {target: "top-center", content: "bottom-center"},
                                {target: "center-end", content: "center-start"},
                                {target: "center-start", content: "center-end"},
                            ]}
                            hideTail={true}
                            manageOpened={true}
                            opened={isOpenedCalendar}
                        >
                            <Popover.Content>
                                <SmallCalendar
                                    onSelected={({date}) => this.dateSelected(date)}
                                    defaultDate={(value) ? value : undefined}
                                />
                            </Popover.Content>
                        </Popover>
                    }
                </div>
            </>
        )
    }
}


const GENERATE_FORMATS = () => {
    let result = [];
    let separators = [".", "/", "-"];

    separators.forEach( s => {
        result.push(`MM${s}DD${s}YYYY`);
        result.push(`MM${s}YYYY${s}DD`);
        result.push(`DD${s}MM${s}YYYY`);
        result.push(`DD${s}YYYY${s}MM`);
        result.push(`YYYY${s}DD${s}MM`);
        result.push(`YYYY${s}MM${s}DD`);
    })

    return result;
}

DatePicker.defaultProps = {
    label: undefined,
    pattern: "MM.DD.YYYY",
    mandatory: false,
    readonly: false
}

DatePicker.propTypes = {
    label: propTypes.string,
    value: propTypes.string,
    pattern: propTypes.oneOf(GENERATE_FORMATS),
    onValueChange: propTypes.func,
    mandatory: propTypes.bool,
    readonly: propTypes.bool
}

export default DatePicker
