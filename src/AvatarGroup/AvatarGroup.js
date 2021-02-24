import * as React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {Avatar} from "../index";
import styles from "./styles.scss";

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
        //console.log(...arguments)
        console.log(index)
        this.setState({openedAvatar: index})
    }

    addNewMember(event) {
        if (this.props.clickable) {
            this.props.onAdd();
        }
    }

    render() {
        const {size, max, canAdd, clickable, members, canRemove, onRemove} = this.props;
        const hasAdditionalMembers = members.length > max;
        const additionalMembers = max - members.length;

        const copyMembers = members.slice();

        const viewers = hasAdditionalMembers ? copyMembers.reverse() : copyMembers.slice(0, max).reverse();
        console.log({hasAdditionalMembers, viewers})


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
                        <div onClick={this.openAvatar.bind(this, index)}>
                            <Avatar
                                key={index + viewer.name.replace("", "_")}
                                size={size}
                                canRemove={canRemove}
                                onRemove={onRemove}
                                member={viewer}
                                manageOpened={true}
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
    onAdd: () => void 0,
    onRemove: () => void 0,
}

AvatarGroup.propTypes = {
    clickable: PropTypes.bool,
    max: PropTypes.number,
    size: PropTypes.oneOf(["xs", "md", "lg"]),
    members: PropTypes.array,
    canRemove: PropTypes.bool,
    canAdd: PropTypes.bool,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
}

export default AvatarGroup