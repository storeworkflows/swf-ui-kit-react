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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb29rdXBGaWVsZC9Mb29rdXBGaWVsZC5qcyJdLCJuYW1lcyI6WyJMb29rdXBGaWVsZCIsInByb3BzIiwib25DaGFuZ2UiLCJiaW5kIiwiZ2V0UmVmZXJlbmNlTGlzdCIsIl8iLCJkZWJvdW5jZSIsImxpc3RIYW5kbGVDbGljayIsInJlZmVyZW5jZUhhbmRsZUNsaWNrIiwicmVuZGVyTGlzdFBpbGxzIiwib25DbGljayIsIm9uQmx1ciIsIm9uRm9jdXMiLCJjb250cm9sbGVyUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJpbnB1dFJlZiIsImlzTGlzdCIsInR5cGUiLCJzdGF0ZSIsInJlY29yZHMiLCJyZWZlcmVuY2VSZWNvcmQiLCJzeXNJZCIsInZhbHVlIiwiZGlzcGxheVZhbHVlIiwibGlzdFJlY29yZHMiLCJzcGxpdCIsInNlYXJjaFZhbHVlIiwibWF0Y2hlc0NvdW50IiwibG9hZGluZyIsImxvYWRlZCIsImZvY3VzZWQiLCJzZXRTdGF0ZSIsIm9wZXJhdGlvbk5hbWUiLCJxdWVyeSIsInZhcmlhYmxlcyIsImNoYXJzIiwiZW5jb2RlZFJlY29yZCIsImZpZWxkIiwibmFtZSIsImlnbm9yZVJlZlF1YWwiLCJwYWdpbmF0aW9uTGltaXQiLCJzZXJpYWxpemVkQ2hhbmdlcyIsInNvcnRCeSIsInN5c19pZCIsInRhYmxlUmVjb3JkU3lzSWQiLCJ0YWJsZSIsInBhcmFtcyIsInNpZ25hbCIsImN1cnJlbnQiLCJyZXNwb25zZSIsImpzb24iLCJnZXQiLCJyZWZlcmVuY2VEYXRhTGlzdCIsInJlZmVyZW5jZVJlY2VudERhdGFMaXN0IiwidG90YWxDb3VudCIsImNvbnNvbGUiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiYWJvcnQiLCJBYm9ydENvbnRyb2xsZXIiLCJyZWNvcmQiLCJyZWZlcmVuY2VEYXRhIiwib25WYWx1ZUNoYW5nZSIsIkFycmF5IiwiZnJvbSIsIlNldCIsInRvU3RyaW5nIiwibG9nIiwiaXNSZWZlcmVuY2UiLCJtYXAiLCJsYWJlbCIsImRlY2xhcmF0aXZlVWlBY3Rpb25zIiwiaGFzTWF0Y2hlcyIsInNob3dSZXN1bHRzIiwic3R5bGVzIiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiZnVuYyIsInN0cmluZyIsIm9iamVjdCIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsK0JBQWhCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JELElBQXRCLCtCQUF4QjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCQyxtQkFBRUMsUUFBRixDQUFXLE1BQUtGLGdCQUFoQixFQUFrQyxHQUFsQyxDQUF4QjtBQUNBLFVBQUtHLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkosSUFBckIsK0JBQXZCO0FBQ0EsVUFBS0ssb0JBQUwsR0FBNEIsTUFBS0Esb0JBQUwsQ0FBMEJMLElBQTFCLCtCQUE1QjtBQUNBLFVBQUtNLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQk4sSUFBckIsK0JBQXZCO0FBRUEsVUFBS08sT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYVAsSUFBYiwrQkFBZjtBQUNBLFVBQUtRLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlSLElBQVosK0JBQWQ7QUFDQSxVQUFLUyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhVCxJQUFiLCtCQUFmO0FBRUEsVUFBS1UsYUFBTCxnQkFBcUJDLEtBQUssQ0FBQ0MsU0FBTixFQUFyQjtBQUNBLFVB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cm9tIFwicmVhY3RcIjtcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBncmFwaHFsUmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvZ3JhcGhxbFJlcXVlc3QvZ3JhcGhxbFJlcXVlc3RcIjtcbmltcG9ydCB7cXVlcnl9IGZyb20gXCIuL2RhdGFzb3VyY2VcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7SW5wdXR9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IERlY2xhcmF0aXZlVUlBY3Rpb25zIGZyb20gXCIuL0RlY2xhcmF0aXZlVUlBY3Rpb25zXCI7XG5pbXBvcnQgUmVzdWx0IGZyb20gXCIuL1Jlc3VsdFwiO1xuaW1wb3J0IFBpbGwgZnJvbSBcIi4uL1BpbGwvUGlsbFwiO1xuXG5jbGFzcyBMb29rdXBGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZUxpc3QgPSB0aGlzLmdldFJlZmVyZW5jZUxpc3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRSZWZlcmVuY2VMaXN0ID0gXy5kZWJvdW5jZSh0aGlzLmdldFJlZmVyZW5jZUxpc3QsIDUwMCk7XG4gICAgICAgIHRoaXMubGlzdEhhbmRsZUNsaWNrID0gdGhpcy5saXN0SGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VIYW5kbGVDbGljayA9IHRoaXMucmVmZXJlbmNlSGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJMaXN0UGlsbHMgPSB0aGlzLnJlbmRlckxpc3RQaWxscy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY29udHJvbGxlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLmlucHV0UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICAgICAgdGhpcy5pc0xpc3QgPSB0aGlzLnByb3BzLnR5cGUgPT09IFwibGlzdFwiO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByZWNvcmRzOiBbXSxcbiAgICAgICAgICAgIHJlZmVyZW5jZVJlY29yZDoge1xuICAgICAgICAgICAgICAgIHN5c0lkOiB0aGlzLmlzTGlzdCA/IFwiXCIgOiB0aGlzLnByb3BzLnZhbHVlPy52YWx1ZSA/PyBudWxsLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZTogdGhpcy5pc0xpc3QgPyBcIlwiIDogdGhpcy5wcm9wcy52YWx1ZT8uZGlzcGxheVZhbHVlID8/IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaXN0UmVjb3Jkczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlPy52YWx1ZS5zcGxpdChcIixcIikgPz8gW10sXG4gICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlOiB0aGlzLnByb3BzLnZhbHVlPy5kaXNwbGF5VmFsdWUuc3BsaXQoXCIsXCIpID8/IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VhcmNoVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICBtYXRjaGVzQ291bnQ6IDAsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICBmb2N1c2VkOiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRSZWZlcmVuY2VMaXN0KHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlY29yZHM6IFtdLFxuICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdyYXBocWxSZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb25OYW1lOiBcInJlZmVyZW5jZVwiLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFyczogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGVuY29kZWRSZWNvcmQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZVJlZlF1YWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uTGltaXQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkQ2hhbmdlczogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgc29ydEJ5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBzeXNfaWQ6IHRoaXMucHJvcHMudGFibGVSZWNvcmRTeXNJZCxcbiAgICAgICAgICAgICAgICAgICAgdGFibGU6IHRoaXMucHJvcHMudGFibGVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBzaWduYWw6IHRoaXMuY29udHJvbGxlclJlZi5jdXJyZW50LnNpZ25hbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VEYXRhTGlzdCxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VSZWNlbnREYXRhTGlzdCxcbiAgICAgICAgICAgICAgICB0b3RhbENvdW50XG4gICAgICAgICAgICB9ID0gXy5nZXQoanNvbiwgXCJbMF0uZGF0YS5HbGlkZUxheW91dF9RdWVyeS5yZWZlcmVuY2VEYXRhUmV0cmlldmVyXCIpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVjb3JkczogWy4uLnJlZmVyZW5jZURhdGFMaXN0LCAuLi5yZWZlcmVuY2VSZWNlbnREYXRhTGlzdF0sXG4gICAgICAgICAgICAgICAgbWF0Y2hlc0NvdW50OiB0b3RhbENvdW50XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHt0YXJnZXQ6IHt2YWx1ZX19ID0gZXZlbnQ7XG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2xsZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyUmVmLmN1cnJlbnQuYWJvcnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlZmVyZW5jZVJlY29yZDoge1xuICAgICAgICAgICAgICAgIHN5c0lkOiBudWxsLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJSZWYuY3VycmVudCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblxuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZUxpc3QodmFsdWUpO1xuICAgIH1cblxuICAgIHJlZmVyZW5jZUhhbmRsZUNsaWNrKHJlY29yZCkge1xuICAgICAgICBjb25zdCB7c3lzSWQsIHJlZmVyZW5jZURhdGF9ID0gcmVjb3JkO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVmZXJlbmNlUmVjb3JkOiB7XG4gICAgICAgICAgICAgICAgc3lzSWQsXG4gICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlOiByZWZlcmVuY2VEYXRhWzBdLnZhbHVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZGVkOiBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSh0aGlzLnByb3BzLm5hbWUsIHN5c0lkLCByZWZlcmVuY2VEYXRhWzBdLnZhbHVlKTtcbiAgICB9XG5cbiAgICBsaXN0SGFuZGxlQ2xpY2socmVjb3JkKSB7XG4gICAgICAgIGNvbnN0IHtzeXNJZCwgcmVmZXJlbmNlRGF0YX0gPSByZWNvcmQ7XG5cbiAgICAgICAgY29uc3QgbGlzdFJlY29yZHMgPSB7XG4gICAgICAgICAgICB2YWx1ZTogQXJyYXkuZnJvbShuZXcgU2V0KFsuLi50aGlzLnN0YXRlLmxpc3RSZWNvcmRzLnZhbHVlLCBzeXNJZF0pKSxcbiAgICAgICAgICAgIGRpc3BsYXlWYWx1ZTogQXJyYXkuZnJvbShuZXcgU2V0KFsuLi50aGlzLnN0YXRlLmxpc3RSZWNvcmRzLmRpc3BsYXlWYWx1ZSwgcmVmZXJlbmNlRGF0YVswXS52YWx1ZV0pKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsaXN0UmVjb3JkcyxcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5wcm9wcy5uYW1lLCBsaXN0UmVjb3Jkcy52YWx1ZS50b1N0cmluZygpLCBsaXN0UmVjb3Jkcy5kaXNwbGF5VmFsdWUudG9TdHJpbmcoKSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbnB1dFJlZilcbiAgICB9XG5cbiAgICBvbkNsaWNrKHJlY29yZCkge1xuICAgICAgICBjb25zdCBpc1JlZmVyZW5jZSA9IHRoaXMucHJvcHM/LnR5cGUgPT09IFwicmVmZXJlbmNlXCJcbiAgICAgICAgcmV0dXJuIGlzUmVmZXJlbmNlID8gdGhpcy5yZWZlcmVuY2VIYW5kbGVDbGljayhyZWNvcmQpIDogdGhpcy5saXN0SGFuZGxlQ2xpY2socmVjb3JkKVxuICAgIH1cblxuICAgIG9uRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIG9uQmx1cihldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIHJlbmRlckxpc3RQaWxscygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbnB1dC5TdGFydD57dGhpcy5zdGF0ZS5saXN0UmVjb3Jkcy5kaXNwbGF5VmFsdWUubWFwKChsYWJlbCkgPT4gPFBpbGwgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5EaXNtaXNzPXt0cnVlfS8+KX08L0lucHV0LlN0YXJ0PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7bWF0Y2hlc0NvdW50LCByZWNvcmRzLCBsb2FkaW5nLCBsb2FkZWQsIGZvY3VzZWQsIHJlZmVyZW5jZVJlY29yZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IHtsYWJlbCwgZGVjbGFyYXRpdmVVaUFjdGlvbnMsIHR5cGUsIG5hbWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBoYXNNYXRjaGVzID0gbWF0Y2hlc0NvdW50ID4gMDtcblxuICAgICAgICBjb25zdCBzaG93UmVzdWx0cyA9IGxvYWRpbmcgfHwgKGxvYWRlZCAmJiBmb2N1c2VkKTtcblxuICAgICAgICBjb25zdCBpc0xpc3QgPSB0eXBlID09PSBcImxpc3RcIjtcblxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2YtcmVmZXJlbmNlXCIgdGFiSW5kZXg9XCIwXCIgb25Gb2N1cz17dGhpcy5vbkZvY3VzfSBvbkJsdXI9e3RoaXMub25CbHVyfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbFJlZj17dGhpcy5pbnB1dFJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3Zi1yZWZlcmVuY2UtLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWZlcmVuY2VSZWNvcmQuZGlzcGxheVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M9e2lzTGlzdCA/IFwibGlzdC1maWVsZC1ncm91cFwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNMaXN0ICYmIHRoaXMucmVuZGVyTGlzdFBpbGxzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuRW5kPjxEZWNsYXJhdGl2ZVVJQWN0aW9ucyBkZWNsYXJhdGl2ZVVpQWN0aW9ucz17ZGVjbGFyYXRpdmVVaUFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQ9e3JlZmVyZW5jZVJlY29yZH0vPjwvSW5wdXQuRW5kPlxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0PlxuICAgICAgICAgICAgICAgICAgICB7c2hvd1Jlc3VsdHMgPyA8dWwgY2xhc3NOYW1lPVwicmVzdWx0XCIgc3R5bGU9e3t0b3A6IGAke3RoaXMuaW5wdXRSZWY/LmN1cnJlbnQ/Lm9mZnNldEhlaWdodCArIDEwfXB4YH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8c3BhbiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+TG9hZGluZy4uLjwvc3Bhbj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRlZCAmJiAhaGFzTWF0Y2hlcyA/IDxzcGFuIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5ObyBSZXN1bHRzIEZvdW5kPC9zcGFuPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGVkICYmIDxSZXN1bHQgcmVjb3Jkcz17cmVjb3Jkc30gb25DbGljaz17dGhpcy5vbkNsaWNrfS8+fVxuICAgICAgICAgICAgICAgICAgICA8L3VsPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuTG9va3VwRmllbGQuZGVmYXVsdFByb3BzID0ge1xuICAgIGxhYmVsOiBcIlwiLFxuICAgIG5hbWU6IFwiZGVmYXVsdFwiLFxuICAgIG9uVmFsdWVDaGFuZ2U6ICgpID0+IHZvaWQgMCxcbiAgICBkZWNsYXJhdGl2ZVVpQWN0aW9uczogW10sXG4gICAgdHlwZTogXCJyZWZlcmVuY2VcIlxufVxuXG5Mb29rdXBGaWVsZC5wcm9wVHlwZXMgPSB7XG4gICAgb25WYWx1ZUNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXG4gICAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVjbGFyYXRpdmVVaUFjdGlvbnM6IHByb3BUeXBlcy5vYmplY3QsXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmFtZTogcHJvcFR5cGVzLnN0cmluZyxcbiAgICB0eXBlOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcInJlZmVyZW5jZVwiLCBcImxpc3RcIl0pLFxuICAgIHRhYmxlOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhYmxlUmVjb3JkU3lzSWQ6IHByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9va3VwRmllbGQiXX0=