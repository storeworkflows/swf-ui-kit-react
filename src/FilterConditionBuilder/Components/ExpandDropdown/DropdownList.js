import classnames from "classnames";
import * as React from "react";

import DropdownItem from "./DropdownItem";

export default class DropdownList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: this.props.opened,
            selectedItems: this.props.selectedItems,
            searchValue: "",
            filteredList: [],
        }
        this.inputRef = null;
    }

    componentDidMount() {
        if (!!this.inputRef)
            setTimeout(() => this.inputRef.focus(), 100)
    }

    onSearch = ({value}) => {
        const { items } = this.props;
        const searchValue = value.trim();
        const filteredList = items.filter(item => !!item.label.toLowerCase().match(searchValue.toLowerCase()));

        this.setState({searchValue, filteredList})
    }

    render() {
        const { items, expandIcon, selectedItems, onSelectAction, listIndex } = this.props;
        const { searchValue, filteredList } = this.state;

        const valueToShow = (!!searchValue && !!filteredList.length) ? filteredList : items;
        return (
            <>
                <div className={classnames({
                    "dropdown-list-container": true,
                    "--not-first": listIndex > 0
                })}>
                    <div className="swf-form-group">
                        <div className="input-group">
                            <input type="text" ref={elem => !this.inputRef ? this.inputRef = elem : () => void 0} className="form-control" autoFocus={true} placeholder="Search" value={searchValue} onChange={(e) => this.onSearch({value: e.target.value})} />
                        </div>
                    </div>
                    <div className="dropdown-list">
                        {valueToShow.map((item) => {
                            const {id, label, disabled, reference} = item;
                            return (
                                    <DropdownItem
                                        key={id + listIndex}
                                        onSelectAction={onSelectAction}
                                        id={id}
                                        label={label}
                                        disabled={this.props.disabled || disabled}
                                        isSelected={selectedItems.includes(id)}
                                        expandIcon={expandIcon}
                                        reference={reference === "true"}
                                        listIndex={listIndex}
                                    />
                                )
                        })}
                    </div>
                </div>
            </>
        )
    }
}