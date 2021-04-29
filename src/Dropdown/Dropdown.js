import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import Icon from "../Icon/Icon"
import Popover from "../Popover/Popover";
import DropdownItem from "./DropdownItem";
import InfoMessage from "../InfoMessage/InfoMessage";
import RequiredLabel from "../RequiredLabel/RequiredLabel";

import {getCorrectSelected, getDisplayValue, getItemById} from "./utils";
import {DROPDOWN} from "./constants";


class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.dropdownClicked = this.dropdownClicked.bind(this);
        this.itemSelected = this.itemSelected.bind(this);
        this.renderItems= this.renderItems.bind(this);
        this.onInvalid = this.onInvalid.bind(this);

        const {opened, invalid, selectedItems, items} = this.props;

        this.state = {
            opened: opened,
            invalid: invalid,
            selectedItems: getCorrectSelected(items, selectedItems)
        }

        this.dropdownRef = React.createRef();
        this.itemsContainerRef = React.createRef();
    }

    onInvalid(e){
        const {manageInvalid, onInvalid} = this.props;
        if(!manageInvalid)
            this.setState({invalid: true});
        onInvalid(e);
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
        const {manageSelectedItems, onItemSelected, manageOpened, items, select} = this.props;
        let currentSelectedIds = this.state.selectedItems;

        if(!manageSelectedItems) {
            switch (select){
                case DROPDOWN.SELECT.SINGLE:
                    currentSelectedIds = (currentSelectedIds[0] === id) ? [] : [id];
                    break;
                case DROPDOWN.SELECT.MULTI:
                    if(currentSelectedIds.includes(id))
                         currentSelectedIds = currentSelectedIds.filter(currentId => currentId !== id);
                    else
                        currentSelectedIds.push(id);
                    break;
                default:
                    currentSelectedIds = [];
                    break;
            }
            this.setState({ selectedItems: currentSelectedIds});
        }

        if(!manageOpened && select !==DROPDOWN.SELECT.MULTI)
            this.setState({opened: false})

        onItemSelected({
            clickedItem: getItemById(id, items),
            selectedItems: currentSelectedIds
        });
    }

    componentDidUpdate() {
        const {opened, selectedItems, invalid,
            manageOpened, manageSelectedItems, manageInvalid} = this.props;

        if(manageOpened && opened !== this.state.opened)
            this.setState({opened: opened})

        if(manageSelectedItems && selectedItems!== this.state.selectedItems)
            this.setState({selectedItems: selectedItems});

        if(manageInvalid && invalid!==this.state.invalid)
            this.setState({invalid: invalid})
    }

    renderItems() {
        const {items, scrollToSelected, itemClassName} = this.props;
        const {opened, selectedItems} = this.state;

        let listStyles = {
            '--popover-border-radius': '0 0 0.5rem 0.5rem',
            '--popover-border': '1px solid rgb(228, 230, 231)',
            '--popover-shadow': 'none',
            'padding': '0',
            'width': 'calc( 100% - 2px)',
            'maxHeight': '15rem'
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
                            ref = {el => this.itemsContainerRef.current = el}
                        >
                            {   items.map((item) => {
                                    const {id, disabled} = item;

                                    return <DropdownItem
                                        {...item}
                                        onSelectAction={this.itemSelected}
                                        disabled={this.props.disabled || disabled}
                                        isSelected={selectedItems.includes(id)}
                                        showOnMount = {scrollToSelected && id === selectedItems[0]}
                                        className={itemClassName}
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
            name,
            label,
            required,
            message,
            className,
            labelClassName,
            visible,
            hideCaret
        } = this.props;

        const {selectedItems, opened, invalid} = this.state;

        let hasSelected = selectedItems && (selectedItems.length > 0 );
        //let hasLabel = hasSelected || placeholder;

        let buttonClasses = classnames({
            "dropdown-button" : true,
            "opened": opened,
            "disabled": disabled,
            "invalid": invalid,
            "hideCaret": hideCaret
        })

        let labelClasses = classnames({
            "dropdown-label": true,
            "placeholder": !hasSelected
        })

        return (
            visible ?
            <>
                <div className={classnames(className, "swf-dropdown-main-container")}>
                    <input
                        type="hidden"
                        name={name}
                        required={required}
                        onInvalid={this.onInvalid}
                        value={selectedItems}
                    />
                    { label &&
                        <RequiredLabel label={label}
                               required={required}
                               invalid={invalid}
                               className={labelClassName}
                        />
                    }
                        <button
                            onClick={this.dropdownClicked}
                            disabled={disabled}
                            className={buttonClasses}
                            ref = {el => this.dropdownRef.current =  el}
                        >
                            <span className={labelClasses}>
                                {getDisplayValue(selectedItems, items, placeholder)}
                            </span>
                            {!hideCaret &&
                                <Icon className={"dropdown-caret"}
                                      icon={"caret-down-fill"}
                                      customSize={12}/>
                            }
                        </button>
                    {this.dropdownRef?.current && this.renderItems()}
                    {message.map(el => {return <InfoMessage {...el}/>}) }
                </div>
            </>
            : null
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
    selectedItems: [],
    required: false,
    invalid: false,
    message: [],
    className: {},
    labelClassName: {},
    itemClassName: {},
    visible: true,
    manageInvalid: true,
    onOpened: () => void 0,
    onInvalid: () => void 0,
    onItemSelected: () => void 0,
    select: DROPDOWN.SELECT.SINGLE,
    hideCaret: false
}

const dropdownItem = {
            id: propTypes.oneOfType([
                propTypes.string,
                propTypes.number
            ]),
            label: propTypes.string,
            disabled: propTypes.bool,
            sublabel: propTypes.string,
            number: propTypes.number,
            icon: propTypes.string
        };

const dropdownSection = {
    id: propTypes.oneOfType([
        propTypes.string,
        propTypes.number
    ]),
    label: propTypes.string,
    children: propTypes.arrayOf(propTypes.shape(dropdownItem))
};

const messageItem = {
    status: propTypes.oneOf(["yellow" , "red" , "green" , "blue" , "grey" , "grey-blue"]),
    content: propTypes.string,
    icon: propTypes.string,
    className: propTypes.object,
    iconSize: propTypes.number,
    delay: propTypes.number
}
Dropdown.propTypes = {
    //basic props
    name: propTypes.string,
    label: propTypes.string,
    placeholder: propTypes.string,
    items: propTypes.arrayOf(
        propTypes.oneOfType([
            propTypes.shape(dropdownItem),
            propTypes.shape(dropdownSection)
        ])
    ),
    selectedItems: propTypes.arrayOf(
        propTypes.oneOfType([
            propTypes.string,
            propTypes.number]
        )),
    message: propTypes.arrayOf(propTypes.shape(messageItem)),

    //display characteristic
    select: propTypes.oneOf([DROPDOWN.SELECT.NONE, DROPDOWN.SELECT.SINGLE, DROPDOWN.SELECT.MULTI]),
    visible: propTypes.bool,
    scrollToSelected: propTypes.bool,
    opened: propTypes.bool,
    disabled: propTypes.bool,
    invalid: propTypes.bool,
    required: propTypes.bool,
    hideCaret: propTypes.bool,

    //action props
    manageOpened: propTypes.bool,
    manageInvalid: propTypes.bool,
    manageSelectedItems: propTypes.bool,

    onOpened: propTypes.func,
    onInvalid: propTypes.func,
    onItemSelected: propTypes.func,

    //style
    className: propTypes.oneOfType([propTypes.object, propTypes.string]),
    labelClassName: propTypes.oneOfType([propTypes.object, propTypes.string]),
    itemClassName: propTypes.oneOfType([propTypes.object, propTypes.string]),

    //todo
    //icon: propTypes.string,
    //search: propTypes.oneOf(["none", "managed", "initial", "contains"]),
}

export default Dropdown
