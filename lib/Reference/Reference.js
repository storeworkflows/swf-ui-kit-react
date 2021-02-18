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
    _this.getReferenceList = _this.getReferenceList.bind(_assertThisInitialized(_this));
    _this.getReferenceList = _lodash["default"].debounce(_this.getReferenceList, 500);
    _this.controllerRef = /*#__PURE__*/React.createRef();
    _this.state = {
      records: []
    };
    return _this;
  }

  _createClass(Reference, [{
    key: "getReferenceList",
    value: function getReferenceList(value) {
      var _this2 = this;

      (0, _graphqlRequest["default"])({
        operationName: "reference",
        query: _datasource.query,
        variables: {
          chars: value,
          encodedRecord: "",
          field: "opened_by",
          ignoreRefQual: false,
          paginationLimit: 25,
          serializedChanges: "",
          sortBy: "",
          sys_id: "1ca56c38db1624103d9aca3239961996",
          table: "x_mobi_swf_item"
        },
        params: {
          signal: this.controllerRef.current.signal
        }
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
    key: "onChange",
    value: function onChange(event) {
      var value = event.target.value;

      if (this.controllerRef.current) {
        this.controllerRef.current.abort();
      }

      this.controllerRef.current = new AbortController();
      this.getReferenceList(value);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.records);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "swf-reference",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Input, {
          className: "swf-reference--input",
          label: this.props.label,
          onInput: this.onChange
        })
      });
    }
  }]);

  return Reference;
}(React.Component);

Reference.defaultProps = {
  label: ""
};
Reference.propTypes = {
  onValueChange: _propTypes["default"].func,
  value: _propTypes["default"].string,
  declarativeActionsProps: _propTypes["default"].object,
  label: _propTypes["default"].string
};
var _default = Reference;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZWZlcmVuY2UvUmVmZXJlbmNlLmpzIl0sIm5hbWVzIjpbIlJlZmVyZW5jZSIsInByb3BzIiwib25DaGFuZ2UiLCJiaW5kIiwiZ2V0UmVmZXJlbmNlTGlzdCIsIl8iLCJkZWJvdW5jZSIsImNvbnRyb2xsZXJSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInN0YXRlIiwicmVjb3JkcyIsInZhbHVlIiwib3BlcmF0aW9uTmFtZSIsInF1ZXJ5IiwidmFyaWFibGVzIiwiY2hhcnMiLCJlbmNvZGVkUmVjb3JkIiwiZmllbGQiLCJpZ25vcmVSZWZRdWFsIiwicGFnaW5hdGlvbkxpbWl0Iiwic2VyaWFsaXplZENoYW5nZXMiLCJzb3J0QnkiLCJzeXNfaWQiLCJ0YWJsZSIsInBhcmFtcyIsInNpZ25hbCIsImN1cnJlbnQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0U3RhdGUiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJldmVudCIsInRhcmdldCIsImFib3J0IiwiQWJvcnRDb250cm9sbGVyIiwibGFiZWwiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJvblZhbHVlQ2hhbmdlIiwiZnVuYyIsInN0cmluZyIsImRlY2xhcmF0aXZlQWN0aW9uc1Byb3BzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxTOzs7OztBQUNGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIsK0JBQXhCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0JDLG1CQUFFQyxRQUFGLENB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QjtBQUlsQlIsRUFBQUEsS0FBSyxFQUFFRyxzQkFBVUc7QUFKQyxDQUF0QjtlQU9lOUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGdyYXBocWxSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9ncmFwaHFsUmVxdWVzdC9ncmFwaHFsUmVxdWVzdFwiO1xuaW1wb3J0IHtxdWVyeX0gZnJvbSBcIi4vZGF0YXNvdXJjZVwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHtJbnB1dH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmNsYXNzIFJlZmVyZW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZUxpc3QgPSB0aGlzLmdldFJlZmVyZW5jZUxpc3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRSZWZlcmVuY2VMaXN0ID0gXy5kZWJvdW5jZSh0aGlzLmdldFJlZmVyZW5jZUxpc3QsIDUwMClcbiAgICAgICAgdGhpcy5jb250cm9sbGVyUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByZWNvcmRzOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmVmZXJlbmNlTGlzdCAodmFsdWUpIHtcbiAgICAgICAgZ3JhcGhxbFJlcXVlc3QoIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbk5hbWU6IFwicmVmZXJlbmNlXCIsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIGNoYXJzOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkUmVjb3JkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGZpZWxkOiBcIm9wZW5lZF9ieVwiLFxuICAgICAgICAgICAgICAgIGlnbm9yZVJlZlF1YWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb25MaW1pdDogMjUsXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplZENoYW5nZXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgc29ydEJ5OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN5c19pZDogXCIxY2E1NmMzOGRiMTYyNDEwM2Q5YWNhMzIzOTk2MTk5NlwiLFxuICAgICAgICAgICAgICAgIHRhYmxlOiBcInhfbW9iaV9zd2ZfaXRlbVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgc2lnbmFsOiB0aGlzLmNvbnRyb2xsZXJSZWYuY3VycmVudC5zaWduYWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRzOiBfLmdldChqc29uLCBcIlswXS5kYXRhLkdsaWRlTGF5b3V0X1F1ZXJ5LnJlZmVyZW5jZURhdGFSZXRyaWV2ZXJcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtyZXNwb25zZToganNvbn0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHt0YXJnZXQ6IHt2YWx1ZX19ID0gZXZlbnQ7XG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2xsZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyUmVmLmN1cnJlbnQuYWJvcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udHJvbGxlclJlZi5jdXJyZW50ID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlTGlzdCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnJlY29yZHMpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3Zi1yZWZlcmVuY2VcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwic3dmLXJlZmVyZW5jZS0taW5wdXRcIiBsYWJlbD17dGhpcy5wcm9wcy5sYWJlbH0gb25JbnB1dD17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblJlZmVyZW5jZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbGFiZWw6IFwiXCJcbn1cblxuUmVmZXJlbmNlLnByb3BUeXBlcyA9IHtcbiAgICBvblZhbHVlQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcbiAgICB2YWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWNsYXJhdGl2ZUFjdGlvbnNQcm9wczogcHJvcFR5cGVzLm9iamVjdCxcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZlcmVuY2UiXX0=