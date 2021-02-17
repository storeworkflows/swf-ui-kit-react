import styles from "./Stepper.scss";
import Step from './Step/Step';
import Link from './Link/Link';
import PropTypes from 'prop-types';
import React from 'react';

class Stepper extends React.Component {
    constructor(props) {
        super(props);
    }

    renderSteps(steps) {
        return (
            steps.map((step, index) => (
                <React.Fragment key={'step' + index}>
                    <Step
                        icon={step.icon}
                        label={step.label}
                    />
                    {(index !== steps.length - 1) &&
                        <Link />
                    }
                </React.Fragment>
            ))
        )
    }

    render() {
        return (
            <>
                <style type="text/css">{styles}</style>
                <div className="stepper stepper-container">
                    {this.renderSteps(this.props.steps)}
                </div>
            </>
        )
    }
}

Stepper.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.object)
}

export default Stepper;