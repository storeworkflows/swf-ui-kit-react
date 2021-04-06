"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _graphqlRequest = _interopRequireDefault(require("../utils/graphqlRequest/graphqlRequest"));

var _datasource = require("./datasource");

var _lodash = _interopRequireDefault(require("lodash"));

var _index = require("../index");

var _DeclarativeUIActions = _interopRequireDefault(require("./DeclarativeUIActions"));

var _Result = _interopRequireDefault(require("./Result"));

var _Pill = _interopRequireDefault(require("../Pill/Pill"));

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LookupField = /*#__PURE__*/function (_React$Component) {
  _inherits(LookupField, _React$Component);

  var _super = _createSuper(LookupField);

  function LookupField(props) {
    var _this$props$value$val, _this$props$value, _this$props$value$val2, _this$props$value$dis, _this$props$value2, _this$props$value2$di;

    var _this;

    _classCallCheck(this, LookupField);

    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.getReferenceList = _this.getReferenceList.bind(_assertThisInitialized(_this));
    _this.getReferenceList = _lodash["default"].debounce(_this.getReferenceList, 500);
    _this.listHandleClick = _this.listHandleClick.bind(_assertThisInitialized(_this));
    _this.referenceHandleClick = _this.referenceHandleClick.bind(_assertThisInitialized(_this));
    _this.renderListPills = _this.renderListPills.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.controllerRef = /*#__PURE__*/React.createRef();
    _this.inputRef = /*#__PURE__*/React.createRef();
    _this.isList = _this.props.type === "list";
    _this.state = {
      records: [],
      referenceRecord: {
        sysId: _this.isList ? "" : _this.props.value || null,
        displayValue: _this.isList ? "" : _this.props.displayValue || ""
      },
      listRecords: {
        value: (_this$props$value$val = (_this$props$value = _this.props.value) === null || _this$props$value === void 0 ? void 0 : (_this$props$value$val2 = _this$props$value.value) === null || _this$props$value$val2 === void 0 ? void 0 : _this$props$value$val2.split(",")) !== null && _this$props$value$val !== void 0 ? _this$props$value$val : [],
        displayValue: (_this$props$value$dis = (_this$props$value2 = _this.props.value) === null || _this$props$value2 === void 0 ? void 0 : (_this$props$value2$di = _this$props$value2.displayValue) === null || _this$props$value2$di === void 0 ? void 0 : _this$props$value2$di.split(",")) !== null && _this$props$value$dis !== void 0 ? _this$props$value$dis : []
      },
      searchValue: "",
      matchesCount: 0,
      loading: false,
      loaded: false,
      focused: true
    };
    return _this;
  }

  _createClass(LookupField, [{
    key: "getReferenceList",
    value: function () {
      var _getReferenceList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value) {
        var response, json, _$get, referenceDataList, referenceRecentDataList, totalCount;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.setState({
                  loading: true,
                  records: [],
                  loaded: false
                });
                _context.next = 4;
                return (0, _graphqlRequest["default"])({
                  operationName: "reference",
                  query: _datasource.query,
                  variables: {
                    chars: value,
                    encodedRecord: "",
                    field: this.props.name,
                    ignoreRefQual: false,
                    paginationLimit: 25,
                    serializedChanges: "{}",
                    sortBy: "",
                    sys_id: this.props.tableRecordSysId,
                    table: this.props.table
                  },
                  params: {
                    signal: this.controllerRef.current.signal
                  }
                });

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();

              case 7:
                json = _context.sent;
                _$get = _lodash["default"].get(json, "[0].data.GlideLayout_Query.referenceDataRetriever"), referenceDataList = _$get.referenceDataList, referenceRecentDataList = _$get.referenceRecentDataList, totalCount = _$get.totalCount;
                this.setState({
                  loading: false,
                  loaded: true,
                  records: [].concat(_toConsumableArray(referenceDataList), _toConsumableArray(referenceRecentDataList)),
                  matchesCount: totalCount
                });
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function getReferenceList(_x) {
        return _getReferenceList.apply(this, arguments);
      }

      return getReferenceList;
    }()
  }, {
    key: "onChange",
    value: function onChange(event) {
      var value = event.target.value;

      if (this.controllerRef.current) {
        this.controllerRef.current.abort();
      }

      this.setState({
        referenceRecord: {
          sysId: null,
          displayValue: value
        }
      });
      this.controllerRef.current = new AbortController();
      this.getReferenceList(value);
    }
  }, {
    key: "referenceHandleClick",
    value: function referenceHandleClick(record) {
      var sysId = record.sysId,
          referenceData = record.referenceData;
      this.setState({
        referenceRecord: {
          sysId: sysId,
          displayValue: referenceData[0].value
        },
        loaded: false
      });
      this.props.onValueChange(this.props.name, sysId, referenceData[0].value);
    }
  }, {
    key: "listHandleClick",
    value: function listHandleClick(record) {
      var sysId = record.sysId,
          referenceData = record.referenceData;
      var listRecords = {
        value: Array.from(new Set([].concat(_toConsumableArray(this.state.listRecords.value), [sysId]))),
        displayValue: Array.from(new Set([].concat(_toConsumableArray(this.state.listRecords.displayValue), [referenceData[0].value])))
      };
      this.setState({
        listRecords: listRecords,
        loaded: false
      });
      this.props.onValueChange(this.props.name, listRecords.value.toString(), listRecords.displayValue.toString());
    } // componentDidUpdate(prevProps, prevState, snapshot) {
    //     const {loading, loaded, records} = this.state;
    //     console.log(records, loading, loaded);
    // }

  }, {
    key: "onClick",
    value: function onClick(record) {
      var _this$props;

      var isReference = ((_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.type) === "reference";
      return isReference ? this.referenceHandleClick(record) : this.listHandleClick(record);
    }
  }, {
    key: "onFocus",
    value: function onFocus(event) {
      this.setState({
        focused: true
      });

      if (this.controllerRef.current) {
        this.controllerRef.current.abort();
      }

      this.controllerRef.current = new AbortController();
      !this.props.readonly && this.getReferenceList("**");
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "renderListPills",
    value: function renderListPills() {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input.Start, {
        children: this.state.listRecords.displayValue.map(function (label) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pill["default"], {
            label: label,
            canDismiss: true
          });
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$inputRef, _this$inputRef$curren;

      var _this$state = this.state,
          matchesCount = _this$state.matchesCount,
          records = _this$state.records,
          loading = _this$state.loading,
          loaded = _this$state.loaded,
          focused = _this$state.focused,
          referenceRecord = _this$state.referenceRecord;
      var _this$props2 = this.props,
          label = _this$props2.label,
          declarativeUiActions = _this$props2.declarativeUiActions,
          type = _this$props2.type,
          name = _this$props2.name,
          readonly = _this$props2.readonly,
          invalid = _this$props2.invalid,
          required = _this$props2.required,
          onInvalid = _this$props2.onInvalid,
          message = _this$props2.message,
          visible = _this$props2.visible;
      var hasMatches = matchesCount > 0;
      var showResults = loading || loaded && focused;
      var isList = type === "list";
      return visible ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "swf-reference",
          tabIndex: "0",
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input, {
            internalRef: this.inputRef,
            className: "swf-reference--input",
            value: referenceRecord.displayValue,
            containerClass: isList ? "list-field-group" : "",
            label: label,
            name: name,
            onInput: this.onChange,
            readonly: readonly,
            onInvalid: onInvalid,
            invalid: invalid,
            required: required,
            message: message,
            children: isList && this.renderListPills()
          }), this.inputRef && this.inputRef.current && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
            hideTail: true,
            manageOpened: true,
            opened: showResults,
            positionTarget: this.inputRef,
            positions: [{
              target: "bottom-center",
              content: "top-center"
            }, {
              target: "top-center",
              content: "bottom-center"
            }],
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
                className: "result",
                style: {
                  width: "".concat(((_this$inputRef = this.inputRef) === null || _this$inputRef === void 0 ? void 0 : (_this$inputRef$curren = _this$inputRef.current) === null || _this$inputRef$curren === void 0 ? void 0 : _this$inputRef$curren.offsetWidth) - 16, "px")
                },
                children: [loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "message",
                  children: "Loading..."
                }) : null, loaded && !hasMatches ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "message",
                  children: "No Results Found"
                }) : null, loaded && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Result["default"], {
                  records: records,
                  onClick: this.onClick
                })]
              })
            })
          })]
        })
      }) : null;
    }
  }]);

  return LookupField;
}(React.Component);

LookupField.defaultProps = {
  label: "",
  name: "default",
  onValueChange: function onValueChange() {
    return void 0;
  },
  declarativeUiActions: [],
  type: "reference",
  readonly: false,
  required: false,
  invalid: false,
  onInvalid: function onInvalid() {
    return void 0;
  },
  message: [],
  visible: true
};
LookupField.propTypes = {
  onValueChange: _propTypes["default"].func,
  value: _propTypes["default"].string,
  displayValue: _propTypes["default"].string,
  declarativeUiActions: _propTypes["default"].object,
  label: _propTypes["default"].string,
  name: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(["reference", "list"]),
  table: _propTypes["default"].string,
  tableRecordSysId: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  onInvalid: _propTypes["default"].func,
  message: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    status: _propTypes["default"].oneOf(["critical", "warning", "positive", "info", "suggestion"]),
    content: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    className: _propTypes["default"].object,
    iconSize: _propTypes["default"].number
  })),
  visible: _propTypes["default"].bool
};
var _default = LookupField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb29rdXBGaWVsZC9Mb29rdXBGaWVsZC5qcyJdLCJuYW1lcyI6WyJMb29rdXBGaWVsZCIsInByb3BzIiwib25DaGFuZ2UiLCJiaW5kIiwiZ2V0UmVmZXJlbmNlTGlzdCIsIl8iLCJkZWJvdW5jZSIsImxpc3RIYW5kbGVDbGljayIsInJlZmVyZW5jZUhhbmRsZUNsaWNrIiwicmVuZGVyTGlzdFBpbGxzIiwib25DbGljayIsIm9uQmx1ciIsIm9uRm9jdXMiLCJjb250cm9sbGVyUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJpbnB1dFJlZiIsImlzTGlzdCIsInR5cGUiLCJzdGF0ZSIsInJlY29yZHMiLCJyZWZlcmVuY2VSZWNvcmQiLCJzeXNJZCIsInZhbHVlIiwiZGlzcGxheVZhbHVlIiwibGlzdFJlY29yZHMiLCJzcGxpdCIsInNlYXJjaFZhbHVlIiwibWF0Y2hlc0NvdW50IiwibG9hZGluZyIsImxvYWRlZCIsImZvY3VzZWQiLCJzZXRTdGF0ZSIsIm9wZXJhdGlvbk5hbWUiLCJxdWVyeSIsInZhcmlhYmxlcyIsImNoYXJzIiwiZW5jb2RlZFJlY29yZCIsImZpZWxkIiwibmFtZSIsImlnbm9yZVJlZlF1YWwiLCJwYWdpbmF0aW9uTGltaXQiLCJzZXJpYWxpemVkQ2hhbmdlcyIsInNvcnRCeSIsInN5c19pZCIsInRhYmxlUmVjb3JkU3lzSWQiLCJ0YWJsZSIsInBhcmFtcyIsInNpZ25hbCIsImN1cnJlbnQiLCJyZXNwb25zZSIsImpzb24iLCJnZXQiLCJyZWZlcmVuY2VEYXRhTGlzdCIsInJlZmVyZW5jZVJlY2VudERhdGFMaXN0IiwidG90YWxDb3VudCIsImNvbnNvbGUiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiYWJvcnQiLCJBYm9ydENvbnRyb2xsZXIiLCJyZWNvcmQiLCJyZWZlcmVuY2VEYXRhIiwib25WYWx1ZUNoYW5nZSIsIkFycmF5IiwiZnJvbSIsIlNldCIsInRvU3RyaW5nIiwiaXNSZWZlcmVuY2UiLCJyZWFkb25seSIsIm1hcCIsImxhYmVsIiwiZGVjbGFyYXRpdmVVaUFjdGlvbnMiLCJpbnZhbGlkIiwicmVxdWlyZWQiLCJvbkludmFsaWQiLCJtZXNzYWdlIiwidmlzaWJsZSIsImhhc01hdGNoZXMiLCJzaG93UmVzdWx0cyIsImNvbnRlbnQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiZnVuYyIsInN0cmluZyIsIm9iamVjdCIsIm9uZU9mIiwiYm9vbCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsInN0YXR1cyIsImljb24iLCJjbGFzc05hbWUiLCJpY29uU2l6ZSIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTUEsVzs7Ozs7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsK0JBQWhCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JELElBQXRCLCtCQUF4QjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCQyxtQkFBRUMsUUFBRixDQUFXLE1BQUtGLGdCQUFoQixFQUFrQyxHQUFsQyxDQUF4QjtBQUNBLFVBQUtHLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkosSUFBckIsK0JBQXZCO0FBQ0EsVUFBS0ssb0JBQUwsR0FBNEIsTUFBS0Esb0JBQUwsQ0FBMEJMLElBQTFCLCtCQUE1QjtBQUNBLFVBQUtNLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQk4sSUFBckIsK0JBQXZCO0FBRUEsVUFBS08sT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYVAsSUFBYiwrQkFBZjtBQUNB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TUFBZCxDQUFoQixDQVBjO0FBUXBCNUMsRUFBQUEsS0FBSyxFQUFFd0Msc0JBQVVFLE1BUkc7QUFTcEIzQyxFQUFBQSxnQkFBZ0IsRUFBRXlDLHNCQUFVRSxNQVRSO0FBVXBCbEIsRUFBQUEsUUFBUSxFQUFFZ0Isc0JBQVVLLElBVkE7QUFXcEJoQixFQUFBQSxRQUFRLEVBQUVXLHNCQUFVSyxJQVhBO0FBWXBCakIsRUFBQUEsT0FBTyxFQUFFWSxzQkFBVUssSUFaQztBQWFwQmYsRUFBQUEsU0FBUyxFQUFFVSxzQkFBVUMsSUFiRDtBQWNwQlYsRUFBQUEsT0FBTyxFQUFFZSxzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVFLEtBQVYsQ0FBZ0I7QUFDdkNDLElBQUFBLE1BQU0sRUFBRUgsc0JBQVVGLEtBQVYsQ0FBZ0IsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixVQUF4QixFQUFvQyxNQUFwQyxFQUE0QyxZQUE1QyxDQUFoQixDQUQrQjtBQUV2Q1QsSUFBQUEsT0FBTyxFQUFFVyxzQkFBVUosTUFGb0I7QUFHdkNRLElBQUFBLElBQUksRUFBRUosc0JBQVVKLE1BSHVCO0FBSXZDUyxJQUFBQSxTQUFTLEVBQUVYLHNCQUFVRyxNQUprQjtBQUt2Q1MsSUFBQUEsUUFBUSxFQUFFTixzQkFBVU87QUFMbUIsR0FBaEIsQ0FBbEIsQ0FkVztBQXFCcEJyQixFQUFBQSxPQUFPLEVBQUVRLHNCQUFVSztBQXJCQyxDQUF4QjtlQXlCZTNGLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgZ3JhcGhxbFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL2dyYXBocWxSZXF1ZXN0L2dyYXBocWxSZXF1ZXN0XCI7XHJcbmltcG9ydCB7cXVlcnl9IGZyb20gXCIuL2RhdGFzb3VyY2VcIjtcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge0lucHV0fSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IERlY2xhcmF0aXZlVUlBY3Rpb25zIGZyb20gXCIuL0RlY2xhcmF0aXZlVUlBY3Rpb25zXCI7XHJcbmltcG9ydCBSZXN1bHQgZnJvbSBcIi4vUmVzdWx0XCI7XHJcbmltcG9ydCBQaWxsIGZyb20gXCIuLi9QaWxsL1BpbGxcIjtcclxuaW1wb3J0IFBvcG92ZXIgZnJvbSBcIi4uL1BvcG92ZXIvUG9wb3ZlclwiO1xyXG5pbXBvcnQge25vb3B9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jbGFzcyBMb29rdXBGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlTGlzdCA9IHRoaXMuZ2V0UmVmZXJlbmNlTGlzdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlTGlzdCA9IF8uZGVib3VuY2UodGhpcy5nZXRSZWZlcmVuY2VMaXN0LCA1MDApO1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmRsZUNsaWNrID0gdGhpcy5saXN0SGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlZmVyZW5jZUhhbmRsZUNsaWNrID0gdGhpcy5yZWZlcmVuY2VIYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyTGlzdFBpbGxzID0gdGhpcy5yZW5kZXJMaXN0UGlsbHMuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLmlucHV0UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNMaXN0ID0gdGhpcy5wcm9wcy50eXBlID09PSBcImxpc3RcIjtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcmVjb3JkczogW10sXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZVJlY29yZDoge1xyXG4gICAgICAgICAgICAgICAgc3lzSWQ6IHRoaXMuaXNMaXN0ID8gXCJcIiA6IHRoaXMucHJvcHMudmFsdWUgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZTogdGhpcy5pc0xpc3QgPyBcIlwiIDogdGhpcy5wcm9wcy5kaXNwbGF5VmFsdWUgfHwgXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaXN0UmVjb3Jkczoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWU/LnZhbHVlPy5zcGxpdChcIixcIikgPz8gW10sXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5VmFsdWU6IHRoaXMucHJvcHMudmFsdWU/LmRpc3BsYXlWYWx1ZT8uc3BsaXQoXCIsXCIpID8/IFtdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICBtYXRjaGVzQ291bnQ6IDAsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb2N1c2VkOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldFJlZmVyZW5jZUxpc3QodmFsdWUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzOiBbXSxcclxuICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdyYXBocWxSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbk5hbWU6IFwicmVmZXJlbmNlXCIsXHJcbiAgICAgICAgICAgICAgICBxdWVyeSxcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJzOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVkUmVjb3JkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiB0aGlzLnByb3BzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlUmVmUXVhbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkxpbWl0OiAyNSxcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkQ2hhbmdlczogXCJ7fVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRCeTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBzeXNfaWQ6IHRoaXMucHJvcHMudGFibGVSZWNvcmRTeXNJZCxcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZTogdGhpcy5wcm9wcy50YWJsZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25hbDogdGhpcy5jb250cm9sbGVyUmVmLmN1cnJlbnQuc2lnbmFsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VEYXRhTGlzdCxcclxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZVJlY2VudERhdGFMaXN0LFxyXG4gICAgICAgICAgICAgICAgdG90YWxDb3VudFxyXG4gICAgICAgICAgICB9ID0gXy5nZXQoanNvbiwgXCJbMF0uZGF0YS5HbGlkZUxheW91dF9RdWVyeS5yZWZlcmVuY2VEYXRhUmV0cmlldmVyXCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlY29yZHM6IFsuLi5yZWZlcmVuY2VEYXRhTGlzdCwgLi4ucmVmZXJlbmNlUmVjZW50RGF0YUxpc3RdLFxyXG4gICAgICAgICAgICAgICAgbWF0Y2hlc0NvdW50OiB0b3RhbENvdW50XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHt0YXJnZXQ6IHt2YWx1ZX19ID0gZXZlbnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbGxlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlclJlZi5jdXJyZW50LmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByZWZlcmVuY2VSZWNvcmQ6IHtcclxuICAgICAgICAgICAgICAgIHN5c0lkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyUmVmLmN1cnJlbnQgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlTGlzdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmZXJlbmNlSGFuZGxlQ2xpY2socmVjb3JkKSB7XHJcbiAgICAgICAgY29uc3Qge3N5c0lkLCByZWZlcmVuY2VEYXRhfSA9IHJlY29yZDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJlZmVyZW5jZVJlY29yZDoge1xyXG4gICAgICAgICAgICAgICAgc3lzSWQsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5VmFsdWU6IHJlZmVyZW5jZURhdGFbMF0udmFsdWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9hZGVkOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSh0aGlzLnByb3BzLm5hbWUsIHN5c0lkLCByZWZlcmVuY2VEYXRhWzBdLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0SGFuZGxlQ2xpY2socmVjb3JkKSB7XHJcbiAgICAgICAgY29uc3Qge3N5c0lkLCByZWZlcmVuY2VEYXRhfSA9IHJlY29yZDtcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdFJlY29yZHMgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLnRoaXMuc3RhdGUubGlzdFJlY29yZHMudmFsdWUsIHN5c0lkXSkpLFxyXG4gICAgICAgICAgICBkaXNwbGF5VmFsdWU6IEFycmF5LmZyb20obmV3IFNldChbLi4udGhpcy5zdGF0ZS5saXN0UmVjb3Jkcy5kaXNwbGF5VmFsdWUsIHJlZmVyZW5jZURhdGFbMF0udmFsdWVdKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsaXN0UmVjb3JkcyxcclxuICAgICAgICAgICAgbG9hZGVkOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSh0aGlzLnByb3BzLm5hbWUsIGxpc3RSZWNvcmRzLnZhbHVlLnRvU3RyaW5nKCksIGxpc3RSZWNvcmRzLmRpc3BsYXlWYWx1ZS50b1N0cmluZygpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcclxuICAgIC8vICAgICBjb25zdCB7bG9hZGluZywgbG9hZGVkLCByZWNvcmRzfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVjb3JkcywgbG9hZGluZywgbG9hZGVkKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBvbkNsaWNrKHJlY29yZCkge1xyXG4gICAgICAgIGNvbnN0IGlzUmVmZXJlbmNlID0gdGhpcy5wcm9wcz8udHlwZSA9PT0gXCJyZWZlcmVuY2VcIlxyXG4gICAgICAgIHJldHVybiBpc1JlZmVyZW5jZSA/IHRoaXMucmVmZXJlbmNlSGFuZGxlQ2xpY2socmVjb3JkKSA6IHRoaXMubGlzdEhhbmRsZUNsaWNrKHJlY29yZClcclxuICAgIH1cclxuXHJcbiAgICBvbkZvY3VzKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogdHJ1ZX0pO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2xsZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJSZWYuY3VycmVudC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyUmVmLmN1cnJlbnQgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgIXRoaXMucHJvcHMucmVhZG9ubHkgJiYgdGhpcy5nZXRSZWZlcmVuY2VMaXN0KFwiKipcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVyKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogZmFsc2V9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJMaXN0UGlsbHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPElucHV0LlN0YXJ0Pnt0aGlzLnN0YXRlLmxpc3RSZWNvcmRzLmRpc3BsYXlWYWx1ZS5tYXAoKGxhYmVsKSA9PiA8UGlsbCBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuRGlzbWlzcz17dHJ1ZX0vPil9PC9JbnB1dC5TdGFydD5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHttYXRjaGVzQ291bnQsIHJlY29yZHMsIGxvYWRpbmcsIGxvYWRlZCwgZm9jdXNlZCwgcmVmZXJlbmNlUmVjb3JkfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHtsYWJlbCwgZGVjbGFyYXRpdmVVaUFjdGlvbnMsIHR5cGUsIG5hbWUsIHJlYWRvbmx5LFxyXG4gICAgICAgICAgICBpbnZhbGlkLCByZXF1aXJlZCwgb25JbnZhbGlkLCBtZXNzYWdlLCB2aXNpYmxlfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc01hdGNoZXMgPSBtYXRjaGVzQ291bnQgPiAwO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93UmVzdWx0cyA9IGxvYWRpbmcgfHwgKGxvYWRlZCAmJiBmb2N1c2VkKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNMaXN0ID0gdHlwZSA9PT0gXCJsaXN0XCI7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHZpc2libGUgP1xyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2YtcmVmZXJlbmNlXCIgdGFiSW5kZXg9XCIwXCIgb25Gb2N1cz17dGhpcy5vbkZvY3VzfSBvbkJsdXI9e3RoaXMub25CbHVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWxSZWY9e3RoaXMuaW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3Zi1yZWZlcmVuY2UtLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlZmVyZW5jZVJlY29yZC5kaXNwbGF5VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzPXtpc0xpc3QgPyBcImxpc3QtZmllbGQtZ3JvdXBcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk9e3JlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkludmFsaWQ9e29uSW52YWxpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17aW52YWxpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzTGlzdCAmJiB0aGlzLnJlbmRlckxpc3RQaWxscygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8SW5wdXQuRW5kPjxEZWNsYXJhdGl2ZVVJQWN0aW9ucyBkZWNsYXJhdGl2ZVVpQWN0aW9ucz17ZGVjbGFyYXRpdmVVaUFjdGlvbnN9IHJlY29yZD17cmVmZXJlbmNlUmVjb3JkfS8+PC9JbnB1dC5FbmQ+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5pbnB1dFJlZiAmJiB0aGlzLmlucHV0UmVmLmN1cnJlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVUYWlsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlT3BlbmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtzaG93UmVzdWx0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVGFyZ2V0PXt0aGlzLmlucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhcmdldDogXCJib3R0b20tY2VudGVyXCIsIGNvbnRlbnQ6IFwidG9wLWNlbnRlclwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFyZ2V0OiBcInRvcC1jZW50ZXJcIiwgY29udGVudDogXCJib3R0b20tY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmVzdWx0XCIgc3R5bGU9e3t3aWR0aDogYCR7dGhpcy5pbnB1dFJlZj8uY3VycmVudD8ub2Zmc2V0V2lkdGggLSAxNn1weGB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8c3BhbiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+TG9hZGluZy4uLjwvc3Bhbj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGVkICYmICFoYXNNYXRjaGVzID8gPHNwYW4gY2xhc3NOYW1lPVwibWVzc2FnZVwiPk5vIFJlc3VsdHMgRm91bmQ8L3NwYW4+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRlZCAmJiA8UmVzdWx0IHJlY29yZHM9e3JlY29yZHN9IG9uQ2xpY2s9e3RoaXMub25DbGlja30vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkxvb2t1cEZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgbmFtZTogXCJkZWZhdWx0XCIsXHJcbiAgICBvblZhbHVlQ2hhbmdlOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBkZWNsYXJhdGl2ZVVpQWN0aW9uczogW10sXHJcbiAgICB0eXBlOiBcInJlZmVyZW5jZVwiLFxyXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgaW52YWxpZDogZmFsc2UsXHJcbiAgICBvbkludmFsaWQ6ICgpID0+IHZvaWQgMCxcclxuICAgIG1lc3NhZ2U6IFtdLFxyXG4gICAgdmlzaWJsZTogdHJ1ZVxyXG59XHJcblxyXG5Mb29rdXBGaWVsZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBvblZhbHVlQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIHZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGlzcGxheVZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGVjbGFyYXRpdmVVaUFjdGlvbnM6IHByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG5hbWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0eXBlOiBwcm9wVHlwZXMub25lT2YoW1wicmVmZXJlbmNlXCIsIFwibGlzdFwiXSksXHJcbiAgICB0YWJsZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRhYmxlUmVjb3JkU3lzSWQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICByZWFkb25seTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZXF1aXJlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG9uSW52YWxpZDogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBtZXNzYWdlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHN0YXR1czogUHJvcFR5cGVzLm9uZU9mKFtcImNyaXRpY2FsXCIsIFwid2FybmluZ1wiLCBcInBvc2l0aXZlXCIsIFwiaW5mb1wiLCBcInN1Z2dlc3Rpb25cIl0pLFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgaWNvblNpemU6IFByb3BUeXBlcy5udW1iZXJcclxuICAgIH0pKSxcclxuICAgIHZpc2libGU6IHByb3BUeXBlcy5ib29sXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb29rdXBGaWVsZCJdfQ==