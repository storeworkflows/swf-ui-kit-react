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
      //console.log(...arguments)
      console.log(index);
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
          members = _this$props.members,
          canRemove = _this$props.canRemove,
          onRemove = _this$props.onRemove;
      var hasAdditionalMembers = members.length > max;
      var additionalMembers = max - members.length;
      var copyMembers = members.slice();
      var viewers = hasAdditionalMembers ? copyMembers.reverse() : copyMembers.slice(0, max).reverse();
      console.log({
        props: this.props,
        viewers: viewers
      });
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
                size: size,
                canRemove: canRemove,
                onDelete: onRemove,
                member: viewer,
                manageOpened: true,
                open: ((_this2$state = _this2.state) === null || _this2$state === void 0 ? void 0 : _this2$state.openedAvatar) === index
              }, index + viewer.name.replace("", "_"))
            });
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
  onAdd: function onAdd() {
    return void 0;
  },
  onRemove: function onRemove() {
    return void 0;
  }
};
AvatarGroup.propTypes = {
  clickable: _propTypes["default"].bool,
  max: _propTypes["default"].number,
  size: _propTypes["default"].oneOf(["xs", "md", "lg"]),
  members: _propTypes["default"].array,
  canRemove: _propTypes["default"].bool,
  canAdd: _propTypes["default"].bool,
  onAdd: _propTypes["default"].func,
  onRemove: _propTypes["default"].func
};
var _default = AvatarGroup;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXJHcm91cC9BdmF0YXJHcm91cC5qcyJdLCJuYW1lcyI6WyJBdmF0YXJHcm91cCIsInByb3BzIiwiYWRkTmV3TWVtYmVyIiwiYmluZCIsIm9wZW5BdmF0YXIiLCJzdGF0ZSIsIm9wZW5lZEF2YXRhciIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZXZlbnQiLCJjbGlja2FibGUiLCJvbkFkZCIsInNpemUiLCJtYXgiLCJjYW5BZGQiLCJtZW1iZXJzIiwiY2FuUmVtb3ZlIiwib25SZW1vdmUiLCJoYXNBZGRpdGlvbmFsTWVtYmVycyIsImxlbmd0aCIsImFkZGl0aW9uYWxNZW1iZXJzIiwiY29weU1lbWJlcnMiLCJzbGljZSIsInZpZXdlcnMiLCJyZXZlcnNlIiwic3R5bGVzIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWFwIiwidmlld2VyIiwibmFtZSIsInJlcGxhY2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJudW1iZXIiLCJvbmVPZiIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7Ozs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsK0JBQXBCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRCxJQUFoQiwrQkFBbEI7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsWUFBWSxFQUFFLENBQUM7QUFETixLQUFiO0FBSmU7QUFPbEI7Ozs7V0FFRCxvQkFBV0MsS0FBWCxFQUFrQjtBQUNkO0FBQ0FDLE1BQUFBLE9BQU8sQ0FB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QW9CLEVBQXBCLEVBQXdCLEdBQXhCLENBRGpCO0FBREosY0FEUztBQUFBLFdBQVosQ0F4Qkw7QUFBQSxVQUZKO0FBQUEsUUFESjtBQTRDSDs7OztFQTdFcUJDLEtBQUssQ0FBQ0MsUzs7QUFnRmhDbkMsV0FBVyxDQUFDb0MsWUFBWixHQUEyQjtBQUN2QnhCLEVBQUFBLFNBQVMsRUFBRSxJQURZO0FBRXZCRyxFQUFBQSxHQUFHLEVBQUUsQ0FGa0I7QUFHdkJELEVBQUFBLElBQUksRUFBRSxJQUhpQjtBQUl2QkcsRUFBQUEsT0FBTyxFQUFFLEVBSmM7QUFLdkJDLEVBQUFBLFNBQVMsRUFBRSxJQUxZO0FBTXZCRixFQUFBQSxNQUFNLEVBQUUsSUFOZTtBQU92QkgsRUFBQUEsS0FBSyxFQUFFO0FBQUEsV0FBTSxLQUFLLENBQVg7QUFBQSxHQVBnQjtBQVF2Qk0sRUFBQUEsUUFBUSxFQUFFO0FBQUEsV0FBTSxLQUFLLENBQVg7QUFBQTtBQVJhLENBQTNCO0FBV0FuQixXQUFXLENBQUNxQyxTQUFaLEdBQXdCO0FBQ3BCekIsRUFBQUEsU0FBUyxFQUFFMEIsc0JBQVVDLElBREQ7QUFFcEJ4QixFQUFBQSxHQUFHLEVBQUV1QixzQkFBVUUsTUFGSztBQUdwQjFCLEVBQUFBLElBQUksRUFBRXdCLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBQWhCLENBSGM7QUFJcEJ4QixFQUFBQSxPQUFPLEVBQUVxQixzQkFBVUksS0FKQztBQUtwQnhCLEVBQUFBLFNBQVMsRUFBRW9CLHNCQUFVQyxJQUxEO0FBTXBCdkIsRUFBQUEsTUFBTSxFQUFFc0Isc0JBQVVDLElBTkU7QUFPcEIxQixFQUFBQSxLQUFLLEVBQUV5QixzQkFBVUssSUFQRztBQVFwQnhCLEVBQUFBLFFBQVEsRUFBRW1CLHNCQUFVSztBQVJBLENBQXhCO2VBV2UzQyxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHtBdmF0YXJ9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG5jbGFzcyBBdmF0YXJHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmFkZE5ld01lbWJlciA9IHRoaXMuYWRkTmV3TWVtYmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3BlbkF2YXRhciA9IHRoaXMub3BlbkF2YXRhci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbmVkQXZhdGFyOiAtMVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3BlbkF2YXRhcihpbmRleCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKC4uLmFyZ3VtZW50cylcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZEF2YXRhcjogaW5kZXh9KVxuICAgIH1cblxuICAgIGFkZE5ld01lbWJlcihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGlja2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25BZGQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3NpemUsIG1heCwgY2FuQWRkLCBjbGlja2FibGUsIG1lbWJlcnMsIGNhblJlbW92ZSwgb25SZW1vdmV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgaGFzQWRkaXRpb25hbE1lbWJlcnMgPSBtZW1iZXJzLmxlbmd0aCA+IG1heDtcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbE1lbWJlcnMgPSBtYXggLSBtZW1iZXJzLmxlbmd0aDtcblxuICAgICAgICBjb25zdCBjb3B5TWVtYmVycyA9IG1lbWJlcnMuc2xpY2UoKTtcblxuICAgICAgICBjb25zdCB2aWV3ZXJzID0gaGFzQWRkaXRpb25hbE1lbWJlcnMgPyBjb3B5TWVtYmVycy5yZXZlcnNlKCkgOiBjb3B5TWVtYmVycy5zbGljZSgwLCBtYXgpLnJldmVyc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coe3Byb3BzOiB0aGlzLnByb3BzLCB2aWV3ZXJzfSlcblxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICBjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyLWNvbnRhaW5lclwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7c2l6ZX1gXTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjYW5BZGQgJiYgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhci1tdWx0aXBsZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkLW5ldy1tZW1iZXJcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZE5ld01lbWJlcn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWRkaXRpb25hbC1hdmF0YXJcIj57U3RyaW5nLmZyb21DaGFyQ29kZSg0Myl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG5cbiAgICAgICAgICAgICAgICAgICAge2hhc0FkZGl0aW9uYWxNZW1iZXJzICYmIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyLW11bHRpcGxlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFkZGl0aW9uYWwtbWVtYmVyc1wiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkZGl0aW9uYWwtYXZhdGFyXCI+e1N0cmluZy5mcm9tQ2hhckNvZGUoNDMpfXthZGRpdGlvbmFsTWVtYmVyc308L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cblxuICAgICAgICAgICAgICAgICAgICB7dmlld2Vycy5tYXAoKHZpZXdlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5vcGVuQXZhdGFyLmJpbmQodGhpcywgaW5kZXgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXggKyB2aWV3ZXIubmFtZS5yZXBsYWNlKFwiXCIsIFwiX1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuUmVtb3ZlPXtjYW5SZW1vdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXtvblJlbW92ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyPXt2aWV3ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZU9wZW5lZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZT8ub3BlbmVkQXZhdGFyID09PSBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5BdmF0YXJHcm91cC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG1heDogNSxcbiAgICBzaXplOiBcInhzXCIsXG4gICAgbWVtYmVyczogW10sXG4gICAgY2FuUmVtb3ZlOiB0cnVlLFxuICAgIGNhbkFkZDogdHJ1ZSxcbiAgICBvbkFkZDogKCkgPT4gdm9pZCAwLFxuICAgIG9uUmVtb3ZlOiAoKSA9PiB2b2lkIDAsXG59XG5cbkF2YXRhckdyb3VwLnByb3BUeXBlcyA9IHtcbiAgICBjbGlja2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG1heDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wieHNcIiwgXCJtZFwiLCBcImxnXCJdKSxcbiAgICBtZW1iZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgY2FuUmVtb3ZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjYW5BZGQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQWRkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF2YXRhckdyb3VwIl19