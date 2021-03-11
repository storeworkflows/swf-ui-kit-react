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

var _styles = _interopRequireDefault(require("./styles.css"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    _this.state = {
      inputVal: ""
    };
    _this.changeInput = _this.changeInput.bind(_assertThisInitialized(_this));
    _this.toolbar = _this.props.toolbar;
    _this.content = _this.props.content;
    _this.readonly = _this.props.readonly;
    return _this;
  }

  _createClass(HtmlEditor, [{
    key: "changeInput",
    value: function changeInput(content) {
      this.setState({
        inputVal: content
      });
      console.log(content);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_tinymceReact.Editor, {
          apiKey: "b6bpe90lvjdq7atv9dmi24bl3l5mzf5kseh9ziaxzc2n0woz",
          toolbar: this.toolbar,
          plugins: ["link,lists,advlist,table,powerpaste,searchreplace,preview,fullscreen,a11y_fixes,placeholder,readonlynoborder,sn_resizer,code"] // skin="lightgray"
          ,
          onEditorChange: this.changeInput,
          init: {
            menubar: false,
            init_instance_callback: function init_instance_callback(editor) {
              !!_this2.content ? editor.insertContent(_this2.content) : null;
              _this2.readonly ? editor.setMode("readonly") : null;
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
  toolbar: 'bold italic underline undo redo | fontselect fontsizeselect table | link unlink | code  | alignleft aligncenter alignright | bullist numlist | fullscreen',
  onValueChange: _utils.noop,
  content: "",
  readonly: false
};
HtmlEditor.propTypes = {
  toolbar: _propTypes["default"].string,
  onValueChange: _propTypes["default"].func,
  content: _propTypes["default"].string,
  readonly: _propTypes["default"].bool
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IdG1sRWRpdG9yL0h0bWxFZGl0b3IuanMiXSwibmFtZXMiOlsiSHRtbEVkaXRvciIsInByb3BzIiwic3RhdGUiLCJpbnB1dFZhbCIsImNoYW5nZUlucHV0IiwiYmluZCIsInRvb2xiYXIiLCJjb250ZW50IiwicmVhZG9ubHkiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJtZW51YmFyIiwiaW5pdF9pbnN0YW5jZV9jYWxsYmFjayIsImVkaXRvciIsImluc2VydENvbnRlbnQiLCJzZXRNb2RlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvblZhbHVlQ2hhbmdlIiwibm9vcCIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7OztBQUNqQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLFFBQVEsRUFBRTtBQURELEtBQWI7QUFHQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLCtCQUFuQjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLTCxLQUFMLENBQVdLLE9BQTFCO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtOLEtBQUwsQ0FBV00sT0FBMUI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtQLEtBQUwsQ0FBV08sUUFBM0I7QUFSZTtBQVNsQjs7OztXQUVELHFCQUFZRCxPQUFaLEVBQXFCO0FBQ2pCLFdBQUtFLFFBQUwsQ0FBYztBQUFDTixRQUFBQSxRQUFRLEVBQUVJO0FBQVgsT0FBZDtBQUNBRyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosT0FBWjtBQUNIOzs7V0FFRCxrQkFBUztBQUFBOztBQUNMLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBUUs7QUFBUixVQURKLGVBRUkscUJBQUMsb0JBQUQ7QUFDSSxVQUFBLE1BQU0sRUFBQyxrREFEWDtBQUVJLFVBQUEsT0FBTyxFQUFFLEtBQUtOLE9BRmxCO0FBR0ksVUFBQSxPQUFPLEVBQUUsQ0FDTCw4SEFESyxDQUhiLENBTUk7QUFOSjtBQU9JLFVBQUEsY0FBYyxFQUFHLEtBQUtGLFdBUDFCO0FBUUksVUFBQSxJQUFJLEVBQUU7QUFDRlMsWUFBQUEsT0FBTyxFQUFFLEtBRFA7QUFFRkMsWUFBQUEsc0JBQXNCLEVBQUUsZ0NBQUNDLE1BQUQsRUFBWTtBQUNoQyxlQUFDLENBQUMsTUFBSSxDQUFDUixPQUFQLEdBQWlCUSxNQUFNLENBQUNDLGFBQVAsQ0FBcUIsTUFBSSxDQUFDVCxPQUExQixDQUFqQixHQUFzRCxJQUF0RDtBQUNBLGNBQUEsTUFBSSxDQUFDQyxRQUFMLEdBQWdCTyxNQUFNLENBQUNFLE9BQVAsQ0FBZSxVQUFmLENBQWhCLEdBQTZDLElBQTdDO0FBQ0g7QUFMQztBQVJWLFVBRko7QUFBQSxRQURKO0FBcUJIOzs7O0VBdkNtQ0MsS0FBSyxDQUFDQyxTOzs7QUEwQzlDbkIsVUFBVSxDQUFDb0IsWUFBWCxHQUEwQjtBQUN0QmQsRUFBQUEsT0FBTyxFQUFFLDJKQURhO0FBRXRCZSxFQUFBQSxhQUFhLEVBQUVDLFdBRk87QUFHdEJmLEVBQUFBLE9BQU8sRUFBRSxFQUhhO0FBSXRCQyxFQUFBQSxRQUFRLEVBQUU7QUFKWSxDQUExQjtBQU9BUixVQUFVLENBQUN1QixTQUFYLEdBQXVCO0FBQ25CakIsRUFBQUEsT0FBTyxFQUFFaUIsc0JBQVVDLE1BREE7QUFFbkJILEVBQUFBLGFBQWEsRUFBRUUsc0JBQVVFLElBRk47QUFHbkJsQixFQUFBQSxPQUFPLEVBQUVnQixzQkFBVUMsTUFIQTtBQUluQmhCLEVBQUFBLFFBQVEsRUFBRWUsc0JBQVVHO0FBSkQsQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtFZGl0b3J9IGZyb20gXCJAdGlueW1jZS90aW55bWNlLXJlYWN0XCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0bWxFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW5wdXRWYWw6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJbnB1dCA9IHRoaXMuY2hhbmdlSW5wdXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIgPSB0aGlzLnByb3BzLnRvb2xiYXI7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5wcm9wcy5jb250ZW50O1xyXG4gICAgICAgIHRoaXMucmVhZG9ubHkgPSB0aGlzLnByb3BzLnJlYWRvbmx5O1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUlucHV0KGNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dFZhbDogY29udGVudH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgIGFwaUtleT1cImI2YnBlOTBsdmpkcTdhdHY5ZG1pMjRibDNsNW16ZjVrc2VoOXppYXh6YzJuMHdvelwiXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcj17dGhpcy50b29sYmFyfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rLGxpc3RzLGFkdmxpc3QsdGFibGUscG93ZXJwYXN0ZSxzZWFyY2hyZXBsYWNlLHByZXZpZXcsZnVsbHNjcmVlbixhMTF5X2ZpeGVzLHBsYWNlaG9sZGVyLHJlYWRvbmx5bm9ib3JkZXIsc25fcmVzaXplcixjb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNraW49XCJsaWdodGdyYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uRWRpdG9yQ2hhbmdlID17dGhpcy5jaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBpbml0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0X2luc3RhbmNlX2NhbGxiYWNrOiAoZWRpdG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIXRoaXMuY29udGVudCA/IGVkaXRvci5pbnNlcnRDb250ZW50KHRoaXMuY29udGVudCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkb25seSA/IGVkaXRvci5zZXRNb2RlKFwicmVhZG9ubHlcIikgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkh0bWxFZGl0b3IuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdG9vbGJhcjogJ2JvbGQgaXRhbGljIHVuZGVybGluZSB1bmRvIHJlZG8gfCBmb250c2VsZWN0IGZvbnRzaXplc2VsZWN0IHRhYmxlIHwgbGluayB1bmxpbmsgfCBjb2RlICB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IHwgYnVsbGlzdCBudW1saXN0IHwgZnVsbHNjcmVlbicsXHJcbiAgICBvblZhbHVlQ2hhbmdlOiBub29wLFxyXG4gICAgY29udGVudDogXCJcIixcclxuICAgIHJlYWRvbmx5OiBmYWxzZVxyXG59XHJcblxyXG5IdG1sRWRpdG9yLnByb3BUeXBlcyA9IHtcclxuICAgIHRvb2xiYXI6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvblZhbHVlQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIGNvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICByZWFkb25seTogcHJvcFR5cGVzLmJvb2xcclxufSJdfQ==