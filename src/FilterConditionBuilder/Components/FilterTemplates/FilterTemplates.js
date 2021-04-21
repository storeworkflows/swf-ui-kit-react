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
            selectedItem: {}
        }
        this.popoverTarget = React.createRef();
    }

    managePopover = () => {
        this.setState({popoverToogle: !this.state.popoverToogle});
    }

    filterForFilterList = ({value}) => {
        const {filterList} = this.props;
        const searchValue = value.trim();
        const filteredValues = filterList.filter(item => !!item.title.toLowerCase().match(searchValue.toLowerCase()));
        this.setState({filteredValues, searchValue});
    }

    handleSelectItem = ({clickedItem}) => {
        this.setState({
            selectedItem: clickedItem
        })
    }

    render() {
        const btnStyles = {
            "text-color": "rgb(1,119,142)",
            "hover-text-color": "rgb(1,89,107)",
            "active-text-color": "rgb(1,60,71)"
        }

        const {setQuery, filterList} = this.props;
        const {selectedItem} = this.state;
        console.log({selectedItem})
        return (
            <div>
                <Dropdown
                    items={filterList.map(({title, filter}) => ({
                        id: filter,
                        label: title
                    }))}
                    manageSelectedItems={true}
                    onItemSelected={this.handleSelectItem}
                    selectedItems={[selectedItem?.filter]}
                    select="single"
                    placeholder="-- Choose filter --"
                />
                {/*<div className="popoverTarget" ref={elm => this.popoverTarget.current = elm}>*/}
                {/*    ​​​​​​​​*/}
                {/*    <Button label="Filters" onClick={this.managePopover} ref={e => this.btnRef = e} customStyle={btnStyles} variant="tertiary" />*/}
                {/*</div>*/}
                {/*{(popoverToogle && this.popoverTarget.current) &&*/}
                {/*    (<Popover*/}
                {/*        manageOpened={true}*/}
                {/*        opened={popoverToogle}*/}
                {/*        positionTarget={this.popoverTarget}*/}
                {/*        onOuterPopoverClicked={() => this.setState({popoverToogle: false})}*/}
                {/*        hideTail={false}*/}
                {/*        positions={[{"target":"bottom-end","content":"top-end"}]}*/}
                {/*    >*/}
                {/*        <Popover.Content>*/}
                {/*            <PopoverContent filterList={valuesToShow} setQuery={setQuery} onSearch={this.filterForFilterList} managePopover={this.managePopover} inputValue={searchValue} />*/}
                {/*        </Popover.Content>*/}
                {/*    </Popover>)*/}
                {/*}*/}
            </div>
        )
    }
}