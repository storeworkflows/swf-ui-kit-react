import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import RadioOption from "./RadioOption.js"
import {RADIO_BUTTONS_LAYOUT} from "./constants";

class RadioButtons extends React.Component {
    constructor(props) {
        super(props);
        this.optionClicked = this.optionClicked.bind(this);
        this.optionInvalid = this.optionInvalid.bind(this);

        this.state = {
            selectedValue: this.props.value,
            isInvalid: this.props.invalid
        }
    }

    optionClicked(option){
        const {manageValue, onChange} = this.props;
        if(manageValue)
            onChange(option)
        else
            this.setState({selectedValue: option.id});
    }

    optionInvalid(){
        const {manageInvalid, onInvalid} = this.props;
        if(manageInvalid)
            onInvalid()
        else
            this.setState({isInvalid: true});
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
                required = {this.props.required}
                invalid = {this.state.isInvalid}
                name = {name}
                onChangeAction = {this.optionClicked}
                onInvalidAction = {this.optionInvalid}
                isHorizontal = {isHorizontal}
            />
        )
    }

    componentDidUpdate(){
        let {value, invalid, manageValue, manageInvalid} = this.props;

        if(manageValue && value!== this.state.selectedValue)
            this.setState({selectedValue: value});

        if(manageInvalid && invalid!== this.state.isInvalid)
            this.setState({isInvalid: invalid});
    }

    render() {

        const {
            label,
            name,
            options,
            required
        } = this.props;

        return (
            <>
                <div className={"radio-buttons-container"}>
                    <div className={classnames({
                                 "radio-buttons-header": true,
                                 "invalid": this.state.isInvalid
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
    required: false,
    manageInvalid: false
};

RadioButtons.propTypes = {
    disabled: propTypes.bool,
    invalid: propTypes.bool,
    label: propTypes.string,
    layout: propTypes.oneOf(
        [RADIO_BUTTONS_LAYOUT.vertical, RADIO_BUTTONS_LAYOUT.horizontal]
    ),
    manageValue: propTypes.bool,
    manageInvalid: propTypes.bool,
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
    onChange: propTypes.func,
    onInvalid: propTypes.func
}

export default RadioButtons