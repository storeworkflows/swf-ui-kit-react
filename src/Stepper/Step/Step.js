import './Step.scss';
import React from 'react';
import classnames from 'classnames';
import PropTypes from "prop-types";
import Icon from '../../Icon/Icon';
import { getCircleSize } from "../utils";

class Step extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { icon, iconColor, iconSize, label, sublabel, progress, hideLabel } = this.props;

        return (
            <div className='step-container'>
                <div className="step-body">
                    <div className="step-line --before"/>

                    <div
                        className={classnames({
                            'step-circle': true,
                            [`--${progress}`]: progress
                        })}
                        style={{
                            width: getCircleSize(iconSize),
                            height: getCircleSize(iconSize)
                        }}
                    >
                        <div className="step-icon">
                            {icon &&
                            <Icon
                                icon={icon}
                                color={iconColor || 'white'}
                                size={iconSize}
                                customSize={typeof iconSize === 'number' ? iconSize : undefined}
                            />
                            }
                        </div>
                    </div>

                    <div className="step-line --after"/>
                </div>

                <div className="step-label">
                    <span>{!hideLabel && label}</span>
                    <span className="step-sublabel">{!hideLabel && sublabel}</span>
                </div>
            </div>
        )
    }
}

Step.propTypes = {
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.string,
    label: PropTypes.string,
    sublabel: PropTypes.string,
    progress: PropTypes.string,
    hideLabel: PropTypes.bool
};

Step.defaultProps = {
    icon: '',
    iconColor: 'white',
    iconSize: 'sm',
    label: '',
    sublabel: '',
    progress: '',
    hideLabel: false
};

export default Step;