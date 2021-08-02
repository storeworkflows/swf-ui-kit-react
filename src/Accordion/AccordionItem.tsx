import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import findByType from "../utils/findByType";
import Button from "../Button/Button";
import {
    FC,
    forwardRef,
    LegacyRef,
    memo,
    ReactChild,
    ReactElement,
    ReactFragment,
    ReactPortal,
    useMemo,
    useState
} from "react";
import isEqual from "react-fast-compare";
import {noop} from "../utils";

type Children = ReactChild | ReactFragment | ReactPortal;

interface IAccordionItemProps {
    label: string,
    opened: boolean,
    manageOpened: boolean,
    onSelected: Function,
    onClick: Function,
    triggerIcon: string,
    iconToStart: boolean,
    isLastItem: boolean,
    isFirstItem: boolean,
    className: any,
    headerClassName: any,
    id: string
}

const AccordionItem: FC<IAccordionItemProps> = memo(forwardRef((props, ref: LegacyRef<HTMLDivElement> | undefined) => {

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

        const getHeader = useMemo(() => findByType(children, "Header"), [children]);

        const renderHeader = () => {
            const header = getHeader();

            if (!header || !header.length)
                return <label>{label}</label>;

            return header
        }

        const renderContent = () => {
            if (!children) return;

            let contentElements = React.Children.toArray(children).reduce(contentElementsHandler, []);

            return !!contentElements.length && <div className={"accordion-content"}>
                {contentElements}
            </div>;
        }

        const contentElementsHandler = (elements: Children[], element: Children) => {
            if (getHeader()?.length) {
                return getElementsWithoutHeader(elements, element);
            }

            elements.push(element);
            return elements;
        }

        const getElementsWithoutHeader = (elements: Children[], element: Children) => {
            const {type} = getHeader()[0];
            const {type: elementType} = element as any;

            if (type !== elementType) {
                elements.push(element);
            }

            return elements;
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

        return <div className={itemStyles} ref={ref}>
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

    }),
    (prev, next) => {
        return isEqual(prev, next);
    }
    )
;

AccordionItem.defaultProps = {
    triggerIcon: "chevron-down",
    className: "",
    onClick: noop,
    onSelected: noop,
    headerClassName: "",
    id: "-1"
}

export {AccordionItem}