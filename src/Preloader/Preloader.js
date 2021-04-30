import * as React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

class Preloader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { count, items, width, height, flexDirectionGeneral, background, mainStyles, blur } = this.props;

        return (
            <div className="swf-preloader" style={{ flexDirection: flexDirectionGeneral, flexWrap: 'wrap' }}>
                {new Array(count).fill(null).map((el, i) => (
                    <div
                        className={classNames({ "mock-container": true, "gray": background })}
                        style={Object.assign({ width, height }, mainStyles)}
                        key={`${width}-${height}-${count}-${i}-preloader-mock-container`}
                    >
                        <div className="light-container">
                            <div className="light" style={{ filter: `blur(${blur})` }}/>
                        </div>

                        {items.map(({ repeat, width, height, styles, itemStyles }, i) => (
                            <div
                                style={Object.assign({ display: "flex" }, itemStyles)}
                                key={`${width}-${height}-${count}-${repeat}-${i}-preloader-row-container`}
                            >
                                {new Array(repeat).fill(null).map((_, i) => {
                                    const style = styles ? styles[i] : {};
                                    return (
                                        <div
                                            className="mock-row"
                                            style={Object.assign({ width, height }, style)}
                                            key={`${width}-${height}-${count}-${repeat}-${i}-preloader-mock-row`}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}
Preloader.defaultProps = {
    count: 0,
    items: [],
    width: "auto",
    height: "auto",
    flexDirectionGeneral: "column",
    background: true,
    mainStyles: {},
    blur: "4rem"
};

Preloader.propTypes = {
    count: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.shape({
        repeat: PropTypes.number,
        width: PropTypes.string,
        height: PropTypes.string,
        styles: PropTypes.arrayOf(PropTypes.object),
        itemStyles: PropTypes.object
    })),
    width: PropTypes.string,
    height: PropTypes.string,
    flexDirectionGeneral: PropTypes.oneOf([
        "row", "row-reverse", "column", "column-reverse"
    ]),
    background: PropTypes.bool,
    mainStyles: PropTypes.object,
    blur: PropTypes.string
}

export default Preloader;
