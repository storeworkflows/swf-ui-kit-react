import * as React from "react";

import PopoverContent from './PopoverContent/PopoverContent';
import {Button, Popover, Dropdown} from "../../../index";

export default class FilterTemplates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popoverToogle: false,
            popoverTarget: null,
            btnRef: null,
            filteredValues: [],
            searchValue: "",
            selectedItem: {
                id: "",
                label: ""
            }
        }
    }

    handleSelectItem = ({clickedItem}) => {
        const {setQuery} = this.props;
        this.setState({
            selectedItem: clickedItem
        });

        setQuery({query: clickedItem?.id});
    }

    render() {
        const {filterList} = this.props;
        const {selectedItem} = this.state;

        return (
            <div style={{marginRight: "1rem"}}>
                <Dropdown
                    items={filterList.map(({title, filter}) => ({
                        id: filter,
                        label: title
                    }))}
                    manageSelectedItems={true}
                    onItemSelected={this.handleSelectItem}
                    selectedItems={[selectedItem?.id]}
                    select="single"
                    placeholder="-- Choose filter --"
                />
            </div>
        )
    }
}