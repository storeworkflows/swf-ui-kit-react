import styles from "./Stepper.scss";
import Step from './Step/Step';
import Link from './Link/Link';
import PropTypes from 'prop-types';
import React from 'react';
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
        return (
            steps.map((step, index) => {
                const isSelected = this.state.selected === index;
                const isBeforeSelected = this.state.selected > index;

                return (
                    <React.Fragment key={'step' + index}>
                        <div onClick={this.selectStep(index)}>
                            <Step
                                icon={step.icon}
                                iconColor={this.props.palette.icon}
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
        const { palette, steps } = this.props;

        return (
            <>
                <style type="text/css">{createCssVariables(palette) + styles}</style>
                <div className="stepper stepper-container">
                    {this.renderSteps(steps)}
                </div>
            </>
        )
    }
}

Stepper.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.object),
    palette: PropTypes.object
}

Stepper.defaultProps = {
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
    }
}

export default Stepper;