"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _RequiredLabel = _interopRequireDefault(require("../RequiredLabel/RequiredLabel"));

var _InfoMessage = _interopRequireDefault(require("../InfoMessage/InfoMessage"));

var _utils = require("./utils");

var _File = _interopRequireDefault(require("./InnerComponents/File/File"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _requests = require("./_requests");

var _Preloader = _interopRequireDefault(require("../Preloader/Preloader"));

var _Loader = _interopRequireDefault(require("./InnerComponents/Loader/Loader"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Attachment = /*#__PURE__*/React.forwardRef(function (props, _ref5) {
  var invalid = props.invalid,
      tableName = props.tableName,
      tableSysId = props.tableSysId,
      attachmentSysId = props.attachmentSysId,
      value = props.value,
      contentType = props.contentType,
      errorMessagesDelay = props.errorMessagesDelay,
      readonly = props.readonly,
      disabled = props.disabled,
      onValueChange = props.onValueChange,
      name = props.name,
      manageInvalid = props.manageInvalid,
      onInvalid = props.onInvalid,
      labelClassName = props.labelClassName,
      label = props.label,
      required = props.required,
      visible = props.visible,
      className = props.className,
      displayValue = props.displayValue,
      message = props.message,
      placeholder = props.placeholder;

  var _useState = (0, React.useState)(invalid),
      _useState2 = _slicedToArray(_useState, 2),
      isInvalid = _useState2[0],
      setIsInvalid = _useState2[1];

  var _useState3 = (0, React.useState)(value),
      _useState4 = _slicedToArray(_useState3, 2),
      file = _useState4[0],
      setFile = _useState4[1];

  var _useState5 = (0, React.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      focus = _useState6[0],
      setFocusSate = _useState6[1];

  var _useState7 = (0, React.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      systemMessages = _useState8[0],
      setSystemMessages = _useState8[1];

  var _useState9 = (0, React.useState)(tableName),
      _useState10 = _slicedToArray(_useState9, 2),
      tableNameState = _useState10[0],
      setTableNameState = _useState10[1];

  var _useState11 = (0, React.useState)(tableSysId),
      _useState12 = _slicedToArray(_useState11, 2),
      tableSysIdSate = _useState12[0],
      setTableSysIdState = _useState12[1];

  var _useState13 = (0, React.useState)(attachmentSysId),
      _useState14 = _slicedToArray(_useState13, 2),
      attachmentSysIdSate = _useState14[0],
      setAttachSysIdState = _useState14[1];

  var _useState15 = (0, React.useState)(true),
      _useState16 = _slicedToArray(_useState15, 2),
      activePreloader = _useState16[0],
      setActivePreloader = _useState16[1];

  var _useState17 = (0, React.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      activeDeleting = _useState18[0],
      setActiveDeleting = _useState18[1];

  var input = (0, React.useRef)(null);
  var invalidValue = manageInvalid ? invalid : isInvalid;

  var uploadNewFile = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fileToUpload) {
      var errorMessages;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!file && !readonly && !disabled)) {
                _context.next = 9;
                break;
              }

              setBlur();
              errorMessages = (0, _utils.checkFileToUpload)(fileToUpload, props);

              if (!(errorMessages.length === 0)) {
                _context.next = 8;
                break;
              }

              _context.next = 6;
              return uploadFile(fileToUpload);

            case 6:
              _context.next = 9;
              break;

            case 8:
              if (input !== null && input !== void 0 && input.current) {
                input.current.value = "";
                setSystemMessages(errorMessages);
                setActivePreloader(false);
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function uploadNewFile(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var uploadFile = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file) {
      var result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _requests.uploadRequest)(file, tableSysIdSate, tableNameState, errorMessagesDelay);

            case 2:
              result = _context2.sent;
              if (result.systemMessages) setSystemMessages(result.systemMessages);else {
                setSystemMessages([]);
                setFile(file);
                setAttachSysIdState(result.sys_id);
              }
              setActivePreloader(false);
              onValueChange(name, result.attachmentSysId, result.displayValue);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function uploadFile(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var deleteFile = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var result;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              stopEvent(e);
              setActiveDeleting(true);
              _context3.next = 4;
              return (0, _requests.deleteRequest)(attachmentSysIdSate, errorMessagesDelay);

            case 4:
              result = _context3.sent;
              if (result !== null && result !== void 0 && result.systemMessages) setSystemMessages(result.systemMessages);else {
                setSystemMessages([]);
                setFile(undefined);
                setAttachSysIdState(undefined);
                if (input !== null && input !== void 0 && input.current) input.current.value = "";
              }
              setActiveDeleting(false);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function deleteFile(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var downloadFile = function downloadFile(e) {
    stopEvent(e);
    if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(file, file.name);else {
      var a = document.createElement("a"),
          url = file.link ? file.link : URL.createObjectURL(file);
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  };

  var stopEvent = function stopEvent(e) {
    e === null || e === void 0 ? void 0 : e.preventDefault();
    e === null || e === void 0 ? void 0 : e.stopPropagation();
  };

  var setFocus = function setFocus(e) {
    stopEvent(e);
    if (!activePreloader && !activeDeleting && !disabled && !readonly) setFocusSate(true);
  };

  var setBlur = function setBlur(e) {
    stopEvent(e);
    setFocusSate(false);
  };

  var onInvalidEvent = function onInvalidEvent(event) {
    stopEvent(event);
    !manageInvalid && setIsInvalid(true);
    onInvalid({
      event: event
    });
  };

  var onChangeEvent = function onChangeEvent(e) {
    var _input$current;

    stopEvent(e);
    setActivePreloader(true);
    uploadNewFile(input === null || input === void 0 ? void 0 : (_input$current = input.current) === null || _input$current === void 0 ? void 0 : _input$current.files[0]);
  };

  var onDropEvent = function onDropEvent(e) {
    stopEvent(e);

    if (!activePreloader && !activeDeleting && !disabled && !readonly) {
      setActivePreloader(true);
      uploadNewFile(e.dataTransfer.files[0]);
    }
  };

  var containerClickedEvent = function containerClickedEvent(e) {
    if (!file && !activePreloader && !activeDeleting && !disabled && !readonly) {
      var _input$current2;

      setFocus(e);
      if (input !== null && input !== void 0 && input.current) input === null || input === void 0 ? void 0 : (_input$current2 = input.current) === null || _input$current2 === void 0 ? void 0 : _input$current2.click();
    }
  };

  (0, React.useEffect)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var result, file_name, size_bytes, content_type, download_link, _tableName, _tableSysId, sys_id;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!attachmentSysIdSate) {
              _context4.next = 5;
              break;
            }

            _context4.next = 3;
            return (0, _requests.downloadRequest)(attachmentSysIdSate, errorMessagesDelay);

          case 3:
            result = _context4.sent;
            if (result.systemMessages) setSystemMessages(result.systemMessages);else {
              file_name = result.file_name, size_bytes = result.size_bytes, content_type = result.content_type, download_link = result.download_link, _tableName = result.tableName, _tableSysId = result.tableSysId, sys_id = result.sys_id;
              setFile({
                name: file_name,
                size: size_bytes,
                type: content_type,
                link: download_link
              });
              setTableNameState(_tableName);
              setTableSysIdState(_tableSysId);
              setAttachSysIdState(sys_id);
            }

          case 5:
            setActivePreloader(false);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })), []);

  var renderLabel = function renderLabel() {
    var labelClasses = (0, _classnames["default"])(labelClassName, "inp-label", {
      "--readonly": readonly
    });
    return label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
      className: labelClasses,
      required: required,
      invalid: invalidValue,
      label: label,
      htmlFor: name
    });
  };

  var renderPreloader = function renderPreloader() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Preloader["default"], {
      count: 1,
      items: [{
        width: "100%",
        height: "50%",
        repeat: 3,
        styles: [{
          width: "2rem",
          height: "2rem",
          borderRadius: "50%"
        }, {
          width: "7rem",
          height: "1rem"
        }, {
          width: "5rem",
          height: "0.5rem",
          marginTop: "1.7rem",
          marginLeft: "-7.1rem"
        }]
      }],
      height: "2.5rem",
      width: "100%",
      flexDirectionGeneral: "row",
      blur: "3rem",
      background: false,
      mainStyles: {
        margin: 0,
        padding: 0
      }
    });
  };

  var renderFileButton = function renderFileButton(icon, action) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
      icon: icon,
      variant: "inherit",
      size: "sm",
      className: (0, _classnames["default"])("file-button", className),
      customStyle: style,
      onClick: action,
      disabled: disabled
    });
  };

  var attachClasses = (0, _classnames["default"])("attach-container", {
    "--focus": focus,
    "--invalid": invalidValue,
    "--readonly": readonly,
    "--disabled": disabled
  });

  var _isFile = !activePreloader && file;

  var _isPlaceholder = !activePreloader && !file && placeholder;

  var _allMessages = message.concat(systemMessages);

  var _hasMassages = _allMessages.length > 0;

  return visible && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      ref: function ref(el) {
        input.current = el;
        _ref5 = el;
      },
      type: "file",
      name: name,
      id: name,
      required: required,
      disabled: disabled,
      accept: contentType === null || contentType === void 0 ? void 0 : contentType.join(','),
      hidden: true,
      onInvalid: onInvalidEvent,
      onChange: onChangeEvent
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames["default"])("swf-attach-input", className),
      ref: _ref5,
      children: [renderLabel(), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: attachClasses,
        onDrop: onDropEvent,
        onDragEnter: setFocus,
        onDragOver: setFocus,
        onDragExit: setBlur,
        onDragLeave: setBlur,
        onClick: containerClickedEvent,
        children: [activeDeleting && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Loader["default"], {
          actionName: "Deleting"
        }), activePreloader && renderPreloader(), _isFile && /*#__PURE__*/(0, _jsxRuntime.jsx)(_File["default"], {
          displayValue: displayValue,
          file: file,
          children: !readonly && /*#__PURE__*/(0, _jsxRuntime.jsx)(_File["default"].End, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              children: [renderFileButton("x", deleteFile, "negative", {
                "font-size": '16px'
              }), renderFileButton("download", downloadFile, "positive")]
            })
          })
        }), _isPlaceholder && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "attach-placeholder",
          children: placeholder
        })]
      }), _hasMassages && _allMessages.map(function (el, id) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InfoMessage["default"], _objectSpread({}, el), id);
      })]
    })]
  });
});
Attachment.defaultProps = {
  disabled: false,
  invalid: false,
  manageInvalid: false,
  readonly: false,
  required: false,
  visible: true,
  className: {},
  onInvalid: function onInvalid() {
    return void 0;
  },
  onValueChange: function onValueChange() {
    return void 0;
  },
  labelClassName: {},
  message: [],
  errorMessagesDelay: 4000
};
Attachment.propTypes = {
  //status
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  visible: _propTypes["default"].bool,
  //events
  onInvalid: _propTypes["default"].func,
  onValueChange: _propTypes["default"].func,
  manageInvalid: _propTypes["default"].bool,
  //description
  contentType: _propTypes["default"].arrayOf(_propTypes["default"].string),
  extensions: _propTypes["default"].arrayOf(_propTypes["default"].string),
  displayValue: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  label: _propTypes["default"].string,
  name: _propTypes["default"].string,
  maxAttachmentSize: _propTypes["default"].number,
  message: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    status: _propTypes["default"].oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
    content: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    className: _propTypes["default"].object,
    iconSize: _propTypes["default"].number,
    delay: _propTypes["default"].number
  })),
  errorMessagesDelay: _propTypes["default"].number,
  //input data
  value: _propTypes["default"].object,
  tableSysId: _propTypes["default"].string,
  tableName: _propTypes["default"].string,
  attachmentSysId: _propTypes["default"].string,
  //classes
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  labelClassName: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string])
};
var _default = Attachment;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0F0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsiQXR0YWNobWVudCIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiaW52YWxpZCIsInRhYmxlTmFtZSIsInRhYmxlU3lzSWQiLCJhdHRhY2htZW50U3lzSWQiLCJ2YWx1ZSIsImNvbnRlbnRUeXBlIiwiZXJyb3JNZXNzYWdlc0RlbGF5IiwicmVhZG9ubHkiLCJkaXNhYmxlZCIsIm9uVmFsdWVDaGFuZ2UiLCJuYW1lIiwibWFuYWdlSW52YWxpZCIsIm9uSW52YWxpZCIsImxhYmVsQ2xhc3NOYW1lIiwibGFiZWwiLCJyZXF1aXJlZCIsInZpc2libGUiLCJjbGFzc05hbWUiLCJkaXNwbGF5VmFsdWUiLCJtZXNzYWdlIiwicGxhY2Vob2xkZXIiLCJpc0ludmFsaWQiLCJzZXRJc0ludmFsaWQiLCJmaWxlIiwic2V0RmlsZSIsImZvY3VzIiwic2V0Rm9jdXNTYXRlIiwic3lzdGVtTWVzc2FnZXMiLCJzZXRTeXN0ZW1NZXNzYWdlcyIsInRhYmxlTmFtZVN0YXRlIiwic2V0VGFibGVOYW1lU3RhdGUiLCJ0YWJsZVN5c0lkU2F0ZSIsInNldFRhYmxlU3lzSWRTdGF0ZSIsImF0dGFjaG1lbnRTeXNJZFNhdGUiLCJzZXRBdHRhY2hTeXNJZFN0YXRlIiwiYWN0aXZlUHJlbG9hZGVyIiwic2V0QWN0aXZlUHJlbG9hZGVyIiwiYWN0aXZlRGVsZXRpbmciLCJzZXRBY3RpdmVEZWxldGluZyIsImlucHV0IiwiaW52YWxpZFZhbHVlIiwidXBsb2FkTmV3RmlsZSIsImZpbGVUb1VwbG9hZCIsInNldEJsdXIiLCJlcnJvck1lc3NhZ2VzIiwibGVuZ3RoIiwidXBsb2FkRmlsZSIsImN1cnJlbnQiLCJyZXN1bHQiLCJzeXNfaWQiLCJkZWxldGVGaWxlIiwiZSIsInN0b3BFdmVudCIsInVuZGVmaW5lZCIsImRvd25sb2FkRmlsZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidXJsIiwibGluayIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhyZWYiLCJkb3dubG9hZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwic2V0VGltZW91dCIsInJlbW92ZUNoaWxkIiwicmV2b2tlT2JqZWN0VVJMIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXRGb2N1cyIsIm9uSW52YWxpZEV2ZW50IiwiZXZlbnQiLCJvbkNoYW5nZUV2ZW50IiwiZmlsZXMiLCJvbkRyb3BFdmVudCIsImRhdGFUcmFuc2ZlciIsImNvbnRhaW5lckNsaWNrZWRFdmVudCIsImZpbGVfbmFtZSIsInNpemVfYnl0ZXMiLCJjb250ZW50X3R5cGUiLCJkb3dubG9hZF9saW5rIiwic2l6ZSIsInR5cGUiLCJyZW5kZXJMYWJlbCIsImxhYmVsQ2xhc3NlcyIsInJlbmRlclByZWxvYWRlciIsIndpZHRoIiwiaGVpZ2h0IiwicmVwZWF0Iiwic3R5bGVzIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIm1hcmdpbiIsInBhZGRpbmciLCJyZW5kZXJGaWxlQnV0dG9uIiwiaWNvbiIsImFjdGlvbiIsInN0eWxlIiwiYXR0YWNoQ2xhc3NlcyIsIl9pc0ZpbGUiLCJfaXNQbGFjZWhvbGRlciIsIl9hbGxNZXNzYWdlcyIsImNvbmNhdCIsIl9oYXNNYXNzYWdlcyIsImVsIiwiam9pbiIsIm1hcCIsImlkIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsImZ1bmMiLCJhcnJheU9mIiwic3RyaW5nIiwiZXh0ZW5zaW9ucyIsIm1heEF0dGFjaG1lbnRTaXplIiwibnVtYmVyIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJzdGF0dXMiLCJvbmVPZiIsImNvbnRlbnQiLCJvYmplY3QiLCJpY29uU2l6ZSIsImRlbGF5Iiwib25lT2ZUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7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UjtBQXFDbkI7QUFDQXZHLEVBQUFBLFNBQVMsRUFBRW1HLHNCQUFVZ0IsU0FBVixDQUFvQixDQUFDaEIsc0JBQVVhLE1BQVgsRUFBbUJiLHNCQUFVSSxNQUE3QixDQUFwQixDQXRDUTtBQXVDbkIzRyxFQUFBQSxjQUFjLEVBQUV1RyxzQkFBVWdCLFNBQVYsQ0FBb0IsQ0FBQ2hCLHNCQUFVYSxNQUFYLEVBQW1CYixzQkFBVUksTUFBN0IsQ0FBcEI7QUF2Q0csQ0FBdkI7ZUE0Q2U3SCxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFJlcXVpcmVkTGFiZWwgZnJvbSBcIi4uL1JlcXVpcmVkTGFiZWwvUmVxdWlyZWRMYWJlbFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBJbmZvTWVzc2FnZSBmcm9tIFwiLi4vSW5mb01lc3NhZ2UvSW5mb01lc3NhZ2VcIjtcclxuaW1wb3J0IHtjaGVja0ZpbGVUb1VwbG9hZCwgZ2V0RmlsZUV4dGVuc2lvbnN9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCBGaWxlIGZyb20gXCIuL0lubmVyQ29tcG9uZW50cy9GaWxlL0ZpbGVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQge2Rvd25sb2FkUmVxdWVzdCwgdXBsb2FkUmVxdWVzdCwgZGVsZXRlUmVxdWVzdH0gZnJvbSBcIi4vX3JlcXVlc3RzXCI7XHJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSBcIi4uL1ByZWxvYWRlci9QcmVsb2FkZXJcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi9Jbm5lckNvbXBvbmVudHMvTG9hZGVyL0xvYWRlclwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBdHRhY2htZW50ID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGludmFsaWQsIHRhYmxlTmFtZSwgdGFibGVTeXNJZCwgYXR0YWNobWVudFN5c0lkLCB2YWx1ZSxcclxuICAgICAgICBjb250ZW50VHlwZSwgZXJyb3JNZXNzYWdlc0RlbGF5LCByZWFkb25seSwgZGlzYWJsZWQsXHJcbiAgICAgICAgb25WYWx1ZUNoYW5nZSwgbmFtZSxcclxuICAgICAgICBtYW5hZ2VJbnZhbGlkLCBvbkludmFsaWQsXHJcbiAgICAgICAgbGFiZWxDbGFzc05hbWUsIGxhYmVsLCByZXF1aXJlZCxcclxuICAgICAgICB2aXNpYmxlLCBjbGFzc05hbWUsIGRpc3BsYXlWYWx1ZSwgbWVzc2FnZSwgcGxhY2Vob2xkZXJcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBbaXNJbnZhbGlkLCBzZXRJc0ludmFsaWRdID0gdXNlU3RhdGUoaW52YWxpZCk7XHJcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZSh2YWx1ZSk7XHJcbiAgICBjb25zdCBbZm9jdXMsIHNldEZvY3VzU2F0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc3lzdGVtTWVzc2FnZXMsIHNldFN5c3RlbU1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0YWJsZU5hbWVTdGF0ZSwgc2V0VGFibGVOYW1lU3RhdGVdID0gdXNlU3RhdGUodGFibGVOYW1lKTtcclxuICAgIGNvbnN0IFt0YWJsZVN5c0lkU2F0ZSwgc2V0VGFibGVTeXNJZFN0YXRlXSA9IHVzZVN0YXRlKHRhYmxlU3lzSWQpO1xyXG4gICAgY29uc3QgW2F0dGFjaG1lbnRTeXNJZFNhdGUsIHNldEF0dGFjaFN5c0lkU3RhdGVdID0gdXNlU3RhdGUoYXR0YWNobWVudFN5c0lkKTtcclxuICAgIGNvbnN0IFthY3RpdmVQcmVsb2FkZXIsIHNldEFjdGl2ZVByZWxvYWRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFthY3RpdmVEZWxldGluZywgc2V0QWN0aXZlRGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBpbnZhbGlkVmFsdWUgPSBtYW5hZ2VJbnZhbGlkID8gaW52YWxpZCA6IGlzSW52YWxpZDtcclxuXHJcbiAgICBjb25zdCB1cGxvYWROZXdGaWxlID0gYXN5bmMgKGZpbGVUb1VwbG9hZCkgPT4ge1xyXG4gICAgICAgIGlmICghZmlsZSAmJiAhcmVhZG9ubHkgJiYgIWRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHNldEJsdXIoKTtcclxuICAgICAgICAgICAgbGV0IGVycm9yTWVzc2FnZXMgPSBjaGVja0ZpbGVUb1VwbG9hZChmaWxlVG9VcGxvYWQsIHByb3BzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2VzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIGF3YWl0IHVwbG9hZEZpbGUoZmlsZVRvVXBsb2FkKVxyXG5cclxuICAgICAgICAgICAgZWxzZSBpZiAoaW5wdXQ/LmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgc2V0U3lzdGVtTWVzc2FnZXMoZXJyb3JNZXNzYWdlcyk7XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVQcmVsb2FkZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAoZmlsZSkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB1cGxvYWRSZXF1ZXN0KGZpbGUsIHRhYmxlU3lzSWRTYXRlLCB0YWJsZU5hbWVTdGF0ZSwgZXJyb3JNZXNzYWdlc0RlbGF5KTtcclxuXHJcbiAgICAgICAgaWYocmVzdWx0LnN5c3RlbU1lc3NhZ2VzKVxyXG4gICAgICAgICAgICBzZXRTeXN0ZW1NZXNzYWdlcyhyZXN1bHQuc3lzdGVtTWVzc2FnZXMpXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFN5c3RlbU1lc3NhZ2VzKFtdKTtcclxuICAgICAgICAgICAgc2V0RmlsZShmaWxlKTtcclxuICAgICAgICAgICAgc2V0QXR0YWNoU3lzSWRTdGF0ZShyZXN1bHQuc3lzX2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0QWN0aXZlUHJlbG9hZGVyKGZhbHNlKTtcclxuICAgICAgICBvblZhbHVlQ2hhbmdlKG5hbWUsIHJlc3VsdC5hdHRhY2htZW50U3lzSWQsIHJlc3VsdC5kaXNwbGF5VmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlRmlsZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgc3RvcEV2ZW50KGUpO1xyXG4gICAgICAgIHNldEFjdGl2ZURlbGV0aW5nKHRydWUpXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGRlbGV0ZVJlcXVlc3QoYXR0YWNobWVudFN5c0lkU2F0ZSwgZXJyb3JNZXNzYWdlc0RlbGF5KVxyXG5cclxuICAgICAgICBpZihyZXN1bHQ/LnN5c3RlbU1lc3NhZ2VzKVxyXG4gICAgICAgICAgICBzZXRTeXN0ZW1NZXNzYWdlcyhyZXN1bHQuc3lzdGVtTWVzc2FnZXMpXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFN5c3RlbU1lc3NhZ2VzKFtdKTtcclxuICAgICAgICAgICAgc2V0RmlsZSh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICBzZXRBdHRhY2hTeXNJZFN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGlmKGlucHV0Py5jdXJyZW50KSBpbnB1dC5jdXJyZW50LnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0QWN0aXZlRGVsZXRpbmcoZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZG93bmxvYWRGaWxlID0gKGUpID0+IHtcclxuICAgICAgICBzdG9wRXZlbnQoZSlcclxuICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKVxyXG4gICAgICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoZmlsZSwgZmlsZS5uYW1lKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSxcclxuICAgICAgICAgICAgICAgIHVybCA9IChmaWxlLmxpbmspID8gZmlsZS5saW5rIDogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgICAgICAgYS5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICBhLmRvd25sb2FkID0gZmlsZS5uYW1lO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdG9wRXZlbnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGU/LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZT8uc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Rm9jdXMgPSAoZSkgPT4ge1xyXG4gICAgICAgIHN0b3BFdmVudChlKTtcclxuXHJcbiAgICAgICAgaWYgKCFhY3RpdmVQcmVsb2FkZXIgJiYgIWFjdGl2ZURlbGV0aW5nICYmICFkaXNhYmxlZCAmJiAhcmVhZG9ubHkpXHJcbiAgICAgICAgICAgIHNldEZvY3VzU2F0ZSh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldEJsdXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIHN0b3BFdmVudChlKTtcclxuICAgICAgICBzZXRGb2N1c1NhdGUoZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25JbnZhbGlkRXZlbnQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzdG9wRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgICAgICFtYW5hZ2VJbnZhbGlkICYmIHNldElzSW52YWxpZCh0cnVlKTtcclxuICAgICAgIG9uSW52YWxpZCh7ZXZlbnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUV2ZW50ID0gKGUpID0+IHtcclxuICAgICAgICBzdG9wRXZlbnQoZSk7XHJcbiAgICAgICAgc2V0QWN0aXZlUHJlbG9hZGVyKHRydWUpXHJcbiAgICAgICAgdXBsb2FkTmV3RmlsZShpbnB1dD8uY3VycmVudD8uZmlsZXNbMF0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25Ecm9wRXZlbnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHN0b3BFdmVudChlKTtcclxuXHJcbiAgICAgICAgaWYgKCFhY3RpdmVQcmVsb2FkZXIgJiYgIWFjdGl2ZURlbGV0aW5nICYmICFkaXNhYmxlZCAmJiAhcmVhZG9ubHkpIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlUHJlbG9hZGVyKHRydWUpXHJcbiAgICAgICAgICAgIHVwbG9hZE5ld0ZpbGUoZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lckNsaWNrZWRFdmVudCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaWxlICYmICFhY3RpdmVQcmVsb2FkZXIgJiYgIWFjdGl2ZURlbGV0aW5nICYmICFkaXNhYmxlZCAmJiAhcmVhZG9ubHkpIHtcclxuICAgICAgICAgICAgc2V0Rm9jdXMoZSk7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dD8uY3VycmVudClcclxuICAgICAgICAgICAgICAgIGlucHV0Py5jdXJyZW50Py5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmKGF0dGFjaG1lbnRTeXNJZFNhdGUpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGRvd25sb2FkUmVxdWVzdChhdHRhY2htZW50U3lzSWRTYXRlLCBlcnJvck1lc3NhZ2VzRGVsYXkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zeXN0ZW1NZXNzYWdlcylcclxuICAgICAgICAgICAgICAgIHNldFN5c3RlbU1lc3NhZ2VzKHJlc3VsdC5zeXN0ZW1NZXNzYWdlcylcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZV9uYW1lLCBzaXplX2J5dGVzLCBjb250ZW50X3R5cGUsIGRvd25sb2FkX2xpbmssXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVOYW1lLCB0YWJsZVN5c0lkLCBzeXNfaWRcclxuICAgICAgICAgICAgICAgIH0gPSByZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0RmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZV9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IHNpemVfYnl0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogY29udGVudF90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IGRvd25sb2FkX2xpbmtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRUYWJsZU5hbWVTdGF0ZSh0YWJsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGFibGVTeXNJZFN0YXRlKHRhYmxlU3lzSWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0QXR0YWNoU3lzSWRTdGF0ZShzeXNfaWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0QWN0aXZlUHJlbG9hZGVyKGZhbHNlKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgcmVuZGVyTGFiZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGxhYmVsQ2xhc3NlcyA9IGNsYXNzbmFtZXMobGFiZWxDbGFzc05hbWUsIFwiaW5wLWxhYmVsXCIsIHtcIi0tcmVhZG9ubHlcIjogcmVhZG9ubHl9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxhYmVsICYmXHJcbiAgICAgICAgICAgIDxSZXF1aXJlZExhYmVsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2xhYmVsQ2xhc3Nlc31cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgIGludmFsaWQ9e2ludmFsaWRWYWx1ZX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgIGh0bWxGb3I9e25hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVyUHJlbG9hZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQcmVsb2FkZXJcclxuICAgICAgICAgICAgICAgIGNvdW50PXsxfVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjUwJVwiLCByZXBlYXQ6IDMsIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpZHRoOiBcIjJyZW1cIiwgaGVpZ2h0OiBcIjJyZW1cIiwgYm9yZGVyUmFkaXVzOiBcIjUwJVwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWR0aDogXCI3cmVtXCIsIGhlaWdodDogXCIxcmVtXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpZHRoOiBcIjVyZW1cIiwgaGVpZ2h0OiBcIjAuNXJlbVwiLCBtYXJnaW5Ub3A6IFwiMS43cmVtXCIsIG1hcmdpbkxlZnQ6IFwiLTcuMXJlbVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyLjVyZW1cIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e1wiMTAwJVwifVxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbkdlbmVyYWw9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgYmx1cj1cIjNyZW1cIlxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBtYWluU3R5bGVzPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbmRlckZpbGVCdXR0b24gPSAoaWNvbiwgYWN0aW9uLCBjbGFzc05hbWU9XCJcIiwgc3R5bGU9e30pID0+IHtcclxuICAgICAgICByZXR1cm4gPEJ1dHRvbiBpY29uPXtpY29ufVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD17XCJpbmhlcml0XCJ9XHJcbiAgICAgICAgICAgICAgICBzaXplPXtcInNtXCJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJmaWxlLWJ1dHRvblwiLCBjbGFzc05hbWUpfVxyXG4gICAgICAgICAgICAgICAgY3VzdG9tU3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgIC8+XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGF0dGFjaENsYXNzZXMgPSBjbGFzc25hbWVzKFwiYXR0YWNoLWNvbnRhaW5lclwiLCB7XHJcbiAgICAgICAgXCItLWZvY3VzXCI6IGZvY3VzLFxyXG4gICAgICAgIFwiLS1pbnZhbGlkXCI6IGludmFsaWRWYWx1ZSxcclxuICAgICAgICBcIi0tcmVhZG9ubHlcIjogcmVhZG9ubHksXHJcbiAgICAgICAgXCItLWRpc2FibGVkXCI6IGRpc2FibGVkXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgX2lzRmlsZSA9ICFhY3RpdmVQcmVsb2FkZXIgJiYgZmlsZTtcclxuICAgIGxldCBfaXNQbGFjZWhvbGRlciA9ICFhY3RpdmVQcmVsb2FkZXIgJiYgIWZpbGUgJiYgcGxhY2Vob2xkZXI7XHJcblxyXG4gICAgY29uc3QgX2FsbE1lc3NhZ2VzID0gbWVzc2FnZS5jb25jYXQoc3lzdGVtTWVzc2FnZXMpO1xyXG4gICAgY29uc3QgX2hhc01hc3NhZ2VzID0gX2FsbE1lc3NhZ2VzLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB2aXNpYmxlICYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuY3VycmVudCA9IGVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWYgPSBlbDtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PXtjb250ZW50VHlwZT8uam9pbignLCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgIG9uSW52YWxpZD17b25JbnZhbGlkRXZlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRXZlbnR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJzd2YtYXR0YWNoLWlucHV0XCIsIGNsYXNzTmFtZSl9IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyTGFiZWwoKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXR0YWNoQ2xhc3Nlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXtvbkRyb3BFdmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnRW50ZXI9e3NldEZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXtzZXRGb2N1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnRXhpdD17c2V0Qmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnTGVhdmU9e3NldEJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbnRhaW5lckNsaWNrZWRFdmVudH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVEZWxldGluZyAmJiA8TG9hZGVyIGFjdGlvbk5hbWU9e1wiRGVsZXRpbmdcIn0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVByZWxvYWRlciAmJiByZW5kZXJQcmVsb2FkZXIoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge19pc0ZpbGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGUgZGlzcGxheVZhbHVlPXtkaXNwbGF5VmFsdWV9IGZpbGU9e2ZpbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFyZWFkb25seSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGUuRW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJGaWxlQnV0dG9uKFwieFwiLCBkZWxldGVGaWxlLCBcIm5lZ2F0aXZlXCIsIHtcImZvbnQtc2l6ZVwiOiAnMTZweCd9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckZpbGVCdXR0b24oXCJkb3dubG9hZFwiLCBkb3dubG9hZEZpbGUsIFwicG9zaXRpdmVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpbGUuRW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge19pc1BsYWNlaG9sZGVyICYmIDxzcGFuIGNsYXNzTmFtZT17XCJhdHRhY2gtcGxhY2Vob2xkZXJcIn0+e3BsYWNlaG9sZGVyfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge19oYXNNYXNzYWdlcyAmJiBfYWxsTWVzc2FnZXMubWFwKChlbCwgaWQpID0+IDxJbmZvTWVzc2FnZSBrZXk9e2lkfSB7Li4uZWx9Lz4pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5BdHRhY2htZW50LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGludmFsaWQ6IGZhbHNlLFxyXG4gICAgbWFuYWdlSW52YWxpZDogZmFsc2UsXHJcbiAgICByZWFkb25seTogZmFsc2UsXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgY2xhc3NOYW1lOiB7fSxcclxuICAgIG9uSW52YWxpZDogKCkgPT4gdm9pZCAwLFxyXG4gICAgb25WYWx1ZUNoYW5nZTogKCkgPT4gdm9pZCAwLFxyXG4gICAgbGFiZWxDbGFzc05hbWU6IHt9LFxyXG4gICAgbWVzc2FnZTogW10sXHJcbiAgICBlcnJvck1lc3NhZ2VzRGVsYXk6IDQwMDAsXHJcbn07XHJcblxyXG5BdHRhY2htZW50LnByb3BUeXBlcyA9IHtcclxuICAgIC8vc3RhdHVzXHJcbiAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlcXVpcmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHZpc2libGU6IHByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8vZXZlbnRzXHJcbiAgICBvbkludmFsaWQ6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25WYWx1ZUNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBtYW5hZ2VJbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvL2Rlc2NyaXB0aW9uXHJcbiAgICBjb250ZW50VHlwZTogcHJvcFR5cGVzLmFycmF5T2YocHJvcFR5cGVzLnN0cmluZyksXHJcbiAgICBleHRlbnNpb25zOiBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc3RyaW5nKSxcclxuICAgIGRpc3BsYXlWYWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWF4QXR0YWNobWVudFNpemU6IHByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtZXNzYWdlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHN0YXR1czogUHJvcFR5cGVzLm9uZU9mKFtcInllbGxvd1wiICwgXCJyZWRcIiAsIFwiZ3JlZW5cIiAsIFwiYmx1ZVwiICwgXCJncmV5XCIgLCBcImdyZXktYmx1ZVwiXSksXHJcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBpY29uU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBkZWxheTogcHJvcFR5cGVzLm51bWJlclxyXG4gICAgfSkpLFxyXG4gICAgZXJyb3JNZXNzYWdlc0RlbGF5OiBwcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8vaW5wdXQgZGF0YVxyXG4gICAgdmFsdWU6IHByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB0YWJsZVN5c0lkOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdGFibGVOYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYXR0YWNobWVudFN5c0lkOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8vY2xhc3Nlc1xyXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMub2JqZWN0LCBwcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgICBsYWJlbENsYXNzTmFtZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLm9iamVjdCwgcHJvcFR5cGVzLnN0cmluZ10pLFxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF0dGFjaG1lbnQiXX0=