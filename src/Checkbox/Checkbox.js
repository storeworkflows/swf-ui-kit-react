import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import styles from "./styles.scss"

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeAction = this.onChangeAction.bind(this);
        this.onInvalidAction = this.onInvalidAction.bind(this);
        this.setIndeterminate = this.setIndeterminate.bind(this);

        this.state = {
            checkedValue: this.props.checked,
            invalidValue:  this.props.invalid,
            checkboxRef: React.createRef()
        }
    }

    onChangeAction(){
        const {manageChecked, onChange, readonly, disabled} = this.props;
        const currentValue = this.state.checkedValue;
        let newValue = (currentValue==="indeterminate") ? true : !currentValue;
        let canChange = !readonly && !disabled;

        if(canChange && manageChecked)
             onChange({value: currentValue});
        else if(canChange)
            this.setState({ checkedValue: newValue });
        else if(currentValue==="indeterminate")
            this.setIndeterminate()
    }

    onInvalidAction(){
        const {manageInvalid, onInvalid} = this.props;
        const currentValue = this.state.invalidValue;

        if(manageInvalid)
            onInvalid({value: currentValue});
        else
            this.setState({ invalidValue: !currentValue })
    }

    setIndeterminate(){
        let input = this.state.checkboxRef.current.querySelector('input');
        if(this.props.checked === "indeterminate")
            input.indeterminate = true;
    }

    componentDidUpdate(){
        const {checked, invalid, manageChecked, manageInvalid} = this.props;
        const {invalidValue, checkedValue} = this.state;

        if(manageChecked && checkedValue !== checked)
        {
            this.setState({checkedValue: checked});
            this.setIndeterminate();
        }

        if(manageInvalid && invalidValue!== invalid)
            this.setState({invalidValue: invalid});
    }

    componentDidMount() {
        this.setIndeterminate();
    }

    render() {

        const {
            disabled,
            label,
            name,
            readonly,
            required
        } = this.props;

        let isIndeterminate = this.state.checkedValue === 'indeterminate'
        let checkedValue =  isIndeterminate ? false: this.state.checkedValue;

        return (
            <>
                <style type="text/css">{styles}</style>
                <div className={classnames({
                    "checkbox-container": true,
                    "disabled": disabled,
                    "readonly": readonly,
                    "invalid": this.state.invalidValue
                    })}
                     ref = {this.state.checkboxRef}
                >
                    <input
                        className={"checkbox-input"}
                        type="checkbox"
                        checked={checkedValue}
                        disabled={disabled}
                        required={required}
                        name={name}
                        value={(this.state.checkedValue) ? "true" : "false"}
                        onInvalid={e => this.onInvalidAction(e)}
                        onChange={e => this.onChangeAction(e)}
                    />
                    <div className={"checkbox-information"}>
                        {label && <label className={"checkbox-label"}>{label}</label>}
                        { required && <span className={"checkbox-required"}>*</span>}
                    </div>
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