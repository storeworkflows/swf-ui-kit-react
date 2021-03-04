import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import styles from "./styles.scss"

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeAction = this.onChangeAction.bind(this);
        this.onInvalidAction = this.onInvalidAction.bind(this);

        this.state = {
            checkedValue: this.props.checked,
            invalidValue:  this.props.invalid
        }
    }

    onChangeAction(){
        const {manageChecked, onChange} = this.props;
        const currentValue = this.state.checkedValue;

        if(manageChecked)
            onChange({value: currentValue});
        else
            this.setState({ checkedValue: !currentValue })
    }

    onInvalidAction(){
        const {manageInvalid, onInvalid} = this.props;
        const currentValue = this.state.invalidValue;

        if(manageInvalid)
            onInvalid({value: currentValue});
        else
            this.setState({ invalidValue: !currentValue })
    }

    componentDidUpdate(){
        const {checked, invalid, manageChecked, manageInvalid} = this.props;
        const {invalidValue, checkedValue} = this.state;

        if(manageChecked && checkedValue!== checked)
            this.setState({checkedValue: checked});

        if(manageInvalid && invalidValue!== invalid)
            this.setState({invalidValue: invalid});
    }

    componentDidMount() {

    }

    render() {

        const {
            checked,
            disabled,
            label,
            name,
            readonly,
            required
        } = this.props;

        let isIndeterminate = checked === "indeterminate";
        let currentValue = this.state.checkedValue

        return (
            <>
                <style type="text/css">{styles}</style>
                <div className={classnames({
                    "checkbox-container": true,
                    "disabled": disabled,
                    "readonly": readonly,
                    "invalid": this.state.invalidValue
                })}>
                    <input
                        type="checkbox"
                        checked={this.state.checkedValue}
                        disabled={disabled}
                        required={required}
                        name={name}
                        value={(this.state.checkedValue) ? "true" : "false"}
                        onInvalid={e => this.onInvalidAction(e)}
                        onChange={e => this.onChangeAction(e)}
                    />
                    {label && <label>{label}</label>}
                </div>
            </>
        );
    }
};

Checkbox.defaultProps = {
    checked: false,
    disabled: false,
    invalid: false,
    manageChecked: false,
    manageInvalid: false,
    readonly: false,
    required: false
};

Checkbox.propTypes = {
    checked: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["indeterminate"])
    ]),
    disabled: propTypes.bool,
    invalid: propTypes.bool,
    label: propTypes.string,
    manageChecked: propTypes.bool,
    manageInvalid: propTypes.bool,
    name: propTypes.string,
    readonly: propTypes.bool,
    required: propTypes.bool,
    onInvalid: propTypes.func,
    onChange: propTypes.func
}

export default Checkbox