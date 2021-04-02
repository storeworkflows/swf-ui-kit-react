import PropTypes from "prop-types";
import * as React from "react";
import Icon from "../Icon/Icon";
import classnames from "classnames";
import propTypes from "prop-types";

class InfoMessage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { status, content, icon, className, iconSize} = this.props;
        const messageClasses = classnames(
            className,
            status,
            "info-message"
        );

        return (
            content
                ?
                    <div className={messageClasses}>
                        {icon && <Icon className="input-message-icon" icon={icon} customSize={iconSize}/> }
                        <span className="input-message-content">{content}</span>
                    </div>
                : null
        );
    }
}


InfoMessage.defaultProps = {
    status: "critical",
    className: {},
    iconSize: PropTypes.number
}

InfoMessage.propTypes = {
    status: PropTypes.oneOf(["critical", "warning", "positive", "info", "suggestion"]),
    content: PropTypes.string,
    icon: PropTypes.string,
    className: propTypes.object,
    iconSize: PropTypes.number
}

export default InfoMessage