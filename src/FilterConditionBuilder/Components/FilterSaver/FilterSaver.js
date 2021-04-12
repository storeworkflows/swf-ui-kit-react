import * as React from 'react';

import { fetchGroupList, postFilter } from './Requests';
import { Input, RadioButtons, Button, Dropdown } from '../../../index';

class FilterSaver extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterTitle: '',
            radioValue: 'Me',
            groupDropdownItems: [],
            groupValue: '',
            isAdmin: false
        }

        this.handleInputTitle = this.handleInputTitle.bind(this);
        this.handleRadioChanged = this.handleRadioChanged.bind(this);
        this.handleDropdownItemSelected = this.handleDropdownItemSelected.bind(this);
        this.handleSaveClicked = this.handleSaveClicked.bind(this);

        this.radioOptions = ['Me', 'Everyone', 'Group'];
    }

    componentDidMount() {
        // this.setState({ isAdmin: window.swfPortalUser.isTeamworkAdmin });
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.radioValue !== this.state.radioValue && this.state.radioValue === 'Group') {
            const groups = await fetchGroupList();

            const groupDropdownItems = groups.map(group => ({
                id: group.sys_id,
                label: group.name
            }))

            this.setState({ groupDropdownItems });
        }
    }

    handleInputTitle(e) {
        this.setState({ filterTitle: e.target.value })
    }

    handleRadioChanged(e) {
        this.setState({ radioValue: e.id, groupValue: '' })
    }

    handleDropdownItemSelected(e) {
        const { clickedItem: { id } } = e;
        this.setState({ groupValue: id })
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
            groupDropdownItems,
            isAdmin
        } = this.state;

        const radioValues = !isAdmin ? this.radioOptions : ['Me'];
        const radioOptions = this._getRadioOptions(radioValues);

        const isButtonDisabled = !filterTitle || (radioValue === 'Group' && !groupValue);

        return (
            <div className="filter-saver">
                <div className="input-title__container input-container">
                    <Input
                        type="text"
                        label="Filter title"
                        value={filterTitle}
                        onInput={this.handleInputTitle}
                        autofocus={true}
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
                            <Dropdown
                                manageSelectedItems={true}
                                items={groupDropdownItems}
                                selectedItems={[groupValue]}
                                onItemSelected={this.handleDropdownItemSelected}
                                placeholder="Group list"
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