"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

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

var Result = /*#__PURE__*/function (_React$Component) {
  _inherits(Result, _React$Component);

  var _super = _createSuper(Result);

  function Result(props) {
    _classCallCheck(this, Result);

    return _super.call(this, props);
  }

  _createClass(Result, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          records = _this$props.records,
          onClick = _this$props.onClick;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: records.map(function (record) {
          var hasAdditionalInfo = record.referenceData.length > 1;
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
            className: "result--item",
            onMouseDown: function onMouseDown() {
              return onClick(record);
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              className: "main",
              children: record.referenceData[0].value
            }), hasAdditionalInfo && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "additional",
              children: record.referenceData[1].value
            })]
          }, record.sysId);
        })
      });
    }
  }]);

  return Result;
}(React.Component);

Result.defaultProps = {
  records: [],
  onClick: _utils.noop
};
Result.propTypes = {
  records: _propTypes["default"].array,
  onClick: _propTypes["default"].func
};
var _default = Result;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb29rdXBGaWVsZC9SZXN1bHQuanMiXSwibmFtZXMiOlsiUmVzdWx0IiwicHJvcHMiLCJyZWNvcmRzIiwib25DbGljayIsIm1hcCIsInJlY29yZCIsImhhc0FkZGl0aW9uYWxJbmZvIiwicmVmZXJlbmNlRGF0YSIsImxlbmd0aCIsInZhbHVlIiwic3lzSWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm5vb3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTTs7Ozs7QUFDSCxrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWxCOzs7O1dBRUQsa0JBQVM7QUFBQSx3QkFDc0IsS0FBS0EsS0FEM0I7QUFBQSxVQUNFQyxPQURGLGVBQ0VBLE9BREY7QUFBQSxVQUNXQyxPQURYLGVBQ1dBLE9BRFg7QUFHTCwwQkFDQztBQUFBLGtCQUNNRCxPQUFPLENBQUNFLEdBQVIsQ0FBWSxVQUFBQyxNQUFNLEVBQUk7QUFDcEIsY0FBTUMsaUJBQWlCLEdBQUdELE1BQU0sQ0FBQ0UsYUFBUCxDQUFxQkMsTUFBckIsR0FBOEIsQ0FBeEQ7QUFFQSw4QkFDSTtBQUFJLFlBQUEsU0FBUyxFQUFDLGNBQWQ7QUFDSSxZQUFBLFdBQVcsRUFBRTtBQUFBLHFCQUFNTCxPQUFPLENBQUNFLE1BQUQsQ0FBYjtBQUFBLGFBRGpCO0FBQUEsb0NBRUk7QUFBSSxjQUFBLFNBQVMsRUFBQyxNQUFkO0FBQUEsd0JBQXNCQSxNQUFNLENBQUNFLGFBQVAsQ0FBcUIsQ0FBckIsRUFBd0JFO0FBQTlDLGNBRkosRUFHS0gsaUJBQWlCLGlCQUFJO0FBQU0sY0FBQSxTQUFTLEVBQUMsWUFBaEI7QUFBQSx3QkFBOEJELE1BQU0sQ0FBQ0UsYUFBUCxDQUFxQixDQUFyQixFQUF3QkU7QUFBdEQsY0FIMUI7QUFBQSxhQUFrQ0osTUFBTSxDQUFDSyxLQUF6QyxDQURKO0FBT0gsU0FWQztBQUROLFFBREQ7QUFlSDs7OztFQXZCaUJDLEtBQUssQ0FBQ0MsUzs7QUEwQjNCWixNQUFNLENBQUNhLFlBQVAsR0FBc0I7QUFDbEJYLEVBQUFBLE9BQU8sRUFBRSxFQURTO0FBRWxCQyxFQUFBQSxPQUFPLEVBQUVXO0FBRlMsQ0FBdEI7QUFLQWQsTUFBTSxDQUFDZSxTQUFQLEdBQW1CO0FBQ2ZiLEVBQUFBLE9BQU8sRUFBRWMsc0JBQVVDLEtBREo7QUFFZmQsRUFBQUEsT0FBTyxFQUFFYSxzQkFBVUU7QUFGSixDQUFuQjtlQUtlbEIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBSZXN1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICB9XHJcblxyXG4gICByZW5kZXIoKSB7XHJcbiAgICAgICBjb25zdCB7cmVjb3Jkcywgb25DbGlja30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgeyByZWNvcmRzLm1hcChyZWNvcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFzQWRkaXRpb25hbEluZm8gPSByZWNvcmQucmVmZXJlbmNlRGF0YS5sZW5ndGggPiAxO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlc3VsdC0taXRlbVwiIGtleT17cmVjb3JkLnN5c0lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4gb25DbGljayhyZWNvcmQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1haW5cIj57cmVjb3JkLnJlZmVyZW5jZURhdGFbMF0udmFsdWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2hhc0FkZGl0aW9uYWxJbmZvICYmIDxzcGFuIGNsYXNzTmFtZT1cImFkZGl0aW9uYWxcIj57cmVjb3JkLnJlZmVyZW5jZURhdGFbMV0udmFsdWV9PC9zcGFuPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICApXHJcbiAgIH1cclxufVxyXG5cclxuUmVzdWx0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHJlY29yZHM6IFtdLFxyXG4gICAgb25DbGljazogbm9vcFxyXG59XHJcblxyXG5SZXN1bHQucHJvcFR5cGVzID0ge1xyXG4gICAgcmVjb3JkczogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0Il19