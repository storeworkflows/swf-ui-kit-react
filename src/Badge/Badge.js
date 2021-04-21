import {Component} from "react";
import classNames from "classnames";
import propTypes from "prop-types";

export default class Badge extends Component {
    static propTypes = {
        variant: propTypes.oneOf(["yellow" , "red" , "green" , "blue" , "grey" , "grey-blue"]),
        count: propTypes.number,
        children: propTypes.element
    }

    static defaultProps = {
        variant: "green",
        count: 0,
        children: null
    }

    render() {
       return <div className="swf-badge-root">
           {this.props.children}
            <span className={classNames({
                "swf-badge": true
            })}>{this.props?.count}</span>
        </div>}
}