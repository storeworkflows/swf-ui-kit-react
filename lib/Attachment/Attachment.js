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

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

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
    _this.state = {
      invalid: _this.props.invalid,
      file: undefined,
      focus: false,
      systemMessages: []
    };
    _this.containerClickedEvent = _this.containerClickedEvent.bind(_assertThisInitialized(_this));
    _this.onInvalidEvent = _this.onInvalidEvent.bind(_assertThisInitialized(_this));
    _this.onChangeEvent = _this.onChangeEvent.bind(_assertThisInitialized(_this));
    _this.onDropEvent = _this.onDropEvent.bind(_assertThisInitialized(_this));
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
        var _this$props = this.props,
            maxAttachmentSize = _this$props.maxAttachmentSize,
            contentType = _this$props.contentType,
            extensions = _this$props.extensions;
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
        if (errorMessages.length === 0) this.setState({
          file: file,
          systemMessages: []
        });else if (this.input) {
          this.input.value = "";
          this.setState({
            systemMessages: errorMessages
          });
        }
      }
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(e) {
      this.stopEvent(e);
      this.setState({
        file: undefined
      });
      if (this.input) this.input.value = "";
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(e) {
      this.stopEvent(e);
      var file = this.state.file;
      if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(file, file.name);else {
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
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
      var _this$props2 = this.props,
          manageInvalid = _this$props2.manageInvalid,
          onInvalid = _this$props2.onInvalid;
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
        var _this$input2;

        this.setFocus(e);
        (_this$input2 = this.input) === null || _this$input2 === void 0 ? void 0 : _this$input2.click();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props3 = this.props,
          manageInvalid = _this$props3.manageInvalid,
          invalid = _this$props3.invalid;
      if (manageInvalid && invalid !== this.state.invalid) this.setState({
        invalid: invalid
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var attachmentSysId = this.props.attachmentSysId;

      if (attachmentSysId) {
        //    let url = `/api/now/attachment?sysparm_query=sys_id%${attachmentSysId}`;
        var url = "/api/now/attachment/".concat(attachmentSysId); //  let params = {sysparm_query: `sys_id%${attachmentSysId}`}

        var requestOptions = {
          method: 'GET',
          credentials: 'same-origin',
          headers: {
            'content-type': "application/json"
          }
        };
        (0, _crossFetch["default"])(url, requestOptions).then( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response) {
            var data, error;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return response.json();

                  case 2:
                    data = _context.sent;

                    if (response.ok) {
                      _context.next = 6;
                      break;
                    }

                    error = data && data.message || response.status;
                    return _context.abrupt("return", Promise.reject(error));

                  case 6:
                    console.log(data); //  this.setState({postId: data.id})

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }())["catch"](function (error) {
          //this.setState({errorMessage: error.toString()});
          console.error('There was an error!', error);
        });
      }
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var _this$props4 = this.props,
          required = _this$props4.required,
          label = _this$props4.label,
          labelClassName = _this$props4.labelClassName;
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

      var _this$props5 = this.props,
          disabled = _this$props5.disabled,
          name = _this$props5.name,
          readonly = _this$props5.readonly,
          required = _this$props5.required,
          visible = _this$props5.visible,
          className = _this$props5.className,
          contentType = _this$props5.contentType,
          placeholder = _this$props5.placeholder,
          displayValue = _this$props5.displayValue;
      var _this$state = this.state,
          invalid = _this$state.invalid,
          file = _this$state.file,
          focus = _this$state.focus;
      var attachClasses = (0, _classnames["default"])("attach-container", {
        "--focus": focus,
        "--invalid": invalid,
        "--readonly": readonly,
        "--disabled": disabled
      });
      var negativeButtonStyle = {
        "font-size": '16px'
      };
      return visible ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
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
  errorMessagesDelay: 2000,
  tableSysId: "8f51828adbc32c905884eb184b9619a5",
  tableName: "x_aaro2_teamwork_container",
  attachmentSysId: "76c68f4adb1ba4905884eb184b961904"
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