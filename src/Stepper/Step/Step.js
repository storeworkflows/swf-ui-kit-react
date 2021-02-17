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
        const { icon, label, selected, onClick } = this.props;

        return (
            <div className="step step-container" onClick={onClick}>
                <div className="step-circle">
                    <div className="step-icon">
                        <Icon
                            icon={icon}
                            color="white"
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
                    <span>{label}</span>
                </div>
            </div>
        )
    }
}

Step.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default Step;