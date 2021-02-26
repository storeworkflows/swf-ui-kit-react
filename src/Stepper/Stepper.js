import styles from "./Stepper.scss";
import Step from './Step/Step';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from "classnames";
import { createCssVariables } from "./utils";
import Icon from "../Icon/Icon";

class Stepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: Math.min(props.steps.length - 1, props.selectedItem - 1),
            stepsPerPage: 0,
            containerRightPos: 0,
            isArrowsNeeded: false
        };
        this.stepperContainerRef = false;
        this.stepperItemRef = false;
        this.arrowRef = false;
    }

    componentDidMount() {
        this.updateStepsPerPageAmount();

        window.addEventListener('resize', () => {
            this.updateStepsPerPageAmount();
        })
    }

    updateStepsPerPageAmount() {
        const currArrowsWidth = this.state.isArrowsNeeded ? this.arrowRef?.clientWidth * 2 : 0;
        const stepsPerPage = Math.floor((this.stepperContainerRef.clientWidth - currArrowsWidth) / 200) || 1;

        this.setState({
            stepsPerPage,
            isArrowsNeeded: stepsPerPage < this.props.steps.length
        });
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

    onArrowClick(direction) {
        const { containerRightPos, stepsPerPage } = this.state;
        const { steps } = this.props;

        return () => {
            const newContainerRightValue = containerRightPos + (200 * direction);
            const maxRightPos = 200 * (steps.length - stepsPerPage);

            this.setState({
                containerRightPos: Math.min(Math.max(newContainerRightValue, 0), maxRightPos)
            })
        }
    }

    renderSteps() {
        const { steps, hideLabels, palette: { icon }, iconSize } = this.props;
        const { selected } = this.state;

        return (
            steps.map((step, index) => {
                const isSelected = selected === index;
                const isBeforeSelected = selected > index;
                const iconColor = (isSelected || isBeforeSelected)
                && (step.progress !== 'none' && step.progress !== 'partial')
                || step.progress === 'done'
                    ? (icon.finished || 'white') : (icon.unfinished || 'black');

                return (
                    <div
                        className={classnames({
                            'stepper-item': true,
                            '--selected': isSelected,
                            '--before-selected': isBeforeSelected,
                            '--disabled': step.disabled
                        })}
                        key={'step' + index}
                        onClick={!step.disabled && this.selectStep(index, step.id)}
                        ref={elm => this.stepperItemRef = elm}
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
                )
            })
        )
    }

    render() {
        const { palette, vertical, showCompletedCount, steps, iconSize } = this.props;
        const { selected, containerRightPos, stepsPerPage, isArrowsNeeded } = this.state;

        // const isArrowsNeeded = stepsPerPage < steps.length;

        return (
            <div className="stepper">
                <style type="text/css">{createCssVariables(palette, iconSize) + styles}</style>
                <div
                    className="stepper-container"
                    ref={elm => this.stepperContainerRef = elm}
                >
                    {isArrowsNeeded &&
                    <div
                        className="arrow arrow-left"
                        onClick={this.onArrowClick(-1)}
                        ref={elm => this.arrowRef = elm}
                    >
                        <div className="arrow-icon">
                            <Icon
                                icon="chevron-left"
                                color={palette.arrows}
                            />
                        </div>
                    </div>
                    }

                    <div
                        className="steps-wrapper"
                        style={{
                            width: isArrowsNeeded ? stepsPerPage * 200 : '100%'
                        }}
                    >
                        <div
                            className={classnames({
                                'steps': true,
                                '--vertical': vertical
                            })}
                            style={{
                                width: isArrowsNeeded ? steps.length * 200 : '100%',
                                right: containerRightPos
                            }}
                        >
                            {this.renderSteps()}
                        </div>
                    </div>

                    {isArrowsNeeded &&
                    <div
                        className="arrow arrow-right"
                        onClick={this.onArrowClick(1)}
                    >
                        <div className="arrow-icon">
                            <Icon
                                icon="chevron-right"
                                color={palette.arrows}
                            />
                        </div>
                    </div>
                    }
                </div>
                <div className="stepper-counter">
                    {showCompletedCount &&
                    `${selected + 1}/${steps.length} Completed`
                    }
                </div>
            </div>

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
        label: '',
        arrows: 'black'
    },
    iconSize: 'sm',
    hideLabels: false,
    vertical: false,
    showCompletedCount: false,
    selectedItem: 1
}

export default Stepper;