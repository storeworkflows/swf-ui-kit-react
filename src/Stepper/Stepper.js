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
        this.state = { selected: Math.min(props.steps.length - 1, props.selectedItem - 1) };
    }

    selectStep(index, id) {
        if (this.props.onStepClick) {
            this.props.onStepClick({ index, id });
        }

        return () => {
            this.setState({
                selected: index
            })
        }
    }

    renderSteps() {
        const { steps, hideLabels, palette: { icon }, iconSize } = this.props;

        return (
            steps.map((step, index) => {
                const isSelected = this.state.selected === index;
                const isBeforeSelected = this.state.selected > index;
                const iconColor = (isSelected || isBeforeSelected)
                    && (step.progress !== 'none' && step.progress !== 'partial')
                    || step.progress === 'done'
                    ? (icon.finished || 'white') : (icon.unfinished || 'black');

                return (
                    <React.Fragment key={'step' + index}>
                        <div
                            className={classnames({
                                'stepper-item': true,
                                '--selected': isSelected,
                                '--before-selected': isBeforeSelected,
                                '--disabled': step.disabled
                            })}
                            onClick={!step.disabled && this.selectStep(index, step.id)}
                        >
                            <Step
                                icon={step.icon}
                                iconColor={iconColor}
                                iconSize={iconSize}
                                label={step.label}
                                sublabel={step.sublabel}
                                progress={step.progress}
                                hideLabel={hideLabels}
                            />
                        </div>
                        {(index !== steps.length - 1) &&
                        <div
                            className={classnames({
                                'stepper-item': true,
                                '--before-selected': isBeforeSelected
                            })}
                        >
                            <Link/>
                        </div>
                        }
                    </React.Fragment>
                )
            })
        )
    }

    render() {
        const { palette, vertical, showCompletedCount, steps } = this.props;

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
                    {this.renderSteps()}
                </div>
                <div className="stepper-counter">
                    {showCompletedCount &&
                        `${this.state.selected + 1}/${steps.length} Completed`
                    }
                </div>
            </>
        )
    }
}

Stepper.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.object),
    palette: PropTypes.object,
    iconSize: PropTypes.string,
    hideLabels: PropTypes.bool,
    vertical: PropTypes.bool,
    showCompletedCount: PropTypes.bool,
    selectedItem: PropTypes.number,
    onStepClick: PropTypes.func
}

Stepper.defaultProps = {
    steps: [],
    palette: {
        icon: {
            finished: '',
            unfinished: ''
        },
        circle: '',
        link: '',
        label: ''
    },
    iconSize: 'sm',
    hideLabels: false,
    vertical: false,
    showCompletedCount: false,
    selectedItem: 1
}

export default Stepper;