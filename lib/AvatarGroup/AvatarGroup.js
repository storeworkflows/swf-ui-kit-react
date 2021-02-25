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
          onRemove = _this$props.onRemove;
      var hasAdditionalMembers = members.length > max;
      var maxViewers = hasAdditionalMembers ? max : members.length;
      var additionalMembers = members.length - max;
      var viewers = members.slice(0, maxViewers).reverse();
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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
                id: index,
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
  manageOpened: false
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
  onRemove: _propTypes["default"].func
};
var _default = AvatarGroup;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXJHcm91cC9BdmF0YXJHcm91cC5qcyJdLCJuYW1lcyI6WyJBdmF0YXJHcm91cCIsInByb3BzIiwiYWRkTmV3TWVtYmVyIiwiYmluZCIsIm9wZW5BdmF0YXIiLCJzdGF0ZSIsIm9wZW5lZEF2YXRhciIsImluZGV4Iiwic2V0U3RhdGUiLCJldmVudCIsImNsaWNrYWJsZSIsIm9uQWRkIiwic2l6ZSIsIm1heCIsImNhbkFkZCIsIm1hbmFnZU9wZW5lZCIsIm1lbWJlcnMiLCJjYW5SZW1vdmUiLCJvblJlbW92ZSIsImhhc0FkZGl0aW9uYWxNZW1iZXJzIiwibGVuZ3RoIiwibWF4Vmlld2VycyIsImFkZGl0aW9uYWxNZW1iZXJzIiwidmlld2VycyIsInNsaWNlIiwicmV2ZXJzZSIsInN0eWxlcyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1hcCIsInZpZXdlciIsIm5hbWUiLCJyZXBsYWNlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJub29wIiwib25DbGljayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJudW1iZXIiLCJvbmVPZiIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7Ozs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsK0JBQXBCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRCxJQUFoQiwrQkFBbEI7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsWUFBWSxFQUFFLENBQUM7QUFETixLQUFiO0FBSmU7QUFPbEI7Ozs7V0FFRCxvQkFBV0MsS0FBWCxFQUFrQjtBQUNk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LEtBQUssQ0FBQ0MsUzs7QUEyRWhDbEMsV0FBVyxDQUFDbUMsWUFBWixHQUEyQjtBQUN2QnpCLEVBQUFBLFNBQVMsRUFBRSxJQURZO0FBRXZCRyxFQUFBQSxHQUFHLEVBQUUsQ0FGa0I7QUFHdkJELEVBQUFBLElBQUksRUFBRSxJQUhpQjtBQUl2QkksRUFBQUEsT0FBTyxFQUFFLEVBSmM7QUFLdkJDLEVBQUFBLFNBQVMsRUFBRSxJQUxZO0FBTXZCSCxFQUFBQSxNQUFNLEVBQUUsSUFOZTtBQU92QkgsRUFBQUEsS0FBSyxFQUFFeUIsV0FQZ0I7QUFRdkJsQixFQUFBQSxRQUFRLEVBQUVrQixXQVJhO0FBU3ZCQyxFQUFBQSxPQUFPLEVBQUVELFdBVGM7QUFVdkJyQixFQUFBQSxZQUFZLEVBQUU7QUFWUyxDQUEzQjtBQWFBZixXQUFXLENBQUNzQyxTQUFaLEdBQXdCO0FBQ3BCNUIsRUFBQUEsU0FBUyxFQUFFNkIsc0JBQVVDLElBREQ7QUFFcEIzQixFQUFBQSxHQUFHLEVBQUUwQixzQkFBVUUsTUFGSztBQUdwQjdCLEVBQUFBLElBQUksRUFBRTJCLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBQWhCLENBSGM7QUFJcEIzQixFQUFBQSxZQUFZLEVBQUV3QixzQkFBVUMsSUFKSjtBQUtwQnhCLEVBQUFBLE9BQU8sRUFBRXVCLHNCQUFVSSxLQUxDO0FBTXBCMUIsRUFBQUEsU0FBUyxFQUFFc0Isc0JBQVVDLElBTkQ7QUFPcEJILEVBQUFBLE9BQU8sRUFBRUUsc0JBQVVLLElBUEM7QUFRcEI5QixFQUFBQSxNQUFNLEVBQUV5QixzQkFBVUMsSUFSRTtBQVNwQjdCLEVBQUFBLEtBQUssRUFBRTRCLHNCQUFVSyxJQVRHO0FBVXBCMUIsRUFBQUEsUUFBUSxFQUFFcUIsc0JBQVVLO0FBVkEsQ0FBeEI7ZUFhZTVDLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQge0F2YXRhcn0gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmNsYXNzIEF2YXRhckdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuYWRkTmV3TWVtYmVyID0gdGhpcy5hZGROZXdNZW1iZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9wZW5BdmF0YXIgPSB0aGlzLm9wZW5BdmF0YXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBvcGVuZWRBdmF0YXI6IC0xXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5BdmF0YXIoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWRBdmF0YXI6IGluZGV4fSlcclxuICAgIH1cclxuXHJcbiAgICBhZGROZXdNZW1iZXIoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGlja2FibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFkZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3NpemUsIG1heCwgY2FuQWRkLCBjbGlja2FibGUsIG1hbmFnZU9wZW5lZCwgbWVtYmVycywgY2FuUmVtb3ZlLCBvblJlbW92ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGhhc0FkZGl0aW9uYWxNZW1iZXJzID0gbWVtYmVycy5sZW5ndGggPiBtYXg7XHJcbiAgICAgICAgY29uc3QgbWF4Vmlld2VycyA9IGhhc0FkZGl0aW9uYWxNZW1iZXJzID8gbWF4IDogbWVtYmVycy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbE1lbWJlcnMgPSBtZW1iZXJzLmxlbmd0aCAtIG1heDtcclxuXHJcbiAgICAgICAgY29uc3Qgdmlld2VycyA9IG1lbWJlcnMuc2xpY2UoMCwgbWF4Vmlld2VycykucmV2ZXJzZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXItY29udGFpbmVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgLS0ke3NpemV9YF06IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5BZGQgJiYgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXItbXVsdGlwbGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkLW5ldy1tZW1iZXJcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGROZXdNZW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhZGRpdGlvbmFsLWF2YXRhclwiPntTdHJpbmcuZnJvbUNoYXJDb2RlKDQzKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7aGFzQWRkaXRpb25hbE1lbWJlcnMgJiYgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhci1tdWx0aXBsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFkZGl0aW9uYWwtbWVtYmVyc1wiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhZGRpdGlvbmFsLWF2YXRhclwiPntTdHJpbmcuZnJvbUNoYXJDb2RlKDQzKX17YWRkaXRpb25hbE1lbWJlcnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3ZpZXdlcnMubWFwKCh2aWV3ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleCArIHZpZXdlci5uYW1lLnJlcGxhY2UoXCJcIiwgXCJfXCIpfSBvbkNsaWNrPXt0aGlzLm9wZW5BdmF0YXIuYmluZCh0aGlzLCBpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhblJlbW92ZT17Y2FuUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXtvblJlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXI9e3ZpZXdlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VPcGVuZWQ9e21hbmFnZU9wZW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlPy5vcGVuZWRBdmF0YXIgPT09IGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5BdmF0YXJHcm91cC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICBtYXg6IDUsXHJcbiAgICBzaXplOiBcInhzXCIsXHJcbiAgICBtZW1iZXJzOiBbXSxcclxuICAgIGNhblJlbW92ZTogdHJ1ZSxcclxuICAgIGNhbkFkZDogdHJ1ZSxcclxuICAgIG9uQWRkOiBub29wLFxyXG4gICAgb25SZW1vdmU6IG5vb3AsXHJcbiAgICBvbkNsaWNrOiBub29wLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBmYWxzZVxyXG59XHJcblxyXG5BdmF0YXJHcm91cC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGlja2FibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcInhzXCIsIFwibWRcIiwgXCJsZ1wiXSksXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWVtYmVyczogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgY2FuUmVtb3ZlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY2FuQWRkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG9uQWRkOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyR3JvdXAiXX0=