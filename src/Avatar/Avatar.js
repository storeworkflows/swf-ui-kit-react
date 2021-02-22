import * as React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import {noop, normalizeURL} from "../utils";
import styles from "./styles.scss";
import {Icon} from "../index";

console.shallowCloneLog = function(){
    var typeString = Function.prototype.call.bind(Object.prototype.toString)
    console.log.apply(console, Array.prototype.map.call(arguments, function(x){
        switch (typeString(x).slice(8, -1)) {
            case 'Number': case 'String': case 'Undefined': case 'Null': case 'Boolean': return x;
            case 'Array': return x.slice();
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
        this.setState({open: !this.state?.open})
    }

    getInitials(name) {
        return name
            .split(" ")
            .map(i => i[0])
            .join("")
            .toUpperCase();
    }

    fixPhotoSize(event) {
        const {nativeEvent} = event;
        const { path = nativeEvent.composedPath() } = nativeEvent;

        const image = path[0];
        const { naturalWidth, naturalHeight } = image;

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
            avatarVisible,
            open,
            color,
            member: {
                avatar,
                name,
                title,
                id
            },
            size,
            removable,
            clickable
        } = this.props;

        const hasAvatar = Boolean(avatar);
        const avatarIsVisible = !hasAvatar && avatarVisible;

        return (
            <>
                <style type="text/css">{styles}</style>
                <div
                    className={classnames({
                        "avatar": true,
                        [`--${size}`]: true,
                        [`--${color}`]: true,
                        "--selected": this.state?.open,
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
                            "visible": this.state?.open
                        })}>
                        <p className="name">{name}</p>
                        <p className="title">{title}</p>
                    </div>
                    <Icon
                        onClick={(e) => {
                            this.props.onDelete({id})
                            e.stopPropagation();
                        }}
                        className={classnames({
                            "remove":true,
                            "visible": removable && this.state?.open
                        })}
                        icon="x"
                        size="md"
                    />
                </div>
            </>
        )
    }
}

Avatar.defaultProps = {
    clickable: true,
    open: false,
    size: "xs",
    removable: false,
    avatarVisible: true,
    color: "default",
    onDelete: noop
}

Avatar.propTypes = {
    avatarVisible: PropTypes.bool,
    removable: PropTypes.bool,
    clickable: PropTypes.bool,
    open: PropTypes.bool,
    size: PropTypes.oneOf(["xs", "md", "lg"]),
    member: PropTypes.shape({
        name: PropTypes.string.required,
        title: PropTypes.string,
        avatar: PropTypes.string,
        id: PropTypes.string.required
    }),
    onDelete: PropTypes.func,
    color: PropTypes.oneOf(["default", "primary", "negative"])
}

export default Avatar