import styles from "./styles.scss";
import Step from './Step/Step';
import React from 'react';

class Stepper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <style type="text/css">{styles}</style>
                <div>
                    the Stepper(c)
                </div>
                <Step/>
            </>
        )
    }
}

export default Stepper;