import * as React from "react";
import propTypes from "prop-types";
import styles from "./styles.css";
import classnames from "classnames";
import autosize from "autosize/dist/autosize";

class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.textAreaRef = React.createRef();
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.state = {
            value: "",
            parentHeight: "auto",
            textareaHeight: "auto",
            focused: false
        }
    }

    onChange (event) {
        this.setState({value: event.target.value})
        this.props.onKeyDown(event)
    }
    onFocus(event) {
        this.setState({focused: true})
    }

    onBlur () {
        this.setState({focused: false})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.autofocus && this.textAreaRef.current) {
            autosize(this.textAreaRef.current);
        }
    }

    componentDidMount() {
        if (this.props.autofocus && this.textAreaRef.current) {
            this.textAreaRef.current.focus()
            autosize(this.textAreaRef.current);
        }
    }

    render() {
        const _hasLabel = Boolean(this.props.label);
        return (
            <>
                <style type="text/css">{styles}</style>
                <div
                    className="form-group"
                    style={{
                        minHeight: this.state.parentHeight
                    }}
                >
                    {_hasLabel && <label htmlFor="name" className={classnames({
                        "--moved": this.state.focused || (this.props.value || this.state.value),
                        "--focused": this.state.focused
                    })}>{this.props.label}</label>}
                    <textarea
                        className={classnames({
                            "form-control": true,
                            [this.props.className]: true,
                            "resize": this.props.resize
                        })}
                        ref={(elm) => this.textAreaRef.current = elm}
                        name={this.props.name}
                        value={this.props.value || this.state.value}
                        onInput={this.onChange}
                        onKeyDown={this.onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    />
                </div>
            </>
        )
    }
}

TextArea.defaultProps = {
    autoresize: false,
    autofocus: true,
    className: "",
    onChange: () => void 0,
    onKeyDown: () => void 0,
    name: "",
    value: "",
    resize: true,
    label: ""
}

TextArea.propTypes = {
    autoresize: propTypes.bool,
    value: propTypes.string,
    label: propTypes.string,
    name: propTypes.string,
    onChange: propTypes.func,
    onKeyDown: propTypes.func,
    className: propTypes.string,
    autofocus: propTypes.bool,
    resize: propTypes.bool
}

export default TextArea
