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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZWZlcmVuY2UvUmVmZXJlbmNlLmpzIl0sIm5hbWVzIjpbIlJlZmVyZW5jZSIsInByb3BzIiwib25DaGFuZ2UiLCJiaW5kIiwiZ2V0UmVmZXJlbmNlTGlzdCIsIl8iLCJkZWJvdW5jZSIsImNvbnRyb2xsZXJSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInN0YXRlIiwicmVjb3JkcyIsInZhbHVlIiwib3BlcmF0aW9uTmFtZSIsInF1ZXJ5IiwidmFyaWFibGVzIiwiY2hhcnMiLCJlbmNvZGVkUmVjb3JkIiwiZmllbGQiLCJpZ25vcmVSZWZRdWFsIiwicGFnaW5hdGlvbkxpbWl0Iiwic2VyaWFsaXplZENoYW5nZXMiLCJzb3J0QnkiLCJzeXNfaWQiLCJ0YWJsZSIsInBhcmFtcyIsInNpZ25hbCIsImN1cnJlbnQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0U3RhdGUiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJldmVudCIsInRhcmdldCIsImFib3J0IiwiQWJvcnRDb250cm9sbGVyIiwibGFiZWwiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJvblZhbHVlQ2hhbmdlIiwiZnVuYyIsInN0cmluZyIsImRlY2xhcmF0aXZlQWN0aW9uc1Byb3BzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxTOzs7OztBQUNGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIsK0JBQXhCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0JDLG1CQUFFQyxRQUFGLENBQVcsTUFBS0YsZ0JBQWhCLEVBQWtDLEdBQWxDLENBQXhCO0FBQ0EsVUFBS0csYUFBTCxnQkFBcUJDLEtBQUssQ0FBQ0MsU0FBTixFQUFyQjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxPQUFPLEVBQUU7QUFEQSxLQUFiO0FBTmU7QUFTbEI7Ozs7V0FFRCwwQkFBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3JCLHNDQUFnQjtBQUNaQyxRQUFBQSxhQUFhLEVBQUUsV0FESDtBQUVaQyxRQUFBQSxLQUFLLEVBQUxBLGlCQUZZO0FBR1pDLFFBQUFBLFNBQVMsRUFBRTtBQUNQQyxVQUFBQSxLQUFLLEVBQUVKLEtBREE7QUFFUEssVUFBQUEsYUFBYSxFQUFFLEVBRlI7QUFHUEMsVUFBQUEsS0FBSyxFQUFFLFdBSEE7QUFJUEMsVUFBQUEsYUFBYSxFQUFFLEtBSlI7QUFLUEMsVUFBQUEsZUFBZSxFQUFFLEVBTFY7QUFNUEMsVUFBQUEsaUJBQWlCLEVBQUUsRUFOWjtBQU9QQyxVQUFBQSxNQUFNLEVBQUUsRUFQRDtBQVFQQyxVQUFBQSxNQUFNLEVBQUUsa0NBUkQ7QUFTUEMsVUFBQUEsS0FBSyxFQUFFO0FBVEEsU0FIQztBQWNaQyxRQUFBQSxNQUFNLEVBQUU7QUFDSkMsVUFBQUEsTUFBTSxFQUFFLEtBQUtuQixhQUFMLENBQW1Cb0IsT0FBbkIsQ0FBMkJEO0FBRC9CO0FBZEksT0FBaEIsRUFrQktFLElBbEJMO0FBQUEsMkVBa0JVLGlCQUFNQyxRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQ2lCQSxRQUFRLENBQUNDLElBQVQsRUFEakI7O0FBQUE7QUFDSUEsa0JBQUFBLElBREo7O0FBRUYsa0JBQUEsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFDVnBCLG9CQUFBQSxPQUFPLEVBQUVOLG1CQUFFMkIsR0FBRixDQUFNRixJQUFOLEVBQVksbURBQVo7QUFEQyxtQkFBZDs7QUFHQUcsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNMLG9CQUFBQSxRQUFRLEVBQUVDO0FBQVgsbUJBQVo7O0FBTEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FsQlY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBeUJXLFVBQUFLLEtBQUs7QUFBQSxlQUFJRixPQUFPLENBQUNFLEtBQVIsQ0FBY0EsS0FBZCxDQUFKO0FBQUEsT0F6QmhCO0FBMEJIOzs7V0FFRCxrQkFBU0MsS0FBVCxFQUFnQjtBQUFBLFVBQ0l4QixLQURKLEdBQ2N3QixLQURkLENBQ0xDLE1BREssQ0FDSXpCLEtBREo7O0FBRVosVUFBSSxLQUFLTCxhQUFMLENBQW1Cb0IsT0FBdkIsRUFBZ0M7QUFDNUIsYUFBS3BCLGFBQUwsQ0FBbUJvQixPQUFuQixDQUEyQlcsS0FBM0I7QUFDSDs7QUFFRCxXQUFLL0IsYUFBTCxDQUFtQm9CLE9BQW5CLEdBQTZCLElBQUlZLGVBQUosRUFBN0I7QUFFQSxXQUFLbkMsZ0JBQUwsQ0FBc0JRLEtBQXRCO0FBQ0g7OztXQUVELGtCQUFTO0FBQ0xxQixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLeEIsS0FBTCxDQUFXQyxPQUF2QjtBQUNBLDBCQUNJO0FBQUssUUFBQSxTQUFTLEVBQUMsZUFBZjtBQUFBLCtCQUNJLHFCQUFDLFlBQUQ7QUFBTyxVQUFBLFNBQVMsRUFBQyxzQkFBakI7QUFBd0MsVUFBQSxLQUFLLEVBQUUsS0FBS1YsS0FBTCxDQUFXdUMsS0FBMUQ7QUFBaUUsVUFBQSxPQUFPLEVBQUUsS0FBS3RDO0FBQS9FO0FBREosUUFESjtBQUtIOzs7O0VBM0RtQk0sS0FBSyxDQUFDaUMsUzs7QUE4RDlCekMsU0FBUyxDQUFDMEMsWUFBVixHQUF5QjtBQUNyQkYsRUFBQUEsS0FBSyxFQUFFO0FBRGMsQ0FBekI7QUFJQXhDLFNBQVMsQ0FBQzJDLFNBQVYsR0FBc0I7QUFDbEJDLEVBQUFBLGFBQWEsRUFBRUQsc0JBQVVFLElBRFA7QUFFbEJqQyxFQUFBQSxLQUFLLEVBQUUrQixzQkFBVUcsTUFGQztBQUdsQkMsRUFBQUEsdUJBQXVCLEVBQUVKLHNCQUFVSyxNQUhqQjtBQUlsQlIsRUFBQUEsS0FBSyxFQUFFRyxzQkFBVUc7QUFKQyxDQUF0QjtlQU9lOUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBncmFwaHFsUmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvZ3JhcGhxbFJlcXVlc3QvZ3JhcGhxbFJlcXVlc3RcIjtcclxuaW1wb3J0IHtxdWVyeX0gZnJvbSBcIi4vZGF0YXNvdXJjZVwiO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7SW5wdXR9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuY2xhc3MgUmVmZXJlbmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRSZWZlcmVuY2VMaXN0ID0gdGhpcy5nZXRSZWZlcmVuY2VMaXN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRSZWZlcmVuY2VMaXN0ID0gXy5kZWJvdW5jZSh0aGlzLmdldFJlZmVyZW5jZUxpc3QsIDUwMClcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZWNvcmRzOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWZlcmVuY2VMaXN0ICh2YWx1ZSkge1xyXG4gICAgICAgIGdyYXBocWxSZXF1ZXN0KCB7XHJcbiAgICAgICAgICAgIG9wZXJhdGlvbk5hbWU6IFwicmVmZXJlbmNlXCIsXHJcbiAgICAgICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIGNoYXJzOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIGVuY29kZWRSZWNvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJvcGVuZWRfYnlcIixcclxuICAgICAgICAgICAgICAgIGlnbm9yZVJlZlF1YWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbkxpbWl0OiAyNSxcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRDaGFuZ2VzOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc29ydEJ5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc3lzX2lkOiBcIjFjYTU2YzM4ZGIxNjI0MTAzZDlhY2EzMjM5OTYxOTk2XCIsXHJcbiAgICAgICAgICAgICAgICB0YWJsZTogXCJ4X21vYmlfc3dmX2l0ZW1cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIHNpZ25hbDogdGhpcy5jb250cm9sbGVyUmVmLmN1cnJlbnQuc2lnbmFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihhc3luYyByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkczogXy5nZXQoanNvbiwgXCJbMF0uZGF0YS5HbGlkZUxheW91dF9RdWVyeS5yZWZlcmVuY2VEYXRhUmV0cmlldmVyXCIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coe3Jlc3BvbnNlOiBqc29ufSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3Qge3RhcmdldDoge3ZhbHVlfX0gPSBldmVudDtcclxuICAgICAgICBpZiAodGhpcy5jb250cm9sbGVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyUmVmLmN1cnJlbnQuYWJvcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlclJlZi5jdXJyZW50ID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZUxpc3QodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnJlY29yZHMpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2YtcmVmZXJlbmNlXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwic3dmLXJlZmVyZW5jZS0taW5wdXRcIiBsYWJlbD17dGhpcy5wcm9wcy5sYWJlbH0gb25JbnB1dD17dGhpcy5vbkNoYW5nZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblJlZmVyZW5jZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBsYWJlbDogXCJcIlxyXG59XHJcblxyXG5SZWZlcmVuY2UucHJvcFR5cGVzID0ge1xyXG4gICAgb25WYWx1ZUNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICB2YWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRlY2xhcmF0aXZlQWN0aW9uc1Byb3BzOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVmZXJlbmNlIl19