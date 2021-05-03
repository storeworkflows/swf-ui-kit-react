import _ from 'lodash'
import * as React from "react";
import propTypes from "prop-types";
import classNames from 'classnames';

import TabItem from "./TabItem";
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

    tabSelected(id, disabled){
        const {manageSelectedItem, onClick} = this.props;
        console.log("tab selected");
        if (!disabled) {
            if(onClick)
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
                                tabSelected = {this.tabSelected}
                            />
                        )
                    }
                </div>
            </>
        );
    }
}


Tab.defaultProps = {
    items: [],
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
        disabled: propTypes.bool,
        required: propTypes.bool,
        invalid: propTypes.bool,
        infoMessage: propTypes.string
    })),
    fixedWidth: propTypes.bool,
    hideLabel: propTypes.bool,
    manageSelectedItem: propTypes.bool,
    maxWidth: propTypes.number,
    selectedItem: propTypes.string,
    tabsAlignment: propTypes.oneOf([ 'left', 'right', 'center', 'stretch']),
    onClick: propTypes.func,
}

export default Tab;