import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import RequiredLabel from "../RequiredLabel/RequiredLabel";

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeAction = this.onChangeAction.bind(this);
        this.onInvalidAction = this.onInvalidAction.bind(this);
        this.setIndeterminate = this.setIndeterminate.bind(this);

        this.state = {
            checkedValue: this.props.checked,
            invalidValue:  this.props.invalid,
            indeterminateValue: false
        }

        this.checkboxRef = React.createRef();
    }


    onChangeAction(e){
        e?.preventDefault();
        //e?.stopPropagation();
        const {manageChecked, onChange, readonly, disabled, label, name, value} = this.props;
        const currentValue = this.state.checkedValue;

        let newValue = (currentValue==="indeterminate") || !currentValue;
        let canChange = !readonly && !disabled;

        if(!manageChecked && canChange){
            this.setState({ checkedValue: newValue });
            onChange({value: newValue, valueName: value, label: label, name: name});
        } else
            canChange && onChange({value: currentValue, valueName: value, label: label, name: name});
    }

    onInvalidAction(e){
        const {manageInvalid, onInvalid, label, name, value} = this.props;
        let currentValue = this.state.invalidValue;

        if(!manageInvalid)
        {
            currentValue = true;
            this.setState({ invalidValue: currentValue })
        }

        onInvalid(e, {value: currentValue, valueName: value, label: label, name: name});
    }

    setIndeterminate(){
        if(this.checkboxRef && this.checkboxRef.current) {
            let input = this.checkboxRef.current.querySelector('input');
            let value = this.state.checkedValue === "indeterminate";
            if (input)
                input.indeterminate = value;
        }
    }

    componentDidUpdate(){
        const {checked, invalid, manageChecked, manageInvalid} = this.props;
        const {invalidValue, checkedValue} = this.state;

        if(manageChecked && checkedValue !== checked)
            this.setState({checkedValue: checked});

        if(manageInvalid && invalidValue!== invalid)
            this.setState({invalidValue: invalid});

        this.setIndeterminate()
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
            required,
            visible,
            className,
            value,
            invalid,
            labelClassName,
            inlineRequired
        } = this.props;

        let isIndeterminate = this.state.checkedValue === 'indeterminate'
        let checkedValue =  isIndeterminate || this.state.checkedValue;

        let checkBoxClasses = classnames({
            "swf-checkbox-container": true,
            "disabled": disabled,
            "readonly": readonly,
            "invalid": this.state.invalidValue
        })

        return (
            visible ?
                <>
                    <div className={className}>
                        {(label || required) &&
                        <RequiredLabel className={labelClassName}
                                       invalid={invalid}
                                       required={required}
                                       label={label}
                        />
                        }

                        <div className={checkBoxClasses}
                             ref = { el => this.checkboxRef.current = el}
                             onClick={this.onChangeAction}
                        >
                            <input
                                className={"checkbox-input"}
                                type="checkbox"
                                disabled={disabled}
                                required={required}
                                name={name}
                                value={this.state.checkedValue}
                                checked={checkedValue}
                                onInvalid={this.onInvalidAction}
                                onChange={ (e) => {e.preventDefault(); e.stopPropagation();}}
                                onClick={ (e) => {e.preventDefault(); e.stopPropagation();}}
                            />
                            <div className={"checkbox-information"} >
                                {value &&
                                <RequiredLabel
                                    htmlFor={name}
                                    className={"checkbox-label"}
                                    required={inlineRequired}
                                    label={value}
                                />
                                }
                            </div>
                        </div>
                    </div>
                </>
                : null
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
    required: false,
    visible: true,
    onInvalid: () => void 0,
    onChange: () => void 0,
    inlineRequired: false,
    className: "",
    labelClassName: "",
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
    onChange: propTypes.func,
    visible: propTypes.bool,
    className: propTypes.oneOfType([propTypes.string, propTypes.object]),
    value: propTypes.string,
    labelClassName: propTypes.oneOfType([propTypes.string, propTypes.object]),
    inlineRequired: propTypes.bool
}

export default Checkbox