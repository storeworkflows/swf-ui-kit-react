import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import findByType from "../utils/findByType";
import Button from "../Button/Button";
import {useState} from "react";

const Header = () => null;

const AccordionItem = React.forwardRef((props, ref) => {

    const {
        manageOpened, onClick, onSelected, opened, children, className, label,
        triggerIcon, iconToStart, headerClassName, isLastItem, isFirstItem
    } = props;
    const [isOpened, setIsOpened] = useState(opened)

    const itemClicked = () => {
        onClick({opened: manageOpened ? opened : !isOpened});
        !manageOpened && setIsOpened(!isOpened)
        onSelected();
    }

    const renderHeader = () => {
        const header = findByType(children, "Header");

        if (!header || header.length < 1)
            return <label>{label}</label>;

        return header
    }

    const renderContent = () => {
        const header = findByType(children, "Header");

        let contentElements = [].concat(children);
        if (header && header.length > 0)
            contentElements = contentElements.filter(child => child.type !== header[0].type)

        if (contentElements.length > 0)
            return <div className={"accordion-content"}>
                {contentElements}
            </div>;

        return null;
    }

    const renderIcon = () => {
        let classes = classnames({
            "trigger-icon": true,
            "left": iconToStart,
            "right": !iconToStart
        })

        return <Button
            className={classes}
            icon={triggerIcon}
            variant={"tertiary"}
        />
    }

    const currentOpened = manageOpened ? opened : isOpened;

    const itemStyles = classnames(
        className,
        {
            "accordion-item": true,
            "last": isLastItem,
            "first": isFirstItem
        })

    const headerContentStyles = classnames(
        {
            "accordion-header-content": true,
            "left": !iconToStart,
            "right": iconToStart,
            "opened": currentOpened
        })

    return (
        <>
            <div className={itemStyles} ref={ref}>
                <div
                    className={classnames(headerClassName, "accordion-item-header")}
                    onClick={itemClicked}
                >
                    {iconToStart && renderIcon()}
                    <div className={headerContentStyles}>
                        {renderHeader()}
                    </div>
                    {!iconToStart && renderIcon()}
                </div>
                {currentOpened && renderContent()}
            </div>
        </>
    )

});

AccordionItem.defaultProps = {
    opened: false,
    manageOpened: false,
    triggerIcon: "chevron-down",
    iconToStart: false,
    className: "",
    onClick: () => void 0,
    onSelected: () => void 0,
    isLastItem: false,
    isFirstItem: false,
    headerClassName: ""
}

AccordionItem.propTypes = {
    label: propTypes.string,
    opened: propTypes.bool,
    manageOpened: propTypes.bool,
    onSelected: propTypes.func,
    onClick: propTypes.func,
    triggerIcon: propTypes.string,
    iconToStart: propTypes.bool,
    isLastItem: propTypes.bool,
    isFirstItem: propTypes.bool,
    className: propTypes.oneOfType([propTypes.object, propTypes.string]),
    headerClassName: propTypes.oneOfType([propTypes.object, propTypes.string])
}

export default AccordionItem