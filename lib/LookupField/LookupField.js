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

var _Result = _interopRequireDefault(require("./Result"));

var _Pill = _interopRequireDefault(require("../Pill/Pill"));

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    var _this$props$value, _this$props$displayVa;

    var _this;

    _classCallCheck(this, LookupField);

    _this = _super.call(this, props);

    _this.makeRequest = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(chars) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _graphqlRequest["default"])({
                  operationName: "reference",
                  query: _datasource.query,
                  variables: {
                    chars: chars,
                    encodedRecord: "",
                    field: _this.props.name,
                    ignoreRefQual: false,
                    paginationLimit: 25,
                    serializedChanges: "{}",
                    sortBy: "",
                    sys_id: _this.props.tableRecordSysId,
                    table: _this.props.table
                  },
                  params: {
                    signal: _this.controllerRef.current.signal
                  }
                });

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.onPaste = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
        var value, charsArray, result, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this.isList) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                event.preventDefault();
                event.stopPropagation();
                value = event.clipboardData.getData("Text");

                if (value) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return");

              case 7:
                _this.setState({
                  focused: false,
                  preloader: true
                });

                charsArray = value.split(/,|\\n/).map(function (chars) {
                  return chars.trim();
                });

                _this.setState({
                  focused: false,
                  preloader: true,
                  repeat: charsArray.length
                });

                _context2.next = 12;
                return fetch("api/x_aaro2_teamwork/swf_api/list?table=".concat(_this.props.reference, "&search_string=").concat(charsArray), {
                  credentials: 'same-origin',
                  headers: {
                    'content-type': "application/json",
                    'X-Transaction-Source': window.transaction_source,
                    'X-UserToken': window.g_ck
                  }
                });

              case 12:
                result = _context2.sent;
                _context2.next = 15;
                return result.json();

              case 15:
                data = _context2.sent;

                _this.setState({
                  focused: false,
                  preloader: false
                });

                data.forEach(function (record) {
                  return _this.listHandleClick(record);
                });

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.clearValue = function () {
      _this.setState({
        referenceList: {
          value: "",
          displayValue: ""
        }
      });

      _this.props.onValueChange(_this.props.name, "", "");
    };

    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.getReferenceList = _this.getReferenceList.bind(_assertThisInitialized(_this));
    _this.getReferenceList = _lodash["default"].debounce(_this.getReferenceList, 500);
    _this.listHandleClick = _this.listHandleClick.bind(_assertThisInitialized(_this));
    _this.referenceHandleClick = _this.referenceHandleClick.bind(_assertThisInitialized(_this));
    _this.deleteValue = _this.deleteValue.bind(_assertThisInitialized(_this));
    _this.renderListPills = _this.renderListPills.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.controllerRef = /*#__PURE__*/React.createRef();
    _this.inputRef = /*#__PURE__*/React.createRef();
    _this.isList = _this.props.type === "glide_list";
    _this.state = {
      records: [],
      referenceRecord: {
        sysId: _this.isList ? "" : _this.props.value || null,
        displayValue: _this.isList ? "" : _this.props.displayValue || ""
      },
      listRecords: {
        value: ((_this$props$value = _this.props.value) === null || _this$props$value === void 0 ? void 0 : _this$props$value.split(",").filter(Boolean)) || [],
        displayValue: ((_this$props$displayVa = _this.props.displayValue) === null || _this$props$displayVa === void 0 ? void 0 : _this$props$displayVa.split(",").filter(Boolean)) || []
      },
      searchValue: "",
      matchesCount: 0,
      loading: false,
      loaded: false,
      focused: false,
      preloader: false,
      repeat: 0
    };
    return _this;
  }

  _createClass(LookupField, [{
    key: "getReferenceList",
    value: function () {
      var _getReferenceList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(value) {
        var data, _$get, referenceDataList, referenceRecentDataList, totalCount;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.setState({
                  loading: true,
                  records: [],
                  loaded: false
                });
                _context3.next = 4;
                return this.makeRequest(value);

              case 4:
                data = _context3.sent;
                _$get = _lodash["default"].get(data, "[0].data.GlideLayout_Query.referenceDataRetriever"), referenceDataList = _$get.referenceDataList, referenceRecentDataList = _$get.referenceRecentDataList, totalCount = _$get.totalCount;
                this.setState({
                  loading: false,
                  loaded: true,
                  records: [].concat(_toConsumableArray(referenceDataList), _toConsumableArray(referenceRecentDataList)),
                  matchesCount: totalCount
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      function getReferenceList(_x3) {
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
      this.getReferenceList(value).then();
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
      this.props.onValueChange(this.props.name, listRecords.value.filter(Boolean).join(","), listRecords.displayValue.filter(Boolean).join(","));
    }
  }, {
    key: "deleteValue",
    value: function deleteValue(_ref3) {
      var label = _ref3.label;
      var value = new Map(this.state.listRecords.value.map(function (v, i) {
        return [i, v];
      }));
      var displayValue = new Map(this.state.listRecords.displayValue.map(function (v, i) {
        return [v, i];
      }));
      var id = displayValue.get(label);
      value["delete"](id);
      displayValue["delete"](label);
      var listRecords = {
        value: Array.from(value.values()).filter(Boolean),
        displayValue: Array.from(displayValue.keys()).filter(Boolean)
      };
      this.setState({
        listRecords: listRecords
      });
      this.props.onValueChange(this.props.name, listRecords.value.toString(), listRecords.displayValue.toString());
    }
  }, {
    key: "onClick",
    value: function onClick(record) {
      var _this$props;

      var isReference = ((_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.type) === "reference";
      return isReference ? this.referenceHandleClick(record) : this.listHandleClick(record);
    }
  }, {
    key: "showPreloader",
    value: function showPreloader() {
      var repeat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input.Start, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Preloader, {
          count: repeat,
          flexDirectionGeneral: "row",
          mainStyles: {
            backgroundColor: "transparent"
          },
          items: [{
            repeat: 1,
            width: "6rem",
            height: "2rem",
            itemStyles: {
              justifyContent: "space-between"
            },
            round: false
          }]
        })
      });
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
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      var isList = nextProps.type === "glide_list";

      if (isList) {
        var _nextProps$value$spli, _nextProps$value, _nextProps$displayVal, _nextProps$displayVal2;

        return this.setState({
          listRecords: {
            value: (_nextProps$value$spli = (_nextProps$value = nextProps.value) === null || _nextProps$value === void 0 ? void 0 : _nextProps$value.split(",")) !== null && _nextProps$value$spli !== void 0 ? _nextProps$value$spli : [],
            displayValue: (_nextProps$displayVal = (_nextProps$displayVal2 = nextProps.displayValue) === null || _nextProps$displayVal2 === void 0 ? void 0 : _nextProps$displayVal2.split(",")) !== null && _nextProps$displayVal !== void 0 ? _nextProps$displayVal : [],
            loading: false,
            focused: false
          }
        });
      }

      return this.setState({
        referenceRecord: {
          sysId: nextProps.value || null,
          displayValue: nextProps.displayValue || "",
          loading: false,
          focused: false
        }
      });
    }
  }, {
    key: "renderListPills",
    value: function renderListPills() {
      var _this2 = this;

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input.Start, {
        children: this.state.listRecords.displayValue.map(function (label) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pill["default"], {
            label: label,
            canDismiss: true,
            onDelete: _this2.deleteValue
          });
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$inputRef, _this$inputRef$curren, _jsx2;

      var _this$state = this.state,
          matchesCount = _this$state.matchesCount,
          records = _this$state.records,
          loading = _this$state.loading,
          loaded = _this$state.loaded,
          preloader = _this$state.preloader,
          repeat = _this$state.repeat,
          focused = _this$state.focused,
          referenceRecord = _this$state.referenceRecord,
          listRecords = _this$state.listRecords;
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
      var isList = type === "glide_list";
      var hasValue = Boolean(referenceRecord.sysId);
      var showDeleteButton = !isList && hasValue && !readonly;
      var count = listRecords.displayValue.length;
      return visible ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
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
            label: "".concat(label, " ").concat(isList ? count + " selected" : ""),
            name: name,
            onInput: this.onChange,
            readonly: readonly,
            onInvalid: onInvalid,
            onPaste: this.onPaste,
            invalid: invalid,
            required: required,
            message: message,
            children: [preloader && this.showPreloader(repeat), isList && !preloader && this.renderListPills(), !readonly && /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input.End, {
              children: showDeleteButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
                bare: true,
                variant: "tertiary",
                icon: "x",
                size: "md",
                tooltipContent: "Clear",
                onClick: this.clearValue
              })
            })]
          }), this.inputRef && this.inputRef.current && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], (_jsx2 = {
            hideTail: true
          }, _defineProperty(_jsx2, "hideTail", true), _defineProperty(_jsx2, "manageOpened", true), _defineProperty(_jsx2, "opened", showResults), _defineProperty(_jsx2, "positionTarget", this.inputRef), _defineProperty(_jsx2, "positions", [{
            target: "bottom-center",
            content: "top-center"
          }, {
            target: "top-center",
            content: "bottom-center"
          }]), _defineProperty(_jsx2, "children", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
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
          })), _jsx2))]
        })
      }) : null;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var isList = nextProps.type === "glide_list";

      if (isList) {
        var _nextProps$value$spli2, _nextProps$value2, _nextProps$displayVal3, _nextProps$displayVal4;

        return {
          listRecords: {
            value: (_nextProps$value$spli2 = (_nextProps$value2 = nextProps.value) === null || _nextProps$value2 === void 0 ? void 0 : _nextProps$value2.split(",")) !== null && _nextProps$value$spli2 !== void 0 ? _nextProps$value$spli2 : [],
            displayValue: (_nextProps$displayVal3 = (_nextProps$displayVal4 = nextProps.displayValue) === null || _nextProps$displayVal4 === void 0 ? void 0 : _nextProps$displayVal4.split(",")) !== null && _nextProps$displayVal3 !== void 0 ? _nextProps$displayVal3 : []
          }
        };
      }

      return {
        referenceRecord: {
          sysId: nextProps.value || null,
          displayValue: nextProps.displayValue || ""
        }
      };
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
  type: _propTypes["default"].oneOf(["reference", "glide_list"]),
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