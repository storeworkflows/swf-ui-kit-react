"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var getChild = function getChild(children, slotValue) {
  var result = null;
  children.forEach(function (child) {
    if (child.props.slot === slotValue) result = child;
  });
  return result;
};

var Popover = /*#__PURE__*/function (_React$Component) {
  _inherits(Popover, _React$Component);

  var _super = _createSuper(Popover);

  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _super.call(this, props);
    _this.state = {
      opened: props.opened
    };
    return _this;
  }

  _createClass(Popover, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          hideTail = _this$props.hideTail,
          manageOpened = _this$props.manageOpened,
          positionTarget = _this$props.positionTarget,
          positions = _this$props.positions,
          children = _this$props.children,
          onClick = _this$props.onClick;
      var opened = this.state.opened;
      console.log(positionTarget);
      console.log(children);
      console.log(children[2]);

      var _hasPositionTarget = positionTarget !== undefined;

      var _target = _hasPositionTarget ? positionTarget : getChild(children, "target");

      var _content = getChild(children, "content");

      var _isManagedByUser = manageOpened && onClick !== undefined;

      console.log("target", _target);
      console.log("content", _content);

      var targetClicked = function targetClicked() {
        console.log("oldState", opened);

        _this2.setState(function (oldState) {
          return {
            opened: !oldState.opened
          };
        });
      };

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "popover-target",
          onClick: _isManagedByUser ? onClick({
            opened: opened
          }) : targetClicked,
          children: _target
        }), opened && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "popover-content",
          children: _content
        })]
      });
    }
  }]);

  return Popover;
}(React.Component);

Popover.defaultProps = {
  hideTail: false,
  manageOpened: false,
  opened: false
};
Popover.propTypes = {
  hideTail: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  opened: _propTypes["default"].bool,
  positionTarget: _propTypes["default"].element,
  positions: _propTypes["default"].array,
  onClick: _propTypes["default"].func
};
var _default = Popover;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3BvdmVyL1BvcG92ZXIuanMiXSwibmFtZXMiOlsiZ2V0Q2hpbGQiLCJjaGlsZHJlbiIsInNsb3RWYWx1ZSIsInJlc3VsdCIsImZvckVhY2giLCJjaGlsZCIsInByb3BzIiwic2xvdCIsIlBvcG92ZXIiLCJzdGF0ZSIsIm9wZW5lZCIsImhpZGVUYWlsIiwibWFuYWdlT3BlbmVkIiwicG9zaXRpb25UYXJnZXQiLCJwb3NpdGlvbnMiLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsIl9oYXNQb3NpdGlvblRhcmdldCIsInVuZGVmaW5lZCIsIl90YXJnZXQiLCJfY29udGVudCIsIl9pc01hbmFnZWRCeVVzZXIiLCJ0YXJnZXRDbGlja2VkIiwic2V0U3RhdGUiLCJvbGRTdGF0ZSIsInN0eWxlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsImVsZW1lbnQiLCJhcnJheSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxRQUFELEVBQVdDLFNBQVgsRUFBeUI7QUFDdEMsTUFBSUMsTUFBTSxHQUFHLElBQWI7QUFDQUYsRUFBQUEsUUFBUSxDQUFDRyxPQUFULENBQWtCLFVBQUFDLEtBQUssRUFBSTtBQUN2QixRQUFHQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsSUFBWixLQUFxQkwsU0FBeEIsRUFDSUMsTUFBTSxHQUFHRSxLQUFUO0FBQ1AsR0FIRDtBQUlBLFNBQU9GLE1BQVA7QUFDSCxDQVBEOztJQVFNSyxPOzs7OztBQUNGLG1CQUFZRixLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLRyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsTUFBTSxFQUFFSixLQUFLLENBQUNJO0FBREwsS0FBYjtBQUZlO0FBS2xCOzs7O1dBRUQsa0JBQVM7QUFBQTs7QUFBQSx3QkFTRCxLQUFLSixLQVRKO0FBQUEsVUFHREssUUFIQyxlQUdEQSxRQUhDO0FBQUEsVUFJREMsWUFKQyxlQUlEQSxZQUpDO0FBQUEsVUFLREMsY0FMQyxlQUtEQSxjQUxDO0FBQUEsVUFNREMsU0FOQyxlQU1EQSxTQU5DO0FBQUEsVUFPRGIsUUFQQyxlQU9EQSxRQVBDO0FBQUEsVUFRRGMsT0FSQyxlQVFEQSxPQVJDO0FBQUEsVUFXRUwsTUFYRixHQVdZLEtBQUtELEtBWGpCLENBV0VDLE1BWEY7QUFhTE0sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLGNBQVo7QUFDQUcsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVloQixRQUFaO0FBQ0FlLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaEIsUUFBUSxDQUFDLENBQUQsQ0FBcEI7O0FBRUEsVUFBTWlCLGtCQUFrQixHQUFJTCxjQUFjLEtBQUtNLFNBQS9DOztBQUNBLFVBQU1DLE9BQU8sR0FBR0Ysa0JBQWtCLEdBQUdMLGNBQUgsR0FBb0JiLFFBQVEsQ0FBQ0MsUUFBRCxFQUFXLFFBQVgsQ0FBOUQ7O0FBQ0EsVUFBTW9CLFFBQVEsR0FBR3JCLFFBQVEsQ0FBQ0MsUUFBRCxFQUFXLFNBQVgsQ0FBekI7O0FBQ0EsVUFBTXFCLGdCQUFnQixHQUFHVixZQUFZLElBQUlHLE9BQU8sS0FBS0ksU0FBckQ7O0FBRUFILE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JHLE9BQXRCO0FBQ0FKLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJJLFFBQXZCOztBQUVBLFVBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4QlAsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlAsTUFBeEI7O0FBQ0EsUUFBQSxNQUFJLENBQUNjLFFBQUwsQ0FBYyxVQUFDQyxRQUFEO0FBQUEsaUJBQWU7QUFDekJmLFlBQUFBLE1BQU0sRUFBRSxDQUFDZSxRQUFRLENBQUNmO0FBRE8sV0FBZjtBQUFBLFNBQWQ7QUFHSCxPQUxEOztBQU9BLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBTyxVQUFBLElBQUksRUFBQyxVQUFaO0FBQUEsb0JBQXdCZ0I7QUFBeEIsVUFESixlQUVJO0FBQ0ksVUFBQSxTQUFTLEVBQUMsZ0JBRGQ7QUFFSSxVQUFBLE9BQU8sRUFBR0osZ0JBQWdCLEdBQUdQLE9BQU8sQ0FBQztBQUFDTCxZQUFBQSxNQUFNLEVBQUVBO0FBQVQsV0FBRCxDQUFWLEdBQStCYSxhQUY3RDtBQUFBLG9CQUlLSDtBQUpMLFVBRkosRUFRS1YsTUFBTSxpQkFDSDtBQUFLLFVBQUEsU0FBUyxFQUFDLGlCQUFmO0FBQUEsb0JBQ0tXO0FBREwsVUFUUjtBQUFBLFFBREo7QUFnQkg7Ozs7RUF4RGlCTSxLQUFLLENBQUNDLFM7O0FBMkQ1QnBCLE9BQU8sQ0FBQ3FCLFlBQVIsR0FBdUI7QUFDbkJsQixFQUFBQSxRQUFRLEVBQUUsS0FEUztBQUVuQkMsRUFBQUEsWUFBWSxFQUFFLEtBRks7QUFHbkJGLEVBQUFBLE1BQU0sRUFBRTtBQUhXLENBQXZCO0FBTUFGLE9BQU8sQ0FBQ3NCLFNBQVIsR0FBb0I7QUFDaEJuQixFQUFBQSxRQUFRLEVBQUVtQixzQkFBVUMsSUFESjtBQUVoQm5CLEVBQUFBLFlBQVksRUFBRWtCLHNCQUFVQyxJQUZSO0FBR2hCckIsRUFBQUEsTUFBTSxFQUFFb0Isc0JBQVVDLElBSEY7QUFJaEJsQixFQUFBQSxjQUFjLEVBQUVpQixzQkFBVUUsT0FKVjtBQUtoQmxCLEVBQUFBLFNBQVMsRUFBRWdCLHNCQUFVRyxLQUxMO0FBTWhCbEIsRUFBQUEsT0FBTyxFQUFFZSxzQkFBVUk7QUFOSCxDQUFwQjtlQVNlMUIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5cblxuXG5jb25zdCBnZXRDaGlsZCA9IChjaGlsZHJlbiwgc2xvdFZhbHVlKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCggY2hpbGQgPT4ge1xuICAgICAgICBpZihjaGlsZC5wcm9wcy5zbG90ID09PSBzbG90VmFsdWUpXG4gICAgICAgICAgICByZXN1bHQgPSBjaGlsZDtcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuZWQ6IHByb3BzLm9wZW5lZFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGhpZGVUYWlsLFxuICAgICAgICAgICAgbWFuYWdlT3BlbmVkLFxuICAgICAgICAgICAgcG9zaXRpb25UYXJnZXQsXG4gICAgICAgICAgICBwb3NpdGlvbnMsXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIG9uQ2xpY2tcbiAgICAgICAgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBjb25zdCB7b3BlbmVkfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgY29uc29sZS5sb2cocG9zaXRpb25UYXJnZXQpO1xuICAgICAgICBjb25zb2xlLmxvZyhjaGlsZHJlbik7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoaWxkcmVuWzJdKTtcblxuICAgICAgICBjb25zdCBfaGFzUG9zaXRpb25UYXJnZXQgPSAocG9zaXRpb25UYXJnZXQgIT09IHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnN0IF90YXJnZXQgPSBfaGFzUG9zaXRpb25UYXJnZXQgPyBwb3NpdGlvblRhcmdldCA6IGdldENoaWxkKGNoaWxkcmVuLCBcInRhcmdldFwiKTtcbiAgICAgICAgY29uc3QgX2NvbnRlbnQgPSBnZXRDaGlsZChjaGlsZHJlbiwgXCJjb250ZW50XCIpO1xuICAgICAgICBjb25zdCBfaXNNYW5hZ2VkQnlVc2VyID0gbWFuYWdlT3BlbmVkICYmIG9uQ2xpY2sgIT09IHVuZGVmaW5lZDtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInRhcmdldFwiLCBfdGFyZ2V0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb250ZW50XCIsIF9jb250ZW50KTtcblxuICAgICAgICBjb25zdCB0YXJnZXRDbGlja2VkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbGRTdGF0ZVwiLCBvcGVuZWQpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgob2xkU3RhdGUpID0+ICh7XG4gICAgICAgICAgICAgICAgb3BlbmVkOiAhb2xkU3RhdGUub3BlbmVkXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9wb3Zlci10YXJnZXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgX2lzTWFuYWdlZEJ5VXNlciA/IG9uQ2xpY2soe29wZW5lZDogb3BlbmVkfSkgOiB0YXJnZXRDbGlja2VkIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtfdGFyZ2V0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtvcGVuZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3BvdmVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtfY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoaWRlVGFpbDogZmFsc2UsXG4gICAgbWFuYWdlT3BlbmVkOiBmYWxzZSxcbiAgICBvcGVuZWQ6IGZhbHNlXG59XG5cblBvcG92ZXIucHJvcFR5cGVzID0ge1xuICAgIGhpZGVUYWlsOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBtYW5hZ2VPcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxuICAgIG9wZW5lZDogcHJvcFR5cGVzLmJvb2wsXG4gICAgcG9zaXRpb25UYXJnZXQ6IHByb3BUeXBlcy5lbGVtZW50LFxuICAgIHBvc2l0aW9uczogcHJvcFR5cGVzLmFycmF5LFxuICAgIG9uQ2xpY2s6IHByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXIiXX0=