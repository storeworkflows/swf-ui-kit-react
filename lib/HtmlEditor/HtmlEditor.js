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
    return _this;
  }

  _createClass(HtmlEditor, [{
    key: "changeInput",
    value: function changeInput(editor) {
      this.setState({
        inputVal: editor.getData()
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_tinymceReact.Editor, {
          apiKey: "b6bpe90lvjdq7atv9dmi24bl3l5mzf5kseh9ziaxzc2n0woz",
          toolbar: this.toolbar,
          menubar: false
        })]
      });
    }
  }]);

  return HtmlEditor;
}(React.Component);

exports["default"] = HtmlEditor;
HtmlEditor.defaultProps = {
  toolbar: 'bold italic underline undo redo | fontselect fontsizeselect table | link unlink | code  | alignleft aligncenter alignright | bullist numlist',
  onValueChange: _utils.noop
};
HtmlEditor.propTypes = {
  toolbar: _propTypes["default"].string,
  onValueChange: _propTypes["default"].func
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IdG1sRWRpdG9yL0h0bWxFZGl0b3IuanMiXSwibmFtZXMiOlsiSHRtbEVkaXRvciIsInByb3BzIiwic3RhdGUiLCJpbnB1dFZhbCIsImNoYW5nZUlucHV0IiwiYmluZCIsInRvb2xiYXIiLCJlZGl0b3IiLCJzZXRTdGF0ZSIsImdldERhdGEiLCJzdHlsZXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uVmFsdWVDaGFuZ2UiLCJub29wIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7QUFDakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxRQUFRLEVBQUU7QUFERCxLQUFiO0FBR0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQiwrQkFBbkI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0wsS0FBTCxDQUFXSyxPQUExQjtBQU5lO0FBT2xCOzs7O1dBRUQscUJBQVlDLE1BQVosRUFBb0I7QUFDaEIsV0FBS0MsUUFBTCxDQUFjO0FBQUNMLFFBQUFBLFFBQVEsRUFBRUksTUFBTSxDQUFDRSxPQUFQO0FBQVgsT0FBZDtBQUNIOzs7V0FFRCxrQkFBUztBQUNMLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBUUM7QUFBUixVQURKLGVBRUkscUJBQUMsb0JBQUQ7QUFDSSxVQUFBLE1BQU0sRUFBQyxrREFEWDtBQUVJLFVBQUEsT0FBTyxFQUFFLEtBQUtKLE9BRmxCO0FBR0ksVUFBQSxPQUFPLEVBQUU7QUFIYixVQUZKO0FBQUEsUUFESjtBQVVIOzs7O0VBekJtQ0ssS0FBSyxDQUFDQyxTOzs7QUE0QjlDWixVQUFVLENBQUNhLFlBQVgsR0FBMEI7QUFDdEJQLEVBQUFBLE9BQU8sRUFBRSw4SUFEYTtBQUV0QlEsRUFBQUEsYUFBYSxFQUFFQztBQUZPLENBQTFCO0FBS0FmLFVBQVUsQ0FBQ2dCLFNBQVgsR0FBdUI7QUFDbkJWLEVBQUFBLE9BQU8sRUFBRVUsc0JBQVVDLE1BREE7QUFFbkJILEVBQUFBLGFBQWEsRUFBRUUsc0JBQVVFO0FBRk4sQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtFZGl0b3J9IGZyb20gXCJAdGlueW1jZS90aW55bWNlLXJlYWN0XCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0bWxFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW5wdXRWYWw6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJbnB1dCA9IHRoaXMuY2hhbmdlSW5wdXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIgPSB0aGlzLnByb3BzLnRvb2xiYXI7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSW5wdXQoZWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXRWYWw6IGVkaXRvci5nZXREYXRhKCl9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICBhcGlLZXk9XCJiNmJwZTkwbHZqZHE3YXR2OWRtaTI0YmwzbDVtemY1a3NlaDl6aWF4emMybjB3b3pcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI9e3RoaXMudG9vbGJhcn1cclxuICAgICAgICAgICAgICAgICAgICBtZW51YmFyPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkh0bWxFZGl0b3IuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdG9vbGJhcjogJ2JvbGQgaXRhbGljIHVuZGVybGluZSB1bmRvIHJlZG8gfCBmb250c2VsZWN0IGZvbnRzaXplc2VsZWN0IHRhYmxlIHwgbGluayB1bmxpbmsgfCBjb2RlICB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IHwgYnVsbGlzdCBudW1saXN0JyxcclxuICAgIG9uVmFsdWVDaGFuZ2U6IG5vb3BcclxufVxyXG5cclxuSHRtbEVkaXRvci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0b29sYmFyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25WYWx1ZUNoYW5nZTogcHJvcFR5cGVzLmZ1bmNcclxufSJdfQ==