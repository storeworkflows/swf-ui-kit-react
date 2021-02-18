"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _graphqlRequest = _interopRequireDefault(require("../utils/graphqlRequest/graphqlRequest"));

var _datasource = require("./datasource");

var _lodash = _interopRequireDefault(require("lodash"));

var _index = require("../index");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var Reference = /*#__PURE__*/function (_React$Component) {
  _inherits(Reference, _React$Component);

  var _super = _createSuper(Reference);

  function Reference(props) {
    var _this;

    _classCallCheck(this, Reference);

    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.state = {
      records: []
    };
    return _this;
  }

  _createClass(Reference, [{
    key: "onChange",
    value: function onChange(event) {
      var _this2 = this;

      var value = event.target.value;
      (0, _graphqlRequest["default"])("reference", _datasource.query, {
        chars: value,
        encodedRecord: "",
        field: "opened_by",
        ignoreRefQual: false,
        paginationLimit: 25,
        serializedChanges: "",
        sortBy: "",
        sys_id: "1ca56c38db1624103d9aca3239961996",
        table: "x_mobi_swf_item"
      }).then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response) {
          var json;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return response.json();

                case 2:
                  json = _context.sent;

                  _this2.setState({
                    records: _lodash["default"].get(json, "[0].data.GlideLayout_Query.referenceDataRetriever")
                  });

                  console.log({
                    response: json
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }())["catch"](function (error) {
        return console.error(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.records);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "swf-reference",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input, {
          className: "swf-reference--input",
          onInput: this.onChange
        })
      });
    }
  }]);

  return Reference;
}(React.Component);

Reference.propTypes = {
  onValueChange: _propTypes["default"].func,
  value: _propTypes["default"].string,
  declarativeActionsProps: _propTypes["default"].object
};
var _default = Reference;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZWZlcmVuY2UvUmVmZXJlbmNlLmpzIl0sIm5hbWVzIjpbIlJlZmVyZW5jZSIsInByb3BzIiwib25DaGFuZ2UiLCJiaW5kIiwic3RhdGUiLCJyZWNvcmRzIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsInF1ZXJ5IiwiY2hhcnMiLCJlbmNvZGVkUmVjb3JkIiwiZmllbGQiLCJpZ25vcmVSZWZRdWFsIiwicGFnaW5hdGlvbkxpbWl0Iiwic2VyaWFsaXplZENoYW5nZXMiLCJzb3J0QnkiLCJzeXNfaWQiLCJ0YWJsZSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJzZXRTdGF0ZSIsIl8iLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9uVmFsdWVDaGFuZ2UiLCJmdW5jIiwic3RyaW5nIiwiZGVjbGFyYXRpdmVBY3Rpb25zUHJvcHMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFM7Ozs7O0FBQ0YscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxPQUFPLEVBQUU7QUFEQSxLQUFiO0FBSGU7QUFNbEI7Ozs7V0FFRCxrQkFBVUMsS0FBVixFQUFpQjtBQUFBOztBQUFBLFVBQ0dDLEtBREgsR0FDYUQsS0FEYixDQUNORSxNQURNLENBQ0dELEtBREg7QUFFYixzQ0FBZSxXQUFmLEVBQTRCRSxpQkFBNUIsRUFBbUM7QUFDL0JDLFFBQUFBLEtBQUssRUFBRUgsS0FEd0I7QUFFL0JJLFFBQUFBLGFBQWEsRUFBRSxFQUZnQjtBQUcvQkMsUUFBQUEsS0FBSyxFQUFFLFdBSHdCO0FBSS9CQyxRQUFBQSxhQUFhLEVBQUUsS0FKZ0I7QUFLL0JDLFFBQUFBLGVBQWUsRUFBRSxFQUxjO0FBTS9CQyxRQUFBQSxpQkFBaUIsRUFBRSxFQU5ZO0FBTy9CQyxRQUFBQSxNQUFNLEVBQUUsRUFQdUI7QUFRL0JDLFFBQUFBLE1BQU0sRUFBRSxrQ0FSdUI7QUFTL0JDLFFBQUFBLEtBQUssRUFBRTtBQVR3QixPQUFuQyxFQVdLQyxJQVhMO0FBQUEsMkVBV1UsaUJBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDaUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQURqQjs7QUFBQTtBQUNJQSxrQkFBQUEsSUFESjs7QUFFRixrQkFBQSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUNWakIsb0JBQUFBLE9BQU8sRUFBRWtCLG1CQUFFQyxHQUFGLENBQU1ILElBQU4sRUFBWSxtREFBWjtBQURDLG1CQUFkOztBQUdBSSxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ04sb0JBQUFBLFFBQVEsRUFBRUM7QUFBWCxtQkFBWjs7QUFMRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVhWOztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWtCVyxVQUFBTSxLQUFLO0FBQUEsZUFBSUYsT0FBTyxDQUFDRSxLQUFSLENBQWNBLEtBQWQsQ0FBSjtBQUFBLE9BbEJoQjtBQW1CSDs7O1dBRUQsa0JBQVM7QUFDTEYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS3RCLEtBQUwsQ0FBV0MsT0FBdkI7QUFDQSwwQkFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDLGVBQWY7QUFBQSwrQkFDSSxxQkFBQyxZQUFEO0FBQU8sVUFBQSxTQUFTLEVBQUMsc0JBQWpCO0FBQXdDLFVBQUEsT0FBTyxFQUFFLEtBQUtIO0FBQXREO0FBREosUUFESjtBQUtIOzs7O0VBdkNtQjBCLEtBQUssQ0FBQ0MsUzs7QUEwQzlCN0IsU0FBUyxDQUFDOEIsU0FBVixHQUFzQjtBQUNsQkMsRUFBQUEsYUFBYSxFQUFFRCxzQkFBVUUsSUFEUDtBQUVsQnpCLEVBQUFBLEtBQUssRUFBRXVCLHNCQUFVRyxNQUZDO0FBR2xCQyxFQUFBQSx1QkFBdUIsRUFBRUosc0JBQVVLO0FBSGpCLENBQXRCO2VBTWVuQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGdyYXBocWxSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9ncmFwaHFsUmVxdWVzdC9ncmFwaHFsUmVxdWVzdFwiO1xyXG5pbXBvcnQge3F1ZXJ5fSBmcm9tIFwiLi9kYXRhc291cmNlXCI7XHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtJbnB1dH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5jbGFzcyBSZWZlcmVuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZWNvcmRzOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7dGFyZ2V0OiB7dmFsdWV9fSA9IGV2ZW50O1xyXG4gICAgICAgIGdyYXBocWxSZXF1ZXN0KFwicmVmZXJlbmNlXCIsIHF1ZXJ5LCB7XHJcbiAgICAgICAgICAgIGNoYXJzOiB2YWx1ZSxcclxuICAgICAgICAgICAgZW5jb2RlZFJlY29yZDogXCJcIixcclxuICAgICAgICAgICAgZmllbGQ6IFwib3BlbmVkX2J5XCIsXHJcbiAgICAgICAgICAgIGlnbm9yZVJlZlF1YWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uTGltaXQ6IDI1LFxyXG4gICAgICAgICAgICBzZXJpYWxpemVkQ2hhbmdlczogXCJcIixcclxuICAgICAgICAgICAgc29ydEJ5OiBcIlwiLFxyXG4gICAgICAgICAgICBzeXNfaWQ6IFwiMWNhNTZjMzhkYjE2MjQxMDNkOWFjYTMyMzk5NjE5OTZcIixcclxuICAgICAgICAgICAgdGFibGU6IFwieF9tb2JpX3N3Zl9pdGVtXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihhc3luYyByZXNwb25zZSA9PiAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZHM6IF8uZ2V0KGpzb24sIFwiWzBdLmRhdGEuR2xpZGVMYXlvdXRfUXVlcnkucmVmZXJlbmNlRGF0YVJldHJpZXZlclwiKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtyZXNwb25zZToganNvbn0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5yZWNvcmRzKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dmLXJlZmVyZW5jZVwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGNsYXNzTmFtZT1cInN3Zi1yZWZlcmVuY2UtLWlucHV0XCIgb25JbnB1dD17dGhpcy5vbkNoYW5nZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblJlZmVyZW5jZS5wcm9wVHlwZXMgPSB7XHJcbiAgICBvblZhbHVlQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIHZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGVjbGFyYXRpdmVBY3Rpb25zUHJvcHM6IHByb3BUeXBlcy5vYmplY3RcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVmZXJlbmNlIl19