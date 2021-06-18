"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _tinymceReact = require("@tinymce/tinymce-react");

var _utils = require("../utils");

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
              var formdata = new FormData();
              formdata.append('table_name', "ZZ_YYsys_attachment");
              formdata.append('table_sys_id', uuid);
              formdata.append('file', new File([selectedFile], blobInfo.filename()));
              (0, _crossFetch["default"])("/api/now/attachment/upload", {
                method: "POST",
                credentials: 'same-origin',
                headers: {
                  'X-Transaction-Source': window.transaction_source,
                  'X-UserToken': window.g_ck
                },
                body: formdata
              }).then(function (res) {
                if (res.status === 201) return res.json();
              }).then(function (resJson) {
                return success("/sys_attachment.do?sys_id=" + resJson.result.sys_id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IdG1sRWRpdG9yL0h0bWxFZGl0b3IuanMiXSwibmFtZXMiOlsiSHRtbEVkaXRvciIsInByb3BzIiwiZmV0Y2hSZXF1ZXN0IiwidXJsIiwicGFyYW1zIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwid2luZG93IiwidHJhbnNhY3Rpb25fc291cmNlIiwiZ19jayIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdEpzb24iLCJyZXN1bHQiLCJzdGF0ZSIsImlucHV0VmFsIiwiVGlueU1jRWRpdG9yIiwiY2hhbmdlSW5wdXQiLCJiaW5kIiwiY2hhbmdlQmFzZVVSTCIsImNvbnRlbnQiLCJzZXRTdGF0ZSIsIm9uVmFsdWVDaGFuZ2UiLCJzdHIiLCJhcnIxIiwibiIsImwiLCJsZW5ndGgiLCJoZXgiLCJOdW1iZXIiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJwdXNoIiwiam9pbiIsInRpbnltY2UiLCJiYXNlVVJMIiwiYmFzZVVybCIsInRvb2xiYXIiLCJyZWFkb25seSIsImxhYmVsIiwicmVxdWlyZWQiLCJsYWJlbENvbG9yIiwiY29sb3IiLCJmb2N1cyIsIm1lbnViYXIiLCJzdGF0dXNiYXIiLCJyZW1vdmVfc2NyaXB0X2hvc3QiLCJyZWxhdGl2ZV91cmxzIiwiY29udmVydF91cmxzIiwiaW5pdF9pbnN0YW5jZV9jYWxsYmFjayIsImVkaXRvciIsImhlaWdodCIsIk1hdGgiLCJyb3VuZCIsImRvY3VtZW50IiwiYm9keSIsIm9mZnNldEhlaWdodCIsInNlbGVjdGlvbiIsInNldENvbnRlbnQiLCJub29wIiwic2V0TW9kZSIsImRvbSIsInNldFN0eWxlIiwiaWZyYW1lRWxlbWVudCIsIndpZHRoIiwiZG9jdW1lbnRfYmFzZV91cmwiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImV4dGVybmFsX3BsdWdpbnMiLCJjb2RlbWlycm9yIiwicGF0aCIsImltYWdlc191cGxvYWRfaGFuZGxlciIsImJsb2JJbmZvIiwic3VjY2VzcyIsImZhaWx1cmUiLCJzZWxlY3RlZEZpbGUiLCJibG9iIiwidXVpZCIsInNwbGl0IiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkZpbGUiLCJmaWxlbmFtZSIsIm1ldGhvZCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJyZXNKc29uIiwic3lzX2lkIiwic2V0dXAiLCJvbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7OztBQUdqQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBZ0NuQkMsWUFoQ21CO0FBQUEsMEVBZ0NKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsZ0JBQUFBLEdBQVQsUUFBU0EsR0FBVCxxQkFBY0MsTUFBZCxFQUFjQSxNQUFkLDRCQUF1QixFQUF2QjtBQUFBO0FBQUEsdUJBRVksNEJBQU1ELEdBQU4sa0NBQ2hCQyxNQURnQjtBQUVuQkMsa0JBQUFBLFdBQVcsRUFBRSxhQUZNO0FBR25CQyxrQkFBQUEsT0FBTyxFQUFFO0FBQ0wsNENBQXdCQyxNQUFNLENBQUNDLGtCQUQxQjtBQUVMLG1DQUFlRCxNQUFNLENBQUNFLElBRmpCO0FBR0wsb0NBQWdCLHFCQUhYO0FBSUwsOEJBQVU7QUFKTDtBQUhVLG1CQUZaOztBQUFBO0FBRUxDLGdCQUFBQSxRQUZLO0FBQUE7QUFBQSx1QkFZY0EsUUFBUSxDQUFDQyxJQUFULEVBWmQ7O0FBQUE7QUFZTEMsZ0JBQUFBLFVBWks7QUFhWEMsZ0JBQUFBLE1BQU0sR0FBR0QsVUFBVSxDQUFDQyxNQUFwQjtBQWJXLGlEQWVKQSxNQWZJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BaENJOztBQUFBO0FB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Q0FBQzhGLFlBQVgsR0FBMEI7QUFDdEJ6RCxFQUFBQSxPQUFPLEVBQUUsaUxBRGE7QUFFdEJmLEVBQUFBLGFBQWEsRUFBRXFDLFdBRk87QUFHdEJ2QyxFQUFBQSxPQUFPLEVBQUUsRUFIYTtBQUl0QmtCLEVBQUFBLFFBQVEsRUFBRSxLQUpZO0FBS3RCQyxFQUFBQSxLQUFLLEVBQUUsRUFMZTtBQU10QkMsRUFBQUEsUUFBUSxFQUFFLEtBTlk7QUFPdEJXLEVBQUFBLE1BQU0sRUFBRTtBQVBjLENBQTFCO0FBVUFuRCxVQUFVLENBQUMrRixTQUFYLEdBQXVCO0FBQ25CMUQsRUFBQUEsT0FBTyxFQUFFMEQsc0JBQVVDLE1BREE7QUFFbkIxRSxFQUFBQSxhQUFhLEVBQUV5RSxzQkFBVUUsSUFGTjtBQUduQjdFLEVBQUFBLE9BQU8sRUFBRTJFLHNCQUFVQyxNQUhBO0FBSW5CMUQsRUFBQUEsUUFBUSxFQUFFeUQsc0JBQVVHLElBSkQ7QUFLbkIzRCxFQUFBQSxLQUFLLEVBQUV3RCxzQkFBVUMsTUFMRTtBQU1uQnhELEVBQUFBLFFBQVEsRUFBRXVELHNCQUFVRyxJQU5EO0FBT25CL0MsRUFBQUEsTUFBTSxFQUFFNEMsc0JBQVVDO0FBUEMsQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtFZGl0b3J9IGZyb20gXCJAdGlueW1jZS90aW55bWNlLXJlYWN0XCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImNyb3NzLWZldGNoXCI7XHJcbmltcG9ydCB7SWNvbn0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdG1sRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBiYXNlVXJsID0gXCIvc2NyaXB0cy90aW55bWNlX2RlZmF1bHQvbm9kZV9tb2R1bGVzL3NuLXRpbnltY2UvanMvdGlueW1jZVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlucHV0VmFsOiBcIlwiLFxyXG4gICAgICAgICAgICBUaW55TWNFZGl0b3I6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJbnB1dCA9IHRoaXMuY2hhbmdlSW5wdXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNoYW5nZUJhc2VVUkwoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VJbnB1dChjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXRWYWw6IGNvbnRlbnR9KTtcclxuICAgICAgICB0aGlzLnByb3BzPy5vblZhbHVlQ2hhbmdlKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzY2lpX3RvX2hleGEoc3RyKVxyXG4gIHtcclxuXHR2YXIgYXJyMSA9IFtdO1xyXG5cdGZvciAodmFyIG4gPSAwLCBsID0gc3RyLmxlbmd0aDsgbiA8IGw7IG4gKyspIFxyXG4gICAgIHtcclxuXHRcdHZhciBoZXggPSBOdW1iZXIoc3RyLmNoYXJDb2RlQXQobikpLnRvU3RyaW5nKDE2KTtcclxuXHRcdGFycjEucHVzaChoZXgpO1xyXG5cdCB9XHJcblx0cmV0dXJuIGFycjEuam9pbignJyk7XHJcbiAgIH1cclxuXHJcbiAgIGNoYW5nZUJhc2VVUkwoKSB7XHJcbiAgICAgICAgaWYgKFwidGlueW1jZVwiIGluIHdpbmRvdykge1xyXG4gICAgICAgICAgICB3aW5kb3cudGlueW1jZS5iYXNlVVJMID0gSHRtbEVkaXRvci5iYXNlVXJsO1xyXG4gICAgICAgIH1cclxuICAgfVxyXG5cclxuICAgIGZldGNoUmVxdWVzdCA9IGFzeW5jICh7IHVybCwgcGFyYW1zID0ge30gfSkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ1gtVHJhbnNhY3Rpb24tU291cmNlJzogd2luZG93LnRyYW5zYWN0aW9uX3NvdXJjZSxcclxuICAgICAgICAgICAgICAgICdYLVVzZXJUb2tlbic6IHdpbmRvdy5nX2NrLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiBcIiovKlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0SnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHRKc29uLnJlc3VsdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICB0b29sYmFyLFxyXG4gICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICByZWFkb25seSxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhYmVsQ29sb3IgPSAhIXRoaXMuc3RhdGUuaW5wdXRWYWwgJiYgcmVxdWlyZWQgPyBcInJnYig5OSwxMTQsMTE2KVwiIDogXCJyZ2IoMjAwLDYwLDU0KVwiO1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7ISFsYWJlbCB8fCByZXF1aXJlZCA/IDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLWxhYmVsLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tjb2xvcjogbGFiZWxDb2xvcn19IG9uQ2xpY2s9eygpID0+IHRoaXMuc3RhdGUuVGlueU1jRWRpdG9yLmZvY3VzKCl9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXF1aXJlZCA/IDxJY29uIGNvbG9yPXtsYWJlbENvbG9yfSBpY29uPVwiYXN0ZXJpc2tcIiBzaXplPVwieHNcIiAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI9e3Rvb2xiYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2lucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmssbGlzdHMsYWR2bGlzdCx0YWJsZSxwb3dlcnBhc3RlLHNlYXJjaHJlcGxhY2UscHJldmlldyxmdWxsc2NyZWVuLGExMXlfZml4ZXMscGxhY2Vob2xkZXIscmVhZG9ubHlub2JvcmRlcixjb2RlLHRleHRjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBvbkVkaXRvckNoYW5nZSA9e3RoaXMuY2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51YmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzYmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlX3NjcmlwdF9ob3N0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZV91cmxzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0X3VybHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0X2luc3RhbmNlX2NhbGxiYWNrOiAoZWRpdG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSAhIXRoaXMucHJvcHMuaGVpZ2h0ID8gdGhpcy5wcm9wcy5oZWlnaHQgOiBgJHtNYXRoLnJvdW5kKGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0ICogMC42KSAtIDM2fXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhY29udGVudCA/IGVkaXRvci5zZWxlY3Rpb24uc2V0Q29udGVudChjb250ZW50KSA6IG5vb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seSA/IGVkaXRvci5zZXRNb2RlKFwicmVhZG9ubHlcIikgOiBub29wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7VGlueU1jRWRpdG9yOiBlZGl0b3J9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yLmRvbS5zZXRTdHlsZShlZGl0b3IuaWZyYW1lRWxlbWVudCwgXCJoZWlnaHRcIiwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTklXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2Jhc2VfdXJsOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbF9wbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlbWlycm9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcvc2NyaXB0cy90aW55bWNlX2RlZmF1bHQvbm9kZV9tb2R1bGVzL3NuLXRpbnltY2UvanMvdGlueW1jZS9zbl9wbHVnaW5zL2NvZGVtaXJyb3IvcGx1Z2luLm1pbi5qcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZW1pcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ0NvZGVNaXJyb3InXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlc191cGxvYWRfaGFuZGxlcjogKGJsb2JJbmZvLCBzdWNjZXNzLCBmYWlsdXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEZpbGUgPSBibG9iSW5mby5ibG9iKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KCkuc3BsaXQoXCItXCIpLmpvaW4oXCJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtZGF0YS5hcHBlbmQoJ3RhYmxlX25hbWUnLCBgWlpfWVlzeXNfYXR0YWNobWVudGApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWRhdGEuYXBwZW5kKCd0YWJsZV9zeXNfaWQnLCB1dWlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1kYXRhLmFwcGVuZCgnZmlsZScsIG5ldyBGaWxlKFtzZWxlY3RlZEZpbGVdLCBibG9iSW5mby5maWxlbmFtZSgpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChgL2FwaS9ub3cvYXR0YWNobWVudC91cGxvYWRgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdYLVRyYW5zYWN0aW9uLVNvdXJjZSc6IHdpbmRvdy50cmFuc2FjdGlvbl9zb3VyY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdYLVVzZXJUb2tlbic6IHdpbmRvdy5nX2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBmb3JtZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzSnNvbiA9PiBzdWNjZXNzKFwiL3N5c19hdHRhY2htZW50LmRvP3N5c19pZD1cIiArIHJlc0pzb24ucmVzdWx0LnN5c19pZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHVwOiBlZGl0b3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0b3IgPSBlZGl0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub24oXCJpbml0XCIsICgpID0+IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkh0bWxFZGl0b3IuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdG9vbGJhcjogJ2JvbGQgaXRhbGljIHVuZGVybGluZSB1bmRvIHJlZG8gfCBmb3JlY29sb3IgYmFja2NvbG9yIHwgZm9udHNlbGVjdCBmb250c2l6ZXNlbGVjdCB0YWJsZSB8IGxpbmsgdW5saW5rIHwgY29kZSAgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGJ1bGxpc3QgbnVtbGlzdCB8IGZ1bGxzY3JlZW4nLFxyXG4gICAgb25WYWx1ZUNoYW5nZTogbm9vcCxcclxuICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICByZWFkb25seTogZmFsc2UsXHJcbiAgICBsYWJlbDogXCJcIixcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIGhlaWdodDogXCJcIlxyXG59XHJcblxyXG5IdG1sRWRpdG9yLnByb3BUeXBlcyA9IHtcclxuICAgIHRvb2xiYXI6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvblZhbHVlQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIGNvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICByZWFkb25seTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGhlaWdodDogcHJvcFR5cGVzLnN0cmluZ1xyXG59Il19