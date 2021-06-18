"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Preloader = _interopRequireDefault(require("./Preloader"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Containers/Preloader',
  component: _Preloader["default"],
  argTypes: {
    background: {
      control: {
        type: 'boolean'
      }
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Preloader["default"], _objectSpread({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
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
  width: "100%",
  flexDirectionGeneral: "row",
  blur: "3rem"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QcmVsb2FkZXIvcHJlbG9hZGVyLnN0b3JpZXMuanMiXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJQcmVsb2FkZXIiLCJhcmdUeXBlcyIsImJhY2tncm91bmQiLCJjb250cm9sIiwidHlwZSIsIlRlbXBsYXRlIiwiYXJncyIsIkRlZmF1bHQiLCJiaW5kIiwiY291bnQiLCJpdGVtcyIsIndpZHRoIiwiaGVpZ2h0IiwicmVwZWF0Iiwic3R5bGVzIiwibWFyZ2luTGVmdCIsIm1pbldpZHRoIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwibWFyZ2luVG9wIiwiZmxleERpcmVjdGlvbkdlbmVyYWwiLCJibHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7OztlQUVlO0FBQ1hBLEVBQUFBLEtBQUssRUFBRSxpQ0FESTtBQUVYQyxFQUFBQSxTQUFTLEVBQUVDLHFCQUZBO0FBR1hDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxVQUFVLEVBQUU7QUFDUkMsTUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFFBQUFBLElBQUksRUFBRTtBQUREO0FBREQ7QUFETjtBQUhDLEM7OztBQWFmLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQ7QUFBQSxzQkFBVSxxQkFBQyxxQkFBRCxvQkFBZUEsSUFBZixFQUFWO0FBQUEsQ0FBakI7O0FBRU8sSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWhCOztBQUNQRCxPQUFPLENBQUNELElBQVIsR0FBZTtBQUNYRyxFQUFBQSxLQUFLLEVBQUUsQ0FESTtBQUVYQyxFQUFBQSxLQUFLLEVBQUUsQ0FDQztBQUNJQyxJQUFBQSxLQUFLLEVBQUUsTUFEWDtBQUNtQkMsSUFBQUEsTUFBTSxFQUFFLFFBRDNCO0FBQ3FDQyxJQUFBQSxNQUFNLEVBQUUsQ0FEN0M7QUFDZ0RDLElBQUFBLE1BQU0sRUFBRSxDQUNoRDtBQUFDSCxNQUFBQSxLQUFLLEVBQUUsU0FBUjtBQUFtQkMsTUFBQUEsTUFBTSxFQUFFO0FBQTNCLEtBRGdELEVBRWhEO0FBQUNELE1BQUFBLEtBQUssRUFBRSxRQUFSO0FBQWtCQyxNQUFBQSxNQUFNLEVBQUUsUUFBMUI7QUFBb0NHLE1BQUFBLFVBQVUsRUFBRTtBQUFoRCxLQUZnRCxFQUdoRDtBQUFDSixNQUFBQSxLQUFLLEVBQUUsUUFBUjtBQUFrQkMsTUFBQUEsTUFBTSxFQUFFLFFBQTFCO0FBQW9DSSxNQUFBQSxRQUFRLEVBQUUsUUFBOUM7QUFBd0RDLE1BQUFBLFlBQVksRUFBRTtBQUF0RSxLQUhnRDtBQUR4RCxHQURELEVBT0k7QUFDQ04sSUFBQUEsS0FBSyxFQUFFLEtBRFI7QUFDZUMsSUFBQUEsTUFBTSxFQUFFLFFBRHZCO0FBQ2lDQyxJQUFBQSxNQUFNLEVBQUU7QUFEekMsR0FQSixFQVNJO0FBQ0NGLElBQUFBLEtBQUssRUFBRSxLQURSO0FBQ2VDLElBQUFBLE1BQU0sRUFBRSxRQUR2QjtBQUNpQ0MsSUFBQUEsTUFBTSxFQUFFLENBRHpDO0FBQzRDQyxJQUFBQSxNQUFNLEVBQUUsQ0FDL0M7QUFBQ0gsTUFBQUEsS0FBSyxFQUFFLFFBQVI7QUFBa0JDLE1BQUFBLE1BQU0sRUFBRSxRQUExQjtBQUFvQ0ssTUFBQUEsWUFBWSxFQUFFO0FBQWxELEtBRCtDLEVBRS9DO0FBQUNOLE1BQUFBLEtBQUssRUFBRSxNQUFSO0FBQWdCTyxNQUFBQSxNQUFNLEVBQUU7QUFBeEIsS0FGK0M7QUFEcEQsR0FUSixFQWNJO0FBQ0NQLElBQUFBLEtBQUssRUFBRSxNQURSO0FBQ2dCQyxJQUFBQSxNQUFNLEVBQUUsUUFEeEI7QUFDa0NDLElBQUFBLE1BQU0sRUFBRSxDQUQxQztBQUM2Q0MsSUFBQUEsTUFBTSxFQUFFLENBQ2hEO0FBQUNJLE1BQUFBLE1BQU0sRUFBRTtBQUFULEtBRGdELEVBRWhEO0FBQUNBLE1BQUFBLE1BQU0sRUFBRTtBQUFULEtBRmdEO0FBRHJELEdBZEosRUFtQkk7QUFDQ1AsSUFBQUEsS0FBSyxFQUFFLE1BRFI7QUFDZ0JDLElBQUFBLE1BQU0sRUFBRSxNQUR4QjtBQUNnQ0MsSUFBQUEsTUFBTSxFQUFFLENBRHhDO0FBQzJDQyxJQUFBQSxNQUFNLEVBQUUsQ0FDOUM7QUFBQ0gsTUFBQUEsS0FBSyxFQUFFLE1BQVI7QUFBZ0JDLE1BQUFBLE1BQU0sRUFBRSxNQUF4QjtBQUFnQ0ssTUFBQUEsWUFBWSxFQUFFO0FBQTlDLEtBRDhDLEVBRTlDO0FBQUNOLE1BQUFBLEtBQUssRUFBRSxNQUFSO0FBQWdCQyxNQUFBQSxNQUFNLEVBQUUsUUFBeEI7QUFBa0NPLE1BQUFBLFNBQVMsRUFBRTtBQUE3QyxLQUY4QztBQURuRCxHQW5CSixDQUZJO0FBNEJYUCxFQUFBQSxNQUFNLEVBQUUsT0E1Qkc7QUE2QlhELEVBQUFBLEtBQUssRUFBRSxNQTdCSTtBQThCWFMsRUFBQUEsb0JBQW9CLEVBQUUsS0E5Qlg7QUErQlhDLEVBQUFBLElBQUksRUFBRTtBQS9CSyxDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgUHJlbG9hZGVyIH0gZnJvbSAnLi9QcmVsb2FkZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdGl0bGU6ICdzd2YtdWkta2l0L0NvbnRhaW5lcnMvUHJlbG9hZGVyJyxcclxuICAgIGNvbXBvbmVudDogUHJlbG9hZGVyLFxyXG4gICAgYXJnVHlwZXM6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGNvbnRyb2w6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmNvbnN0IFRlbXBsYXRlID0gKGFyZ3MpID0+IDxQcmVsb2FkZXIgey4uLmFyZ3N9IC8+O1xyXG5cclxuZXhwb3J0IGNvbnN0IERlZmF1bHQgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcclxuRGVmYXVsdC5hcmdzID0ge1xyXG4gICAgY291bnQ6IDEsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIwLjhyZW1cIiwgcmVwZWF0OiAzLCBzdHlsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7d2lkdGg6IFwiMy43NXJlbVwiLCBoZWlnaHQ6IFwiMS4ycmVtXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt3aWR0aDogXCI3LjVyZW1cIiwgaGVpZ2h0OiBcIjEuMnJlbVwiLCBtYXJnaW5MZWZ0OiBcImF1dG9cIn0sXHJcbiAgICAgICAgICAgICAgICAgICAge3dpZHRoOiBcIjEuMnJlbVwiLCBoZWlnaHQ6IFwiMS4ycmVtXCIsIG1pbldpZHRoOiBcIjEuMnJlbVwiLCBib3JkZXJSYWRpdXM6IFwiMC4zcmVtXCJ9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjcwJVwiLCBoZWlnaHQ6IFwiMS43cmVtXCIsIHJlcGVhdDogMVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI5MCVcIiwgaGVpZ2h0OiBcIjAuOHJlbVwiLCByZXBlYXQ6IDIsIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt3aWR0aDogXCIxLjFyZW1cIiwgaGVpZ2h0OiBcIjEuMXJlbVwiLCBib3JkZXJSYWRpdXM6IFwiNTAlXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt3aWR0aDogXCIzcmVtXCIsIG1hcmdpbjogXCI2cHggMCAwIDBcIn1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNHJlbVwiLCBoZWlnaHQ6IFwiMC44cmVtXCIsIHJlcGVhdDogMiwgc3R5bGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge21hcmdpbjogXCIycHhcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAge21hcmdpbjogXCIycHhcIn0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjJyZW1cIiwgcmVwZWF0OiAyLCBzdHlsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7d2lkdGg6IFwiMnJlbVwiLCBoZWlnaHQ6IFwiMnJlbVwiLCBib3JkZXJSYWRpdXM6IFwiNTAlXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt3aWR0aDogXCI3cmVtXCIsIGhlaWdodDogXCIxLjJyZW1cIiwgbWFyZ2luVG9wOiBcIjEwcHhcIn0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIGhlaWdodDogXCIxMXJlbVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgZmxleERpcmVjdGlvbkdlbmVyYWw6IFwicm93XCIsXHJcbiAgICBibHVyOiBcIjNyZW1cIlxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuIl19