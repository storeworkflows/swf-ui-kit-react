import * as React from "react";
import classnames from "classnames";

import PropTypes from "prop-types";
import findByType, {createSubComponent} from "../utils/findByType";
import {noop} from "../utils";
import propTypes from "prop-types";
import Icon from "../Icon/Icon";
import InfoMessage from "../InfoMessage/InfoMessage";
import _ from "lodash"

const Start = () => null;
const End = () => null;

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this)
        // this.onFocus = this.onFocus.bind(this)
        // this.onInput = this.onInput.bind(this)
        this.onInvalid = this.onInvalid.bind(this)

        this.state = {
            checked: this.props.checked,
            invalid: this.props.invalid,
            hasStart: false,
            hasEnd: false,
            focused: false,
            value: this.props.value
        }
    };

    renderStart() {
        const {children, readonly, disabled} = this.props;
        const start = findByType(children, "Start");
        const classes = classnames({
            "form-control--start": true,
            "--invalid": this.state?.invalid,
            "--focused": this.state?.focused,
            "--readonly": readonly,
            "--disabled": disabled
        })

        if (!start || start.length < 1) return null;

        !this.state.hasStart && this.setState({hasStart: true})

        return <div className={classes}>{start}</div>
    }

    renderEnd() {
        const {children, readonly, disabled} = this.props;
        const end = findByType(children, "End");
        const classes = classnames({
            "form-control--end": true,
            "--invalid": this.state?.invalid,
            "--readonly": readonly,
            "--disabled": disabled,
            "--focused": this.state?.focused,
        })

        if (!end || end.length<1) return null;

        !this.state.hasEnd && this.setState({hasEnd: true})

        return <div className={classes}>{end}</div>
    }

    //type is one of "onBlur", "onInput", "onFocus"
    onEvent(event, type, value = this.state.value) {
        const {readonly, disabled} = this.props;
        let canChange = !readonly && !disabled;

        if(!canChange) return;

        this.setState({ value, focused: type !== "onBlur" });
        this.props[type](event);
    }


    onInvalid(e){
        const {manageInvalid, onInvalid} = this.props;

        if(!manageInvalid)
            this.setState({invalid: true});
        onInvalid(e);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {invalid, manageInvalid, value} = this.props;

        if(!_.isEqual(prevProps.value, value) || !_.isEqual(value, this.state.value))
            this.setState({value: value})

        if(manageInvalid && this.state.invalid !== invalid)
            this.setState({invalid: invalid});
    }

    render() {
        const {
            disabled,
            label,
            name = "name",
            placeholder,
            readonly,
            required,
            type,
            value = this.state.value,
            invalid,
            step,
            autofocus,
            max,
            min,
            maxlength,
            minlength,
            pattern,
            multiple,
            message,
            className
        } = this.props;

        const _hasLabel = label !== undefined;
        const _hasMessages = message.length > 0;
        const _moved = this.state.focused || value || this.state.hasStart;

        const containerClasses = classnames( className,{
            "swf-form-group": true,
            "--invalid": this.state?.invalid,
            "--readonly": this.props.readonly,
            "--focused": this.state?.focused,
            [this.props.containerClass]: true
        })

        const labelClasses = classnames({
            "inp-label": true,
            "--moved": _moved,
            "--focused": this.state?.focused,
            "--invalid": this.state?.invalid,
            "--readonly": this.props.readonly
        });

        const requiredClasses = classnames({
            "inp-required": true,
            "--focused": this.state?.focused,
            "--invalid": this.state?.invalid
        });

        const inputClasses = classnames({
            "form-control": true,
            "no-start-border": this.state?.hasStart,
            "no-end-border": this.state?.hasEnd,
            "--invalid": this.state?.invalid,
            "--readonly": this.props.readonly,
            [this.props.inputClass]: true
        })

        return (
            <>
                <div className={containerClasses}
                     ref={elm => this.props.internalRef.current = elm}
                >

                    {_hasLabel &&
                        <span className={labelClasses}>
                            <label htmlFor="name">{label}</label>
                            { required && <Icon icon={'asterisk'} className={requiredClasses} customSize={7}/>}
                        </span>
                    }
                    <div className="input-group">
                        {this.renderStart()}
                        <input
                            className={inputClasses}
                            id="name"
                            name={name}
                            placeholder={placeholder}
                            step={step}
                            type={type}
                            aria-required={required}
                            aria-invalid={invalid}
                            value={this.state.value}
                            readOnly={readonly}
                            required={required}
                            autoFocus={autofocus}
                            max={max}
                            min={min}
                            maxLength={maxlength}
                            minLength={minlength}
                            pattern={pattern}
                            disabled={disabled}
                            multiple={multiple}
                            onChange={this.props.onChange}
                            onPaste={this.props.onPaste}
                            onKeyDown={this.props.onKeyDown}
                            onFocus={(e) => this.onEvent(e,"onFocus")}
                            onBlur={(e) => this.onEvent(e,"onBlur")}
                            onInput={(e) => this.onEvent(e,"onInput", e.target.value)}
                            onInvalid={this.onInvalid}
                        />
                        {this.renderEnd()}
                    </div>
                    {_hasMessages &&
                        message.map((el, index) => {
                            return (el && <InfoMessage
                                {...el}
                                key={index}
                            />)
                        })
                    }
                </div>
            </>
        )
    }
};

Input.Start = createSubComponent("Start");
Input.End = createSubComponent("End");

Input.defaultProps = {
    autofocus: false,
    disabled: false,
    invalid: false,
    manageInvalid: false,
    manageValue: false,
    message: [],
    multiple: false,
    readonly: false,
    required: false,
    inputClass: "",
    containerClass: "",
    step: "any",
    type: "text",
    internalRef: React.createRef(),
    onInput: noop,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    onInvalid: noop,
    onKeyDown: noop,
    onPaste: noop,
    className: {}
}

Input.propTypes = {
    autofocus: PropTypes.bool,
    disabled: PropTypes.bool,
    invalid: PropTypes.bool,
    label: PropTypes.string,
    manageInvalid: PropTypes.bool,
    manageValue: PropTypes.bool,
    max: PropTypes.number,
    min: PropTypes.number,
    maxlength: PropTypes.number,
    minlength: PropTypes.number,
    message: PropTypes.arrayOf(PropTypes.shape({
        status: PropTypes.oneOf(["yellow" , "red" , "green" , "blue" , "grey" , "grey-blue"]),
        content: PropTypes.string,
        icon: PropTypes.string,
        className: propTypes.object,
        iconSize: PropTypes.number,
        delay: propTypes.number
    })),
    multiple: PropTypes.bool,
    name: PropTypes.string,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    inputClass: PropTypes.string,
    containerClass: PropTypes.string,
    readonly: PropTypes.bool,
    required: PropTypes.bool,
    step: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["any"])
    ]),
    type: PropTypes.oneOf(["text", "password", "email", "number", "url", "tel", "search", "date", "datetime", "datetime-local", "month", "week", "time"]),
    value: PropTypes.string,
    onInput: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onBlur: PropTypes.func,
    onInvalid: PropTypes.func,
    onPaste: PropTypes.func,
    internalRef: PropTypes.oneOfType([
        propTypes.func,
        propTypes.shape({ current: propTypes.any })
    ]),
    className:propTypes.oneOfType([propTypes.string, propTypes.object])
}

export default Input;