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
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "swf-reference",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          list: "records",
          className: "swf-reference--input",
          onChange: this.onChange
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("datalist", {
          id: "records"
        })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZWZlcmVuY2UvUmVmZXJlbmNlLmpzIl0sIm5hbWVzIjpbIlJlZmVyZW5jZSIsInByb3BzIiwib25DaGFuZ2UiLCJiaW5kIiwic3RhdGUiLCJyZWNvcmRzIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsInF1ZXJ5IiwiY2hhcnMiLCJlbmNvZGVkUmVjb3JkIiwiZmllbGQiLCJpZ25vcmVSZWZRdWFsIiwicGFnaW5hdGlvbkxpbWl0Iiwic2VyaWFsaXplZENoYW5nZXMiLCJzb3J0QnkiLCJzeXNfaWQiLCJ0YWJsZSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJzZXRTdGF0ZSIsIl8iLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9uVmFsdWVDaGFuZ2UiLCJmdW5jIiwic3RyaW5nIiwiZGVjbGFyYXRpdmVBY3Rpb25zUHJvcHMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFM7Ozs7O0FBQ0YscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxPQUFPLEVBQUU7QUFEQSxLQUFiO0FBSGU7QUFNbEI7Ozs7V0FFRCxrQkFBVUMsS0FBVixFQUFpQjtBQUFBOztBQUFBLFVBQ0dDLEtBREgsR0FDYUQsS0FEYixDQUNORSxNQURNLENBQ0dELEtBREg7QUFFYixzQ0FBZSxXQUFmLEVBQTRCRSxpQkFBNUIsRUFBbUM7QUFDL0JDLFFBQUFBLEtBQUssRUFBRUgsS0FEd0I7QUFFL0JJLFFBQUFBLGFBQWEsRUFBRSxFQUZnQjtBQUcvQkMsUUFBQUEsS0FBSyxFQUFFLFdBSHdCO0FBSS9CQyxRQUFBQSxhQUFhLEVBQUUsS0FKZ0I7QUFLL0JDLFFBQUFBLGVBQWUsRUFBRSxFQUxjO0FBTS9CQyxRQUFBQSxpQkFBaUIsRUFBRSxFQU5ZO0FBTy9CQyxRQUFBQSxNQUFNLEVBQUUsRUFQdUI7QUFRL0JDLFFBQUFBLE1BQU0sRUFBRSxrQ0FSdUI7QUFTL0JDLFFBQUFBLEtBQUssRUFBRTtBQVR3QixPQUFuQyxFQVdLQyxJQVhMO0FBQUEsMkVBV1UsaUJBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDaUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQURqQjs7QUFBQTtBQUNJQSxrQkFBQUEsSUFESjs7QUFFRixrQkFBQSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUNWakIsb0JBQUFBLE9BQU8sRUFBRWtCLG1CQUFFQyxHQUFGLENBQU1ILElBQU4sRUFBWSxtREFBWjtBQURDLG1CQUFkOztBQUdBSSxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ04sb0JBQUFBLFFBQVEsRUFBRUM7QUFBWCxtQkFBWjs7QUFMRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVhWOztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWtCVyxVQUFBTSxLQUFLO0FBQUEsZUFBSUYsT0FBTyxDQUFDRSxLQUFSLENBQWNBLEtBQWQsQ0FBSjtBQUFBLE9BbEJoQjtBQW1CSDs7O1dBRUQsa0JBQVM7QUFDTEYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS3RCLEtBQUwsQ0FBV0MsT0FBdkI7QUFDQSwwQkFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDLGVBQWY7QUFBQSxnQ0FDSTtBQUFPLFVBQUEsSUFBSSxFQUFDLFNBQVo7QUFBc0IsVUFBQSxTQUFTLEVBQUMsc0JBQWhDO0FBQXVELFVBQUEsUUFBUSxFQUFFLEtBQUtIO0FBQXRFLFVBREosZUFFSTtBQUFVLFVBQUEsRUFBRSxFQUFDO0FBQWIsVUFGSjtBQUFBLFFBREo7QUFPSDs7OztFQXpDbUIwQixLQUFLLENBQUNDLFM7O0FBNEM5QjdCLFNBQVMsQ0FBQzhCLFNBQVYsR0FBc0I7QUFDbEJDLEVBQUFBLGFBQWEsRUFBRUQsc0JBQVVFLElBRFA7QUFFbEJ6QixFQUFBQSxLQUFLLEVBQUV1QixzQkFBVUcsTUFGQztBQUdsQkMsRUFBQUEsdUJBQXVCLEVBQUVKLHNCQUFVSztBQUhqQixDQUF0QjtlQU1lbkMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGdyYXBocWxSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9ncmFwaHFsUmVxdWVzdC9ncmFwaHFsUmVxdWVzdFwiO1xuaW1wb3J0IHtxdWVyeX0gZnJvbSBcIi4vZGF0YXNvdXJjZVwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG5jbGFzcyBSZWZlcmVuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJlY29yZHM6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZSAoZXZlbnQpIHtcbiAgICAgICAgY29uc3Qge3RhcmdldDoge3ZhbHVlfX0gPSBldmVudDtcbiAgICAgICAgZ3JhcGhxbFJlcXVlc3QoXCJyZWZlcmVuY2VcIiwgcXVlcnksIHtcbiAgICAgICAgICAgIGNoYXJzOiB2YWx1ZSxcbiAgICAgICAgICAgIGVuY29kZWRSZWNvcmQ6IFwiXCIsXG4gICAgICAgICAgICBmaWVsZDogXCJvcGVuZWRfYnlcIixcbiAgICAgICAgICAgIGlnbm9yZVJlZlF1YWw6IGZhbHNlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbkxpbWl0OiAyNSxcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRDaGFuZ2VzOiBcIlwiLFxuICAgICAgICAgICAgc29ydEJ5OiBcIlwiLFxuICAgICAgICAgICAgc3lzX2lkOiBcIjFjYTU2YzM4ZGIxNjI0MTAzZDlhY2EzMjM5OTYxOTk2XCIsXG4gICAgICAgICAgICB0YWJsZTogXCJ4X21vYmlfc3dmX2l0ZW1cIlxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4gIHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRzOiBfLmdldChqc29uLCBcIlswXS5kYXRhLkdsaWRlTGF5b3V0X1F1ZXJ5LnJlZmVyZW5jZURhdGFSZXRyaWV2ZXJcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtyZXNwb25zZToganNvbn0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5yZWNvcmRzKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2YtcmVmZXJlbmNlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGxpc3Q9XCJyZWNvcmRzXCIgY2xhc3NOYW1lPVwic3dmLXJlZmVyZW5jZS0taW5wdXRcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD1cInJlY29yZHNcIj5cbiAgICAgICAgICAgICAgICA8L2RhdGFsaXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblJlZmVyZW5jZS5wcm9wVHlwZXMgPSB7XG4gICAgb25WYWx1ZUNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXG4gICAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVjbGFyYXRpdmVBY3Rpb25zUHJvcHM6IHByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmZXJlbmNlIl19