"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _index = require("../index");

var _styles = _interopRequireDefault(require("./styles.scss"));

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var AvatarGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(AvatarGroup, _React$Component);

  var _super = _createSuper(AvatarGroup);

  function AvatarGroup(props) {
    var _this;

    _classCallCheck(this, AvatarGroup);

    _this = _super.call(this, props);
    _this.addNewMember = _this.addNewMember.bind(_assertThisInitialized(_this));
    _this.openAvatar = _this.openAvatar.bind(_assertThisInitialized(_this));
    _this.state = {
      openedAvatar: -1
    };
    return _this;
  }

  _createClass(AvatarGroup, [{
    key: "openAvatar",
    value: function openAvatar(index) {
      this.setState({
        openedAvatar: index
      });
    }
  }, {
    key: "addNewMember",
    value: function addNewMember(event) {
      if (this.props.clickable) {
        this.props.onAdd();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          size = _this$props.size,
          max = _this$props.max,
          canAdd = _this$props.canAdd,
          clickable = _this$props.clickable,
          manageOpened = _this$props.manageOpened,
          members = _this$props.members,
          canRemove = _this$props.canRemove,
          onRemove = _this$props.onRemove;
      var hasAdditionalMembers = members.length > max + 1;
      var maxViewers = hasAdditionalMembers ? max : members.length;
      var additionalMembers = members.length - max;
      var viewers = members.slice(0, maxViewers).reverse();
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          ref: function ref(elm) {
            return _this2.props.innerRef.current = elm;
          },
          className: (0, _classnames2["default"])(_defineProperty({
            "avatar-container": true
          }, "--".concat(size), true)),
          children: [canAdd && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames2["default"])({
              "avatar-multiple": true,
              "add-new-member": true
            }),
            onClick: this.addNewMember,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "additional-avatar",
              children: String.fromCharCode(43)
            })
          }), hasAdditionalMembers && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames2["default"])({
              "avatar-multiple": true,
              "additional-members": true
            }),
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              className: "additional-avatar",
              children: [String.fromCharCode(43), additionalMembers]
            })
          }), viewers.map(function (viewer, index) {
            var _this2$state;

            return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              onClick: _this2.openAvatar.bind(_this2, index),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Avatar, {
                id: viewer.id || index,
                size: size,
                canRemove: canRemove,
                onRemove: onRemove,
                member: viewer,
                manageOpened: manageOpened,
                open: ((_this2$state = _this2.state) === null || _this2$state === void 0 ? void 0 : _this2$state.openedAvatar) === index
              })
            }, index + viewer.name.replace("", "_"));
          })]
        })]
      });
    }
  }]);

  return AvatarGroup;
}(React.Component);

AvatarGroup.defaultProps = {
  clickable: true,
  max: 5,
  size: "xs",
  members: [],
  canRemove: true,
  canAdd: true,
  onAdd: _utils.noop,
  onRemove: _utils.noop,
  onClick: _utils.noop,
  manageOpened: false,
  innerRef: /*#__PURE__*/React.createRef()
};
AvatarGroup.propTypes = {
  clickable: _propTypes["default"].bool,
  max: _propTypes["default"].number,
  size: _propTypes["default"].oneOf(["xs", "md", "lg"]),
  manageOpened: _propTypes["default"].bool,
  members: _propTypes["default"].array,
  canRemove: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  canAdd: _propTypes["default"].bool,
  onAdd: _propTypes["default"].func,
  onRemove: _propTypes["default"].func,
  innerRef: _propTypes["default"].object
};
var _default = AvatarGroup;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXJHcm91cC9BdmF0YXJHcm91cC5qcyJdLCJuYW1lcyI6WyJBdmF0YXJHcm91cCIsInByb3BzIiwiYWRkTmV3TWVtYmVyIiwiYmluZCIsIm9wZW5BdmF0YXIiLCJzdGF0ZSIsIm9wZW5lZEF2YXRhciIsImluZGV4Iiwic2V0U3RhdGUiLCJldmVudCIsImNsaWNrYWJsZSIsIm9uQWRkIiwic2l6ZSIsIm1heCIsImNhbkFkZCIsIm1hbmFnZU9wZW5lZCIsIm1lbWJlcnMiLCJjYW5SZW1vdmUiLCJvblJlbW92ZSIsImhhc0FkZGl0aW9uYWxNZW1iZXJzIiwibGVuZ3RoIiwibWF4Vmlld2VycyIsImFkZGl0aW9uYWxNZW1iZXJzIiwidmlld2VycyIsInNsaWNlIiwicmV2ZXJzZSIsInN0eWxlcyIsImVsbSIsImlubmVyUmVmIiwiY3VycmVudCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1hcCIsInZpZXdlciIsImlkIiwibmFtZSIsInJlcGxhY2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm5vb3AiLCJvbkNsaWNrIiwiY3JlYXRlUmVmIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm51bWJlciIsIm9uZU9mIiwiYXJyYXkiLCJmdW5jIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQiwrQkFBcEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLCtCQUFsQjtBQUNBLFVBQUtFLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxZQUFZLEVBQUUsQ0FB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QUEsT0FBTyxFQUFFRyxzQkFBVUssSUFQQztBQVFwQm5DLEVBQUFBLE1BQU0sRUFBRThCLHNCQUFVQyxJQVJFO0FBU3BCbEMsRUFBQUEsS0FBSyxFQUFFaUMsc0JBQVVLLElBVEc7QUFVcEIvQixFQUFBQSxRQUFRLEVBQUUwQixzQkFBVUssSUFWQTtBQVdwQnJCLEVBQUFBLFFBQVEsRUFBRWdCLHNCQUFVTTtBQVhBLENBQXhCO2VBY2VsRCxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHtBdmF0YXJ9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBBdmF0YXJHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmFkZE5ld01lbWJlciA9IHRoaXMuYWRkTmV3TWVtYmVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vcGVuQXZhdGFyID0gdGhpcy5vcGVuQXZhdGFyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3BlbmVkQXZhdGFyOiAtMVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuQXZhdGFyKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkQXZhdGFyOiBpbmRleH0pXHJcbiAgICB9XHJcblxyXG4gICAgYWRkTmV3TWVtYmVyKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2thYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25BZGQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtzaXplLCBtYXgsIGNhbkFkZCwgY2xpY2thYmxlLCBtYW5hZ2VPcGVuZWQsIG1lbWJlcnMsIGNhblJlbW92ZSwgb25SZW1vdmV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBoYXNBZGRpdGlvbmFsTWVtYmVycyA9IG1lbWJlcnMubGVuZ3RoID4gbWF4ICsgMTtcclxuICAgICAgICBjb25zdCBtYXhWaWV3ZXJzID0gaGFzQWRkaXRpb25hbE1lbWJlcnMgPyBtYXggOiBtZW1iZXJzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsTWVtYmVycyA9IG1lbWJlcnMubGVuZ3RoIC0gbWF4O1xyXG5cclxuICAgICAgICBjb25zdCB2aWV3ZXJzID0gbWVtYmVycy5zbGljZSgwLCBtYXhWaWV3ZXJzKS5yZXZlcnNlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMucHJvcHMuaW5uZXJSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhci1jb250YWluZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7c2l6ZX1gXTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhbkFkZCAmJiA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhci1tdWx0aXBsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGQtbmV3LW1lbWJlclwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZE5ld01lbWJlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkZGl0aW9uYWwtYXZhdGFyXCI+e1N0cmluZy5mcm9tQ2hhckNvZGUoNDMpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtoYXNBZGRpdGlvbmFsTWVtYmVycyAmJiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyLW11bHRpcGxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkaXRpb25hbC1tZW1iZXJzXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkZGl0aW9uYWwtYXZhdGFyXCI+e1N0cmluZy5mcm9tQ2hhckNvZGUoNDMpfXthZGRpdGlvbmFsTWVtYmVyc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7dmlld2Vycy5tYXAoKHZpZXdlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4ICsgdmlld2VyLm5hbWUucmVwbGFjZShcIlwiLCBcIl9cIil9IG9uQ2xpY2s9e3RoaXMub3BlbkF2YXRhci5iaW5kKHRoaXMsIGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3ZpZXdlci5pZCB8fCBpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhblJlbW92ZT17Y2FuUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXtvblJlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXI9e3ZpZXdlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VPcGVuZWQ9e21hbmFnZU9wZW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlPy5vcGVuZWRBdmF0YXIgPT09IGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5BdmF0YXJHcm91cC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICBtYXg6IDUsXHJcbiAgICBzaXplOiBcInhzXCIsXHJcbiAgICBtZW1iZXJzOiBbXSxcclxuICAgIGNhblJlbW92ZTogdHJ1ZSxcclxuICAgIGNhbkFkZDogdHJ1ZSxcclxuICAgIG9uQWRkOiBub29wLFxyXG4gICAgb25SZW1vdmU6IG5vb3AsXHJcbiAgICBvbkNsaWNrOiBub29wLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBmYWxzZSxcclxuICAgIGlubmVyUmVmOiBSZWFjdC5jcmVhdGVSZWYoKVxyXG59XHJcblxyXG5BdmF0YXJHcm91cC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGlja2FibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcInhzXCIsIFwibWRcIiwgXCJsZ1wiXSksXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWVtYmVyczogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgY2FuUmVtb3ZlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY2FuQWRkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG9uQWRkOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGlubmVyUmVmOiBQcm9wVHlwZXMub2JqZWN0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2YXRhckdyb3VwIl19