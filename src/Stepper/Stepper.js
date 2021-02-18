import styles from "./Stepper.scss";
import Step from './Step/Step';
import Link from './Link/Link';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from "classnames";
import { createCssVariables } from "./utils";

class Stepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: 0};
    }

    selectStep(index) {
        return () => {
            this.setState({
                selected: index
            })
        }
    }

    renderSteps(steps) {
        const { hideLabels, vertical, palette: { icon } } = this.props;

        return (
            steps.map((step, index) => {
                const isSelected = this.state.selected === index;
                const isBeforeSelected = this.state.selected > index;

                return (
                    <React.Fragment key={'step' + index}>
                        <div
                            className="stepper-item"
                            onClick={this.selectStep(index)}
                        >
                            <Step
                                icon={step.icon}
                                iconColor={icon}
                                label={step.label}
                                selected={isSelected}
                                beforeSelected={isBeforeSelected}
                                hideLabel={hideLabels}
                                vertical={vertical}
                            />
                        </div>
                        {(index !== steps.length - 1) &&
                            <div className="stepper-item">
                                <Link
                                    beforeSelected={isBeforeSelected}
                                    vertical={vertical}
                                />
                            </div>
                        }
                    </React.Fragment>
                )
            })
        )
    }

    render() {
        const { palette, steps, vertical } = this.props;

        return (
            <>
                <style type="text/css">{createCssVariables(palette) + styles}</style>
                <div
                    className={classnames({
                        'stepper': true,
                        'stepper-container': true,
                        '--vertical': vertical
                    })}
                >
                    {this.renderSteps(steps)}
                </div>
            </>
        )
    }
}

Stepper.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.object),
    palette: PropTypes.object,
    hideLabels: PropTypes.bool,
    vertical: PropTypes.bool
}

Stepper.defaultProps = {
    steps: [],
    palette: {
        circle: {
            unfinished: '',
            current: '',
            currentBorder: '',
            currentBorderInner: '',
            finished: '',
            hover: ''
        },
        link: '',
        icon: '',
        label: ''
    },
    hideLabels: false,
    vertical: false
}

export default Stepper;