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

var _styles = _interopRequireDefault(require("./styles.scss"));

var _DeclarativeUIActions = _interopRequireDefault(require("./DeclarativeUIActions"));

var _Result = _interopRequireDefault(require("./Result"));

var _Pill = _interopRequireDefault(require("../Pill/Pill"));

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
    var _this$props$value$val, _this$props$value, _this$props$value$dis, _this$props$value2, _this$props$value$val2, _this$props$value3, _this$props$value$dis2, _this$props$value4;

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
        sysId: _this.isList ? "" : (_this$props$value$val = (_this$props$value = _this.props.value) === null || _this$props$value === void 0 ? void 0 : _this$props$value.value) !== null && _this$props$value$val !== void 0 ? _this$props$value$val : null,
        displayValue: _this.isList ? "" : (_this$props$value$dis = (_this$props$value2 = _this.props.value) === null || _this$props$value2 === void 0 ? void 0 : _this$props$value2.displayValue) !== null && _this$props$value$dis !== void 0 ? _this$props$value$dis : ""
      },
      listRecords: {
        value: (_this$props$value$val2 = (_this$props$value3 = _this.props.value) === null || _this$props$value3 === void 0 ? void 0 : _this$props$value3.value.split(",")) !== null && _this$props$value$val2 !== void 0 ? _this$props$value$val2 : [],
        displayValue: (_this$props$value$dis2 = (_this$props$value4 = _this.props.value) === null || _this$props$value4 === void 0 ? void 0 : _this$props$value4.displayValue.split(",")) !== null && _this$props$value$dis2 !== void 0 ? _this$props$value$dis2 : []
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
                    serializedChanges: "",
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
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.inputRef);
    }
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
          name = _this$props2.name;
      var hasMatches = matchesCount > 0;
      var showResults = loading || loaded && focused;
      var isList = type === "list";
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "swf-reference",
          tabIndex: "0",
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_index.Input, {
            internalRef: this.inputRef,
            className: "swf-reference--input",
            value: referenceRecord.displayValue,
            containerClass: isList ? "list-field-group" : "",
            label: label,
            name: name,
            onInput: this.onChange,
            children: [isList && this.renderListPills(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input.End, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DeclarativeUIActions["default"], {
                declarativeUiActions: declarativeUiActions,
                record: referenceRecord
              })
            })]
          }), showResults ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
            className: "result",
            style: {
              top: "".concat(((_this$inputRef = this.inputRef) === null || _this$inputRef === void 0 ? void 0 : (_this$inputRef$curren = _this$inputRef.current) === null || _this$inputRef$curren === void 0 ? void 0 : _this$inputRef$curren.offsetHeight) + 10, "px")
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
          }) : null]
        })]
      });
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
  type: "reference"
};
LookupField.propTypes = {
  onValueChange: _propTypes["default"].func,
  value: _propTypes["default"].string,
  declarativeUiActions: _propTypes["default"].object,
  label: _propTypes["default"].string,
  name: _propTypes["default"].string,
  type: _propTypes["default"].oneOfType(["reference", "list"]),
  table: _propTypes["default"].string,
  tableRecordSysId: _propTypes["default"].string
};
var _default = LookupField;
exports["default"] = _default;
//# sourceMappingURL=LookupField.js.map