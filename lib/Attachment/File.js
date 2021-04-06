"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

var _utils = require("./utils");

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var End = function End() {
  return null;
};

var File = /*#__PURE__*/function (_React$Component) {
  _inherits(File, _React$Component);

  var _super = _createSuper(File);

  function File(props) {
    var _this;

    _classCallCheck(this, File);

    _this = _super.call(this, props);
    _this.renderEnd = _this.renderEnd.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(File, [{
    key: "renderEnd",
    value: function renderEnd() {
      var children = this.props.children;
      var end = (0, _findByType["default"])(children, "End");
      if (!end || end.length < 1) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "swf-file--end",
        children: end
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          file = _this$props.file,
          displayValue = _this$props.displayValue,
          icon = _this$props.icon;
      var fileClasses = (0, _classnames["default"])(className, "swf-file");
      var sizeStr = "".concat((file.size / 1000).toFixed(3), " Kb");
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: fileClasses,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
            className: "file-icon",
            icon: icon || (0, _utils.getIconByFileType)(file.type),
            customSize: 30
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "file-info-container",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "file-header",
              children: displayValue || file.name
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "file-size",
              children: sizeStr
            })]
          }), this.renderEnd()]
        })
      });
    }
  }]);

  return File;
}(React.Component);

;
File.End = (0, _findByType.createSubComponent)("End");
File.propTypes = {
  file: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    size: _propTypes["default"].number,
    type: _propTypes["default"].string
  }),
  displayValue: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};
var _default = File;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L0ZpbGUuanMiXSwibmFtZXMiOlsiRW5kIiwiRmlsZSIsInByb3BzIiwicmVuZGVyRW5kIiwiYmluZCIsImNoaWxkcmVuIiwiZW5kIiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwiZmlsZSIsImRpc3BsYXlWYWx1ZSIsImljb24iLCJmaWxlQ2xhc3NlcyIsInNpemVTdHIiLCJzaXplIiwidG9GaXhlZCIsInR5cGUiLCJuYW1lIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsIm51bWJlciIsIm9uZU9mVHlwZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsU0FBTSxJQUFOO0FBQUEsQ0FBWjs7SUFFTUMsSTs7Ozs7QUFDRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVDLElBQWYsK0JBQWpCO0FBRmU7QUFHbEI7Ozs7V0FFRCxxQkFBVztBQUFBLFVBQ0FDLFFBREEsR0FDWSxLQUFLSCxLQURqQixDQUNBRyxRQURBO0FBRVAsVUFBTUMsR0FBRyxHQUFHLDRCQUFXRCxRQUFYLEVBQXFCLEtBQXJCLENBQVo7QUFFQSxVQUFJLENBQUNDLEdBQUQsSUFBUUEsR0FBRyxDQUFDQyxNQUFKLEdBQVcsQ0FBdkIsRUFBMEIsT0FBTyxJQUFQO0FBRTFCLDBCQUFPO0FBQUssUUFBQSxTQUFTLEVBQUUsZUFBaEI7QUFBQSxrQkFBa0NEO0FBQWxDLFFBQVA7QUFDSDs7O1dBRUQsa0JBQVM7QUFBQSx3QkFPRCxLQUFLSixLQVBKO0FBQUEsVUFHRE0sU0FIQyxlQUdEQSxTQUhDO0FBQUEsVUFJREMsSUFKQyxlQUlEQSxJQUpDO0FBQUEsVUFLREMsWUFMQyxlQUtEQSxZQUxDO0FBQUEsVUFNREMsSUFOQyxlQU1EQSxJQU5DO0FBVUwsVUFBTUMsV0FBVyxHQUFHLDRCQUNoQkosU0FEZ0IsRUFFaEIsVUFGZ0IsQ0FBcEI7QUFLQSxVQUFJSyxPQUFPLGFBQU0sQ0FBQ0osSUFBSSxDQUFDSyxJQUFMLEdBQVUsSUFBWCxFQUFpQkMsT0FBakIsQ0FBeUIsQ0FBekIsQ0FBTixRQUFYO0FBQ0EsMEJBQVE7QUFBQSwrQkFDSjtBQUFLLFVBQUEsU0FBUyxFQUFFSCxXQUFoQjtBQUFBLGtDQUNJLHFCQUFDLGdCQUFEO0FBQ0ksWUFBQSxTQUFTLEVBQUUsV0FEZjtBQUVJLFlBQUEsSUFBSSxFQUFFRCxJQUFJLElBQUksOEJBQWtCRixJQUFJLENBQUNPLElBQXZCLENBRmxCO0FBR0ksWUFBQSxVQUFVLEVBQUU7QUFIaEIsWUFESixlQU1JO0FBQUssWUFBQSxTQUFTLEVBQUUscUJBQWhCO0FBQUEsb0NBQ0k7QUFBSyxjQUFBLFNBQVMsRUFBRSxhQUFoQjtBQUFBLHdCQUFnQ04sWUFBWSxJQUFJRCxJQUFJLENBQUNRO0FBQXJELGNBREosZUFFSTtBQUFLLGNBQUEsU0FBUyxFQUFFLFdBQWhCO0FBQUEsd0JBQThCSjtBQUE5QixjQUZKO0FBQUEsWUFOSixFQVVLLEtBQUtWLFNBQUwsRUFWTDtBQUFBO0FBREksUUFBUjtBQWVIOzs7O0VBOUNjZSxLQUFLLENBQUNDLFM7O0FBK0N4QjtBQUVEbEIsSUFBSSxDQUFDRCxHQUFMLEdBQVcsb0NBQW1CLEtBQW5CLENBQVg7QUFFQUMsSUFBSSxDQUFDbUIsU0FBTCxHQUFpQjtBQUNiWCxFQUFBQSxJQUFJLEVBQUVXLHNCQUFVQyxLQUFWLENBQWdCO0FBQ2xCSixJQUFBQSxJQUFJLEVBQUVHLHNCQUFVRSxNQURFO0FBRWxCUixJQUFBQSxJQUFJLEVBQUVNLHNCQUFVRyxNQUZFO0FBR2xCUCxJQUFBQSxJQUFJLEVBQUVJLHNCQUFVRTtBQUhFLEdBQWhCLENBRE87QUFNYlosRUFBQUEsWUFBWSxFQUFFVSxzQkFBVUUsTUFOWDtBQU9iWCxFQUFBQSxJQUFJLEVBQUVTLHNCQUFVRSxNQVBIO0FBUWJkLEVBQUFBLFNBQVMsRUFBRVksc0JBQVVJLFNBQVYsQ0FBb0IsQ0FBQ0osc0JBQVVFLE1BQVgsRUFBbUJGLHNCQUFVSyxNQUE3QixDQUFwQjtBQVJFLENBQWpCO2VBYWV4QixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQgZmluZEJ5VHlwZSwge2NyZWF0ZVN1YkNvbXBvbmVudH0gZnJvbSBcIi4uL3V0aWxzL2ZpbmRCeVR5cGVcIjtcclxuaW1wb3J0IHtnZXRJY29uQnlGaWxlVHlwZX0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmNvbnN0IEVuZCA9ICgpID0+IG51bGw7XHJcblxyXG5jbGFzcyBGaWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyRW5kID0gdGhpcy5yZW5kZXJFbmQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFbmQoKXtcclxuICAgICAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBlbmQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIkVuZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbmQgfHwgZW5kLmxlbmd0aDwxKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcInN3Zi1maWxlLS1lbmRcIn0+e2VuZH08L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBmaWxlLFxyXG4gICAgICAgICAgICBkaXNwbGF5VmFsdWUsXHJcbiAgICAgICAgICAgIGljb25cclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGZpbGVDbGFzc2VzID0gY2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBcInN3Zi1maWxlXCJcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGxldCBzaXplU3RyID0gYCR7KGZpbGUuc2l6ZS8xMDAwKS50b0ZpeGVkKDMpfSBLYmBcclxuICAgICAgICByZXR1cm4gIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmaWxlQ2xhc3Nlc30+XHJcbiAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmaWxlLWljb25cIn1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29uIHx8IGdldEljb25CeUZpbGVUeXBlKGZpbGUudHlwZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tU2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZmlsZS1pbmZvLWNvbnRhaW5lclwifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmaWxlLWhlYWRlclwifT57ZGlzcGxheVZhbHVlIHx8IGZpbGUubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmaWxlLXNpemVcIn0+e3NpemVTdHJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckVuZCgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5GaWxlLkVuZCA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkVuZFwiKTtcclxuXHJcbkZpbGUucHJvcFR5cGVzID0ge1xyXG4gICAgZmlsZTogcHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHNpemU6IHByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgdHlwZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gICAgZGlzcGxheVZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaWNvbjogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLnN0cmluZywgcHJvcFR5cGVzLm9iamVjdF0pXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZSJdfQ==