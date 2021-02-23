import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../Icon/Icon";

class Arrows extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onArrowClick } = this.props;

        return (
            <>
                <div
                    className="arrow arrow-left"
                    onClick={() => onArrowClick(-1)}
                >
                    <div className="arrow-icon">
                        <Icon
                            icon="chevron-left"
                            color="black"
                            size="lg"
                        />
                    </div>
                </div>
                <div
                    className="arrow arrow-right"
                    onClick={() => onArrowClick(1)}
                >
                    <div className="arrow-icon">
                        <Icon
                            icon="chevron-right"
                            color="black"
                            size="lg"
                        />
                    </div>
                </div>
            </>
        );
    }
}

Arrows.propTypes = {
    onArrowClick: PropTypes.func
}

export default Arrows;