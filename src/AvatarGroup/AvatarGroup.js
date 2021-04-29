import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import {Avatar} from "../index";
import {noop} from "../utils";
import Icon from "../Icon/Icon";
import {AvatarMember} from "../Avatar/Avatar";
import PropTypes from "prop-types";

class AvatarGroup extends React.Component {
    constructor(props) {
        super(props);
        this.addNewMember = this.addNewMember.bind(this);
        this.openAvatar = this.openAvatar.bind(this);
        this.state = {
            openedAvatar: -1
        }
    }

    openAvatar(index) {
        const {openedAvatar} = this.state;
        const isSameClicked = openedAvatar === index;

        this.setState({openedAvatar: isSameClicked ? -1 : index})
    }

    handleClick = ({index, avatar}) => {
        const {manageOpened} = this.props;

        if (!manageOpened || this.props.onClick === noop) {
           return this.openAvatar(index)
        }
        return this.props.onClick({index, avatar});
    }

    addNewMember() {
        if (this.props.clickable) {
            this.props.onAdd();
        }
    }

    render() {
        const {size, max, canAdd, members, canRemove, onRemove, customIcon} = this.props;
        const hasAdditionalMembers = members.length > max + 1;
        const maxViewers = hasAdditionalMembers ? max : members.length;
        const additionalMembers = members.length - max;

        const viewers = members.slice(0, maxViewers).reverse().filter(viewer => viewer.name);

        return (
            <>
                <div
                    //ref={elm => this.props.innerRef.current = elm}
                    className={
                        classnames({
                            "swf-avatar-container": true,
                            [`--${size}`]: true
                        })
                    }
                >
                    {canAdd && <div
                        className={classnames({
                            "avatar-multiple": true,
                            "add-new-member": true,
                            "additional-avatar": true
                        })}
                        onClick={this.addNewMember}
                    >
                        <Icon icon={customIcon || "person-plus"} size={size}/>
                    </div>}

                    {hasAdditionalMembers && <div className={classnames({
                        "avatar-multiple": true,
                        "additional-members": true
                    })}>
                        <p className="additional-avatar">{String.fromCharCode(43)}{additionalMembers}</p>
                    </div>}

                    {viewers.map((viewer, index) => (
                        <div key={index + viewer.name.replace("", "_")}>
                            <Avatar
                                id={viewer.id || index}
                                size={size}
                                canRemove={canRemove}
                                onRemove={onRemove}
                                member={viewer}
                                manageOpened={true}
                                onClick={() => this.handleClick({index, avatar: viewer})}
                                open={this.state?.openedAvatar === index}
                            />
                        </div>
                    ))
                    }
                </div>
            </>
        )
    }
}

AvatarGroup.defaultProps = {
    clickable: true,
    max: 5,
    size: "xs",
    members: [],
    canRemove: true,
    canAdd: true,
    onAdd: noop,
    onRemove: noop,
    onClick: noop,
    manageOpened: false,
    innerRef: React.createRef(),
    customIcon: ""
}

AvatarGroup.propTypes = {
    clickable: propTypes.bool,
    max: propTypes.number,
    size: propTypes.oneOf(["xs", "md", "lg"]),
    manageOpened: propTypes.bool,
    members: propTypes.arrayOf(propTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string,
        avatar: PropTypes.string,
    })),
    canRemove: propTypes.bool,
    onClick: propTypes.func,
    canAdd: propTypes.bool,
    customIcon: propTypes.string,
    onAdd: propTypes.func,
    onRemove: propTypes.func,
    innerRef: propTypes.object
}

export default AvatarGroup
