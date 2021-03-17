import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import DropdownItem from "./DropdownItem";
import Icon from "../Icon/Icon"

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
            this.setState({selectedItems: [id]});
            if(!manageOpened)
                this.setState({opened: false})
        }

        if(onItemSelected)
            onItemSelected({
                clickedItem: this.getItemById(id, items),
                selectedItems: currentSelectedIds
            });
    }

    getItemById (id, items) {
        let result = null;
        items.map( el => {
            if(el.id === id)
                result = el;
        })
        return result;
    }

    renderItems() {
        const {items} = this.props;
        const {opened, selectedItems} = this.state;

        if(opened) {
            return <div className={"dropdown-items"}>
                {items.map((item) => {
                    const {id, label, disabled} = item;

                    return <DropdownItem
                        key = {id}
                        onSelectAction={this.itemSelected}
                        id={id}
                        label={label}
                        disabled={this.props.disabled || disabled}
                        isSelected={selectedItems.includes(id)}
                    />
                })}
            </div>
        } else
            return null;
    }

    componentDidMount() {
        document.addEventListener("click", e => {console.log("clicked", e)});
    }

    componentDidUpdate() {
        const {opened, selectedItems, manageOpened, manageSelectedItems} = this.props;

        if(manageOpened && opened !== this.state.opened)
            this.setState({opened: opened});

        if(manageSelectedItems && selectedItems!== this.state.selectedItems)
            this.setState({selectedItems: selectedItems});
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

        return (
            <>
                <div className={"swf-dropdown-container"}>
                    <input type="hidden" name={name}/>
                    <button
                        onClick={()=>this.dropdownClicked()}
                        disabled={disabled}
                        className={ classnames({
                            "dropdown-button" : true,
                            "opened": opened,
                            "disabled": disabled
                        })}
                    >
                        {hasLabel &&
                            <span  className={classnames({
                                    "dropdown-label": true,
                                    "placeholder": !hasSelected
                                })}
                            >
                                { hasSelected && this.getItemById(selectedItems[0], items)
                                    ? this.getItemById(selectedItems[0], items).label
                                    : placeholder
                                }
                            </span>
                        }
                        <div className={"dropdown-caret"}><Icon icon={"caret-down-fill"} customSize={12} /></div>
                    </button>
                    {this.renderItems()}
                </div>
            </>
        )
    }
}

Dropdown.defaultProps = {
    disabled: false,
    items: [],
    manageOpened: false,
    manageSelectedItems: false,
    opened: false,
    selectedItems: []
}

Dropdown.propTypes = {
    name: propTypes.string,
    disabled: propTypes.bool,
    items: propTypes.shape({
        id: propTypes.oneOfType([
            propTypes.string,
            propTypes.number
        ]),
        label: propTypes.string,
        disabled: propTypes.bool
    }),
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
