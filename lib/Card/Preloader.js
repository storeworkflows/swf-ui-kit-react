"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("./constants");

var React = _interopRequireWildcard(require("react"));

var _Preloader = _interopRequireDefault(require("../Preloader/Preloader"));

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Preloader["default"], {
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
        width: _constants.GLOBAL_CONSTANTS.IS_MOBILE ? "280px" : "100%",
        flexDirectionGeneral: "row",
        blur: "3rem"
      });
    }
  }]);

  return CardPreloader;
}(React.Component);

var _default = CardPreloader;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkL1ByZWxvYWRlci5qcyJdLCJuYW1lcyI6WyJDYXJkUHJlbG9hZGVyIiwicHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsInJlcGVhdCIsInN0eWxlcyIsIm1hcmdpbkxlZnQiLCJtaW5XaWR0aCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsIm1hcmdpblRvcCIsIkdMT0JBTF9DT05TVEFOVFMiLCJJU19NT0JJTEUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7OztBQUNMLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1pBLEtBRFk7QUFFbEI7Ozs7V0FFRCxrQkFBUztBQUNSLDBCQUNDLHFCQUFDLHFCQUFEO0FBQ0MsUUFBQSxLQUFLLEVBQUUsQ0FEUjtBQUVDLFFBQUEsS0FBSyxFQUFFLENBQ047QUFDQ0MsVUFBQUEsS0FBSyxFQUFFLE1BRFI7QUFDZ0JDLFVBQUFBLE1BQU0sRUFBRSxRQUR4QjtBQUNrQ0MsVUFBQUEsTUFBTSxFQUFFLENBRDFDO0FBQzZDQyxVQUFBQSxNQUFNLEVBQUUsQ0FDbkQ7QUFBQ0gsWUFBQUEsS0FBSyxFQUFFLFNBQVI7QUFBbUJDLFlBQUFBLE1BQU0sRUFBRTtBQUEzQixXQURtRCxFQUVuRDtBQUFDRCxZQUFBQSxLQUFLLEVBQUUsUUFBUjtBQUFrQkMsWUFBQUEsTUFBTSxFQUFFLFFBQTFCO0FBQW9DRyxZQUFBQSxVQUFVLEVBQUU7QUFBaEQsV0FGbUQsRUFHbkQ7QUFBQ0osWUFBQUEsS0FBSyxFQUFFLFFBQVI7QUFBa0JDLFlBQUFBLE1BQU0sRUFBRSxRQUExQjtBQUFvQ0ksWUFBQUEsUUFBUSxFQUFFLFFBQTlDO0FBQXdEQyxZQUFBQSxZQUFZLEVBQUU7QUFBdEUsV0FIbUQ7QUFEckQsU0FETSxFQU9IO0FBQ0ZOLFVBQUFBLEtBQUssRUFBRSxLQURMO0FBQ1lDLFVBQUFBLE1BQU0sRUFBRSxRQURwQjtBQUM4QkMsVUFBQUEsTUFBTSxFQUFFO0FBRHRDLFNBUEcsRUFTSDtBQUNGRixVQUFBQSxLQUFLLEVBQUUsS0FETDtBQUNZQyxVQUFBQSxNQUFNLEVBQUUsUUFEcEI7QUFDOEJDLFVBQUFBLE1BQU0sRUFBRSxDQUR0QztBQUN5Q0MsVUFBQUEsTUFBTSxFQUFFLENBQ2xEO0FBQUNILFlBQUFBLEtBQUssRUFBRSxRQUFSO0FBQWtCQyxZQUFBQSxNQUFNLEVBQUUsUUFBMUI7QUFBb0NLLFlBQUFBLFlBQVksRUFBRTtBQUFsRCxXQURrRCxFQUVsRDtBQUFDTixZQUFBQSxLQUFLLEVBQUUsTUFBUjtBQUFnQk8sWUFBQUEsTUFBTSxFQUFFO0FBQXhCLFdBRmtEO0FBRGpELFNBVEcsRUFjSDtBQUNGUCxVQUFBQSxLQUFLLEVBQUUsTUFETDtBQUNhQyxVQUFBQSxNQUFNLEVBQUUsUUFEckI7QUFDK0JDLFVBQUFBLE1BQU0sRUFBRSxDQUR2QztBQUMwQ0MsVUFBQUEsTUFBTSxFQUFFLENBQ25EO0FBQUNJLFlBQUFBLE1BQU0sRUFBRTtBQUFULFdBRG1ELEVBRW5EO0FBQUNBLFlBQUFBLE1BQU0sRUFBRTtBQUFULFdBRm1EO0FBRGxELFNBZEcsRUFtQkg7QUFDRlAsVUFBQUEsS0FBSyxFQUFFLE1BREw7QUFDYUMsVUFBQUEsTUFBTSxFQUFFLE1BRHJCO0FBQzZCQyxVQUFBQSxNQUFNLEVBQUUsQ0FEckM7QUFDd0NDLFVBQUFBLE1BQU0sRUFBRSxDQUNqRDtBQUFDSCxZQUFBQSxLQUFLLEVBQUUsTUFBUjtBQUFnQkMsWUFBQUEsTUFBTSxFQUFFLE1BQXhCO0FBQWdDSyxZQUFBQSxZQUFZLEVBQUU7QUFBOUMsV0FEaUQsRUFFakQ7QUFBQ04sWUFBQUEsS0FBSyxFQUFFLE1BQVI7QUFBZ0JDLFlBQUFBLE1BQU0sRUFBRSxRQUF4QjtBQUFrQ08sWUFBQUEsU0FBUyxFQUFFO0FBQTdDLFdBRmlEO0FBRGhELFNBbkJHLENBRlI7QUE0QkMsUUFBQSxNQUFNLEVBQUMsT0E1QlI7QUE2QkMsUUFBQSxLQUFLLEVBQUVDLDRCQUFpQkMsU0FBakIsR0FBNkIsT0FBN0IsR0FBdUMsTUE3Qi9DO0FBOEJDLFFBQUEsb0JBQW9CLEVBQUMsS0E5QnRCO0FBK0JDLFFBQUEsSUFBSSxFQUFDO0FBL0JOLFFBREQ7QUFtQ0E7Ozs7RUF6QzBCQyxLQUFLLENBQUNDLFM7O2VBNENuQmQsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R0xPQkFMX0NPTlNUQU5UU30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gXCIuLi9QcmVsb2FkZXIvUHJlbG9hZGVyXCI7XHJcblxyXG5jbGFzcyBDYXJkUHJlbG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFByZWxvYWRlclxyXG5cdFx0XHRcdGNvdW50PXsxfVxyXG5cdFx0XHRcdGl0ZW1zPXtbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjAuOHJlbVwiLCByZXBlYXQ6IDMsIHN0eWxlczogW1xyXG5cdFx0XHRcdFx0XHRcdHt3aWR0aDogXCIzLjc1cmVtXCIsIGhlaWdodDogXCIxLjJyZW1cIn0sXHJcblx0XHRcdFx0XHRcdFx0e3dpZHRoOiBcIjcuNXJlbVwiLCBoZWlnaHQ6IFwiMS4ycmVtXCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wifSxcclxuXHRcdFx0XHRcdFx0XHR7d2lkdGg6IFwiMS4ycmVtXCIsIGhlaWdodDogXCIxLjJyZW1cIiwgbWluV2lkdGg6IFwiMS4ycmVtXCIsIGJvcmRlclJhZGl1czogXCIwLjNyZW1cIn1cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogXCI3MCVcIiwgaGVpZ2h0OiBcIjEuN3JlbVwiLCByZXBlYXQ6IDFcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IFwiOTAlXCIsIGhlaWdodDogXCIwLjhyZW1cIiwgcmVwZWF0OiAyLCBzdHlsZXM6IFtcclxuXHRcdFx0XHRcdFx0XHR7d2lkdGg6IFwiMS4xcmVtXCIsIGhlaWdodDogXCIxLjFyZW1cIiwgYm9yZGVyUmFkaXVzOiBcIjUwJVwifSxcclxuXHRcdFx0XHRcdFx0XHR7d2lkdGg6IFwiM3JlbVwiLCBtYXJnaW46IFwiNnB4IDAgMCAwXCJ9XHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IFwiNHJlbVwiLCBoZWlnaHQ6IFwiMC44cmVtXCIsIHJlcGVhdDogMiwgc3R5bGVzOiBbXHJcblx0XHRcdFx0XHRcdFx0e21hcmdpbjogXCIycHhcIn0sXHJcblx0XHRcdFx0XHRcdFx0e21hcmdpbjogXCIycHhcIn0sXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMnJlbVwiLCByZXBlYXQ6IDIsIHN0eWxlczogW1xyXG5cdFx0XHRcdFx0XHRcdHt3aWR0aDogXCIycmVtXCIsIGhlaWdodDogXCIycmVtXCIsIGJvcmRlclJhZGl1czogXCI1MCVcIn0sXHJcblx0XHRcdFx0XHRcdFx0e3dpZHRoOiBcIjdyZW1cIiwgaGVpZ2h0OiBcIjEuMnJlbVwiLCBtYXJnaW5Ub3A6IFwiMTBweFwifSxcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdfVxyXG5cdFx0XHRcdGhlaWdodD1cIjExcmVtXCJcclxuXHRcdFx0XHR3aWR0aD17R0xPQkFMX0NPTlNUQU5UUy5JU19NT0JJTEUgPyBcIjI4MHB4XCIgOiBcIjEwMCVcIn1cclxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uR2VuZXJhbD1cInJvd1wiXHJcblx0XHRcdFx0Ymx1cj1cIjNyZW1cIlxyXG5cdFx0XHQvPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByZWxvYWRlciJdfQ==