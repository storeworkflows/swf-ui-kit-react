import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import DropdownItem from "./DropdownItem";
import Icon from "../Icon/Icon"
import Popover from "../Popover/Popover";
import {getItemById} from "./utils";

class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.itemSelected = this.itemSelected.bind(this);
        this.renderItems= this.renderItems.bind(this);
        this.dropdownClicked = this.dropdownClicked.bind(this);

        this.state = {
            opened: this.props.opened,
            selectedItems: this.props.selectedItems
        }

        this.dropdownRef = null;
        this.itemsContainerRef = null;
    }

    dropdownClicked(){
        const {manageOpened, onOpened} = this.props;
        const currentOpened = this.state.opened;

        if(!manageOpened)
            this.setState({opened: !currentOpened})

        if(onOpened)
            onOpened({ opened: currentOpened});
    }

    itemSelected({id}){
        const {manageSelectedItems, onItemSelected, manageOpened, items} = this.props;
        const currentSelectedIds = this.state.selectedItems;

        if(!manageSelectedItems)
        {
            this.setState({ selectedItems: [id] });
            if(!manageOpened)
                this.setState({opened: false})
        }

        if(onItemSelected)
            onItemSelected({
                clickedItem: getItemById(id, items),
                selectedItems: currentSelectedIds
            });
    }

    componentDidUpdate() {
        const {opened, selectedItems, manageOpened, manageSelectedItems} = this.props;

        if(manageOpened && opened !== this.state.opened)
            this.setState({opened: opened})

        if(manageSelectedItems && selectedItems!== this.state.selectedItems)
                this.setState({selectedItems: selectedItems});
    }

    renderItems() {
        const {items, scrollToSelected} = this.props;
        const {opened, selectedItems} = this.state;

        let listStyles = {
            '--popover-border-radius': '0 0 0.5rem 0.5rem',
            '--popover-border': '1px solid rgb(228, 230, 231)',
            '--popover-shadow': 'none',
            'padding': '0',
            'width': 'calc(10rem - 2px)'
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
                            ref = {el => this.itemsContainerRef = el}
                        >
                            {opened &&
                                items.map((item) => {
                                    const {id, label, disabled} = item;

                                    return <DropdownItem
                                        key={id}
                                        onSelectAction={this.itemSelected}
                                        id={id}
                                        label={label}
                                        disabled={this.props.disabled || disabled}
                                        isSelected={selectedItems.includes(id)}
                                        showOnMount = {scrollToSelected}
                                    />
                                })
                            }
                        </div>
                    </Popover.Content>
                </Popover>
            )
    }

    render() {

        const {
            disabled,
            placeholder,
            items,
            name
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
                <div className={"swf-dropdown-container"}
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
                                { hasSelected && getItemById(selectedItems[0], items)
                                    ? getItemById(selectedItems[0], items).label
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
                    {this.dropdownRef && this.renderItems()}
                </div>
            </>
        )
    }
}

Dropdown.defaultProps = {
    disabled: false,
    scrollToSelected: true,
    items: [],
    manageOpened: false,
    manageSelectedItems: false,
    opened: false,
    selectedItems: []
}

Dropdown.propTypes = {
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
            disabled: propTypes.bool
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
    onItemSelected: propTypes.func
}

export default Dropdown
