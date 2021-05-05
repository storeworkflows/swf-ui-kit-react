import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import RadioOption from "./RadioOption.js"
import {RADIO_BUTTONS_LAYOUT} from "./constants";
import Icon from "../Icon/Icon";
import RequiredLabel from "../RequiredLabel/RequiredLabel";

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
        const {manageValue, onChange, readonly} = this.props;
        if(!manageValue)
            !readonly && this.setState({selectedValue: option.id});
        !readonly && onChange(option)
    }

    optionInvalid(e){
        const {manageInvalid, onInvalid} = this.props;
        if(!manageInvalid)
            this.setState({isInvalid: true});
        onInvalid(e)
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
            required,
            visible,
            className,
            labelClassName,
            invalid
        } = this.props;

        return (
            visible ?
            <>
                <div className={classnames(className, "radio-buttons-container")}>
                    <div className={classnames({
                                 "radio-buttons-header": true,
                                 "invalid": this.state.isInvalid
                             })}
                    >
                        {(label || required) &&
                            <RequiredLabel className={labelClassName}
                                           invalid={invalid}
                                           required={required}
                                           label={label}
                            />
                        }
                    </div>
                    <div className={"group-of-radio-buttons"}>
                        {options.map((option) => this.renderValue(option, name))}
                    </div>
                </div>
            </>
                : null
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
    manageInvalid: false,
    visible: true,
    onChange: () => void 0,
    onInvalid: () => void 0,
    className: {},
    labelClassName: {}
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
    onInvalid: propTypes.func,
    visible: propTypes.bool,
    className: propTypes.object,
    labelClassName: propTypes.object
}

export default RadioButtons