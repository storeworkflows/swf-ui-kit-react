import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import styles from "./styles.scss"
import RadioOption from "./RadioOption.js"
import {RADIO_BUTTONS_LAYOUT} from "./constants";

class RadioButtons extends React.Component {
    constructor(props) {
        super(props);
        this.optionClicked = this.optionClicked.bind(this) ;

        this.state = {
            selectedValue: this.props.value
        }
    }

    optionClicked(option){
        const {manageValue, onChange} = this.props;
        if(manageValue)
            onChange(option)
        else
            this.setState({selectedValue: option.id});

    }

    renderValue(option, name){
        const {
            id,
            label,
            value,
            checked,
            readonly,
            disabled
        } = option;

        let isChecked = this.state.selectedValue ? this.state.selectedValue === id : checked
        let isHorizontal = this.props.layout === RADIO_BUTTONS_LAYOUT.horizontal;

        return (
            <RadioOption
                key={id}
                id = {id}
                label = {label}
                value = {value}
                checked = {isChecked}
                readonly = {readonly || this.props.readonly}
                disabled = {disabled || this.props.disabled}
                invalid = {this.props.invalid}
                name = {name}
                onChangeAction = {this.optionClicked}
                isHorizontal = {isHorizontal}
            />
        )
    }

    componentDidUpdate(){
        let selectedValue = this.props.value;
        if(this.props.manageValue && selectedValue!== this.state.selectedValue)
            this.setState({selectedValue: selectedValue});
    }

    render() {

        const {
            invalid,
            label,
            name,
            options,
            required
        } = this.props;

        return (
            <>
                <style type="text/css">{styles}</style>
                <div className={"radio-buttons-container"}>
                    <div className={classnames({
                                 "radio-buttons-header": true,
                                 "invalid": invalid
                             })}
                    >
                        { label && <span className={"radio-buttons-label"}>{label}</span>}
                        { required && <span className={"radio-buttons-required"}>*</span>}
                    </div>
                    <div className={"group-of-radio-buttons"}>
                        {options.map((option) => this.renderValue(option, name))}
                    </div>
                </div>
            </>
        );
    }
};

RadioButtons.defaultProps = {
    disabled: false,
    layout: RADIO_BUTTONS_LAYOUT.vertical,
    manageValue: false,
    options: [],
    readonly: false,
    required: false
};

RadioButtons.propTypes = {
    disabled: propTypes.bool,
    invalid: propTypes.bool,
    label: propTypes.string,
    layout: propTypes.oneOf(
        [RADIO_BUTTONS_LAYOUT.vertical, RADIO_BUTTONS_LAYOUT.horizontal]
    ),
    manageValue: propTypes.bool,
    name: propTypes.string,
    options: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string,
            label: propTypes.string,
            value: propTypes.string,
            checked: propTypes.bool,
            readonly: propTypes.bool,
            disabled: propTypes.bool
    })),
    readonly: propTypes.bool,
    required: propTypes.bool,
    value: propTypes.string,
    onChange: propTypes.func
}

export default RadioButtons