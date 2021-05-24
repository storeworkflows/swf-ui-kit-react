import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import {useEffect, useRef} from "react";

const Loader = (props) => {

    const loaderRef = useRef(null);
    useEffect(() => {
        if (loaderRef?.current) {
            let parentEl = loaderRef.current.parentElement.parentElement;
            if (parentEl) {
                let styles = getComputedStyle(parentEl)
                loaderRef.current.style.minHeight = `${parentEl.offsetHeight - styles.paddingTop.split('px')[0] - styles.paddingBottom.split('px')[0]}px`;
            }
        }
    }, [])


    const {actionName, className} = props;
    const containerClasses = classnames(
        className,
        "swf-loader"
    )

    return <>
        <div className={"swf-loader-container"}>
            <div className={containerClasses} ref={loaderRef}>
                <div className={"loader-container"}>
                    <span>{actionName}</span>
                    <div className="loader"/>
                </div>
            </div>
        </div>
    </>
};


Loader.defaultProps = {
    actionName: "",
    className: ""
}

Loader.propTypes = {
    actionName: propTypes.string,
    className: propTypes.oneOfType([propTypes.string, propTypes.object])
}

export default React.memo(Loader)