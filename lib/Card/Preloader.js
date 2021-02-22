"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("./constants");

var React = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

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

var CardPreloader = /*#__PURE__*/function (_React$Component) {
  _inherits(CardPreloader, _React$Component);

  var _super = _createSuper(CardPreloader);

  function CardPreloader(props) {
    _classCallCheck(this, CardPreloader);

    return _super.call(this, props);
  }

  _createClass(CardPreloader, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("swf-preloader", {
        count: 1,
        items: [{
          width: "100%",
          height: "0.8rem",
          repeat: 3,
          styles: [{
            width: "3.75rem",
            height: "1.2rem"
          }, {
            width: "7.5rem",
            height: "1.2rem",
            marginLeft: "auto"
          }, {
            width: "1.2rem",
            height: "1.2rem",
            minWidth: "1.2rem",
            borderRadius: "0.3rem"
          }]
        }, {
          width: "70%",
          height: "1.7rem",
          repeat: 1
        }, {
          width: "90%",
          height: "0.8rem",
          repeat: 2,
          styles: [{
            width: "1.1rem",
            height: "1.1rem",
            borderRadius: "50%"
          }, {
            width: "3rem",
            margin: "6px 0 0 0"
          }]
        }, {
          width: "4rem",
          height: "0.8rem",
          repeat: 2,
          styles: [{
            margin: "2px"
          }, {
            margin: "2px"
          }]
        }, {
          width: "100%",
          height: "2rem",
          repeat: 2,
          styles: [{
            width: "2rem",
            height: "2rem",
            borderRadius: "50%"
          }, {
            width: "7rem",
            height: "1.2rem",
            marginTop: "10px"
          }]
        }],
        height: "11rem",
        width: _constants.GLOBAL_CONSTANTS.IS_MOBILE ? "280px" : "400px",
        flexDirectionGeneral: "row",
        blur: "3rem"
      });
    }
  }]);

  return CardPreloader;
}(React.Component);

var _default = CardPreloader;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkL1ByZWxvYWRlci5qcyJdLCJuYW1lcyI6WyJDYXJkUHJlbG9hZGVyIiwicHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsInJlcGVhdCIsInN0eWxlcyIsIm1hcmdpbkxlZnQiLCJtaW5XaWR0aCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsIm1hcmdpblRvcCIsIkdMT0JBTF9DT05TVEFOVFMiLCJJU19NT0JJTEUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsYTs7Ozs7QUFDTCx5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNaQSxLQURZO0FBRWxCOzs7O1dBRUQsa0JBQVM7QUFDUiwwQkFDQztBQUNDLFFBQUEsS0FBSyxFQUFFLENBRFI7QUFFQyxRQUFBLEtBQUssRUFBRSxDQUNOO0FBQ0NDLFVBQUFBLEtBQUssRUFBRSxNQURSO0FBQ2dCQyxVQUFBQSxNQUFNLEVBQUUsUUFEeEI7QUFDa0NDLFVBQUFBLE1BQU0sRUFBRSxDQUQxQztBQUM2Q0MsVUFBQUEsTUFBTSxFQUFFLENBQ25EO0FBQUNILFlBQUFBLEtBQUssRUFBRSxTQUFSO0FBQW1CQyxZQUFBQSxNQUFNLEVBQUU7QUFBM0IsV0FEbUQsRUFFbkQ7QUFBQ0QsWUFBQUEsS0FBSyxFQUFFLFFBQVI7QUFBa0JDLFlBQUFBLE1BQU0sRUFBRSxRQUExQjtBQUFvQ0csWUFBQUEsVUFBVSxFQUFFO0FBQWhELFdBRm1ELEVBR25EO0FBQUNKLFlBQUFBLEtBQUssRUFBRSxRQUFSO0FBQWtCQyxZQUFBQSxNQUFNLEVBQUUsUUFBMUI7QUFBb0NJLFlBQUFBLFFBQVEsRUFBRSxRQUE5QztBQUF3REMsWUFBQUEsWUFBWSxFQUFFO0FBQXRFLFdBSG1EO0FBRHJELFNBRE0sRUFPSDtBQUNGTixVQUFBQSxLQUFLLEVBQUUsS0FETDtBQUNZQyxVQUFBQSxNQUFNLEVBQUUsUUFEcEI7QUFDOEJDLFVBQUFBLE1BQU0sRUFBRTtBQUR0QyxTQVBHLEVBU0g7QUFDRkYsVUFBQUEsS0FBSyxFQUFFLEtBREw7QUFDWUMsVUFBQUEsTUFBTSxFQUFFLFFBRHBCO0FBQzhCQyxVQUFBQSxNQUFNLEVBQUUsQ0FEdEM7QUFDeUNDLFVBQUFBLE1BQU0sRUFBRSxDQUNsRDtBQUFDSCxZQUFBQSxLQUFLLEVBQUUsUUFBUjtBQUFrQkMsWUFBQUEsTUFBTSxFQUFFLFFBQTFCO0FBQW9DSyxZQUFBQSxZQUFZLEVBQUU7QUFBbEQsV0FEa0QsRUFFbEQ7QUFBQ04sWUFBQUEsS0FBSyxFQUFFLE1BQVI7QUFBZ0JPLFlBQUFBLE1BQU0sRUFBRTtBQUF4QixXQUZrRDtBQURqRCxTQVRHLEVBY0g7QUFDRlAsVUFBQUEsS0FBSyxFQUFFLE1BREw7QUFDYUMsVUFBQUEsTUFBTSxFQUFFLFFBRHJCO0FBQytCQyxVQUFBQSxNQUFNLEVBQUUsQ0FEdkM7QUFDMENDLFVBQUFBLE1BQU0sRUFBRSxDQUNuRDtBQUFDSSxZQUFBQSxNQUFNLEVBQUU7QUFBVCxXQURtRCxFQUVuRDtBQUFDQSxZQUFBQSxNQUFNLEVBQUU7QUFBVCxXQUZtRDtBQURsRCxTQWRHLEVBbUJIO0FBQ0ZQLFVBQUFBLEtBQUssRUFBRSxNQURMO0FBQ2FDLFVBQUFBLE1BQU0sRUFBRSxNQURyQjtBQUM2QkMsVUFBQUEsTUFBTSxFQUFFLENBRHJDO0FBQ3dDQyxVQUFBQSxNQUFNLEVBQUUsQ0FDakQ7QUFBQ0gsWUFBQUEsS0FBSyxFQUFFLE1BQVI7QUFBZ0JDLFlBQUFBLE1BQU0sRUFBRSxNQUF4QjtBQUFnQ0ssWUFBQUEsWUFBWSxFQUFFO0FBQTlDLFdBRGlELEVBRWpEO0FBQUNOLFlBQUFBLEtBQUssRUFBRSxNQUFSO0FBQWdCQyxZQUFBQSxNQUFNLEVBQUUsUUFBeEI7QUFBa0NPLFlBQUFBLFNBQVMsRUFBRTtBQUE3QyxXQUZpRDtBQURoRCxTQW5CRyxDQUZSO0FBNEJDLFFBQUEsTUFBTSxFQUFDLE9BNUJSO0FBNkJDLFFBQUEsS0FBSyxFQUFFQyw0QkFBaUJDLFNBQWpCLEdBQTZCLE9BQTdCLEdBQXVDLE9BN0IvQztBQThCQyxRQUFBLG9CQUFvQixFQUFDLEtBOUJ0QjtBQStCQyxRQUFBLElBQUksRUFBQztBQS9CTixRQUREO0FBbUNBOzs7O0VBekMwQkMsS0FBSyxDQUFDQyxTOztlQTRDbkJkLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dMT0JBTF9DT05TVEFOVFN9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIENhcmRQcmVsb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHN3Zi1wcmVsb2FkZXJcblx0XHRcdFx0Y291bnQ9ezF9XG5cdFx0XHRcdGl0ZW1zPXtbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMC44cmVtXCIsIHJlcGVhdDogMywgc3R5bGVzOiBbXG5cdFx0XHRcdFx0XHRcdHt3aWR0aDogXCIzLjc1cmVtXCIsIGhlaWdodDogXCIxLjJyZW1cIn0sXG5cdFx0XHRcdFx0XHRcdHt3aWR0aDogXCI3LjVyZW1cIiwgaGVpZ2h0OiBcIjEuMnJlbVwiLCBtYXJnaW5MZWZ0OiBcImF1dG9cIn0sXG5cdFx0XHRcdFx0XHRcdHt3aWR0aDogXCIxLjJyZW1cIiwgaGVpZ2h0OiBcIjEuMnJlbVwiLCBtaW5XaWR0aDogXCIxLjJyZW1cIiwgYm9yZGVyUmFkaXVzOiBcIjAuM3JlbVwifVxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdHdpZHRoOiBcIjcwJVwiLCBoZWlnaHQ6IFwiMS43cmVtXCIsIHJlcGVhdDogMVxuXHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdHdpZHRoOiBcIjkwJVwiLCBoZWlnaHQ6IFwiMC44cmVtXCIsIHJlcGVhdDogMiwgc3R5bGVzOiBbXG5cdFx0XHRcdFx0XHRcdHt3aWR0aDogXCIxLjFyZW1cIiwgaGVpZ2h0OiBcIjEuMXJlbVwiLCBib3JkZXJSYWRpdXM6IFwiNTAlXCJ9LFxuXHRcdFx0XHRcdFx0XHR7d2lkdGg6IFwiM3JlbVwiLCBtYXJnaW46IFwiNnB4IDAgMCAwXCJ9XG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0d2lkdGg6IFwiNHJlbVwiLCBoZWlnaHQ6IFwiMC44cmVtXCIsIHJlcGVhdDogMiwgc3R5bGVzOiBbXG5cdFx0XHRcdFx0XHRcdHttYXJnaW46IFwiMnB4XCJ9LFxuXHRcdFx0XHRcdFx0XHR7bWFyZ2luOiBcIjJweFwifSxcblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIycmVtXCIsIHJlcGVhdDogMiwgc3R5bGVzOiBbXG5cdFx0XHRcdFx0XHRcdHt3aWR0aDogXCIycmVtXCIsIGhlaWdodDogXCIycmVtXCIsIGJvcmRlclJhZGl1czogXCI1MCVcIn0sXG5cdFx0XHRcdFx0XHRcdHt3aWR0aDogXCI3cmVtXCIsIGhlaWdodDogXCIxLjJyZW1cIiwgbWFyZ2luVG9wOiBcIjEwcHhcIn0sXG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XX1cblx0XHRcdFx0aGVpZ2h0PVwiMTFyZW1cIlxuXHRcdFx0XHR3aWR0aD17R0xPQkFMX0NPTlNUQU5UUy5JU19NT0JJTEUgPyBcIjI4MHB4XCIgOiBcIjQwMHB4XCJ9XG5cdFx0XHRcdGZsZXhEaXJlY3Rpb25HZW5lcmFsPVwicm93XCJcblx0XHRcdFx0Ymx1cj1cIjNyZW1cIlxuXHRcdFx0Lz5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByZWxvYWRlciJdfQ==