import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

class Loader extends React.Component {

    constructor(props) {
        super(props);
        this.loaderRef = null
    }

    componentDidMount() {
        if(this.loaderRef){
            let parentEl = this.loaderRef.parentElement.parentElement;
            if(parentEl){
                let styles = getComputedStyle(parentEl)
                console.log(parentEl.offsetHeight, styles.paddingTop.split('px')[0], styles.paddingBottom.split('px')[0])
                this.loaderRef.style.minHeight = `${parentEl.offsetHeight - styles.paddingTop.split('px')[0] - styles.paddingBottom.split('px')[0]}px`;

            }

        }
    }

    render() {
        const {actionName, className} = this.props;
        const containerClasses = classnames(
            className,
            "swf-loader"
        )

        return  <>
            <div className={"swf-loader-container"}>
                <div className={containerClasses} ref = {el => this.loaderRef = el}>
                    <div className={"loader-container"}>
                        <span>{actionName}</span>
                        <div className="loader"/>
                    </div>
                </div>
            </div>
        </>

    }
};


Loader.defaultProps = {
    actionName: ""
}

Loader.propTypes = {
    actionName: propTypes.string,
    className: propTypes.oneOfType([propTypes.string, propTypes.object])
}

export default Loader