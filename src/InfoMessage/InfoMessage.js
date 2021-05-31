import PropTypes from "prop-types";
import * as React from "react";
import Icon from "../Icon/Icon";
import classnames from "classnames";
import propTypes from "prop-types";
import {useEffect, useState} from "react";

const InfoMessage = React.forwardRef((props, ref) => {
    const {content, delay, status, icon, className, iconSize} = props;
    const [contentValue, setContentValue] = useState(content);
    let timer = null;

    const setDelay = () => {
        if (delay)
            timer = setTimeout(() => setContentValue(undefined), delay);
    }

    useEffect(()=>{
        setContentValue(content);
        setDelay();
    }, [content])

    useEffect(()=>{
        setDelay();
        return  clearTimeout(timer);
    }, [])


    const messageClasses = classnames(
        className,
        status,
        "info-message"
    );

    return (
        contentValue
            ?
            <div className={messageClasses} ref={ref}>
                {icon && <Icon className="input-message-icon" icon={icon} customSize={iconSize}/>}
                <span className="input-message-content">{contentValue}</span>
            </div>
            : null
    );

});


InfoMessage.defaultProps = {
    status: "red",
    className: "",
    iconSize: 16
}

InfoMessage.propTypes = {
    status: PropTypes.oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
    content: PropTypes.string,
    icon: PropTypes.string,
    className: propTypes.oneOfType([propTypes.object, propTypes.string]),
    iconSize: PropTypes.number,
    delay: propTypes.number
}

export default React.memo(InfoMessage)