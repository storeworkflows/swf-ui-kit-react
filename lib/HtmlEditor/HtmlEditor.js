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

var _styles = _interopRequireDefault(require("./styles.css"));

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
                _context.prev = 1;
                _context.next = 4;
                return (0, _crossFetch["default"])(url, _objectSpread(_objectSpread({}, params), {}, {
                  credentials: 'same-origin',
                  headers: {
                    'X-Transaction-Source': window.transaction_source,
                    'X-UserToken': window.g_ck,
                    'Content-Type': 'multipart/form-data'
                  }
                }));

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();

              case 7:
                resultJson = _context.sent;
                console.log(resultJson);
                result = resultJson.result.slice(0);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 15:
                return _context.abrupt("return", result);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 12]]);
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
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          children: _styles["default"]
        }), !!label || required ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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
          plugins: ["link,lists,advlist,table,powerpaste,searchreplace,preview,fullscreen,a11y_fixes,placeholder,readonlynoborder,code"],
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
            height: 0 // images_upload_handler: (blobInfo, success, failure) => {
            //     const selectedFile = blobInfo.blob();
            //     const uuid = uuidv4().split("-").join("");
            //     const data = new FormData();
            //     data.append('table_name', `ZZ_YYsys_attachment`);
            //     data.append('table_sys_id', uuid);
            //     data.append('file', selectedFile);
            //     console.log("PROSHLO", uuid, selectedFile)
            //     const params = {
            //         method: "POST",
            //         data
            //     }
            //     // console.log(this);
            //     if (!!selectedFile.size) {
            //         console.log(selectedFile.size);
            //         this.fetchRequest({url: `${window.location.origin}/api/now/attachment/upload`, params})
            //     }
            // }

          }
        })]
      });
    }
  }]);

  return HtmlEditor;
}(React.Component);

exports["default"] = HtmlEditor;
HtmlEditor.defaultProps = {
  toolbar: 'bold italic underline undo redo | fontselect fontsizeselect table | link unlink | code  | alignleft aligncenter alignright | bullist numlist | fullscreen',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IdG1sRWRpdG9yL0h0bWxFZGl0b3IuanMiXSwibmFtZXMiOlsiSHRtbEVkaXRvciIsInByb3BzIiwiZmV0Y2hSZXF1ZXN0IiwidXJsIiwicGFyYW1zIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwid2luZG93IiwidHJhbnNhY3Rpb25fc291cmNlIiwiZ19jayIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdEpzb24iLCJjb25zb2xlIiwibG9nIiwicmVzdWx0Iiwic2xpY2UiLCJlcnJvciIsInN0YXRlIiwiaW5wdXRWYWwiLCJUaW55TWNFZGl0b3IiLCJjaGFuZ2VJbnB1dCIsImJpbmQiLCJjb250ZW50Iiwic2V0U3RhdGUiLCJvblZhbHVlQ2hhbmdlIiwidG9vbGJhciIsInJlYWRvbmx5IiwibGFiZWwiLCJyZXF1aXJlZCIsImxhYmVsQ29sb3IiLCJzdHlsZXMiLCJjb2xvciIsImZvY3VzIiwibWVudWJhciIsInN0YXR1c2JhciIsImluaXRfaW5zdGFuY2VfY2FsbGJhY2siLCJlZGl0b3IiLCJoZWlnaHQiLCJNYXRoIiwicm91bmQiLCJkb2N1bWVudCIsImJvZHkiLCJvZmZzZXRIZWlnaHQiLCJzZWxlY3Rpb24iLCJzZXRDb250ZW50Iiwibm9vcCIsInNldE1vZGUiLCJkb20iLCJzZXRTdHlsZSIsImlmcmFtZUVsZW1lbnQiLCJ3aWR0aCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7OztBQUNqQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBY25CQyxZQWRtQjtBQUFBLDBFQWNKO0FBQUE7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QyxFQUFBQSxLQUFLLEVBQUUsRUFMZTtBQU10QkMsRUFBQUEsUUFBUSxFQUFFLEtBTlk7QUFPdEJTLEVBQUFBLE1BQU0sRUFBRTtBQVBjLENBQTFCO0FBVUF0QyxVQUFVLENBQUN1RCxTQUFYLEdBQXVCO0FBQ25CN0IsRUFBQUEsT0FBTyxFQUFFNkIsc0JBQVVDLE1BREE7QUFFbkIvQixFQUFBQSxhQUFhLEVBQUU4QixzQkFBVUUsSUFGTjtBQUduQmxDLEVBQUFBLE9BQU8sRUFBRWdDLHNCQUFVQyxNQUhBO0FBSW5CN0IsRUFBQUEsUUFBUSxFQUFFNEIsc0JBQVVHLElBSkQ7QUFLbkI5QixFQUFBQSxLQUFLLEVBQUUyQixzQkFBVUMsTUFMRTtBQU1uQjNCLEVBQUFBLFFBQVEsRUFBRTBCLHNCQUFVRyxJQU5EO0FBT25CcEIsRUFBQUEsTUFBTSxFQUFFaUIsc0JBQVVDO0FBUEMsQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtFZGl0b3J9IGZyb20gXCJAdGlueW1jZS90aW55bWNlLXJlYWN0XCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQge3Y0IGFzIHV1aWR2NH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiY3Jvc3MtZmV0Y2hcIjtcclxuaW1wb3J0IHtJY29ufSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0bWxFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW5wdXRWYWw6IFwiXCIsXHJcbiAgICAgICAgICAgIFRpbnlNY0VkaXRvcjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYW5nZUlucHV0ID0gdGhpcy5jaGFuZ2VJbnB1dC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUlucHV0KGNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dFZhbDogY29udGVudH0pO1xyXG4gICAgICAgIHRoaXMucHJvcHM/Lm9uVmFsdWVDaGFuZ2UoY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hSZXF1ZXN0ID0gYXN5bmMgKHsgdXJsLCBwYXJhbXMgPSB7fSB9KSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ1gtVHJhbnNhY3Rpb24tU291cmNlJzogd2luZG93LnRyYW5zYWN0aW9uX3NvdXJjZSxcclxuICAgICAgICAgICAgICAgICAgICAnWC1Vc2VyVG9rZW4nOiB3aW5kb3cuZ19jayxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0SnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0SnNvbilcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0SnNvbi5yZXN1bHQuc2xpY2UoMCwpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHRvb2xiYXIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgIHJlYWRvbmx5LFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgICAgIC8vIGhlaWdodFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBsYWJlbENvbG9yID0gISF0aGlzLnN0YXRlLmlucHV0VmFsICYmIHJlcXVpcmVkID8gXCJyZ2IoOTksMTE0LDExNilcIiA6IFwicmdiKDIwMCw2MCw1NClcIiBcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIHshIWxhYmVsIHx8IHJlcXVpcmVkID8gPGRpdiBjbGFzc05hbWU9XCJlZGl0b3ItbGFiZWwtYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2NvbG9yOiBsYWJlbENvbG9yfX0gb25DbGljaz17KCkgPT4gdGhpcy5zdGF0ZS5UaW55TWNFZGl0b3IuZm9jdXMoKX0+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlcXVpcmVkID8gPEljb24gY29sb3I9e2xhYmVsQ29sb3J9IGljb249XCJhc3Rlcmlza1wiIHNpemU9XCJ4c1wiIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcj17dG9vbGJhcn1cclxuICAgICAgICAgICAgICAgICAgICBwbHVnaW5zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGluayxsaXN0cyxhZHZsaXN0LHRhYmxlLHBvd2VycGFzdGUsc2VhcmNocmVwbGFjZSxwcmV2aWV3LGZ1bGxzY3JlZW4sYTExeV9maXhlcyxwbGFjZWhvbGRlcixyZWFkb25seW5vYm9yZGVyLGNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgb25FZGl0b3JDaGFuZ2UgPXt0aGlzLmNoYW5nZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudWJhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c2JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRfaW5zdGFuY2VfY2FsbGJhY2s6IChlZGl0b3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9ICEhdGhpcy5wcm9wcy5oZWlnaHQgPyB0aGlzLnByb3BzLmhlaWdodCA6IGAke01hdGgucm91bmQoZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgKiAwLjYpIC0gMzZ9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgISFjb250ZW50ID8gZWRpdG9yLnNlbGVjdGlvbi5zZXRDb250ZW50KGNvbnRlbnQpIDogbm9vcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5ID8gZWRpdG9yLnNldE1vZGUoXCJyZWFkb25seVwiKSA6IG5vb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtUaW55TWNFZGl0b3I6IGVkaXRvcn0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3IuZG9tLnNldFN0eWxlKGVkaXRvci5pZnJhbWVFbGVtZW50LCBcImhlaWdodFwiLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5OSVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGltYWdlc191cGxvYWRfaGFuZGxlcjogKGJsb2JJbmZvLCBzdWNjZXNzLCBmYWlsdXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBzZWxlY3RlZEZpbGUgPSBibG9iSW5mby5ibG9iKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCB1dWlkID0gdXVpZHY0KCkuc3BsaXQoXCItXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBkYXRhLmFwcGVuZCgndGFibGVfbmFtZScsIGBaWl9ZWXN5c19hdHRhY2htZW50YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBkYXRhLmFwcGVuZCgndGFibGVfc3lzX2lkJywgdXVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIHNlbGVjdGVkRmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlBST1NITE9cIiwgdXVpZCwgc2VsZWN0ZWRGaWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoISFzZWxlY3RlZEZpbGUuc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRmlsZS5zaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmZldGNoUmVxdWVzdCh7dXJsOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGkvbm93L2F0dGFjaG1lbnQvdXBsb2FkYCwgcGFyYW1zfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5IdG1sRWRpdG9yLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHRvb2xiYXI6ICdib2xkIGl0YWxpYyB1bmRlcmxpbmUgdW5kbyByZWRvIHwgZm9udHNlbGVjdCBmb250c2l6ZXNlbGVjdCB0YWJsZSB8IGxpbmsgdW5saW5rIHwgY29kZSAgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGJ1bGxpc3QgbnVtbGlzdCB8IGZ1bGxzY3JlZW4nLFxyXG4gICAgb25WYWx1ZUNoYW5nZTogbm9vcCxcclxuICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICByZWFkb25seTogZmFsc2UsXHJcbiAgICBsYWJlbDogXCJcIixcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIGhlaWdodDogXCJcIlxyXG59XHJcblxyXG5IdG1sRWRpdG9yLnByb3BUeXBlcyA9IHtcclxuICAgIHRvb2xiYXI6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvblZhbHVlQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIGNvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICByZWFkb25seTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGhlaWdodDogcHJvcFR5cGVzLnN0cmluZ1xyXG59Il19