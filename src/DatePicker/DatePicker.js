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
        let {defaultDate} = this.props;
        let currentDateValue = (defaultDate) ? new Date(defaultDate) : null;

        this.state = {
            currentDate: currentDateValue,
            isOpenedCalendar: false
        }

        this.inputRef = null;
        this.openCalendar = this.openCalendar.bind(this);
    }


    openCalendar(){
        this.setState((state) => {
            return{isOpenedCalendar: !state.isOpenedCalendar}
        });
    }

    getDateString(date){
        let monthNumber = date.getMonth();
        let dayNumber = date.getDate();

        let month = monthNumber<10 ? `0${monthNumber}` : monthNumber;
        let day = dayNumber<10 ? `0${dayNumber}` : dayNumber;
        return `${month}/${day}/${date.getFullYear()}`;
    }


    render() {
        const {label, defaultDate} = this.props;
        const {currentDate, isOpenedCalendar} = this.state


        let dateValue = (currentDate)
            ? this.getDateString(currentDate)
            : '';

        return (
            <>
                <style type="text/css">{styles}</style>
                <div ref = {el => this.inputRef = {current: el}}>
                    <Input
                        label={label}
                        readonly={true}
                        value={dateValue}
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

DatePicker.defaultProps = {
    label: ""
}

DatePicker.propTypes = {
    label: propTypes.string,
    defaultDate: propTypes.number
}

export default DatePicker
