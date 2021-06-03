import Step from './Step';
import PropTypes from 'prop-types';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import classnames from "classnames";
import {createCssVariables, getCircleSize} from "./utils";
import Icon from "../Icon/Icon";
import propTypes from "prop-types";

const Stepper = React.forwardRef((props, ref) => {
    const {palette, vertical, completedCounter, steps, iconSize,
        selectedItem, disableScroll, hideLabels, onStepClick} = props;

    const [visibleStepsAmount, setVisibleStepsAmount] = useState(0);
    const [stepsCurrShiftedPos, setStepsCurrShiftedPos] = useState(0);
    const [isArrowsNeeded, setIsArrowsNeeded] = useState(false);
    const stepSize = vertical ? 120 : 140;
    const arrowsSize = parseInt(getCircleSize(iconSize));

    const stepperContainerRef = useRef(null);

    const updateVisibleStepsAmount = useCallback(() => {
        const containerSize = stepperContainerRef?.current[vertical ? 'clientHeight' : 'clientWidth'];
        const isArrowsNeeded = steps.length * stepSize > containerSize;
        const currArrowsSize = isArrowsNeeded ? arrowsSize : 0;

        setIsArrowsNeeded(isArrowsNeeded);
        setVisibleStepsAmount(Math.floor((containerSize - (currArrowsSize * 2)) / stepSize) || 1);
    }, [stepperContainerRef, vertical, stepSize, steps.length, arrowsSize])

    useEffect(() => {
        if(!disableScroll) {
            updateVisibleStepsAmount();
            window.addEventListener('resize', updateVisibleStepsAmount);

            shiftStepsAccordinglyToSelectedItem();
        }
        return window.removeEventListener('resize', updateVisibleStepsAmount);
    }, [updateVisibleStepsAmount])

    useEffect(() => {
        !disableScroll && shiftStepsAccordinglyToSelectedItem();
    }, [selectedItem])

    const shiftStepsAccordinglyToSelectedItem = () => {
        if (!isArrowsNeeded) return;

        const newStepsPosValue = selectedItem * stepSize;
        const maxStepsPos = stepSize * (steps.length - visibleStepsAmount);

        setStepsCurrShiftedPos(Math.min(Math.max(newStepsPosValue, 0), maxStepsPos))
    }

    const onArrowClick = (direction) => {
        const newStepsPosValue = stepsCurrShiftedPos + (stepSize * direction);
        const maxStepsPos = stepSize * (steps.length - visibleStepsAmount);

        setStepsCurrShiftedPos(Math.min(Math.max(newStepsPosValue, 0), maxStepsPos));
    }

    const renderSteps = () => {
        const {icon} = palette;

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
                        onClick={() => !step.disabled && onStepClick({ index, id : step.id })}
                    >
                        <Step
                            iconColor={iconColor}
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


    return (
        <div
            className={classnames({
                'stepper': true,
                '--vertical': vertical
            })}
            ref={ref}
        >
            <style type="text/css">{createCssVariables(palette, iconSize)}</style>
            <div
                className="stepper-container"
                ref={elm => stepperContainerRef.current = elm}
            >
                {isArrowsNeeded &&
                <div
                    className="arrow arrow-left"
                    onClick={() => onArrowClick(-1)}
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
                        {renderSteps()}
                    </div>
                </div>

                {isArrowsNeeded &&
                <div
                    className="arrow arrow-right"
                    onClick={() => onArrowClick(1)}
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

});

Stepper.propTypes = {
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string, PropTypes.number
            ]),
            icon: PropTypes.string,
            label: PropTypes.string,
            sublabel: PropTypes.string,
            progress: PropTypes.oneOf(["none", "partial", "done"]),
            disabled: PropTypes.bool
        })
    ),
    palette: PropTypes.shape({
        icon: PropTypes.shape({
            finished: PropTypes.string,
            unfinished: PropTypes.string
        }),
        circle: PropTypes.string,
        link: PropTypes.string,
        label: PropTypes.string,
        arrows: PropTypes.string
    }),
    iconSize: propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
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
    disableScroll: false,
    onStepClick: () => void 0
}

export default React.useMemo(Stepper);