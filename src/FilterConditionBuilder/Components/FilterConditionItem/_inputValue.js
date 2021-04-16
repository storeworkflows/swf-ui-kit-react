import DatePicker from "../../../DatePicker/DatePicker";
import TextArea from "../../../TextArea/TextArea";
import Dropdown from "../../../Dropdown/Dropdown";
import Input from "../../../Input/Input";

export const inputValue = (state, conditionOptions, itemClicked, onDatePickerChange, inputValueSet, textAreaValueSet) => {
    const { dropdownsIsActive } = state;
    const {  operator: { editor } } = conditionOptions;

    const dropdownValueHandle = ({item, index}) => {
        let newItem = index ? {...item, index} : {...item}; 
        itemClicked(newItem);
    }

    switch (editor) {
        case "boolean":
            return (
                <div className="dropdown-container boolean-dropdown">
                    <Dropdown
                        items={[{ "id": "true", "label": "true", "dropdown": "value" }, { "id": "false", "label": "false", "dropdown": "value" }]}
                        selectedItems={[conditionOptions.value]}
                        select="single"
                        disabled={!dropdownsIsActive.value}
                        placeholder="--choose value--"
                        variant="tertiary"
                        size="md"
                        manageSelectedItems={true}
                        onItemSelected={(item) => dropdownValueHandle({item: item.clickedItem})}
                    />
                </div>
            );
        case "choice_field_names":
        case "choice":
        case "choice_dynamic":
        case "reference":
            return (
                <div className="dropdown-container choice-dropdown">
                    <Dropdown
                        items={conditionOptions.valueAdditionalData}
                        selectedItems={[conditionOptions.value]}
                        select="single"
                        disabled={!dropdownsIsActive.value}
                        placeholder="--choose value--"
                        variant="tertiary"
                        size="md"
                        onItemSelected={(item) => dropdownValueHandle({item: item.clickedItem})}
                    />
                </div>
            );
        case "choice_multiple":
            let selectedItems = conditionOptions.value ? conditionOptions.value.split(",") : [""];
            return (
                <div className="dropdown-container choice-multiple-dropdown">
                    <Dropdown
                        items={conditionOptions.valueAdditionalData}
                        selectedItems={selectedItems}
                        select="multi"
                        disabled={!dropdownsIsActive.value}
                        placeholder="--choose value--"
                        variant="tertiary"
                        size="md"
                        onItemSelected={(item) => dropdownValueHandle({item: item.clickedItem})}
                    />
                </div>
            );
        case "string":
            return (
                <div className="dropdown-container string-input">
                    <Input
                        step="any"
                        type="text"
                        value={conditionOptions.value}
                        onInput={(e) => inputValueSet({value: e.target.value, type: editor, index: 0})}
                        autofocus={true}
                    />
                </div>
            );
        case "integer":
        case "decimal":
            return (
                <div className="dropdown-container number-input">
                    <Input
                        min={0}
                        step={conditionOptions.operator.editor === 'integer' ? 1 : 0.001}
                        type="number"
                        value={conditionOptions.value}
                        onInput={(e) => inputValueSet({value: e.target.value, type: editor, index: 0})}
                    />
                </div>
            );
        case 'between_field':
            if (!conditionOptions.value)
                conditionOptions.value= {}
            conditionOptions.value['0'] = conditionOptions.value['0'] || '';
            conditionOptions.value['1'] = conditionOptions.value['1'] || '';
            return (
                <>
                    <div className="dropdown-container between-field-input">
                        <DatePicker value={conditionOptions.value['0']} format="YYYY-MM-DD" onValueChange={(item) => onDatePickerChange({value: item, type: editor, index: 0})} />
                    </div>
                    <p>and</p>
                    <div className="dropdown-container between-field-input">
                        <DatePicker value={conditionOptions.value['1']} format="YYYY-MM-DD" onValueChange={(item) => onDatePickerChange({value: item, type: editor, index: 1})} />
                    </div>
                </>
            );
        case "textarea":
            return (
                <div className="dropdown-container textarea-input">
                    <TextArea
                        autoresize={false}
                        maxlength={5000}
                        value={state.textAreaValue}
                        resize="vertical"
                        onKeyDown={(e) => {
                            textAreaValueSet({value: e.target.value})
                        }}
                    />
                </div>
            );
        case "relative_field":
            if (!conditionOptions.value)
                conditionOptions.value = {}

            conditionOptions.value['0'] = conditionOptions.value['0'] || '';
            conditionOptions.value['1'] = conditionOptions.value['1'] || '';
            conditionOptions.value['2'] = conditionOptions.value['2'] || '';
            conditionOptions.value['3'] = conditionOptions.value['3'] || '';
            return (
                <>
                    <div className="dropdown-container relative-field-dropdown">
                        <Dropdown
                            items={[{ "id": "after", "label": "after", "dropdown": "value", "type": "relative-field", "index": "0" }, { "id": "before", "label": "before", "dropdown": "value", "type": "relative-field", "index": "0" }]}
                            selectedItems={[conditionOptions.value['0']]}
                            onItemSelected={(item) => dropdownValueHandle({item: item.clickedItem, index: 0})}
                            select="single"
                            disabled={!dropdownsIsActive.value}
                            placeholder="--choose value--"
                            variant="tertiary"
                            size="md"
                        />
                    </div>
                    <div className="dropdown-container relative-field-input">
                        <Input
                            min={0}
                            step={1}
                            type="number"
                            value={conditionOptions.value['1']}
                            onInput={(e) => inputValueSet({value: e.target.value, type: editor, index: 1})}
                        />
                    </div>
                    <div className="dropdown-container relative-field-dropdown">
                        <Dropdown
                            items={[{ "id": "minute", "label": "Minutes", "dropdown": "value", "type": "relative-field", "index": "2" }, { "id": "hour", "label": "Hours", "dropdown": "value", "type": "relative-field", "index": "2" }, { "id": "dayofweek", "label": "Days", "dropdown": "value", "type": "relative-field", "index": "2" }, { "id": "month", "label": "Months", "dropdown": "value", "type": "relative-field", "index": "2" }, { "id": "quarter", "label": "Quarters", "dropdown": "value", "type": "relative-field", "index": "2" }, { "id": "year", "label": "Years", "dropdown": "value", "type": "relative-field", "index": "2" }]}
                            selectedItems={[conditionOptions.value['2']]}
                            onItemSelected={(item) => dropdownValueHandle({item: item.clickedItem, index: 2})}
                            select="single"
                            disabled={!dropdownsIsActive.value}
                            placeholder="--choose value--"
                            variant="tertiary"
                            size="md"
                        />
                    </div>
                    <div className="dropdown-container relative-field-dropdown">
                        <Dropdown
                            items={[{ "id": "ago", "label": "ago", "dropdown": "value", "type": "relative-field", "index": "3" }, { "id": "ahead", "label": "from now", "dropdown": "value", "type": "relative-field", "index": "3" }]}
                            selectedItems={[conditionOptions.value['3']]}
                            onItemSelected={(item) => dropdownValueHandle({item: item.clickedItem, index: 3})}
                            select="single"
                            disabled={!dropdownsIsActive.value}
                            placeholder="--choose value--"
                            variant="tertiary"
                            size="md"
                        />
                    </div>
                </>
            );
        case "glide_duration":
            if (!conditionOptions.value)
                conditionOptions.value = {}
            conditionOptions.value['0'] = conditionOptions.value['0'] || '';
            conditionOptions.value['1'] = conditionOptions.value['1'] || '';
            conditionOptions.value['2'] = conditionOptions.value['2'] || '';
            conditionOptions.value['3'] = conditionOptions.value['3'] || '';
            return (
                <>
                    <div className="dropdown-container glide-duration-input">
                        <Input
                            placeholder="Days"
                            min={0}
                            max={9999}
                            step={1}
                            type="number"
                            value={conditionOptions.value[0]}
                            onInput={(e) => inputValueSet({value: e.target.value, type: editor, index: 0})}
                        />
                    </div>
                    <div className="dropdown-container glide-duration-input">
                        <Input
                            placeholder="Hours"
                            min={0}
                            max={23}
                            step={1}
                            type="number"
                            value={conditionOptions.value[1]}
                            onInput={(e) => inputValueSet({value: e.target.value, type: editor, index: 1})}
                        />
                    </div>
                    <div className="dropdown-container glide-duration-input">
                        <Input
                            placeholder="Minutes"
                            min={0}
                            max={59}
                            step={1}
                            type="number"
                            value={conditionOptions.value[2]}
                            onInput={(e) => inputValueSet({value: e.target.value, type: editor, index: 2})}
                        />
                    </div>
                    <div className="dropdown-container glide-duration-input">
                        <Input
                            placeholder="Seconds"
                            min={0}
                            max={59}
                            step={1}
                            type="number"
                            value={conditionOptions.value[3]}
                            onInput={(e) => inputValueSet({value: e.target.value, type: editor, index: 3})}
                        />
                    </div>
                </>
            );
        case "glide_date_choice":
            return (
                <div className="dropdown-container glide-date-choice-input">
                    <DatePicker format="YYYY-MM-DD" value={conditionOptions.value}  onValueChange={(value) => onDatePickerChange({value, type: editor})} />
                </div>
            );
        case 'trend_field':
            if (!conditionOptions.value)
                conditionOptions.value = {};

            conditionOptions.value['0'] = conditionOptions.value['0'] || '';
            conditionOptions.value['1'] = conditionOptions.value['1'] || '';
            conditionOptions.value['2'] = conditionOptions.value['2'] || { id: '' };
            return (
                <>
                    <div className="dropdown-container trend-field-dropdown">
                        <Dropdown
                            items={[{ "id": "GE", "label": "on or after", "dropdown": "value", "type": "trend_field", "index": "0" }, { "id": "LE", "label": "on or before", "dropdown": "value", "type": "trend_field", "index": "0" }, { "id": "GT", "label": "after", "dropdown": "value", "type": "trend_field", "index": "0" }, { "id": "LT", "label": "before", "dropdown": "value", "type": "trend_field", "index": "0" }, { "id": "EE", "label": "on", "dropdown": "value", "type": "trend_field", "index": "0" }]}
                            selectedItems={[conditionOptions.value['0']]}
                            onItemSelected={(item) => dropdownValueHandle({item: item.clickedItem, index: 0})}
                            select="single"
                            search="contains"
                            disabled={!dropdownsIsActive.value}
                            placeholder="--choose value--"
                            variant="tertiary"
                            size="md"
                        />
                    </div>
                    <div className="dropdown-container trend-field-dropdown">
                        <Dropdown
                            items={[{ "id": "dayofweek", "label": "day", "dropdown": "value", "type": "trend_field", "index": "1" }, { "id": "month", "label": "month", "dropdown": "value", "type": "trend_field", "index": "1" }, { "id": "quarter", "label": "quarter", "dropdown": "value", "type": "trend_field", "index": "1" }, { "id": "year", "label": "year", "dropdown": "value", "type": "trend_field", "index": "1" }, { "id": "week", "label": "week", "dropdown": "value", "type": "trend_field", "index": "1" }, { "id": "hour", "label": "hour", "dropdown": "value", "type": "trend_field", "index": "1" }]}
                            selectedItems={[conditionOptions.value['1']]}
                            onItemSelected={(item) => dropdownValueHandle({item: item.clickedItem, index: 1})}
                            select="single"
                            search="contains"
                            disabled={!dropdownsIsActive.value}
                            placeholder="--choose value--"
                            variant="tertiary"
                            size="md"
                        />
                    </div>
                    <div className="dropdown-container trend-field-dropdown">
                        <Dropdown
                            items={conditionOptions.valueAdditionalData}
                            selectedItems={[conditionOptions.value['2'].id]}
                            onItemSelected={(item) => dropdownValueHandle({item: item.clickedItem, index: 2})}
                            select="single"
                            search="contains"
                            disabled={!dropdownsIsActive.value}
                            placeholder="--choose value--"
                            variant="tertiary"
                            size="md"
                        />
                    </div>
                </>
            );
        case "glide_date_equivalent":
            if (!conditionOptions.value)
                conditionOptions.value = {};

            conditionOptions.value['0'] = conditionOptions.value['0'] || '';
            conditionOptions.value['1'] = conditionOptions.value['1'] || '';
            return (
                <>
                    <div className="dropdown-container glide-date-equivalent-dropdown">
                        <Dropdown
                            items={[{ "id": "day", "label": "day", "dropdown": "value", "type": "glide_date_equivalent", "index": "0" }, { "id": "month", "label": "month", "dropdown": "value", "type": "glide_date_equivalent", "index": "0" }, { "id": "quarter", "label": "quarter", "dropdown": "value", "type": "glide_date_equivalent", "index": "0" }, { "id": "year", "label": "year", "dropdown": "value", "type": "glide_date_equivalent", "index": "0" }, { "id": "week", "label": "week", "dropdown": "value", "type": "glide_date_equivalent", "index": "0" }, { "id": "hour", "label": "hour", "dropdown": "value", "type": "glide_date_equivalent", "index": "0" }]}
                            selectedItems={[conditionOptions.value['0']]}
                            onItemSelected={(item) => dropdownValueHandle({item: item.clickedItem, index: 0})}
                            select="single"
                            search="contains"
                            disabled={!dropdownsIsActive.value}
                            placeholder="--choose value--"
                            variant="tertiary"
                            size="md"
                        />
                    </div>
                    <p>and</p>
                    <div className="dropdown-container glide-date-equivalent-dropdown">
                        <Dropdown
                            items={conditionOptions.valueAdditionalData}
                            selectedItems={[conditionOptions.value['1']]}
                            onItemSelected={(item) => dropdownValueHandle({item: item.clickedItem, index: 1})}
                            select="single"
                            search="contains"
                            disabled={!dropdownsIsActive.value}
                            placeholder="--choose value--"
                            variant="tertiary"
                            size="md"
                        />
                    </div>
                </>
            );
        case 'glide_date_comparative':
            if (!conditionOptions.value)
                conditionOptions.value = {};
            
            conditionOptions.value['0'] = conditionOptions.value['0'] || '0';
            conditionOptions.value['1'] = conditionOptions.value['1'] || '';
            conditionOptions.value['2'] = conditionOptions.value['2'] || '';
            conditionOptions.value['3'] = conditionOptions.value['3'] || '';
            return (
                <>
                    <div className="dropdown-container glide-date-comparative-input">
                        <Input
                            min={0}
                            step={1}
                            type="number"
                            value={conditionOptions.value['0']}
                            onInput={(e) => inputValueSet({value: e.target.value, type: editor, index: 0})}
                        />
                    </div>
                    <div className="dropdown-container glide-date-comparative-dropdown">
                        <Dropdown
                            items={[{ "id": "day", "label": "day", "dropdown": "value", "type": "glide_date_comparative", "index": "1" }, { "id": "month", "label": "month", "dropdown": "value", "type": "glide_date_comparative", "index": "1" }, { "id": "quarter", "label": "quarter", "dropdown": "value", "type": "glide_date_comparative", "index": "1" }, { "id": "year", "label": "year", "dropdown": "value", "type": "glide_date_comparative", "index": "1" }, { "id": "week", "label": "week", "dropdown": "value", "type": "glide_date_comparative", "index": "1" }, { "id": "hour", "label": "hour", "dropdown": "value", "type": "glide_date_comparative", "index": "1" }]}
                            selectedItems={[conditionOptions.value['1']]}
                            onItemSelected={(item) => dropdownValueHandle({item: item.clickedItem, index: 1})}
                            select="single"
                            search="contains"
                            disabled={!dropdownsIsActive.value}
                            placeholder="--choose value--"
                            variant="tertiary"
                            size="md"
                        />
                    </div>
                    <div className="dropdown-container glide-date-comparative-dropdown">
                        <Dropdown
                            items={[{ "id": "before", "label": "before", "dropdown": "value", "type": "glide_date_comparative", "index": "2" }, { "id": "after", "label": "after", "dropdown": "value", "type": "glide_date_comparative", "index": "2" }, { "id": "before or after", "label": "before or after", "dropdown": "value", "type": "glide_date_comparative", "index": "2" }]}
                            selectedItems={[conditionOptions.value['2']]}
                            onItemSelected={(item) => dropdownValueHandle({item: item.clickedItem, index: 2})}
                            select="single"
                            search="contains"
                            disabled={!dropdownsIsActive.value}
                            placeholder="--choose value--"
                            variant="tertiary"
                            size="md"
                        />
                    </div>
                    <div className="dropdown-container glide-date-comparative-dropdown">
                        <Dropdown
                            items={conditionOptions.valueAdditionalData}
                            selectedItems={[conditionOptions.value['3']]}
                            onItemSelected={(item) => dropdownValueHandle({item: item.clickedItem, index: 3})}
                            select="single"
                            search="contains"
                            disabled={!dropdownsIsActive.value}
                            placeholder="--choose value--"
                            variant="tertiary"
                            size="md"
                        />
                    </div>
                </>
            );
        default:
            return;
    }
}