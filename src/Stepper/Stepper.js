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
            containerBottomPos: 0,
            isArrowsNeeded: false
        };
        this.stepperContainerRef = false;
        this.arrowRef = false;
    }

    componentDidMount() {
        this.updateStepsPerPageAmount();

        window.addEventListener('resize', () => {
            this.updateStepsPerPageAmount();
        })
    }

    updateStepsPerPageAmount() {
        const { vertical } = this.props;

        const currArrowsSize = this.state.isArrowsNeeded ? this.arrowRef?.clientWidth * 2 : 0;
        const stepsPerPage = Math.floor((this.stepperContainerRef[vertical ? 'clientHeight' : 'clientWidth'] - currArrowsSize) / (vertical ? 120 : 200)) || 1;

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
        const { stepsPerPage } = this.state;
        const { steps, vertical } = this.props;

        return () => {
            const newContainerPosValue = this.state[vertical ? 'containerBottomPos' : 'containerRightPos']
                + ((vertical ? 120 : 200) * direction);
            const maxContainerPos = (vertical ? 120 : 200) * (steps.length - stepsPerPage);

            this.setState({
                [vertical ? 'containerBottomPos' : 'containerRightPos']:
                    Math.min(Math.max(newContainerPosValue, 0), maxContainerPos)
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
                            'steps-item': true,
                            '--selected': isSelected,
                            '--before-selected': isBeforeSelected,
                            '--disabled': step.disabled
                        })}
                        key={'step' + index}
                        onClick={!step.disabled && this.selectStep(index, step.id)}
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
        const { palette, vertical, completedCounter, steps, iconSize } = this.props;
        const { selected, containerRightPos, containerBottomPos, stepsPerPage, isArrowsNeeded } = this.state;

        return (
            <div
                className={classnames({
                    'stepper': true,
                    '--vertical': vertical
                })}
            >
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
                                icon={vertical ? "chevron-up" : "chevron-left"}
                                color={palette.arrows}
                            />
                        </div>
                    </div>
                    }

                    <div
                        className="steps-shown"
                        style={{
                            width: isArrowsNeeded && !vertical ? stepsPerPage * 200 : '100%',
                            height: stepsPerPage * 120
                        }}
                    >
                        <div
                            className="steps-all"
                            style={{
                                width: isArrowsNeeded && !vertical ? steps.length * 200 : '100%',
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