import classnames from "classnames";
import { v4 as uuidv4 } from 'uuid';
import propTypes from "prop-types";
import ReactDOM from "react-dom";
import * as React from "react";

import {calculateScroll, getItemById} from "./utils";
import Popover from "../../../Popover/Popover";
import DropdownList from "./DropdownList";
import Icon from "../../../Icon/Icon"

class ExpandDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.itemSelected = this.itemSelected.bind(this);
        this.renderItems= this.renderItems.bind(this);
        this.dropdownClicked = this.dropdownClicked.bind(this);

        this.state = {
            opened: this.props.opened,
            selectedItems: this.props.selectedItems,
            itemsContainerRef: null,
            containerWidth: 0,
            selectedItem: this.props.selectedItem
        }

        this.dropdownRef = null;
        this.itemsContainerRef = null;
    }

    dropdownClicked(){
        const {manageOpened, onOpened, scrollToSelected} = this.props;
        const currentOpened = this.state.opened;
        const container = this.itemsContainerRef;

        
        if(!manageOpened){
            if(!currentOpened && container && scrollToSelected)
                container.scrollTop = calculateScroll(container, this.state.selectedItems)
            this.setState({opened: !currentOpened})
        }
        
        if(onOpened)
            onOpened({ opened: currentOpened});
    }

    itemSelected({id, dropdownClicked, listIndex}){
        const {manageSelectedItems, onItemSelected, manageOpened, updateSelectedItem, selectedItem} = this.props;

        let items = this.props.lists[listIndex].items;
        let item = {...items.find(item => item.id === id), listIndex, dropdownClicked};
        const currentSelectedIds = this.state.selectedItems;
        console.log(currentSelectedIds)
        
        updateSelectedItem({item, command: "push"})
        if (selectedItem.items) {
            if (selectedItem.items[selectedItem.items.length - 1].listIndex >= listIndex) {
                updateSelectedItem({item, command: "same_list_index", listIndex});
            }
        }

        if(!manageSelectedItems)
        {
            this.setState({ selectedItems: [id] });
            if(!dropdownClicked && !manageOpened)
                this.setState({opened: false})
        }

        if(onItemSelected)
            onItemSelected({
                clickedItem: {...getItemById(id, items), listIndex, dropdownClicked: dropdownClicked},
                selectedItems: currentSelectedIds,
                isReferenceClicked: dropdownClicked,
            });
    }

    componentDidUpdate() {
        const {opened, selectedItems, manageOpened, manageSelectedItems, scrollToSelected} = this.props;
        const container = this.itemsContainerRef;

        if(manageOpened && opened !== this.state.opened){
            if(this.state.opened && container && scrollToSelected)
                container.scrollTop = calculateScroll(container, this.state.selectedItems)
            this.setState({opened: opened})
        }

        if(manageSelectedItems && selectedItems!== this.state.selectedItems)
                this.setState({selectedItems: selectedItems});
    }

    getDropdownContainerWidth = (width) => {
        this.setState({containerWidth: width});
    }

    renderItems({autofocus}) {
        const {expandIcon, lists} = this.props;
        const {opened, selectedItems} = this.state;
        let key = uuidv4();

        let listStyles = {
            '--popover-border-radius': '0 0 0.5rem 0.5rem',
            '--popover-border': '1px solid rgb(228, 230, 231)',
            '--popover-shadow': 'none',
            'padding': '0',
            'width': 'max-content',
            maxWidth: "800px"
        }
            return (
                <Popover
                    positionTarget={this.dropdownRef}
                    manageOpened={true}
                    opened={opened}
                    hideTail={true}
                    onOuterPopoverClicked={() => this.dropdownClicked()}
                    positions={[{target: "bottom-start", content: "top-start"}]}
                    contentStyles={listStyles}
                >
                    <Popover.Content>
                        <div
                            className={"dropdown-items-container"}
                            style={
                                {
                                    "display": "grid",
                                    gridAutoFlow: "column",
                                }
                            }
                        >
                            {lists.map((list, index) => (
                                opened && (
                                    <>
                                        <DropdownList
                                            onSelectAction={this.itemSelected}
                                            items={list.items}
                                            selectedItems={selectedItems}
                                            expandIcon={expandIcon}
                                            listIndex={index}
                                            autofocus={autofocus}
                                            key={index + uuidv4().split("-").join("")}
                                            // ref={elem => ReactDOM.findDOMNode(elem).scrollIntoView()}
                                        />
                                    </>
                                )
                            ))}
                        </div>
                    </Popover.Content>
                </Popover>
            )
    }

    render() {

        const {
            disabled,
            placeholder,
            name,
            selectedItem
        } = this.props;

        const {selectedItems, opened} = this.state;
        let hasSelected = selectedItems && (selectedItems.length > 0 );
        let hasLabel = hasSelected || placeholder;

        let buttonClasses = classnames({
            "dropdown-button" : true,
            "opened": opened,
            "disabled": disabled
        })
        let labelClasses = classnames({
            "dropdown-label": true,
            "placeholder": !hasSelected
        })

        return (
            <>
                <div className={"swf-expand-dropdown-container"}
                     ref = {el => this.dropdownRef =  {current: el}}
                >
                    <input type="hidden" name={name}/>
                    <button
                        onClick={this.dropdownClicked}
                        disabled={disabled}
                        className={buttonClasses}
                    >
                        {hasLabel &&
                            <span  className={labelClasses}>
                                { hasSelected
                                    ? selectedItem.label
                                    : placeholder
                                }
                            </span>
                        }
                        <div className={"dropdown-caret"}>
                            <Icon
                                icon={"caret-down-fill"}
                                customSize={12} />
                        </div>
                    </button>
                    {(this.dropdownRef && this.state.opened) && this.renderItems({autofocus: true})}
                </div>
            </>
        )
    }
}

ExpandDropdown.defaultProps = {
    disabled: false,
    scrollToSelected: true,
    items: [],
    manageOpened: false,
    manageSelectedItems: false,
    opened: false,
    selectedItems: [],
    selectedItem: {},
    expandIcon: "",
    referenceTableFieldsData: []
}

ExpandDropdown.propTypes = {
    selectedItem: propTypes.object,
    name: propTypes.string,
    scrollToSelected: propTypes.bool,
    disabled: propTypes.bool,
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.oneOfType([
                propTypes.string,
                propTypes.number
            ]),
            label: propTypes.string,
            disabled: propTypes.bool,
            reference: propTypes.string
        }
    )),
    manageOpened: propTypes.bool,
    manageSelectedItems: propTypes.bool,
    opened: propTypes.bool,
    placeholder: propTypes.string,
    selectedItems: propTypes.arrayOf(
        propTypes.oneOfType([
            propTypes.string,
            propTypes.number]
        )),
    onOpened: propTypes.func,
    onItemSelected: propTypes.func,
    expandIcon: propTypes.string
}

export default ExpandDropdown
