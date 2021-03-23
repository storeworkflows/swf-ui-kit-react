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

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
      var viewers = members.slice(0, maxViewers).reverse().filter(function (viewer) {
        return viewer.name;
      });
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
              "add-new-member": true,
              "additional-avatar": true
            }),
            onClick: this.addNewMember,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXJHcm91cC9BdmF0YXJHcm91cC5qcyJdLCJuYW1lcyI6WyJBdmF0YXJHcm91cCIsInByb3BzIiwiYWRkTmV3TWVtYmVyIiwiYmluZCIsIm9wZW5BdmF0YXIiLCJzdGF0ZSIsIm9wZW5lZEF2YXRhciIsImluZGV4Iiwic2V0U3RhdGUiLCJldmVudCIsImNsaWNrYWJsZSIsIm9uQWRkIiwic2l6ZSIsIm1heCIsImNhbkFkZCIsIm1hbmFnZU9wZW5lZCIsIm1lbWJlcnMiLCJjYW5SZW1vdmUiLCJvblJlbW92ZSIsImN1c3RvbUljb24iLCJoYXNBZGRpdGlvbmFsTWVtYmVycyIsImxlbmd0aCIsIm1heFZpZXdlcnMiLCJhZGRpdGlvbmFsTWVtYmVycyIsInZpZXdlcnMiLCJzbGljZSIsInJldmVyc2UiLCJmaWx0ZXIiLCJ2aWV3ZXIiLCJuYW1lIiwiZWxtIiwiaW5uZXJSZWYiLCJjdXJyZW50IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWFwIiwiaWQiLCJyZXBsYWNlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJub29wIiwib25DbGljayIsImNyZWF0ZVJlZiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJudW1iZXIiLCJvbmVPZiIsImFycmF5IiwiZnVuYyIsInN0cmluZyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7Ozs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsK0JBQXBCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRCxJQUFoQiwrQkFBbEI7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFD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QUFBLFlBQVksRUFBRThCLHNCQUFVQyxJQUpKO0FBS3BCOUIsRUFBQUEsT0FBTyxFQUFFNkIsc0JBQVVJLEtBTEM7QUFNcEJoQyxFQUFBQSxTQUFTLEVBQUU0QixzQkFBVUMsSUFORDtBQU9wQkosRUFBQUEsT0FBTyxFQUFFRyxzQkFBVUssSUFQQztBQVFwQnBDLEVBQUFBLE1BQU0sRUFBRStCLHNCQUFVQyxJQVJFO0FBU3BCM0IsRUFBQUEsVUFBVSxFQUFFMEIsc0JBQVVNLE1BVEY7QUFVcEJ4QyxFQUFBQSxLQUFLLEVBQUVrQyxzQkFBVUssSUFWRztBQVdwQmhDLEVBQUFBLFFBQVEsRUFBRTJCLHNCQUFVSyxJQVhBO0FBWXBCbkIsRUFBQUEsUUFBUSxFQUFFYyxzQkFBVU87QUFaQSxDQUF4QjtlQWVlcEQsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7QXZhdGFyfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5cclxuY2xhc3MgQXZhdGFyR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5hZGROZXdNZW1iZXIgPSB0aGlzLmFkZE5ld01lbWJlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub3BlbkF2YXRhciA9IHRoaXMub3BlbkF2YXRhci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW5lZEF2YXRhcjogLTFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkF2YXRhcihpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZEF2YXRhcjogaW5kZXh9KVxyXG4gICAgfVxyXG5cclxuICAgIGFkZE5ld01lbWJlcihldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQWRkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7c2l6ZSwgbWF4LCBjYW5BZGQsIGNsaWNrYWJsZSwgbWFuYWdlT3BlbmVkLCBtZW1iZXJzLCBjYW5SZW1vdmUsIG9uUmVtb3ZlLCBjdXN0b21JY29ufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgaGFzQWRkaXRpb25hbE1lbWJlcnMgPSBtZW1iZXJzLmxlbmd0aCA+IG1heCArIDE7XHJcbiAgICAgICAgY29uc3QgbWF4Vmlld2VycyA9IGhhc0FkZGl0aW9uYWxNZW1iZXJzID8gbWF4IDogbWVtYmVycy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbE1lbWJlcnMgPSBtZW1iZXJzLmxlbmd0aCAtIG1heDtcclxuXHJcbiAgICAgICAgY29uc3Qgdmlld2VycyA9IG1lbWJlcnMuc2xpY2UoMCwgbWF4Vmlld2VycykucmV2ZXJzZSgpLmZpbHRlcih2aWV3ZXIgPT4gdmlld2VyLm5hbWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMucHJvcHMuaW5uZXJSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3dmLWF2YXRhci1jb250YWluZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtgLS0ke3NpemV9YF06IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhbkFkZCAmJiA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhci1tdWx0aXBsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGQtbmV3LW1lbWJlclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRpdGlvbmFsLWF2YXRhclwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZE5ld01lbWJlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e2N1c3RvbUljb24gfHwgXCJwZXJzb24tcGx1c1wifSBzaXplPXtzaXplfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7aGFzQWRkaXRpb25hbE1lbWJlcnMgJiYgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhci1tdWx0aXBsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFkZGl0aW9uYWwtbWVtYmVyc1wiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhZGRpdGlvbmFsLWF2YXRhclwiPntTdHJpbmcuZnJvbUNoYXJDb2RlKDQzKX17YWRkaXRpb25hbE1lbWJlcnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3ZpZXdlcnMubWFwKCh2aWV3ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleCArIHZpZXdlci5uYW1lLnJlcGxhY2UoXCJcIiwgXCJfXCIpfSBvbkNsaWNrPXt0aGlzLm9wZW5BdmF0YXIuYmluZCh0aGlzLCBpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt2aWV3ZXIuaWQgfHwgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5SZW1vdmU9e2NhblJlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZT17b25SZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyPXt2aWV3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlT3BlbmVkPXttYW5hZ2VPcGVuZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZT8ub3BlbmVkQXZhdGFyID09PSBpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuQXZhdGFyR3JvdXAuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgbWF4OiA1LFxyXG4gICAgc2l6ZTogXCJ4c1wiLFxyXG4gICAgbWVtYmVyczogW10sXHJcbiAgICBjYW5SZW1vdmU6IHRydWUsXHJcbiAgICBjYW5BZGQ6IHRydWUsXHJcbiAgICBvbkFkZDogbm9vcCxcclxuICAgIG9uUmVtb3ZlOiBub29wLFxyXG4gICAgb25DbGljazogbm9vcCxcclxuICAgIG1hbmFnZU9wZW5lZDogZmFsc2UsXHJcbiAgICBpbm5lclJlZjogUmVhY3QuY3JlYXRlUmVmKCksXHJcbiAgICBjdXN0b21JY29uOiBcIlwiXHJcbn1cclxuXHJcbkF2YXRhckdyb3VwLnByb3BUeXBlcyA9IHtcclxuICAgIGNsaWNrYWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYXg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wieHNcIiwgXCJtZFwiLCBcImxnXCJdKSxcclxuICAgIG1hbmFnZU9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtZW1iZXJzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICBjYW5SZW1vdmU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjYW5BZGQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY3VzdG9tSWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQWRkOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGlubmVyUmVmOiBQcm9wVHlwZXMub2JqZWN0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2YXRhckdyb3VwXHJcbiJdfQ==