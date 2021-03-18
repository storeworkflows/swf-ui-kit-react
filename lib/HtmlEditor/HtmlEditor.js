"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _tinymceReact = require("@tinymce/tinymce-react");

var _utils = require("../../lib/utils");

var _uuid = require("uuid");

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

var _index = require("../index");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var HtmlEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(HtmlEditor, _React$Component);

  var _super = _createSuper(HtmlEditor);

  function HtmlEditor(props) {
    var _this;

    _classCallCheck(this, HtmlEditor);

    _this = _super.call(this, props);

    _this.fetchRequest = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var url, _ref$params, params, result, response, resultJson;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = _ref.url, _ref$params = _ref.params, params = _ref$params === void 0 ? {} : _ref$params;
                console.log("params", params, "url", url);
                _context.next = 4;
                return (0, _crossFetch["default"])(url, _objectSpread(_objectSpread({}, params), {}, {
                  credentials: 'same-origin',
                  headers: {
                    'X-Transaction-Source': window.transaction_source,
                    'X-UserToken': window.g_ck,
                    'Content-Type': 'multipart/form-data',
                    'Accept': "*/*"
                  }
                }));

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();

              case 7:
                resultJson = _context.sent;
                result = resultJson.result;
                console.log(resultJson);
                return _context.abrupt("return", result);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.state = {
      inputVal: "",
      TinyMcEditor: null
    };
    _this.changeInput = _this.changeInput.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HtmlEditor, [{
    key: "changeInput",
    value: function changeInput(content) {
      var _this$props;

      this.setState({
        inputVal: content
      });
      (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.onValueChange(content);
    }
  }, {
    key: "ascii_to_hexa",
    value: function ascii_to_hexa(str) {
      var arr1 = [];

      for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
      }

      return arr1.join('');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          toolbar = _this$props2.toolbar,
          content = _this$props2.content,
          readonly = _this$props2.readonly,
          label = _this$props2.label,
          required = _this$props2.required;
      var labelColor = !!this.state.inputVal && required ? "rgb(99,114,116)" : "rgb(200,60,54)";
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [!!label || required ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "editor-label-area",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            style: {
              color: labelColor
            },
            onClick: function onClick() {
              return _this2.state.TinyMcEditor.focus();
            },
            children: label
          }), required ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Icon, {
            color: labelColor,
            icon: "asterisk",
            size: "xs"
          }) : null]
        }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_tinymceReact.Editor, {
          toolbar: toolbar,
          plugins: ["link,lists,advlist,table,powerpaste,searchreplace,preview,fullscreen,a11y_fixes,placeholder,readonlynoborder,code,textcolor"],
          onEditorChange: this.changeInput,
          init: {
            menubar: false,
            statusbar: false,
            init_instance_callback: function init_instance_callback(editor) {
              var height = !!_this2.props.height ? _this2.props.height : "".concat(Math.round(document.body.offsetHeight * 0.6) - 36, "px");
              !!content ? editor.selection.setContent(content) : _utils.noop;
              readonly ? editor.setMode("readonly") : _utils.noop;

              _this2.setState({
                TinyMcEditor: editor
              });

              editor.dom.setStyle(editor.iframeElement, "height", height);
            },
            width: "99%",
            document_base_url: window.location.origin,
            images_upload_handler: function images_upload_handler(blobInfo, success, failure) {
              var selectedFile = blobInfo.blob();
              var uuid = (0, _uuid.v4)().split("-").join("");
              var myHeaders = new Headers();
              var formdata = new FormData();
              myHeaders.append("X-UserToken", window.g_ck);
              formdata.append('table_name', "ZZ_YYsys_attachment");
              formdata.append('table_sys_id', uuid);
              formdata.append('file', selectedFile);
              (0, _crossFetch["default"])("".concat(window.location.origin, "/api/now/attachment/upload"), {
                method: "POST",
                headers: myHeaders,
                body: formdata
              }).then(function (res) {
                if (res.status === 201) return res.json();
              }).then(function (resJson) {
                return success(window.location.origin + "/sys_attachment.do?sys_id=" + resJson.result.sys_id);
              });
            }
          }
        })]
      });
    }
  }]);

  return HtmlEditor;
}(React.Component);

exports["default"] = HtmlEditor;
HtmlEditor.defaultProps = {
  toolbar: 'bold italic underline undo redo | forecolor backcolor | fontselect fontsizeselect table | link unlink | code  | alignleft aligncenter alignright | bullist numlist | fullscreen',
  onValueChange: _utils.noop,
  content: "",
  readonly: false,
  label: "",
  required: false,
  height: ""
};
HtmlEditor.propTypes = {
  toolbar: _propTypes["default"].string,
  onValueChange: _propTypes["default"].func,
  content: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  height: _propTypes["default"].string
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IdG1sRWRpdG9yL0h0bWxFZGl0b3IuanMiXSwibmFtZXMiOlsiSHRtbEVkaXRvciIsInByb3BzIiwiZmV0Y2hSZXF1ZXN0IiwidXJsIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIndpbmRvdyIsInRyYW5zYWN0aW9uX3NvdXJjZSIsImdfY2siLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHRKc29uIiwicmVzdWx0Iiwic3RhdGUiLCJpbnB1dFZhbCIsIlRpbnlNY0VkaXRvciIsImNoYW5nZUlucHV0IiwiYmluZCIsImNvbnRlbnQiLCJzZXRTdGF0ZSIsIm9uVmFsdWVDaGFuZ2UiLCJzdHIiLCJhcnIxIiwibiIsImwiLCJsZW5ndGgiLCJoZXgiLCJOdW1iZXIiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJwdXNoIiwiam9pbiIsInRvb2xiYXIiLCJyZWFkb25seSIsImxhYmVsIiwicmVxdWlyZWQiLCJsYWJlbENvbG9yIiwiY29sb3IiLCJmb2N1cyIsIm1lbnViYXIiLCJzdGF0dXNiYXIiLCJpbml0X2luc3RhbmNlX2NhbGxiYWNrIiwiZWRpdG9yIiwiaGVpZ2h0IiwiTWF0aCIsInJvdW5kIiwiZG9jdW1lbnQiLCJib2R5Iiwib2Zmc2V0SGVpZ2h0Iiwic2VsZWN0aW9uIiwic2V0Q29udGVudCIsIm5vb3AiLCJzZXRNb2RlIiwiZG9tIiwic2V0U3R5bGUiLCJpZnJhbWVFbGVtZW50Iiwid2lkdGgiLCJkb2N1bWVudF9iYXNlX3VybCIsImxvY2F0aW9uIiwib3JpZ2luIiwiaW1hZ2VzX3VwbG9hZF9oYW5kbGVyIiwiYmxvYkluZm8iLCJzdWNjZXNzIiwiZmFpbHVyZSIsInNlbGVjdGVkRmlsZSIsImJsb2IiLCJ1dWlkIiwic3BsaXQiLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1ldGhvZCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJyZXNKc29uIiwic3lzX2lkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7O0FBQ2pCLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsVUF5Qm5CQyxZQXpCbUI7QUFBQSwwRUF5Qko7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxnQkFBQUEsR0FBVCxRQUFTQSxHQUFULHFCQUFjQyxNQUFkLEVBQWNBLE1BQWQsNEJBQXVCLEVBQXZCO0FBRVhDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixNQUF0QixFQUE4QixLQUE5QixFQUFxQ0QsR0FBckM7QUFGVztBQUFBLHVCQUdZLDRCQUFNQSxHQUFOLGtDQUNoQkMsTUFEZ0I7QUFFbkJHLGtCQUFBQSxXQUFXLEVBQUUsYUFGTTtBQUduQkMsa0JBQUFBLE9BQU8sRUFBRTtBQUNMLDRDQUF3QkMsTUFBTSxDQUFDQyxrQkFEMUI7QUFFTCxtQ0FBZUQsTUFBTSxDQUFDRSxJQUZqQjtBQUdMLG9DQUFnQixxQkFIWDtBQUlMLDhCQUFVO0FBSkw7QUFIVSxtQkFIWjs7QUFBQTtBQUdMQyxnQkFBQUEsUUFISztBQUFBO0FBQUEsdUJBYWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQWJkOztBQUFBO0FBYUxDLGdCQUFBQSxVQWJLO0FBY1hDLGdCQUFBQSxNQUFNLEdBQUdELFVBQVUsQ0FBQ0MsTUFBcEI7QUFDQVYsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxVQUFaO0FBZlcsaURBaUJKQyxNQWpCSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQXpCSTs7QUFBQTtBQUFBO0FBQUE7QUFB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bkIxQyxFQUFBQSxNQUFNLEVBQUV1QyxzQkFBVUM7QUFQQyxDQUF2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge0VkaXRvcn0gZnJvbSBcIkB0aW55bWNlL3RpbnltY2UtcmVhY3RcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XHJcbmltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImNyb3NzLWZldGNoXCI7XHJcbmltcG9ydCB7SWNvbn0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdG1sRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlucHV0VmFsOiBcIlwiLFxyXG4gICAgICAgICAgICBUaW55TWNFZGl0b3I6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJbnB1dCA9IHRoaXMuY2hhbmdlSW5wdXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VJbnB1dChjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXRWYWw6IGNvbnRlbnR9KTtcclxuICAgICAgICB0aGlzLnByb3BzPy5vblZhbHVlQ2hhbmdlKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzY2lpX3RvX2hleGEoc3RyKVxyXG4gIHtcclxuXHR2YXIgYXJyMSA9IFtdO1xyXG5cdGZvciAodmFyIG4gPSAwLCBsID0gc3RyLmxlbmd0aDsgbiA8IGw7IG4gKyspIFxyXG4gICAgIHtcclxuXHRcdHZhciBoZXggPSBOdW1iZXIoc3RyLmNoYXJDb2RlQXQobikpLnRvU3RyaW5nKDE2KTtcclxuXHRcdGFycjEucHVzaChoZXgpO1xyXG5cdCB9XHJcblx0cmV0dXJuIGFycjEuam9pbignJyk7XHJcbiAgIH1cclxuXHJcbiAgICBmZXRjaFJlcXVlc3QgPSBhc3luYyAoeyB1cmwsIHBhcmFtcyA9IHt9IH0pID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyYW1zXCIsIHBhcmFtcywgXCJ1cmxcIiwgdXJsKVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdYLVRyYW5zYWN0aW9uLVNvdXJjZSc6IHdpbmRvdy50cmFuc2FjdGlvbl9zb3VyY2UsXHJcbiAgICAgICAgICAgICAgICAnWC1Vc2VyVG9rZW4nOiB3aW5kb3cuZ19jayxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogXCIqLypcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdEpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0SnNvbi5yZXN1bHQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0SnNvbilcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICB0b29sYmFyLFxyXG4gICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICByZWFkb25seSxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhYmVsQ29sb3IgPSAhIXRoaXMuc3RhdGUuaW5wdXRWYWwgJiYgcmVxdWlyZWQgPyBcInJnYig5OSwxMTQsMTE2KVwiIDogXCJyZ2IoMjAwLDYwLDU0KVwiIFxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7ISFsYWJlbCB8fCByZXF1aXJlZCA/IDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLWxhYmVsLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tjb2xvcjogbGFiZWxDb2xvcn19IG9uQ2xpY2s9eygpID0+IHRoaXMuc3RhdGUuVGlueU1jRWRpdG9yLmZvY3VzKCl9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXF1aXJlZCA/IDxJY29uIGNvbG9yPXtsYWJlbENvbG9yfSBpY29uPVwiYXN0ZXJpc2tcIiBzaXplPVwieHNcIiAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI9e3Rvb2xiYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2lucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmssbGlzdHMsYWR2bGlzdCx0YWJsZSxwb3dlcnBhc3RlLHNlYXJjaHJlcGxhY2UscHJldmlldyxmdWxsc2NyZWVuLGExMXlfZml4ZXMscGxhY2Vob2xkZXIscmVhZG9ubHlub2JvcmRlcixjb2RlLHRleHRjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBvbkVkaXRvckNoYW5nZSA9e3RoaXMuY2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51YmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzYmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdF9pbnN0YW5jZV9jYWxsYmFjazogKGVkaXRvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gISF0aGlzLnByb3BzLmhlaWdodCA/IHRoaXMucHJvcHMuaGVpZ2h0IDogYCR7TWF0aC5yb3VuZChkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCAqIDAuNikgLSAzNn1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWNvbnRlbnQgPyBlZGl0b3Iuc2VsZWN0aW9uLnNldENvbnRlbnQoY29udGVudCkgOiBub29wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHkgPyBlZGl0b3Iuc2V0TW9kZShcInJlYWRvbmx5XCIpIDogbm9vcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1RpbnlNY0VkaXRvcjogZWRpdG9yfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5kb20uc2V0U3R5bGUoZWRpdG9yLmlmcmFtZUVsZW1lbnQsIFwiaGVpZ2h0XCIsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjk5JVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudF9iYXNlX3VybDogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzX3VwbG9hZF9oYW5kbGVyOiAoYmxvYkluZm8sIHN1Y2Nlc3MsIGZhaWx1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGJsb2JJbmZvLmJsb2IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKS5zcGxpdChcIi1cIikuam9pbihcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlIZWFkZXJzLmFwcGVuZChcIlgtVXNlclRva2VuXCIsIHdpbmRvdy5nX2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1kYXRhLmFwcGVuZCgndGFibGVfbmFtZScsIGBaWl9ZWXN5c19hdHRhY2htZW50YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtZGF0YS5hcHBlbmQoJ3RhYmxlX3N5c19pZCcsIHV1aWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWRhdGEuYXBwZW5kKCdmaWxlJywgc2VsZWN0ZWRGaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2FwaS9ub3cvYXR0YWNobWVudC91cGxvYWRgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBteUhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZm9ybWRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc0pzb24gPT4gc3VjY2Vzcyh3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgXCIvc3lzX2F0dGFjaG1lbnQuZG8/c3lzX2lkPVwiICsgcmVzSnNvbi5yZXN1bHQuc3lzX2lkKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5IdG1sRWRpdG9yLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHRvb2xiYXI6ICdib2xkIGl0YWxpYyB1bmRlcmxpbmUgdW5kbyByZWRvIHwgZm9yZWNvbG9yIGJhY2tjb2xvciB8IGZvbnRzZWxlY3QgZm9udHNpemVzZWxlY3QgdGFibGUgfCBsaW5rIHVubGluayB8IGNvZGUgIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgfCBidWxsaXN0IG51bWxpc3QgfCBmdWxsc2NyZWVuJyxcclxuICAgIG9uVmFsdWVDaGFuZ2U6IG5vb3AsXHJcbiAgICBjb250ZW50OiBcIlwiLFxyXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgbGFiZWw6IFwiXCIsXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICBoZWlnaHQ6IFwiXCJcclxufVxyXG5cclxuSHRtbEVkaXRvci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0b29sYmFyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25WYWx1ZUNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcmVhZG9ubHk6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICByZXF1aXJlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBoZWlnaHQ6IHByb3BUeXBlcy5zdHJpbmdcclxufSJdfQ==