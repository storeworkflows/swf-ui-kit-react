import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import findByType from "../utils/findByType";
import Button from "../Button/Button";
import {useState} from "react";

const AccordionItem = React.forwardRef((props, ref) => {

    const {
        manageOpened, onClick, onSelected, opened, children, className, label,
        triggerIcon, iconToStart, headerClassName, isLastItem, isFirstItem, id
    } = props;
    const [isOpened, setIsOpened] = useState(opened)

    const itemClicked = () => {
        onClick({opened: manageOpened ? opened : !isOpened});
        !manageOpened && setIsOpened(!isOpened)
        onSelected({key: id});
    }

    const renderHeader = () => {
        const header = findByType(children, "Header");

        if (!header || !header.length)
            return <label>{label}</label>;

        return header
    }

    const renderContent = () => {
        if(!children) return;

        const header = findByType(children, "Header");
        let contentElements = React.Children.toArray(children).slice();

        if (header && header.length){
            const headerType = header[0].type;
            contentElements = contentElements.filter(child => child.type !== headerType)
        }

        if (contentElements.length)
            return <div className={"accordion-content"}>
                {contentElements}
            </div>;

        return null;
    }

    const renderIcon = () => {
        const classes = classnames({
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
    headerClassName: "",
    id: "-1"
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
    headerClassName: propTypes.oneOfType([propTypes.object, propTypes.string]),
    id: propTypes.string
}

export default React.memo(AccordionItem)