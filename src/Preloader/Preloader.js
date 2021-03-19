import { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

class Preloader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { count, items, width, height, flexDirectionGeneral, background, mainStyles, blur } = this.props;
        return <div className="swf-preloader" style={{ flexDirection: flexDirectionGeneral }}>
            {new Array(count).fill(null).map((el, i) => <div className={classNames({ "mock-container": true, "gray": background })} style={Object.assign({ width, height }, mainStyles)} key={i}>
                <div className="light-container">
                    <div className="light" style={{ filter: `blur(${blur})` }}/>
                </div>

                {items.map(({ repeat, width, height, styles, itemStyles }) => <div style={Object.assign({ display: "flex" }, itemStyles)}>
                    {new Array(repeat).fill(null).map((_, index) => {
                        const style = styles ? styles[index] : {};
                        return (<div className="mock-row" style={Object.assign({ width, height }, style)} key={index}/>);
                    })}
                </div>)}

            </div>)}
        </div>;
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
    items: PropTypes.array,
    width: PropTypes.string,
    height: PropTypes.string,
    flexDirectionGeneral: PropTypes.string,
    background: PropTypes.bool,
    mainStyles: PropTypes.object,
    blur: PropTypes.string
}

export default Preloader;
