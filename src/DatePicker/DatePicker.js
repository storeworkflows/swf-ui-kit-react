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
        const {defaultDate} = this.props;
        let currentDateValue = (defaultDate) ? new Date(defaultDate) : null;

        this.state = {
            stringValue: currentDateValue,
            currentDate: currentDateValue,
            isOpenedCalendar: false
        }

        this.inputRef = null;
        this.openCalendar = this.openCalendar.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue({input}){
        console.log(input)
        const {format} = this.props;
        const {stringValue} = this.state;

        let separator = (format[2] === 'Y') ? format[4] : format[2];

        let isNumber = input>='0' && input <='9';
        // if(isNumber){
        //     if()
        // }

        this.setState((state)=>{return {stringValue: state.stringValue+input}})
    }


    openCalendar(){
        this.setState((state) => {
            return{isOpenedCalendar: !state.isOpenedCalendar}
        });
    }

    getDateString(date, format){

        let monthNumber = date.getMonth() + 1;
        let dayNumber = date.getDate();

        let month = monthNumber<10 ? `0${monthNumber}` : monthNumber;
        let day = dayNumber<10 ? `0${dayNumber}` : dayNumber;
        let year =date.getFullYear();

        return format.replace('MM', month).replace('DD', day).replace('YYYY', year);
    }

    componentDidMount() {
        if(this.inputRef && this.inputRef.current){
            let input = this.inputRef.current.querySelector("input");
            console.log("mount", input)
        }
    }


    render() {
        const {label, defaultDate, format} = this.props;
        const {stringValue, currentDate, isOpenedCalendar} = this.state


        let dateValue = (currentDate)
            ? this.getDateString(currentDate, format)
            : '';

         let separator = format[1];
         //let patternValue = `d{2}${separator}d{2}${separator}d{4}`
         console.log(separator);

        return (
            <>
                <style type="text/css">{styles}</style>
                <div ref = {el => this.inputRef = {current: el}}>
                    <Input
                        label={label}
                        value={stringValue}
                        onChange={(e)=> this.changeValue({ input: e.nativeEvent.data})}
                        placeholder={format}

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
                                    onSelected={({date}) => this.setState({currentDate: date})}
                                    defaultDate={(defaultDate) ? defaultDate : undefined}
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
    format: "MM.DD.YYYY"
}

DatePicker.propTypes = {
    label: propTypes.string,
    defaultDate: propTypes.number,
    format: propTypes.oneOf(GENERATE_FORMATS)
}

export default DatePicker
