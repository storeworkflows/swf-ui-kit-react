import * as React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {Avatar} from "../index";
import styles from "./styles.scss";
import {noop} from "../utils";

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
        console.log(index)
        this.setState({openedAvatar: index})
    }

    addNewMember(event) {
        if (this.props.clickable) {
            this.props.onAdd();
        }
    }

    render() {
        const {size, max, canAdd, clickable, manageOpened, members, canRemove, onRemove} = this.props;
        const hasAdditionalMembers = members.length > max;
        const maxViewers = hasAdditionalMembers ? max : members.length;
        const additionalMembers = members.length - max;

        const viewers = members.slice(0, maxViewers).reverse();

        return (
            <>
                <style type="text/css">{styles}</style>
                <div className={
                    classnames({
                        "avatar-container": true,
                        [`--${size}`]: true
                    })
                }
                >
                    {canAdd && <div
                        className={classnames({
                            "avatar-multiple": true,
                            "add-new-member": true
                        })}
                        onClick={this.addNewMember}
                    >
                        <p className="additional-avatar">{String.fromCharCode(43)}</p>
                    </div>}

                    {hasAdditionalMembers && <div className={classnames({
                        "avatar-multiple": true,
                        "additional-members": true
                    })}>
                        <p className="additional-avatar">{String.fromCharCode(43)}{additionalMembers}</p>
                    </div>}

                    {viewers.map((viewer, index) => (
                        <div key={index + viewer.name.replace("", "_")} onClick={this.openAvatar.bind(this, index)}>
                            <Avatar
                                size={size}
                                canRemove={canRemove}
                                onRemove={onRemove}
                                member={viewer}
                                manageOpened={manageOpened}
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
    manageOpened: false
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
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
}

export default AvatarGroup