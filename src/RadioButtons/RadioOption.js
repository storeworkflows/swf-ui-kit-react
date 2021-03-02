import * as React from "react";
import propTypes from "prop-types";

import styles from "./styles.scss"

class RadioOption extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            id,
            checked,
            readonly,
            disabled,
            name,
            value,
            label
        } = this.props;

        return (
            <>
                <style type="text/css">{styles}</style>
                <div className={"radio-value"} >
                    <input
                        type="radio"
                        id={id}
                        checked={checked}
                        value={value ? value : label}
                        disabled={disabled}
                        readOnly={readonly}
                        name={name}
                        onChange={()=>{}}
                    />
                    <label>{label}</label>
                </div>
            </>
        );
    }
}

RadioOption.defaultProps = {
    checked: false,
    readonly: false,
    disabled: false,
    name: "",
    label: ""
};

RadioOption.propTypes = {
    id: propTypes.string,
    label: propTypes.string,
    value: propTypes.string,
    checked: propTypes.bool,
    readonly: propTypes.bool,
    disabled: propTypes.bool,
    name: propTypes.string
}

export default RadioOption
