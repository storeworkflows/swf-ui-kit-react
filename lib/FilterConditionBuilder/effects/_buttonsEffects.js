Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.BUTTONS_EFFECTS = void 0;

const _utils = require('../utils');

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) {
  return function () {
    const self = this; const
      args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
  };
}

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else { obj[key] = value; } return obj;
}

var BUTTONS_EFFECTS = {
  clearAll: function clearAll(_ref) {
    const { payload } = _ref;
    const { tableFields } = payload;
    const { blockFields } = payload;
    const { allowFileds } = payload;

    const fieldsDataID = _utils.GENERAL_UTILS.generateID();

    const fieldsDropdownData = _utils.DATA_UTILS.getDropdownFieldsItems({
      tableFields: tableFields.columns,
      index: fieldsDataID,
      blockFields,
      allowFileds,
    });

    return {
      conditionsArray: [{
        id: _utils.GENERAL_UTILS.generateID(),
        condition: '',
        operator: '',
        relatedConditions: [{
          id: _utils.GENERAL_UTILS.generateID() + 1,
          condition: '',
          operator: '',
          conditionOptions: {
            operator: {
              operator: '',
              editior: '',
            },
            field: '',
            value: '',
            fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
            fieldsDropdownData: [{
              items: fieldsDropdownData,
            }],
          },
          relatedConditions: [],
        }],
      }],
      isSave: false,
      breadcrumbsItems: [{
        label: 'All',
        conditionId: 'all',
      }],
      query: '',
    };
  },
  deleteCondition: function deleteCondition(_ref2) {
    const { payload } = _ref2;
    const { conditionsArray } = payload;
    const { globalConditionID } = payload;
    const { currentConditionID } = payload;
    const { tableFields } = payload;
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
      const fieldsDataID = _utils.GENERAL_UTILS.generateID();

      const fieldsDropdownData = _utils.DATA_UTILS.getDropdownFieldsItems({
        tableFields: tableFields.columns,
        index: fieldsDataID,
      });

      newConditionsArray = [{
        id: _utils.GENERAL_UTILS.generateID(),
        condition: '',
        operator: '',
        relatedConditions: [{
          id: _utils.GENERAL_UTILS.generateID() + 1,
          condition: '',
          operator: '',
          conditionOptions: {
            operator: {
              operator: '',
              editior: '',
            },
            field: '',
            value: '',
            fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
            fieldsDropdownData: [{
              items: fieldsDropdownData,
            }],
          },
          relatedConditions: [],
        }],
      }];
      return {
        conditionsArray: newConditionsArray,
      };
    }
    path.splice(indexToDelete, 1);
    conditionsArray.relatedConditions = path;
    newConditionsArray = conditionsArray;
    return {
      conditionsArray: newConditionsArray,
    };
  },
  applyQuery: function applyQuery(_ref3) {
    const { payload } = _ref3;
    const { type } = payload;
    const { conditionsArray } = payload;
    const { onSendQuery } = payload;
    const { isSave } = payload;
    let newState;

    switch (type) {
      case 'run':
      case 'save':
        var copyConditionArray = _utils.GENERAL_UTILS.clone(conditionsArray);

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
        newState = _utils.QUERY_UTILS.generateQuery({
          payload: {
            conditionsArray: copyConditionArray,
            onSendQuery,
            isSave,
            operation: type,
          },
        });
        return _objectSpread(_objectSpread({}, newState), {}, {
          conditionsArray: copyConditionArray,
        });
    }
  },
  addNewOperator: function addNewOperator(_ref4) {
    const { payload } = _ref4;
    const { conditionsArray } = payload;
    const { tableFields } = payload;
    const { blockFields } = payload;
    const { allowFields } = payload;
    const { value } = payload;
    const { currentConditionID } = payload;
    const { globalConditionID } = payload;
    const globalConditionIndexInArr = conditionsArray.findIndex((cond) => cond.id === globalConditionID);

    const fieldsDataID = _utils.GENERAL_UTILS.generateID();

    const fieldsDropdownData = _utils.DATA_UTILS.getDropdownFieldsItems({
      tableFields: tableFields.columns,
      index: fieldsDataID,
      blockFields,
      allowFields,
    });

    switch (value) {
      case '^':
        conditionsArray[globalConditionIndexInArr].relatedConditions.push({
          id: _utils.GENERAL_UTILS.generateID(),
          condition: '',
          operator: value,
          conditionOptions: {
            operator: {
              operator: '',
              editior: '',
            },
            field: '',
            value: '',
            fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
            fieldsDropdownData: [{
              items: fieldsDropdownData,
            }],
          },
          relatedConditions: [],
        });
        break;

      case '^OR':
        var currentConditionIndexInArr = conditionsArray[globalConditionIndexInArr].relatedConditions.findIndex((cond) => cond.id === currentConditionID);
        var parrentConditionOptions = conditionsArray[globalConditionIndexInArr].relatedConditions[currentConditionIndexInArr].conditionOptions;
        var { activeField } = parrentConditionOptions;
        var { activeFieldsData } = parrentConditionOptions;
        var { field } = parrentConditionOptions;
        var { fieldItems } = parrentConditionOptions;
        var { operator } = parrentConditionOptions;
        var { operatorsArray } = parrentConditionOptions;
        var { fieldsData } = parrentConditionOptions;
        var { valueAdditionalData } = parrentConditionOptions;
        conditionsArray[globalConditionIndexInArr].relatedConditions[currentConditionIndexInArr].relatedConditions.push({
          id: _utils.GENERAL_UTILS.generateID(),
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
          id: _utils.GENERAL_UTILS.generateID(),
          condition: '',
          operator: value,
          relatedConditions: [{
            id: _utils.GENERAL_UTILS.generateID() + 1,
            condition: '',
            operator: '',
            conditionOptions: {
              operator: {
                operator: '',
                editior: '',
              },
              field: '',
              value: '',
              fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
              fieldsDropdownData: [{
                items: fieldsDropdownData,
              }],
            },
            relatedConditions: [],
          }],
        });
    }

    return {
      conditionsArray,
    };
  },
  toogleFilter: function toogleFilter(_ref5) {
    const { payload } = _ref5;
    const { isFilterOpened } = payload;
    return {
      isFilterOpened: !isFilterOpened,
    };
  },
  toogleSave: function toogleSave(_ref6) {
    const { payload } = _ref6;
    const { isSave } = payload;
    const newState = BUTTONS_EFFECTS.applyQuery({
      payload: _objectSpread(_objectSpread({}, payload), {}, {
        type: 'save',
      }),
    });
    return _objectSpread(_objectSpread({}, newState), {}, {
      isSave: !isSave,
    });
  },
  handleSaveClicked: (function () {
    const _handleSaveClicked = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee(_ref7) {
      let payload;
      return regeneratorRuntime.wrap((_context) => {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref7.payload;

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function handleSaveClicked(_x) {
      return _handleSaveClicked.apply(this, arguments);
    }

    return handleSaveClicked;
  }()),
  breadcrumbItemClicked: function breadcrumbItemClicked(_ref8) {
    const { payload } = _ref8;
    const { breadcrumbsItems } = payload;
    const { data } = payload;
    const { operation } = payload;
    const { conditionsArray } = payload;
    const { tableFields } = payload;
    const itemIndex = breadcrumbsItems.findIndex((breadcrumb) => breadcrumb.conditionId === data.conditionId);
    let newState;

    switch (operation) {
      case 'remove-next':
        breadcrumbsItems.splice(itemIndex, 1);
        newState = BUTTONS_EFFECTS.deleteCondition({
          payload: {
            tableFields,
            conditionsArray,
            currentConditionID: data.conditionId,
            globalConditionID: data.globalConditionId,
          },
        });
        return _objectSpread(_objectSpread({}, newState), {}, {
          breadcrumbsItems,
        });

      case 'remove-subsequent':
        var deletedItems = itemIndex === 0 ? breadcrumbsItems.splice(1) : breadcrumbsItems.splice(itemIndex + 1);
        deletedItems.forEach((item) => newState = BUTTONS_EFFECTS.deleteCondition({
          payload: {
            currentConditionID: item.conditionId,
            globalConditionID: item.globalConditionId,
            tableFields,
            conditionsArray,
          },
        }));
        return _objectSpread(_objectSpread({}, newState), {}, {
          breadcrumbsItems,
        });
    }
  },
  clickBtn: function clickBtn(_ref9) {
    const { action } = _ref9;
    const { payload } = _ref9;
    let newState;
    const _this$state = this.state;
    const { conditionsArray } = _this$state;
    const { blockFields } = _this$state;
    const { allowFields } = _this$state;
    const { tableFields } = _this$state;
    const { isFilterOpened } = _this$state;
    const { isSave } = _this$state;
    const { breadcrumbsItems } = _this$state;
    const { onSendQuery } = this.props;

    switch (action) {
      case 'clearAll':
        newState = BUTTONS_EFFECTS.clearAll({
          payload: {
            blockFields,
            allowFields,
            tableFields,
          },
        });
        break;

      case 'deleteCondition':
        newState = BUTTONS_EFFECTS.deleteCondition({
          payload: _objectSpread(_objectSpread({}, payload), {}, {
            conditionsArray,
            blockFields,
            allowFields,
            tableFields,
          }),
        });
        break;

      case 'addNewOperator':
        newState = BUTTONS_EFFECTS.addNewOperator({
          payload: _objectSpread(_objectSpread({}, payload), {}, {
            tableFields,
            conditionsArray,
            blockFields,
            allowFields,
          }),
        });
        break;

      case 'applyQuery':
        newState = BUTTONS_EFFECTS.applyQuery({
          payload: _objectSpread(_objectSpread({}, payload), {}, {
            conditionsArray,
            isSave,
            onSendQuery,
          }),
        });
        break;

      case 'filterToogle':
        newState = BUTTONS_EFFECTS.toogleFilter({
          payload: {
            isFilterOpened,
          },
        });
        break;

      case 'toogleSave':
        newState = BUTTONS_EFFECTS.toogleSave({
          payload: _objectSpread(_objectSpread({}, payload), {}, {
            conditionsArray,
            onSendQuery,
          }),
        });
        break;

      case 'save':
        break;

      case 'breadcrumbs':
        newState = BUTTONS_EFFECTS.breadcrumbItemClicked({
          payload: _objectSpread(_objectSpread({}, payload), {}, {
            breadcrumbsItems,
            conditionsArray,
            tableFields,
          }),
        });
        break;
    }

    this.setState(newState);
  },
};
exports.BUTTONS_EFFECTS = BUTTONS_EFFECTS;
