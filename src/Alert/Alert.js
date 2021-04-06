import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";

class Alert extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: this.props.expanded,
            isOverflowed: false
        }

        this.contentRef = null;
        this.textRef = null;
    }

    componentDidMount() {
        if(this.contentRef && this.textRef){
            let content = this.contentRef;
            let text = this.textRef;

            let contentEndX = content.getBoundingClientRect().y + content.clientHeight;
            let textEndX = text.getBoundingClientRect().y + text.clientHeight;
            this.setState({isOverflowed: contentEndX<textEndX})
        }
    }

    render() {

        const {
            action,
            content,
            header,
            icon,
            manageExpanded,
            status,
            textLinkProps
        } = this.props;

        const {isOverflowed} = this.state;

        return (
            <>
                <div className={"swf-alert-container"}>
                    {icon && <div className={"alert-icon"}><Icon icon = {icon}/></div>}
                    <div className={"alert-content"} ref = { el => this.contentRef = el}>
                        {header && <div className={"alert-header"}>{header}</div>}
                        {content &&
                            <div
                                ref = { el => this.textRef = el}
                                className={classnames({
                                    "text-container": true,
                                    "overflowed": isOverflowed
                                })}
                            >
                                <p className={"alert-text"} >{content}</p>
                            </div>
                        }
                        {isOverflowed && <span>Show more</span>}
                    </div>
                    <Button label={"Ok"}/>
                </div>
            </>
        )
    }
}

Alert.defaultProps = {
    expanded: false,
    manageExpanded: false,
    status: "info"
}

Alert.propTypes = {
    action: propTypes.shape({
        type: propTypes.oneOf(["dismiss" , "acknowledge" , "open"]).isRequired,
        href: propTypes.string
    }),
    content: propTypes.oneOfType([propTypes.string, propTypes.object]),
    expanded: propTypes.bool,
    header: propTypes.string,
    icon: propTypes.string,
    manageExpanded: propTypes.bool,
    status: propTypes.oneOf(["critical" , "high" , "moderate" , "warning" , "info" , "positive" , "low"]),
    textLinkProps: propTypes.shape({
        label: propTypes.string,
        href: propTypes.string
    })
}

export default Alert
