import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import Icon from "../Icon/Icon";
import styles from "./styles.scss";
import Button from "../Button/Button";

class Alert extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: this.props.expanded
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

        return (
            <>
                <style type="text/css">{styles}</style>
                <div className={"alert-container"}>
                    {icon && <Icon icon = {icon}/>}
                    <div className={"alert-content"}>
                        {header && <div className={"alert-header"}>{header}</div>}
                        {content && <span>{content}</span>}
                    </div>
                    {action && <Button>"Action"</Button>}
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
