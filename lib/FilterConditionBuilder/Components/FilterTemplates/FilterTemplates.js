"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactDom = _interopRequireDefault(require("react-dom"));

var React = _interopRequireWildcard(require("react"));

var _index = require("../../../index");

var _PopoverContent = _interopRequireDefault(require("./PopoverContent/PopoverContent"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var FilterTemplates = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterTemplates, _React$Component);

  var _super = _createSuper(FilterTemplates);

  function FilterTemplates(props) {
    var _this;

    _classCallCheck(this, FilterTemplates);

    _this = _super.call(this, props);

    _this.managePopover = function () {
      _this.setState({
        popoverToogle: !_this.state.popoverToogle
      });
    };

    _this.findTarget = function (elem) {
      _this.setState({
        popoverTarget: elem
      });
    };

    _this.componentDidMount = function () {
      var myHeaders = new Headers();
      myHeaders.append("X-UserToken", window.g_ck); // myHeaders.append("Authorization", "Basic c3dmX2RldmVsb3Blcjpzd2ZfZGV2ZWxvcGVy")

      fetch("".concat(window.location.origin, "/api/now/table/sys_filter"), {
        method: "GET",
        headers: myHeaders
      }).then(function (res) {
        return res.json();
      }).then(function (jsonRes) {
        return _this.filterList = jsonRes.result;
      });
    };

    _this.state = {
      popoverToogle: false,
      popoverTarget: null,
      btnRef: null
    };
    return _this;
  }

  _createClass(FilterTemplates, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var btnStyles = {
        "text-color": "rgb(1,119,142)",
        "hover-text-color": "rgb(1,89,107)",
        "active-text-color": "rgb(1,60,71)"
      };
      var _this$state = this.state,
          popoverToogle = _this$state.popoverToogle,
          popoverTarget = _this$state.popoverTarget;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "popoverTarget",
          ref: this.findTarget,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
            label: "Filters",
            onClick: this.managePopover,
            ref: function ref(e) {
              return _this2.btnRef = e;
            },
            customStyle: btnStyles,
            variant: "tertiary"
          })
        }), popoverToogle && popoverTarget && /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Popover, {
          opened: popoverToogle,
          positionTarget: {
            current: popoverTarget
          },
          hideTail: false,
          positions: [{
            "target": "bottom-end",
            "content": "top-end"
          }],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Popover.Content, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PopoverContent["default"], {
              filterList: this.filterList
            })
          })
        })]
      });
    }
  }]);

  return FilterTemplates;
}(React.Component);

exports["default"] = FilterTemplates;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyVGVtcGxhdGVzL0ZpbHRlclRlbXBsYXRlcy5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJUZW1wbGF0ZXMiLCJwcm9wcyIsIm1hbmFnZVBvcG92ZXIiLCJzZXRTdGF0ZSIsInBvcG92ZXJUb29nbGUiLCJzdGF0ZSIsImZpbmRUYXJnZXQiLCJlbGVtIiwicG9wb3ZlclRhcmdldCIsImNvbXBvbmVudERpZE1vdW50IiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsIndpbmRvdyIsImdfY2siLCJmZXRjaCIsImxvY2F0aW9uIiwib3JpZ2luIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwianNvblJlcyIsImZpbHRlckxpc3QiLCJyZXN1bHQiLCJidG5SZWYiLCJidG5TdHlsZXMiLCJlIiwiY3VycmVudCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7OztBQUNqQiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBU25CQyxhQVRtQixHQVNILFlBQU07QUFDbEIsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLFFBQUFBLGFBQWEsRUFBRSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0Q7QUFBNUIsT0FBZDtBQUNILEtBWGtCOztBQUFBLFVBYW5CRSxVQWJtQixHQWFOLFVBQUNDLElBQUQsRUFBVTtBQUNuQixZQUFLSixRQUFMLENBQWM7QUFBQ0ssUUFBQUEsYUFBYSxFQUFFRDtBQUFoQixPQUFkO0FBQ0gsS0Fma0I7O0FBQUEsVUFpQm5CRSxpQkFqQm1CLEdBaUJDLFlBQU07QUFDdEIsVUFBTUMsU0FBUyxHQUFHLElBQUlDLE9BQUosRUFBbEI7QUFDQUQsTUFBQUEsU0FBUyxDQUFDRSxNQUFWLENBQWlCLGFBQWpCLEVBQWdDQyxNQUFNLENBQUNDLElBQXZDLEVBRnNCLENBR3RCOztBQUVBQyxNQUFBQSxLQUFLLFdBQUlGLE1BQU0sQ0FBQ0csUUFBUCxDQUFnQkMsTUFBcEIsZ0NBQXVEO0FBQ3hEQyxRQUFBQSxNQUFNLEVBQUUsS0FEZ0Q7QUFFeERDLFFBQUFBLE9BQU8sRUFBRVQ7QUFGK0MsT0FBdkQsQ0FBTCxDQUlDVSxJQUpELENBSU0sVUFBQUMsR0FBRztBQUFBLGVBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsT0FKVCxFQUtDRixJQUxELENBS00sVUFBQUcsT0FBTztBQUFBLGVBQUksTUFBS0MsVUFBTCxHQUFrQkQsT0FBTyxDQUFDRSxNQUE5QjtBQUFBLE9BTGI7QUFNSCxLQTVCa0I7O0FBRWYsVUFBS3BCLEtBQUwsR0FBYTtBQUNURCxNQUFBQSxhQUFhLEVBQUUsS0FETjtBQUVUSSxNQUFBQSxhQUFhLEVBQUUsSUFGTjtBQUdUa0IsTUFBQUEsTUFBTSxFQUFFO0FBSEMsS0FBYjtBQUZlO0FBT2xCOzs7O1dBeUJELGtCQUFTO0FBQUE7O0FBQ0wsVUFBTUMsU0FBUyxHQUFHO0FBQ2Qsc0JBQWMsZ0JBREE7QUFFZCw0QkFBb0IsZUFGTjtBQUdkLDZCQUFxQjtBQUhQLE9BQWxCO0FBREssd0JBT29DLEtBQUt0QixLQVB6QztBQUFBLFVBT0dELGFBUEgsZUFPR0EsYUFQSDtBQUFBLFVBT2tCSSxhQVBsQixlQU9rQkEsYUFQbEI7QUFTTCwwQkFDSTtBQUFBLGdDQUNJO0FBQUssVUFBQSxTQUFTLEVBQUMsZUFBZjtBQUErQixVQUFBLEdBQUcsRUFBRSxLQUFLRixVQUF6QztBQUFBLGlDQUNJLHFCQUFDLGFBQUQ7QUFBUSxZQUFBLEtBQUssRUFBQyxTQUFkO0FBQXdCLFlBQUEsT0FBTyxFQUFFLEtBQUtKLGFBQXRDO0FBQXFELFlBQUEsR0FBRyxFQUFFLGFBQUEwQixDQUFDO0FBQUEscUJBQUksTUFBSSxDQUFDRixNQUFMLEdBQWNFLENBQWxCO0FBQUEsYUFBM0Q7QUFBZ0YsWUFBQSxXQUFXLEVBQUVELFNBQTdGO0FBQXdHLFlBQUEsT0FBTyxFQUFDO0FBQWhIO0FBREosVUFESixFQUlLdkIsYUFBYSxJQUFJSSxhQUFqQixpQkFBa0MscUJBQUMsY0FBRDtBQUFTLFVBQUEsTUFBTSxFQUFFSixhQUFqQjtBQUFnQyxVQUFBLGNBQWMsRUFBRTtBQUFDeUIsWUFBQUEsT0FBTyxFQUFFckI7QUFBVixXQUFoRDtBQUEwRSxVQUFBLFFBQVEsRUFBRSxLQUFwRjtBQUEyRixVQUFBLFNBQVMsRUFBRSxDQUFDO0FBQUMsc0JBQVMsWUFBVjtBQUF1Qix1QkFBVTtBQUFqQyxXQUFELENBQXRHO0FBQUEsaUNBQy9CLHFCQUFDLGNBQUQsQ0FBUyxPQUFUO0FBQUEsbUNBQ0kscUJBQUMsMEJBQUQ7QUFBZ0IsY0FBQSxVQUFVLEVBQUUsS0FBS2dCO0FBQWpDO0FBREo7QUFEK0IsVUFKdkM7QUFBQSxRQURKO0FBWUg7Ozs7RUF0RHdDTSxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIFBvcG92ZXIgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjtcclxuaW1wb3J0IFBvcG92ZXJDb250ZW50IGZyb20gJy4vUG9wb3ZlckNvbnRlbnQvUG9wb3ZlckNvbnRlbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyVGVtcGxhdGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBvcG92ZXJUb29nbGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwb3BvdmVyVGFyZ2V0OiBudWxsLFxyXG4gICAgICAgICAgICBidG5SZWY6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1hbmFnZVBvcG92ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9wb3ZlclRvb2dsZTogIXRoaXMuc3RhdGUucG9wb3ZlclRvb2dsZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRUYXJnZXQgPSAoZWxlbSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BvcG92ZXJUYXJnZXQ6IGVsZW19KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgbXlIZWFkZXJzLmFwcGVuZChcIlgtVXNlclRva2VuXCIsIHdpbmRvdy5nX2NrKTtcclxuICAgICAgICAvLyBteUhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMzZG1YMlJsZG1Wc2IzQmxjanB6ZDJaZlpHVjJaV3h2Y0dWeVwiKVxyXG5cclxuICAgICAgICBmZXRjaChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGkvbm93L3RhYmxlL3N5c19maWx0ZXJgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihqc29uUmVzID0+IHRoaXMuZmlsdGVyTGlzdCA9IGpzb25SZXMucmVzdWx0KVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBidG5TdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIFwidGV4dC1jb2xvclwiOiBcInJnYigxLDExOSwxNDIpXCIsXHJcbiAgICAgICAgICAgIFwiaG92ZXItdGV4dC1jb2xvclwiOiBcInJnYigxLDg5LDEwNylcIixcclxuICAgICAgICAgICAgXCJhY3RpdmUtdGV4dC1jb2xvclwiOiBcInJnYigxLDYwLDcxKVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7IHBvcG92ZXJUb29nbGUsIHBvcG92ZXJUYXJnZXQgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wb3ZlclRhcmdldFwiIHJlZj17dGhpcy5maW5kVGFyZ2V0fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiRmlsdGVyc1wiIG9uQ2xpY2s9e3RoaXMubWFuYWdlUG9wb3Zlcn0gcmVmPXtlID0+IHRoaXMuYnRuUmVmID0gZX0gY3VzdG9tU3R5bGU9e2J0blN0eWxlc30gdmFyaWFudD1cInRlcnRpYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3BvcG92ZXJUb29nbGUgJiYgcG9wb3ZlclRhcmdldCAmJiA8UG9wb3ZlciBvcGVuZWQ9e3BvcG92ZXJUb29nbGV9IHBvc2l0aW9uVGFyZ2V0PXt7Y3VycmVudDogcG9wb3ZlclRhcmdldH19IGhpZGVUYWlsPXtmYWxzZX0gcG9zaXRpb25zPXtbe1widGFyZ2V0XCI6XCJib3R0b20tZW5kXCIsXCJjb250ZW50XCI6XCJ0b3AtZW5kXCJ9XX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJDb250ZW50IGZpbHRlckxpc3Q9e3RoaXMuZmlsdGVyTGlzdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgXHJcbiAgICB9XHJcbn0iXX0=