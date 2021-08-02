import {FC, memo, LegacyRef, useCallback, useState, forwardRef} from "react";
import classnames from "classnames";

import findByType, {createSubComponent} from "../utils/findByType";
import {AccordionItem} from "./AccordionItem";

interface IAccordion {
    Item?: FC<any>,
    Header?: FC<any>
}

interface IAccordionProps {
    selectMany: boolean,
    onItemClicked: Function,
    className: any
}

const Accordion: IAccordion & FC<IAccordionProps> = memo(forwardRef((props, ref: LegacyRef<HTMLDivElement> | undefined) => {

    const {children, selectMany, onItemClicked, className} = props;
    const [selectedItemKey, setSelectedItemKey] = useState("-1")

    const itemSelected = useCallback(({key}) => {
        let updatedKey = (selectedItemKey === key) ? "-1" : key;
        !selectMany && setSelectedItemKey(updatedKey)

        onItemClicked({key});
    }, [onItemClicked, selectedItemKey, selectMany])

    const renderItems = () => {
        const items = findByType(children, "Item");

        if (!items || !items.length)
            return null;

        return items.map((el: any, i: number) => <AccordionItem
                key={el.key}
                opened={el.key === selectedItemKey}
                manageOpened={!selectMany}
                onSelected={itemSelected}
                isLastItem={i === (items.length - 1)}
                isFirstItem={i === 0}
                id={el.key}
                {...el.props}
            />
        );
    }

    const classes = classnames(
        className,
        "accordion-container"
    )

    return <div className={classes} ref={ref}>
        {renderItems()}
    </div>
}));

Accordion.Item = createSubComponent("Item");
Accordion.Header = createSubComponent("Header");

Accordion.defaultProps = {
    selectMany: true,
    onItemClicked: () => void 0,
    className: ""
};

export {Accordion};