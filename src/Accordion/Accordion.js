import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import findByType, {createSubComponent} from "../utils/findByType";
import AccordionItem from "./AccordionItem";

class Accordion extends React.Component {

    constructor(props) {
        super(props);
        this.itemSelected = this.itemSelected.bind(this);

        this.state = {
            selectedItemKey: null
        }

    }

    itemSelected({key}){
        const {onItemClicked} = this.props;
        const {selectedItemKey} = this.state;

        let updatedKey = (key === selectedItemKey) ? null : key;
        this.setState({selectedItemKey: updatedKey});

        onItemClicked({key: key});
    }

    renderItems() {
        const {children, selectMany} = this.props;
        const {selectedItemKey} = this.state;
        const items = findByType(children, "Item");

        if (!items || items.length<1)
            return null;

        return items.map(el => {
            return (
                <AccordionItem
                    {...el.props}
                    key={el.key}
                    opened={el.key === selectedItemKey}
                    manageOpened={!selectMany}
                    onSelected={() => !selectMany && this.itemSelected({key: el.key})}
                />
            )
        });
    }


    render() {
        return (
            <>
                <div className={"accordion-container"}>
                    {this.renderItems()}
                </div>
            </>
        )
    }
}

Accordion.Item = createSubComponent("Item");
Accordion.Header = createSubComponent("Header");

Accordion.defaultProps = {
    selectMany: false,
    onItemClicked: () => void 0
}

Accordion.propTypes = {
    selectMany: propTypes.bool,
    onItemClicked: propTypes.func
}

export default Accordion