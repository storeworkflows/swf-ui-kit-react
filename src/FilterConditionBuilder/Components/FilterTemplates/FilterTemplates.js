import * as React from "react";

import PopoverContent from './PopoverContent/PopoverContent';
import {Button, Popover, Dropdown} from "../../../index";

export default class FilterTemplates extends React.Component {
    constructor(props) {
        super(props);
        this.allFilter = [{
          id: "all",
          label: "All"
        }];
        this.customFilter = [{
            id: "advanced",
            label: "Advanced"
        }];
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
        const {setQuery, setAdvanced} = this.props;
        const emptyFiltersID = ["all", "advanced"];

        this.setState({
            selectedItem: clickedItem
        });

        const query = emptyFiltersID.includes(clickedItem?.id) ? "" : clickedItem?.id ?? "";
        const advanced = clickedItem?.id === "advanced";

        setQuery({query});
        setAdvanced(advanced);
    }

    filters = () => {
        const {filterList} = this.props;

        return [...this.allFilter, ...filterList.map(({title, filter}) => ({
            id: filter,
            label: title
        })), ...this.customFilter]
    }

    render() {
        const {selectedItem} = this.state;

        return (
            <div style={{marginRight: "1rem"}}>
                <Dropdown
                    items={this.filters()}
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