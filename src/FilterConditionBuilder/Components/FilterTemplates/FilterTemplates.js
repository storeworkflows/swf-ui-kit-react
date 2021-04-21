import * as React from "react";

import PopoverContent from './PopoverContent/PopoverContent';
import {Button, Popover, Dropdown} from "../../../index";

export default class FilterTemplates extends React.Component {
    constructor(props) {
        super(props);
        this.advancedMode = [{
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
                [props.table]: {
                    id: "",
                    label: ""
                }
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.table !== this.props.table) {
            if (this.props.table in this.state.selectedItem) return;
            this.setState({
                selectedItem: {
                    ...this.state.selectedItem,
                    [this.props.table]: {
                        id: "",
                        label: ""
                    }
                }
            })
        }
    }

    handleSelectItem = ({clickedItem}) => {
        const {setQuery, setAdvanced} = this.props;
        const isAdvanced = ["advanced"].includes(clickedItem?.id);

        this.setState({
            selectedItem: clickedItem
        });

        const query = isAdvanced ? "" : clickedItem?.id ?? "";
        const advanced = isAdvanced;

        setQuery({query});
        setAdvanced(advanced);
    }

    filters = () => {
        const {filterList} = this.props;

        return [...filterList.map(({title, filter}) => ({
            id: filter,
            label: title
        })), ...this.advancedMode]
    }

    render() {
        const {table} = this.props;
        const {selectedItem} = this.state;

        return (
            <div style={{marginRight: "1rem"}}>
                <Dropdown
                    items={this.filters()}
                    manageSelectedItems={true}
                    onItemSelected={this.handleSelectItem}
                    selectedItems={[selectedItem[table]?.id]}
                    select="single"
                    placeholder="-- Choose filter --"
                />
            </div>
        )
    }
}