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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0F0dGFjaG1lbnQuanMiXSwibmFtZXMiOlsiQXR0YWNobWVudCIsInByb3BzIiwic3RhdGUiLCJpbnZhbGlkIiwiZmlsZSIsInVuZGVmaW5lZCIsImZvY3VzIiwic3lzdGVtTWVzc2FnZXMiLCJjb250YWluZXJDbGlja2VkRXZlbnQiLCJiaW5kIiwib25JbnZhbGlkRXZlbnQiLCJvbkNoYW5nZUV2ZW50Iiwib25Ecm9wRXZlbnQiLCJkb3dubG9hZEZpbGUiLCJkZWxldGVGaWxlIiwic2V0Rm9jdXMiLCJzZXRCbHVyIiwic2V0RmlsZSIsImlucHV0IiwibWF4QXR0YWNobWVudFNpemUiLCJjb250ZW50VHlwZSIsImV4dGVuc2lvbnMiLCJpc0ZpdFNpemUiLCJzaXplIiwiaXNGaXRUeXBlIiwiaW5jbHVkZXMiLCJ0eXBlIiwiaXNGaXRFeHRlbnNpb25zIiwibmFtZSIsImVycm9ySWNvbiIsImVycm9yTWVzc2FnZXMiLCJkZWxheSIsImVycm9yTWVzc2FnZXNEZWxheSIsInB1c2giLCJjb250ZW50Iiwiam9pbiIsImljb24iLCJsZW5ndGgiLCJzZXRTdGF0ZSIsInZhbHVlIiwiZSIsInN0b3BFdmVudCIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaHJlZiIsImRvd25sb2FkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCJyZXZva2VPYmplY3RVUkwiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm1hbmFnZUludmFsaWQiLCJvbkludmFsaWQiLCJldmVudCIsImZpbGVzIiwiZGF0YVRyYW5zZmVyIiwiYXR0YWNobWVudFN5c0lkIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9rIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlamVjdCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1aXJlZCIsImxhYmVsIiwibGFiZWxDbGFzc05hbWUiLCJsYWJlbENsYXNzZXMiLCJhbGxNZXNzYWdlcyIsImNvbmNhdCIsIm1hcCIsImVsIiwiaWQiLCJpY29uU2l6ZSIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwicmVhZG9ubHkiLCJ2aXNpYmxlIiwicGxhY2Vob2xkZXIiLCJkaXNwbGF5VmFsdWUiLCJhdHRhY2hDbGFzc2VzIiwibmVnYXRpdmVCdXR0b25TdHlsZSIsInJlbmRlckxhYmVsIiwicmVuZGVyTWVzc2FnZXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm1hbmFnZVZhbHVlIiwib25WYWx1ZUNoYW5nZSIsInRhYmxlU3lzSWQiLCJ0YWJsZU5hbWUiLCJwcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsImFycmF5T2YiLCJzdHJpbmciLCJudW1iZXIiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm9uZU9mIiwib2JqZWN0Iiwib25lT2ZUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxVOzs7OztBQUNGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsT0FBTyxFQUFFLE1BQUtGLEtBQUwsQ0FBV0UsT0FEWDtBQUVUQyxNQUFBQSxJQUFJLEVBQUVDLFNBRkc7QUFHVEMsTUFBQUEsS0FBSyxFQUFFLEtBSEU7QUFJVEMsTUFBQUEsY0FBYyxFQUFFO0FBSlAsS0FBYjtBQU9BLFVBQUtDLHFCQUFMLEdBQTZCLE1BQUtBLHFCQUFM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QyxFQUFBQSxPQUFPLEVBQUV1QyxzQkFBVUgsT0FBVixDQUFrQkcsc0JBQVVDLEtBQVYsQ0FBZ0I7QUFDdkN2QyxJQUFBQSxNQUFNLEVBQUVzQyxzQkFBVUUsS0FBVixDQUFnQixDQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLFVBQXhCLEVBQW9DLE1BQXBDLEVBQTRDLFlBQTVDLENBQWhCLENBRCtCO0FBRXZDcEYsSUFBQUEsT0FBTyxFQUFFa0Ysc0JBQVVGLE1BRm9CO0FBR3ZDOUUsSUFBQUEsSUFBSSxFQUFFZ0Ysc0JBQVVGLE1BSHVCO0FBSXZDckIsSUFBQUEsU0FBUyxFQUFFaUIsc0JBQVVTLE1BSmtCO0FBS3ZDM0IsSUFBQUEsUUFBUSxFQUFFd0Isc0JBQVVELE1BTG1CO0FBTXZDcEYsSUFBQUEsS0FBSyxFQUFFK0Usc0JBQVVLO0FBTnNCLEdBQWhCLENBQWxCLENBdEJVO0FBOEJuQm5GLEVBQUFBLGtCQUFrQixFQUFFOEUsc0JBQVVLLE1BOUJYO0FBZ0NuQjtBQUNBNUUsRUFBQUEsS0FBSyxFQUFFdUUsc0JBQVVTLE1BakNFO0FBa0NuQlgsRUFBQUEsVUFBVSxFQUFFRSxzQkFBVUksTUFsQ0g7QUFtQ25CTCxFQUFBQSxTQUFTLEVBQUVDLHNCQUFVSSxNQW5DRjtBQW9DbkJoRCxFQUFBQSxlQUFlLEVBQUU0QyxzQkFBVUksTUFwQ1I7QUFzQ25CO0FBQ0FyQixFQUFBQSxTQUFTLEVBQUVpQixzQkFBVVUsU0FBVixDQUFvQixDQUFDVixzQkFBVVMsTUFBWCxFQUFtQlQsc0JBQVVJLE1BQTdCLENBQXBCLENBdkNRO0FBd0NuQjdCLEVBQUFBLGNBQWMsRUFBRXlCLHNCQUFVVSxTQUFWLENBQW9CLENBQUNWLHNCQUFVUyxNQUFYLEVBQW1CVCxzQkFBVUksTUFBN0IsQ0FBcEI7QUF4Q0csQ0FBdkI7ZUE4Q2VsSCxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFJlcXVpcmVkTGFiZWwgZnJvbSBcIi4uL1JlcXVpcmVkTGFiZWwvUmVxdWlyZWRMYWJlbFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBJbmZvTWVzc2FnZSBmcm9tIFwiLi4vSW5mb01lc3NhZ2UvSW5mb01lc3NhZ2VcIjtcclxuaW1wb3J0IHtnZXRGaWxlRXh0ZW5zaW9uc30gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vRmlsZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiY3Jvc3MtZmV0Y2hcIjtcclxuXHJcbmNsYXNzIEF0dGFjaG1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW52YWxpZDogdGhpcy5wcm9wcy5pbnZhbGlkLFxyXG4gICAgICAgICAgICBmaWxlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGZvY3VzOiBmYWxzZSxcclxuICAgICAgICAgICAgc3lzdGVtTWVzc2FnZXM6IFtdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lckNsaWNrZWRFdmVudCA9IHRoaXMuY29udGFpbmVyQ2xpY2tlZEV2ZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkludmFsaWRFdmVudCA9IHRoaXMub25JbnZhbGlkRXZlbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlRXZlbnQgPSB0aGlzLm9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRHJvcEV2ZW50ID0gdGhpcy5vbkRyb3BFdmVudC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmRvd25sb2FkRmlsZSA9IHRoaXMuZG93bmxvYWRGaWxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVGaWxlID0gdGhpcy5kZWxldGVGaWxlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Rm9jdXMgPSB0aGlzLnNldEZvY3VzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRCbHVyID0gdGhpcy5zZXRCbHVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRGaWxlID0gdGhpcy5zZXRGaWxlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmlsZShmaWxlKXtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5maWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Qmx1cigpO1xyXG4gICAgICAgICAgICBjb25zdCB7bWF4QXR0YWNobWVudFNpemUsIGNvbnRlbnRUeXBlLCBleHRlbnNpb25zfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgICAgIGxldCBpc0ZpdFNpemUgPSBtYXhBdHRhY2htZW50U2l6ZSA/IGZpbGUuc2l6ZSA8PSBtYXhBdHRhY2htZW50U2l6ZSA6IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBpc0ZpdFR5cGUgPSBjb250ZW50VHlwZSA/IGNvbnRlbnRUeXBlLmluY2x1ZGVzKGZpbGUudHlwZSkgOiB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgaXNGaXRFeHRlbnNpb25zID0gZXh0ZW5zaW9ucyA/IGV4dGVuc2lvbnMuaW5jbHVkZXMoZ2V0RmlsZUV4dGVuc2lvbnMoZmlsZS5uYW1lKSkgOiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVycm9ySWNvbiA9IFwiZXhjbGFtYXRpb24tY2lyY2xlXCJcclxuICAgICAgICAgICAgbGV0IGVycm9yTWVzc2FnZXMgPSBbXVxyXG4gICAgICAgICAgICBsZXQgZGVsYXkgPSB0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNEZWxheTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNGaXRUeXBlKVxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKHtjb250ZW50OiBgQXZhaWxhYmxlIHR5cGVzOiAke2NvbnRlbnRUeXBlLmpvaW4oJywgJyl9YCwgaWNvbjogZXJyb3JJY29uLCBkZWxheTogZGVsYXl9KVxyXG4gICAgICAgICAgICBpZiAoIWlzRml0U2l6ZSlcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXMucHVzaCh7Y29udGVudDogYE1heCBmaWxlIHNpemUgPSAke21heEF0dGFjaG1lbnRTaXplIC8gMTAwMH0gS2JgLCBpY29uOiBlcnJvckljb24sIGRlbGF5OiBkZWxheX0pXHJcbiAgICAgICAgICAgIGlmICghaXNGaXRFeHRlbnNpb25zKVxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKHtjb250ZW50OiBgQXZhaWxhYmxlIGV4dGVuc2lvbnM6ICR7ZXh0ZW5zaW9ucy5qb2luKCcsICcpfWAsIGljb246IGVycm9ySWNvbiwgZGVsYXk6IGRlbGF5fSlcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2VzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlOiBmaWxlLCBzeXN0ZW1NZXNzYWdlczogW119KTtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzeXN0ZW1NZXNzYWdlczogZXJyb3JNZXNzYWdlc30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRmlsZShlKXtcclxuICAgICAgICB0aGlzLnN0b3BFdmVudChlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmaWxlOiB1bmRlZmluZWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pbnB1dClcclxuICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRGaWxlKGUpe1xyXG4gICAgICAgIHRoaXMuc3RvcEV2ZW50KGUpXHJcbiAgICAgICAgbGV0IGZpbGUgPSB0aGlzLnN0YXRlLmZpbGU7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYilcclxuICAgICAgICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGZpbGUsIGZpbGUubmFtZSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIiksXHJcbiAgICAgICAgICAgICAgICB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgICAgICBhLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIGEuZG93bmxvYWQgPSBmaWxlLm5hbWU7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgIGEuY2xpY2soKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEV2ZW50KGUpe1xyXG4gICAgICAgIGU/LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZT8uc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Rm9jdXMoZSl7XHJcbiAgICAgICAgdGhpcy5zdG9wRXZlbnQoZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXM6IHRydWV9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRCbHVyKGUpe1xyXG4gICAgICAgIHRoaXMuc3RvcEV2ZW50KGUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzOiBmYWxzZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW52YWxpZEV2ZW50KGUpe1xyXG4gICAgICAgIHRoaXMuc3RvcEV2ZW50KGUpO1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VJbnZhbGlkLCBvbkludmFsaWR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYoIW1hbmFnZUludmFsaWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ludmFsaWQ6IHRydWV9KVxyXG5cclxuICAgICAgICBvbkludmFsaWQoe2V2ZW50OiBlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VFdmVudChlKXtcclxuICAgICAgICB0aGlzLnN0b3BFdmVudChlKTtcclxuICAgICAgICB0aGlzLnNldEZpbGUodGhpcy5pbnB1dD8uZmlsZXNbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJvcEV2ZW50KGUpe1xyXG4gICAgICAgIHRoaXMuc3RvcEV2ZW50KGUpO1xyXG4gICAgICAgIHRoaXMuc2V0RmlsZShlLmRhdGFUcmFuc2Zlci5maWxlc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbmVyQ2xpY2tlZEV2ZW50KGUpe1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmZpbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRGb2N1cyhlKTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dD8uY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XHJcbiAgICAgICAgY29uc3Qge21hbmFnZUludmFsaWQsIGludmFsaWR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYobWFuYWdlSW52YWxpZCAmJiBpbnZhbGlkICE9PSB0aGlzLnN0YXRlLmludmFsaWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ludmFsaWQ6IGludmFsaWR9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHthdHRhY2htZW50U3lzSWR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYoYXR0YWNobWVudFN5c0lkKSB7XHJcbiAgICAgICAgLy8gICAgbGV0IHVybCA9IGAvYXBpL25vdy9hdHRhY2htZW50P3N5c3Bhcm1fcXVlcnk9c3lzX2lkJSR7YXR0YWNobWVudFN5c0lkfWA7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBgL2FwaS9ub3cvYXR0YWNobWVudC8ke2F0dGFjaG1lbnRTeXNJZH1gO1xyXG4gICAgICAgICAgLy8gIGxldCBwYXJhbXMgPSB7c3lzcGFybV9xdWVyeTogYHN5c19pZCUke2F0dGFjaG1lbnRTeXNJZH1gfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAudGhlbihhc3luYyByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgLy8gIHRoaXMuc2V0U3RhdGUoe3Bvc3RJZDogZGF0YS5pZH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogZXJyb3IudG9TdHJpbmcoKX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciEnLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTGFiZWwoKSB7XHJcbiAgICAgICAgY29uc3Qge3JlcXVpcmVkLCBsYWJlbCwgbGFiZWxDbGFzc05hbWV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7aW52YWxpZH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBsYWJlbENsYXNzZXMgPSBjbGFzc25hbWVzKGxhYmVsQ2xhc3NOYW1lLCBcImlucC1sYWJlbFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChsYWJlbCA/XHJcbiAgICAgICAgICAgIDxSZXF1aXJlZExhYmVsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2xhYmVsQ2xhc3Nlc31cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgIGludmFsaWQ9e2ludmFsaWR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICBodG1sRm9yPXtuYW1lfVxyXG4gICAgICAgICAgICAvPiA6IG51bGwpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTWVzc2FnZXMoKSB7XHJcbiAgICAgICAgY29uc3Qge21lc3NhZ2V9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7c3lzdGVtTWVzc2FnZXN9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgYWxsTWVzc2FnZXMgPSBtZXNzYWdlLmNvbmNhdChzeXN0ZW1NZXNzYWdlcyk7XHJcblxyXG4gICAgICAgICByZXR1cm4gKGFsbE1lc3NhZ2VzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgIGFsbE1lc3NhZ2VzLm1hcCgoZWwsIGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxJbmZvTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uU2l6ZT17ZWwuaWNvblNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZWwuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtlbC5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtlbC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9e2VsLnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e2VsLmRlbGF5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICByZWFkb25seSxcclxuICAgICAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgICAgIHZpc2libGUsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGUsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICBkaXNwbGF5VmFsdWVcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3Qge2ludmFsaWQsIGZpbGUsIGZvY3VzfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgbGV0IGF0dGFjaENsYXNzZXMgPSAgY2xhc3NuYW1lcyhcImF0dGFjaC1jb250YWluZXJcIiwge1xyXG4gICAgICAgICAgICBcIi0tZm9jdXNcIjogZm9jdXMsXHJcbiAgICAgICAgICAgIFwiLS1pbnZhbGlkXCI6IGludmFsaWQsXHJcbiAgICAgICAgICAgIFwiLS1yZWFkb25seVwiOiByZWFkb25seSxcclxuICAgICAgICAgICAgXCItLWRpc2FibGVkXCI6IGRpc2FibGVkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBuZWdhdGl2ZUJ1dHRvblN0eWxlID0ge1xyXG4gICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiAnMTZweCdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHZpc2libGUgP1xyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0ge2VsID0+IHRoaXMuaW5wdXQgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD17Y29udGVudFR5cGU/LmpvaW4oJywnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW52YWxpZD17dGhpcy5vbkludmFsaWRFdmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VFdmVudH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwic3dmLWF0dGFjaC1pbnB1dFwiLCBjbGFzc05hbWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTGFiZWwoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthdHRhY2hDbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXt0aGlzLm9uRHJvcEV2ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnRW50ZXI9e3RoaXMuc2V0Rm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXt0aGlzLnNldEZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnRXhpdD17dGhpcy5zZXRCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnTGVhdmU9e3RoaXMuc2V0Qmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY29udGFpbmVyQ2xpY2tlZEV2ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxGaWxlIGRpc3BsYXlWYWx1ZT17ZGlzcGxheVZhbHVlfSBmaWxlPXtmaWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGUuRW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249e1wieFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJpbmhlcml0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtcInNtXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZmlsZS1idXR0b24gbmVnYXRpdmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVN0eWxlPXtuZWdhdGl2ZUJ1dHRvblN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWxldGVGaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXtcImRvd25sb2FkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtcImluaGVyaXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmaWxlLWJ1dHRvbiBwb3NpdGl2ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17XCJzbVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kb3dubG9hZEZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpbGUuRW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT17XCJhdHRhY2gtcGxhY2Vob2xkZXJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbGFjZWhvbGRlciA/IHBsYWNlaG9sZGVyIDogXCJTcGFjZSBmb3IgeW91ciBmaWxlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWVzc2FnZXMoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5BdHRhY2htZW50LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGludmFsaWQ6IGZhbHNlLFxyXG4gICAgbWFuYWdlSW52YWxpZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VWYWx1ZTogZmFsc2UsXHJcbiAgICByZWFkb25seTogZmFsc2UsXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgY2xhc3NOYW1lOiB7fSxcclxuICAgIG9uSW52YWxpZDogKCkgPT4gdm9pZCAwLFxyXG4gICAgb25WYWx1ZUNoYW5nZTogKCkgPT4gdm9pZCAwLFxyXG4gICAgbGFiZWxDbGFzc05hbWU6IHt9LFxyXG4gICAgbWVzc2FnZTogW10sXHJcbiAgICBlcnJvck1lc3NhZ2VzRGVsYXk6IDIwMDAsXHJcbiAgICB0YWJsZVN5c0lkOiBcIjhmNTE4MjhhZGJjMzJjOTA1ODg0ZWIxODRiOTYxOWE1XCIsXHJcbiAgICB0YWJsZU5hbWU6IFwieF9hYXJvMl90ZWFtd29ya19jb250YWluZXJcIixcclxuICAgIGF0dGFjaG1lbnRTeXNJZDogXCI3NmM2OGY0YWRiMWJhNDkwNTg4NGViMTg0Yjk2MTkwNFwiLFxyXG59O1xyXG5cclxuQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvL3N0YXR1c1xyXG4gICAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgaW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZWFkb25seTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZXF1aXJlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICB2aXNpYmxlOiBwcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvL2V2ZW50c1xyXG4gICAgb25JbnZhbGlkOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uVmFsdWVDaGFuZ2U6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgbWFuYWdlSW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VWYWx1ZTogcHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLy9kZXNjcmlwdGlvblxyXG4gICAgY29udGVudFR5cGU6IHByb3BUeXBlcy5hcnJheU9mKHByb3BUeXBlcy5zdHJpbmcpLFxyXG4gICAgZXh0ZW5zaW9uczogcHJvcFR5cGVzLmFycmF5T2YocHJvcFR5cGVzLnN0cmluZyksXHJcbiAgICBkaXNwbGF5VmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcjogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbmFtZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG1heEF0dGFjaG1lbnRTaXplOiBwcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWVzc2FnZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBzdGF0dXM6IFByb3BUeXBlcy5vbmVPZihbXCJjcml0aWNhbFwiLCBcIndhcm5pbmdcIiwgXCJwb3NpdGl2ZVwiLCBcImluZm9cIiwgXCJzdWdnZXN0aW9uXCJdKSxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGljb25TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGRlbGF5OiBwcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9KSksXHJcbiAgICBlcnJvck1lc3NhZ2VzRGVsYXk6IHByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLy9pbnB1dCBkYXRhXHJcbiAgICB2YWx1ZTogcHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHRhYmxlU3lzSWQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0YWJsZU5hbWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBhdHRhY2htZW50U3lzSWQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLy9jbGFzc2VzXHJcbiAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5vYmplY3QsIHByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgIGxhYmVsQ2xhc3NOYW1lOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMub2JqZWN0LCBwcm9wVHlwZXMuc3RyaW5nXSksXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF0dGFjaG1lbnQiXX0=