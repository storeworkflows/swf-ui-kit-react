import * as React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {Avatar} from "../index";
import {noop} from "../utils";
import Icon from "../Icon/Icon";

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

    handleClick = (index) => {
        if (this.props.onClick === noop) {
           return this.openAvatar(index)
        }
        return this.props.onClick();
    }

    addNewMember(event) {
        if (this.props.clickable) {
            this.props.onAdd();
        }
    }

    render() {
        const {size, max, canAdd, clickable, manageOpened, members, canRemove, onRemove, customIcon} = this.props;
        const hasAdditionalMembers = members.length > max + 1;
        const maxViewers = hasAdditionalMembers ? max : members.length;
        const additionalMembers = members.length - max;

        const viewers = members.slice(0, maxViewers).reverse().filter(viewer => viewer.name);

        return (
            <>
                <div
                    ref={elm => this.props.innerRef.current = elm}
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
                                onClick={() => this.handleClick(index)}
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
    clickable: PropTypes.bool,
    max: PropTypes.number,
    size: PropTypes.oneOf(["xs", "md", "lg"]),
    manageOpened: PropTypes.bool,
    members: PropTypes.array,
    canRemove: PropTypes.bool,
    onClick: PropTypes.func,
    canAdd: PropTypes.bool,
    customIcon: PropTypes.string,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
    innerRef: PropTypes.object
}

export default AvatarGroup
