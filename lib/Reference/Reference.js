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

var _styles = _interopRequireDefault(require("./styles.css"));

var _DeclarativeUIActions = _interopRequireDefault(require("./DeclarativeUIActions"));

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

var Reference = /*#__PURE__*/function (_React$Component) {
  _inherits(Reference, _React$Component);

  var _super = _createSuper(Reference);

  function Reference(props) {
    var _this;

    _classCallCheck(this, Reference);

    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.getReferenceList = _this.getReferenceList.bind(_assertThisInitialized(_this));
    _this.getReferenceList = _lodash["default"].debounce(_this.getReferenceList, 500);
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.controllerRef = /*#__PURE__*/React.createRef();
    _this.state = {
      records: [],
      chosenRecord: {
        sysId: null,
        displayValue: ""
      },
      matchesCount: 0,
      loading: false,
      loaded: false,
      focused: true
    };
    return _this;
  }

  _createClass(Reference, [{
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
                    field: "opened_by",
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
        chosenRecord: {
          sysId: null,
          displayValue: value
        }
      });
      this.controllerRef.current = new AbortController();
      this.getReferenceList(value);
    }
  }, {
    key: "onClick",
    value: function onClick(record) {
      var sysId = record.sysId,
          referenceData = record.referenceData;
      this.setState({
        chosenRecord: {
          sysId: sysId,
          displayValue: referenceData[0].value
        },
        loaded: false
      });
      this.props.onValueChange(this.props.name, sysId, referenceData[0].value);
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
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          matchesCount = _this$state.matchesCount,
          records = _this$state.records,
          loading = _this$state.loading,
          loaded = _this$state.loaded,
          focused = _this$state.focused,
          chosenRecord = _this$state.chosenRecord;
      var _this$props = this.props,
          label = _this$props.label,
          declarativeUiActions = _this$props.declarativeUiActions,
          name = _this$props.name;
      var hasMatches = matchesCount > 0;
      var showResults = loading || loaded && focused;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "swf-reference",
          tabIndex: "0",
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input, {
            className: "swf-reference--input",
            value: chosenRecord.displayValue,
            label: label,
            name: name,
            onInput: this.onChange,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input.End, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DeclarativeUIActions["default"], {
                declarativeUiActions: declarativeUiActions,
                record: chosenRecord
              })
            })
          }), showResults ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
            className: "result",
            children: [loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "message",
              children: "Loading..."
            }) : null, loaded && !hasMatches ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "message",
              children: "No Results Found"
            }) : null, loaded && records.map(function (record) {
              var hasAdditionalInfo = record.referenceData.length > 1;
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
                className: "result--item",
                onMouseDown: function onMouseDown() {
                  return _this2.onClick(record);
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                  className: "main",
                  children: record.referenceData[0].value
                }), hasAdditionalInfo ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "additional",
                  children: record.referenceData[1].value
                }) : null]
              }, record.sysId);
            })]
          }) : null]
        })]
      });
    }
  }]);

  return Reference;
}(React.Component);

Reference.defaultProps = {
  label: "",
  name: "default",
  onValueChange: function onValueChange() {
    return void 0;
  },
  declarativeUiActions: []
};
Reference.propTypes = {
  onValueChange: _propTypes["default"].func,
  value: _propTypes["default"].string,
  declarativeUiActions: _propTypes["default"].object,
  label: _propTypes["default"].string,
  name: _propTypes["default"].string
};
var _default = Reference;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZWZlcmVuY2UvUmVmZXJlbmNlLmpzIl0sIm5hbWVzIjpbIlJlZmVyZW5jZSIsInByb3BzIiwib25DaGFuZ2UiLCJiaW5kIiwiZ2V0UmVmZXJlbmNlTGlzdCIsIl8iLCJkZWJvdW5jZSIsIm9uQ2xpY2siLCJvbkJsdXIiLCJvbkZvY3VzIiwiY29udHJvbGxlclJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwic3RhdGUiLCJyZWNvcmRzIiwiY2hvc2VuUmVjb3JkIiwic3lzSWQiLCJkaXNwbGF5VmFsdWUiLCJtYXRjaGVzQ291bnQiLCJsb2FkaW5nIiwibG9hZGVkIiwiZm9jdXNlZCIsInZhbHVlIiwic2V0U3RhdGUiLCJvcGVyYXRpb25OYW1lIiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJjaGFycyIsImVuY29kZWRSZWNvcmQiLCJmaWVsZCIsImlnbm9yZVJlZlF1YWwiLCJwYWdpbmF0aW9uTGltaXQiLCJzZXJpYWxpemVkQ2hhbmdlcyIsInNvcnRCeSIsInN5c19pZCIsInRhYmxlIiwicGFyYW1zIiwic2lnbmFsIiwiY3VycmVudCIsInJlc3BvbnNlIiwianNvbiIsImdldCIsInJlZmVyZW5jZURhdGFMaXN0IiwicmVmZXJlbmNlUmVjZW50RGF0YUxpc3QiLCJ0b3RhbENvdW50IiwiY29uc29sZSIsImVycm9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJhYm9ydCIsIkFib3J0Q29udHJvbGxlciIsInJlY29yZCIsInJlZmVyZW5jZURhdGEiLCJvblZhbHVlQ2hhbmdlIiwibmFtZSIsImxhYmVsIiwiZGVjbGFyYXRpdmVVaUFjdGlvbnMiLCJoYXNNYXRjaGVzIiwic2hvd1Jlc3VsdHMiLCJzdHlsZXMiLCJtYXAiLCJoYXNBZGRpdGlvbmFsSW5mbyIsImxlbmd0aCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztB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ZUosSUF6Qlo7QUFBQSxVQUZKO0FBQUEsUUFESjtBQWdDSDs7OztFQXJKbUJMLEtBQUssQ0FBQ29ELFM7O0FBd0o5Qi9ELFNBQVMsQ0FBQ2dFLFlBQVYsR0FBeUI7QUFDckJULEVBQUFBLEtBQUssRUFBRSxFQURjO0FBRXJCRCxFQUFBQSxJQUFJLEVBQUUsU0FGZTtBQUdyQkQsRUFBQUEsYUFBYSxFQUFFO0FBQUEsV0FBTSxLQUFLLENBQVg7QUFBQSxHQUhNO0FBSXJCRyxFQUFBQSxvQkFBb0IsRUFBRTtBQUpELENBQXpCO0FBT0F4RCxTQUFTLENBQUNpRSxTQUFWLEdBQXNCO0FBQ2xCWixFQUFBQSxhQUFhLEVBQUVZLHNCQUFVQyxJQURQO0FBRWxCNUMsRUFBQUEsS0FBSyxFQUFFMkMsc0JBQVVFLE1BRkM7QUFHbEJYLEVBQUFBLG9CQUFvQixFQUFFUyxzQkFBVUcsTUFIZDtBQUlsQmIsRUFBQUEsS0FBSyxFQUFFVSxzQkFBVUUsTUFKQztBQUtsQmIsRUFBQUEsSUFBSSxFQUFFVyxzQkFBVUU7QUFMRSxDQUF0QjtlQVFlbkUsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGdyYXBocWxSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9ncmFwaHFsUmVxdWVzdC9ncmFwaHFsUmVxdWVzdFwiO1xuaW1wb3J0IHtxdWVyeX0gZnJvbSBcIi4vZGF0YXNvdXJjZVwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHtJbnB1dH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBEZWNsYXJhdGl2ZVVJQWN0aW9ucyBmcm9tIFwiLi9EZWNsYXJhdGl2ZVVJQWN0aW9uc1wiO1xuXG5jbGFzcyBSZWZlcmVuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRSZWZlcmVuY2VMaXN0ID0gdGhpcy5nZXRSZWZlcmVuY2VMaXN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlTGlzdCA9IF8uZGVib3VuY2UodGhpcy5nZXRSZWZlcmVuY2VMaXN0LCA1MDApO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJlY29yZHM6IFtdLFxuICAgICAgICAgICAgY2hvc2VuUmVjb3JkOiB7XG4gICAgICAgICAgICAgICAgc3lzSWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWF0Y2hlc0NvdW50OiAwLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZm9jdXNlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UmVmZXJlbmNlTGlzdCh2YWx1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZWNvcmRzOiBbXSxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBncmFwaHFsUmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uTmFtZTogXCJyZWZlcmVuY2VcIixcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnM6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVkUmVjb3JkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJvcGVuZWRfYnlcIixcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlUmVmUXVhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25MaW1pdDogMjUsXG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRDaGFuZ2VzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBzb3J0Qnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHN5c19pZDogXCIxY2E1NmMzOGRiMTYyNDEwM2Q5YWNhMzIzOTk2MTk5NlwiLFxuICAgICAgICAgICAgICAgICAgICB0YWJsZTogXCJ4X21vYmlfc3dmX2l0ZW1cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHNpZ25hbDogdGhpcy5jb250cm9sbGVyUmVmLmN1cnJlbnQuc2lnbmFsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgIHJlZmVyZW5jZURhdGFMaXN0LFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZVJlY2VudERhdGFMaXN0LFxuICAgICAgICAgICAgICAgIHRvdGFsQ291bnRcbiAgICAgICAgICAgIH0gPSBfLmdldChqc29uLCBcIlswXS5kYXRhLkdsaWRlTGF5b3V0X1F1ZXJ5LnJlZmVyZW5jZURhdGFSZXRyaWV2ZXJcIik7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZWNvcmRzOiBbLi4ucmVmZXJlbmNlRGF0YUxpc3QsIC4uLnJlZmVyZW5jZVJlY2VudERhdGFMaXN0XSxcbiAgICAgICAgICAgICAgICBtYXRjaGVzQ291bnQ6IHRvdGFsQ291bnRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgY29uc3Qge3RhcmdldDoge3ZhbHVlfX0gPSBldmVudDtcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbGxlclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJSZWYuY3VycmVudC5hYm9ydCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hvc2VuUmVjb3JkOiB7XG4gICAgICAgICAgICAgICAgc3lzSWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuY29udHJvbGxlclJlZi5jdXJyZW50ID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlTGlzdCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgb25DbGljayhyZWNvcmQpIHtcbiAgICAgICAgY29uc3Qge3N5c0lkLCByZWZlcmVuY2VEYXRhfSA9IHJlY29yZDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNob3NlblJlY29yZDoge1xuICAgICAgICAgICAgICAgIHN5c0lkLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZTogcmVmZXJlbmNlRGF0YVswXS52YWx1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5wcm9wcy5uYW1lLCBzeXNJZCwgcmVmZXJlbmNlRGF0YVswXS52YWx1ZSk7XG4gICAgfVxuXG4gICAgb25Gb2N1cyhldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgb25CbHVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7bWF0Y2hlc0NvdW50LCByZWNvcmRzLCBsb2FkaW5nLCBsb2FkZWQsIGZvY3VzZWQsIGNob3NlblJlY29yZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IHtsYWJlbCwgZGVjbGFyYXRpdmVVaUFjdGlvbnMsIG5hbWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBoYXNNYXRjaGVzID0gbWF0Y2hlc0NvdW50ID4gMDtcblxuICAgICAgICBjb25zdCBzaG93UmVzdWx0cyA9IGxvYWRpbmcgfHwgKGxvYWRlZCAmJiBmb2N1c2VkKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dmLXJlZmVyZW5jZVwiIHRhYkluZGV4PVwiMFwiIG9uRm9jdXM9e3RoaXMub25Gb2N1c30gb25CbHVyPXt0aGlzLm9uQmx1cn0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dmLXJlZmVyZW5jZS0taW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Nob3NlblJlY29yZC5kaXNwbGF5VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LkVuZD48RGVjbGFyYXRpdmVVSUFjdGlvbnMgZGVjbGFyYXRpdmVVaUFjdGlvbnM9e2RlY2xhcmF0aXZlVWlBY3Rpb25zfSByZWNvcmQ9e2Nob3NlblJlY29yZH0vPjwvSW5wdXQuRW5kPlxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0PlxuICAgICAgICAgICAgICAgICAgICB7c2hvd1Jlc3VsdHMgPyA8dWwgY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxzcGFuIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5Mb2FkaW5nLi4uPC9zcGFuPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGVkICYmICFoYXNNYXRjaGVzID8gPHNwYW4gY2xhc3NOYW1lPVwibWVzc2FnZVwiPk5vIFJlc3VsdHMgRm91bmQ8L3NwYW4+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkZWQgJiYgcmVjb3Jkcy5tYXAocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNBZGRpdGlvbmFsSW5mbyA9IHJlY29yZC5yZWZlcmVuY2VEYXRhLmxlbmd0aCA+IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicmVzdWx0LS1pdGVtXCIga2V5PXtyZWNvcmQuc3lzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4gdGhpcy5vbkNsaWNrKHJlY29yZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1haW5cIj57cmVjb3JkLnJlZmVyZW5jZURhdGFbMF0udmFsdWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNBZGRpdGlvbmFsSW5mbyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkaXRpb25hbFwiPntyZWNvcmQucmVmZXJlbmNlRGF0YVsxXS52YWx1ZX08L3NwYW4+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD4gOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cblJlZmVyZW5jZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbGFiZWw6IFwiXCIsXG4gICAgbmFtZTogXCJkZWZhdWx0XCIsXG4gICAgb25WYWx1ZUNoYW5nZTogKCkgPT4gdm9pZCAwLFxuICAgIGRlY2xhcmF0aXZlVWlBY3Rpb25zOiBbXVxufVxuXG5SZWZlcmVuY2UucHJvcFR5cGVzID0ge1xuICAgIG9uVmFsdWVDaGFuZ2U6IHByb3BUeXBlcy5mdW5jLFxuICAgIHZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlY2xhcmF0aXZlVWlBY3Rpb25zOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5hbWU6IHByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmZXJlbmNlIl19