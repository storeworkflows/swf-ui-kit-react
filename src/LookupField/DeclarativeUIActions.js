import * as React from "react";
import propTypes from "prop-types";
import Icon from "../Icon/Icon";
import classNames from "classnames"

import _ from "lodash";

class DeclarativeUIActions extends React.Component {
    constructor(props) {
        super(props);
        this.formatActions = this.formatActions.bind(this);
        this.state = {
            actions: []
        }
    }

    compareIcon(icon) {
        const icons = {
            "circle-info-outline": "info-circle",
            "magnifying-glass-outline": "search"
        }

        return icons[icon];
    }

    formatActions(props) {
        const actions = props.declarativeUiActions;

        const formattedActions = actions?.map(({actionDispatch, assignmentId, icon, requiresValue, tooltip}) => {
            return {
                actionDispatch: actionDispatch,
                icon: this.compareIcon(icon),
                id: assignmentId,
                requiresValue,
                tooltip
            }
        });

        if (!_.isEqual(formattedActions, this.state.actions)) {
            this.setState({
                actions: formattedActions
            })
        }

    }

    render() {
        this.formatActions(this.props)
        const {actions} = this.state;

        return actions.map(action => (
            <div
                key={action?.id}
                title={action?.tooltip}
                className={
                    classNames({
                        "action": true,
                        "visible": !action?.requiresValue || this.props?.record?.sysId
                    })
                }><Icon icon={action?.icon} size="sm"/></div>
        ))
    }

}


DeclarativeUIActions.propTypes = {
    declarativeUiActions: propTypes.array,
    record: propTypes.object.required
}

export default DeclarativeUIActions;