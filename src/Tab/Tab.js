import _ from 'lodash'
import * as React from "react";
import propTypes from "prop-types";
import classNames from 'classnames';

import TabItem from "./TabItem";
import styles from "./styles.scss";
import {ITEMS} from "./mock";
import {ALIGNMENT} from './constants'


class Tab extends React.Component {

    constructor(props) {
        super(props);
        this.tabSelected = this.tabSelected.bind(this);

        this.state = {
            currentSelectedItem: props.selectedItem
        }
    }

    componentDidUpdate() {
        const {manageSelectedItem, selectedItem} = this.props;
        if(manageSelectedItem && selectedItem !== this.state.currentSelectedItem)
            this.setState({currentSelectedItem : selectedItem});
    }

    tabSelected({id}){
        const {disabled, manageSelectedItem, onClick} = this.props;

        if (!disabled) {
            onClick({id: id});

            if(!manageSelectedItem)
                this.setState({ currentSelectedItem: id })
        }

    }

    render() {

        const {
            hideLabel,
            items,
            fixedWidth,
            maxWidth,
            tabsAlignment
        } = this.props

        const {currentSelectedItem} = this.state;

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
                                tabSelected = {this.tabSelected({id: item.id})}
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
    tabsAlignment: propTypes.oneOf(Object.values(ALIGNMENT)),
    onClick: propTypes.func
}

export default Tab;