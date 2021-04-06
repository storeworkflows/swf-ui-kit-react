import * as React from "react";
import DropdownItem from "./DropdownItem";

export default class DropdownList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: this.props.opened,
            selectedItems: this.props.selectedItems,
        }
    }

    render() {
        const {items, expandIcon, selectedItems, onSelectAction, listIndex} = this.props;
            return (
                <>
                    <div className="dropdown-list">
                        {items.map((item) => {
                            const {id, label, disabled, table} = item;
                            
                            return (
                                    <DropdownItem
                                        key = {id}
                                        onSelectAction={onSelectAction}
                                        id={id}
                                        label={label}
                                        disabled={this.props.disabled || disabled}
                                        isSelected={selectedItems.includes(id)}
                                        expandIcon={expandIcon}
                                        reference={!!table}
                                        listIndex={listIndex}
                                    />
                                )
                        })}
                    </div>
                </>
            )
    }
}