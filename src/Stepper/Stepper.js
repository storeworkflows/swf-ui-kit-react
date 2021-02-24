import styles from "./Stepper.scss";
import Step from './Step/Step';
import Link from './Link/Link';
import Arrows from "./Arrows/Arrows";
import PropTypes from 'prop-types';
import React from 'react';
import classnames from "classnames";
import { createCssVariables } from "./utils";

class Stepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: Math.min(props.steps.length - 1, props.selectedItem - 1),
            itemWidth: 0,
            containerWidth: '100%',
            containerRightPos: 0
        };
        this.stepperRef = false;
        this.stepperItemRef = false;
    }

    componentDidMount() {
        this.setState({
            containerWidth: this.stepperRef.clientWidth / this.props.stepsPerPage * this.props.steps.length || '100%'
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.stepperItemRef.clientWidth !== prevState.itemWidth) {
            this.setState({
                itemWidth: this.stepperItemRef.clientWidth,
            });
        }
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

    onArrowClick() {
        const { containerRightPos, itemWidth } = this.state;
        const { steps } = this.props;

        return (direction) => {
            const newContainerRightValue = containerRightPos + (itemWidth * 2 * direction);
            const maxRightPos = (itemWidth * (steps.length * 2 - 1) - this.stepperRef.clientWidth + 40);

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
        const { palette, vertical, showCompletedCount, steps, stepsPerPage } = this.props;
        const { selected, containerWidth, containerRightPos } = this.state;

        return (
            <div
                className='stepper'
                ref={elm => this.stepperRef = elm}
            >
                <style type="text/css">{createCssVariables(palette) + styles}</style>
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
                {stepsPerPage &&
                <Arrows
                    onArrowClick={this.onArrowClick()}
                />
                }
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
    iconSize: 'sm',
    hideLabels: false,
    vertical: false,
    showCompletedCount: false,
    selectedItem: 1
}

export default Stepper;