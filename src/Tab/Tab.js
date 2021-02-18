import _ from 'lodash'
import * as React from "react";
import propTypes from "prop-types";
import classNames from 'classnames';

import TabItem from "./TabItem";
import styles from "./styles.scss";
import {ITEMS} from "../Toggle/mock";
import {ALIGNMENT, SWF_TAB_SELECTED} from './constants'
import {dispatch} from "../utils/dispatchDecorator";


@dispatch()
class Tab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSelectedItem: props.selectedItem
        }
    }


    render() {

        const {
            hideLabel,
            items,
            fixedWidth,
            maxWidth,
            manageSelectedItem,
            tabsAlignment,
            dispatch
        } = this.props

        const {currentSelectedItem} = this.state;

        const tabSelected = (id, disabled) => {
            if (!disabled) {
                dispatch(SWF_TAB_SELECTED, {id: id});

                if(!manageSelectedItem)
                    this.setState({ currentSelectedItem: id })
            }
        }

        return (
            <>
                <style type="text/css">{styles}</style>
                <div className={classNames({
                    "swf-tabs-container": true,
                    "flex-start": tabsAlignment === 'left',
                    "flex-end": tabsAlignment === 'right',
                    "center": tabsAlignment === 'center',
                    "stretch": tabsAlignment === 'stretch'
                })}>
                    {
                        _.orderBy(items, ['count'], ['asc']).map(item =>
                            <TabItem
                                key = {item.id}
                                item = {item}
                                isSelected = {currentSelectedItem === item.id}
                                hideLabel = {hideLabel}
                                tabSelected = {tabSelected}
                            />
                        )
                    }
                </div>
            </>
        );
    }
}


Tab.defaultProps = {
    items: ITEMS,
    fixedWidth: false,
    hideLabel: false,
    manageSelectedItem: false,
    maxWidth: 240,
    selectedItem: '',
    tabsAlignment: ALIGNMENT.STRETCH
}

Tab.propTypes = {
    items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        label: propTypes.string,
        icon: propTypes.string,
        count: propTypes.number,
        presence: propTypes.string,
        disabled: propTypes.bool
    })),
    fixedWidth: propTypes.bool,
    hideLabel: propTypes.bool,
    manageSelectedItem: propTypes.bool,
    maxWidth: propTypes.number,
    selectedItem: propTypes.string,
    tabsAlignment: propTypes.oneOf(Object.values(ALIGNMENT))
}

export default Tab;