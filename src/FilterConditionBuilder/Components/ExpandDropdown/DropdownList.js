import * as React from "react";
import classnames from "classnames";

import { Input } from "../../../index";
import DropdownItem from "./DropdownItem";
import ReactDOM from "react-dom";

export default class DropdownList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: this.props.opened,
            selectedItems: this.props.selectedItems,
            searchValue: "",
            filteredList: [],
        }
    }

    onSearch = ({value}) => {
        const { items } = this.props;
        const searchValue = value.trim();
        const filteredList = items.filter(item => !!item.label.toLowerCase().match(searchValue.toLowerCase()));

        this.setState({searchValue, filteredList})
    }

    render() {
        const { items, expandIcon, selectedItems, onSelectAction, listIndex, autofocus } = this.props;
        const { searchValue, filteredList } = this.state;

        const valueToShow = (!!searchValue && !!filteredList.length) ? filteredList : items;
        return (
            <>
                <div className={classnames({
                    "dropdown-list-container": true,
                    "--not-first": listIndex > 0
                })}>
                    <Input key={listIndex} autofocus={autofocus} placeholder="Search" value={searchValue} onChange={(e) => this.onSearch({value: e.target.value})} />
                    {/* <div className="swf-form-group">
                        
                    </div>
                    <input type="text" autofocus={autofocus} placeholder="Search" value={searchValue} onChange={(e) => this.onSearch({value: e.target.value})} /> */}
                    <div className="dropdown-list">
                        {valueToShow.map((item) => {
                            const {id, label, disabled, table, reference} = item;
                            return (
                                    <DropdownItem
                                        key={id + listIndex}
                                        onSelectAction={onSelectAction}
                                        id={id}
                                        label={label}
                                        disabled={this.props.disabled || disabled}
                                        isSelected={selectedItems[listIndex] === id}
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