import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import findByType, {createSubComponent} from "../utils/findByType";
import AccordionItem from "./AccordionItem";
import {useCallback, useState} from "react";
import isEqual from "react-fast-compare";

const Accordion = React.memo(React.forwardRef((props, ref) => {

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

        return items.map((el, i) => <AccordionItem
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
}

Accordion.propTypes = {
    selectMany: propTypes.bool,
    onItemClicked: propTypes.func,
    className: propTypes.oneOfType([propTypes.object, propTypes.string]),
}

export default Accordion;