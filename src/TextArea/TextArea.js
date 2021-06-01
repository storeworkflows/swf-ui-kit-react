import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import autosize from "autosize/dist/autosize";
import {useEffect, useRef, useState} from "react";

const TextArea = (props) => {

    const textAreaRef = useRef(null);

    const [value, setValue] = useState(props.value);
    const [parentHeight, setParentHeight] = useState("auto");
    const [focused, setFocused] = useState(false);

    const {
        onKeyDown, onChange, autofocus, readonly, label, className, resize,
        name, placeholder, onPaste
    } = props

    const onChangeAction = (event) => {
        setValue(event.target.value);
        onChange(event)
        if (textAreaRef.current) {
            autosize(textAreaRef.current);
        }
    }

    const onFocus = (event) => {
        setFocused(true);
    }

    const onBlur = (event) => {
        setFocused(false);
        props.onBlur(event);
    }

    useEffect(() => {
        if (autofocus && textAreaRef.current) {
            textAreaRef.current.focus()
            autosize(textAreaRef.current);
        }
    }, [])

    useEffect(() => {
        textAreaRef.current && autosize(textAreaRef.current);
    }, [value, textAreaRef])

    useEffect(() => {
        setValue(props.value)
        if(textAreaRef.current){
            autosize(textAreaRef.current);
            textAreaRef.current.value = props.value;
        }
    }, [props.value, textAreaRef])


    const _hasLabel = Boolean(label);

    return (
        <>
            <div
                ref={elm => props.innerRef.current = elm}
                className="form-group"
                style={{
                    minHeight: parentHeight
                }}
            >
                {_hasLabel && <label htmlFor="name" className={classnames({
                    "--moved": focused || (props.value || value),
                    "--focused": focused
                })}>{label}</label>}
                <textarea
                    className={classnames({
                        "form-control": true,
                        [className]: true,
                        "resize": resize,
                        "readonly": readonly,
                        "active": !readonly
                    })}
                    ref={(elm) => textAreaRef.current = elm}
                    name={name}
                    readOnly={readonly}
                    value={value}
                    onPaste={onPaste}
                    onChange={e => !readonly && onChangeAction(e)}
                    onKeyDown={e => !readonly && onKeyDown(e)}
                    onFocus={e => !readonly && onFocus(e)}
                    onBlur={e => !readonly && onBlur(e)}
                    placeholder={!_hasLabel ? placeholder : ""}
                />
            </div>
        </>
    )

};

TextArea.defaultProps = {
    autoresize: false,
    autofocus: false,
    className: "",
    onPaste: () => void 0,
    onChange: () => void 0,
    onKeyDown: () => void 0,
    onBlur: () => void 0,
    name: "",
    value: "",
    resize: true,
    label: "",
    placeholder: "",
    innerRef: React.createRef(),
    readonly: false
}

TextArea.propTypes = {
    autoresize: propTypes.bool,
    value: propTypes.string,
    label: propTypes.string,
    name: propTypes.string,
    onPaste: propTypes.func,
    onChange: propTypes.func,
    onKeyDown: propTypes.func,
    className: propTypes.string,
    autofocus: propTypes.bool,
    resize: propTypes.bool,
    placeholder: propTypes.string,
    innerRef: propTypes.object,
    onBlur: propTypes.func,
    readonly: propTypes.bool
}

export default TextArea
