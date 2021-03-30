import * as React from "react";
import propTypes from "prop-types";
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
            value: this.props.value,
            parentHeight: "auto",
            textareaHeight: "auto",
            focused: false
        }
    }

    onChange (event) {
        this.setState({value: event.target.value})
        this.props.onKeyDown(event)
        if (this.textAreaRef.current) {
            autosize(this.textAreaRef.current);
        }
    }

    onFocus(event) {
        this.setState({focused: true})
    }

    onBlur (event) {
        this.setState({focused: false})
        this.onChange(event)
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

    static getDerivedStateFromProps (newProps) {
        return {
            value: newProps.value
        }
    }

    render() {
        const _hasLabel = Boolean(this.props.label);

        return (
            <>
                <div
                    ref={elm => this.props.innerRef.current = elm }
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
                        onChange={this.onChange}
                        onKeyDown={this.onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        placeholder={!_hasLabel ? this.props.placeholder : ""}
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
    label: "",
    placeholder: "",
    innerRef: React.createRef()
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
    resize: propTypes.bool,
    placeholder: propTypes.string,
    innerRef: propTypes.object
}

export default TextArea
