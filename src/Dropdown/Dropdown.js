import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import DropdownItem from "./DropdownItem";
import Icon from "../Icon/Icon"
import Popover from "../Popover/Popover";
import {getItemById} from "./utils";
import PropTypes from "prop-types";
import InfoMessage from "../InfoMessage/InfoMessage";
import RequiredLabel from "../RequiredLabel/RequiredLabel";

class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.itemSelected = this.itemSelected.bind(this);
        this.renderItems= this.renderItems.bind(this);
        this.dropdownClicked = this.dropdownClicked.bind(this);
        this.onInvalid = this.onInvalid.bind(this);

        this.state = {
            opened: this.props.opened,
            invalid: this.props.invalid,
            selectedItems: this.props.selectedItems
        }

        this.dropdownRef = null;
        this.itemsContainerRef = null;
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
        const {manageSelectedItems, onItemSelected, manageOpened, items} = this.props;
        const currentSelectedIds = this.state.selectedItems;

        if(!manageSelectedItems)
            this.setState({ selectedItems: [id] });

        if(!manageOpened)
            this.setState({opened: false})

        if(onItemSelected)
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
            'width': 'calc(100% - 2px)'
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
            visible
        } = this.props;

        const {selectedItems, opened, invalid} = this.state;

        let hasSelected = selectedItems && (selectedItems.length > 0 );
        let hasLabel = hasSelected || placeholder;

        let buttonClasses = classnames({
            "dropdown-button" : true,
            "opened": opened,
            "disabled": disabled,
            "invalid": invalid
        })
        let labelClasses = classnames({
            "dropdown-label": true,
            "placeholder": !hasSelected
        })

        return (
            visible ?
            <>
                <div className={classnames(className, "swf-dropdown-container")}>
                    <input
                        type="hidden"
                        name={name}
                        required={required}
                        onInvalid={this.onInvalid}
                        value={selectedItems}
                    />
                    { (required || label) &&
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
                            ref = {el => this.dropdownRef =  {current: el}}
                        >
                            {hasLabel &&
                                <span  className={labelClasses}>
                                    { hasSelected && getItemById(selectedItems[0], items)
                                        ? getItemById(selectedItems[0], items).label
                                        : placeholder
                                    }
                                </span>
                            }
                            <Icon className={"dropdown-caret"}
                                  icon={"caret-down-fill"}
                                  customSize={12} />
                        </button>
                    {this.dropdownRef && this.renderItems()}
                    {message.length>0 &&
                        message.map((el) => {
                            return <InfoMessage
                                iconSize={el.iconSize}
                                className={el.className}
                                content={el.content}
                                icon={el.icon}
                                status={el.status}
                            />
                        })
                    }
                </div>
            </>
            : null
        )
    }
};

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
    onInvalid: () => void 0
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
    onItemSelected: propTypes.func,
    label: propTypes.string,
    invalid: propTypes.bool,
    required: propTypes.bool,
    message: PropTypes.arrayOf(PropTypes.shape({
        status: PropTypes.oneOf(["critical", "warning", "positive", "info", "suggestion"]),
        content: PropTypes.string,
        icon: PropTypes.string,
        className: propTypes.object,
        iconSize: PropTypes.number
    })),
    className: propTypes.oneOfType([propTypes.object, propTypes.string]),
    labelClassName: propTypes.oneOfType([propTypes.object, propTypes.string]),
    itemClassName: propTypes.oneOfType([propTypes.object, propTypes.string]),
    visible: propTypes.bool,
    manageInvalid: propTypes.bool,
    onInvalid: propTypes.func
}

export default Dropdown
