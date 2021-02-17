import './styles.scss';
import styles from "../styles.scss";
import React from 'react';

class Step extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="step step-container">
                <div className="step-circle">
                    Circle
                </div>
                <div className="step-label">
                    Label
                </div>
            </div>
        )
    }
}

export default Step;