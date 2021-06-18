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

var CardPreloader = function CardPreloader() {
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
};

var _default = CardPreloader;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkL1ByZWxvYWRlci5qcyJdLCJuYW1lcyI6WyJDYXJkUHJlbG9hZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJyZXBlYXQiLCJzdHlsZXMiLCJtYXJnaW5MZWZ0IiwibWluV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJHTE9CQUxfQ09OU1RBTlRTIiwiSVNfTU9CSUxFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4QixzQkFDSSxxQkFBQyxxQkFBRDtBQUNJLElBQUEsS0FBSyxFQUFFLENBRFg7QUFFSSxJQUFBLEtBQUssRUFBRSxDQUNIO0FBQ0lDLE1BQUFBLEtBQUssRUFBRSxNQURYO0FBQ21CQyxNQUFBQSxNQUFNLEVBQUUsUUFEM0I7QUFDcUNDLE1BQUFBLE1BQU0sRUFBRSxDQUQ3QztBQUNnREMsTUFBQUEsTUFBTSxFQUFFLENBQ2hEO0FBQUNILFFBQUFBLEtBQUssRUFBRSxTQUFSO0FBQW1CQyxRQUFBQSxNQUFNLEVBQUU7QUFBM0IsT0FEZ0QsRUFFaEQ7QUFBQ0QsUUFBQUEsS0FBSyxFQUFFLFFBQVI7QUFBa0JDLFFBQUFBLE1BQU0sRUFBRSxRQUExQjtBQUFvQ0csUUFBQUEsVUFBVSxFQUFFO0FBQWhELE9BRmdELEVBR2hEO0FBQUNKLFFBQUFBLEtBQUssRUFBRSxRQUFSO0FBQWtCQyxRQUFBQSxNQUFNLEVBQUUsUUFBMUI7QUFBb0NJLFFBQUFBLFFBQVEsRUFBRSxRQUE5QztBQUF3REMsUUFBQUEsWUFBWSxFQUFFO0FBQXRFLE9BSGdEO0FBRHhELEtBREcsRUFPQTtBQUNDTixNQUFBQSxLQUFLLEVBQUUsS0FEUjtBQUNlQyxNQUFBQSxNQUFNLEVBQUUsUUFEdkI7QUFDaUNDLE1BQUFBLE1BQU0sRUFBRTtBQUR6QyxLQVBBLEVBU0E7QUFDQ0YsTUFBQUEsS0FBSyxFQUFFLEtBRFI7QUFDZUMsTUFBQUEsTUFBTSxFQUFFLFFBRHZCO0FBQ2lDQyxNQUFBQSxNQUFNLEVBQUUsQ0FEekM7QUFDNENDLE1BQUFBLE1BQU0sRUFBRSxDQUMvQztBQUFDSCxRQUFBQSxLQUFLLEVBQUUsUUFBUjtBQUFrQkMsUUFBQUEsTUFBTSxFQUFFLFFBQTFCO0FBQW9DSyxRQUFBQSxZQUFZLEVBQUU7QUFBbEQsT0FEK0MsRUFFL0M7QUFBQ04sUUFBQUEsS0FBSyxFQUFFLE1BQVI7QUFBZ0JPLFFBQUFBLE1BQU0sRUFBRTtBQUF4QixPQUYrQztBQURwRCxLQVRBLEVBY0E7QUFDQ1AsTUFBQUEsS0FBSyxFQUFFLE1BRFI7QUFDZ0JDLE1BQUFBLE1BQU0sRUFBRSxRQUR4QjtBQUNrQ0MsTUFBQUEsTUFBTSxFQUFFLENBRDFDO0FBQzZDQyxNQUFBQSxNQUFNLEVBQUUsQ0FDaEQ7QUFBQ0ksUUFBQUEsTUFBTSxFQUFFO0FBQVQsT0FEZ0QsRUFFaEQ7QUFBQ0EsUUFBQUEsTUFBTSxFQUFFO0FBQVQsT0FGZ0Q7QUFEckQsS0FkQSxFQW1CQTtBQUNDUCxNQUFBQSxLQUFLLEVBQUUsTUFEUjtBQUNnQkMsTUFBQUEsTUFBTSxFQUFFLE1BRHhCO0FBQ2dDQyxNQUFBQSxNQUFNLEVBQUUsQ0FEeEM7QUFDMkNDLE1BQUFBLE1BQU0sRUFBRSxDQUM5QztBQUFDSCxRQUFBQSxLQUFLLEVBQUUsTUFBUjtBQUFnQkMsUUFBQUEsTUFBTSxFQUFFLE1BQXhCO0FBQWdDSyxRQUFBQSxZQUFZLEVBQUU7QUFBOUMsT0FEOEMsRUFFOUM7QUFBQ04sUUFBQUEsS0FBSyxFQUFFLE1BQVI7QUFBZ0JDLFFBQUFBLE1BQU0sRUFBRSxRQUF4QjtBQUFrQ08sUUFBQUEsU0FBUyxFQUFFO0FBQTdDLE9BRjhDO0FBRG5ELEtBbkJBLENBRlg7QUE0QkksSUFBQSxNQUFNLEVBQUMsT0E1Qlg7QUE2QkksSUFBQSxLQUFLLEVBQUVDLDRCQUFpQkMsU0FBakIsR0FBNkIsT0FBN0IsR0FBdUMsTUE3QmxEO0FBOEJJLElBQUEsb0JBQW9CLEVBQUMsS0E5QnpCO0FBK0JJLElBQUEsSUFBSSxFQUFDO0FBL0JULElBREo7QUFtQ0gsQ0FwQ0Q7O2VBc0NlWCxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHTE9CQUxfQ09OU1RBTlRTfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSBcIi4uL1ByZWxvYWRlci9QcmVsb2FkZXJcIjtcclxuXHJcbmNvbnN0IENhcmRQcmVsb2FkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcmVsb2FkZXJcclxuICAgICAgICAgICAgY291bnQ9ezF9XHJcbiAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMC44cmVtXCIsIHJlcGVhdDogMywgc3R5bGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3aWR0aDogXCIzLjc1cmVtXCIsIGhlaWdodDogXCIxLjJyZW1cIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3aWR0aDogXCI3LjVyZW1cIiwgaGVpZ2h0OiBcIjEuMnJlbVwiLCBtYXJnaW5MZWZ0OiBcImF1dG9cIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3aWR0aDogXCIxLjJyZW1cIiwgaGVpZ2h0OiBcIjEuMnJlbVwiLCBtaW5XaWR0aDogXCIxLjJyZW1cIiwgYm9yZGVyUmFkaXVzOiBcIjAuM3JlbVwifVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI3MCVcIiwgaGVpZ2h0OiBcIjEuN3JlbVwiLCByZXBlYXQ6IDFcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5MCVcIiwgaGVpZ2h0OiBcIjAuOHJlbVwiLCByZXBlYXQ6IDIsIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7d2lkdGg6IFwiMS4xcmVtXCIsIGhlaWdodDogXCIxLjFyZW1cIiwgYm9yZGVyUmFkaXVzOiBcIjUwJVwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge3dpZHRoOiBcIjNyZW1cIiwgbWFyZ2luOiBcIjZweCAwIDAgMFwifVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0cmVtXCIsIGhlaWdodDogXCIwLjhyZW1cIiwgcmVwZWF0OiAyLCBzdHlsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge21hcmdpbjogXCIycHhcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttYXJnaW46IFwiMnB4XCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIycmVtXCIsIHJlcGVhdDogMiwgc3R5bGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3aWR0aDogXCIycmVtXCIsIGhlaWdodDogXCIycmVtXCIsIGJvcmRlclJhZGl1czogXCI1MCVcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3aWR0aDogXCI3cmVtXCIsIGhlaWdodDogXCIxLjJyZW1cIiwgbWFyZ2luVG9wOiBcIjEwcHhcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTFyZW1cIlxyXG4gICAgICAgICAgICB3aWR0aD17R0xPQkFMX0NPTlNUQU5UUy5JU19NT0JJTEUgPyBcIjI4MHB4XCIgOiBcIjEwMCVcIn1cclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkdlbmVyYWw9XCJyb3dcIlxyXG4gICAgICAgICAgICBibHVyPVwiM3JlbVwiXHJcbiAgICAgICAgLz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByZWxvYWRlciJdfQ==