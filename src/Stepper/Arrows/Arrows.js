import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../Icon/Icon";

class Arrows extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onArrowClick, arrowsSize, arrowsColor } = this.props;

        return (
            <>
                <div
                    className="arrow arrow-left"
                    onClick={() => onArrowClick(-1)}
                >
                    <div className="arrow-icon">
                        <Icon
                            icon="chevron-left"
                            color={arrowsColor}
                            size={arrowsSize}
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
                            color={arrowsColor}
                            size={arrowsSize}
                        />
                    </div>
                </div>
            </>
        );
    }
}

Arrows.propTypes = {
    onArrowClick: PropTypes.func,
    arrowsSize: PropTypes.string,
    arrowsColor: PropTypes.string
}

Arrows.defaultProps = {
    onArrowClick: () => {},
    arrowsSize: 'md',
    arrowsColor: 'black'
}

export default Arrows;