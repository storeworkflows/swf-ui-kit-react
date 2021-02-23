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
                    field: "watch_list",
                    ignoreRefQual: false,
                    paginationLimit: 25,
                    serializedChanges: "",
                    sortBy: "",
                    sys_id: "1ca56c38db1624103d9aca3239961996",
                    table: "x_mobi_swf_item"
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
  type: _propTypes["default"].oneOfType(["reference", "list"])
};
var _default = LookupField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb29rdXBGaWVsZC9Mb29rdXBGaWVsZC5qcyJdLCJuYW1lcyI6WyJMb29rdXBGaWVsZCIsInByb3BzIiwib25DaGFuZ2UiLCJiaW5kIiwiZ2V0UmVmZXJlbmNlTGlzdCIsIl8iLCJkZWJvdW5jZSIsImxpc3RIYW5kbGVDbGljayIsInJlZmVyZW5jZUhhbmRsZUNsaWNrIiwicmVuZGVyTGlzdFBpbGxzIiwib25DbGljayIsIm9uQmx1ciIsIm9uRm9jdXMiLCJjb250cm9sbGVyUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJpbnB1dFJlZiIsImlzTGlzdCIsInR5cGUiLCJzdGF0ZSIsInJlY29yZHMiLCJyZWZlcmVuY2VSZWNvcmQiLCJzeXNJZCIsInZhbHVlIiwiZGlzcGxheVZhbHVlIiwibGlzdFJlY29yZHMiLCJzcGxpdCIsInNlYXJjaFZhbHVlIiwibWF0Y2hlc0NvdW50IiwibG9hZGluZyIsImxvYWRlZCIsImZvY3VzZWQiLCJzZXRTdGF0ZSIsIm9wZXJhdGlvbk5hbWUiLCJxdWVyeSIsInZhcmlhYmxlcyIsImNoYXJzIiwiZW5jb2RlZFJlY29yZCIsImZpZWxkIiwiaWdub3JlUmVmUXVhbCIsInBhZ2luYXRpb25MaW1pdCIsInNlcmlhbGl6ZWRDaGFuZ2VzIiwic29ydEJ5Iiwic3lzX2lkIiwidGFibGUiLCJwYXJhbXMiLCJzaWduYWwiLCJjdXJyZW50IiwicmVzcG9uc2UiLCJqc29uIiwiZ2V0IiwicmVmZXJlbmNlRGF0YUxpc3QiLCJyZWZlcmVuY2VSZWNlbnREYXRhTGlzdCIsInRvdGFsQ291bnQiLCJjb25zb2xlIiwiZXJyb3IiLCJldmVudCIsInRhcmdldCIsImFib3J0IiwiQWJvcnRDb250cm9sbGVyIiwicmVjb3JkIiwicmVmZXJlbmNlRGF0YSIsIm9uVmFsdWVDaGFuZ2UiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwidG9TdHJpbmciLCJsb2ciLCJpc1JlZmVyZW5jZSIsIm1hcCIsImxhYmVsIiwiZGVjbGFyYXRpdmVVaUFjdGlvbnMiLCJoYXNNYXRjaGVzIiwic2hvd1Jlc3VsdHMiLCJzdHlsZXMiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJmdW5jIiwic3RyaW5nIiwib2JqZWN0Iiwib25lT2ZUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7OztBQUNGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIsK0JBQXhCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0JDLG1CQUFFQyxRQUFGLENBQVcsTUFBS0YsZ0JBQWhCLEVBQWtDLEdBQWxDLENBQXhCO0FBQ0EsVUFBS0csZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCSixJQUFyQiwrQkFBdkI7QUFDQSxVQUFLSyxvQkFBTCxHQUE0QixNQUFLQSxvQkFBTCxDQUEwQkwsSUFBMUIsK0JBQTVCO0FBQ0EsVUFBS00sZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCTixJQUFyQiwrQkFBdkI7QUFFQSxVQUFLTyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhUCxJQUFiLCtCQUFmO0FBQ0EsVUFBS1EsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWVIsSUFBWiwrQkFBZDtBQUNBLFVBQUtTLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFULElBQWIsK0JBQWY7QUFFQSxVQUFLVSxhQUFMLGdCQUFxQkMsS0FBSyxDQUFDQyxTQUFOLEVBQXJCO0FBQ0EsVUFBS0MsUUFBTCxnQkFBZ0JGLEtBQUssQ0FBQ0MsU0FBTixFQUFoQjtBQUVBLFVBQUtFLE1BQUwsR0FBYyxNQUFLaEIsS0FBTCxDQUFXaUIsSUFBWCxLQUFvQixNQUFsQztBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxPQUFPLEVBQUUsRUFEQTtBQUVUQyxNQUFBQSxlQUFlLEVBQUU7QUFDYkMsUUFBQUEsS0FBSyxFQUFFLE1BQUtMLE1BQUwsR0FBYyxFQUFkLGlEQUFtQixNQUFLaEIsS0FBTCxDQUFXc0IsS0FBOUIsc0RBQW1CLGtCQUFrQkEsS0FBckMseUVBQThDLElBRHhDO0FBRWJDLFFBQUFBLFlBQVksRUFBRSxNQUFLUCxNQUFMLEdBQWMsRUFBZCxrREFBbUIsTUFBS2hCLEtBQUwsQ0FBV3NCLEtBQTlCLHVEQUFtQixtQkFBa0JDLFlBQXJDLHlFQUFxRDtBQUZ0RCxPQUZSO0FBTVRDLE1BQUFBLFdBQVcsRUFBRTtBQUNURixRQUFBQSxLQUFLLGtEQUFFLE1BQUt0QixLQUFMLENBQVdzQixLQUFiLHVEQUFFLG1CQUFrQkEsS0FBbEIsQ0FBd0JHLEtBQXhCLENBQThCLEdBQTlCLENBQUYsMkVBQXdDLEVBRHBDO0FBRVRGLFFBQUFBLFlBQVksa0RBQUUsTUFBS3ZCLEtBQUwsQ0FBV3NCLEtBQWIsdURBQUUsbUJBQWtCQyxZQUFsQixDQUErQkUsS0FBL0IsQ0FBcUMsR0FBckMsQ0FBRiwyRUFBK0M7QUFGbEQsT0FOSjtBQVVUQyxNQUFBQSxXQUFXLEVBQUUsRUFWSjtBQVdUQyxNQUFBQSxZQUFZLEVBQUUsQ0FYTDtBQVlUQyxNQUFBQSxPQUFPLEVBQUUsS0FaQTtBQWFUQyxNQUFBQSxNQUFNLEVBQUUsS0FiQztBQWNUQyxNQUFBQSxPQUFPLEVBQUU7QUFkQSxLQUFiO0FBbEJlO0FBa0NsQjs7Ozs7c0ZBRUQsaUJBQXVCUixLQUF2QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUSxxQkFBS1MsUUFBTCxDQUFjO0FBQ1ZILGtCQUFBQSxPQUFPLEVBQUUsSUFEQztBQUVWVCxrQkFBQUEsT0FBTyxFQUFFLEVBRkM7QUFHVlUsa0JBQUFBLE1BQU0sRUFBRTtBQUhFLGlCQUFkO0FBRlI7QUFBQSx1QkFRK0IsZ0NBQWU7QUFDbENHLGtCQUFBQSxhQUFhLEVBQUUsV0FEbUI7QUFFbENDLGtCQUFBQSxLQUFLLEVBQUxBLGlCQUZrQztBQUdsQ0Msa0JBQUFBLFNBQVMsRUFBRTtBQUNQQyxvQkFBQUEsS0FBSyxFQUFFYixLQURBO0FBRVBjLG9CQUFBQSxhQUFhLEVBQUUsRUFGUjtBQUdQQyxvQkFBQUEsS0FBSyxFQUFFLFlBSEE7QUFJUEMsb0JBQUFBLGFBQWEsRUFBRSxLQUpSO0FBS1BDLG9CQUFBQSxlQUFlLEVBQUUsRUFMVjtBQU1QQyxvQkFBQUEsaUJBQWlCLEVBQUUsRUFOWjtBQU9QQyxvQkFBQUEsTUFBTSxFQUFFLEVBUEQ7QUFRUEMsb0JBQUFBLE1BQU0sRUFBRSxrQ0FSRDtBQVNQQyxvQkFBQUEsS0FBSyxFQUFFO0FBVEEsbUJBSHVCO0FBY2xDQyxrQkFBQUEsTUFBTSxFQUFFO0FBQ0pDLG9CQUFBQSxNQUFNLEVBQUUsS0FBS2pDLGFBQUwsQ0FBbUJrQyxPQUFuQixDQUEyQkQ7QUFEL0I7QUFkMEIsaUJBQWYsQ0FSL0I7O0FBQUE7QUFRY0UsZ0JBQUFBLFFBUmQ7QUFBQTtBQUFBLHVCQTBCMkJBLFFBQVEsQ0FBQ0MsSUFBVCxFQTFCM0I7O0FBQUE7QUEwQmNBLGdCQUFBQSxJQTFCZDtBQUFBLHdCQStCWTVDLG1CQUFFNkMsR0FBRixDQUFNRCxJQUFOLEVBQVksbURBQVosQ0EvQlosRUE0QllFLGlCQTVCWixTQTRCWUEsaUJBNUJaLEVBNkJZQyx1QkE3QlosU0E2QllBLHVCQTdCWixFQThCWUMsVUE5QlosU0E4QllBLFVBOUJaO0FBaUNRLHFCQUFLckIsUUFBTCxDQUFjO0FBQ1ZILGtCQUFBQSxPQUFPLEVBQUUsS0FEQztBQUVWQyxrQkFBQUEsTUFBTSxFQUFFLElBRkU7QUFHVlYsa0JBQUFBLE9BQU8sK0JBQU0rQixpQkFBTixzQkFBNEJDLHVCQUE1QixFQUhHO0FBSVZ4QixrQkFBQUEsWUFBWSxFQUFFeUI7QUFKSixpQkFBZDtBQWpDUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXlDUUMsZ0JBQUFBLE9BQU8sQ0FBQ0MsS0FBUjs7QUF6Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7OztXQTZDQSxrQkFBU0MsS0FBVCxFQUFnQjtBQUFBLFVBQ0lqQyxLQURKLEdBQ2NpQyxLQURkLENBQ0xDLE1BREssQ0FDSWxDLEtBREo7O0FBRVosVUFBSSxLQUFLVixhQUFMLENBQW1Ca0MsT0FBdkIsRUFBZ0M7QUFDNUIsYUFBS2xDLGFBQUwsQ0FBbUJrQyxPQUFuQixDQUEyQlcsS0FBM0I7QUFDSDs7QUFDRCxXQUFLMUIsUUFBTCxDQUFjO0FBQ1ZYLFFBQUFBLGVBQWUsRUFBRTtBQUNiQyxVQUFBQSxLQUFLLEVBQUUsSUFETTtBQUViRSxVQUFBQSxZQUFZLEVBQUVEO0FBRkQ7QUFEUCxPQUFkO0FBT0EsV0FBS1YsYUFBTCxDQUFtQmtDLE9BQW5CLEdBQTZCLElBQUlZLGVBQUosRUFBN0I7QUFFQSxXQUFLdkQsZ0JBQUwsQ0FBc0JtQixLQUF0QjtBQUNIOzs7V0FFRCw4QkFBcUJxQyxNQUFyQixFQUE2QjtBQUFBLFVBQ2xCdEMsS0FEa0IsR0FDTXNDLE1BRE4sQ0FDbEJ0QyxLQURrQjtBQUFBLFVBQ1h1QyxhQURXLEdBQ01ELE1BRE4sQ0FDWEMsYUFEVztBQUd6QixXQUFLN0IsUUFBTCxDQUFjO0FBQ1ZYLFFBQUFBLGVBQWUsRUFBRTtBQUNiQyxVQUFBQSxLQUFLLEVBQUxBLEtBRGE7QUFFYkUsVUFBQUEsWUFBWSxFQUFFcUMsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQnRDO0FBRmxCLFNBRFA7QUFLVk8sUUFBQUEsTUFBTSxFQUFFO0FBTEUsT0FBZDtBQVFBLFdBQUs3QixLQUFMLENBQVc2RCxhQUFYLENBQXlCLEtBQUs3RCxLQUFMLENBQVc4RCxJQUFwQyxFQUEwQ3pDLEtBQTFDLEVBQWlEdUMsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQnRDLEtBQWxFO0FBQ0g7OztXQUVELHlCQUFnQnFDLE1BQWhCLEVBQXdCO0FBQUEsVUFDYnRDLEtBRGEsR0FDV3NDLE1BRFgsQ0FDYnRDLEtBRGE7QUFBQSxVQUNOdUMsYUFETSxHQUNXRCxNQURYLENBQ05DLGFBRE07QUFHcEIsVUFBTXBDLFdBQVcsR0FBRztBQUNoQkYsUUFBQUEsS0FBSyxFQUFFeUMsS0FBSyxDQUFDQyxJQUFOLENBQVcsSUFBSUMsR0FBSiw4QkFBWSxLQUFLL0MsS0FBTCxDQUFXTSxXQUFYLENBQXVCRixLQUFuQyxJQUEwQ0QsS0FBMUMsR0FBWCxDQURTO0FBRWhCRSxRQUFBQSxZQUFZLEVBQUV3QyxLQUFLLENBQUNDLElBQU4sQ0FBVyxJQUFJQyxHQUFKLDhCQUFZLEtBQUsvQyxLQUFMLENBQVdNLFdBQVgsQ0FBdUJELFlBQW5DLElBQWlEcUMsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQnRDLEtBQWxFLEdBQVg7QUFGRSxPQUFwQjtBQUtBLFdBQUtTLFFBQUwsQ0FBYztBQUNWUCxRQUFBQSxXQUFXLEVBQVhBLFdBRFU7QUFFVkssUUFBQUEsTUFBTSxFQUFFO0FBRkUsT0FBZDtBQUtBLFdBQUs3QixLQUFMLENBQVc2RCxhQUFYLENBQXlCLEtBQUs3RCxLQUFMLENBQVc4RCxJQUFwQyxFQUEwQ3RDLFdBQVcsQ0FBQ0YsS0FBWixDQUFrQjRDLFFBQWxCLEVBQTFDLEVBQXdFMUMsV0FBVyxDQUFDRCxZQUFaLENBQXlCMkMsUUFBekIsRUFBeEU7QUFDSDs7O1dBRUQsNkJBQW9CO0FBQ2hCYixNQUFBQSxPQUFPLENBQUNjLEdBQVIsQ0FBWSxLQUFLcEQsUUFBakI7QUFDSDs7O1dBRUQsaUJBQVE0QyxNQUFSLEVBQWdCO0FBQUE7O0FBQ1osVUFBTVMsV0FBVyxHQUFHLHFCQUFLcEUsS0FBTCw0REFBWWlCLElBQVosTUFBcUIsV0FBekM7QUFDQSxhQUFPbUQsV0FBVyxHQUFHLEtBQUs3RCxvQkFBTCxDQUEwQm9ELE1BQTFCLENBQUgsR0FBdUMsS0FBS3JELGVBQUwsQ0FBcUJxRCxNQUFyQixDQUF6RDtBQUNIOzs7V0FFRCxpQkFBUUosS0FBUixFQUFlO0FBQ1gsV0FBS3hCLFFBQUwsQ0FBYztBQUFDRCxRQUFBQSxPQUFPLEVBQUU7QUFBVixPQUFkO0FBQ0g7OztXQUVELGdCQUFPeUIsS0FBUCxFQUFjO0FBQ1YsV0FBS3hCLFFBQUwsQ0FBYztBQUFDRCxRQUFBQSxPQUFPLEVBQUU7QUFBVixPQUFkO0FBQ0g7OztXQUVELDJCQUFrQjtBQUNkLDBCQUNJLHFCQUFDLFlBQUQsQ0FBTyxLQUFQO0FBQUEsa0JBQWMsS0FBS1osS0FBTCxDQUFXTSxXQUFYLENBQXVCRCxZQUF2QixDQUFvQzhDLEdBQXBDLENBQXdDLFVBQUNDLEtBQUQ7QUFBQSw4QkFBVyxxQkFBQyxnQkFBRDtBQUFNLFlBQUEsS0FBSyxFQUFFQSxLQUFiO0FBQ00sWUFBQSxVQUFVLEVBQUU7QUFEbEIsWUFBWDtBQUFBLFNBQXhDO0FBQWQsUUFESjtBQUlIOzs7V0FFRCxrQkFBUztBQUFBOztBQUFBLHdCQUNzRSxLQUFLcEQsS0FEM0U7QUFBQSxVQUNFUyxZQURGLGVBQ0VBLFlBREY7QUFBQSxVQUNnQlIsT0FEaEIsZUFDZ0JBLE9BRGhCO0FBQUEsVUFDeUJTLE9BRHpCLGVBQ3lCQSxPQUR6QjtBQUFBLFVBQ2tDQyxNQURsQyxlQUNrQ0EsTUFEbEM7QUFBQSxVQUMwQ0MsT0FEMUMsZUFDMENBLE9BRDFDO0FBQUEsVUFDbURWLGVBRG5ELGVBQ21EQSxlQURuRDtBQUFBLHlCQUc2QyxLQUFLcEIsS0FIbEQ7QUFBQSxVQUdFc0UsS0FIRixnQkFHRUEsS0FIRjtBQUFBLFVBR1NDLG9CQUhULGdCQUdTQSxvQkFIVDtBQUFBLFVBRytCdEQsSUFIL0IsZ0JBRytCQSxJQUgvQjtBQUFBLFVBR3FDNkMsSUFIckMsZ0JBR3FDQSxJQUhyQztBQUtMLFVBQU1VLFVBQVUsR0FBRzdDLFlBQVksR0FBRyxDQUFsQztBQUVBLFVBQU04QyxXQUFXLEdBQUc3QyxPQUFPLElBQUtDLE1BQU0sSUFBSUMsT0FBMUM7QUFFQSxVQUFNZCxNQUFNLEdBQUdDLElBQUksS0FBSyxNQUF4QjtBQUdBLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBTyxVQUFBLElBQUksRUFBQyxVQUFaO0FBQUEsb0JBQXdCeUQ7QUFBeEIsVUFESixlQUVJO0FBQUssVUFBQSxTQUFTLEVBQUMsZUFBZjtBQUErQixVQUFBLFFBQVEsRUFBQyxHQUF4QztBQUE0QyxVQUFBLE9BQU8sRUFBRSxLQUFLL0QsT0FBMUQ7QUFBbUUsVUFBQSxNQUFNLEVBQUUsS0FBS0QsTUFBaEY7QUFBQSxrQ0FDSSxzQkFBQyxZQUFEO0FBQ0ksWUFBQSxXQUFXLEVBQUUsS0FBS0ssUUFEdEI7QUFFSSxZQUFBLFNBQVMsRUFBQyxzQkFGZDtBQUdJLFlBQUEsS0FBSyxFQUFFSyxlQUFlLENBQUNHLFlBSDNCO0FBSUksWUFBQSxjQUFjLEVBQUVQLE1BQU0sR0FBRyxrQkFBSCxHQUF3QixFQUpsRDtBQUtJLFlBQUEsS0FBSyxFQUFFc0QsS0FMWDtBQU1JLFlBQUEsSUFBSSxFQUFFUixJQU5WO0FBT0ksWUFBQSxPQUFPLEVBQUUsS0FBSzdELFFBUGxCO0FBQUEsdUJBU0tlLE1BQU0sSUFBSSxLQUFLUixlQUFMLEVBVGYsZUFVSSxxQkFBQyxZQUFELENBQU8sR0FBUDtBQUFBLHFDQUFXLHFCQUFDLGdDQUFEO0FBQXNCLGdCQUFBLG9CQUFvQixFQUFFK0Qsb0JBQTVDO0FBQ3NCLGdCQUFBLE1BQU0sRUFBRW5EO0FBRDlCO0FBQVgsY0FWSjtBQUFBLFlBREosRUFjS3FELFdBQVcsZ0JBQUc7QUFBSSxZQUFBLFNBQVMsRUFBQyxRQUFkO0FBQXVCLFlBQUEsS0FBSyxFQUFFO0FBQUNFLGNBQUFBLEdBQUcsWUFBSyx3QkFBSzVELFFBQUwsMkZBQWUrQixPQUFmLGdGQUF3QjhCLFlBQXhCLElBQXVDLEVBQTVDO0FBQUosYUFBOUI7QUFBQSx1QkFDVmhELE9BQU8sZ0JBQUc7QUFBTSxjQUFBLFNBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUEsY0FBSCxHQUFpRCxJQUQ5QyxFQUVWQyxNQUFNLElBQUksQ0FBQzJDLFVBQVgsZ0JBQXdCO0FBQU0sY0FBQSxTQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBLGNBQXhCLEdBQTRFLElBRmxFLEVBR1YzQyxNQUFNLGlCQUFJLHFCQUFDLGtCQUFEO0FBQVEsY0FBQSxPQUFPLEVBQUVWLE9BQWpCO0FBQTBCLGNBQUEsT0FBTyxFQUFFLEtBQUtWO0FBQXhDLGNBSEE7QUFBQSxZQUFILEdBSUosSUFsQlo7QUFBQSxVQUZKO0FBQUEsUUFESjtBQXlCSDs7OztFQTlMcUJJLEtBQUssQ0FBQ2dFLFM7O0FBaU1oQzlFLFdBQVcsQ0FBQytFLFlBQVosR0FBMkI7QUFDdkJSLEVBQUFBLEtBQUssRUFBRSxFQURnQjtBQUV2QlIsRUFBQUEsSUFBSSxFQUFFLFNBRmlCO0FBR3ZCRCxFQUFBQSxhQUFhLEVBQUU7QUFBQSxXQUFNLEtBQUssQ0FBWDtBQUFBLEdBSFE7QUFJdkJVLEVBQUFBLG9CQUFvQixFQUFFLEVBSkM7QUFLdkJ0RCxFQUFBQSxJQUFJLEVBQUU7QUFMaUIsQ0FBM0I7QUFRQWxCLFdBQVcsQ0FBQ2dGLFNBQVosR0FBd0I7QUFDcEJsQixFQUFBQSxhQUFhLEVBQUVrQixzQkFBVUMsSUFETDtBQUVwQjFELEVBQUFBLEtBQUssRUFBRXlELHNCQUFVRSxNQUZHO0FBR3BCVixFQUFBQSxvQkFBb0IsRUFBRVEsc0JBQVVHLE1BSFo7QUFJcEJaLEVBQUFBLEtBQUssRUFBRVMsc0JBQVVFLE1BSkc7QUFLcEJuQixFQUFBQSxJQUFJLEVBQUVpQixzQkFBVUUsTUFMSTtBQU1wQmhFLEVBQUFBLElBQUksRUFBRThELHNCQUFVSSxTQUFWLENBQW9CLENBQUMsV0FBRCxFQUFjLE1BQWQsQ0FBcEI7QUFOYyxDQUF4QjtlQVNlcEYsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGdyYXBocWxSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9ncmFwaHFsUmVxdWVzdC9ncmFwaHFsUmVxdWVzdFwiO1xuaW1wb3J0IHtxdWVyeX0gZnJvbSBcIi4vZGF0YXNvdXJjZVwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHtJbnB1dH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgRGVjbGFyYXRpdmVVSUFjdGlvbnMgZnJvbSBcIi4vRGVjbGFyYXRpdmVVSUFjdGlvbnNcIjtcbmltcG9ydCBSZXN1bHQgZnJvbSBcIi4vUmVzdWx0XCI7XG5pbXBvcnQgUGlsbCBmcm9tIFwiLi4vUGlsbC9QaWxsXCI7XG5cbmNsYXNzIExvb2t1cEZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlTGlzdCA9IHRoaXMuZ2V0UmVmZXJlbmNlTGlzdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZUxpc3QgPSBfLmRlYm91bmNlKHRoaXMuZ2V0UmVmZXJlbmNlTGlzdCwgNTAwKTtcbiAgICAgICAgdGhpcy5saXN0SGFuZGxlQ2xpY2sgPSB0aGlzLmxpc3RIYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZmVyZW5jZUhhbmRsZUNsaWNrID0gdGhpcy5yZWZlcmVuY2VIYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlckxpc3RQaWxscyA9IHRoaXMucmVuZGVyTGlzdFBpbGxzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jb250cm9sbGVyUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuaW5wdXRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgICAgICB0aGlzLmlzTGlzdCA9IHRoaXMucHJvcHMudHlwZSA9PT0gXCJsaXN0XCI7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJlY29yZHM6IFtdLFxuICAgICAgICAgICAgcmVmZXJlbmNlUmVjb3JkOiB7XG4gICAgICAgICAgICAgICAgc3lzSWQ6IHRoaXMuaXNMaXN0ID8gXCJcIiA6IHRoaXMucHJvcHMudmFsdWU/LnZhbHVlID8/IG51bGwsXG4gICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlOiB0aGlzLmlzTGlzdCA/IFwiXCIgOiB0aGlzLnByb3BzLnZhbHVlPy5kaXNwbGF5VmFsdWUgPz8gXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpc3RSZWNvcmRzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWU/LnZhbHVlLnNwbGl0KFwiLFwiKSA/PyBbXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VmFsdWU6IHRoaXMucHJvcHMudmFsdWU/LmRpc3BsYXlWYWx1ZS5zcGxpdChcIixcIikgPz8gW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogXCJcIixcbiAgICAgICAgICAgIG1hdGNoZXNDb3VudDogMCxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGZvY3VzZWQ6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFJlZmVyZW5jZUxpc3QodmFsdWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVjb3JkczogW10sXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ3JhcGhxbFJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbk5hbWU6IFwicmVmZXJlbmNlXCIsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJzOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlZFJlY29yZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwid2F0Y2hfbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICBpZ25vcmVSZWZRdWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkxpbWl0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplZENoYW5nZXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRCeTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgc3lzX2lkOiBcIjFjYTU2YzM4ZGIxNjI0MTAzZDlhY2EzMjM5OTYxOTk2XCIsXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlOiBcInhfbW9iaV9zd2ZfaXRlbVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiB0aGlzLmNvbnRyb2xsZXJSZWYuY3VycmVudC5zaWduYWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlRGF0YUxpc3QsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlUmVjZW50RGF0YUxpc3QsXG4gICAgICAgICAgICAgICAgdG90YWxDb3VudFxuICAgICAgICAgICAgfSA9IF8uZ2V0KGpzb24sIFwiWzBdLmRhdGEuR2xpZGVMYXlvdXRfUXVlcnkucmVmZXJlbmNlRGF0YVJldHJpZXZlclwiKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlY29yZHM6IFsuLi5yZWZlcmVuY2VEYXRhTGlzdCwgLi4ucmVmZXJlbmNlUmVjZW50RGF0YUxpc3RdLFxuICAgICAgICAgICAgICAgIG1hdGNoZXNDb3VudDogdG90YWxDb3VudFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZShldmVudCkge1xuICAgICAgICBjb25zdCB7dGFyZ2V0OiB7dmFsdWV9fSA9IGV2ZW50O1xuICAgICAgICBpZiAodGhpcy5jb250cm9sbGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlclJlZi5jdXJyZW50LmFib3J0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZWZlcmVuY2VSZWNvcmQ6IHtcbiAgICAgICAgICAgICAgICBzeXNJZDogbnVsbCxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jb250cm9sbGVyUmVmLmN1cnJlbnQgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cbiAgICAgICAgdGhpcy5nZXRSZWZlcmVuY2VMaXN0KHZhbHVlKTtcbiAgICB9XG5cbiAgICByZWZlcmVuY2VIYW5kbGVDbGljayhyZWNvcmQpIHtcbiAgICAgICAgY29uc3Qge3N5c0lkLCByZWZlcmVuY2VEYXRhfSA9IHJlY29yZDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlZmVyZW5jZVJlY29yZDoge1xuICAgICAgICAgICAgICAgIHN5c0lkLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZTogcmVmZXJlbmNlRGF0YVswXS52YWx1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5wcm9wcy5uYW1lLCBzeXNJZCwgcmVmZXJlbmNlRGF0YVswXS52YWx1ZSk7XG4gICAgfVxuXG4gICAgbGlzdEhhbmRsZUNsaWNrKHJlY29yZCkge1xuICAgICAgICBjb25zdCB7c3lzSWQsIHJlZmVyZW5jZURhdGF9ID0gcmVjb3JkO1xuXG4gICAgICAgIGNvbnN0IGxpc3RSZWNvcmRzID0ge1xuICAgICAgICAgICAgdmFsdWU6IEFycmF5LmZyb20obmV3IFNldChbLi4udGhpcy5zdGF0ZS5saXN0UmVjb3Jkcy52YWx1ZSwgc3lzSWRdKSksXG4gICAgICAgICAgICBkaXNwbGF5VmFsdWU6IEFycmF5LmZyb20obmV3IFNldChbLi4udGhpcy5zdGF0ZS5saXN0UmVjb3Jkcy5kaXNwbGF5VmFsdWUsIHJlZmVyZW5jZURhdGFbMF0udmFsdWVdKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbGlzdFJlY29yZHMsXG4gICAgICAgICAgICBsb2FkZWQ6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlKHRoaXMucHJvcHMubmFtZSwgbGlzdFJlY29yZHMudmFsdWUudG9TdHJpbmcoKSwgbGlzdFJlY29yZHMuZGlzcGxheVZhbHVlLnRvU3RyaW5nKCkpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5wdXRSZWYpXG4gICAgfVxuXG4gICAgb25DbGljayhyZWNvcmQpIHtcbiAgICAgICAgY29uc3QgaXNSZWZlcmVuY2UgPSB0aGlzLnByb3BzPy50eXBlID09PSBcInJlZmVyZW5jZVwiXG4gICAgICAgIHJldHVybiBpc1JlZmVyZW5jZSA/IHRoaXMucmVmZXJlbmNlSGFuZGxlQ2xpY2socmVjb3JkKSA6IHRoaXMubGlzdEhhbmRsZUNsaWNrKHJlY29yZClcbiAgICB9XG5cbiAgICBvbkZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IHRydWV9KTtcbiAgICB9XG5cbiAgICBvbkJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogZmFsc2V9KTtcbiAgICB9XG5cbiAgICByZW5kZXJMaXN0UGlsbHMoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SW5wdXQuU3RhcnQ+e3RoaXMuc3RhdGUubGlzdFJlY29yZHMuZGlzcGxheVZhbHVlLm1hcCgobGFiZWwpID0+IDxQaWxsIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuRGlzbWlzcz17dHJ1ZX0vPil9PC9JbnB1dC5TdGFydD5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge21hdGNoZXNDb3VudCwgcmVjb3JkcywgbG9hZGluZywgbG9hZGVkLCBmb2N1c2VkLCByZWZlcmVuY2VSZWNvcmR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCB7bGFiZWwsIGRlY2xhcmF0aXZlVWlBY3Rpb25zLCB0eXBlLCBuYW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgaGFzTWF0Y2hlcyA9IG1hdGNoZXNDb3VudCA+IDA7XG5cbiAgICAgICAgY29uc3Qgc2hvd1Jlc3VsdHMgPSBsb2FkaW5nIHx8IChsb2FkZWQgJiYgZm9jdXNlZCk7XG5cbiAgICAgICAgY29uc3QgaXNMaXN0ID0gdHlwZSA9PT0gXCJsaXN0XCI7XG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dmLXJlZmVyZW5jZVwiIHRhYkluZGV4PVwiMFwiIG9uRm9jdXM9e3RoaXMub25Gb2N1c30gb25CbHVyPXt0aGlzLm9uQmx1cn0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWxSZWY9e3RoaXMuaW5wdXRSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2YtcmVmZXJlbmNlLS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVmZXJlbmNlUmVjb3JkLmRpc3BsYXlWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzPXtpc0xpc3QgPyBcImxpc3QtZmllbGQtZ3JvdXBcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzTGlzdCAmJiB0aGlzLnJlbmRlckxpc3RQaWxscygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LkVuZD48RGVjbGFyYXRpdmVVSUFjdGlvbnMgZGVjbGFyYXRpdmVVaUFjdGlvbnM9e2RlY2xhcmF0aXZlVWlBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkPXtyZWZlcmVuY2VSZWNvcmR9Lz48L0lucHV0LkVuZD5cbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dD5cbiAgICAgICAgICAgICAgICAgICAge3Nob3dSZXN1bHRzID8gPHVsIGNsYXNzTmFtZT1cInJlc3VsdFwiIHN0eWxlPXt7dG9wOiBgJHt0aGlzLmlucHV0UmVmPy5jdXJyZW50Py5vZmZzZXRIZWlnaHQgKyAxMH1weGB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPHNwYW4gY2xhc3NOYW1lPVwibWVzc2FnZVwiPkxvYWRpbmcuLi48L3NwYW4+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkZWQgJiYgIWhhc01hdGNoZXMgPyA8c3BhbiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+Tm8gUmVzdWx0cyBGb3VuZDwvc3Bhbj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRlZCAmJiA8UmVzdWx0IHJlY29yZHM9e3JlY29yZHN9IG9uQ2xpY2s9e3RoaXMub25DbGlja30vPn1cbiAgICAgICAgICAgICAgICAgICAgPC91bD4gOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbkxvb2t1cEZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBsYWJlbDogXCJcIixcbiAgICBuYW1lOiBcImRlZmF1bHRcIixcbiAgICBvblZhbHVlQ2hhbmdlOiAoKSA9PiB2b2lkIDAsXG4gICAgZGVjbGFyYXRpdmVVaUFjdGlvbnM6IFtdLFxuICAgIHR5cGU6IFwicmVmZXJlbmNlXCJcbn1cblxuTG9va3VwRmllbGQucHJvcFR5cGVzID0ge1xuICAgIG9uVmFsdWVDaGFuZ2U6IHByb3BUeXBlcy5mdW5jLFxuICAgIHZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlY2xhcmF0aXZlVWlBY3Rpb25zOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5hbWU6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbXCJyZWZlcmVuY2VcIiwgXCJsaXN0XCJdKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb29rdXBGaWVsZCJdfQ==