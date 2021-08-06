function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _propTypes = _interopRequireDefault(require('prop-types'));

const React = _interopRequireWildcard(require('react'));

const _ExpandDropdown = _interopRequireDefault(require('../ExpandDropdown/ExpandDropdown'));

const _Dropdown = _interopRequireDefault(require('../../../Dropdown/Dropdown'));

const _jsxRuntime = require('react/jsx-runtime');
const _utils = require('../../utils');

const _inputValue = require('./_inputValue');

const _index = require('../../../index');

const _utils2 = require('../../../utils');

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else { obj[key] = value; } return obj;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  const hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() {
    const Super = _getPrototypeOf(Derived); let
      result; if (hasNativeReflectConstruct) { const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

const FilterConditionItem = /* #__PURE__ */(function (_React$Component) {
  _inherits(FilterConditionItem, _React$Component);

  const _super = _createSuper(FilterConditionItem);

  function FilterConditionItem(props) {
    let _this;

    _classCallCheck(this, FilterConditionItem);

    _this = _super.call(this, props);

    _this.operatorsActivation = function () {
      const _this$props = _this.props;
      const { conditionOptions } = _this$props.conditionObj;
      const { conditionsArray } = _this$props;
      const { column_type } = _this.state.activeField;
      if (column_type === 'tag') return;

      _this.setState({
        dropdownFields: {
          field: true,
          operation: true,
          value: false,
        },
      });

      if (conditionOptions.operator) {
        _this.valueInputActivation();
      }
    };

    _this.prepareTextAreaValue = function (_ref) {
      const { value } = _ref;
      const { setConditionOptions } = _this.props;
      let string = value.trim().split(' ').filter(Boolean).join(' ');
      string = string.match('\n') ? string.split(/\n|\s/).filter(Boolean).join(',') : string;
      setConditionOptions({
        value: string,
        conditionOption: 'value',
      });
    };

    _this.textAreaValueSet = function (_ref2) {
      const { value } = _ref2;

      _this.setState({
        textAreaValue: value,
      }, () => _this.prepareTextAreaValue({
        value: _this.state.textAreaValue,
      }));
    };

    _this.lookupFieldValueSet = function (_ref3) {
      const { name } = _ref3;
      const { sys_id } = _ref3;
      const { displayVal } = _ref3;
      const { setConditionOptions } = _this.props;

      _this.setState({
        refFieldValue: {
          name,
          sys_id,
          displayVal,
        },
      });

      setConditionOptions({
        value: sys_id,
        conditionOption: 'value',
      });
    };

    _this.itemClicked = function (item) {
      const { activeField } = _this.state;
      const { setConditionOptions } = _this.props;

      if (item.dropdown === 'operation') {
        const activeOperator = activeField.operators.find((_ref4) => {
          const { operator } = _ref4;
          return operator === item.id;
        });

        _this.valueInputDeactivation();

        setConditionOptions({
          value: {
            operator: item.id,
            editor: activeOperator.advancedEditor,
          },
          conditionOption: 'operator',
        });
      }

      if (item.dropdown === 'value') {
        const { conditionOptions } = _this.props.conditionObj;
        let valueForContainer;

        switch (conditionOptions.operator.editor) {
          case 'relative_field':
          case 'glide_date_equivalent':
          case 'glide_date_comparative':
            valueForContainer = {
              value: item.id,
              index: item.index,
            };
            break;

          case 'trend_field':
            if (item.index == 2) {
              valueForContainer = {
                value: {
                  id: item.id,
                  label: item.label,
                },
                index: item.index,
              };
            } else {
              valueForContainer = {
                value: item.id,
                index: item.index,
              };
            }
            break;

          default:
            valueForContainer = item.id;
        }

        setConditionOptions({
          value: valueForContainer,
          conditionOption: 'value',
        });
      }
    };

    _this.onDatePickerChange = function (_ref5) {
      const { value } = _ref5;
      const { type } = _ref5;
      const { conditionOptions } = _ref5;
      const { index } = _ref5;
      const { setConditionOptions } = _this.props;
      const { newValue } = value;
      let valueForContainer;

      switch (type) {
        case 'between_field':
        case 'relative-field':
        case 'glide_duration':
        case 'glide_date_comparative':
          valueForContainer = {
            value: newValue,
            index,
          };
          break;

        default:
          valueForContainer = newValue;
      }

      setConditionOptions({
        value: valueForContainer,
        conditionOptions,
        conditionOption: 'value',
      });
    };

    _this.valueInputActivation = function () {
      _this.setState({
        dropdownsIsActive: {
          field: true,
          operation: true,
          value: true,
        },
      });
    };

    _this.valueInputDeactivation = function () {
      _this.setState({
        dropdownsIsActive: {
          field: true,
          operation: true,
          value: false,
        },
      }, () => _this.valueInputActivation());
    };

    _this.fetchTableData = function () {
      const { conditionObj } = _this.props;
      const _conditionObj$conditi = conditionObj.conditionOptions;
      const { activeFieldsData } = _conditionObj$conditi;
      const { activeField } = _conditionObj$conditi;

      if (activeFieldsData) {
        const activeFieldFromObj = activeFieldsData[activeField] || [''];

        _this.setState({
          activeField: activeFieldFromObj,
        }, () => {
          if (activeField) {
            _this.operatorsActivation();
          }
        });
      }
    };

    _this.resetSelectedItem = function () {
      _this.setState({
        selectedItem: {
          items: _this.props.conditionObj.selectedItem.items,
        },
      });
    };

    _this.operatorsDeactivation = function () {
      _this.setState({
        dropdownsIsActive: {
          field: true,
          operation: false,
          value: false,
        },
      });
    };

    _this.onItemClicked = function (item) {
      const { clickedItem } = item;
      const _this$props2 = _this.props;
      const { setConditionOptions } = _this$props2;
      const { conditionID } = _this$props2;
      const { globalConditionID } = _this$props2;
      const _this$state = _this.state;
      const { selectedItem } = _this$state;
      const { refFieldValue } = _this$state;
      const queryParams = {
        sysparm_operators: true,
        sysparm_get_extended_tables: true,
        sysparm_keywords: true,
      };
      let items = {};
      const itemsArr = [];
      itemsArr.push(clickedItem);
      items = {
        conditionId: conditionID,
        globalConditionID,
        listIndex: clickedItem.listIndex,
        selectedItems: {
          items: selectedItem.items,
          label: selectedItem.items.map((item) => item.label).join(' . '),
          value: selectedItem.items.map((item) => item.id).join('.'),
        },
        firstOperator: clickedItem.firstOperator,
      };
      clickedItem.dropdownClicked ? _utils.REQUEST_UTILS.fetchTableData({
        table: clickedItem.table,
        queryParams,
      }).then((res) => {
        _this.operatorsDeactivation();

        items = _objectSpread(_objectSpread({}, items), {}, {
          result: res.columns,
        });
        setConditionOptions({
          value: items,
          globalConditionID,
          currentConditionID: conditionID,
          conditionOption: 'fieldsData',
        });
      }) : _utils2.noop;

      if (!clickedItem.dropdownClicked) {
        _this.operatorsActivation();

        setConditionOptions({
          value: items.selectedItems,
          globalConditionID,
          currentConditionID: conditionID,
          conditionOption: 'field',
        });
      }

      _this.setState({
        refFieldValue: _objectSpread(_objectSpread({}, refFieldValue), {}, {
          displayVal: null,
        }),
      });
    };

    _this.updateSelectedItem = function (_ref6) {
      const { item } = _ref6;
      const { command } = _ref6;
      const { listIndex } = _ref6;
      const { items } = _this.state.selectedItem;
      let newState;

      switch (command) {
        case 'push':
          items.push(item);
          newState = {
            selectedItem: {
              items,
            },
          };
          break;

        case 'rewrite':
          newState = {
            selectedItem: {
              items: [item],
            },
          };
          break;

        case 'same_list_index':
          items.splice(listIndex, items.length);
          items.push(item);
          newState = {
            selectedItem: {
              items,
            },
          };
          break;
      }

      _this.setState(newState);
    };

    _this.inputValueSet = function (_ref7) {
      const { value } = _ref7;
      const { type } = _ref7;
      const { index } = _ref7;
      const { setConditionOptions } = _this.props;
      const inputValue = value;
      let valueForContainer;

      switch (type) {
        case 'between_field':
        case 'relative-field':
        case 'glide_duration':
        case 'glide_date_comparative':
          valueForContainer = {
            inputValue,
            index,
          };
          break;

        default:
          valueForContainer = inputValue;
      }

      setConditionOptions({
        value: valueForContainer,
        conditionOption: 'value',
      });
    };

    _this.itemDropdownHandle = function () {
      const { conditionOptions } = _this.props.conditionObj;
      let valueForContainer;

      switch (conditionOptions.operator.editor) {
        case 'relative_field':
        case 'glide_date_equivalent':
        case 'glide_date_comparative':
          valueForContainer = {
            value: item.id,
            index: item.index,
          };
          break;

        case 'trend_field':
          if (item.index == 2) {
            valueForContainer = {
              value: {
                id: item.id,
                label: item.label,
              },
              index: item.index,
            };
          } else {
            valueForContainer = {
              value: item.id,
              index: item.index,
            };
          }

          break;

        default:
          valueForContainer = item.id;
      }
    };

    _this.state = {
      activeField: '',
      dropdownsIsActive: {
        field: true,
        operation: false,
        value: false,
      },
      selectedItem: {
        items: [],
      },
      dropdownFields: [],
      operators: [],
      textAreaValue: '',
      generalTable: _this.props.generalTable,
      refFieldValue: {
        name: _this.props.conditionObj.conditionOptions.operator.editor === 'reference' ? _this.props.conditionObj.conditionOptions.activeField : null,
        sys_id: _this.props.conditionObj.conditionOptions.operator.editor === 'reference' ? _this.props.conditionObj.conditionOptions.value : null,
        displayVal: null,
        table: _this.props.conditionObj.conditionOptions.operator.editor === 'reference' ? _this.props.conditionObj.conditionOptions.fieldItems.items[_this.props.conditionObj.conditionOptions.fieldItems.items.length - 1].table : null,
      },
      conditionsArray: _this.props.conditionsArray,
      conditionObj: _this.props.conditionsArray,
    };
    return _this;
  }

  _createClass(FilterConditionItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      const _this2 = this;

      this.fetchTableData();
      const { refFieldValue } = this.state;
      const queryParams = {
        sysparm_query: 'sys_id='.concat(refFieldValue.sys_id),
      };

      if (!!refFieldValue.name && !!refFieldValue.sys_id) {
        _utils.REQUEST_UTILS.fetchReferenceData({
          table: refFieldValue.table,
          queryParams,
        }).then((res) => {
          _this2.setState({
            refFieldValue: _objectSpread(_objectSpread({}, refFieldValue), {}, {
              displayVal: res[0].name,
            }),
          });
        });
      }
    },
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) this.fetchTableData();
    },
  }, {
    key: 'render',
    value: function render() {
      const _this3 = this;

      const _this$props3 = this.props;
      const { operatorType } = _this$props3;
      const { conditionObj } = _this$props3;
      const { getConditionsIDs } = _this$props3;
      const { conditionID } = _this$props3;
      const { globalConditionID } = _this$props3;
      const { clickBtn } = _this$props3;
      const { conditionsArray } = _this$props3;
      const inputValuePayload = {
        state: this.state,
        conditionOptions: conditionObj.conditionOptions,
        itemClicked: this.itemClicked,
        onDatePickerChange: this.onDatePickerChange,
        inputValueSet: this.inputValueSet,
        textAreaValueSet: this.textAreaValueSet,
        lookupFieldValueSet: this.lookupFieldValueSet,
      };
      const { dropdownsIsActive } = this.state;
      const isBtnsRender = !!conditionObj.conditionOptions.value || conditionObj.conditionOptions.operator.editor === 'none';
      return /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
        className: 'condition-wrapper',
        onClick: function onClick() {
          return getConditionsIDs({
            currentConditionID: conditionID,
            globalConditionID,
          });
        },
        children: [operatorType === '^OR' ? /* #__PURE__ */(0, _jsxRuntime.jsx)('span', {
          className: 'condition-operator',
          children: 'OR',
        }) : '', /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
          className: 'dropdown-container',
          children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_ExpandDropdown.default, {
            expandIcon: 'arrow-right-circle',
            selectedItem: this.props.selectedItem,
            selectedItems: conditionObj.conditionOptions.fieldItems ? conditionObj.conditionOptions.fieldItems.items : [],
            updateSelectedItem: this.updateSelectedItem,
            onItemSelected: function onItemSelected(item) {
              return _this3.onItemClicked(item);
            },
            placeholder: '--choose field--',
            lists: conditionObj.conditionOptions.fieldsDropdownData,
          }),
        }), /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
          className: 'dropdown-container',
          children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_Dropdown.default, {
            items: conditionObj.conditionOptions.operatorsArray,
            selectedItems: [conditionObj.conditionOptions.operator.operator],
            onItemSelected: function onItemSelected(item) {
              return _this3.itemClicked(item.clickedItem);
            },
            select: 'single',
            search: 'contains',
            placeholder: '--choose operator--',
            variant: 'tertiary',
            size: 'md',
            disabled: !dropdownsIsActive.operation,
            manageSelectedItems: true,
          }),
        }), dropdownsIsActive.value && (0, _inputValue.inputValue)({
          inputValuePayload,
        }), operatorType !== '^OR' && isBtnsRender && /* #__PURE__ */(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
            className: 'btn-container',
            children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_index.Button, {
              label: 'and',
              size: 'md',
              onClick: function onClick() {
                clickBtn({
                  action: 'addNewOperator',
                  payload: {
                    value: '^',
                    currentConditionID: conditionID,
                    globalConditionID,
                  },
                });
              },
            }),
          }), /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
            className: 'btn-container',
            children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_index.Button, {
              label: 'or',
              size: 'md',
              onClick: function onClick() {
                clickBtn({
                  action: 'addNewOperator',
                  payload: {
                    value: '^OR',
                    currentConditionID: conditionID,
                    globalConditionID,
                  },
                });
              },
            }),
          })],
        }), /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
          className: 'btn-container',
          children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_index.Button, {
            icon: 'x-circle',
            variant: 'tertiary',
            size: 'md',
            onClick: function onClick() {
              clickBtn({
                action: 'deleteCondition',
                payload: {
                  conditionsArray,
                  globalConditionID,
                  currentConditionID: conditionID,
                },
              });
            },
          }),
        })],
      });
    },
  }]);

  return FilterConditionItem;
}(React.Component));

exports.default = FilterConditionItem;
FilterConditionItem.defaultProps = {
  conditionObj: {},
  conditionID: '',
  globalConditionID: '',
  operatorType: '',
};
FilterConditionItem.propTypes = {
  conditionObj: _propTypes.default.object,
  conditionID: _propTypes.default.string,
  globalConditionID: _propTypes.default.string,
  operatorType: _propTypes.default.string,
};
