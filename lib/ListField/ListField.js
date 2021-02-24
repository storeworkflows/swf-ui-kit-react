"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../index");

var _DeclarativeUIActions = _interopRequireDefault(require("../LookupField/DeclarativeUIActions"));

var _Pill = _interopRequireDefault(require("../Pill/Pill"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var ListField = /*#__PURE__*/function (_React$Component) {
  _inherits(ListField, _React$Component);

  var _super = _createSuper(ListField);

  function ListField(props) {
    var _this;

    _classCallCheck(this, ListField);

    _this = _super.call(this, props);
    _this.state = {
      records: {
        value: [],
        displayValue: []
      }
    };
    return _this;
  }

  _createClass(ListField, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "list-container",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input, {
            className: "swf-reference--input",
            name: "list",
            onInput: this.onChange,
            containerClass: "list-field-group",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_index.Input.Start, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Pill["default"], {
                label: "Artur Bunko",
                canDismiss: true
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pill["default"], {
                label: "Artur Bunko",
                canDismiss: true
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pill["default"], {
                label: "Artur Bunko",
                canDismiss: true
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pill["default"], {
                label: "Artur Bunko",
                canDismiss: true
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pill["default"], {
                label: "Artur Bunko",
                canDismiss: true
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pill["default"], {
                label: "Artur Bunko",
                canDismiss: true
              })]
            })
          })
        })]
      });
    }
  }]);

  return ListField;
}(React.Component);

var _default = ListField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaXN0RmllbGQvTGlzdEZpZWxkLmpzIl0sIm5hbWVzIjpbIkxpc3RGaWVsZCIsInByb3BzIiwic3RhdGUiLCJyZWNvcmRzIiwidmFsdWUiLCJkaXNwbGF5VmFsdWUiLCJzdHlsZXMiLCJvbkNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFM7Ozs7O0FBQ0YscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxPQUFPLEVBQUU7QUFDTEMsUUFBQUEsS0FBSyxFQUFFLEVBREY7QUFFTEMsUUFBQUEsWUFBWSxFQUFFO0FBRlQ7QUFEQSxLQUFiO0FBRmU7QUFRbEI7Ozs7V0FFRCxrQkFBVTtBQUNOLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBTyxVQUFBLElBQUksRUFBQyxVQUFaO0FBQUEsb0JBQXdCQztBQUF4QixVQURKLGVBRUk7QUFBSyxVQUFBLFNBQVMsRUFBQyxnQkFBZjtBQUFBLGlDQUNJLHFCQUFDLFlBQUQ7QUFDSSxZQUFBLFNBQVMsRUFBQyxzQkFEZDtBQUVJLFlBQUEsSUFBSSxFQUFDLE1BRlQ7QUFHSSxZQUFBLE9BQU8sRUFBRSxLQUFLQyxRQUhsQjtBQUlJLFlBQUEsY0FBYyxFQUFDLGtCQUpuQjtBQUFBLG1DQU1JLHNCQUFDLFlBQUQsQ0FBTyxLQUFQO0FBQUEsc0NBQ0kscUJBQUMsZ0JBQUQ7QUFBTSxnQkFBQSxLQUFLLEVBQUMsYUFBWjtBQUEwQixnQkFBQSxVQUFVLEVBQUU7QUFBdEMsZ0JBREosZUFFSSxxQkFBQyxnQkFBRDtBQUFNLGdCQUFBLEtBQUssRUFBQyxhQUFaO0FBQTBCLGdCQUFBLFVBQVUsRUFBRTtBQUF0QyxnQkFGSixlQUdJLHFCQUFDLGdCQUFEO0FBQU0sZ0JBQUEsS0FBSyxFQUFDLGFBQVo7QUFBMEIsZ0JBQUEsVUFBVSxFQUFFO0FBQXRDLGdCQUhKLGVBSUkscUJBQUMsZ0JBQUQ7QUFBTSxnQkFBQSxLQUFLLEVBQUMsYUFBWjtBQUEwQixnQkFBQSxVQUFVLEVBQUU7QUFBdEMsZ0JBSkosZUFLSSxxQkFBQyxnQkFBRDtBQUFNLGdCQUFBLEtBQUssRUFBQyxhQUFaO0FBQTBCLGdCQUFBLFVBQVUsRUFBRTtBQUF0QyxnQkFMSixlQU1JLHFCQUFDLGdCQUFEO0FBQU0sZ0JBQUEsS0FBSyxFQUFDLGFBQVo7QUFBMEIsZ0JBQUEsVUFBVSxFQUFFO0FBQXRDLGdCQU5KO0FBQUE7QUFOSjtBQURKLFVBRko7QUFBQSxRQURKO0FBc0JIOzs7O0VBbENtQkMsS0FBSyxDQUFDQyxTOztlQXFDZlQsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtJbnB1dH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgRGVjbGFyYXRpdmVVSUFjdGlvbnMgZnJvbSBcIi4uL0xvb2t1cEZpZWxkL0RlY2xhcmF0aXZlVUlBY3Rpb25zXCI7XG5pbXBvcnQgUGlsbCBmcm9tIFwiLi4vUGlsbC9QaWxsXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5cbmNsYXNzIExpc3RGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmVjb3Jkczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5VmFsdWU6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2YtcmVmZXJlbmNlLS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJsaXN0LWZpZWxkLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlN0YXJ0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaWxsIGxhYmVsPVwiQXJ0dXIgQnVua29cIiBjYW5EaXNtaXNzPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpbGwgbGFiZWw9XCJBcnR1ciBCdW5rb1wiIGNhbkRpc21pc3M9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlsbCBsYWJlbD1cIkFydHVyIEJ1bmtvXCIgY2FuRGlzbWlzcz17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaWxsIGxhYmVsPVwiQXJ0dXIgQnVua29cIiBjYW5EaXNtaXNzPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpbGwgbGFiZWw9XCJBcnR1ciBCdW5rb1wiIGNhbkRpc21pc3M9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGlsbCBsYWJlbD1cIkFydHVyIEJ1bmtvXCIgY2FuRGlzbWlzcz17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dC5TdGFydD5cbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0RmllbGQiXX0=