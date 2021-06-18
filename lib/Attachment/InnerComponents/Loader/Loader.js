"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Loader = function Loader(props) {
  var loaderRef = (0, React.useRef)(null);
  (0, React.useEffect)(function () {
    if (loaderRef !== null && loaderRef !== void 0 && loaderRef.current) {
      var parentEl = loaderRef.current.parentElement.parentElement;

      if (parentEl) {
        var styles = getComputedStyle(parentEl);
        loaderRef.current.style.minHeight = "".concat(parentEl.offsetHeight - styles.paddingTop.split('px')[0] - styles.paddingBottom.split('px')[0], "px");
      }
    }
  }, []);
  var actionName = props.actionName,
      className = props.className;
  var containerClasses = (0, _classnames["default"])(className, "swf-loader");
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "swf-loader-container",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: containerClasses,
        ref: loaderRef,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "loader-container",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: actionName
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "loader"
          })]
        })
      })
    })
  });
};

Loader.defaultProps = {
  actionName: "",
  className: ""
};
Loader.propTypes = {
  actionName: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};

var _default = /*#__PURE__*/React.memo(Loader);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9BdHRhY2htZW50L0lubmVyQ29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsInByb3BzIiwibG9hZGVyUmVmIiwiY3VycmVudCIsInBhcmVudEVsIiwicGFyZW50RWxlbWVudCIsInN0eWxlcyIsImdldENvbXB1dGVkU3R5bGUiLCJzdHlsZSIsIm1pbkhlaWdodCIsIm9mZnNldEhlaWdodCIsInBhZGRpbmdUb3AiLCJzcGxpdCIsInBhZGRpbmdCb3R0b20iLCJhY3Rpb25OYW1lIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQ2xhc3NlcyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm9iamVjdCIsIlJlYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFFdEIsTUFBTUMsU0FBUyxHQUFHLGtCQUFPLElBQVAsQ0FBbEI7QUFDQSx1QkFBVSxZQUFNO0FBQ1osUUFBSUEsU0FBSixhQUFJQSxTQUFKLGVBQUlBLFNBQVMsQ0FBRUMsT0FBZixFQUF3QjtBQUNwQixVQUFJQyxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQkUsYUFBbEIsQ0FBZ0NBLGFBQS9DOztBQUNBLFVBQUlELFFBQUosRUFBYztBQUNWLFlBQUlFLE1BQU0sR0FBR0MsZ0JBQWdCLENBQUNILFFBQUQsQ0FBN0I7QUFDQUYsUUFBQUEsU0FBUyxDQUFDQyxPQUFWLENBQWtCSyxLQUFsQixDQUF3QkMsU0FBeEIsYUFBdUNMLFFBQVEsQ0FBQ00sWUFBVCxHQUF3QkosTUFBTSxDQUFDSyxVQUFQLENBQWtCQyxLQUFsQixDQUF3QixJQUF4QixFQUE4QixDQUE5QixDQUF4QixHQUEyRE4sTUFBTSxDQUFDTyxhQUFQLENBQXFCRCxLQUFyQixDQUEyQixJQUEzQixFQUFpQyxDQUFqQyxDQUFsRztBQUNIO0FBQ0o7QUFDSixHQVJELEVBUUcsRUFSSDtBQUhzQixNQWNmRSxVQWRlLEdBY1ViLEtBZFYsQ0FjZmEsVUFkZTtBQUFBLE1BY0hDLFNBZEcsR0FjVWQsS0FkVixDQWNIYyxTQWRHO0FBZXRCLE1BQU1DLGdCQUFnQixHQUFHLDRCQUNyQkQsU0FEcUIsRUFFckIsWUFGcUIsQ0FBekI7QUFLQSxzQkFBTztBQUFBLDJCQUNIO0FBQUssTUFBQSxTQUFTLEVBQUUsc0JBQWhCO0FBQUEsNkJBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBRUMsZ0JBQWhCO0FBQWtDLFFBQUEsR0FBRyxFQUFFZCxTQUF2QztBQUFBLCtCQUNJO0FBQUssVUFBQSxTQUFTLEVBQUUsa0JBQWhCO0FBQUEsa0NBQ0k7QUFBQSxzQkFBT1k7QUFBUCxZQURKLGVBRUk7QUFBSyxZQUFBLFNBQVMsRUFBQztBQUFmLFlBRko7QUFBQTtBQURKO0FBREo7QUFERyxJQUFQO0FBVUgsQ0E5QkQ7O0FBaUNBZCxNQUFNLENBQUNpQixZQUFQLEdBQXNCO0FBQ2xCSCxFQUFBQSxVQUFVLEVBQUUsRUFETTtBQUVsQkMsRUFBQUEsU0FBUyxFQUFFO0FBRk8sQ0FBdEI7QUFLQWYsTUFBTSxDQUFDa0IsU0FBUCxHQUFtQjtBQUNmSixFQUFBQSxVQUFVLEVBQUVJLHNCQUFVQyxNQURQO0FBRWZKLEVBQUFBLFNBQVMsRUFBRUcsc0JBQVVFLFNBQVYsQ0FBb0IsQ0FBQ0Ysc0JBQVVDLE1BQVgsRUFBbUJELHNCQUFVRyxNQUE3QixDQUFwQjtBQUZJLENBQW5COzs0QkFLZUMsS0FBSyxDQUFDQyxJQUFOLENBQVd2QixNQUFYLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExvYWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGxvYWRlclJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxvYWRlclJlZj8uY3VycmVudCkge1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50RWwgPSBsb2FkZXJSZWYuY3VycmVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnRFbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUocGFyZW50RWwpXHJcbiAgICAgICAgICAgICAgICBsb2FkZXJSZWYuY3VycmVudC5zdHlsZS5taW5IZWlnaHQgPSBgJHtwYXJlbnRFbC5vZmZzZXRIZWlnaHQgLSBzdHlsZXMucGFkZGluZ1RvcC5zcGxpdCgncHgnKVswXSAtIHN0eWxlcy5wYWRkaW5nQm90dG9tLnNwbGl0KCdweCcpWzBdfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuXHJcbiAgICBjb25zdCB7YWN0aW9uTmFtZSwgY2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgY29uc3QgY29udGFpbmVyQ2xhc3NlcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIFwic3dmLWxvYWRlclwiXHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic3dmLWxvYWRlci1jb250YWluZXJcIn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc2VzfSByZWY9e2xvYWRlclJlZn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJsb2FkZXItY29udGFpbmVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnthY3Rpb25OYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG59O1xyXG5cclxuXHJcbkxvYWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBhY3Rpb25OYW1lOiBcIlwiLFxyXG4gICAgY2xhc3NOYW1lOiBcIlwiXHJcbn1cclxuXHJcbkxvYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBhY3Rpb25OYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMub2JqZWN0XSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhMb2FkZXIpIl19