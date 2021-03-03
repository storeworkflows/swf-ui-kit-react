import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import styles from "./styles.scss"

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    //    this.optionClicked = this.optionClicked.bind(this) ;

        // this.state = {
        //     checkedValue: this.props.checked,
        //     invalidValue:  this.props.invalid
        // }
    }

    // optionClicked(option){
    //
    // }
    //
    //
    // componentDidUpdate(){
    //     // let currentValue = this.props.value;
    //     // if(this.props.manageChecked && currentValue!== this.state.checkedValue)
    //     //     this.setState({checkedValue: currentValue});
    // }

    render() {

        const {
            checked,
            disabled,
            invalid,
            label,
            manageChecked,
            manageInvalid,
            name,
            readonly,
            required,
            value
        } = this.props;

        return (
            <>
                <style type="text/css">{styles}</style>
                {/*<div className={"radio-buttons-container"}>*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        checked={checked}*/}
                {/*        value={value}*/}
                {/*        disabled={disabled}*/}
                {/*        readOnly={readonly}*/}
                {/*        required={required}*/}
                {/*        name={name}*/}
                {/*    />*/}
                {/*    {label && <label>{label}</label>}*/}
                {/*</div>*/}
            </>
        );
    }
};

Checkbox.defaultProps = {
 //   checked: false,
    disabled: false,
    invalid: false,
    manageChecked: false,
    manageInvalid: false,
    readonly: false,
    required: false
};

Checkbox.propTypes = {
    // checked: propTypes.oneOfType([
    //     propTypes.bool,
    //     propTypes.oneOf(["indeterminate"])
    // ]),
    disabled: propTypes.bool,
    invalid: propTypes.bool,
    label: propTypes.string,
    manageChecked: propTypes.bool,
    manageInvalid: propTypes.bool,
    name: propTypes.string,
    readonly: propTypes.bool,
    required: propTypes.bool
}

export default Checkbox