import * as React from "react";
import classnames from "classnames";
import styles from "./styles.css";

import {SWF_INPUT} from "./constants";
import propTypes from "prop-types";
import findByType from "../utils/findByType";

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
        const start = findByType(children, Start);

        if (!start) return null;

        !this.state.hasStart && this.setState({hasStart: true})

        return <div className="form-control--start">{start.props.children}</div>
    }

    renderEnd() {
        const {children} = this.props;
        const end = findByType(children, End);

        if (!end) return null;

        !this.state.hasEnd && this.setState({hasEnd: true})

        return <div className="form-control--end">{end.props.children}</div>
    }

    onBlur() {
        this.setState({focused: false})
    }

    onFocus() {
        this.setState({focused: true})
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

        console.log(value)

        const _hasLabel = label !== undefined;
        const _hasMessages = message.length > 0;
        return (
            <>
                <style>{styles}</style>
                <div className="form-group">
                    {_hasLabel && <label htmlFor="name" className={classnames({
                        "--moved": this.state.focused || value,
                        "--focused": this.state.focused
                    })}>{label}</label>}
                    <div className={classnames({
                        "input-group": true
                    })}>
                        {this.renderStart()}
                        <input className={classnames({
                            "form-control": true,
                            "no-start-border": this.state.hasStart,
                            "no-end-border": this.state.hasEnd,
                            [this.props.className]: true
                        })}
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
                               onFocus={this.onFocus}
                               onBlur={this.onBlur}
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

Input.Start = Start;
Input.End = End;

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
    step: "any",
    type: "text",
    onInput: () => void 0,
    onChange: () => void 0
}

Input.propTypes = {
    autofocus: propTypes.bool,
    disabled: propTypes.bool,
    invalid: propTypes.bool,
    label: propTypes.string,
    manageInvalid: propTypes.bool,
    manageValue: propTypes.bool,
    max: propTypes.number,
    min: propTypes.number,
    maxlength: propTypes.number,
    minlength: propTypes.number,
    message: propTypes.arrayOf(propTypes.shape({
        status: propTypes.oneOf(["critical", "warning", "positive", "info", "suggestion"]),
        content: propTypes.string,
        icon: propTypes.string
    })),
    multiple: propTypes.bool,
    name: propTypes.string.required,
    pattern: propTypes.string,
    placeholder: propTypes.string,
    className: propTypes.string,
    readonly: propTypes.bool,
    required: propTypes.bool,
    step: propTypes.oneOfType([
        propTypes.number,
        propTypes.oneOf["any"]
    ]),
    type: propTypes.oneOf(["text", "password", "email", "number", "url", "tel", "search", "date", "datetime", "datetime-local", "month", "week", "time"]),
    value: propTypes.string,
    onInput: propTypes.func,
    onChange: propTypes.func
}

export default Input;