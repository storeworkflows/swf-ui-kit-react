import classnames from "classnames";
import * as React from "react";

import DropdownItem from "./DropdownItem";

export default class DropdownList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: this.props.opened,
            selectedItems: this.props.selectedItems,
        }
        this.dropdownRef = React.createRef();
    }

    componentDidMount() {
        const { listIndex, getWidth } = this.props;

        if (this.dropdownRef.current && listIndex === 0) {
            getWidth({elm: this.dropdownRef.current});
        }
    }

    render() {
        const { items, expandIcon, selectedItems, onSelectAction, listIndex } = this.props;
        return (
            <>
                <div className={classnames({
                    "dropdown-list-container": true,
                    "--not-first": listIndex > 0
                })}
                    ref={elem => this.dropdownRef.current = elem }
                >
                    <div className="dropdown-list">
                        {!!items.length ? items.map((item) => {
                            const {id, label, disabled, reference} = item;
                            
                            return (
                                    <DropdownItem
                                        key={id + listIndex}
                                        onSelectAction={onSelectAction}
                                        id={id}
                                        label={label}
                                        disabled={this.props.disabled || disabled}
                                        isSelected={selectedItems[listIndex] ? selectedItems[listIndex].id === id : false}
                                        expandIcon={expandIcon}
                                        reference={reference === "true"}
                                        listIndex={listIndex}
                                        isDropdown={selectedItems[listIndex] ? (selectedItems[listIndex].dropdownClicked && selectedItems[listIndex].id === id) : false}
                                    />
                                )
                        }): <div className="no-search-results">No Results</div>}
                    </div>
                </div>
            </>
        )
    }
}