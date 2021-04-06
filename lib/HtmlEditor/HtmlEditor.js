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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
                _context.next = 3;
                return (0, _crossFetch["default"])(url, _objectSpread(_objectSpread({}, params), {}, {
                  credentials: 'same-origin',
                  headers: {
                    'X-Transaction-Source': window.transaction_source,
                    'X-UserToken': window.g_ck,
                    'Content-Type': 'multipart/form-data',
                    'Accept': "*/*"
                  }
                }));

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                resultJson = _context.sent;
                result = resultJson.result;
                return _context.abrupt("return", result);

              case 9:
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

    _this.changeBaseURL();

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
    key: "changeBaseURL",
    value: function changeBaseURL() {
      if ("tinymce" in window) {
        window.tinymce.baseURL = HtmlEditor.baseUrl;
      }
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
            remove_script_host: true,
            relative_urls: true,
            convert_urls: false,
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
            external_plugins: {
              codemirror: '/scripts/tinymce_default/node_modules/sn-tinymce/js/tinymce/sn_plugins/codemirror/plugin.min.js'
            },
            codemirror: {
              path: 'CodeMirror'
            },
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
            },
            setup: function setup(editor) {
              _this2.editor = editor;
              editor.on("init", function () {});
            }
          }
        })]
      });
    }
  }]);

  return HtmlEditor;
}(React.Component);

exports["default"] = HtmlEditor;
HtmlEditor.baseUrl = "/scripts/tinymce_default/node_modules/sn-tinymce/js/tinymce";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IdG1sRWRpdG9yL0h0bWxFZGl0b3IuanMiXSwibmFtZXMiOlsiSHRtbEVkaXRvciIsInByb3BzIiwiZmV0Y2hSZXF1ZXN0IiwidXJsIiwicGFyYW1zIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwid2luZG93IiwidHJhbnNhY3Rpb25fc291cmNlIiwiZ19jayIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdEpzb24iLCJyZXN1bHQiLCJzdGF0ZSIsImlucHV0VmFsIiwiVGlueU1jRWRpdG9yIiwiY2hhbmdlSW5wdXQiLCJiaW5kIiwiY2hhbmdlQmFzZVVSTCIsImNvbnRlbnQiLCJzZXRTdGF0ZSIsIm9uVmFsdWVDaGFuZ2UiLCJzdHIiLCJhcnIxIiwibiIsImwiLCJsZW5ndGgiLCJoZXgiLCJOdW1iZXIiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJwdXNoIiwiam9pbiIsInRpbnltY2UiLCJiYXNlVVJMIiwiYmFzZVVybCIsInRvb2xiYXIiLCJyZWFkb25seSIsImxhYmVsIiwicmVxdWlyZWQiLCJsYWJlbENvbG9yIiwiY29sb3IiLCJmb2N1cyIsIm1lbnViYXIiLCJzdGF0dXNiYXIiLCJyZW1vdmVfc2NyaXB0X2hvc3QiLCJyZWxhdGl2ZV91cmxzIiwiY29udmVydF91cmxzIiwiaW5pdF9pbnN0YW5jZV9jYWxsYmFjayIsImVkaXRvciIsImhlaWdodCIsIk1hdGgiLCJyb3VuZCIsImRvY3VtZW50IiwiYm9keSIsIm9mZnNldEhlaWdodCIsInNlbGVjdGlvbiIsInNldENvbnRlbnQiLCJub29wIiwic2V0TW9kZSIsImRvbSIsInNldFN0eWxlIiwiaWZyYW1lRWxlbWVudCIsIndpZHRoIiwiZG9jdW1lbnRfYmFzZV91cmwiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImV4dGVybmFsX3BsdWdpbnMiLCJjb2RlbWlycm9yIiwicGF0aCIsImltYWdlc191cGxvYWRfaGFuZGxlciIsImJsb2JJbmZvIiwic3VjY2VzcyIsImZhaWx1cmUiLCJzZWxlY3RlZEZpbGUiLCJibG9iIiwidXVpZCIsInNwbGl0IiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImZvcm1kYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwicmVzSnNvbiIsInN5c19pZCIsInNldHVwIiwib24iLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7QUFHakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxVQWdDbkJDLFlBaENtQjtBQUFBLDBFQWdDSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGdCQUFBQSxHQUFULFFBQVNBLEdBQVQscUJBQWNDLE1BQWQsRUFBY0EsTUFBZCw0QkFBdUIsRUFBdkI7QUFBQTtBQUFBLHVCQUVZLDRCQUFNRCxHQUFOLGtDQUNoQkMsTUFEZ0I7QUFFbkJDLGtCQUFBQSxXQUFXLEVBQUUsYUFGTTtBQUduQkMsa0JBQUFBLE9BQU8sRUFBRTtBQUNMLDRDQUF3QkMsTUFBTSxDQUFDQyxrQkFEMUI7QUFFTCxtQ0FBZUQsTUFBTSxDQUFDRSxJQUZqQjtBQUdMLG9DQUFnQixxQkFIWDtBQUlMLDhCQUFVO0FBSkw7QUFIVSxtQkFGWjs7QUFBQTtBQUVMQyxnQkFBQUEsUUFGSztBQUFBO0FBQUEsdUJBWWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQVpkOztBQUFBO0FBWUxDLGdCQUFBQSxVQVpLO0FBYVhDLGdCQUFBQSxNQUFNLEdBQUdELFVBQVUsQ0FBQ0MsTUFBcEI7QUFiVyxpREFlSkEsTUFmSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQWhDSTs7QUFB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Ozs7QUFBekI3RixVLENBQ1ZvQyxPLEdBQVUsNkQ7QUFrSXJCcEMsVUFBVSxDQUFDOEYsWUFBWCxHQUEwQjtBQUN0QnpELEVBQUFBLE9BQU8sRUFBRSxpTEFEYTtBQUV0QmYsRUFBQUEsYUFBYSxFQUFFcUMsV0FGTztBQUd0QnZDLEVBQUFBLE9BQU8sRUFBRSxFQUhhO0FBSXRCa0IsRUFBQUEsUUFBUSxFQUFFLEtBSlk7QUFLdEJDLEVBQUFBLEtBQUssRUFBRSxFQUxlO0FBTXRCQyxFQUFBQSxRQUFRLEVBQUUsS0FOWTtBQU90QlcsRUFBQUEsTUFBTSxFQUFFO0FBUGMsQ0FBMUI7QUFVQW5ELFVBQVUsQ0FBQytGLFNBQVgsR0FBdUI7QUFDbkIxRCxFQUFBQSxPQUFPLEVBQUUwRCxzQkFBVUMsTUFEQTtBQUVuQjFFLEVBQUFBLGFBQWEsRUFBRXlFLHNCQUFVRSxJQUZOO0FBR25CN0UsRUFBQUEsT0FBTyxFQUFFMkUsc0JBQVVDLE1BSEE7QUFJbkIxRCxFQUFBQSxRQUFRLEVBQUV5RCxzQkFBVUcsSUFKRDtBQUtuQjNELEVBQUFBLEtBQUssRUFBRXdELHNCQUFVQyxNQUxFO0FBTW5CeEQsRUFBQUEsUUFBUSxFQUFFdUQsc0JBQVVHLElBTkQ7QUFPbkIvQyxFQUFBQSxNQUFNLEVBQUU0QyxzQkFBVUM7QUFQQyxDQUF2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge0VkaXRvcn0gZnJvbSBcIkB0aW55bWNlL3RpbnltY2UtcmVhY3RcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XHJcbmltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImNyb3NzLWZldGNoXCI7XHJcbmltcG9ydCB7SWNvbn0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdG1sRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBiYXNlVXJsID0gXCIvc2NyaXB0cy90aW55bWNlX2RlZmF1bHQvbm9kZV9tb2R1bGVzL3NuLXRpbnltY2UvanMvdGlueW1jZVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlucHV0VmFsOiBcIlwiLFxyXG4gICAgICAgICAgICBUaW55TWNFZGl0b3I6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJbnB1dCA9IHRoaXMuY2hhbmdlSW5wdXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNoYW5nZUJhc2VVUkwoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VJbnB1dChjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXRWYWw6IGNvbnRlbnR9KTtcclxuICAgICAgICB0aGlzLnByb3BzPy5vblZhbHVlQ2hhbmdlKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzY2lpX3RvX2hleGEoc3RyKVxyXG4gIHtcclxuXHR2YXIgYXJyMSA9IFtdO1xyXG5cdGZvciAodmFyIG4gPSAwLCBsID0gc3RyLmxlbmd0aDsgbiA8IGw7IG4gKyspIFxyXG4gICAgIHtcclxuXHRcdHZhciBoZXggPSBOdW1iZXIoc3RyLmNoYXJDb2RlQXQobikpLnRvU3RyaW5nKDE2KTtcclxuXHRcdGFycjEucHVzaChoZXgpO1xyXG5cdCB9XHJcblx0cmV0dXJuIGFycjEuam9pbignJyk7XHJcbiAgIH1cclxuXHJcbiAgIGNoYW5nZUJhc2VVUkwoKSB7XHJcbiAgICAgICAgaWYgKFwidGlueW1jZVwiIGluIHdpbmRvdykge1xyXG4gICAgICAgICAgICB3aW5kb3cudGlueW1jZS5iYXNlVVJMID0gSHRtbEVkaXRvci5iYXNlVXJsO1xyXG4gICAgICAgIH1cclxuICAgfVxyXG5cclxuICAgIGZldGNoUmVxdWVzdCA9IGFzeW5jICh7IHVybCwgcGFyYW1zID0ge30gfSkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ1gtVHJhbnNhY3Rpb24tU291cmNlJzogd2luZG93LnRyYW5zYWN0aW9uX3NvdXJjZSxcclxuICAgICAgICAgICAgICAgICdYLVVzZXJUb2tlbic6IHdpbmRvdy5nX2NrLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiBcIiovKlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0SnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHRKc29uLnJlc3VsdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICB0b29sYmFyLFxyXG4gICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICByZWFkb25seSxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhYmVsQ29sb3IgPSAhIXRoaXMuc3RhdGUuaW5wdXRWYWwgJiYgcmVxdWlyZWQgPyBcInJnYig5OSwxMTQsMTE2KVwiIDogXCJyZ2IoMjAwLDYwLDU0KVwiO1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7ISFsYWJlbCB8fCByZXF1aXJlZCA/IDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLWxhYmVsLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tjb2xvcjogbGFiZWxDb2xvcn19IG9uQ2xpY2s9eygpID0+IHRoaXMuc3RhdGUuVGlueU1jRWRpdG9yLmZvY3VzKCl9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXF1aXJlZCA/IDxJY29uIGNvbG9yPXtsYWJlbENvbG9yfSBpY29uPVwiYXN0ZXJpc2tcIiBzaXplPVwieHNcIiAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI9e3Rvb2xiYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2lucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmssbGlzdHMsYWR2bGlzdCx0YWJsZSxwb3dlcnBhc3RlLHNlYXJjaHJlcGxhY2UscHJldmlldyxmdWxsc2NyZWVuLGExMXlfZml4ZXMscGxhY2Vob2xkZXIscmVhZG9ubHlub2JvcmRlcixjb2RlLHRleHRjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBvbkVkaXRvckNoYW5nZSA9e3RoaXMuY2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51YmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzYmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlX3NjcmlwdF9ob3N0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZV91cmxzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0X3VybHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0X2luc3RhbmNlX2NhbGxiYWNrOiAoZWRpdG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSAhIXRoaXMucHJvcHMuaGVpZ2h0ID8gdGhpcy5wcm9wcy5oZWlnaHQgOiBgJHtNYXRoLnJvdW5kKGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0ICogMC42KSAtIDM2fXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhY29udGVudCA/IGVkaXRvci5zZWxlY3Rpb24uc2V0Q29udGVudChjb250ZW50KSA6IG5vb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seSA/IGVkaXRvci5zZXRNb2RlKFwicmVhZG9ubHlcIikgOiBub29wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7VGlueU1jRWRpdG9yOiBlZGl0b3J9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yLmRvbS5zZXRTdHlsZShlZGl0b3IuaWZyYW1lRWxlbWVudCwgXCJoZWlnaHRcIiwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTklXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2Jhc2VfdXJsOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbF9wbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlbWlycm9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcvc2NyaXB0cy90aW55bWNlX2RlZmF1bHQvbm9kZV9tb2R1bGVzL3NuLXRpbnltY2UvanMvdGlueW1jZS9zbl9wbHVnaW5zL2NvZGVtaXJyb3IvcGx1Z2luLm1pbi5qcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZW1pcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ0NvZGVNaXJyb3InXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlc191cGxvYWRfaGFuZGxlcjogKGJsb2JJbmZvLCBzdWNjZXNzLCBmYWlsdXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEZpbGUgPSBibG9iSW5mby5ibG9iKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KCkuc3BsaXQoXCItXCIpLmpvaW4oXCJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJYLVVzZXJUb2tlblwiLCB3aW5kb3cuZ19jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtZGF0YS5hcHBlbmQoJ3RhYmxlX25hbWUnLCBgWlpfWVlzeXNfYXR0YWNobWVudGApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWRhdGEuYXBwZW5kKCd0YWJsZV9zeXNfaWQnLCB1dWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1kYXRhLmFwcGVuZCgnZmlsZScsIHNlbGVjdGVkRmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGkvbm93L2F0dGFjaG1lbnQvdXBsb2FkYCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNKc29uID0+IHN1Y2Nlc3Mod2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiL3N5c19hdHRhY2htZW50LmRvP3N5c19pZD1cIiArIHJlc0pzb24ucmVzdWx0LnN5c19pZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHVwOiBlZGl0b3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0b3IgPSBlZGl0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub24oXCJpbml0XCIsICgpID0+IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkh0bWxFZGl0b3IuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdG9vbGJhcjogJ2JvbGQgaXRhbGljIHVuZGVybGluZSB1bmRvIHJlZG8gfCBmb3JlY29sb3IgYmFja2NvbG9yIHwgZm9udHNlbGVjdCBmb250c2l6ZXNlbGVjdCB0YWJsZSB8IGxpbmsgdW5saW5rIHwgY29kZSAgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGJ1bGxpc3QgbnVtbGlzdCB8IGZ1bGxzY3JlZW4nLFxyXG4gICAgb25WYWx1ZUNoYW5nZTogbm9vcCxcclxuICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICByZWFkb25seTogZmFsc2UsXHJcbiAgICBsYWJlbDogXCJcIixcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIGhlaWdodDogXCJcIlxyXG59XHJcblxyXG5IdG1sRWRpdG9yLnByb3BUeXBlcyA9IHtcclxuICAgIHRvb2xiYXI6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvblZhbHVlQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIGNvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICByZWFkb25seTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGhlaWdodDogcHJvcFR5cGVzLnN0cmluZ1xyXG59Il19