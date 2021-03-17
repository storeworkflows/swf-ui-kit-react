"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _tinymceReact = require("@tinymce/tinymce-react");

var _utils = require("../../lib/utils");

var _uuid = require("uuid");

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

var _index = require("../index");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HtmlEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(HtmlEditor, _React$Component);

  var _super = _createSuper(HtmlEditor);

  function HtmlEditor(props) {
    var _this;

    _classCallCheck(this, HtmlEditor);

    _this = _super.call(this, props);

    _this.fetchRequest = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var url, _ref$params, params, result, response, resultJson;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = _ref.url, _ref$params = _ref.params, params = _ref$params === void 0 ? {} : _ref$params;
                console.log("params", params, "url", url);
                _context.next = 4;
                return (0, _crossFetch["default"])(url, _objectSpread(_objectSpread({}, params), {}, {
                  credentials: 'same-origin',
                  headers: {
                    'X-Transaction-Source': window.transaction_source,
                    'X-UserToken': window.g_ck,
                    'Content-Type': 'multipart/form-data',
                    'Accept': "*/*"
                  }
                }));

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();

              case 7:
                resultJson = _context.sent;
                result = resultJson.result;
                console.log(resultJson);
                return _context.abrupt("return", result);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.state = {
      inputVal: "",
      TinyMcEditor: null
    };
    _this.changeInput = _this.changeInput.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HtmlEditor, [{
    key: "changeInput",
    value: function changeInput(content) {
      var _this$props;

      this.setState({
        inputVal: content
      });
      (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.onValueChange(content);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          toolbar = _this$props2.toolbar,
          content = _this$props2.content,
          readonly = _this$props2.readonly,
          label = _this$props2.label,
          required = _this$props2.required;
      var labelColor = !!this.state.inputVal && required ? "rgb(99,114,116)" : "rgb(200,60,54)";
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          children: styles
        }), !!label || required ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "editor-label-area",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            style: {
              color: labelColor
            },
            onClick: function onClick() {
              return _this2.state.TinyMcEditor.focus();
            },
            children: label
          }), required ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Icon, {
            color: labelColor,
            icon: "asterisk",
            size: "xs"
          }) : null]
        }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_tinymceReact.Editor, {
          toolbar: toolbar,
          plugins: ["link,lists,advlist,table,powerpaste,searchreplace,preview,fullscreen,a11y_fixes,placeholder,readonlynoborder,code,textcolor"],
          onEditorChange: this.changeInput,
          init: {
            menubar: false,
            statusbar: false,
            init_instance_callback: function init_instance_callback(editor) {
              var height = !!_this2.props.height ? _this2.props.height : "".concat(Math.round(document.body.offsetHeight * 0.6) - 36, "px");
              !!content ? editor.selection.setContent(content) : _utils.noop;
              readonly ? editor.setMode("readonly") : _utils.noop;

              _this2.setState({
                TinyMcEditor: editor
              });

              editor.dom.setStyle(editor.iframeElement, "height", height);
            },
            width: "99%",
            // height: 0,
            document_base_url: window.location.origin,
            images_upload_handler: function images_upload_handler(blobInfo, success, failure) {
              var selectedFile = blobInfo.blob();
              var uuid = (0, _uuid.v4)().split("-").join("");
              var data = new FormData();
              data.append('table_name', "ZZ_YYsys_attachment");
              data.append('table_sys_id', uuid);
              data.append('file', selectedFile);

              if (data.has("file")) {
                (0, _crossFetch["default"])("".concat(window.location.origin, "/api/now/attachment/upload"), {
                  method: "POST",
                  headers: {
                    'X-UserToken': window.g_ck,
                    'Content-Type': 'multipart/form-data'
                  },
                  data: data
                }).then(function (res) {
                  return console.log(res.json());
                });
              } // `${window.location.origin}/api/now/attachment/upload`

            }
          }
        })]
      });
    }
  }]);

  return HtmlEditor;
}(React.Component);

exports["default"] = HtmlEditor;
HtmlEditor.defaultProps = {
  toolbar: 'bold italic underline undo redo | forecolor backcolor | fontselect fontsizeselect table | link unlink | code  | alignleft aligncenter alignright | bullist numlist | fullscreen',
  onValueChange: _utils.noop,
  content: "",
  readonly: false,
  label: "",
  required: false,
  height: ""
};
HtmlEditor.propTypes = {
  toolbar: _propTypes["default"].string,
  onValueChange: _propTypes["default"].func,
  content: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  height: _propTypes["default"].string
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IdG1sRWRpdG9yL0h0bWxFZGl0b3IuanMiXSwibmFtZXMiOlsiSHRtbEVkaXRvciIsInByb3BzIiwiZmV0Y2hSZXF1ZXN0IiwidXJsIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIndpbmRvdyIsInRyYW5zYWN0aW9uX3NvdXJjZSIsImdfY2siLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHRKc29uIiwicmVzdWx0Iiwic3RhdGUiLCJpbnB1dFZhbCIsIlRpbnlNY0VkaXRvciIsImNoYW5nZUlucHV0IiwiYmluZCIsImNvbnRlbnQiLCJzZXRTdGF0ZSIsIm9uVmFsdWVDaGFuZ2UiLCJ0b29sYmFyIiwicmVhZG9ubHkiLCJsYWJlbCIsInJlcXVpcmVkIiwibGFiZWxDb2xvciIsInN0eWxlcyIsImNvbG9yIiwiZm9jdXMiLCJtZW51YmFyIiwic3RhdHVzYmFyIiwiaW5pdF9pbnN0YW5jZV9jYWxsYmFjayIsImVkaXRvciIsImhlaWdodCIsIk1hdGgiLCJyb3VuZCIsImRvY3VtZW50IiwiYm9keSIsIm9mZnNldEhlaWdodCIsInNlbGVjdGlvbiIsInNldENvbnRlbnQiLCJub29wIiwic2V0TW9kZSIsImRvbSIsInNldFN0eWxlIiwiaWZyYW1lRWxlbWVudCIsIndpZHRoIiwiZG9jdW1lbnRfYmFzZV91cmwiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImltYWdlc191cGxvYWRfaGFuZGxlciIsImJsb2JJbmZvIiwic3VjY2VzcyIsImZhaWx1cmUiLCJzZWxlY3RlZEZpbGUiLCJibG9iIiwidXVpZCIsInNwbGl0Iiwiam9pbiIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImhhcyIsIm1ldGhvZCIsInRoZW4iLCJyZXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7QUFDakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxVQWNuQkMsWUFkbUI7QUFBQSwwRUFjSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGdCQUFBQSxHQUFULFFBQVNBLEdBQVQscUJBQWNDLE1BQWQsRUFBY0EsTUFBZCw0QkFBdUIsRUFBdkI7QUFFWEMsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLE1BQXRCLEVBQThCLEtBQTlCLEVBQXFDRCxHQUFyQztBQUZXO0FBQUEsdUJBR1ksNEJBQU1BLEdBQU4sa0NBQ2hCQyxNQURnQjtBQUVuQkcsa0JBQUFBLFdBQVcsRUFBRSxhQUZNO0FBR25CQyxrQkFBQUEsT0FBTyxFQUFFO0FBQ0wsNENBQXdCQyxNQUFNLENBQUNDLGtCQUQxQjtBQUVMLG1DQUFlRCxNQUFNLENBQUNFLElBRmpCO0FBR0wsb0NBQWdCLHFCQUhYO0FBSUwsOEJBQVU7QUFKTDtBQUhVLG1CQUhaOztBQUFBO0FBR0xDLGdCQUFBQSxRQUhLO0FBQUE7QUFBQSx1QkFhY0EsUUFBUSxDQUFDQyxJQUFULEVBYmQ7O0FBQUE7QUFhTEMsZ0JBQUFBLFVBYks7QUFjWEMsZ0JBQUFBLE1BQU0sR0FBR0QsVUFBVSxDQUFDQyxNQUFwQjtBQUNBVixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlRLFVBQVo7QUFmVyxpREFpQkpDLE1BakJJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BZEk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWYsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLFFBQVEsRUFBRSxFQUREO0FBRVRDLE1BQUFBLFlBQVksRUFBRTtBQUZMLEtBQWI7QUFJQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLCtCQUFuQjtBQU5lO0FBT2xCOzs7O1dBRUQscUJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDakIsV0FBS0MsUUFBTCxDQUFjO0FBQUNMLFFBQUFBLFFBQVEsRUFBRUk7QUFBWCxPQUFkO0FBQ0EsMEJBQUtwQixLQUFMLDREQUFZc0IsYUFBWixDQUEwQkYsT0FBMUI7QUFDSDs7O1dBc0JELGtCQUFTO0FBQUE7O0FBQUEseUJBT0QsS0FBS3BCLEtBUEo7QUFBQSxVQUVEdUIsT0FGQyxnQkFFREEsT0FGQztBQUFBLFVBR0RILE9BSEMsZ0JBR0RBLE9BSEM7QUFBQSxVQUlESSxRQUpDLGdCQUlEQSxRQUpDO0FBQUEsVUFLREMsS0FMQyxnQkFLREEsS0FMQztBQUFBLFVBTURDLFFBTkMsZ0JBTURBLFFBTkM7QUFTTCxVQUFNQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEtBQUtaLEtBQUwsQ0FBV0MsUUFBYixJQUF5QlUsUUFBekIsR0FBb0MsaUJBQXBDLEdBQXdELGdCQUEzRTtBQUVBLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBUUU7QUFBUixVQURKLEVBRUssQ0FBQyxDQUFDSCxLQUFGLElBQVdDLFFBQVgsZ0JBQXNCO0FBQUssVUFBQSxTQUFTLEVBQUMsbUJBQWY7QUFBQSxrQ0FDbkI7QUFBTyxZQUFBLEtBQUssRUFBRTtBQUFDRyxjQUFBQSxLQUFLLEVBQUVGO0FBQVIsYUFBZDtBQUFtQyxZQUFBLE9BQU8sRUFBRTtBQUFBLHFCQUFNLE1BQUksQ0FBQ1osS0FBTCxDQUFXRSxZQUFYLENBQXdCYSxLQUF4QixFQUFOO0FBQUEsYUFBNUM7QUFBQSxzQkFBb0ZMO0FBQXBGLFlBRG1CLEVBRWxCQyxRQUFRLGdCQUFHLHFCQUFDLFdBQUQ7QUFBTSxZQUFBLEtBQUssRUFBRUMsVUFBYjtBQUF5QixZQUFBLElBQUksRUFBQyxVQUE5QjtBQUF5QyxZQUFBLElBQUksRUFBQztBQUE5QyxZQUFILEdBQTJELElBRmpEO0FBQUEsVUFBdEIsR0FHUSxJQUxiLGVBTUkscUJBQUMsb0JBQUQ7QUFDSSxVQUFBLE9BQU8sRUFBRUosT0FEYjtBQUVJLFVBQUEsT0FBTyxFQUFFLENBQ0wsNkhBREssQ0FGYjtBQUtJLFVBQUEsY0FBYyxFQUFHLEtBQUtMLFdBTDFCO0FBTUksVUFBQSxJQUFJLEVBQUU7QUFDRmEsWUFBQUEsT0FBTyxFQUFFLEtBRFA7QUFFRkMsWUFBQUEsU0FBUyxFQUFFLEtBRlQ7QUFHRkMsWUFBQUEsc0JBQXNCLEVBQUUsZ0NBQUNDLE1BQUQsRUFBWTtBQUNoQyxrQkFBTUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFJLENBQUNuQyxLQUFMLENBQVdtQyxNQUFiLEdBQXNCLE1BQUksQ0FBQ25DLEtBQUwsQ0FBV21DLE1BQWpDLGFBQTZDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsUUFBUSxDQUFDQyxJQUFULENBQWNDLFlBQWQsR0FBNkIsR0FBeEMsSUFBK0MsRUFBNUYsT0FBZjtBQUNBLGVBQUMsQ0FBQ3BCLE9BQUYsR0FBWWMsTUFBTSxDQUFDTyxTQUFQLENBQWlCQyxVQUFqQixDQUE0QnRCLE9BQTVCLENBQVosR0FBbUR1QixXQUFuRDtBQUNBbkIsY0FBQUEsUUFBUSxHQUFHVSxNQUFNLENBQUNVLE9BQVAsQ0FBZSxVQUFmLENBQUgsR0FBZ0NELFdBQXhDOztBQUNBLGNBQUEsTUFBSSxDQUFDdEIsUUFBTCxDQUFjO0FBQUNKLGdCQUFBQSxZQUFZLEVBQUVpQjtBQUFmLGVBQWQ7O0FBQ0FBLGNBQUFBLE1BQU0sQ0FBQ1csR0FBUCxDQUFXQyxRQUFYLENBQW9CWixNQUFNLENBQUNhLGFBQTNCLEVBQTBDLFFBQTFDLEVBQW9EWixNQUFwRDtBQUNILGFBVEM7QUFVRmEsWUFBQUEsS0FBSyxFQUFFLEtBVkw7QUFXRjtBQUNBQyxZQUFBQSxpQkFBaUIsRUFBRXpDLE1BQU0sQ0FBQzBDLFFBQVAsQ0FBZ0JDLE1BWmpDO0FBYUZDLFlBQUFBLHFCQUFxQixFQUFFLCtCQUFDQyxRQUFELEVBQVdDLE9BQVgsRUFBb0JDLE9BQXBCLEVBQWdDO0FBQ25ELGtCQUFNQyxZQUFZLEdBQUdILFFBQVEsQ0FBQ0ksSUFBVCxFQUFyQjtBQUNBLGtCQUFNQyxJQUFJLEdBQUcsZ0JBQVNDLEtBQVQsQ0FBZSxHQUFmLEVBQW9CQyxJQUFwQixDQUF5QixFQUF6QixDQUFiO0FBQ0Esa0JBQU1DLElBQUksR0FBRyxJQUFJQyxRQUFKLEVBQWI7QUFDQUQsY0FBQUEsSUFBSSxDQUFDRSxNQUFMLENBQVksWUFBWjtBQUNBRixjQUFBQSxJQUFJLENBQUNFLE1BQUwsQ0FBWSxjQUFaLEVBQTRCTCxJQUE1QjtBQUNBRyxjQUFBQSxJQUFJLENBQUNFLE1BQUwsQ0FBWSxNQUFaLEVBQW9CUCxZQUFwQjs7QUFDQSxrQkFBSUssSUFBSSxDQUFDRyxHQUFMLENBQVMsTUFBVCxDQUFKLEVBQXNCO0FBQ2xCLHNEQUFTeEQsTUFBTSxDQUFDMEMsUUFBUCxDQUFnQkMsTUFBekIsaUNBQTZEO0FBQ3pEYyxrQkFBQUEsTUFBTSxFQUFFLE1BRGlEO0FBRXpEMUQsa0JBQUFBLE9BQU8sRUFBRTtBQUNMLG1DQUFlQyxNQUFNLENBQUNFLElBRGpCO0FBRUwsb0NBQWdCO0FBRlgsbUJBRmdEO0FBTXpEbUQsa0JBQUFBLElBQUksRUFBSkE7QUFOeUQsaUJBQTdELEVBUUNLLElBUkQsQ0FRTSxVQUFBQyxHQUFHO0FBQUEseUJBQUkvRCxPQUFPLENBQUNDLEdBQVIsQ0FBWThELEdBQUcsQ0FBQ3ZELElBQUosRUFBWixDQUFKO0FBQUEsaUJBUlQ7QUFTSCxlQWpCa0QsQ0FrQm5EOztBQUNIO0FBaENDO0FBTlYsVUFOSjtBQUFBLFFBREo7QUFrREg7Ozs7RUFoR21Dd0QsS0FBSyxDQUFDQyxTOzs7QUFtRzlDdEUsVUFBVSxDQUFDdUUsWUFBWCxHQUEwQjtBQUN0Qi9DLEVBQUFBLE9BQU8sRUFBRSxpTEFEYTtBQUV0QkQsRUFBQUEsYUFBYSxFQUFFcUIsV0FGTztBQUd0QnZCLEVBQUFBLE9BQU8sRUFBRSxFQUhhO0FBSXRCSSxFQUFBQSxRQUFRLEVBQUUsS0FKWTtBQUt0QkMsRUFBQUEsS0FBSyxFQUFFLEVBTGU7QUFNdEJDLEVBQUFBLFFBQVEsRUFBRSxLQU5ZO0FBT3RCUyxFQUFBQSxNQUFNLEVBQUU7QUFQYyxDQUExQjtBQVVBcEMsVUFBVSxDQUFDd0UsU0FBWCxHQUF1QjtBQUNuQmhELEVBQUFBLE9BQU8sRUFBRWdELHNCQUFVQyxNQURBO0FBRW5CbEQsRUFBQUEsYUFBYSxFQUFFaUQsc0JBQVVFLElBRk47QUFHbkJyRCxFQUFBQSxPQUFPLEVBQUVtRCxzQkFBVUMsTUFIQTtBQUluQmhELEVBQUFBLFFBQVEsRUFBRStDLHNCQUFVRyxJQUpEO0FBS25CakQsRUFBQUEsS0FBSyxFQUFFOEMsc0JBQVVDLE1BTEU7QUFNbkI5QyxFQUFBQSxRQUFRLEVBQUU2QyxzQkFBVUcsSUFORDtBQU9uQnZDLEVBQUFBLE1BQU0sRUFBRW9DLHNCQUFVQztBQVBDLENBQXZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7RWRpdG9yfSBmcm9tIFwiQHRpbnltY2UvdGlueW1jZS1yZWFjdFwiO1xyXG5pbXBvcnQge25vb3B9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcclxuaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gXCJ1dWlkXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiY3Jvc3MtZmV0Y2hcIjtcclxuaW1wb3J0IHtJY29ufSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0bWxFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW5wdXRWYWw6IFwiXCIsXHJcbiAgICAgICAgICAgIFRpbnlNY0VkaXRvcjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYW5nZUlucHV0ID0gdGhpcy5jaGFuZ2VJbnB1dC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUlucHV0KGNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dFZhbDogY29udGVudH0pO1xyXG4gICAgICAgIHRoaXMucHJvcHM/Lm9uVmFsdWVDaGFuZ2UoY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hSZXF1ZXN0ID0gYXN5bmMgKHsgdXJsLCBwYXJhbXMgPSB7fSB9KSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmFtc1wiLCBwYXJhbXMsIFwidXJsXCIsIHVybClcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnWC1UcmFuc2FjdGlvbi1Tb3VyY2UnOiB3aW5kb3cudHJhbnNhY3Rpb25fc291cmNlLFxyXG4gICAgICAgICAgICAgICAgJ1gtVXNlclRva2VuJzogd2luZG93LmdfY2ssXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6IFwiKi8qXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCByZXN1bHRKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdEpzb24ucmVzdWx0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdEpzb24pXHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgdG9vbGJhcixcclxuICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgcmVhZG9ubHksXHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBsYWJlbENvbG9yID0gISF0aGlzLnN0YXRlLmlucHV0VmFsICYmIHJlcXVpcmVkID8gXCJyZ2IoOTksMTE0LDExNilcIiA6IFwicmdiKDIwMCw2MCw1NClcIiBcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIHshIWxhYmVsIHx8IHJlcXVpcmVkID8gPGRpdiBjbGFzc05hbWU9XCJlZGl0b3ItbGFiZWwtYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2NvbG9yOiBsYWJlbENvbG9yfX0gb25DbGljaz17KCkgPT4gdGhpcy5zdGF0ZS5UaW55TWNFZGl0b3IuZm9jdXMoKX0+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlcXVpcmVkID8gPEljb24gY29sb3I9e2xhYmVsQ29sb3J9IGljb249XCJhc3Rlcmlza1wiIHNpemU9XCJ4c1wiIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcj17dG9vbGJhcn1cclxuICAgICAgICAgICAgICAgICAgICBwbHVnaW5zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGluayxsaXN0cyxhZHZsaXN0LHRhYmxlLHBvd2VycGFzdGUsc2VhcmNocmVwbGFjZSxwcmV2aWV3LGZ1bGxzY3JlZW4sYTExeV9maXhlcyxwbGFjZWhvbGRlcixyZWFkb25seW5vYm9yZGVyLGNvZGUsdGV4dGNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRWRpdG9yQ2hhbmdlID17dGhpcy5jaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBpbml0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNiYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0X2luc3RhbmNlX2NhbGxiYWNrOiAoZWRpdG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSAhIXRoaXMucHJvcHMuaGVpZ2h0ID8gdGhpcy5wcm9wcy5oZWlnaHQgOiBgJHtNYXRoLnJvdW5kKGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0ICogMC42KSAtIDM2fXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhY29udGVudCA/IGVkaXRvci5zZWxlY3Rpb24uc2V0Q29udGVudChjb250ZW50KSA6IG5vb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seSA/IGVkaXRvci5zZXRNb2RlKFwicmVhZG9ubHlcIikgOiBub29wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7VGlueU1jRWRpdG9yOiBlZGl0b3J9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yLmRvbS5zZXRTdHlsZShlZGl0b3IuaWZyYW1lRWxlbWVudCwgXCJoZWlnaHRcIiwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTklXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRfYmFzZV91cmw6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlc191cGxvYWRfaGFuZGxlcjogKGJsb2JJbmZvLCBzdWNjZXNzLCBmYWlsdXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEZpbGUgPSBibG9iSW5mby5ibG9iKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KCkuc3BsaXQoXCItXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgndGFibGVfbmFtZScsIGBaWl9ZWXN5c19hdHRhY2htZW50YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgndGFibGVfc3lzX2lkJywgdXVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIHNlbGVjdGVkRmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXMoXCJmaWxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXBpL25vdy9hdHRhY2htZW50L3VwbG9hZGAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1gtVXNlclRva2VuJzogd2luZG93LmdfY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcy5qc29uKCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXBpL25vdy9hdHRhY2htZW50L3VwbG9hZGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5IdG1sRWRpdG9yLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHRvb2xiYXI6ICdib2xkIGl0YWxpYyB1bmRlcmxpbmUgdW5kbyByZWRvIHwgZm9yZWNvbG9yIGJhY2tjb2xvciB8IGZvbnRzZWxlY3QgZm9udHNpemVzZWxlY3QgdGFibGUgfCBsaW5rIHVubGluayB8IGNvZGUgIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgfCBidWxsaXN0IG51bWxpc3QgfCBmdWxsc2NyZWVuJyxcclxuICAgIG9uVmFsdWVDaGFuZ2U6IG5vb3AsXHJcbiAgICBjb250ZW50OiBcIlwiLFxyXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgbGFiZWw6IFwiXCIsXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICBoZWlnaHQ6IFwiXCJcclxufVxyXG5cclxuSHRtbEVkaXRvci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0b29sYmFyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25WYWx1ZUNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcmVhZG9ubHk6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICByZXF1aXJlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBoZWlnaHQ6IHByb3BUeXBlcy5zdHJpbmdcclxufSJdfQ==