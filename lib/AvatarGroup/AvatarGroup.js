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
          onRemove = _this$props.onRemove,
          customIcon = _this$props.customIcon;
      var hasAdditionalMembers = members.length > max + 1;
      var maxViewers = hasAdditionalMembers ? max : members.length;
      var additionalMembers = members.length - max;
      var viewers = members.slice(0, maxViewers).reverse();
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          ref: function ref(elm) {
            return _this2.props.innerRef.current = elm;
          },
          className: (0, _classnames2["default"])(_defineProperty({
            "swf-avatar-container": true
          }, "--".concat(size), true)),
          children: [canAdd && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames2["default"])({
              "avatar-multiple": true,
              "add-new-member": true
            }),
            onClick: this.addNewMember,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              icon: customIcon || "person-plus",
              size: size
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
        })
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
  innerRef: /*#__PURE__*/React.createRef(),
  customIcon: ""
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
  customIcon: _propTypes["default"].string,
  onAdd: _propTypes["default"].func,
  onRemove: _propTypes["default"].func,
  innerRef: _propTypes["default"].object
};
var _default = AvatarGroup;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXJHcm91cC9BdmF0YXJHcm91cC5qcyJdLCJuYW1lcyI6WyJBdmF0YXJHcm91cCIsInByb3BzIiwiYWRkTmV3TWVtYmVyIiwiYmluZCIsIm9wZW5BdmF0YXIiLCJzdGF0ZSIsIm9wZW5lZEF2YXRhciIsImluZGV4Iiwic2V0U3RhdGUiLCJldmVudCIsImNsaWNrYWJsZSIsIm9uQWRkIiwic2l6ZSIsIm1heCIsImNhbkFkZCIsIm1hbmFnZU9wZW5lZCIsIm1lbWJlcnMiLCJjYW5SZW1vdmUiLCJvblJlbW92ZSIsImN1c3RvbUljb24iLCJoYXNBZGRpdGlvbmFsTWVtYmVycyIsImxlbmd0aCIsIm1heFZpZXdlcnMiLCJhZGRpdGlvbmFsTWVtYmVycyIsInZpZXdlcnMiLCJzbGljZSIsInJldmVyc2UiLCJlbG0iLCJpbm5lclJlZiIsImN1cnJlbnQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJtYXAiLCJ2aWV3ZXIiLCJpZCIsIm5hbWUiLCJyZXBsYWNlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJub29wIiwib25DbGljayIsImNyZWF0ZVJlZiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJudW1iZXIiLCJvbmVPZiIsImFycmF5IiwiZnVuYyIsInN0cmluZyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7Ozs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsK0JBQXBCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRCxJQUFoQiwrQkFBbEI7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsWUFBWSxF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QkFBVUMsSUFKSjtBQUtwQjdCLEVBQUFBLE9BQU8sRUFBRTRCLHNCQUFVSSxLQUxDO0FBTXBCL0IsRUFBQUEsU0FBUyxFQUFFMkIsc0JBQVVDLElBTkQ7QUFPcEJKLEVBQUFBLE9BQU8sRUFBRUcsc0JBQVVLLElBUEM7QUFRcEJuQyxFQUFBQSxNQUFNLEVBQUU4QixzQkFBVUMsSUFSRTtBQVNwQjFCLEVBQUFBLFVBQVUsRUFBRXlCLHNCQUFVTSxNQVRGO0FBVXBCdkMsRUFBQUEsS0FBSyxFQUFFaUMsc0JBQVVLLElBVkc7QUFXcEIvQixFQUFBQSxRQUFRLEVBQUUwQixzQkFBVUssSUFYQTtBQVlwQnJCLEVBQUFBLFFBQVEsRUFBRWdCLHNCQUFVTztBQVpBLENBQXhCO2VBZWVuRCxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHtBdmF0YXJ9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge25vb3B9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuY2xhc3MgQXZhdGFyR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5hZGROZXdNZW1iZXIgPSB0aGlzLmFkZE5ld01lbWJlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub3BlbkF2YXRhciA9IHRoaXMub3BlbkF2YXRhci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW5lZEF2YXRhcjogLTFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkF2YXRhcihpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZEF2YXRhcjogaW5kZXh9KVxyXG4gICAgfVxyXG5cclxuICAgIGFkZE5ld01lbWJlcihldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQWRkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7c2l6ZSwgbWF4LCBjYW5BZGQsIGNsaWNrYWJsZSwgbWFuYWdlT3BlbmVkLCBtZW1iZXJzLCBjYW5SZW1vdmUsIG9uUmVtb3ZlLCBjdXN0b21JY29ufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgaGFzQWRkaXRpb25hbE1lbWJlcnMgPSBtZW1iZXJzLmxlbmd0aCA+IG1heCArIDE7XHJcbiAgICAgICAgY29uc3QgbWF4Vmlld2VycyA9IGhhc0FkZGl0aW9uYWxNZW1iZXJzID8gbWF4IDogbWVtYmVycy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbE1lbWJlcnMgPSBtZW1iZXJzLmxlbmd0aCAtIG1heDtcclxuXHJcbiAgICAgICAgY29uc3Qgdmlld2VycyA9IG1lbWJlcnMuc2xpY2UoMCwgbWF4Vmlld2VycykucmV2ZXJzZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMucHJvcHMuaW5uZXJSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3dmLWF2YXRhci1jb250YWluZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtgLS0ke3NpemV9YF06IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhbkFkZCAmJiA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhci1tdWx0aXBsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGQtbmV3LW1lbWJlclwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZE5ld01lbWJlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkZGl0aW9uYWwtYXZhdGFyXCI+e1N0cmluZy5mcm9tQ2hhckNvZGUoNDMpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtoYXNBZGRpdGlvbmFsTWVtYmVycyAmJiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyLW11bHRpcGxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkaXRpb25hbC1tZW1iZXJzXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXN0b21JY29uID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e2N1c3RvbUljb259IHNpemU9e3NpemV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkZGl0aW9uYWwtYXZhdGFyXCI+e1N0cmluZy5mcm9tQ2hhckNvZGUoNDMpfXthZGRpdGlvbmFsTWVtYmVyc308L3A+IH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt2aWV3ZXJzLm1hcCgodmlld2VyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXggKyB2aWV3ZXIubmFtZS5yZXBsYWNlKFwiXCIsIFwiX1wiKX0gb25DbGljaz17dGhpcy5vcGVuQXZhdGFyLmJpbmQodGhpcywgaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dmlld2VyLmlkIHx8IGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e3NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuUmVtb3ZlPXtjYW5SZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmU9e29uUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcj17dmlld2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZU9wZW5lZD17bWFuYWdlT3BlbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGU/Lm9wZW5lZEF2YXRhciA9PT0gaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkF2YXRhckdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgIG1heDogNSxcclxuICAgIHNpemU6IFwieHNcIixcclxuICAgIG1lbWJlcnM6IFtdLFxyXG4gICAgY2FuUmVtb3ZlOiB0cnVlLFxyXG4gICAgY2FuQWRkOiB0cnVlLFxyXG4gICAgb25BZGQ6IG5vb3AsXHJcbiAgICBvblJlbW92ZTogbm9vcCxcclxuICAgIG9uQ2xpY2s6IG5vb3AsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IGZhbHNlLFxyXG4gICAgaW5uZXJSZWY6IFJlYWN0LmNyZWF0ZVJlZigpLFxyXG4gICAgY3VzdG9tSWNvbjogXCJcIlxyXG59XHJcblxyXG5BdmF0YXJHcm91cC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGlja2FibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcInhzXCIsIFwibWRcIiwgXCJsZ1wiXSksXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWVtYmVyczogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgY2FuUmVtb3ZlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY2FuQWRkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGN1c3RvbUljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkFkZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBpbm5lclJlZjogUHJvcFR5cGVzLm9iamVjdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdmF0YXJHcm91cCJdfQ==