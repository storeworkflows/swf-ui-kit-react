"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("./constants");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _addStyles = function _addStyles(customStyle) {
  var styles = {};
  var hasStyles = customStyle !== null;
  if (hasStyles) _constants.SWF_TOGGLE.AVAILABLE_CUSTOM_STYLES.forEach(function (styleName) {
    if (customStyle[styleName] !== undefined) styles["--".concat(styleName)] = customStyle[styleName];
  });
  return styles;
};

var Toggle = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var disabled = props.disabled,
      size = props.size,
      customStyle = props.customStyle,
      className = props.className,
      manageChecked = props.manageChecked,
      checked = props.checked,
      visible = props.visible,
      onClick = props.onClick;

  var _useState = (0, React.useState)(checked),
      _useState2 = _slicedToArray(_useState, 2),
      isChecked = _useState2[0],
      setIsChecked = _useState2[1];

  var onToggleClick = function onToggleClick() {
    if (manageChecked) {
      onClick({
        value: checked
      });
    } else {
      setIsChecked(!isChecked);
      onClick({
        value: !isChecked
      });
    }
  };

  var additionalStyle = _addStyles(customStyle);

  var toggleClasses = (0, _classnames["default"])(className, "toggle-".concat(size), {
    "switch": true,
    "disabled": disabled
  });
  return !visible ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
      className: toggleClasses,
      style: additionalStyle,
      ref: ref,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "checkbox",
        checked: manageChecked ? checked : isChecked,
        disabled: disabled,
        onChange: onToggleClick
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "slider"
      })]
    })
  }) : null;
});
Toggle.defaultProps = {
  checked: false,
  disabled: false,
  manageChecked: false,
  size: "md",
  customStyle: null,
  onClick: function onClick() {
    return void 0;
  },
  className: "",
  visible: false
};
Toggle.propTypes = {
  /**
   * Available to change only when manageChecked=true
   */
  checked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  manageChecked: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["sm", "md"]),

  /**
   * Available custom styles: "width",   "height",   "circle-border-size", "border-size", "circle-gap",
   "active-border-color", "active-background-color",
   "border-color", "background-color",
   "circle-border-color", "circle-background", "hover-circle-background"
   */
  customStyle: _propTypes["default"].object,
  onClick: _propTypes["default"].func,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  visible: _propTypes["default"].bool
};

var _default = /*#__PURE__*/React.memo(Toggle);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub2dnbGUvVG9nZ2xlLmpzIl0sIm5hbWVzIjpbIl9hZGRTdHlsZXMiLCJjdXN0b21TdHlsZSIsInN0eWxlcyIsImhhc1N0eWxlcyIsIlNXRl9UT0dHTEUiLCJBVkFJTEFCTEVfQ1VTVE9NX1NUWUxFUyIsImZvckVhY2giLCJzdHlsZU5hbWUiLCJ1bmRlZmluZWQiLCJUb2dnbGUiLCJSZWFjdCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImRpc2FibGVkIiwic2l6ZSIsImNsYXNzTmFtZSIsIm1hbmFnZUNoZWNrZWQiLCJjaGVja2VkIiwidmlzaWJsZSIsIm9uQ2xpY2siLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJvblRvZ2dsZUNsaWNrIiwidmFsdWUiLCJhZGRpdGlvbmFsU3R5bGUiLCJ0b2dnbGVDbGFzc2VzIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsIm9uZU9mIiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsV0FBRCxFQUFpQjtBQUNoQyxNQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQU1DLFNBQVMsR0FBR0YsV0FBVyxLQUFLLElBQWxDO0FBQ0EsTUFBSUUsU0FBSixFQUNJQyxzQkFBV0MsdUJBQVgsQ0FBbUNDLE9BQW5DLENBQTJDLFVBQUNDLFNBQUQsRUFBZTtBQUN0RCxRQUFJTixXQUFXLENBQUNNLFNBQUQsQ0FBWCxLQUEyQkMsU0FBL0IsRUFDSU4sTUFBTSxhQUFNSyxTQUFOLEVBQU4sR0FBMkJOLFdBQVcsQ0FBQ00sU0FBRCxDQUF0QztBQUNQLEdBSEQ7QUFLSixTQUFPTCxNQUFQO0FBQ0gsQ0FWRDs7QUFZQSxJQUFNTyxNQUFNLGdCQUFHQyxLQUFLLENBQUNDLFVB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Zko7QUFnQmZoQixFQUFBQSxTQUFTLEVBQUVZLHNCQUFVSyxTQUFWLENBQW9CLENBQUNMLHNCQUFVTSxNQUFYLEVBQW1CTixzQkFBVUcsTUFBN0IsQ0FBcEIsQ0FoQkk7QUFpQmZaLEVBQUFBLE9BQU8sRUFBRVMsc0JBQVVDO0FBakJKLENBQW5COzs0QkFvQmVuQixLQUFLLENBQUN5QixJQUFOLENBQVcxQixNQUFYLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IHtTV0ZfVE9HR0xFfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBfYWRkU3R5bGVzID0gKGN1c3RvbVN0eWxlKSA9PiB7XHJcbiAgICBsZXQgc3R5bGVzID0ge307XHJcbiAgICBjb25zdCBoYXNTdHlsZXMgPSBjdXN0b21TdHlsZSAhPT0gbnVsbDtcclxuICAgIGlmIChoYXNTdHlsZXMpXHJcbiAgICAgICAgU1dGX1RPR0dMRS5BVkFJTEFCTEVfQ1VTVE9NX1NUWUxFUy5mb3JFYWNoKChzdHlsZU5hbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1c3RvbVN0eWxlW3N0eWxlTmFtZV0gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHN0eWxlc1tgLS0ke3N0eWxlTmFtZX1gXSA9IGN1c3RvbVN0eWxlW3N0eWxlTmFtZV07XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICByZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5jb25zdCBUb2dnbGUgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2Rpc2FibGVkLCBzaXplLCBjdXN0b21TdHlsZSwgY2xhc3NOYW1lLCBtYW5hZ2VDaGVja2VkLCBjaGVja2VkLCB2aXNpYmxlLCBvbkNsaWNrfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW2lzQ2hlY2tlZCwgc2V0SXNDaGVja2VkXSA9IHVzZVN0YXRlKGNoZWNrZWQpXHJcblxyXG4gICAgY29uc3Qgb25Ub2dnbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZihtYW5hZ2VDaGVja2VkKXtcclxuICAgICAgICAgICAgb25DbGljayh7dmFsdWU6IGNoZWNrZWR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc0NoZWNrZWQoIWlzQ2hlY2tlZCk7XHJcbiAgICAgICAgICAgIG9uQ2xpY2soe3ZhbHVlOiAhaXNDaGVja2VkfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZGl0aW9uYWxTdHlsZSA9IF9hZGRTdHlsZXMoY3VzdG9tU3R5bGUpO1xyXG4gICAgbGV0IHRvZ2dsZUNsYXNzZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBgdG9nZ2xlLSR7c2l6ZX1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJzd2l0Y2hcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBkaXNhYmxlZFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAhdmlzaWJsZSA/XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXt0b2dnbGVDbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXthZGRpdGlvbmFsU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e21hbmFnZUNoZWNrZWQgPyBjaGVja2VkIDogaXNDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblRvZ2dsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgKVxyXG5cclxufSk7XHJcblxyXG5Ub2dnbGUuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VDaGVja2VkOiBmYWxzZSxcclxuICAgIHNpemU6IFwibWRcIixcclxuICAgIGN1c3RvbVN0eWxlOiBudWxsLFxyXG4gICAgb25DbGljazogKCkgPT4gdm9pZCAwLFxyXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgdmlzaWJsZTogZmFsc2VcclxufVxyXG5cclxuVG9nZ2xlLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogQXZhaWxhYmxlIHRvIGNoYW5nZSBvbmx5IHdoZW4gbWFuYWdlQ2hlY2tlZD10cnVlXHJcbiAgICAgKi9cclxuICAgIGNoZWNrZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlQ2hlY2tlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaXplOiBwcm9wVHlwZXMub25lT2YoW1wic21cIiwgXCJtZFwiXSksXHJcbiAgICAvKipcclxuICAgICAqIEF2YWlsYWJsZSBjdXN0b20gc3R5bGVzOiBcIndpZHRoXCIsICAgXCJoZWlnaHRcIiwgICBcImNpcmNsZS1ib3JkZXItc2l6ZVwiLCBcImJvcmRlci1zaXplXCIsIFwiY2lyY2xlLWdhcFwiLFxyXG4gICAgIFwiYWN0aXZlLWJvcmRlci1jb2xvclwiLCBcImFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yXCIsXHJcbiAgICAgXCJib3JkZXItY29sb3JcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXHJcbiAgICAgXCJjaXJjbGUtYm9yZGVyLWNvbG9yXCIsIFwiY2lyY2xlLWJhY2tncm91bmRcIiwgXCJob3Zlci1jaXJjbGUtYmFja2dyb3VuZFwiXHJcbiAgICAgKi9cclxuICAgIGN1c3RvbVN0eWxlOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgb25DbGljazogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5vYmplY3RdKSxcclxuICAgIHZpc2libGU6IHByb3BUeXBlcy5ib29sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oVG9nZ2xlKTtcclxuIl19