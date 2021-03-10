import * as React from "react";
import classnames from "classnames";
import styles from "./styles.css";

import PropTypes from "prop-types";
import findByType, {createSubComponent} from "../utils/findByType";
import {noop} from "../utils";

const Start = () => null;
const End = () => null;

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.onBlur = this.onBlur.bind(this)
        this.onFocus = this.onFocus.bind(this)
        this.onInput = this.onInput.bind(this)
        this.state = {
            checked: this.props.checked,
            hasStart: false,
            hasEnd: false,
            focused: false,
            value: ""
        }
    };

    renderStart() {
        const {children} = this.props;
        const start = findByType(children, "Start");

        if (!start) return null;

        !this.state.hasStart && this.setState({hasStart: true})

        return <div className="form-control--start">{start}</div>
    }

    renderEnd() {
        const {children} = this.props;
        const end = findByType(children, "End");

        if (!end) return null;

        !this.state.hasEnd && this.setState({hasEnd: true})

        return <div className="form-control--end">{end}</div>
    }

    onBlur(event) {
        this.setState({focused: false})
        this.props.onBlur(event);
    }

    onFocus(event) {
        this.setState({focused: true})
        this.props.onFocus(event);
    }

    onInput(event) {
        this.setState({value: event.target.value });
        this.props.onInput(event)
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
            message
        } = this.props;

        const _hasLabel = label !== undefined;
        const _hasMessages = message.length > 0;
        const _moved = this.state.focused || value || this.state.hasStart;

        const containerClasses = classnames({
            "form-group": true,
            [this.props.containerClass]: true
        })

        const labelClasses = classnames({
            "inp-label": true,
            "--moved": _moved,
            "--focused": this.state?.focused
        });

        const inputClasses = classnames({
            "form-control": true,
            "no-start-border": this.state?.hasStart,
            "no-end-border": this.state?.hasEnd,
            [this.props.inputClass]: true
        })

        return (
            <>
                <style type="text/css">{styles}</style>
                <div className={containerClasses} ref={elm => this.props.internalRef.current = elm}>
                    {_hasLabel && <label htmlFor="name" className={labelClasses}>{label}</label>}
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
                               value={value}
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
                               onInput={this.onInput}
                               onChange={this.props.onChange}
                               onFocus={(event) => {
                                   this.onFocus(event)
                               }
                               }
                               onBlur={(event) => {
                                   this.onBlur(event)
                               }}
                        />
                        {this.renderEnd()}
                    </div>
                    {_hasMessages &&
                    message.map((el) => {
                        const _hasIcon = el.icon !== undefined && el.icon.length > 0;
                        const _hasContent = el.content !== undefined && el.content.length > 0;

                        const _exist = _hasIcon || _hasContent;
                        return (
                            _exist
                                ?
                                <div className={classnames(el.status)}>
                                    {_hasIcon && null
                                        //<x-mobi-swf-icon icon={el.icon} size="sm"/>
                                    }
                                    {_hasContent &&
                                    <span>{el.content}</span>
                                    }
                                </div>
                                : null
                        )
                    })
                    }
                </div>
            </>
        )
    }
}

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
    onFocus: noop
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
        status: PropTypes.oneOf(["critical", "warning", "positive", "info", "suggestion"]),
        content: PropTypes.string,
        icon: PropTypes.string
    })),
    multiple: PropTypes.bool,
    name: PropTypes.string.required,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    inputClass: PropTypes.string,
    containerClass: PropTypes.string,
    readonly: PropTypes.bool,
    required: PropTypes.bool,
    step: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf["any"]
    ]),
    type: PropTypes.oneOf(["text", "password", "email", "number", "url", "tel", "search", "date", "datetime", "datetime-local", "month", "week", "time"]),
    value: PropTypes.string,
    onInput: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    internalRef: PropTypes.element
}

export default Input;