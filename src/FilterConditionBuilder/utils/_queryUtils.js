import { DATA_UTILS, GENERAL_UTILS, REQUEST_UTILS } from './index';

export const QUERY_UTILS = {
  parseConditionValue: ({
    condition, operators, tableFields, globalID, currentID,
  }) => {
    let operator = GENERAL_UTILS.findOperator(condition, operators);
    let field = ''; let value = ''; let editor = ''; let valueAdditionalData = []; let fieldItems = []; let
      fieldsDropdownData = [];
    const fieldsDataID = GENERAL_UTILS.generateID();
    if (!operator) {
      field = condition;
      operator = '';
    } else {
      field = condition.slice(0, condition.indexOf(operator));
      value = condition.slice(field.length + operator.length);
      editor = tableFields[field].operators.find((op) => op.operator === operator).advancedEditor;
      valueAdditionalData = DATA_UTILS.getValueAdditionalData({
        tableFields, editor, field, globalID, currentID,
      });
      value = DATA_UTILS.getValue({ value, editor });
    }
    const fields = field.split('.');
    fieldsDropdownData = DATA_UTILS.getDropdownFieldsItems({ tableFields, index: fieldsDataID });
    fieldItems = fields.map((fieldName) => ({ ...fieldsDropdownData.find((data) => data.id === fieldName), listIndex: 0, dropdownClick: false }));
    fieldItems = {
      label: tableFields[field].label,
      value: field,
      items: fieldItems,
    };
    const operatorsArray = tableFields[field].operators.map((operation) => ({ id: operation.operator, label: operation.label, dropdown: 'operation' }));
    if (editor === 'trend_field') {
      valueAdditionalData = DATA_UTILS.getTrendData(value['1']);
    }

    return {
      field,
      operator: { operator, editor },
      value,
      operatorsArray,
      valueAdditionalData,
      fieldItems,
      fieldsData: { [fieldsDataID]: tableFields },
      fieldsDropdownData: [{ items: fieldsDropdownData }],
      activeFieldsData: tableFields,
      activeField: fieldItems.items[fieldItems.items.length - 1].id,
    };
  },
  parseConditionValueWithRef: async ({
    condition, operators, tableFields, globalID, currentID,
  }) => {
    const operator = GENERAL_UTILS.findOperator(condition, operators);
    let lastTableFields;
    let field = ''; let value = ''; let editor = ''; let valueAdditionalData = []; let fieldItems = []; let
      fieldsDropdownData = [];
    let fieldsDataID = GENERAL_UTILS.generateID();
    let referenceField = condition.slice(0, condition.indexOf(operator)).split('.');
    const fields = GENERAL_UTILS.clone(referenceField);
    const isReferenceField = referenceField.length > 1;
    if (isReferenceField) {
      const dropdownFields = [{ items: DATA_UTILS.getDropdownFieldsItems({ tableFields, index: fieldsDataID, listIndex: 0 }) }];
      let fieldsData = { [fieldsDataID]: tableFields };
      let nextData = tableFields[referenceField[0]];
      referenceField = referenceField.reverse();
      referenceField.pop();
      referenceField = referenceField.reverse();
      const queryParams = {
        sysparm_operators: true,
        sysparm_get_extended_tables: true,
        sysparm_keywords: true,
      };
      let lastField = '';
      const allFields = condition.slice(0, condition.indexOf(operator));
      value = condition.slice(allFields.length + operator.length);
      let i = 1;
      for await (const key of referenceField) {
        fieldsDataID = GENERAL_UTILS.generateID();
        await REQUEST_UTILS.fetchTableData({ table: nextData.reference, queryParams })
          .then((res) => {
            fieldsData = { ...fieldsData, [fieldsDataID]: res.columns };
            nextData = res.columns[key];
            lastTableFields = res.columns;
            dropdownFields.push({ items: DATA_UTILS.getDropdownFieldsItems({ tableFields: Object.values(res.columns), index: fieldsDataID, listIndex: i }) });
            i++;
          });
      }
      fieldsDropdownData = dropdownFields;
      const dataForFieldItems = fieldsDropdownData.map((field) => field.items);

      i = 0;
      for (const key of dataForFieldItems) {
        fieldItems = [...fieldItems, { ...key.find((data) => fields[i] === data.id), dropdownClicked: i < dataForFieldItems.length - 1 }];
        i++;
      }
      field = fieldItems.map((field) => field.id).join('.');
      lastField = field.split('.');
      lastField = lastField[lastField.length - 1];
      editor = lastTableFields[lastField].operators.find((op) => op.operator === operator).advancedEditor;
      const operatorsArray = lastTableFields[lastField].operators.map((operation) => ({ id: operation.operator, label: operation.label, dropdown: 'operation' }));
      value = DATA_UTILS.getValue({ value, editor });
      fieldItems = {
        label: fieldItems.map((field) => field.label).join(' . '),
        value: fieldItems.map((field) => field.id).join('.'),
        items: fieldItems,
      };
      valueAdditionalData = editor === 'trend_field' ? DATA_UTILS.getTrendData(value['1']) : DATA_UTILS.getValueAdditionalData({
        tableFields: lastTableFields, editor, field: lastField, globalID, currentID,
      });

      return {
        field,
        operator: { operator, editor },
        value,
        operatorsArray,
        valueAdditionalData,
        fieldItems,
        fieldsData,
        fieldsDropdownData,
        activeFieldsData: lastTableFields,
        activeField: fieldItems.items[fieldItems.items.length - 1].id,
      };
    }
  },
  generateCurrentConditionQuery: ({ payload }) => {
    const { conditionData, operation, breadcrumbItem } = payload;
    const {
      conditionOptions: {
        field, operator: { operator, editor }, value, fieldItems, operatorsArray, valueAdditionalData,
      },
    } = conditionData;
    let conditionQuery = '';
    if (field && operator && operation === 'run') {
      let valueLabel;
      switch (editor) {
        case 'between_field':
          conditionQuery = (value['0']
                        && value['1']) ? `${field}${operator}javascript:gs.dateGenerate('${value['0']}','00:00:00')@javascript:gs.dateGenerate('${value['1']}','23:59:59')` : '';
          conditionQuery ? valueLabel = `${value['0']} and ${value['1']}` : '';
          break;
        case 'relative_field':
          const currentOperator = value['0'] === 'before' ? 'RELATIVELT' : 'RELATIVEGT';
          value['1'] = value['1'] || '0';
          conditionQuery = (value['0']
                        && value['1']
                        && value['2']
                        && value['3']) ? `${field}${currentOperator}@${value['2']}@${value['3']}@${value['1']}` : '';
          conditionQuery ? valueLabel = `${value['0']} ${value['1']} ${value['2']} ${value['3']}` : '';
          break;
        case 'glide_duration':
          conditionQuery = (value['0']
                        && value['1']
                        && value['2']
                        && value['3']) ? `${field}${operator}javascript:gs.getDurationDate('${value['0']} ${value['1']}:${value['2']}:${value['3']}')` : '';
          conditionQuery ? valueLabel = `${value['0']} ${value['1']}:${value['2']}:${value['3']}` : '';
          break;
        case 'glide_date_choice':
          conditionQuery = (value) ? `${field}${operator}${value}@javascript:gs.dateGenerate('${value}','start')@javascript:gs.dateGenerate('${value}','end')` : '';
          conditionQuery ? valueLabel = value : '';
          break;
        case 'trend_field':
          conditionQuery = (value['0']
                        && value['1']
                        && value['2'].label
                        && value['2'].id) ? `${field}${operator}${value['2'].label}@javascript:gs.datePart('${value['1']}','${value['2'].id}','${value['0']}')` : '';
          conditionQuery ? valueLabel = `@javascript:gs.datePart('${value['1']}','${value['2'].id}','${value['0']}')` : '';
          break;
        case 'glide_date_equivalent':
          conditionQuery = (value['0']
                        && value['1']) ? `${field}${operator}${value['1']}@${value['0']}` : '';
          conditionQuery ? valueLabel = `${value['1']} ${value['0']}` : '';
          break;
        case 'glide_date_comparative':
          conditionQuery = (value['0']
                        && value['1']
                        && value['2']
                        && value['3']) ? `${field}${operator}${value['3']}@${value['1']}@${value['2']}@${value['0']}` : '';
          conditionQuery ? valueLabel = `${value['0']} ${value['1']} ${value['2']} ${value['3']}` : '';
          break;
        case 'none':
          conditionQuery = `${field}${operator}`;
          valueLabel = '';
          break;
        default:
          const str = value.trim().split(' ').filter(Boolean).join(' ');
          conditionQuery = str ? `${field}${operator}${str}` : '';
          conditionQuery ? valueLabel = str : '';
      }
      if (conditionQuery) {
        const conditionOperatorLabel = (editor === 'none' || !operator.match(/\W/)) ? operatorsArray.find((op) => op.id === operator).label : operator;
        if (fieldItems.items[fieldItems.items.length - 1].reference === 'true' && valueAdditionalData.length) {
          valueLabel = valueAdditionalData.find((val) => val.id === valueLabel).label;
        }
        breadcrumbItem.label = `${breadcrumbItem.label}${conditionData.operator === '^OR' ? ' .or. ' : ''} ${fieldItems.label} ${conditionOperatorLabel} ${valueLabel}`;
      }
    } else if (field && operation === 'save') {
      switch (editor) {
        case 'between_field':
          conditionQuery = (value['0']
                        && value['1']) ? `${field}${operator}javascript:gs.dateGenerate('${value['0']}','00:00:00')@javascript:gs.dateGenerate('${value['1']}','23:59:59')` : '';
          break;
        case 'relative_field':
          const currentOperator = value['0'] === 'before' ? 'RELATIVELT' : 'RELATIVEGT';
          value['1'] = value['1'] || '0';
          conditionQuery = (value['0']
                        && value['1']
                        && value['2']
                        && value['3']) ? `${field}${currentOperator}@${value['2']}@${value['3']}@${value['1']}` : '';
          break;
        case 'glide_duration':
          conditionQuery = (value['0']
                        && value['1']
                        && value['2']
                        && value['3']) ? `${field}${operator}javascript:gs.getDurationDate('${value['0']} ${value['1']}:${value['2']}:${value['3']}')` : '';
          break;
        case 'glide_date_choice':
          conditionQuery = (value) ? `${field}${operator}${value}@javascript:gs.dateGenerate('${value}','start')@javascript:gs.dateGenerate('${value}','end')` : '';
          break;
        case 'trend_field':
          conditionQuery = (value['0']
                        && value['1']
                        && value['2'].label
                        && value['2'].id) ? `${field}${operator}${value['2'].label}@javascript:gs.datePart('${value['1']}','${value['2'].id}','${value['0']}')` : '';
          break;
        case 'glide_date_equivalent':
          conditionQuery = (value['0']
                        && value['1']) ? `${field}${operator}${value['1']}@${value['0']}` : '';
          break;
        case 'glide_date_comparative':
          conditionQuery = (value['0']
                        && value['1']
                        && value['2']
                        && value['3']) ? `${field}${operator}${value['3']}@${value['1']}@${value['2']}@${value['0']}` : '';
          break;
        case 'none':
          conditionQuery = `${field}${operator}`;
          break;
        default:
          conditionQuery = `${field}${operator}${value}`;
      }
      conditionQuery = conditionQuery || `${field}${operator}`;
    }

    return { conditionQuery: conditionQuery || false, breadcrumbItem };
  },
  generateQuery: ({ payload }) => {
    const {
      conditionsArray, isSave, onSendQuery, operation,
    } = payload;

    let valueToReturn;

    let resultQuery = '';
    let error = false;
    const breadcrumbsItems = [{ label: 'All', conditionId: 'all' }];
    let isNQ = false;

    conditionsArray.forEach((globalCond) => {
      globalCond.relatedConditions.forEach((parentCond, index) => {
        let breadcrumbItem = { label: `${globalCond.operator && index === 0 ? 'or' : ''}`, conditionId: parentCond.id, globalConditionId: globalCond.id };
        const generatedCondition = QUERY_UTILS.generateCurrentConditionQuery({ payload: { conditionData: parentCond, operation, breadcrumbItem } });
        isNQ = generatedCondition.conditionQuery;
        if (isNQ && index < 1) {
          resultQuery += globalCond.operator;
          isNQ = false;
        }

        const curCondition = generatedCondition.conditionQuery;
        if (curCondition) {
          breadcrumbItem = generatedCondition.breadcrumbItem;
          resultQuery += `${parentCond.operator}${curCondition}`;
        } else if (operation === 'run' && !curCondition && !parentCond.conditionOptions.field && conditionsArray.length === 1 && globalCond.relatedConditions.length === 1 && !parentCond.relatedConditions.length) {
          resultQuery = '';
        } else {
          error = true;
        }

        parentCond.relatedConditions.forEach((childCond) => {
          const generatedCondition = QUERY_UTILS.generateCurrentConditionQuery({ payload: { conditionData: childCond, operation, breadcrumbItem } });

          const curCondition = generatedCondition.conditionQuery;
          if (curCondition) {
            breadcrumbItem = generatedCondition.breadcrumbItem;
            resultQuery += `${childCond.operator}${curCondition}`;
          } else {
            error = true;
          }
        });
        if (generatedCondition.conditionQuery) {
          breadcrumbItem.label = breadcrumbItem.label.trim();
          breadcrumbsItems.push(breadcrumbItem);
        }
      });

      // if (error) return null;

      onSendQuery(resultQuery);

      switch (operation) {
        case 'run':
          const isBreadcrumbFalse = !!breadcrumbsItems.find((item) => !item.label);

          if (!isBreadcrumbFalse) valueToReturn = { breadcrumbsItems };
          break;
        case 'save':
          valueToReturn = { queryToSave: resultQuery, isSave: !isSave };
          break;
      }
    });
    return valueToReturn;
  },
};
