import PropTypes from "prop-types";
import * as React from "react";
import Icon from "../Icon/Icon";
import classnames from "classnames";
import propTypes from "prop-types";

class RequiredLabel extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {required, label, invalid, className, htmlFor} = this.props;
        const labelClasses = classnames(
            className,
            "label-area",
            { "--invalid": invalid } )

        return (
            (required || label)
                ?
                <div className={labelClasses}>
                    {label && <label htmlFor={htmlFor} className={"label-text"}>{label}</label>}
                    {required && <Icon className={"label-icon"} icon="asterisk" customSize={7} /> }
                </div>
                : null
        );
    }
}


RequiredLabel.defaultProps = {
    required: false,
    invalid: false,
    className: {}
}

RequiredLabel.propTypes = {
    required: PropTypes.bool,
    invalid: PropTypes.bool,
    label: PropTypes.string,
    className: propTypes.oneOfType([propTypes.object, propTypes.string]),
    htmlFor: PropTypes.string
}

export default RequiredLabel