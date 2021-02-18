import styles from "./Stepper.scss";
import Step from './Step/Step';
import Link from './Link/Link';
import PropTypes from 'prop-types';
import React from 'react';

class Stepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: 0}
    }

    selectStep(index) {
        return () => {
            this.setState({
                selected: index
            })
        }
    }

    renderSteps(steps) {
        return (
            steps.map((step, index) => {
                const isSelected = this.state.selected === index;
                const isBeforeSelected = this.state.selected > index;

                return (
                    <React.Fragment key={'step' + index}>
                        <div onClick={this.selectStep(index)}>
                            <Step
                                icon={step.icon}
                                label={step.label}
                                selected={isSelected}
                                beforeSelected={isBeforeSelected}
                            />
                        </div>
                        {(index !== steps.length - 1) &&
                        <Link
                            beforeSelected={isBeforeSelected}
                        />
                        }
                    </React.Fragment>
                )
            })
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