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
            stepsPerPage: 0,
            containerRightPos: 0,
            containerBottomPos: 0,
            isArrowsNeeded: false,
            arrowsSize: parseInt(getCircleSize(props.iconSize))
        };
        this.stepperContainerRef = false;
    }

    componentDidMount() {
        this.updateStepsPerPageAmount();

        window.addEventListener('resize', () => {
            this.updateStepsPerPageAmount();
        })
    }

    updateStepsPerPageAmount = () => {
        const { vertical } = this.props;

        const containerSize = this.stepperContainerRef[vertical ? 'clientHeight' : 'clientWidth'];
        const stepSize = vertical ? 120 : 200;

        const isArrowsNeeded = this.props.steps.length * stepSize > containerSize;
        const currArrowsSize = isArrowsNeeded ? this.state.arrowsSize : 0;

        const stepsPerPage = Math.floor((containerSize - (currArrowsSize * 2)) / stepSize) || 1;

        this.setState({
            stepsPerPage,
            isArrowsNeeded
        });
    }

    selectStep = (index, id) => () => {
        if (this.props.onStepClick) {
            this.props.onStepClick({ index, id });
        }
    }

    onArrowClick = (direction) => () => {
        const { stepsPerPage } = this.state;
        const { steps, vertical } = this.props;

        const stepSize = vertical ? 120 : 150;

        const currContainerPosVariable = vertical ? 'containerBottomPos' : 'containerRightPos';
        const newContainerPosValue = this.state[currContainerPosVariable] + (stepSize * direction);
        const maxContainerPos = stepSize * (steps.length - stepsPerPage);

        this.setState({
            [currContainerPosVariable]:
                Math.min(Math.max(newContainerPosValue, 0), maxContainerPos)
        })
    }

    renderSteps() {
        const { steps, hideLabels, palette: { icon }, iconSize, selectedItem } = this.props;

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
        const { palette, vertical, completedCounter, steps, iconSize, selectedItem } = this.props;
        const { containerRightPos, containerBottomPos, stepsPerPage, isArrowsNeeded, arrowsSize } = this.state;

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
                            width: vertical ? '100%' : stepsPerPage * 150,
                            height: vertical ? stepsPerPage * 120 : arrowsSize * 4
                        }}
                    >
                        <div
                            className="steps-all"
                            style={{
                                width: isArrowsNeeded && !vertical ? steps.length * 150 : '100%',
                                right: vertical ? 0 : containerRightPos,
                                bottom: vertical ? containerBottomPos : 0
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
    completedCounter: false,
    selectedItem: 1
}

export default Stepper;