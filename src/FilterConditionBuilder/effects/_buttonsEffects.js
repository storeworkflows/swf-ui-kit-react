import { GENERAL_UTILS, DATA_UTILS, QUERY_UTILS } from '../utils';

export const BUTTONS_EFFECTS = {
  clearAll({ payload }) {
    const { tableFields, blockFields, allowFileds } = payload;
    const fieldsDataID = GENERAL_UTILS.generateID();
    const fieldsDropdownData = DATA_UTILS.getDropdownFieldsItems({
      tableFields: tableFields.columns, index: fieldsDataID, blockFields, allowFileds,
    });

    return {
      conditionsArray: [{
        id: GENERAL_UTILS.generateID(),
        condition: '',
        operator: '',
        relatedConditions: [{
          id: GENERAL_UTILS.generateID() + 1,
          condition: '',
          operator: '',
          conditionOptions: {
            operator: { operator: '', editior: '' }, field: '', value: '', fieldsData: { [fieldsDataID]: tableFields.columns }, fieldsDropdownData: [{ items: fieldsDropdownData }],
          },
          relatedConditions: [],
        }],
      }],
      isSave: false,
      breadcrumbsItems: [{ label: 'All', conditionId: 'all' }],
      query: '',
    };
  },
  deleteCondition({ payload }) {
    const {
      conditionsArray, globalConditionID, currentConditionID, tableFields,
    } = payload;
    const globalConditionIndexInArr = conditionsArray.findIndex((cond) => cond.id === globalConditionID);
    const currentConditionIndexInArr = conditionsArray[globalConditionIndexInArr].relatedConditions.findIndex((cond) => cond.id === currentConditionID);
    let path = [];
    let newConditionsArray;
    let indexToDelete;

    if (currentConditionIndexInArr > -1) {
      path = conditionsArray[globalConditionIndexInArr].relatedConditions;
      indexToDelete = currentConditionIndexInArr;
      if (conditionsArray[globalConditionIndexInArr].relatedConditions.length === 1) {
        path = conditionsArray;
        indexToDelete = globalConditionIndexInArr;
      } else if (currentConditionIndexInArr === 0) {
        path[1].operator = '';
        conditionsArray[globalConditionIndexInArr].relatedConditions[1].operator = path[1].operator;
      }
    } else {
      conditionsArray[globalConditionIndexInArr].relatedConditions.forEach((parentCond, pIndex) => {
        parentCond.relatedConditions.forEach((childCond, chIndex) => {
          if (childCond.id === currentConditionID) {
            path = conditionsArray[globalConditionIndexInArr].relatedConditions[pIndex].relatedConditions;
            indexToDelete = chIndex;
          }
        });
      });
    }

    if (conditionsArray.length === 1 && path === conditionsArray) {
      const fieldsDataID = GENERAL_UTILS.generateID();
      const fieldsDropdownData = DATA_UTILS.getDropdownFieldsItems({ tableFields: tableFields.columns, index: fieldsDataID });

      newConditionsArray = [
        {
          id: GENERAL_UTILS.generateID(),
          condition: '',
          operator: '',
          relatedConditions: [
            {
              id: GENERAL_UTILS.generateID() + 1,
              condition: '',
              operator: '',
              conditionOptions: {
                operator: { operator: '', editior: '' },
                field: '',
                value: '',
                fieldsData: { [fieldsDataID]: tableFields.columns },
                fieldsDropdownData: [{ items: fieldsDropdownData }],
              },
              relatedConditions: [],
            },
          ],
        },
      ];
      return { conditionsArray: newConditionsArray };
    }
    path.splice(indexToDelete, 1);
    conditionsArray.relatedConditions = path;
    newConditionsArray = conditionsArray;
    return { conditionsArray: newConditionsArray };
  },
  applyQuery({ payload }) {
    const {
      type, conditionsArray, onSendQuery, isSave,
    } = payload;
    let newState;
    switch (type) {
      case 'run':
      case 'save':
        let copyConditionArray = GENERAL_UTILS.clone(conditionsArray);
        copyConditionArray = copyConditionArray.map((globalCond) => {
          globalCond.relatedConditions.map((parentCond) => {
            parentCond.failed = false;
            parentCond.relatedConditions.map((childCond) => {
              childCond.failed = false;
              return childCond;
            });
            return parentCond;
          });
          return globalCond;
        });

        newState = QUERY_UTILS.generateQuery({
          payload: {
            conditionsArray: copyConditionArray, onSendQuery, isSave, operation: type,
          },
        });
        return { ...newState, conditionsArray: copyConditionArray };
    }
  },
  addNewOperator({ payload }) {
    const {
      conditionsArray,
      tableFields,
      blockFields,
      allowFields,
      value,
      currentConditionID,
      globalConditionID,
    } = payload;
    const globalConditionIndexInArr = conditionsArray.findIndex((cond) => cond.id === globalConditionID);
    const fieldsDataID = GENERAL_UTILS.generateID();
    const fieldsDropdownData = DATA_UTILS.getDropdownFieldsItems({
      tableFields: tableFields.columns, index: fieldsDataID, blockFields, allowFields,
    });
    switch (value) {
      case '^':
        conditionsArray[globalConditionIndexInArr].relatedConditions.push({
          id: GENERAL_UTILS.generateID(),
          condition: '',
          operator: value,
          conditionOptions: {
            operator: { operator: '', editior: '' },
            field: '',
            value: '',
            fieldsData: { [fieldsDataID]: tableFields.columns },
            fieldsDropdownData: [{ items: fieldsDropdownData }],
          },
          relatedConditions: [],
        });
        break;
      case '^OR':
        const currentConditionIndexInArr = conditionsArray[globalConditionIndexInArr].relatedConditions.findIndex((cond) => cond.id === currentConditionID);
        const parrentConditionOptions = conditionsArray[globalConditionIndexInArr].relatedConditions[currentConditionIndexInArr].conditionOptions;
        const {
          activeField, activeFieldsData, field, fieldItems, operator, operatorsArray, fieldsData, valueAdditionalData,
        } = parrentConditionOptions;
        conditionsArray[globalConditionIndexInArr].relatedConditions[currentConditionIndexInArr].relatedConditions.push({
          id: GENERAL_UTILS.generateID(),
          condition: '',
          operator: value,
          conditionOptions: {
            operator,
            field,
            value: '',
            activeField,
            operatorsArray,
            activeFieldsData,
            fieldItems,
            fieldsData,
            fieldsDropdownData: parrentConditionOptions.fieldsDropdownData,
            valueAdditionalData,
          },
        });
        break;
      case '^NQ':
        conditionsArray.push({
          id: GENERAL_UTILS.generateID(),
          condition: '',
          operator: value,
          relatedConditions: [{
            id: GENERAL_UTILS.generateID() + 1,
            condition: '',
            operator: '',
            conditionOptions: {
              operator: { operator: '', editior: '' },
              field: '',
              value: '',
              fieldsData: { [fieldsDataID]: tableFields.columns },
              fieldsDropdownData: [{ items: fieldsDropdownData }],
            },
            relatedConditions: [],
          }],
        });
    }
    return { conditionsArray };
  },
  toogleFilter({ payload }) {
    const { isFilterOpened } = payload;

    return { isFilterOpened: !isFilterOpened };
  },
  toogleSave({ payload }) {
    const { isSave } = payload;
    const newState = BUTTONS_EFFECTS.applyQuery({ payload: { ...payload, type: 'save' } });

    return { ...newState, isSave: !isSave };
  },
  async handleSaveClicked({ payload }) {

  },
  breadcrumbItemClicked({ payload }) {
    const {
      breadcrumbsItems,
      data,
      operation,
      conditionsArray,
      tableFields,
    } = payload;
    const itemIndex = breadcrumbsItems.findIndex((breadcrumb) => breadcrumb.conditionId === data.conditionId);
    let newState;

    switch (operation) {
      case 'remove-next':
        breadcrumbsItems.splice(itemIndex, 1);
        newState = BUTTONS_EFFECTS.deleteCondition({
          payload: {
            tableFields, conditionsArray, currentConditionID: data.conditionId, globalConditionID: data.globalConditionId,
          },
        });

        return { ...newState, breadcrumbsItems };
      case 'remove-subsequent':
        const deletedItems = (itemIndex === 0) ? breadcrumbsItems.splice(1) : breadcrumbsItems.splice(itemIndex + 1);
        deletedItems.forEach((item) => newState = BUTTONS_EFFECTS.deleteCondition({
          payload: {
            currentConditionID: item.conditionId, globalConditionID: item.globalConditionId, tableFields, conditionsArray,
          },
        }));

        return { ...newState, breadcrumbsItems };
    }
  },
  clickBtn({ action, payload }) {
    let newState;
    const {
      conditionsArray,
      blockFields,
      allowFields,
      tableFields,
      isFilterOpened,
      isSave,
      breadcrumbsItems,
    } = this.state;
    const { onSendQuery } = this.props;
    switch (action) {
      case 'clearAll':
        newState = BUTTONS_EFFECTS.clearAll({ payload: { blockFields, allowFields, tableFields } });
        break;
      case 'deleteCondition':
        newState = BUTTONS_EFFECTS.deleteCondition({
          payload: {
            ...payload, conditionsArray, blockFields, allowFields, tableFields,
          },
        });
        break;
      case 'addNewOperator':
        newState = BUTTONS_EFFECTS.addNewOperator({
          payload: {
            ...payload, tableFields, conditionsArray, blockFields, allowFields,
          },
        });
        break;
      case 'applyQuery':
        newState = BUTTONS_EFFECTS.applyQuery({
          payload: {
            ...payload, conditionsArray, isSave, onSendQuery,
          },
        });
        break;
      case 'filterToogle':
        newState = BUTTONS_EFFECTS.toogleFilter({ payload: { isFilterOpened } });
        break;
      case 'toogleSave':
        newState = BUTTONS_EFFECTS.toogleSave({ payload: { ...payload, conditionsArray, onSendQuery } });
        break;
      case 'save':
        break;
      case 'breadcrumbs':
        newState = BUTTONS_EFFECTS.breadcrumbItemClicked({
          payload: {
            ...payload, breadcrumbsItems, conditionsArray, tableFields,
          },
        });
        break;
    }
    this.setState(newState);
  },
};
