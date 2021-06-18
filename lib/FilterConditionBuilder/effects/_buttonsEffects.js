"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BUTTONS_EFFECTS = void 0;

var _utils = require("../utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BUTTONS_EFFECTS = {
  clearAll: function clearAll(_ref) {
    var payload = _ref.payload;
    var tableFields = payload.tableFields,
        blockFields = payload.blockFields,
        allowFileds = payload.allowFileds;

    var fieldsDataID = _utils.GENERAL_UTILS.generateID();

    var fieldsDropdownData = _utils.DATA_UTILS.getDropdownFieldsItems({
      tableFields: tableFields.columns,
      index: fieldsDataID,
      blockFields: blockFields,
      allowFileds: allowFileds
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
              editior: ''
            },
            field: '',
            value: '',
            fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
            fieldsDropdownData: [{
              items: fieldsDropdownData
            }]
          },
          relatedConditions: []
        }]
      }],
      isSave: false,
      breadcrumbsItems: [{
        label: 'All',
        conditionId: 'all'
      }],
      query: ""
    };
  },
  deleteCondition: function deleteCondition(_ref2) {
    var payload = _ref2.payload;
    var conditionsArray = payload.conditionsArray,
        globalConditionID = payload.globalConditionID,
        currentConditionID = payload.currentConditionID,
        tableFields = payload.tableFields;
    var globalConditionIndexInArr = conditionsArray.findIndex(function (cond) {
      return cond.id === globalConditionID;
    });
    var currentConditionIndexInArr = conditionsArray[globalConditionIndexInArr].relatedConditions.findIndex(function (cond) {
      return cond.id === currentConditionID;
    });
    var path = [];
    var newConditionsArray;
    var indexToDelete;

    if (currentConditionIndexInArr > -1) {
      path = conditionsArray[globalConditionIndexInArr].relatedConditions;
      indexToDelete = currentConditionIndexInArr;

      if (conditionsArray[globalConditionIndexInArr].relatedConditions.length === 1) {
        path = conditionsArray;
        indexToDelete = globalConditionIndexInArr;
      } else if (currentConditionIndexInArr === 0) {
        path[1].operator = "";
        conditionsArray[globalConditionIndexInArr].relatedConditions[1].operator = path[1].operator;
      }
    } else {
      conditionsArray[globalConditionIndexInArr].relatedConditions.forEach(function (parentCond, pIndex) {
        parentCond.relatedConditions.forEach(function (childCond, chIndex) {
          if (childCond.id === currentConditionID) {
            path = conditionsArray[globalConditionIndexInArr].relatedConditions[pIndex].relatedConditions;
            indexToDelete = chIndex;
          }
        });
      });
    }

    if (conditionsArray.length === 1 && path === conditionsArray) {
      var fieldsDataID = _utils.GENERAL_UTILS.generateID();

      var fieldsDropdownData = _utils.DATA_UTILS.getDropdownFieldsItems({
        tableFields: tableFields.columns,
        index: fieldsDataID
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
              editior: ''
            },
            field: '',
            value: '',
            fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
            fieldsDropdownData: [{
              items: fieldsDropdownData
            }]
          },
          relatedConditions: []
        }]
      }];
      return {
        conditionsArray: newConditionsArray
      };
    } else {
      path.splice(indexToDelete, 1);
      conditionsArray.relatedConditions = path;
      newConditionsArray = conditionsArray;
      return {
        conditionsArray: newConditionsArray
      };
    }
  },
  applyQuery: function applyQuery(_ref3) {
    var payload = _ref3.payload;
    var type = payload.type,
        conditionsArray = payload.conditionsArray,
        onSendQuery = payload.onSendQuery,
        isSave = payload.isSave;
    var newState;

    switch (type) {
      case "run":
      case "save":
        var copyConditionArray = _utils.GENERAL_UTILS.clone(conditionsArray);

        copyConditionArray = copyConditionArray.map(function (globalCond) {
          globalCond.relatedConditions.map(function (parentCond) {
            parentCond.failed = false;
            parentCond.relatedConditions.map(function (childCond) {
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
            onSendQuery: onSendQuery,
            isSave: isSave,
            operation: type
          }
        });
        return _objectSpread(_objectSpread({}, newState), {}, {
          conditionsArray: copyConditionArray
        });
    }
  },
  addNewOperator: function addNewOperator(_ref4) {
    var payload = _ref4.payload;
    var conditionsArray = payload.conditionsArray,
        tableFields = payload.tableFields,
        blockFields = payload.blockFields,
        allowFields = payload.allowFields,
        value = payload.value,
        currentConditionID = payload.currentConditionID,
        globalConditionID = payload.globalConditionID;
    var globalConditionIndexInArr = conditionsArray.findIndex(function (cond) {
      return cond.id === globalConditionID;
    });

    var fieldsDataID = _utils.GENERAL_UTILS.generateID();

    var fieldsDropdownData = _utils.DATA_UTILS.getDropdownFieldsItems({
      tableFields: tableFields.columns,
      index: fieldsDataID,
      blockFields: blockFields,
      allowFields: allowFields
    });

    switch (value) {
      case "^":
        conditionsArray[globalConditionIndexInArr].relatedConditions.push({
          id: _utils.GENERAL_UTILS.generateID(),
          condition: '',
          operator: value,
          conditionOptions: {
            operator: {
              operator: '',
              editior: ''
            },
            field: '',
            value: '',
            fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
            fieldsDropdownData: [{
              items: fieldsDropdownData
            }]
          },
          relatedConditions: []
        });
        break;

      case '^OR':
        var currentConditionIndexInArr = conditionsArray[globalConditionIndexInArr].relatedConditions.findIndex(function (cond) {
          return cond.id === currentConditionID;
        });
        var parrentConditionOptions = conditionsArray[globalConditionIndexInArr].relatedConditions[currentConditionIndexInArr].conditionOptions;
        var activeField = parrentConditionOptions.activeField,
            activeFieldsData = parrentConditionOptions.activeFieldsData,
            field = parrentConditionOptions.field,
            fieldItems = parrentConditionOptions.fieldItems,
            operator = parrentConditionOptions.operator,
            operatorsArray = parrentConditionOptions.operatorsArray,
            fieldsData = parrentConditionOptions.fieldsData,
            valueAdditionalData = parrentConditionOptions.valueAdditionalData;
        conditionsArray[globalConditionIndexInArr].relatedConditions[currentConditionIndexInArr].relatedConditions.push({
          id: _utils.GENERAL_UTILS.generateID(),
          condition: '',
          operator: value,
          conditionOptions: {
            operator: operator,
            field: field,
            value: '',
            activeField: activeField,
            operatorsArray: operatorsArray,
            activeFieldsData: activeFieldsData,
            fieldItems: fieldItems,
            fieldsData: fieldsData,
            fieldsDropdownData: parrentConditionOptions.fieldsDropdownData,
            valueAdditionalData: valueAdditionalData
          }
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
                editior: ''
              },
              field: '',
              value: '',
              fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
              fieldsDropdownData: [{
                items: fieldsDropdownData
              }]
            },
            relatedConditions: []
          }]
        });
    }

    return {
      conditionsArray: conditionsArray
    };
  },
  toogleFilter: function toogleFilter(_ref5) {
    var payload = _ref5.payload;
    var isFilterOpened = payload.isFilterOpened;
    return {
      isFilterOpened: !isFilterOpened
    };
  },
  toogleSave: function toogleSave(_ref6) {
    var payload = _ref6.payload;
    var isSave = payload.isSave;
    var newState = BUTTONS_EFFECTS.applyQuery({
      payload: _objectSpread(_objectSpread({}, payload), {}, {
        type: "save"
      })
    });
    return _objectSpread(_objectSpread({}, newState), {}, {
      isSave: !isSave
    });
  },
  handleSaveClicked: function () {
    var _handleSaveClicked = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref7) {
      var payload;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref7.payload;

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function handleSaveClicked(_x) {
      return _handleSaveClicked.apply(this, arguments);
    }

    return handleSaveClicked;
  }(),
  breadcrumbItemClicked: function breadcrumbItemClicked(_ref8) {
    var payload = _ref8.payload;
    var breadcrumbsItems = payload.breadcrumbsItems,
        data = payload.data,
        operation = payload.operation,
        conditionsArray = payload.conditionsArray,
        tableFields = payload.tableFields;
    var itemIndex = breadcrumbsItems.findIndex(function (breadcrumb) {
      return breadcrumb.conditionId === data.conditionId;
    });
    var newState;

    switch (operation) {
      case "remove-next":
        breadcrumbsItems.splice(itemIndex, 1);
        newState = BUTTONS_EFFECTS.deleteCondition({
          payload: {
            tableFields: tableFields,
            conditionsArray: conditionsArray,
            currentConditionID: data.conditionId,
            globalConditionID: data.globalConditionId
          }
        });
        return _objectSpread(_objectSpread({}, newState), {}, {
          breadcrumbsItems: breadcrumbsItems
        });

      case "remove-subsequent":
        var deletedItems = itemIndex === 0 ? breadcrumbsItems.splice(1) : breadcrumbsItems.splice(itemIndex + 1);
        deletedItems.forEach(function (item) {
          return newState = BUTTONS_EFFECTS.deleteCondition({
            payload: {
              currentConditionID: item.conditionId,
              globalConditionID: item.globalConditionId,
              tableFields: tableFields,
              conditionsArray: conditionsArray
            }
          });
        });
        return _objectSpread(_objectSpread({}, newState), {}, {
          breadcrumbsItems: breadcrumbsItems
        });
    }
  },
  clickBtn: function clickBtn(_ref9) {
    var action = _ref9.action,
        payload = _ref9.payload;
    var newState;
    var _this$state = this.state,
        conditionsArray = _this$state.conditionsArray,
        blockFields = _this$state.blockFields,
        allowFields = _this$state.allowFields,
        tableFields = _this$state.tableFields,
        isFilterOpened = _this$state.isFilterOpened,
        isSave = _this$state.isSave,
        breadcrumbsItems = _this$state.breadcrumbsItems;
    var onSendQuery = this.props.onSendQuery;

    switch (action) {
      case "clearAll":
        newState = BUTTONS_EFFECTS.clearAll({
          payload: {
            blockFields: blockFields,
            allowFields: allowFields,
            tableFields: tableFields
          }
        });
        break;

      case "deleteCondition":
        newState = BUTTONS_EFFECTS.deleteCondition({
          payload: _objectSpread(_objectSpread({}, payload), {}, {
            conditionsArray: conditionsArray,
            blockFields: blockFields,
            allowFields: allowFields,
            tableFields: tableFields
          })
        });
        break;

      case "addNewOperator":
        newState = BUTTONS_EFFECTS.addNewOperator({
          payload: _objectSpread(_objectSpread({}, payload), {}, {
            tableFields: tableFields,
            conditionsArray: conditionsArray,
            blockFields: blockFields,
            allowFields: allowFields
          })
        });
        break;

      case "applyQuery":
        newState = BUTTONS_EFFECTS.applyQuery({
          payload: _objectSpread(_objectSpread({}, payload), {}, {
            conditionsArray: conditionsArray,
            isSave: isSave,
            onSendQuery: onSendQuery
          })
        });
        break;

      case "filterToogle":
        newState = BUTTONS_EFFECTS.toogleFilter({
          payload: {
            isFilterOpened: isFilterOpened
          }
        });
        break;

      case "toogleSave":
        newState = BUTTONS_EFFECTS.toogleSave({
          payload: _objectSpread(_objectSpread({}, payload), {}, {
            conditionsArray: conditionsArray,
            onSendQuery: onSendQuery
          })
        });
        break;

      case "save":
        break;

      case "breadcrumbs":
        newState = BUTTONS_EFFECTS.breadcrumbItemClicked({
          payload: _objectSpread(_objectSpread({}, payload), {}, {
            breadcrumbsItems: breadcrumbsItems,
            conditionsArray: conditionsArray,
            tableFields: tableFields
          })
        });
        break;
    }

    this.setState(newState);
  }
};
exports.BUTTONS_EFFECTS = BUTTONS_EFFECTS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL2VmZmVjdHMvX2J1dHRvbnNFZmZlY3RzLmpzIl0sIm5hbWVzIjpbIkJVVFRPTlNfRUZGRUNUUyIsImNsZWFyQWxsIiwicGF5bG9hZCIsInRhYmxlRmllbGRzIiwiYmxvY2tGaWVsZHMiLCJhbGxvd0ZpbGVkcyIsImZpZWxkc0RhdGFJRCIsIkdFTkVSQUxfVVRJTFMiLCJnZW5lcmF0ZUlEIiwiZmllbGRzRHJvcGRvd25EYXRhIiwiREFUQV9VVElMUyIsImdldERyb3Bkb3duRmllbGRzSXRlbXMiLCJjb2x1bW5zIiwiaW5kZXgiLCJjb25kaXRpb25zQXJyYXkiLCJpZCIsImNvbmRpdGlvbiIsIm9wZXJhdG9yIiwicmVsYXRlZENvbmRpdGlvbnMiLCJjb25kaXRpb25PcHRpb25zIiwiZWRpdGlvciIsImZpZWxkIiwidmFsdWUiLCJmaWVsZHNEYXRhIiwiaXRlbXMiLCJpc1NhdmUiLCJicmVhZGNydW1ic0l0ZW1zIiwibGFiZWwiLCJjb25kaXRpb25JZCIsInF1ZXJ5IiwiZGVsZXRlQ29uZGl0aW9uIiwiZ2xvYmFsQ29uZGl0aW9uSUQiLCJjdXJyZW50Q29uZGl0aW9uSUQiLCJnbG9iYWxDb25kaXRpb25JbmRleEluQXJyIiwiZmluZEluZGV4IiwiY29uZCIsImN1cnJlbnRDb25kaXRpb25JbmRleEluQXJyIiwicGF0aCIsIm5ld0NvbmRpdGlvbnNBcnJheSIsImluZGV4VG9EZWxldGUiLCJsZW5ndGgiLCJmb3JFYWNoIiwicGFyZW50Q29uZCIsInBJbmRleCIsImNoaWxkQ29uZCIsImNoSW5kZXgiLCJzcGxpY2UiLCJhcHBseVF1ZXJ5IiwidHlwZSIsIm9uU2VuZFF1ZXJ5IiwibmV3U3RhdGUiLCJjb3B5Q29uZGl0aW9uQXJyYXkiLCJjbG9uZSIsIm1hcCIsImdsb2JhbENvbmQiLCJmYWlsZWQiLCJRVUVSWV9VVElMUyIsImdlbmVyYXRlUXVlcnkiLCJvcGVyYXRpb24iLCJhZGROZXdPcGVyYXRvciIsImFsbG93RmllbGRzIiwicHVzaCIsInBhcnJlbnRDb25kaXRpb25PcHRpb25zIiwiYWN0aXZlRmllbGQiLCJhY3RpdmVGaWVsZHNEYXRhIiwiZmllbGRJdGVtcyIsIm9wZXJhdG9yc0FycmF5IiwidmFsdWVBZGRpdGlvbmFsRGF0YSIsInRvb2dsZUZpbHRlciIsImlzRmlsdGVyT3BlbmVkIiwidG9vZ2xlU2F2ZSIsImhhbmRsZVNhdmVDbGlja2VkIiwiYnJlYWRjcnVtYkl0ZW1DbGlja2VkIiwiZGF0YSIsIml0ZW1JbmRleCIsImJyZWFkY3J1bWIiLCJnbG9iYWxDb25kaXRpb25JZCIsImRlbGV0ZWRJdGVtcyIsIml0ZW0iLCJjbGlja0J0biIsImFjdGlvbiIsInN0YXRlIiwicHJvcHMiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxlQUFlLEdBQUc7QUFDM0JDLEVBQUFBLFFBQVEsRUFBRSx3QkFBc0I7QUFBQSxRQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFBQSxRQUNwQkMsV0FEb0IsR0FDc0JELE9BRHRCLENBQ3BCQyxXQURvQjtBQUFBLFFBQ1BDLFdBRE8sR0FDc0JGLE9BRHRCLENBQ1BFLFdBRE87QUFBQSxRQUNNQyxXQUROLEdBQ3NCSCxPQUR0QixDQUNNRyxXQUROOztBQUU1QixRQUFNQyxZQUFZLEdBQUdDLHFCQUFjQyxVQUFkLEVBQXJCOztBQUNBLFFBQU1DLGtCQUFrQixHQUFHQyxrQkFBV0Msc0JBQVgsQ0FBa0M7QUFBRVIsTUFBQUEsV0FBVyxFQUFFQSxXQUFXLENBQUNTLE9BQTNCO0FBQW9DQyxNQUFBQSxLQUFLLEVBQUVQLFlBQTNDO0FBQXlERixNQUFBQSxXQUFXLEVBQVhBLFdBQXpEO0FBQXNFQyxNQUFBQSxXQUFXLEVBQVhBO0FBQXRFLEtBQWxDLENBQTNCOztBQUVBLFdBQU87QUFDSFMsTUFBQUEsZUFBZSxFQUFFLENBQUM7QUFBRUMsUUFBQUEsRUFBRSxFQUFFUixxQkFBY0MsVUFBZCxFQUFOO0FBQWtDUSxRQUFB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QVgsU0FBN0IsQ0FBWDtBQUNBOztBQUNKLFdBQUssWUFBTDtBQUNJbkIsUUFBQUEsUUFBUSxHQUFHbEQsZUFBZSxDQUFDc0UsVUFBaEIsQ0FBMkI7QUFBRXBFLFVBQUFBLE9BQU8sa0NBQU9BLE9BQVA7QUFBZ0JZLFlBQUFBLGVBQWUsRUFBZkEsZUFBaEI7QUFBaUNtQyxZQUFBQSxXQUFXLEVBQVhBO0FBQWpDO0FBQVQsU0FBM0IsQ0FBWDtBQUNBOztBQUNKLFdBQUssTUFBTDtBQUNJOztBQUNKLFdBQUssYUFBTDtBQUNJQyxRQUFBQSxRQUFRLEdBQUdsRCxlQUFlLENBQUN3RSxxQkFBaEIsQ0FBc0M7QUFBRXRFLFVBQUFBLE9BQU8sa0NBQU9BLE9BQVA7QUFBZ0J3QixZQUFBQSxnQkFBZ0IsRUFBaEJBLGdCQUFoQjtBQUFrQ1osWUFBQUEsZUFBZSxFQUFmQSxlQUFsQztBQUFtRFgsWUFBQUEsV0FBVyxFQUFYQTtBQUFuRDtBQUFULFNBQXRDLENBQVg7QUFDQTtBQXZCUjs7QUF5QkEsU0FBS2dGLFFBQUwsQ0FBY2pDLFFBQWQ7QUFDSDtBQXRQMEIsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHRU5FUkFMX1VUSUxTLCBEQVRBX1VUSUxTLCBRVUVSWV9VVElMUyB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJVVFRPTlNfRUZGRUNUUyA9IHtcclxuICAgIGNsZWFyQWxsOiBmdW5jdGlvbih7IHBheWxvYWQgfSkge1xyXG4gICAgICAgIGNvbnN0IHsgdGFibGVGaWVsZHMsIGJsb2NrRmllbGRzLCBhbGxvd0ZpbGVkcyB9ID0gcGF5bG9hZDtcclxuICAgICAgICBjb25zdCBmaWVsZHNEYXRhSUQgPSBHRU5FUkFMX1VUSUxTLmdlbmVyYXRlSUQoKTtcclxuICAgICAgICBjb25zdCBmaWVsZHNEcm9wZG93bkRhdGEgPSBEQVRBX1VUSUxTLmdldERyb3Bkb3duRmllbGRzSXRlbXMoeyB0YWJsZUZpZWxkczogdGFibGVGaWVsZHMuY29sdW1ucywgaW5kZXg6IGZpZWxkc0RhdGFJRCwgYmxvY2tGaWVsZHMsIGFsbG93RmlsZWRzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb25kaXRpb25zQXJyYXk6IFt7IGlkOiBHRU5FUkFMX1VUSUxTLmdlbmVyYXRlSUQoKSwgY29uZGl0aW9uOiAnJywgb3BlcmF0b3I6ICcnLCByZWxhdGVkQ29uZGl0aW9uczogW3sgaWQ6IEdFTkVSQUxfVVRJTFMuZ2VuZXJhdGVJRCgpICsgMSwgY29uZGl0aW9uOiAnJywgb3BlcmF0b3I6ICcnLCBjb25kaXRpb25PcHRpb25zOiB7IG9wZXJhdG9yOiB7IG9wZXJhdG9yOiAnJywgZWRpdGlvcjogJycgfSwgZmllbGQ6ICcnLCB2YWx1ZTogJycsIGZpZWxkc0RhdGE6IHsgW2ZpZWxkc0RhdGFJRF06IHRhYmxlRmllbGRzLmNvbHVtbnMgfSwgZmllbGRzRHJvcGRvd25EYXRhOiBbeyBpdGVtczogZmllbGRzRHJvcGRvd25EYXRhIH1dIH0sIHJlbGF0ZWRDb25kaXRpb25zOiBbXSB9XSB9XSxcclxuICAgICAgICAgICAgaXNTYXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnNJdGVtczogW3sgbGFiZWw6ICdBbGwnLCBjb25kaXRpb25JZDogJ2FsbCcgfV0sXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBkZWxldGVDb25kaXRpb246IGZ1bmN0aW9uKHsgcGF5bG9hZCB9KSB7XHJcbiAgICAgICAgY29uc3QgeyBjb25kaXRpb25zQXJyYXksIGdsb2JhbENvbmRpdGlvbklELCBjdXJyZW50Q29uZGl0aW9uSUQsIHRhYmxlRmllbGRzIH0gPSBwYXlsb2FkO1xyXG4gICAgICAgIGNvbnN0IGdsb2JhbENvbmRpdGlvbkluZGV4SW5BcnIgPSBjb25kaXRpb25zQXJyYXkuZmluZEluZGV4KGNvbmQgPT4gY29uZC5pZCA9PT0gZ2xvYmFsQ29uZGl0aW9uSUQpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb25kaXRpb25JbmRleEluQXJyID0gY29uZGl0aW9uc0FycmF5W2dsb2JhbENvbmRpdGlvbkluZGV4SW5BcnJdLnJlbGF0ZWRDb25kaXRpb25zLmZpbmRJbmRleChjb25kID0+IGNvbmQuaWQgPT09IGN1cnJlbnRDb25kaXRpb25JRCk7XHJcbiAgICAgICAgbGV0IHBhdGggPSBbXTtcclxuICAgICAgICBsZXQgbmV3Q29uZGl0aW9uc0FycmF5O1xyXG4gICAgICAgIGxldCBpbmRleFRvRGVsZXRlO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudENvbmRpdGlvbkluZGV4SW5BcnIgPiAtMSkge1xyXG4gICAgICAgICAgICBwYXRoID0gY29uZGl0aW9uc0FycmF5W2dsb2JhbENvbmRpdGlvbkluZGV4SW5BcnJdLnJlbGF0ZWRDb25kaXRpb25zO1xyXG4gICAgICAgICAgICBpbmRleFRvRGVsZXRlID0gY3VycmVudENvbmRpdGlvbkluZGV4SW5BcnI7XHJcbiAgICAgICAgICAgIGlmIChjb25kaXRpb25zQXJyYXlbZ2xvYmFsQ29uZGl0aW9uSW5kZXhJbkFycl0ucmVsYXRlZENvbmRpdGlvbnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gY29uZGl0aW9uc0FycmF5O1xyXG4gICAgICAgICAgICAgICAgaW5kZXhUb0RlbGV0ZSA9IGdsb2JhbENvbmRpdGlvbkluZGV4SW5BcnI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudENvbmRpdGlvbkluZGV4SW5BcnIgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHBhdGhbMV0ub3BlcmF0b3IgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25zQXJyYXlbZ2xvYmFsQ29uZGl0aW9uSW5kZXhJbkFycl0ucmVsYXRlZENvbmRpdGlvbnNbMV0ub3BlcmF0b3IgPSBwYXRoWzFdLm9wZXJhdG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25kaXRpb25zQXJyYXlbZ2xvYmFsQ29uZGl0aW9uSW5kZXhJbkFycl0ucmVsYXRlZENvbmRpdGlvbnMuZm9yRWFjaCgocGFyZW50Q29uZCwgcEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25kLnJlbGF0ZWRDb25kaXRpb25zLmZvckVhY2goKGNoaWxkQ29uZCwgY2hJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZENvbmQuaWQgPT09IGN1cnJlbnRDb25kaXRpb25JRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gY29uZGl0aW9uc0FycmF5W2dsb2JhbENvbmRpdGlvbkluZGV4SW5BcnJdLnJlbGF0ZWRDb25kaXRpb25zW3BJbmRleF0ucmVsYXRlZENvbmRpdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4VG9EZWxldGUgPSBjaEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbnNBcnJheS5sZW5ndGggPT09IDEgJiYgcGF0aCA9PT0gY29uZGl0aW9uc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGxldCBmaWVsZHNEYXRhSUQgPSBHRU5FUkFMX1VUSUxTLmdlbmVyYXRlSUQoKTtcclxuICAgICAgICAgICAgbGV0IGZpZWxkc0Ryb3Bkb3duRGF0YSA9IERBVEFfVVRJTFMuZ2V0RHJvcGRvd25GaWVsZHNJdGVtcyh7IHRhYmxlRmllbGRzOiB0YWJsZUZpZWxkcy5jb2x1bW5zLCBpbmRleDogZmllbGRzRGF0YUlEIH0pO1xyXG5cclxuICAgICAgICAgICAgbmV3Q29uZGl0aW9uc0FycmF5ID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBHRU5FUkFMX1VUSUxTLmdlbmVyYXRlSUQoKSxcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICByZWxhdGVkQ29uZGl0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogR0VORVJBTF9VVElMUy5nZW5lcmF0ZUlEKCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogeyBvcGVyYXRvcjogJycsIGVkaXRpb3I6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNEYXRhOiB7IFtmaWVsZHNEYXRhSURdOiB0YWJsZUZpZWxkcy5jb2x1bW5zIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzRHJvcGRvd25EYXRhOiBbeyBpdGVtczogZmllbGRzRHJvcGRvd25EYXRhIH1dIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZENvbmRpdGlvbnM6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHJldHVybiB7IGNvbmRpdGlvbnNBcnJheTogbmV3Q29uZGl0aW9uc0FycmF5IH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGF0aC5zcGxpY2UoaW5kZXhUb0RlbGV0ZSwgMSlcclxuICAgICAgICAgICAgY29uZGl0aW9uc0FycmF5LnJlbGF0ZWRDb25kaXRpb25zID0gcGF0aDtcclxuICAgICAgICAgICAgbmV3Q29uZGl0aW9uc0FycmF5ID0gY29uZGl0aW9uc0FycmF5O1xyXG4gICAgICAgICAgICByZXR1cm4geyBjb25kaXRpb25zQXJyYXk6IG5ld0NvbmRpdGlvbnNBcnJheSB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhcHBseVF1ZXJ5OiBmdW5jdGlvbih7IHBheWxvYWQgfSkge1xyXG4gICAgICAgIGNvbnN0IHsgdHlwZSwgY29uZGl0aW9uc0FycmF5LCBvblNlbmRRdWVyeSwgaXNTYXZlIH0gPSBwYXlsb2FkO1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZTtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInJ1blwiOlxyXG4gICAgICAgICAgICBjYXNlIFwic2F2ZVwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IGNvcHlDb25kaXRpb25BcnJheSA9IEdFTkVSQUxfVVRJTFMuY2xvbmUoY29uZGl0aW9uc0FycmF5KTtcclxuICAgICAgICAgICAgICAgIGNvcHlDb25kaXRpb25BcnJheSA9IGNvcHlDb25kaXRpb25BcnJheS5tYXAoZ2xvYmFsQ29uZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxDb25kLnJlbGF0ZWRDb25kaXRpb25zLm1hcChwYXJlbnRDb25kID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb25kLmZhaWxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENvbmQucmVsYXRlZENvbmRpdGlvbnMubWFwKGNoaWxkQ29uZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZC5mYWlsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkQ29uZDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRDb25kO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBnbG9iYWxDb25kO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG5ld1N0YXRlID0gUVVFUllfVVRJTFMuZ2VuZXJhdGVRdWVyeSh7IHBheWxvYWQ6IHsgY29uZGl0aW9uc0FycmF5OiBjb3B5Q29uZGl0aW9uQXJyYXksIG9uU2VuZFF1ZXJ5LCBpc1NhdmUsIG9wZXJhdGlvbjogdHlwZSB9IH0pXHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLm5ld1N0YXRlLCBjb25kaXRpb25zQXJyYXk6IGNvcHlDb25kaXRpb25BcnJheSB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGROZXdPcGVyYXRvcjogZnVuY3Rpb24oeyBwYXlsb2FkIH0pIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheSxcclxuICAgICAgICAgICAgdGFibGVGaWVsZHMsXHJcbiAgICAgICAgICAgIGJsb2NrRmllbGRzLFxyXG4gICAgICAgICAgICBhbGxvd0ZpZWxkcyxcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGN1cnJlbnRDb25kaXRpb25JRCxcclxuICAgICAgICAgICAgZ2xvYmFsQ29uZGl0aW9uSURcclxuICAgICAgICB9ID0gcGF5bG9hZDtcclxuICAgICAgICBjb25zdCBnbG9iYWxDb25kaXRpb25JbmRleEluQXJyID0gY29uZGl0aW9uc0FycmF5LmZpbmRJbmRleChjb25kID0+IGNvbmQuaWQgPT09IGdsb2JhbENvbmRpdGlvbklEKVxyXG4gICAgICAgIGNvbnN0IGZpZWxkc0RhdGFJRCA9IEdFTkVSQUxfVVRJTFMuZ2VuZXJhdGVJRCgpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkc0Ryb3Bkb3duRGF0YSA9IERBVEFfVVRJTFMuZ2V0RHJvcGRvd25GaWVsZHNJdGVtcyh7IHRhYmxlRmllbGRzOiB0YWJsZUZpZWxkcy5jb2x1bW5zLCBpbmRleDogZmllbGRzRGF0YUlELCBibG9ja0ZpZWxkcywgYWxsb3dGaWVsZHMgfSk7XHJcbiAgICAgICAgc3dpdGNoKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJeXCI6XHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25zQXJyYXlbZ2xvYmFsQ29uZGl0aW9uSW5kZXhJbkFycl0ucmVsYXRlZENvbmRpdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IEdFTkVSQUxfVVRJTFMuZ2VuZXJhdGVJRCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IHsgb3BlcmF0b3I6ICcnLCBlZGl0aW9yOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzRGF0YToge1tmaWVsZHNEYXRhSURdOiB0YWJsZUZpZWxkcy5jb2x1bW5zIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc0Ryb3Bkb3duRGF0YTogW3sgaXRlbXM6IGZpZWxkc0Ryb3Bkb3duRGF0YSB9XVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlZENvbmRpdGlvbnM6IFtdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdeT1InOlxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDb25kaXRpb25JbmRleEluQXJyID0gY29uZGl0aW9uc0FycmF5W2dsb2JhbENvbmRpdGlvbkluZGV4SW5BcnJdLnJlbGF0ZWRDb25kaXRpb25zLmZpbmRJbmRleChjb25kID0+IGNvbmQuaWQgPT09IGN1cnJlbnRDb25kaXRpb25JRCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFycmVudENvbmRpdGlvbk9wdGlvbnMgPSBjb25kaXRpb25zQXJyYXlbZ2xvYmFsQ29uZGl0aW9uSW5kZXhJbkFycl0ucmVsYXRlZENvbmRpdGlvbnNbY3VycmVudENvbmRpdGlvbkluZGV4SW5BcnJdLmNvbmRpdGlvbk9wdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGFjdGl2ZUZpZWxkLCBhY3RpdmVGaWVsZHNEYXRhLCBmaWVsZCwgZmllbGRJdGVtcywgb3BlcmF0b3IsIG9wZXJhdG9yc0FycmF5LCBmaWVsZHNEYXRhLCB2YWx1ZUFkZGl0aW9uYWxEYXRhIH0gPSBwYXJyZW50Q29uZGl0aW9uT3B0aW9ucztcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheVtnbG9iYWxDb25kaXRpb25JbmRleEluQXJyXS5yZWxhdGVkQ29uZGl0aW9uc1tjdXJyZW50Q29uZGl0aW9uSW5kZXhJbkFycl0ucmVsYXRlZENvbmRpdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IEdFTkVSQUxfVVRJTFMuZ2VuZXJhdGVJRCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcnNBcnJheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlRmllbGRzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRJdGVtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzRHJvcGRvd25EYXRhOiBwYXJyZW50Q29uZGl0aW9uT3B0aW9ucy5maWVsZHNEcm9wZG93bkRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQWRkaXRpb25hbERhdGFcclxuICAgICAgICAgICAgICAgICAgICB9fSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdeTlEnOlxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uc0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBHRU5FUkFMX1VUSUxTLmdlbmVyYXRlSUQoKSxcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICByZWxhdGVkQ29uZGl0aW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IEdFTkVSQUxfVVRJTFMuZ2VuZXJhdGVJRCgpICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogeyBvcGVyYXRvcjogJycsIGVkaXRpb3I6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNEYXRhOiB7IFtmaWVsZHNEYXRhSURdOiB0YWJsZUZpZWxkcy5jb2x1bW5zIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNEcm9wZG93bkRhdGE6IFt7IGl0ZW1zOiBmaWVsZHNEcm9wZG93bkRhdGEgfV0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZWRDb25kaXRpb25zOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgY29uZGl0aW9uc0FycmF5IH1cclxuICAgIH0sXHJcbiAgICB0b29nbGVGaWx0ZXI6IGZ1bmN0aW9uKHsgcGF5bG9hZCB9KSB7XHJcbiAgICAgICAgY29uc3QgeyBpc0ZpbHRlck9wZW5lZCB9ID0gcGF5bG9hZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgaXNGaWx0ZXJPcGVuZWQ6ICFpc0ZpbHRlck9wZW5lZCB9O1xyXG4gICAgfSxcclxuICAgIHRvb2dsZVNhdmU6IGZ1bmN0aW9uICh7IHBheWxvYWQgfSkge1xyXG4gICAgICAgIGNvbnN0IHsgaXNTYXZlIH0gPSBwYXlsb2FkO1xyXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gQlVUVE9OU19FRkZFQ1RTLmFwcGx5UXVlcnkoeyBwYXlsb2FkOiB7IC4uLnBheWxvYWQsIHR5cGU6IFwic2F2ZVwiIH0gfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IC4uLm5ld1N0YXRlLCBpc1NhdmU6ICFpc1NhdmUgfTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVTYXZlQ2xpY2tlZDogYXN5bmMgZnVuY3Rpb24oeyBwYXlsb2FkIH0pIHtcclxuXHJcbiAgICB9LFxyXG4gICAgYnJlYWRjcnVtYkl0ZW1DbGlja2VkOiBmdW5jdGlvbih7IHBheWxvYWQgfSkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnNJdGVtcyxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgb3BlcmF0aW9uLFxyXG4gICAgICAgICAgICBjb25kaXRpb25zQXJyYXksXHJcbiAgICAgICAgICAgIHRhYmxlRmllbGRzXHJcbiAgICAgICAgfSA9IHBheWxvYWQ7XHJcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gYnJlYWRjcnVtYnNJdGVtcy5maW5kSW5kZXgoYnJlYWRjcnVtYiA9PiBicmVhZGNydW1iLmNvbmRpdGlvbklkID09PSBkYXRhLmNvbmRpdGlvbklkKTtcclxuICAgICAgICBsZXQgbmV3U3RhdGU7XHJcblxyXG4gICAgICAgIHN3aXRjaCAob3BlcmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZW1vdmUtbmV4dFwiOlxyXG4gICAgICAgICAgICAgICAgYnJlYWRjcnVtYnNJdGVtcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlID0gQlVUVE9OU19FRkZFQ1RTLmRlbGV0ZUNvbmRpdGlvbih7IHBheWxvYWQ6IHsgdGFibGVGaWVsZHMsIGNvbmRpdGlvbnNBcnJheSwgY3VycmVudENvbmRpdGlvbklEOiBkYXRhLmNvbmRpdGlvbklkLCBnbG9iYWxDb25kaXRpb25JRDogZGF0YS5nbG9iYWxDb25kaXRpb25JZCB9IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4ubmV3U3RhdGUsIGJyZWFkY3J1bWJzSXRlbXN9XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZW1vdmUtc3Vic2VxdWVudFwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IGRlbGV0ZWRJdGVtcyA9IChpdGVtSW5kZXggPT09IDApID8gYnJlYWRjcnVtYnNJdGVtcy5zcGxpY2UoMSkgOiBicmVhZGNydW1ic0l0ZW1zLnNwbGljZShpdGVtSW5kZXggKyAxKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gbmV3U3RhdGUgPSBCVVRUT05TX0VGRkVDVFMuZGVsZXRlQ29uZGl0aW9uKHtwYXlsb2FkOiB7IGN1cnJlbnRDb25kaXRpb25JRDogaXRlbS5jb25kaXRpb25JZCwgZ2xvYmFsQ29uZGl0aW9uSUQ6IGl0ZW0uZ2xvYmFsQ29uZGl0aW9uSWQsIHRhYmxlRmllbGRzLCBjb25kaXRpb25zQXJyYXkgfX0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5uZXdTdGF0ZSwgYnJlYWRjcnVtYnNJdGVtcyB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbGlja0J0bjogZnVuY3Rpb24oeyBhY3Rpb24sIHBheWxvYWQgfSkge1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheSxcclxuICAgICAgICAgICAgYmxvY2tGaWVsZHMsXHJcbiAgICAgICAgICAgIGFsbG93RmllbGRzLFxyXG4gICAgICAgICAgICB0YWJsZUZpZWxkcyxcclxuICAgICAgICAgICAgaXNGaWx0ZXJPcGVuZWQsXHJcbiAgICAgICAgICAgIGlzU2F2ZSxcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnNJdGVtc1xyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHsgb25TZW5kUXVlcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsZWFyQWxsXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZSA9IEJVVFRPTlNfRUZGRUNUUy5jbGVhckFsbCh7IHBheWxvYWQ6IHsgYmxvY2tGaWVsZHMsIGFsbG93RmllbGRzLCB0YWJsZUZpZWxkcyB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWxldGVDb25kaXRpb25cIjpcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlID0gQlVUVE9OU19FRkZFQ1RTLmRlbGV0ZUNvbmRpdGlvbih7IHBheWxvYWQ6IHsuLi5wYXlsb2FkLCBjb25kaXRpb25zQXJyYXksIGJsb2NrRmllbGRzLCBhbGxvd0ZpZWxkcywgdGFibGVGaWVsZHMgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRkTmV3T3BlcmF0b3JcIjpcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlID0gQlVUVE9OU19FRkZFQ1RTLmFkZE5ld09wZXJhdG9yKHsgcGF5bG9hZDogey4uLnBheWxvYWQsIHRhYmxlRmllbGRzLCBjb25kaXRpb25zQXJyYXksIGJsb2NrRmllbGRzLCBhbGxvd0ZpZWxkc30gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFwcGx5UXVlcnlcIjpcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlID0gQlVUVE9OU19FRkZFQ1RTLmFwcGx5UXVlcnkoeyBwYXlsb2FkOiB7IC4uLnBheWxvYWQsIGNvbmRpdGlvbnNBcnJheSwgaXNTYXZlLCBvblNlbmRRdWVyeSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmaWx0ZXJUb29nbGVcIjpcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlID0gQlVUVE9OU19FRkZFQ1RTLnRvb2dsZUZpbHRlcih7IHBheWxvYWQ6IHsgaXNGaWx0ZXJPcGVuZWQgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidG9vZ2xlU2F2ZVwiOlxyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUgPSBCVVRUT05TX0VGRkVDVFMudG9vZ2xlU2F2ZSh7IHBheWxvYWQ6IHsgLi4ucGF5bG9hZCwgY29uZGl0aW9uc0FycmF5LCBvblNlbmRRdWVyeSB9IH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNhdmVcIjpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnJlYWRjcnVtYnNcIjpcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlID0gQlVUVE9OU19FRkZFQ1RTLmJyZWFkY3J1bWJJdGVtQ2xpY2tlZCh7IHBheWxvYWQ6IHsgLi4ucGF5bG9hZCwgYnJlYWRjcnVtYnNJdGVtcywgY29uZGl0aW9uc0FycmF5LCB0YWJsZUZpZWxkcyB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xyXG4gICAgfVxyXG59Il19