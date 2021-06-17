import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import {useState, useRef, useEffect, useCallback} from "react";

import Icon from "../Icon/Icon"
import Popover from "../Popover/Popover";
import DropdownItem from "./DropdownItem";
import InfoMessage from "../InfoMessage/InfoMessage";
import RequiredLabel from "../RequiredLabel/RequiredLabel";

import {getCorrectSelected, getDisplayValue, getItemById, getUpdatedSelectedItems} from "./utils";
import {DROPDOWN} from "./constants";
import {noop} from "../utils";

const Dropdown = React.forwardRef((props, ref) => {
    const {
        opened, invalid, selectedItems, items, visible,
        manageInvalid, onInvalid,
        manageOpened, onOpened,
        manageSelectedItems, onItemSelected, select, autoWidth, onClick
    } = props;

    const [isOpened, setIsOpened] = useState(opened);
    const [isInvalid, setIsInvalid] = useState(invalid);
    const [dropdownWidth, setDropdownWidth] = useState(2)
    const [selectedItemsState, setSelectedItemState] = useState(getCorrectSelected(items, selectedItems))

    const dropdownRef = useRef(null);
    const itemsContainerRef = useRef(null);
    const itemToScroll = useRef(null);

    const invalidValue = manageInvalid ? invalid : isInvalid;
    const openedValue = manageOpened ? opened : isOpened;
    const selectsItemsValue = manageSelectedItems ? selectedItems : selectedItemsState;

    const onInvalidAction = (e) => {
        onInvalid(e);
        !manageInvalid && setIsInvalid(true)
    }

    const dropdownClicked = (e) => {
        onClick(e);
        onOpened({opened: manageOpened ? opened : !isOpened})
        !manageOpened && setIsOpened(!isOpened);
    }

    const itemSelected = useCallback(({id}) => {
        let currentSelectedIds = selectsItemsValue;

        if (!manageSelectedItems) {
            currentSelectedIds = getUpdatedSelectedItems(selectsItemsValue, select, id);
            setSelectedItemState(currentSelectedIds);
        }

        if (select !== DROPDOWN.SELECT.MULTI) {
            !manageOpened && setIsOpened(false);
            onOpened(manageOpened)
        }

        onItemSelected({
            clickedItem: getItemById(id, items),
            selectedItems: currentSelectedIds
        });
    }, [onItemSelected, selectsItemsValue, manageSelectedItems, select, manageOpened, onOpened, items])

    useEffect(() => {
        if(openedValue && itemToScroll?.current)
            itemToScroll.current.scrollIntoView()
    }, [isOpened, opened])

    useEffect(() => dropdownRef.current && setDropdownWidth(dropdownRef.current.offsetWidth),
        [dropdownRef.current, autoWidth])

    const renderItems = () => {
        const {scrollToSelected, itemClassName} = props;

        let listStyles = {
            '--popover-border-radius': '0 0 0.5rem 0.5rem',
            '--popover-border': '1px solid rgb(228, 230, 231)',
            '--popover-shadow': 'none',
            'padding': '0',
            'width': `calc( ${dropdownWidth}px - 2px)`,
            'maxHeight': '15rem'
        }

        return <Popover
                hideTail
                manageOpened
                opened={openedValue}
                positions={[{target: "bottom-start", content: "top-start"}]}
                positionTarget={dropdownRef}
                onOuterPopoverClicked={dropdownClicked}
                contentStyles={listStyles}
            >
                <Popover.Content>
                    <div
                        className={"dropdown-items-container"}
                        ref={el => itemsContainerRef.current = el}
                    >
                        {items.map((item) => {
                            const {id, disabled} = item;
                            let isItemToScroll = scrollToSelected && id === selectsItemsValue[0];
                            return <DropdownItem
                                {...item}
                                key={id}
                                ref = {el => { if(isItemToScroll) itemToScroll.current = el }}
                                onSelectAction={itemSelected}
                                disabled={props.disabled || disabled}
                                isSelected={selectsItemsValue.includes(id)}
                                className={itemClassName}
                            />
                        })
                        }
                    </div>
                </Popover.Content>
            </Popover>

    }

    const renderElement = () => {
        const {
            disabled, placeholder, name, label,
            required, message, className, labelClassName, hideCaret
        } = props;

        let hasSelected = selectsItemsValue && selectsItemsValue.length;

        let buttonClasses = classnames({
            "dropdown-button": true,
            "opened": openedValue,
            "disabled": disabled,
            "invalid": invalidValue,
            "hideCaret": hideCaret
        })

        let labelClasses = classnames({
            "dropdown-label": true,
            "placeholder": !hasSelected
        })

        const containerClasses = classnames(
            "swf-dropdown-main-container",
            "dropdown-container",
            {"--autoWidth": autoWidth },
            className)

        return (
            <>
                <div className={containerClasses}
                     ref={ref}>
                    <input
                        type="hidden"
                        name={name}
                        required={required}
                        onInvalid={onInvalidAction}
                        value={selectsItemsValue}
                    />
                    {label &&
                    <RequiredLabel label={label}
                                   required={required}
                                   invalid={invalidValue}
                                   className={labelClassName}
                    />
                    }
                    <button
                        onClick={dropdownClicked}
                        disabled={disabled}
                        className={buttonClasses}
                        ref={el => dropdownRef.current = el}
                    >
                            <span className={labelClasses}>
                                {getDisplayValue(selectsItemsValue, items, placeholder)}
                            </span>
                        {!hideCaret &&
                        <Icon className={"dropdown-caret"}
                              icon={"caret-down-fill"}
                              customSize={12}/>
                        }
                    </button>
                    {dropdownRef?.current && renderItems()}
                    {message.map(el => <InfoMessage {...el}/>)}
                </div>
            </>
        )
    }

    return  visible ? renderElement(): null
});

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
    onOpened: () => noop,
    onInvalid: () => noop,
    onItemSelected: () => noop,
    onClick: () => noop,
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
    status: propTypes.oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
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
    onClick: propTypes.func,

    //style
    className: propTypes.oneOfType([propTypes.object, propTypes.string]),
    labelClassName: propTypes.oneOfType([propTypes.object, propTypes.string]),
    itemClassName: propTypes.oneOfType([propTypes.object, propTypes.string]),

    autoWidth: propTypes.bool
}

export default Dropdown
