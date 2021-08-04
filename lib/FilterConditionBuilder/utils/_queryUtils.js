Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.QUERY_UTILS = void 0;

const _index = require('./index');

function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _iterableToArray(iter) { if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) {
  let it = typeof Symbol !== 'undefined' && o[Symbol.iterator] || o['@@iterator']; if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === 'number') {
      if (it) o = it; let i = 0; const F = function F() {}; return {
        s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F,
      };
    } throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  } let normalCompletion = true; let didErr = false; let
    err; return {
    s: function s() { it = it.call(o); }, n: function n() { const step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } },
  };
}

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function _asyncIterator(iterable) { let method; if (typeof Symbol !== 'undefined') { if (Symbol.asyncIterator) method = iterable[Symbol.asyncIterator]; if (method == null && Symbol.iterator) method = iterable[Symbol.iterator]; } if (method == null) method = iterable['@@asyncIterator']; if (method == null) method = iterable['@@iterator']; if (method == null) throw new TypeError('Object is not async iterable'); return method.call(iterable); }

var QUERY_UTILS = {
  parseConditionValue: function parseConditionValue(_ref) {
    const { condition } = _ref;
    const { operators } = _ref;
    const { tableFields } = _ref;
    const { globalID } = _ref;
    const { currentID } = _ref;

    let operator = _index.GENERAL_UTILS.findOperator(condition, operators);

    let field = '';
    let value = '';
    let editor = '';
    let valueAdditionalData = [];
    let fieldItems = [];
    let fieldsDropdownData = [];

    const fieldsDataID = _index.GENERAL_UTILS.generateID();

    if (!operator) {
      field = condition;
      operator = '';
    } else {
      field = condition.slice(0, condition.indexOf(operator));
      value = condition.slice(field.length + operator.length);
      editor = tableFields[field].operators.find((op) => op.operator === operator).advancedEditor;
      valueAdditionalData = _index.DATA_UTILS.getValueAdditionalData({
        tableFields,
        editor,
        field,
        globalID,
        currentID,
      });
      value = _index.DATA_UTILS.getValue({
        value,
        editor,
      });
    }

    const fields = field.split('.');
    fieldsDropdownData = _index.DATA_UTILS.getDropdownFieldsItems({
      tableFields,
      index: fieldsDataID,
    });
    fieldItems = fields.map((fieldName) => _objectSpread(_objectSpread({}, fieldsDropdownData.find((data) => data.id === fieldName)), {}, {
      listIndex: 0,
      dropdownClick: false,
    }));
    fieldItems = {
      label: tableFields[field].label,
      value: field,
      items: fieldItems,
    };
    const operatorsArray = tableFields[field].operators.map((operation) => ({
      id: operation.operator,
      label: operation.label,
      dropdown: 'operation',
    }));

    if (editor === 'trend_field') {
      valueAdditionalData = _index.DATA_UTILS.getTrendData(value['1']);
    }

    return {
      field,
      operator: {
        operator,
        editor,
      },
      value,
      operatorsArray,
      valueAdditionalData,
      fieldItems,
      fieldsData: _defineProperty({}, fieldsDataID, tableFields),
      fieldsDropdownData: [{
        items: fieldsDropdownData,
      }],
      activeFieldsData: tableFields,
      activeField: fieldItems.items[fieldItems.items.length - 1].id,
    };
  },
  parseConditionValueWithRef: (function () {
    const _parseConditionValueWithRef = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee2(_ref2) {
      let condition; let operators; let tableFields; let globalID; let currentID; let operator; let lastTableFields; let field; let value; let editor; let valueAdditionalData; let fieldItems; let fieldsDropdownData; let fieldsDataID; let referenceField; let fields; let isReferenceField; let _iteratorNormalCompletion; let _didIteratorError; let _iteratorError; let _iterator; let _step; let _value; let
        _ret;

      return regeneratorRuntime.wrap((_context3) => {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              condition = _ref2.condition, operators = _ref2.operators, tableFields = _ref2.tableFields, globalID = _ref2.globalID, currentID = _ref2.currentID;
              operator = _index.GENERAL_UTILS.findOperator(condition, operators);
              field = '', value = '', editor = '', valueAdditionalData = [], fieldItems = [], fieldsDropdownData = [];
              fieldsDataID = _index.GENERAL_UTILS.generateID();
              referenceField = condition.slice(0, condition.indexOf(operator)).split('.');
              fields = _index.GENERAL_UTILS.clone(referenceField);
              isReferenceField = referenceField.length > 1;

              if (!isReferenceField) {
                _context3.next = 12;
                break;
              }

              return _context3.delegateYield(/* #__PURE__ */regeneratorRuntime.mark(function _callee() {
                let dropdownFields; let fieldsData; let nextData; let queryParams; let lastField; let allFields; let i; let _loop; let dataForFieldItems; let _iterator2; let _step2; let key; let
                  operatorsArray;

                return regeneratorRuntime.wrap((_context2) => {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        dropdownFields = [{
                          items: _index.DATA_UTILS.getDropdownFieldsItems({
                            tableFields,
                            index: fieldsDataID,
                            listIndex: 0,
                          }),
                        }];
                        fieldsData = _defineProperty({}, fieldsDataID, tableFields);
                        nextData = tableFields[referenceField[0]];
                        referenceField = referenceField.reverse();
                        referenceField.pop();
                        referenceField = referenceField.reverse();
                        queryParams = {
                          sysparm_operators: true,
                          sysparm_get_extended_tables: true,
                          sysparm_keywords: true,
                        };
                        lastField = '';
                        allFields = condition.slice(0, condition.indexOf(operator));
                        value = condition.slice(allFields.length + operator.length);
                        i = 1;
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _context2.prev = 13;
                        _loop = /* #__PURE__ */regeneratorRuntime.mark(function _loop() {
                          let key;
                          return regeneratorRuntime.wrap((_context) => {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  key = _value;
                                  fieldsDataID = _index.GENERAL_UTILS.generateID();
                                  _context.next = 4;
                                  return _index.REQUEST_UTILS.fetchTableData({
                                    table: nextData.reference,
                                    queryParams,
                                  }).then((res) => {
                                    fieldsData = _objectSpread(_objectSpread({}, fieldsData), {}, _defineProperty({}, fieldsDataID, res.columns));
                                    nextData = res.columns[key];
                                    lastTableFields = res.columns;
                                    dropdownFields.push({
                                      items: _index.DATA_UTILS.getDropdownFieldsItems({
                                        tableFields: Object.values(res.columns),
                                        index: fieldsDataID,
                                        listIndex: i,
                                      }),
                                    });
                                    i++;
                                  });

                                case 4:
                                case 'end':
                                  return _context.stop();
                              }
                            }
                          }, _loop);
                        });
                        _iterator = _asyncIterator(referenceField);

                      case 16:
                        _context2.next = 18;
                        return _iterator.next();

                      case 18:
                        _step = _context2.sent;
                        _iteratorNormalCompletion = _step.done;
                        _context2.next = 22;
                        return _step.value;

                      case 22:
                        _value = _context2.sent;

                        if (_iteratorNormalCompletion) {
                          _context2.next = 28;
                          break;
                        }

                        return _context2.delegateYield(_loop(), 't0', 25);

                      case 25:
                        _iteratorNormalCompletion = true;
                        _context2.next = 16;
                        break;

                      case 28:
                        _context2.next = 34;
                        break;

                      case 30:
                        _context2.prev = 30;
                        _context2.t1 = _context2.catch(13);
                        _didIteratorError = true;
                        _iteratorError = _context2.t1;

                      case 34:
                        _context2.prev = 34;
                        _context2.prev = 35;

                        if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
                          _context2.next = 39;
                          break;
                        }

                        _context2.next = 39;
                        return _iterator.return();

                      case 39:
                        _context2.prev = 39;

                        if (!_didIteratorError) {
                          _context2.next = 42;
                          break;
                        }

                        throw _iteratorError;

                      case 42:
                        return _context2.finish(39);

                      case 43:
                        return _context2.finish(34);

                      case 44:
                        fieldsDropdownData = dropdownFields;
                        dataForFieldItems = fieldsDropdownData.map((field) => field.items);
                        i = 0;
                        _iterator2 = _createForOfIteratorHelper(dataForFieldItems);

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            key = _step2.value;
                            fieldItems = [].concat(_toConsumableArray(fieldItems), [_objectSpread(_objectSpread({}, key.find((data) => fields[i] === data.id)), {}, {
                              dropdownClicked: i < dataForFieldItems.length - 1,
                            })]);
                            i++;
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }

                        field = fieldItems.map((field) => field.id).join('.');
                        lastField = field.split('.');
                        lastField = lastField[lastField.length - 1];
                        editor = lastTableFields[lastField].operators.find((op) => op.operator === operator).advancedEditor;
                        operatorsArray = lastTableFields[lastField].operators.map((operation) => ({
                          id: operation.operator,
                          label: operation.label,
                          dropdown: 'operation',
                        }));
                        value = _index.DATA_UTILS.getValue({
                          value,
                          editor,
                        });
                        fieldItems = {
                          label: fieldItems.map((field) => field.label).join(' . '),
                          value: fieldItems.map((field) => field.id).join('.'),
                          items: fieldItems,
                        };
                        valueAdditionalData = editor === 'trend_field' ? _index.DATA_UTILS.getTrendData(value['1']) : _index.DATA_UTILS.getValueAdditionalData({
                          tableFields: lastTableFields,
                          editor,
                          field: lastField,
                          globalID,
                          currentID,
                        });
                        return _context2.abrupt('return', {
                          v: {
                            field,
                            operator: {
                              operator,
                              editor,
                            },
                            value,
                            operatorsArray,
                            valueAdditionalData,
                            fieldItems,
                            fieldsData,
                            fieldsDropdownData,
                            activeFieldsData: lastTableFields,
                            activeField: fieldItems.items[fieldItems.items.length - 1].id,
                          },
                        });

                      case 58:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee, null, [[13, 30, 34, 44], [35,, 39, 43]]);
              })(), 't0', 9);

            case 9:
              _ret = _context3.t0;

              if (!(_typeof(_ret) === 'object')) {
                _context3.next = 12;
                break;
              }

              return _context3.abrupt('return', _ret.v);

            case 12:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee2);
    }));

    function parseConditionValueWithRef(_x) {
      return _parseConditionValueWithRef.apply(this, arguments);
    }

    return parseConditionValueWithRef;
  }()),
  generateCurrentConditionQuery: function generateCurrentConditionQuery(_ref3) {
    const { payload } = _ref3;
    const { conditionData } = payload;
    const { operation } = payload;
    const { breadcrumbItem } = payload;
    const _conditionData$condit = conditionData.conditionOptions;
    const { field } = _conditionData$condit;
    const _conditionData$condit2 = _conditionData$condit.operator;
    const { operator } = _conditionData$condit2;
    const { editor } = _conditionData$condit2;
    const { value } = _conditionData$condit;
    const { fieldItems } = _conditionData$condit;
    const { operatorsArray } = _conditionData$condit;
    const { valueAdditionalData } = _conditionData$condit;
    let conditionQuery = '';

    if (field && operator && operation === 'run') {
      let valueLabel;

      switch (editor) {
        case 'between_field':
          conditionQuery = value['0'] && value['1'] ? ''.concat(field).concat(operator, "javascript:gs.dateGenerate('").concat(value['0'], "','00:00:00')@javascript:gs.dateGenerate('").concat(value['1'], "','23:59:59')") : '';
          conditionQuery ? valueLabel = ''.concat(value['0'], ' and ').concat(value['1']) : '';
          break;

        case 'relative_field':
          var currentOperator = value['0'] === 'before' ? 'RELATIVELT' : 'RELATIVEGT';
          value['1'] = value['1'] || '0';
          conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? ''.concat(field).concat(currentOperator, '@').concat(value['2'], '@').concat(value['3'], '@')
            .concat(value['1']) : '';
          conditionQuery ? valueLabel = ''.concat(value['0'], ' ').concat(value['1'], ' ').concat(value['2'], ' ').concat(value['3']) : '';
          break;

        case 'glide_duration':
          conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? ''.concat(field).concat(operator, "javascript:gs.getDurationDate('").concat(value['0'], ' ').concat(value['1'], ':')
            .concat(value['2'], ':')
            .concat(value['3'], "')") : '';
          conditionQuery ? valueLabel = ''.concat(value['0'], ' ').concat(value['1'], ':').concat(value['2'], ':').concat(value['3']) : '';
          break;

        case 'glide_date_choice':
          conditionQuery = value ? ''.concat(field).concat(operator).concat(value, "@javascript:gs.dateGenerate('").concat(value, "','start')@javascript:gs.dateGenerate('")
            .concat(value, "','end')") : '';
          conditionQuery ? valueLabel = value : '';
          break;

        case 'trend_field':
          conditionQuery = value['0'] && value['1'] && value['2'].label && value['2'].id ? ''.concat(field).concat(operator).concat(value['2'].label, "@javascript:gs.datePart('").concat(value['1'], "','")
            .concat(value['2'].id, "','")
            .concat(value['0'], "')") : '';
          conditionQuery ? valueLabel = "@javascript:gs.datePart('".concat(value['1'], "','").concat(value['2'].id, "','").concat(value['0'], "')") : '';
          break;

        case 'glide_date_equivalent':
          conditionQuery = value['0'] && value['1'] ? ''.concat(field).concat(operator).concat(value['1'], '@').concat(value['0']) : '';
          conditionQuery ? valueLabel = ''.concat(value['1'], ' ').concat(value['0']) : '';
          break;

        case 'glide_date_comparative':
          conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? ''.concat(field).concat(operator).concat(value['3'], '@').concat(value['1'], '@')
            .concat(value['2'], '@')
            .concat(value['0']) : '';
          conditionQuery ? valueLabel = ''.concat(value['0'], ' ').concat(value['1'], ' ').concat(value['2'], ' ').concat(value['3']) : '';
          break;

        case 'none':
          conditionQuery = ''.concat(field).concat(operator);
          valueLabel = '';
          break;

        default:
          var str = value.trim().split(' ').filter(Boolean).join(' ');
          conditionQuery = str ? ''.concat(field).concat(operator).concat(str) : '';
          conditionQuery ? valueLabel = str : '';
      }

      if (conditionQuery) {
        const conditionOperatorLabel = editor === 'none' || !operator.match(/\W/) ? operatorsArray.find((op) => op.id === operator).label : operator;

        if (fieldItems.items[fieldItems.items.length - 1].reference === 'true' && valueAdditionalData.length) {
          valueLabel = valueAdditionalData.find((val) => val.id === valueLabel).label;
        }

        breadcrumbItem.label = ''.concat(breadcrumbItem.label).concat(conditionData.operator === '^OR' ? ' .or. ' : '', ' ').concat(fieldItems.label, ' ').concat(conditionOperatorLabel, ' ')
          .concat(valueLabel);
      }
    } else if (field && operation === 'save') {
      switch (editor) {
        case 'between_field':
          conditionQuery = value['0'] && value['1'] ? ''.concat(field).concat(operator, "javascript:gs.dateGenerate('").concat(value['0'], "','00:00:00')@javascript:gs.dateGenerate('").concat(value['1'], "','23:59:59')") : '';
          break;

        case 'relative_field':
          var _currentOperator = value['0'] === 'before' ? 'RELATIVELT' : 'RELATIVEGT';

          value['1'] = value['1'] || '0';
          conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? ''.concat(field).concat(_currentOperator, '@').concat(value['2'], '@').concat(value['3'], '@')
            .concat(value['1']) : '';
          break;

        case 'glide_duration':
          conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? ''.concat(field).concat(operator, "javascript:gs.getDurationDate('").concat(value['0'], ' ').concat(value['1'], ':')
            .concat(value['2'], ':')
            .concat(value['3'], "')") : '';
          break;

        case 'glide_date_choice':
          conditionQuery = value ? ''.concat(field).concat(operator).concat(value, "@javascript:gs.dateGenerate('").concat(value, "','start')@javascript:gs.dateGenerate('")
            .concat(value, "','end')") : '';
          break;

        case 'trend_field':
          conditionQuery = value['0'] && value['1'] && value['2'].label && value['2'].id ? ''.concat(field).concat(operator).concat(value['2'].label, "@javascript:gs.datePart('").concat(value['1'], "','")
            .concat(value['2'].id, "','")
            .concat(value['0'], "')") : '';
          break;

        case 'glide_date_equivalent':
          conditionQuery = value['0'] && value['1'] ? ''.concat(field).concat(operator).concat(value['1'], '@').concat(value['0']) : '';
          break;

        case 'glide_date_comparative':
          conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? ''.concat(field).concat(operator).concat(value['3'], '@').concat(value['1'], '@')
            .concat(value['2'], '@')
            .concat(value['0']) : '';
          break;

        case 'none':
          conditionQuery = ''.concat(field).concat(operator);
          break;

        default:
          conditionQuery = ''.concat(field).concat(operator).concat(value);
      }

      conditionQuery = conditionQuery || ''.concat(field).concat(operator);
    }

    return {
      conditionQuery: conditionQuery || false,
      breadcrumbItem,
    };
  },
  generateQuery: function generateQuery(_ref4) {
    const { payload } = _ref4;
    const { conditionsArray } = payload;
    const { isSave } = payload;
    const { onSendQuery } = payload;
    const { operation } = payload;
    let valueToReturn;
    let resultQuery = '';
    let error = false;
    const breadcrumbsItems = [{
      label: 'All',
      conditionId: 'all',
    }];
    let isNQ = false;
    conditionsArray.forEach((globalCond) => {
      globalCond.relatedConditions.forEach((parentCond, index) => {
        let breadcrumbItem = {
          label: ''.concat(globalCond.operator && index === 0 ? 'or' : ''),
          conditionId: parentCond.id,
          globalConditionId: globalCond.id,
        };
        const generatedCondition = QUERY_UTILS.generateCurrentConditionQuery({
          payload: {
            conditionData: parentCond,
            operation,
            breadcrumbItem,
          },
        });
        isNQ = generatedCondition.conditionQuery;

        if (isNQ && index < 1) {
          resultQuery += globalCond.operator;
          isNQ = false;
        }

        const curCondition = generatedCondition.conditionQuery;

        if (curCondition) {
          breadcrumbItem = generatedCondition.breadcrumbItem;
          resultQuery += ''.concat(parentCond.operator).concat(curCondition);
        } else if (operation === 'run' && !curCondition && !parentCond.conditionOptions.field && conditionsArray.length === 1 && globalCond.relatedConditions.length === 1 && !parentCond.relatedConditions.length) {
          resultQuery = '';
        } else {
          error = true;
        }

        parentCond.relatedConditions.forEach((childCond) => {
          const generatedCondition = QUERY_UTILS.generateCurrentConditionQuery({
            payload: {
              conditionData: childCond,
              operation,
              breadcrumbItem,
            },
          });
          const curCondition = generatedCondition.conditionQuery;

          if (curCondition) {
            breadcrumbItem = generatedCondition.breadcrumbItem;
            resultQuery += ''.concat(childCond.operator).concat(curCondition);
          } else {
            error = true;
          }
        });

        if (generatedCondition.conditionQuery) {
          breadcrumbItem.label = breadcrumbItem.label.trim();
          breadcrumbsItems.push(breadcrumbItem);
        }
      }); // if (error) return null;

      onSendQuery(resultQuery);

      switch (operation) {
        case 'run':
          var isBreadcrumbFalse = !!breadcrumbsItems.find((item) => !item.label);
          if (!isBreadcrumbFalse) {
            valueToReturn = {
              breadcrumbsItems,
            };
          }
          break;

        case 'save':
          valueToReturn = {
            queryToSave: resultQuery,
            isSave: !isSave,
          };
          break;
      }
    });
    return valueToReturn;
  },
};
exports.QUERY_UTILS = QUERY_UTILS;
