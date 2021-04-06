import Step from './Step/Step';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from "classnames";
import { createCssVariables, getCircleSize } from "./utils";
import Icon from "../Icon/Icon";

class Stepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleStepsAmount: 0,
            stepsCurrShiftedPos: 0,
            isArrowsNeeded: false,
            stepSize: this.props.vertical ? 120 : 140,
            arrowsSize: parseInt(getCircleSize(this.props.iconSize))
        };
        this.stepperContainerRef = false;
    }

    componentDidMount() {
        if (this.props.disableScroll) return;

        this.updateVisibleStepsAmount();
        window.addEventListener('resize', this.updateVisibleStepsAmount);

        this.shiftStepsAccordinglyToSelectedItem();
    }

    componentDidUpdate(prevProps) {
        if (!this.props.disableScroll && (this.props.selectedItem !== prevProps.selectedItem)) {
            this.shiftStepsAccordinglyToSelectedItem();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateVisibleStepsAmount);
    }

    shiftStepsAccordinglyToSelectedItem = () => {
        return this.setState((state, props) => {
            const { steps, selectedItem } = props;
            const { stepSize, visibleStepsAmount, isArrowsNeeded } = state;

            if (!isArrowsNeeded) return;

            const newStepsPosValue = selectedItem * stepSize;
            const maxStepsPos = stepSize * (steps.length - visibleStepsAmount);

            return {
                stepsCurrShiftedPos: Math.min(Math.max(newStepsPosValue, 0), maxStepsPos)
            }
        })
    }

    updateVisibleStepsAmount = () => {
        const { vertical, steps } = this.props;
        const { stepSize, arrowsSize } = this.state;

        const containerSize = this.stepperContainerRef[vertical ? 'clientHeight' : 'clientWidth'];

        const isArrowsNeeded = steps.length * stepSize > containerSize;
        const currArrowsSize = isArrowsNeeded ? arrowsSize : 0;

        const visibleStepsAmount = Math.floor((containerSize - (currArrowsSize * 2)) / stepSize) || 1;

        this.setState({
            visibleStepsAmount,
            isArrowsNeeded
        });
    }

    selectStep = (index, id) => () => {
        if (this.props.onStepClick) {
            this.props.onStepClick({ index, id });
        }
    }

    onArrowClick = (direction) => () => {
        const { visibleStepsAmount, stepSize, stepsCurrShiftedPos } = this.state;
        const { steps } = this.props;

        const newStepsPosValue = stepsCurrShiftedPos + (stepSize * direction);
        const maxStepsPos = stepSize * (steps.length - visibleStepsAmount);

        this.setState({
            stepsCurrShiftedPos: Math.min(Math.max(newStepsPosValue, 0), maxStepsPos)
        });
    }

    renderSteps() {
        const { steps, hideLabels, palette: { icon }, iconSize, selectedItem, disableScroll } = this.props;
        const { stepSize } = this.state;

        return (
            steps.map((step, index) => {
                const isSelected = selectedItem === index;
                const isBeforeSelected = selectedItem > index;
                const iconColor = (isSelected || isBeforeSelected)
                && (step.progress !== 'none' && step.progress !== 'partial')
                || step.progress === 'done'
                    ? (icon.finished || 'white') : (icon.unfinished || 'black');

                return (
                    <div
                        className={classnames({
                            'steps-item': true,
                            '--selected': isSelected,
                            '--before-selected': isBeforeSelected,
                            '--disabled': step.disabled
                        })}
                        key={'step' + index}
                        onClick={step.disabled ? undefined : this.selectStep(index, step.id)}
                        style={{maxWidth: disableScroll ? '100%' : stepSize}}
                    >
                        <Step
                            iconColor={iconColor}
                            iconSize={iconSize}
                            step={step}
                            hideLabel={hideLabels}
                            isSelected={isSelected}
                            isBeforeSelected={isBeforeSelected}
                        />
                    </div>
                )
            })
        )
    }

    render() {
        const { palette, vertical, completedCounter, steps, iconSize, selectedItem, disableScroll } = this.props;
        const { stepsCurrShiftedPos, visibleStepsAmount, isArrowsNeeded, arrowsSize, stepSize } = this.state;

        return (
            <div
                className={classnames({
                    'stepper': true,
                    '--vertical': vertical
                })}
            >
                <style type="text/css">{createCssVariables(palette, iconSize)}</style>
                <div
                    className="stepper-container"
                    ref={elm => this.stepperContainerRef = elm}
                >
                    {isArrowsNeeded &&
                    <div
                        className="arrow arrow-left"
                        onClick={this.onArrowClick(-1)}
                    >
                        <div className="arrow-icon">
                            <Icon
                                icon={vertical ? "chevron-up" : "chevron-left"}
                                color={palette.arrows}
                            />
                        </div>
                    </div>
                    }

                    <div
                        className={classnames({
                            'steps-shown': true,
                            '--vertical': vertical
                        })}
                        style={{
                            width: vertical || disableScroll ? '100%' : visibleStepsAmount * stepSize,
                            height: vertical ? visibleStepsAmount * stepSize : arrowsSize * 4
                        }}
                    >
                        <div
                            className="steps-all"
                            style={{
                                width: isArrowsNeeded && !vertical ? steps.length * stepSize : '100%',
                                right: vertical ? 0 : stepsCurrShiftedPos,
                                bottom: vertical ? stepsCurrShiftedPos : 0
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
                                icon={vertical ? "chevron-down" : "chevron-right"}
                                color={palette.arrows}
                            />
                        </div>
                    </div>
                    }
                </div>
                <div className="stepper-counter">
                    {completedCounter &&
                    `${selectedItem + 1}/${steps.length} Completed`
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
    completedCounter: PropTypes.bool,
    selectedItem: PropTypes.number,
    onStepClick: PropTypes.func,
    disableScroll: PropTypes.bool
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
    completedCounter: false,
    selectedItem: 0,
    disableScroll: false
}

export default Stepper;