"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _graphqlRequest = _interopRequireDefault(require("../utils/graphqlRequest/graphqlRequest"));

var _template = require("./requests/graphql/template");

var _lodash = _interopRequireDefault(require("lodash"));

var _index = require("../index");

var _Result = _interopRequireDefault(require("./Result"));

var _Pill = _interopRequireDefault(require("../Pill/Pill"));

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LookupField = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _inputRef$current;

  var type = props.type,
      value = props.value,
      displayValue = props.displayValue,
      onValueChange = props.onValueChange,
      name = props.name,
      readonly = props.readonly,
      reference = props.reference,
      internalRef = props.internalRef,
      visible = props.visible,
      onInvalid = props.onInvalid,
      message = props.message,
      label = props.label,
      invalid = props.invalid,
      required = props.required,
      tableRecordSysId = props.tableRecordSysId,
      table = props.table;
  var controllerRef = (0, React.useRef)(null);
  var inputRef = (0, React.useRef)(null);
  var isList = type === "glide_list";

  var _useState = (0, React.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      records = _useState2[0],
      setRecords = _useState2[1];

  var _useState3 = (0, React.useState)({
    sysId: isList ? "" : value || null,
    displayValue: isList ? "" : displayValue || ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      referenceRecord = _useState4[0],
      setReferenceRecord = _useState4[1];

  var _useState5 = (0, React.useState)({
    value: (value === null || value === void 0 ? void 0 : value.split(",").filter(Boolean)) || [],
    displayValue: (displayValue === null || displayValue === void 0 ? void 0 : displayValue.split(",").filter(Boolean)) || []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      listRecords = _useState6[0],
      setListRecords = _useState6[1];

  var _useState7 = (0, React.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      searchValue = _useState8[0],
      setSearchValue = _useState8[1];

  var _useState9 = (0, React.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      matchesCount = _useState10[0],
      setMatchesCount = _useState10[1];

  var _useState11 = (0, React.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      loading = _useState12[0],
      setLoading = _useState12[1];

  var _useState13 = (0, React.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      loaded = _useState14[0],
      setLoaded = _useState14[1];

  var _useState15 = (0, React.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      focused = _useState16[0],
      setFocused = _useState16[1];

  var _useState17 = (0, React.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      preloader = _useState18[0],
      setPreloader = _useState18[1];

  var _useState19 = (0, React.useState)(0),
      _useState20 = _slicedToArray(_useState19, 2),
      repeat = _useState20[0],
      setRepeat = _useState20[1];

  var makeRequest = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(chars) {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _graphqlRequest["default"])({
                operationName: "reference",
                query: _template.query,
                variables: {
                  chars: chars,
                  encodedRecord: "",
                  field: name,
                  ignoreRefQual: false,
                  paginationLimit: 25,
                  serializedChanges: "{}",
                  sortBy: "",
                  sys_id: tableRecordSysId,
                  table: table
                },
                params: {
                  signal: controllerRef.current.signal
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

    return function makeRequest(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getReferenceList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(value) {
      var data, _$get, referenceDataList, referenceRecentDataList, totalCount;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setLoading(true);
              setRecords([]);
              setLoaded(false);
              _context2.next = 6;
              return makeRequest(value);

            case 6:
              data = _context2.sent;
              _$get = _lodash["default"].get(data, "[0].data.GlideLayout_Query.referenceDataRetriever"), referenceDataList = _$get.referenceDataList, referenceRecentDataList = _$get.referenceRecentDataList, totalCount = _$get.totalCount;
              setLoading(false);
              setRecords([].concat(_toConsumableArray(referenceDataList), _toConsumableArray(referenceRecentDataList)));
              setLoaded(true);
              setMatchesCount(totalCount);
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function getReferenceList(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onChange = function onChange(event) {
    var value = event.target.value;

    if (controllerRef !== null && controllerRef !== void 0 && controllerRef.current) {
      controllerRef.current.abort();
    }

    setReferenceRecord({
      sysId: null,
      displayValue: value
    });
    controllerRef.current = new AbortController();
    getReferenceList(value).then();
  };

  var referenceHandleClick = function referenceHandleClick(record) {
    var sysId = record.sysId,
        referenceData = record.referenceData;
    setReferenceRecord({
      sysId: sysId,
      displayValue: referenceData[0].value
    });
    setLoaded(false);
    onValueChange(name, sysId, referenceData[0].value);
  };

  var listHandleClick = function listHandleClick(record) {
    var sysId = record.sysId,
        referenceData = record.referenceData;
    var records = {
      value: Array.from(new Set([].concat(listRecords.value, [sysId]))).filter(Boolean),
      displayValue: Array.from(new Set([].concat(listRecords.displayValue, [referenceData[0].value]))).filter(Boolean)
    };
    setListRecords(function (_) {
      return records;
    });
    setReferenceRecord({
      sysId: null,
      displayValue: ""
    });
    setLoaded(false);
    onValueChange(name, records.value.filter(Boolean).join(","), records.displayValue.filter(Boolean).join(","));
  };

  var deleteValue = function deleteValue(_ref3) {
    var label = _ref3.label;
    var records = listRecords.displayValue.reduce(function (prev, curr, indx) {
      if (curr !== label) return prev;
      prev.value = listRecords.value.filter(function (_, i) {
        return i != indx;
      });
      prev.displayValue = listRecords.displayValue.filter(function (_, i) {
        return i != indx;
      });
      return prev;
    }, {
      value: [],
      displayValue: []
    });
    setListRecords(function (_) {
      return records;
    });
    onValueChange(name, records.value.toString(), records.displayValue);
  };

  var onClick = function onClick(record) {
    var isReference = type === "reference";
    return isReference ? referenceHandleClick(record) : listHandleClick(record);
  };

  var showPreloader = function showPreloader() {
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
  };

  var onFocus = function onFocus(event) {
    setFocused(true);

    if (controllerRef !== null && controllerRef !== void 0 && controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();
    !readonly && getReferenceList("**");
  };

  var onBlur = function onBlur(event) {
    setFocused(false);
  };

  var onPaste = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
      var value, charsArray, result, data, records;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (isList) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              event.preventDefault();
              event.stopPropagation();
              value = event.clipboardData.getData("Text");

              if (value) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return");

            case 7:
              setFocused(false);
              setPreloader(true);
              charsArray = value.split(/,|\\n/).map(function (chars) {
                return chars.trim();
              });
              setFocused(false);
              setPreloader(true);
              setRepeat(charsArray.length);
              _context3.next = 15;
              return fetch("api/x_aaro2_teamwork/swf_api/list", {
                method: "post",
                credentials: 'same-origin',
                body: JSON.stringify({
                  table: reference,
                  search_string: charsArray
                }),
                headers: {
                  'content-type': "application/json",
                  'X-Transaction-Source': window.transaction_source,
                  'X-UserToken': window.g_ck
                }
              });

            case 15:
              result = _context3.sent;
              _context3.next = 18;
              return result.json();

            case 18:
              data = _context3.sent;
              setFocused(false);
              setPreloader(false);
              records = {
                value: Array.from(new Set([].concat(_toConsumableArray(records.value), _toConsumableArray(data.map(function (_ref5) {
                  var sysId = _ref5.sysId;
                  return sysId;
                }))))),
                displayValue: Array.from(new Set([].concat(_toConsumableArray(records.displayValue), _toConsumableArray(data.map(function (_ref6) {
                  var referenceData = _ref6.referenceData;
                  return referenceData[0].value;
                })))))
              };
              setListRecords(records);
              setReferenceRecord({
                sysId: null,
                displayValue: ""
              });
              setLoaded(false);
              onValueChange(name, records.value.filter(Boolean).join(","), records.displayValue.filter(Boolean));

            case 26:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onPaste(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  (0, React.useEffect)(function () {
    var isList = type === "glide_list";

    if (isList) {
      var _value$split, _displayValue$split;

      var needUseLocalRecords = listRecords.value.toString().length > value.length;
      if (needUseLocalRecords) return setListRecords(_objectSpread(_objectSpread({}, listRecords), {}, {
        loading: false,
        focused: false
      }));
      setListRecords({
        value: (value || "").split(","),
        displayValue: (displayValue || "").split(","),
        loading: false,
        focused: false
      });
    }
  }, [type, value, displayValue]);

  var renderListPills = function renderListPills() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input.Start, {
      children: listRecords.displayValue.map(function (label) {
        if (!label) return null;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pill["default"], {
          label: label,
          canDismiss: true,
          onDelete: deleteValue
        }, label);
      })
    });
  };

  var clearValue = function clearValue() {
    setListRecords({
      value: "",
      displayValue: []
    });
    onValueChange(name, "", []);
  };

  var hasMatches = matchesCount > 0;
  var showResults = loading || loaded && focused;
  var hasValue = Boolean(referenceRecord.sysId);
  var showDeleteButton = !isList && hasValue && !readonly;
  var count = listRecords === null || listRecords === void 0 ? void 0 : listRecords.displayValue.filter(Boolean).length;
  return visible ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "swf-reference",
      tabIndex: "0",
      onFocus: onFocus,
      onBlur: onBlur,
      ref: function ref(elm) {
        return internalRef.current = elm;
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_index.Input, {
        internalRef: inputRef,
        className: "swf-reference--input",
        value: referenceRecord.displayValue,
        containerClass: isList ? "list-field-group" : "",
        label: "".concat(label, " ").concat(isList ? count + " selected" : ""),
        manageValue: true,
        name: name,
        onInput: onChange,
        readonly: readonly,
        onInvalid: onInvalid,
        onPaste: onPaste,
        invalid: invalid,
        required: required,
        message: message,
        children: [preloader && showPreloader(repeat), isList && !preloader && renderListPills(), !readonly && /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input.End, {
          children: showDeleteButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
            bare: true,
            variant: "tertiary",
            icon: "x",
            size: "md",
            tooltipContent: "Clear",
            onClick: clearValue
          })
        })]
      }), (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
        hideTail: true,
        manageOpened: true,
        opened: showResults,
        positionTarget: inputRef,
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
              width: "".concat((inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.offsetWidth) - 16, "px")
            },
            children: [loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "message",
              children: "Loading..."
            }) : null, loaded && !hasMatches ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "message",
              children: "No Results Found"
            }) : null, loaded && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Result["default"], {
              records: records,
              onClick: onClick
            })]
          })
        })
      })]
    })
  }) : null;
});
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
  visible: true,
  internalRef: /*#__PURE__*/React.createRef()
};
LookupField.propTypes = {
  onValueChange: _propTypes["default"].func,
  value: _propTypes["default"].string,
  displayValue: _propTypes["default"].string,
  declarativeUiActions: _propTypes["default"].array,
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
  visible: _propTypes["default"].bool,
  internalRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].any
  })])
};
var _default = LookupField;
exports["default"] = _default;