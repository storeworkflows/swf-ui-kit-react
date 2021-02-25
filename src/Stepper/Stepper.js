import styles from "./Stepper.scss";
import Step from './Step/Step';
import Arrows from "./Arrows/Arrows";
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
            containerWidth: '100%',
            containerRightPos: 0
        };
        this.stepperRef = false;
        this.stepperItemRef = false;
    }

    componentDidMount() {
        this.setState({
            containerWidth: 200 * this.props.steps.length,
            stepsPerPage: Math.floor(this.stepperRef.clientWidth / 200)
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
                    <React.Fragment key={'step' + index}>
                        <div
                            className={classnames({
                                'stepper-item': true,
                                '--selected': isSelected,
                                '--before-selected': isBeforeSelected,
                                '--disabled': step.disabled
                            })}
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
                    </React.Fragment>
                )
            })
        )
    }

    render() {
        const { palette, vertical, showCompletedCount, steps, arrows } = this.props;
        const { selected, containerWidth, containerRightPos, stepsPerPage } = this.state;

        const isArrowsNeeded = stepsPerPage < steps.length;

        return (
            <>
                <style type="text/css">{createCssVariables(palette) + styles}</style>
                <div
                    className="stepper"
                    ref={elm => this.stepperRef = elm}
                >
                    {isArrowsNeeded &&
                    <div
                        className="arrow arrow-left"
                        onClick={this.onArrowClick(-1)}
                    >
                        <div className="arrow-icon">
                            <Icon
                                icon="chevron-left"
                                color={arrows.color}
                                size={arrows.size}
                            />
                        </div>
                    </div>
                    }

                    <div
                        className="stepper-wrapper"
                        style={{
                            width: stepsPerPage * 200
                        }}
                    >
                        <div
                            className={classnames({
                                'stepper-container': true,
                                '--vertical': vertical
                            })}
                            style={{
                                width: containerWidth,
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
                                color={arrows.color}
                                size={arrows.size}
                            />
                        </div>
                    </div>
                    }

                    {/*{isArrowsNeeded &&*/}
                    {/*<Arrows*/}
                    {/*    onArrowClick={this.onArrowClick()}*/}
                    {/*    arrowsColor={arrows.color}*/}
                    {/*    arrowsSize={arrows.size}*/}
                    {/*/>*/}
                    {/*}*/}

                    {/*<div className="stepper-counter">*/}
                    {/*    {showCompletedCount &&*/}
                    {/*    `${selected + 1}/${steps.length} Completed`*/}
                    {/*    }*/}
                    {/*</div>*/}
                </div>
            </>

        )
    }
}

Stepper.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.object),
    palette: PropTypes.object,
    iconSize: PropTypes.string,
    arrows: PropTypes.object,
    hideLabels: PropTypes.bool,
    vertical: PropTypes.bool,
    showCompletedCount: PropTypes.bool,
    selectedItem: PropTypes.number,
    onStepClick: PropTypes.func,
    stepsPerPage: PropTypes.number
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
    arrows: {
        color: 'black',
        size: 'md'
    },
    iconSize: 'sm',
    hideLabels: false,
    vertical: false,
    showCompletedCount: false,
    selectedItem: 1
}

export default Stepper;