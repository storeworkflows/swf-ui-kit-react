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

var _File = _interopRequireDefault(require("./File"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _requests = require("./_requests");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Attachment = /*#__PURE__*/function (_React$Component) {
  _inherits(Attachment, _React$Component);

  var _super = _createSuper(Attachment);

  function Attachment(props) {
    var _this;

    _classCallCheck(this, Attachment);

    _this = _super.call(this, props);
    var _this$props = _this.props,
        invalid = _this$props.invalid,
        tableName = _this$props.tableName,
        tableSysId = _this$props.tableSysId,
        attachmentSysId = _this$props.attachmentSysId;
    _this.state = {
      invalid: invalid,
      file: undefined,
      focus: false,
      systemMessages: [],
      tableName: tableName,
      tableSysId: tableSysId,
      attachmentSysId: attachmentSysId
    };
    _this.containerClickedEvent = _this.containerClickedEvent.bind(_assertThisInitialized(_this));
    _this.onInvalidEvent = _this.onInvalidEvent.bind(_assertThisInitialized(_this));
    _this.onChangeEvent = _this.onChangeEvent.bind(_assertThisInitialized(_this));
    _this.onDropEvent = _this.onDropEvent.bind(_assertThisInitialized(_this));
    _this.uploadFile = _this.uploadFile.bind(_assertThisInitialized(_this));
    _this.downloadFile = _this.downloadFile.bind(_assertThisInitialized(_this));
    _this.deleteFile = _this.deleteFile.bind(_assertThisInitialized(_this));
    _this.setFocus = _this.setFocus.bind(_assertThisInitialized(_this));
    _this.setBlur = _this.setBlur.bind(_assertThisInitialized(_this));
    _this.setFile = _this.setFile.bind(_assertThisInitialized(_this));
    _this.input = null;
    return _this;
  }

  _createClass(Attachment, [{
    key: "setFile",
    value: function setFile(file) {
      if (!this.state.file) {
        this.setBlur();
        var _this$props2 = this.props,
            maxAttachmentSize = _this$props2.maxAttachmentSize,
            contentType = _this$props2.contentType,
            extensions = _this$props2.extensions;
        var _this$state = this.state,
            tableSysId = _this$state.tableSysId,
            tableName = _this$state.tableName;
        var isFitSize = maxAttachmentSize ? file.size <= maxAttachmentSize : true;
        var isFitType = contentType ? contentType.includes(file.type) : true;
        var isFitExtensions = extensions ? extensions.includes((0, _utils.getFileExtensions)(file.name)) : true;
        var errorIcon = "exclamation-circle";
        var errorMessages = [];
        var delay = this.props.errorMessagesDelay;
        if (!isFitType) errorMessages.push({
          content: "Available types: ".concat(contentType.join(', ')),
          icon: errorIcon,
          delay: delay
        });
        if (!isFitSize) errorMessages.push({
          content: "Max file size = ".concat(maxAttachmentSize / 1000, " Kb"),
          icon: errorIcon,
          delay: delay
        });
        if (!isFitExtensions) errorMessages.push({
          content: "Available extensions: ".concat(extensions.join(', ')),
          icon: errorIcon,
          delay: delay
        });
        if (!tableSysId || !tableName) errorMessages.push({
          content: "Can't upload file",
          icon: errorIcon,
          delay: delay
        });

        if (errorMessages.length === 0) {
          this.uploadFile(file);
        } else if (this.input) {
          this.input.value = "";
          this.setState({
            systemMessages: errorMessages
          });
        }
      }
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
        var _this$state2, tableSysId, tableName, updatedState;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$state2 = this.state, tableSysId = _this$state2.tableSysId, tableName = _this$state2.tableName;
                _context.next = 3;
                return (0, _requests.uploadRequest)(file, tableSysId, tableName, this.props.errorMessagesDelay);

              case 3:
                updatedState = _context.sent;
                this.setState(updatedState);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function uploadFile(_x) {
        return _uploadFile.apply(this, arguments);
      }

      return uploadFile;
    }()
  }, {
    key: "deleteFile",
    value: function () {
      var _deleteFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        var attachmentSysId, stateToUpdate;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.stopEvent(e);
                attachmentSysId = this.state.attachmentSysId;
                _context2.next = 4;
                return (0, _requests.deleteRequest)(attachmentSysId, this.input);

              case 4:
                stateToUpdate = _context2.sent;
                this.setState(stateToUpdate);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteFile(_x2) {
        return _deleteFile.apply(this, arguments);
      }

      return deleteFile;
    }()
  }, {
    key: "downloadFile",
    value: function downloadFile(e) {
      this.stopEvent(e);
      var file = this.state.file;
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
    }
  }, {
    key: "stopEvent",
    value: function stopEvent(e) {
      e === null || e === void 0 ? void 0 : e.preventDefault();
      e === null || e === void 0 ? void 0 : e.stopPropagation();
    }
  }, {
    key: "setFocus",
    value: function setFocus(e) {
      this.stopEvent(e);
      this.setState({
        focus: true
      });
    }
  }, {
    key: "setBlur",
    value: function setBlur(e) {
      this.stopEvent(e);
      this.setState({
        focus: false
      });
    }
  }, {
    key: "onInvalidEvent",
    value: function onInvalidEvent(e) {
      this.stopEvent(e);
      var _this$props3 = this.props,
          manageInvalid = _this$props3.manageInvalid,
          onInvalid = _this$props3.onInvalid;
      if (!manageInvalid) this.setState({
        invalid: true
      });
      onInvalid({
        event: e
      });
    }
  }, {
    key: "onChangeEvent",
    value: function onChangeEvent(e) {
      var _this$input;

      this.stopEvent(e);
      this.setFile((_this$input = this.input) === null || _this$input === void 0 ? void 0 : _this$input.files[0]);
    }
  }, {
    key: "onDropEvent",
    value: function onDropEvent(e) {
      this.stopEvent(e);
      this.setFile(e.dataTransfer.files[0]);
    }
  }, {
    key: "containerClickedEvent",
    value: function containerClickedEvent(e) {
      if (!this.state.file) {
        this.setFocus(e);

        if (this.input) {
          console.log(this.input);
          this.input.click();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props4 = this.props,
          manageInvalid = _this$props4.manageInvalid,
          invalid = _this$props4.invalid;
      if (manageInvalid && invalid !== this.state.invalid) this.setState({
        invalid: invalid
      });
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var updatedState;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _requests.downloadRequest)(this.state.attachmentSysId, this.props.errorMessagesDelay);

              case 2:
                updatedState = _context3.sent;
                this.setState(updatedState);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var _this$props5 = this.props,
          required = _this$props5.required,
          label = _this$props5.label,
          labelClassName = _this$props5.labelClassName;
      var invalid = this.state.invalid;
      var labelClasses = (0, _classnames["default"])(labelClassName, "inp-label");
      return label ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
        className: labelClasses,
        required: required,
        invalid: invalid,
        label: label,
        htmlFor: name
      }) : null;
    }
  }, {
    key: "renderMessages",
    value: function renderMessages() {
      var message = this.props.message;
      var systemMessages = this.state.systemMessages;
      var allMessages = message.concat(systemMessages);
      return allMessages.length > 0 ? allMessages.map(function (el, id) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InfoMessage["default"], {
          iconSize: el.iconSize,
          className: el.className,
          content: el.content,
          icon: el.icon,
          status: el.status,
          delay: el.delay
        }, id);
      }) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props6 = this.props,
          disabled = _this$props6.disabled,
          name = _this$props6.name,
          readonly = _this$props6.readonly,
          required = _this$props6.required,
          visible = _this$props6.visible,
          className = _this$props6.className,
          contentType = _this$props6.contentType,
          placeholder = _this$props6.placeholder,
          displayValue = _this$props6.displayValue;
      var _this$state3 = this.state,
          invalid = _this$state3.invalid,
          file = _this$state3.file,
          focus = _this$state3.focus;
      var attachClasses = (0, _classnames["default"])("attach-container", {
        "--focus": focus,
        "--invalid": invalid,
        "--readonly": readonly,
        "--disabled": disabled
      });
      var negativeButtonStyle = {
        "font-size": '16px'
      };
      return visible ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            ref: function ref(el) {
              return _this2.input = el;
            },
            type: "file",
            name: name,
            id: name,
            required: required,
            disabled: disabled,
            accept: contentType === null || contentType === void 0 ? void 0 : contentType.join(','),
            hidden: true,
            onInvalid: this.onInvalidEvent,
            onChange: this.onChangeEvent
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: (0, _classnames["default"])("swf-attach-input", className),
            children: [this.renderLabel(), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: attachClasses,
              onDrop: this.onDropEvent,
              onDragEnter: this.setFocus,
              onDragOver: this.setFocus,
              onDragExit: this.setBlur,
              onDragLeave: this.setBlur,
              onClick: this.containerClickedEvent,
              children: file ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_File["default"], {
                displayValue: displayValue,
                file: file,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_File["default"].End, {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
                      icon: "x",
                      variant: "inherit",
                      size: "sm",
                      className: "file-button negative",
                      customStyle: negativeButtonStyle,
                      onClick: this.deleteFile
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
                      icon: "download",
                      variant: "inherit",
                      className: "file-button positive",
                      size: "sm",
                      onClick: this.downloadFile
                    })]
                  })
                })
              }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "attach-placeholder",
                children: placeholder ? placeholder : "Space for your file"
              })
            }), this.renderMessages()]
          })]
        })
      }) : null;
    }
  }]);

  return Attachment;
}(React.Component);

;
Attachment.defaultProps = {
  disabled: false,
  invalid: false,
  manageInvalid: false,
  manageValue: false,
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
  errorMessagesDelay: 4000,
  tableSysId: "8f51828adbc32c905884eb184b9619a5",
  tableName: "x_aaro2_teamwork_container",
  attachmentSysId: "76c68f4adb1ba4905884eb184b96190" //e09faf12db9fe4905884eb184b9619c1

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
  manageValue: _propTypes["default"].bool,
  //description
  contentType: _propTypes["default"].arrayOf(_propTypes["default"].string),
  extensions: _propTypes["default"].arrayOf(_propTypes["default"].string),
  displayValue: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  label: _propTypes["default"].string,
  name: _propTypes["default"].string,
  maxAttachmentSize: _propTypes["default"].number,
  message: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    status: _propTypes["default"].oneOf(["critical", "warning", "positive", "info", "suggestion"]),
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