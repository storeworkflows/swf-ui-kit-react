import classNames from "classnames";
import * as React from "react";
import {createSubComponent, findByType} from "./utils";
import Icon from "../Icon/Icon";
import {useState} from "react";
import propTypes from "prop-types";

const Wrapper = React.forwardRef((props, ref) => {
    const {children, open, title, showWrapper, manageOpened, onOpen, className} = props;

    const [openSate, setOpenState] = useState(open);
    const openFinal = manageOpened ? open : openSate;

    const setOpen = () => {
        onOpen({isOpened: manageOpened ? open : !openSate})
        !manageOpened && setOpenState(!openSate);
    };

    const arrowIcon = openFinal ? "caret-down-fill" : "caret-right-fill";
    const wrapperClasses = classNames(
        className,
        "wrapper",
        {
            "--open": openFinal,
            "--close": !openFinal
        }
    )

    return <>
        <div className={wrapperClasses} ref={ref}>
            <div className="wrapper-header">
                <div className="header-group" onClick={setOpen}>
                    <Icon icon={arrowIcon}/>
                    <h3 className="title">&nbsp;{title}</h3>
                </div>
            </div>
            {openFinal && <div className={ classNames({"wrapper-content": showWrapper})}>
                {findByType(children, "Content")}
            </div>
            }
        </div>
    </>;
});

Wrapper.Content = createSubComponent("Content");

Wrapper.defaultProps = {
    open: false,
    title: "",
    showWrapper: false,
    manageOpened: false,
    onOpen: () => void 0,
    className: ""
}

Wrapper.propTypes = {
    open: propTypes.bool,
    title: propTypes.string,
    showWrapper: propTypes.bool,
    manageOpened: propTypes.bool,
    onOpen: propTypes.func,
    className: propTypes.oneOfType([propTypes.string, propTypes.object])
}

export default Wrapper