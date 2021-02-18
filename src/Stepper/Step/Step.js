import './Step.scss';
import React from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";
import Icon from '../../Icon/Icon';

class Step extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { icon, iconColor, label, hideLabel, selected, beforeSelected, vertical } = this.props;

        return (
            <div className={classnames({
                    'step': true,
                    'step-container': true,
                    '--vertical': vertical
                })}
            >
                <div
                    className={classnames({
                        'step-circle': true,
                        '--selected': selected,
                        '--before-selected': beforeSelected
                    })}
                >
                    <div className="step-icon">
                        <Icon
                            icon={icon}
                            color={iconColor || 'white'}
                            size="xl"
                        />
                    </div>
                </div>
                <div
                    className={classnames({
                        'step-label': true,
                        '--selected': selected,
                    })}
                >
                    <span>{!hideLabel && label}</span>
                </div>
            </div>
        )
    }
}

Step.propTypes = {
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    label: PropTypes.string,
    hideLabel: PropTypes.bool,
    selected: PropTypes.bool,
    beforeSelected: PropTypes.bool,
    vertical: PropTypes.bool
};

Step.defaultProps = {
    icon: '',
    iconColor: '',
    label: '',
    hideLabel: false,
    selected: false,
    beforeSelected: false,
    vertical: false
};

export default Step;