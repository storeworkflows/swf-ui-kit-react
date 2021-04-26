import * as React from 'react';

import { Input, RadioButtons, Button, Dropdown, LookupField } from '../../../index';
import { fetchGroupList, postFilter } from './Requests';

class FilterSaver extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterTitle: '',
            radioValue: 'Group',
            groupValue: this.props.defaultGroup ? this.props.defaultGroup.sys_id : "",
            isAdmin: false,
            lookupFieldVal: {
                name: "group",
                sys_id: this.props.defaultGroup ? this.props.defaultGroup.sys_id : null,
                dispVal: this.props.defaultGroup ? this.props.defaultGroup.displayValue : null,
            }
        }

        this.handleInputTitle = this.handleInputTitle.bind(this);
        this.handleRadioChanged = this.handleRadioChanged.bind(this);
        this.handleSaveClicked = this.handleSaveClicked.bind(this);

        this.radioOptions = ['Me', 'Everyone', 'Group'];
    }

    componentDidMount() {
        // this.setState({ isAdmin: window.swfPortalUser.isTeamworkAdmin });
    }

    handleInputTitle(e) {
        this.setState({ filterTitle: e.target.value })
    }

    handleRadioChanged(e) {
        this.setState({ radioValue: e.id, groupValue: !(e.id === "Group") ? '' : this.props.defaultGroup.sys_id })
    }

    handleLookupFieldValue = (name, sys_id, dispVal) => {
        this.setState({lookupFieldVal: {name, sys_id, dispVal}, groupValue: sys_id})
    }

    async handleSaveClicked() {
        const { user, table, query, isFilterSaved } = this.props;
        const { filterTitle, radioValue, groupValue } = this.state;
        const filterData = {
            table,
            filter: query,
            group: groupValue,
            user: radioValue === 'Everyone' ? '' : user,
            title: filterTitle.trim()
        };
        const response = await postFilter(filterData);
        const { result } = response;
        result.sys_id ? isFilterSaved({isSaved: true}) : isFilterSaved({isSaved: false});
        if (result) {
            this.setState({
                filterTitle: '',
                radioValue: 'Me',
                groupValue: ''
            })
        }
    }

    _getRadioOptions(options = []) {
        const { radioValue } = this.state;
        if (Array.isArray(options))
            return options.map(option => ({
                id: option,
                label: option,
                checked: option === radioValue
            }))
    }


    render() {
        const {
            filterTitle,
            radioValue,
            groupValue,
            isAdmin,
            lookupFieldVal
        } = this.state;

        const { query } = this.props;

        const radioValues = !isAdmin ? this.radioOptions : ['Me'];
        const radioOptions = this._getRadioOptions(radioValues);

        const isButtonDisabled = !filterTitle || (radioValue === 'Group' && !groupValue) || !query;

        return (
            <div className="filter-saver">
                <div className="input-title__container input-container">
                    <Input
                        type="text"
                        label="Filter title"
                        value={filterTitle}
                        onInput={this.handleInputTitle}
                        autofocus={true}
                        required={true}
                    />
                </div>

                <div className="radio-buttons__container input-container">
                    <RadioButtons
                        layout="horizontal"
                        label="Visible to:"
                        manageValue={true}
                        options={radioOptions}
                        onChange={this.handleRadioChanged}
                    />
                </div>
                {
                    radioValue === "Group" ?
                        <div className="group-dropdown__container input-container">
                            <LookupField
                                type="reference"
                                table="sys_filter"
                                required={true}
                                visible={true}
                                name="group"
                                label="Group"
                                onValueChange={this.handleLookupFieldValue}
                                value={lookupFieldVal.sys_id}
                                content={lookupFieldVal.sys_id}
                                manageInvalid={false}
                                displayValue={lookupFieldVal.dispVal}
                            />
                        </div>
                        : null
                }
                <div className="button-save__container">
                    <Button
                        label="Save"
                        variant="primary"
                        disabled={isButtonDisabled}
                        onClick={this.handleSaveClicked}
                    />
                </div>
            </div >
        )
    }
}

export default FilterSaver