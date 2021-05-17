import _ from 'lodash'
import * as React from "react";
import propTypes from "prop-types";
import classNames from 'classnames';

import TabItem from "./TabItem";
import {ALIGNMENT} from './constants'
import {useEffect, useState} from "react";


const Tab = React.forwardRef((props, ref) => {
    const { hideLabel, items, tabsAlignment,
        selectedItem, manageSelectedItem, onClick} = props
    const [currentSelectedItem, setCurrentSelectedItem] = useState(selectedItem);

    const tabSelected = (id, disabled) => {
        if (!disabled) {
            onClick({id: id});

            if (!manageSelectedItem)
                setCurrentSelectedItem(id);
        }
    }

    useEffect(() => {
        if(manageSelectedItem)
            setCurrentSelectedItem(selectedItem);
    }, [selectedItem])

    const tabsClasses = classNames({
        "swf-tabs-container": true,
        "flex-start": tabsAlignment === 'left',
        "flex-end": tabsAlignment === 'right',
        "center": tabsAlignment === 'center',
        "stretch": tabsAlignment === 'stretch'
    })

    return (
        <>
            <div className={tabsClasses} ref={ref}>
                {
                    _.orderBy(items, ['count'], ['asc']).map(item =>
                        <TabItem
                            key={item.id}
                            item={item}
                            isSelected={currentSelectedItem === item.id}
                            hideLabel={hideLabel}
                            tabSelected={tabSelected}
                        />
                    )
                }
            </div>
        </>
    );

});


Tab.defaultProps = {
    items: [],
    hideLabel: false,
    manageSelectedItem: false,
    selectedItem: '',
    tabsAlignment: ALIGNMENT.STRETCH,
    onClick: () => void 0
}

Tab.propTypes = {
    items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        label: propTypes.string,
        icon: propTypes.string,
        count: propTypes.number,
        presence: propTypes.string,
        disabled: propTypes.bool,
        required: propTypes.bool,
        invalid: propTypes.bool,
        infoMessage: propTypes.string
    })),
    hideLabel: propTypes.bool,
    manageSelectedItem: propTypes.bool,
    selectedItem: propTypes.string,
    tabsAlignment: propTypes.oneOf(['left', 'right', 'center', 'stretch']),
    onClick: propTypes.func,
}

export default Tab;