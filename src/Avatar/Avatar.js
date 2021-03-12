import * as React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import {noop, normalizeURL} from "../utils";
import styles from "./styles.scss";
import {Icon} from "../index";

console.shallowCloneLog = function () {
    var typeString = Function.prototype.call.bind(Object.prototype.toString)
    console.log.apply(console, Array.prototype.map.call(arguments, function (x) {
        switch (typeString(x).slice(8, -1)) {
            case 'Number':
            case 'String':
            case 'Undefined':
            case 'Null':
            case 'Boolean':
                return x;
            case 'Array':
                return x.slice();
            default:
                var out = Object.create(Object.getPrototypeOf(x));
                out.constructor = x.constructor;
                for (var key in x) {
                    out[key] = x[key];
                }
                Object.defineProperty(out, 'constructor', {value: x.constructor});
                return out;
        }
    }));
}


class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.fixPhotoSize = this.fixPhotoSize.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            open: false
        }
    }

    onClick() {
        if (this.props.clickable) {
            this.setState({open: !this.state?.open})
            this.props.onClick();
        }
    }

    getInitials(name) {
        return name
            .split(" ")
            .map((letter, index) => index < 2 ? letter[0]: '')
            .join("")
            .toUpperCase();
    }

    fixPhotoSize(event) {
        const {nativeEvent} = event;
        const {path = nativeEvent.composedPath()} = nativeEvent;

        const image = path[0];
        const {naturalWidth, naturalHeight} = image;

        const sizes = {
            "xs": "1.5rem",
            "md": "2rem",
            "lg": "2.5rem"
        }

        const parameters = sizes[this.props.size]

        image.style.width = naturalWidth < naturalHeight ? parameters : "auto";
        image.style.height = naturalWidth < naturalHeight ? "auto" : parameters;

    }

    render() {
        const {
            id,
            avatarVisible,
            open,
            color,
            manageOpened,
            member: {
                avatar,
                name,
                title
            },
            size,
            canRemove,
            clickable
        } = this.props;

        const hasAvatar = Boolean(avatar);
        const avatarIsVisible = !hasAvatar && avatarVisible;

        const openState = manageOpened ? open : this.state?.open;

        return (
            <>
                <style type="text/css">{styles}</style>
                <div
                    ref={elm => this.props.innerRef.current = elm}
                    className={classnames({
                        "avatar": true,
                        [`--${size}`]: true,
                        [`--${color}`]: true,
                        "--clickable": clickable,
                        "--selected": openState,
                    })}
                    onClick={this.onClick}
                >
                    {hasAvatar && <div className="photo-container">
                        <img
                            title={name}
                            onLoad={this.fixPhotoSize}
                            className="member-photo"
                            src={normalizeURL(`/${avatar}`)}
                        />
                    </div>}
                    {avatarIsVisible && <div className={classnames({
                        "member-container": true,
                        "--selected": this.state?.open
                    })}>
                        <p className="initials" title={name}>{this.getInitials(name)}</p>
                    </div>}

                    <div className={classnames(
                        {
                            "member-info": true,
                            "visible": openState
                        })}>
                        <p className="name">{name}</p>
                        <p className="title">{title}</p>
                    </div>
                    <div onClick={(e) => {
                        e.stopPropagation();
                        console.log("Remove clicked", id)
                        this.props.onRemove({id});
                    }}>

                        <Icon
                            className={classnames({
                                "remove": true,
                                "visible": canRemove && openState
                            })}
                            icon="x"
                            size="md"
                        />
                    </div>

                </div>
            </>
        )
    }
}

Avatar.defaultProps = {
    id: 0,
    clickable: true,
    open: false,
    manageOpened: false,
    size: "xs",
    canRemove: false,
    avatarVisible: true,
    color: "default",
    onRemove: noop,
    onClick: noop,
    innerRef: React.createRef()
}

Avatar.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    avatarVisible: PropTypes.bool,
    canRemove: PropTypes.bool,
    clickable: PropTypes.bool,
    manageOpened: PropTypes.bool,
    open: PropTypes.bool,
    size: PropTypes.oneOf(["xs", "md", "lg"]),
    member: PropTypes.shape({
        name: PropTypes.string.required,
        title: PropTypes.string,
        avatar: PropTypes.string,
    }),
    onRemove: PropTypes.func,
    color: PropTypes.oneOf(["default", "primary", "negative"]),
    onClick: PropTypes.func,
    innerRef: PropTypes.object
}

export default Avatar