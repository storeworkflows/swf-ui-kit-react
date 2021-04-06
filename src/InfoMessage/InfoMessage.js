import PropTypes from "prop-types";
import * as React from "react";
import Icon from "../Icon/Icon";
import classnames from "classnames";
import propTypes from "prop-types";

class InfoMessage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            content: this.props.content
        }
        this.setDelay = this.setDelay.bind(this);
    }

    setDelay(){
        const {delay} = this.props;
        if(delay)
            setTimeout(() => this.setState({content: undefined}) , delay);
    }


    componentDidMount() {
        this.setDelay();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {content} = this.props;

        if(content !== prevProps.content){
            this.setState({content: content});
            this.setDelay();
        }
    }

    render() {
        const { status, icon, className, iconSize} = this.props;
        const {content} = this.state;

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
    iconSize: 16
}

InfoMessage.propTypes = {
    status: PropTypes.oneOf(["critical", "warning", "positive", "info", "suggestion"]),
    content: PropTypes.string,
    icon: PropTypes.string,
    className: propTypes.object,
    iconSize: PropTypes.number,
    delay: propTypes.number
}

export default InfoMessage