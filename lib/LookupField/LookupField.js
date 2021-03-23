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
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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
        })
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
  type: _propTypes["default"].oneOf(["reference", "list"]),
  table: _propTypes["default"].string,
  tableRecordSysId: _propTypes["default"].string
};
var _default = LookupField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb29rdXBGaWVsZC9Mb29rdXBGaWVsZC5qcyJdLCJuYW1lcyI6WyJMb29rdXBGaWVsZCIsInByb3BzIiwib25DaGFuZ2UiLCJiaW5kIiwiZ2V0UmVmZXJlbmNlTGlzdCIsIl8iLCJkZWJvdW5jZSIsImxpc3RIYW5kbGVDbGljayIsInJlZmVyZW5jZUhhbmRsZUNsaWNrIiwicmVuZGVyTGlzdFBpbGxzIiwib25DbGljayIsIm9uQmx1ciIsIm9uRm9jdXMiLCJjb250cm9sbGVyUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJpbnB1dFJlZiIsImlzTGlzdCIsInR5cGUiLCJzdGF0ZSIsInJlY29yZHMiLCJyZWZlcmVuY2VSZWNvcmQiLCJzeXNJZCIsInZhbHVlIiwiZGlzcGxheVZhbHVlIiwibGlzdFJlY29yZHMiLCJzcGxpdCIsInNlYXJjaFZhbHVlIiwibWF0Y2hlc0NvdW50IiwibG9hZGluZyIsImxvYWRlZCIsImZvY3VzZWQiLCJzZXRTdGF0ZSIsIm9wZXJhdGlvbk5hbWUiLCJxdWVyeSIsInZhcmlhYmxlcyIsImNoYXJzIiwiZW5jb2RlZFJlY29yZCIsImZpZWxkIiwibmFtZSIsImlnbm9yZVJlZlF1YWwiLCJwYWdpbmF0aW9uTGltaXQiLCJzZXJpYWxpemVkQ2hhbmdlcyIsInNvcnRCeSIsInN5c19pZCIsInRhYmxlUmVjb3JkU3lzSWQiLCJ0YWJsZSIsInBhcmFtcyIsInNpZ25hbCIsImN1cnJlbnQiLCJyZXNwb25zZSIsImpzb24iLCJnZXQiLCJyZWZlcmVuY2VEYXRhTGlzdCIsInJlZmVyZW5jZVJlY2VudERhdGFMaXN0IiwidG90YWxDb3VudCIsImNvbnNvbGUiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiYWJvcnQiLCJBYm9ydENvbnRyb2xsZXIiLCJyZWNvcmQiLCJyZWZlcmVuY2VEYXRhIiwib25WYWx1ZUNoYW5nZSIsIkFycmF5IiwiZnJvbSIsIlNldCIsInRvU3RyaW5nIiwibG9nIiwiaXNSZWZlcmVuY2UiLCJtYXAiLCJsYWJlbCIsImRlY2xhcmF0aXZlVWlBY3Rpb25zIiwiaGFzTWF0Y2hlcyIsInNob3dSZXN1bHRzIiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiZnVuYyIsInN0cmluZyIsIm9iamVjdCIsIm9uZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7OztBQUNGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIsK0JBQXhCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0JDLG1CQUFFQyxRQUFGLENBQVcsTUFBS0YsZ0JBQWhCLEVBQWtDLEdBQWxDLENBQXhCO0FBQ0EsVUFBS0csZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCSixJQUFyQiwrQkFBdkI7QUFDQSxVQUFLSyxvQkFBTCxHQUE0QixNQUFLQSxvQkFBTCxDQUEwQkwsSUFBMUIsK0JBQTVCO0FBQ0EsVUFBS00sZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCTixJQUFyQiwrQkFBdkI7QUFFQSxVQUFLTyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhUCxJQUFiLCtCQUFmO0FBQ0EsVUFBS1EsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWVIsSUFBWiwrQkFBZDtBQUNBLFVBQUtTLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFULElBQWIsK0JBQWY7QUFFQSxVQUFLVSxhQUFMLGdCQUFxQkMsS0FBSyxDQUFDQyxTQUFOLEVBQXJCO0FBQ0EsVUFBS0MsUUFBTCxnQkFBZ0JGLEtB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QUEsY0FBeEIsR0FBNEUsSUFGbEUsRUFHVjVDLE1BQU0saUJBQUkscUJBQUMsa0JBQUQ7QUFBUSxjQUFBLE9BQU8sRUFBRVYsT0FBakI7QUFBMEIsY0FBQSxPQUFPLEVBQUUsS0FBS1Y7QUFBeEMsY0FIQTtBQUFBLFlBQUgsR0FJSixJQWxCWjtBQUFBO0FBREosUUFESjtBQXdCSDs7OztFQTdMcUJJLEtBQUssQ0FBQ2dFLFM7O0FBZ01oQzlFLFdBQVcsQ0FBQytFLFlBQVosR0FBMkI7QUFDdkJQLEVBQUFBLEtBQUssRUFBRSxFQURnQjtBQUV2QmpDLEVBQUFBLElBQUksRUFBRSxTQUZpQjtBQUd2QnlCLEVBQUFBLGFBQWEsRUFBRTtBQUFBLFdBQU0sS0FBSyxDQUFYO0FBQUEsR0FIUTtBQUl2QlMsRUFBQUEsb0JBQW9CLEVBQUUsRUFKQztBQUt2QnZELEVBQUFBLElBQUksRUFBRTtBQUxpQixDQUEzQjtBQVFBbEIsV0FBVyxDQUFDZ0YsU0FBWixHQUF3QjtBQUNwQmhCLEVBQUFBLGFBQWEsRUFBRWdCLHNCQUFVQyxJQURMO0FBRXBCMUQsRUFBQUEsS0FBSyxFQUFFeUQsc0JBQVVFLE1BRkc7QUFHcEJULEVBQUFBLG9CQUFvQixFQUFFTyxzQkFBVUcsTUFIWjtBQUlwQlgsRUFBQUEsS0FBSyxFQUFFUSxzQkFBVUUsTUFKRztBQUtwQjNDLEVBQUFBLElBQUksRUFBRXlDLHNCQUFVRSxNQUxJO0FBTXBCaEUsRUFBQUEsSUFBSSxFQUFFOEQsc0JBQVVJLEtBQVYsQ0FBZ0IsQ0FBQyxXQUFELEVBQWMsTUFBZCxDQUFoQixDQU5jO0FBT3BCdEMsRUFBQUEsS0FBSyxFQUFFa0Msc0JBQVVFLE1BUEc7QUFRcEJyQyxFQUFBQSxnQkFBZ0IsRUFBRW1DLHNCQUFVRTtBQVJSLENBQXhCO2VBV2VsRixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGdyYXBocWxSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9ncmFwaHFsUmVxdWVzdC9ncmFwaHFsUmVxdWVzdFwiO1xyXG5pbXBvcnQge3F1ZXJ5fSBmcm9tIFwiLi9kYXRhc291cmNlXCI7XHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtJbnB1dH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCBEZWNsYXJhdGl2ZVVJQWN0aW9ucyBmcm9tIFwiLi9EZWNsYXJhdGl2ZVVJQWN0aW9uc1wiO1xyXG5pbXBvcnQgUmVzdWx0IGZyb20gXCIuL1Jlc3VsdFwiO1xyXG5pbXBvcnQgUGlsbCBmcm9tIFwiLi4vUGlsbC9QaWxsXCI7XHJcblxyXG5jbGFzcyBMb29rdXBGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlTGlzdCA9IHRoaXMuZ2V0UmVmZXJlbmNlTGlzdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlTGlzdCA9IF8uZGVib3VuY2UodGhpcy5nZXRSZWZlcmVuY2VMaXN0LCA1MDApO1xyXG4gICAgICAgIHRoaXMubGlzdEhhbmRsZUNsaWNrID0gdGhpcy5saXN0SGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlZmVyZW5jZUhhbmRsZUNsaWNrID0gdGhpcy5yZWZlcmVuY2VIYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyTGlzdFBpbGxzID0gdGhpcy5yZW5kZXJMaXN0UGlsbHMuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLmlucHV0UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNMaXN0ID0gdGhpcy5wcm9wcy50eXBlID09PSBcImxpc3RcIjtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcmVjb3JkczogW10sXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZVJlY29yZDoge1xyXG4gICAgICAgICAgICAgICAgc3lzSWQ6IHRoaXMuaXNMaXN0ID8gXCJcIiA6IHRoaXMucHJvcHMudmFsdWU/LnZhbHVlID8/IG51bGwsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5VmFsdWU6IHRoaXMuaXNMaXN0ID8gXCJcIiA6IHRoaXMucHJvcHMudmFsdWU/LmRpc3BsYXlWYWx1ZSA/PyBcIlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpc3RSZWNvcmRzOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZT8udmFsdWUuc3BsaXQoXCIsXCIpID8/IFtdLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlOiB0aGlzLnByb3BzLnZhbHVlPy5kaXNwbGF5VmFsdWUuc3BsaXQoXCIsXCIpID8/IFtdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICBtYXRjaGVzQ291bnQ6IDAsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb2N1c2VkOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldFJlZmVyZW5jZUxpc3QodmFsdWUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzOiBbXSxcclxuICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdyYXBocWxSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbk5hbWU6IFwicmVmZXJlbmNlXCIsXHJcbiAgICAgICAgICAgICAgICBxdWVyeSxcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJzOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVkUmVjb3JkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiB0aGlzLnByb3BzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlUmVmUXVhbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkxpbWl0OiAyNSxcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkQ2hhbmdlczogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBzb3J0Qnk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3lzX2lkOiB0aGlzLnByb3BzLnRhYmxlUmVjb3JkU3lzSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGU6IHRoaXMucHJvcHMudGFibGVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaWduYWw6IHRoaXMuY29udHJvbGxlclJlZi5jdXJyZW50LnNpZ25hbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlRGF0YUxpc3QsXHJcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VSZWNlbnREYXRhTGlzdCxcclxuICAgICAgICAgICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgICAgICAgfSA9IF8uZ2V0KGpzb24sIFwiWzBdLmRhdGEuR2xpZGVMYXlvdXRfUXVlcnkucmVmZXJlbmNlRGF0YVJldHJpZXZlclwiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzOiBbLi4ucmVmZXJlbmNlRGF0YUxpc3QsIC4uLnJlZmVyZW5jZVJlY2VudERhdGFMaXN0XSxcclxuICAgICAgICAgICAgICAgIG1hdGNoZXNDb3VudDogdG90YWxDb3VudFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7dGFyZ2V0OiB7dmFsdWV9fSA9IGV2ZW50O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2xsZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJSZWYuY3VycmVudC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcmVmZXJlbmNlUmVjb3JkOiB7XHJcbiAgICAgICAgICAgICAgICBzeXNJZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlclJlZi5jdXJyZW50ID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZUxpc3QodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZmVyZW5jZUhhbmRsZUNsaWNrKHJlY29yZCkge1xyXG4gICAgICAgIGNvbnN0IHtzeXNJZCwgcmVmZXJlbmNlRGF0YX0gPSByZWNvcmQ7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByZWZlcmVuY2VSZWNvcmQ6IHtcclxuICAgICAgICAgICAgICAgIHN5c0lkLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlOiByZWZlcmVuY2VEYXRhWzBdLnZhbHVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2VcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5wcm9wcy5uYW1lLCBzeXNJZCwgcmVmZXJlbmNlRGF0YVswXS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdEhhbmRsZUNsaWNrKHJlY29yZCkge1xyXG4gICAgICAgIGNvbnN0IHtzeXNJZCwgcmVmZXJlbmNlRGF0YX0gPSByZWNvcmQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3RSZWNvcmRzID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogQXJyYXkuZnJvbShuZXcgU2V0KFsuLi50aGlzLnN0YXRlLmxpc3RSZWNvcmRzLnZhbHVlLCBzeXNJZF0pKSxcclxuICAgICAgICAgICAgZGlzcGxheVZhbHVlOiBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLnRoaXMuc3RhdGUubGlzdFJlY29yZHMuZGlzcGxheVZhbHVlLCByZWZlcmVuY2VEYXRhWzBdLnZhbHVlXSkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbGlzdFJlY29yZHMsXHJcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2VcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5wcm9wcy5uYW1lLCBsaXN0UmVjb3Jkcy52YWx1ZS50b1N0cmluZygpLCBsaXN0UmVjb3Jkcy5kaXNwbGF5VmFsdWUudG9TdHJpbmcoKSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0UmVmKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2socmVjb3JkKSB7XHJcbiAgICAgICAgY29uc3QgaXNSZWZlcmVuY2UgPSB0aGlzLnByb3BzPy50eXBlID09PSBcInJlZmVyZW5jZVwiXHJcbiAgICAgICAgcmV0dXJuIGlzUmVmZXJlbmNlID8gdGhpcy5yZWZlcmVuY2VIYW5kbGVDbGljayhyZWNvcmQpIDogdGhpcy5saXN0SGFuZGxlQ2xpY2socmVjb3JkKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXMoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiB0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVyKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogZmFsc2V9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJMaXN0UGlsbHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPElucHV0LlN0YXJ0Pnt0aGlzLnN0YXRlLmxpc3RSZWNvcmRzLmRpc3BsYXlWYWx1ZS5tYXAoKGxhYmVsKSA9PiA8UGlsbCBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuRGlzbWlzcz17dHJ1ZX0vPil9PC9JbnB1dC5TdGFydD5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHttYXRjaGVzQ291bnQsIHJlY29yZHMsIGxvYWRpbmcsIGxvYWRlZCwgZm9jdXNlZCwgcmVmZXJlbmNlUmVjb3JkfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHtsYWJlbCwgZGVjbGFyYXRpdmVVaUFjdGlvbnMsIHR5cGUsIG5hbWV9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgaGFzTWF0Y2hlcyA9IG1hdGNoZXNDb3VudCA+IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dSZXN1bHRzID0gbG9hZGluZyB8fCAobG9hZGVkICYmIGZvY3VzZWQpO1xyXG5cclxuICAgICAgICBjb25zdCBpc0xpc3QgPSB0eXBlID09PSBcImxpc3RcIjtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3Zi1yZWZlcmVuY2VcIiB0YWJJbmRleD1cIjBcIiBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9IG9uQmx1cj17dGhpcy5vbkJsdXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbFJlZj17dGhpcy5pbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dmLXJlZmVyZW5jZS0taW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVmZXJlbmNlUmVjb3JkLmRpc3BsYXlWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M9e2lzTGlzdCA/IFwibGlzdC1maWVsZC1ncm91cFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzTGlzdCAmJiB0aGlzLnJlbmRlckxpc3RQaWxscygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuRW5kPjxEZWNsYXJhdGl2ZVVJQWN0aW9ucyBkZWNsYXJhdGl2ZVVpQWN0aW9ucz17ZGVjbGFyYXRpdmVVaUFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZD17cmVmZXJlbmNlUmVjb3JkfS8+PC9JbnB1dC5FbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvd1Jlc3VsdHMgPyA8dWwgY2xhc3NOYW1lPVwicmVzdWx0XCIgc3R5bGU9e3t0b3A6IGAke3RoaXMuaW5wdXRSZWY/LmN1cnJlbnQ/Lm9mZnNldEhlaWdodCArIDEwfXB4YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxzcGFuIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5Mb2FkaW5nLi4uPC9zcGFuPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkZWQgJiYgIWhhc01hdGNoZXMgPyA8c3BhbiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+Tm8gUmVzdWx0cyBGb3VuZDwvc3Bhbj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGVkICYmIDxSZXN1bHQgcmVjb3Jkcz17cmVjb3Jkc30gb25DbGljaz17dGhpcy5vbkNsaWNrfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkxvb2t1cEZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgbmFtZTogXCJkZWZhdWx0XCIsXHJcbiAgICBvblZhbHVlQ2hhbmdlOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBkZWNsYXJhdGl2ZVVpQWN0aW9uczogW10sXHJcbiAgICB0eXBlOiBcInJlZmVyZW5jZVwiXHJcbn1cclxuXHJcbkxvb2t1cEZpZWxkLnByb3BUeXBlcyA9IHtcclxuICAgIG9uVmFsdWVDaGFuZ2U6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkZWNsYXJhdGl2ZVVpQWN0aW9uczogcHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbmFtZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHR5cGU6IHByb3BUeXBlcy5vbmVPZihbXCJyZWZlcmVuY2VcIiwgXCJsaXN0XCJdKSxcclxuICAgIHRhYmxlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdGFibGVSZWNvcmRTeXNJZDogcHJvcFR5cGVzLnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb29rdXBGaWVsZCJdfQ==