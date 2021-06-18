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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
                query: _datasource.query,
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
    var listRecords = {
      value: Array.from(new Set([].concat(_toConsumableArray(listRecords.value), [sysId]))),
      displayValue: Array.from(new Set([].concat(_toConsumableArray(listRecords.displayValue), [referenceData[0].value])))
    };
    setListRecords(listRecords);
    setReferenceRecord({
      sysId: null,
      displayValue: ""
    });
    setLoaded(false);
    onValueChange(name, listRecords.value.filter(Boolean).join(","), listRecords.displayValue.filter(Boolean).join(","));
  };

  var deleteValue = function deleteValue(_ref3) {
    var label = _ref3.label;
    var value = new Map(listRecords.value.map(function (v, i) {
      return [i, v];
    }));
    var displayValue = new Map(listRecords.displayValue.map(function (v, i) {
      return [v, i];
    }));
    var id = displayValue.get(label);
    value["delete"](id);
    displayValue["delete"](label);
    var listRecords = {
      value: Array.from(value.values()).filter(Boolean),
      displayValue: Array.from(displayValue.keys()).filter(Boolean)
    };
    setListRecords(listRecords);
    onValueChange(name, listRecords.value.toString(), listRecords.displayValue);
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
      var value, charsArray, result, data, listRecords;
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
              listRecords = {
                value: Array.from(new Set([].concat(_toConsumableArray(listRecords.value), _toConsumableArray(data.map(function (_ref5) {
                  var sysId = _ref5.sysId;
                  return sysId;
                }))))),
                displayValue: Array.from(new Set([].concat(_toConsumableArray(listRecords.displayValue), _toConsumableArray(data.map(function (_ref6) {
                  var referenceData = _ref6.referenceData;
                  return referenceData[0].value;
                })))))
              };
              setListRecords(listRecords);
              setReferenceRecord({
                sysId: null,
                displayValue: ""
              });
              setLoaded(false);
              onValueChange(name, listRecords.value.filter(Boolean).join(","), listRecords.displayValue.filter(Boolean));

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

      setListRecords({
        value: (_value$split = value === null || value === void 0 ? void 0 : value.split(",")) !== null && _value$split !== void 0 ? _value$split : [],
        displayValue: (_displayValue$split = displayValue === null || displayValue === void 0 ? void 0 : displayValue.split(",")) !== null && _displayValue$split !== void 0 ? _displayValue$split : [],
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
  visible: _propTypes["default"].bool,
  internalRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].any
  })])
};
var _default = LookupField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb29rdXBGaWVsZC9Mb29rdXBGaWVsZC5qcyJdLCJuYW1lcyI6WyJMb29rdXBGaWVsZCIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwidHlwZSIsInZhbHVlIiwiZGlzcGxheVZhbHVlIiwib25WYWx1ZUNoYW5nZSIsIm5hbWUiLCJyZWFkb25seSIsInJlZmVyZW5jZSIsImludGVybmFsUmVmIiwidmlzaWJsZSIsIm9uSW52YWxpZCIsIm1lc3NhZ2UiLCJsYWJlbCIsImludmFsaWQiLCJyZXF1aXJlZCIsInRhYmxlUmVjb3JkU3lzSWQiLCJ0YWJsZSIsImNvbnRyb2xsZXJSZWYiLCJpbnB1dFJlZiIsImlzTGlzdCIsInJlY29yZHMiLCJzZXRSZWNvcmRzIiwic3lzSWQiLCJyZWZlcmVuY2VSZWNvcmQiLCJzZXRSZWZlcmVuY2VSZWNvcmQiLCJzcGxpdCIsImZpbHRlciIsIkJvb2xlYW4iLCJsaXN0UmVjb3JkcyIsInNldExpc3RSZWNvcmRzIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsIm1hdGNoZXNDb3VudCIsInNldE1hdGNoZXNDb3VudCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9hZGVkIiwic2V0TG9hZGVkIiwiZm9jdXNlZCIsInNldEZvY3VzZWQiLCJwcmVsb2FkZXIiLCJzZXRQcmVsb2FkZXIiLCJyZXBlYXQiLCJzZXRSZXBlYXQiLCJtYWtlUmVxdWVzdCIsImNoYXJzIiwib3BlcmF0aW9uTmFtZSIsInF1ZXJ5IiwidmFyaWFibGVzIiwiZW5jb2RlZFJlY29yZCIsImZpZWxkIiwiaWdub3JlUmVmUXVhbCIsInBhZ2luYXRpb25MaW1pdCIsInNlcmlhbGl6ZWRDaGFuZ2VzIiwic29ydEJ5Iiwic3lzX2lkIiwicGFyYW1zIiwic2lnbmFsIiwiY3VycmVudCIsInJlc3BvbnNlIiwianNvbiIsImdldFJlZmVyZW5jZUxpc3QiLCJkYXRhIiwiXyIsImdldCIsInJlZmVyZW5jZURhdGFMaXN0IiwicmVmZXJlbmNlUmVjZW50RGF0YUxpc3QiLCJ0b3RhbENvdW50IiwiY29uc29sZSIsImVycm9yIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImFib3J0IiwiQWJvcnRDb250cm9sbGVyIiwidGhlbiIsInJlZmVyZW5jZUhhbmRsZUNsaWNrIiwicmVjb3JkIiwicmVmZXJlbmNlRGF0YSIsImxpc3RIYW5kbGVDbGljayIsIkFycmF5IiwiZnJvbSIsIlNldCIsImpvaW4iLCJkZWxldGVWYWx1ZSIsIk1hcCIsIm1hcCIsInYiLCJpIiwiaWQiLCJ2YWx1ZXMiLCJrZXlzIiwidG9TdHJpbmciLCJvbkNsaWNrIiwiaXNSZWZlcmVuY2UiLCJzaG93UHJlbG9hZGVyIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJpdGVtU3R5bGVzIiwianVzdGlmeUNvbnRlbnQiLCJyb3VuZCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvblBhc3RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImNoYXJzQXJyYXkiLCJ0cmltIiwibGVuZ3RoIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VhcmNoX3N0cmluZyIsImhlYWRlcnMiLCJ3aW5kb3ciLCJ0cmFuc2FjdGlvbl9zb3VyY2UiLCJnX2NrIiwicmVzdWx0IiwicmVuZGVyTGlzdFBpbGxzIiwiY2xlYXJWYWx1ZSIsImhhc01hdGNoZXMiLCJzaG93UmVzdWx0cyIsImhhc1ZhbHVlIiwic2hvd0RlbGV0ZUJ1dHRvbiIsImNvdW50IiwiZWxtIiwiY29udGVudCIsIm9mZnNldFdpZHRoIiwiZGVmYXVsdFByb3BzIiwiZGVjbGFyYXRpdmVVaUFjdGlvbnMiLCJjcmVhdGVSZWYiLCJwcm9wVHlwZXMiLCJmdW5jIiwic3RyaW5nIiwib2JqZWN0Iiwib25lT2YiLCJib29sIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3Rh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LE1BSmtCO0FBS3ZDUyxJQUFBQSxRQUFRLEVBQUVOLHNCQUFVTztBQUxtQixHQUFoQixDQUFsQixDQWRXO0FBcUJwQjdJLEVBQUFBLE9BQU8sRUFBRWdJLHNCQUFVSyxJQXJCQztBQXNCcEJ0SSxFQUFBQSxXQUFXLEVBQUV1SSxzQkFBVVEsU0FBVixDQUFvQixDQUM3QmQsc0JBQVVDLElBRG1CLEVBRTdCRCxzQkFBVVEsS0FBVixDQUFnQjtBQUFDdkYsSUFBQUEsT0FBTyxFQUFFK0Usc0JBQVVlO0FBQXBCLEdBQWhCLENBRjZCLENBQXBCO0FBdEJPLENBQXhCO2VBNkJlNUosVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBncmFwaHFsUmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvZ3JhcGhxbFJlcXVlc3QvZ3JhcGhxbFJlcXVlc3RcIjtcclxuaW1wb3J0IHtxdWVyeX0gZnJvbSBcIi4vZGF0YXNvdXJjZVwiO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7QnV0dG9uLCBJbnB1dCwgUHJlbG9hZGVyfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IFJlc3VsdCBmcm9tIFwiLi9SZXN1bHRcIjtcclxuaW1wb3J0IFBpbGwgZnJvbSBcIi4uL1BpbGwvUGlsbFwiO1xyXG5pbXBvcnQgUG9wb3ZlciBmcm9tIFwiLi4vUG9wb3Zlci9Qb3BvdmVyXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTG9va3VwRmllbGQgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdHlwZSwgdmFsdWUsIGRpc3BsYXlWYWx1ZSwgb25WYWx1ZUNoYW5nZSwgbmFtZSwgcmVhZG9ubHksIHJlZmVyZW5jZSxcclxuICAgICAgICBpbnRlcm5hbFJlZiwgdmlzaWJsZSwgb25JbnZhbGlkLCBtZXNzYWdlLCBsYWJlbCwgaW52YWxpZCwgcmVxdWlyZWQsXHJcbiAgICAgICAgdGFibGVSZWNvcmRTeXNJZCwgdGFibGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBjb250cm9sbGVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaXNMaXN0ID0gdHlwZSA9PT0gXCJnbGlkZV9saXN0XCI7XHJcblxyXG4gICAgY29uc3QgW3JlY29yZHMsIHNldFJlY29yZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3JlZmVyZW5jZVJlY29yZCwgc2V0UmVmZXJlbmNlUmVjb3JkXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBzeXNJZDogaXNMaXN0ID8gXCJcIiA6IHZhbHVlIHx8IG51bGwsXHJcbiAgICAgICAgZGlzcGxheVZhbHVlOiBpc0xpc3QgPyBcIlwiIDogZGlzcGxheVZhbHVlIHx8IFwiXCJcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2xpc3RSZWNvcmRzLCBzZXRMaXN0UmVjb3Jkc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdmFsdWU6IHZhbHVlPy5zcGxpdChcIixcIikuZmlsdGVyKEJvb2xlYW4pIHx8IFtdLFxyXG4gICAgICAgIGRpc3BsYXlWYWx1ZTogZGlzcGxheVZhbHVlPy5zcGxpdChcIixcIikuZmlsdGVyKEJvb2xlYW4pIHx8IFtdXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFttYXRjaGVzQ291bnQsIHNldE1hdGNoZXNDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHJlbG9hZGVyLCBzZXRQcmVsb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlcGVhdCwgc2V0UmVwZWF0XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHJcbiAgICBjb25zdCBtYWtlUmVxdWVzdCA9IGFzeW5jIChjaGFycykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ3JhcGhxbFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICBvcGVyYXRpb25OYW1lOiBcInJlZmVyZW5jZVwiLFxyXG4gICAgICAgICAgICBxdWVyeSxcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFycyxcclxuICAgICAgICAgICAgICAgIGVuY29kZWRSZWNvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogbmFtZSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZVJlZlF1YWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbkxpbWl0OiAyNSxcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRDaGFuZ2VzOiBcInt9XCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0Qnk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzeXNfaWQ6IHRhYmxlUmVjb3JkU3lzSWQsXHJcbiAgICAgICAgICAgICAgICB0YWJsZTogdGFibGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBzaWduYWw6IGNvbnRyb2xsZXJSZWYuY3VycmVudC5zaWduYWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UmVmZXJlbmNlTGlzdCA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldFJlY29yZHMoW10pO1xyXG4gICAgICAgICAgICBzZXRMb2FkZWQoZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IG1ha2VSZXF1ZXN0KHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZURhdGFMaXN0LFxyXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlUmVjZW50RGF0YUxpc3QsXHJcbiAgICAgICAgICAgICAgICB0b3RhbENvdW50XHJcbiAgICAgICAgICAgIH0gPSBfLmdldChkYXRhLCBcIlswXS5kYXRhLkdsaWRlTGF5b3V0X1F1ZXJ5LnJlZmVyZW5jZURhdGFSZXRyaWV2ZXJcIik7XHJcblxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0UmVjb3JkcyhbLi4ucmVmZXJlbmNlRGF0YUxpc3QsIC4uLnJlZmVyZW5jZVJlY2VudERhdGFMaXN0XSk7XHJcbiAgICAgICAgICAgIHNldExvYWRlZCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0TWF0Y2hlc0NvdW50KHRvdGFsQ291bnQpXHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHt0YXJnZXQ6IHt2YWx1ZX19ID0gZXZlbnQ7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xsZXJSZWY/LmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY29udHJvbGxlclJlZi5jdXJyZW50LmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFJlZmVyZW5jZVJlY29yZCh7XHJcbiAgICAgICAgICAgIHN5c0lkOiBudWxsLFxyXG4gICAgICAgICAgICBkaXNwbGF5VmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29udHJvbGxlclJlZi5jdXJyZW50ID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICAgIGdldFJlZmVyZW5jZUxpc3QodmFsdWUpLnRoZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWZlcmVuY2VIYW5kbGVDbGljayA9IChyZWNvcmQpID0+IHtcclxuICAgICAgICBjb25zdCB7c3lzSWQsIHJlZmVyZW5jZURhdGF9ID0gcmVjb3JkO1xyXG5cclxuICAgICAgICBzZXRSZWZlcmVuY2VSZWNvcmQoe1xyXG4gICAgICAgICAgICBzeXNJZCxcclxuICAgICAgICAgICAgZGlzcGxheVZhbHVlOiByZWZlcmVuY2VEYXRhWzBdLnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0TG9hZGVkKGZhbHNlKVxyXG4gICAgICAgIG9uVmFsdWVDaGFuZ2UobmFtZSwgc3lzSWQsIHJlZmVyZW5jZURhdGFbMF0udmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpc3RIYW5kbGVDbGljayA9IChyZWNvcmQpID0+IHtcclxuICAgICAgICBjb25zdCB7c3lzSWQsIHJlZmVyZW5jZURhdGF9ID0gcmVjb3JkO1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0UmVjb3JkcyA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IEFycmF5LmZyb20obmV3IFNldChbLi4ubGlzdFJlY29yZHMudmFsdWUsIHN5c0lkXSkpLFxyXG4gICAgICAgICAgICBkaXNwbGF5VmFsdWU6IEFycmF5LmZyb20obmV3IFNldChbLi4ubGlzdFJlY29yZHMuZGlzcGxheVZhbHVlLCByZWZlcmVuY2VEYXRhWzBdLnZhbHVlXSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExpc3RSZWNvcmRzKGxpc3RSZWNvcmRzKTtcclxuICAgICAgICBzZXRSZWZlcmVuY2VSZWNvcmQoe1xyXG4gICAgICAgICAgICBzeXNJZDogbnVsbCxcclxuICAgICAgICAgICAgZGlzcGxheVZhbHVlOiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0TG9hZGVkKGZhbHNlKVxyXG5cclxuICAgICAgICBvblZhbHVlQ2hhbmdlKG5hbWUsIGxpc3RSZWNvcmRzLnZhbHVlLmZpbHRlcihCb29sZWFuKS5qb2luKFwiLFwiKSwgbGlzdFJlY29yZHMuZGlzcGxheVZhbHVlLmZpbHRlcihCb29sZWFuKS5qb2luKFwiLFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlVmFsdWUgPSAoe2xhYmVsfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IE1hcChsaXN0UmVjb3Jkcy52YWx1ZS5tYXAoKHYsIGkpID0+IFtpLCB2XSkpO1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IG5ldyBNYXAobGlzdFJlY29yZHMuZGlzcGxheVZhbHVlLm1hcCgodiwgaSkgPT4gW3YsIGldKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlkID0gZGlzcGxheVZhbHVlLmdldChsYWJlbCk7XHJcbiAgICAgICAgdmFsdWVbXCJkZWxldGVcIl0oaWQpO1xyXG4gICAgICAgIGRpc3BsYXlWYWx1ZVtcImRlbGV0ZVwiXShsYWJlbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3RSZWNvcmRzID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogQXJyYXkuZnJvbSh2YWx1ZS52YWx1ZXMoKSkuZmlsdGVyKEJvb2xlYW4pLFxyXG4gICAgICAgICAgICBkaXNwbGF5VmFsdWU6IEFycmF5LmZyb20oZGlzcGxheVZhbHVlLmtleXMoKSkuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRMaXN0UmVjb3JkcyhsaXN0UmVjb3JkcylcclxuICAgICAgICBvblZhbHVlQ2hhbmdlKG5hbWUsIGxpc3RSZWNvcmRzLnZhbHVlLnRvU3RyaW5nKCksIGxpc3RSZWNvcmRzLmRpc3BsYXlWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DbGljayA9IChyZWNvcmQpID0+IHtcclxuICAgICAgICBjb25zdCBpc1JlZmVyZW5jZSA9IHR5cGUgPT09IFwicmVmZXJlbmNlXCJcclxuICAgICAgICByZXR1cm4gaXNSZWZlcmVuY2UgPyByZWZlcmVuY2VIYW5kbGVDbGljayhyZWNvcmQpIDogbGlzdEhhbmRsZUNsaWNrKHJlY29yZClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93UHJlbG9hZGVyID0gKHJlcGVhdCA9IDQpID0+IHtcclxuICAgICAgICByZXR1cm4gPElucHV0LlN0YXJ0PlxyXG4gICAgICAgICAgICA8UHJlbG9hZGVyIGNvdW50PXtyZXBlYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbkdlbmVyYWw9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG1haW5TdHlsZXM9e3tiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNnJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjJyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1TdHlsZXM6IHtqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXX0vPlxyXG4gICAgICAgIDwvSW5wdXQuU3RhcnQ+XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25Gb2N1cyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEZvY3VzZWQodHJ1ZSlcclxuICAgICAgICBpZiAoY29udHJvbGxlclJlZj8uY3VycmVudCkge1xyXG4gICAgICAgICAgICBjb250cm9sbGVyUmVmLmN1cnJlbnQuYWJvcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRyb2xsZXJSZWYuY3VycmVudCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgICAhcmVhZG9ubHkgJiYgZ2V0UmVmZXJlbmNlTGlzdChcIioqXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQmx1ciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEZvY3VzZWQoZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25QYXN0ZSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghaXNMaXN0KSByZXR1cm5cclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoXCJUZXh0XCIpO1xyXG5cclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNldEZvY3VzZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldFByZWxvYWRlcih0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhcnNBcnJheSA9IHZhbHVlLnNwbGl0KC8sfFxcXFxuLykubWFwKGNoYXJzID0+IGNoYXJzLnRyaW0oKSk7XHJcblxyXG4gICAgICAgIHNldEZvY3VzZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldFByZWxvYWRlcih0cnVlKTtcclxuICAgICAgICBzZXRSZXBlYXQoY2hhcnNBcnJheS5sZW5ndGgpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGBhcGkveF9hYXJvMl90ZWFtd29yay9zd2ZfYXBpL2xpc3RgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB0YWJsZTogcmVmZXJlbmNlLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoX3N0cmluZzogY2hhcnNBcnJheVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgJ1gtVHJhbnNhY3Rpb24tU291cmNlJzogd2luZG93LnRyYW5zYWN0aW9uX3NvdXJjZSxcclxuICAgICAgICAgICAgICAgICdYLVVzZXJUb2tlbic6IHdpbmRvdy5nX2NrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcblxyXG4gICAgICAgIHNldEZvY3VzZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldFByZWxvYWRlcihmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3RSZWNvcmRzID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogQXJyYXkuZnJvbShuZXcgU2V0KFsuLi5saXN0UmVjb3Jkcy52YWx1ZSwgLi4uZGF0YS5tYXAoKHtzeXNJZH0pID0+IHN5c0lkKV0pKSxcclxuICAgICAgICAgICAgZGlzcGxheVZhbHVlOiBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLmxpc3RSZWNvcmRzLmRpc3BsYXlWYWx1ZSwgLi4uIGRhdGEubWFwKCh7cmVmZXJlbmNlRGF0YX0pID0+IHJlZmVyZW5jZURhdGFbMF0udmFsdWUpXSkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRMaXN0UmVjb3JkcyhsaXN0UmVjb3Jkcyk7XHJcbiAgICAgICAgc2V0UmVmZXJlbmNlUmVjb3JkKHtcclxuICAgICAgICAgICAgc3lzSWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGRpc3BsYXlWYWx1ZTogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldExvYWRlZChmYWxzZSlcclxuXHJcbiAgICAgICAgb25WYWx1ZUNoYW5nZShuYW1lLCBsaXN0UmVjb3Jkcy52YWx1ZS5maWx0ZXIoQm9vbGVhbikuam9pbihcIixcIiksIGxpc3RSZWNvcmRzLmRpc3BsYXlWYWx1ZS5maWx0ZXIoQm9vbGVhbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNMaXN0ID0gdHlwZSA9PT0gXCJnbGlkZV9saXN0XCI7XHJcblxyXG4gICAgICAgIGlmIChpc0xpc3QpIHtcclxuICAgICAgICAgICAgc2V0TGlzdFJlY29yZHMoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlPy5zcGxpdChcIixcIikgPz8gW10sXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5VmFsdWU6IGRpc3BsYXlWYWx1ZT8uc3BsaXQoXCIsXCIpID8/IFtdLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb2N1c2VkOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt0eXBlLCB2YWx1ZSwgZGlzcGxheVZhbHVlXSlcclxuXHJcbiAgICBjb25zdCByZW5kZXJMaXN0UGlsbHMgPSAoKSA9PntcclxuICAgICAgICByZXR1cm4gPElucHV0LlN0YXJ0PlxyXG4gICAgICAgICAgICB7bGlzdFJlY29yZHMuZGlzcGxheVZhbHVlLm1hcCgobGFiZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxhYmVsKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFBpbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5EaXNtaXNzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17ZGVsZXRlVmFsdWV9Lz5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0lucHV0LlN0YXJ0PlxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGVhclZhbHVlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldExpc3RSZWNvcmRzKHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlWYWx1ZTogW11cclxuICAgICAgICB9KVxyXG4gICAgICAgIG9uVmFsdWVDaGFuZ2UobmFtZSwgXCJcIiwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhc01hdGNoZXMgPSBtYXRjaGVzQ291bnQgPiAwO1xyXG5cclxuICAgIGNvbnN0IHNob3dSZXN1bHRzID0gbG9hZGluZyB8fCAobG9hZGVkICYmIGZvY3VzZWQpO1xyXG5cclxuICAgIGNvbnN0IGhhc1ZhbHVlID0gQm9vbGVhbihyZWZlcmVuY2VSZWNvcmQuc3lzSWQpO1xyXG5cclxuICAgIGNvbnN0IHNob3dEZWxldGVCdXR0b24gPSAhaXNMaXN0ICYmIGhhc1ZhbHVlICYmICFyZWFkb25seTtcclxuXHJcbiAgICBjb25zdCBjb3VudCA9IGxpc3RSZWNvcmRzPy5kaXNwbGF5VmFsdWUuZmlsdGVyKEJvb2xlYW4pLmxlbmd0aDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHZpc2libGUgP1xyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2YtcmVmZXJlbmNlXCIgdGFiSW5kZXg9XCIwXCIgb25Gb2N1cz17b25Gb2N1c30gb25CbHVyPXtvbkJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IGludGVybmFsUmVmLmN1cnJlbnQgPSBlbG19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVybmFsUmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dmLXJlZmVyZW5jZS0taW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVmZXJlbmNlUmVjb3JkLmRpc3BsYXlWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M9e2lzTGlzdCA/IFwibGlzdC1maWVsZC1ncm91cFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2Ake2xhYmVsfSAke2lzTGlzdCA/IGNvdW50ICsgXCIgc2VsZWN0ZWRcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlVmFsdWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seT17cmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW52YWxpZD17b25JbnZhbGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBhc3RlPXtvblBhc3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJlbG9hZGVyICYmIHNob3dQcmVsb2FkZXIocmVwZWF0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzTGlzdCAmJiAhcHJlbG9hZGVyICYmIHJlbmRlckxpc3RQaWxscygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXJlYWRvbmx5ICYmIDxJbnB1dC5FbmQ+e3Nob3dEZWxldGVCdXR0b24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBiYXJlIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiIGljb249XCJ4XCIgc2l6ZT1cIm1kXCIgdG9vbHRpcENvbnRlbnQ9XCJDbGVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xlYXJWYWx1ZX0vPn08L0lucHV0LkVuZD59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICB7aW5wdXRSZWY/LmN1cnJlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlVGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VPcGVuZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtzaG93UmVzdWx0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25UYXJnZXQ9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YXJnZXQ6IFwiYm90dG9tLWNlbnRlclwiLCBjb250ZW50OiBcInRvcC1jZW50ZXJcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFyZ2V0OiBcInRvcC1jZW50ZXJcIiwgY29udGVudDogXCJib3R0b20tY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qc3R5bGU9e3t3aWR0aDogYCR7dGhpcy5pbnB1dFJlZj8uY3VycmVudD8ub2Zmc2V0V2lkdGggLSAxNn1weGB9fSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJlc3VsdFwiIHN0eWxlPXt7d2lkdGg6IGAke2lucHV0UmVmPy5jdXJyZW50Py5vZmZzZXRXaWR0aCAtIDE2fXB4YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPHNwYW4gY2xhc3NOYW1lPVwibWVzc2FnZVwiPkxvYWRpbmcuLi48L3NwYW4+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGVkICYmICFoYXNNYXRjaGVzID8gPHNwYW4gY2xhc3NOYW1lPVwibWVzc2FnZVwiPk5vIFJlc3VsdHMgRm91bmQ8L3NwYW4+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGVkICYmIDxSZXN1bHQgcmVjb3Jkcz17cmVjb3Jkc30gb25DbGljaz17b25DbGlja30vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgKVxyXG5cclxufSk7XHJcblxyXG5Mb29rdXBGaWVsZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBsYWJlbDogXCJcIixcclxuICAgIG5hbWU6IFwiZGVmYXVsdFwiLFxyXG4gICAgb25WYWx1ZUNoYW5nZTogKCkgPT4gdm9pZCAwLFxyXG4gICAgZGVjbGFyYXRpdmVVaUFjdGlvbnM6IFtdLFxyXG4gICAgdHlwZTogXCJyZWZlcmVuY2VcIixcclxuICAgIHJlYWRvbmx5OiBmYWxzZSxcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIGludmFsaWQ6IGZhbHNlLFxyXG4gICAgb25JbnZhbGlkOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBtZXNzYWdlOiBbXSxcclxuICAgIHZpc2libGU6IHRydWUsXHJcbiAgICBpbnRlcm5hbFJlZjogUmVhY3QuY3JlYXRlUmVmKClcclxufVxyXG5cclxuTG9va3VwRmllbGQucHJvcFR5cGVzID0ge1xyXG4gICAgb25WYWx1ZUNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICB2YWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRpc3BsYXlWYWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRlY2xhcmF0aXZlVWlBY3Rpb25zOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdHlwZTogcHJvcFR5cGVzLm9uZU9mKFtcInJlZmVyZW5jZVwiLCBcImdsaWRlX2xpc3RcIl0pLFxyXG4gICAgdGFibGU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0YWJsZVJlY29yZFN5c0lkOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcmVhZG9ubHk6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVxdWlyZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgaW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvbkludmFsaWQ6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgbWVzc2FnZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBzdGF0dXM6IFByb3BUeXBlcy5vbmVPZihbXCJjcml0aWNhbFwiLCBcIndhcm5pbmdcIiwgXCJwb3NpdGl2ZVwiLCBcImluZm9cIiwgXCJzdWdnZXN0aW9uXCJdKSxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGljb25TaXplOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9KSksXHJcbiAgICB2aXNpYmxlOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGludGVybmFsUmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBwcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBwcm9wVHlwZXMuc2hhcGUoe2N1cnJlbnQ6IHByb3BUeXBlcy5hbnl9KVxyXG4gICAgXSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvb2t1cEZpZWxkIl19