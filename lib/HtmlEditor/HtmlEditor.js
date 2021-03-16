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

var _styles = _interopRequireDefault(require("./styles.css"));

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
                _context.prev = 1;
                _context.next = 4;
                return (0, _crossFetch["default"])(url, _objectSpread(_objectSpread({}, params), {}, {
                  credentials: 'same-origin',
                  headers: {
                    'X-Transaction-Source': window.transaction_source,
                    'X-UserToken': window.g_ck,
                    'Content-Type': 'multipart/form-data'
                  }
                }));

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();

              case 7:
                resultJson = _context.sent;
                console.log(resultJson);
                result = resultJson.result.slice(0);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 15:
                return _context.abrupt("return", result);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 12]]);
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
          children: _styles["default"]
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
          plugins: ["link,lists,advlist,table,powerpaste,searchreplace,preview,fullscreen,a11y_fixes,placeholder,readonlynoborder,code"],
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

              editor.dom.setStyle(editor.getContentAreaContainer(), "height", height);
            },
            width: "99%" // images_upload_handler: (blobInfo, success, failure) => {
            //     const selectedFile = blobInfo.blob();
            //     const uuid = uuidv4().split("-").join("");
            //     const data = new FormData();
            //     data.append('table_name', `ZZ_YYsys_attachment`);
            //     data.append('table_sys_id', uuid);
            //     data.append('file', selectedFile);
            //     console.log("PROSHLO", uuid, selectedFile)
            //     const params = {
            //         method: "POST",
            //         data
            //     }
            //     // console.log(this);
            //     if (!!selectedFile.size) {
            //         console.log(selectedFile.size);
            //         this.fetchRequest({url: `${window.location.origin}/api/now/attachment/upload`, params})
            //     }
            // }

          }
        })]
      });
    }
  }]);

  return HtmlEditor;
}(React.Component);

exports["default"] = HtmlEditor;
HtmlEditor.defaultProps = {
  toolbar: 'bold italic underline undo redo | fontselect fontsizeselect table | link unlink | code  | alignleft aligncenter alignright | bullist numlist | fullscreen',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IdG1sRWRpdG9yL0h0bWxFZGl0b3IuanMiXSwibmFtZXMiOlsiSHRtbEVkaXRvciIsInByb3BzIiwiZmV0Y2hSZXF1ZXN0IiwidXJsIiwicGFyYW1zIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwid2luZG93IiwidHJhbnNhY3Rpb25fc291cmNlIiwiZ19jayIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdEpzb24iLCJjb25zb2xlIiwibG9nIiwicmVzdWx0Iiwic2xpY2UiLCJlcnJvciIsInN0YXRlIiwiaW5wdXRWYWwiLCJUaW55TWNFZGl0b3IiLCJjaGFuZ2VJbnB1dCIsImJpbmQiLCJjb250ZW50Iiwic2V0U3RhdGUiLCJvblZhbHVlQ2hhbmdlIiwidG9vbGJhciIsInJlYWRvbmx5IiwibGFiZWwiLCJyZXF1aXJlZCIsImxhYmVsQ29sb3IiLCJzdHlsZXMiLCJjb2xvciIsImZvY3VzIiwibWVudWJhciIsInN0YXR1c2JhciIsImluaXRfaW5zdGFuY2VfY2FsbGJhY2siLCJlZGl0b3IiLCJoZWlnaHQiLCJNYXRoIiwicm91bmQiLCJkb2N1bWVudCIsImJvZHkiLCJvZmZzZXRIZWlnaHQiLCJzZWxlY3Rpb24iLCJzZXRDb250ZW50Iiwibm9vcCIsInNldE1vZGUiLCJkb20iLCJzZXRTdHlsZSIsImdldENvbnRlbnRBcmVhQ29udGFpbmVyIiwid2lkdGgiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7QUFDakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxVQWNuQkMsWUFkbUI7QUFBQSwwRUFjSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGdCQUFBQSxHQUFULFFBQVNBLEdBQVQscUJBQWNDLE1BQWQsRUFBY0EsTUFBZCw0QkFBdUIsRUFBdkI7QUFBQTtBQUFBO0FBQUEsdUJBR2dCLDRCQUFNRCxHQUFOLGtDQUNoQkMsTUFEZ0I7QUFFbkJDLGtCQUFBQSxXQUFXLEVBQUUsYUFGTTtBQUduQkMsa0JBQUFBLE9BQU8sRUFBRTtBQUNMLDRDQUF3QkMsTUFBTSxDQUFDQyxrQkFEMUI7QUFFTCxtQ0FBZUQsTUFBTSxDQUFDRSxJQUZqQjtBQUdMLG9DQUFnQjtBQUhYO0FBSFUsbUJBSGhCOztBQUFBO0FBR0RDLGdCQUFBQSxRQUhDO0FBQUE7QUFBQSx1QkFZa0JBLFFBQVEsQ0FBQ0MsSUFBVCxFQVpsQjs7QUFBQTtBQVlEQyxnQkFBQUEsVUFaQztBQWFQQyxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFVBQVo7QUFDQUcsZ0JBQUFBLE1BQU0sR0FBR0gsVUFBVSxDQUFDRyxNQUFYLENBQWtCQyxLQUFsQixDQUF3QixDQUF4QixDQUFUO0FBZE87QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFnQlBILGdCQUFBQSxPQUFPLENBQUNJLEtBQVI7O0FBaEJPO0FBQUEsaURBa0JKRixNQWxCSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQWRJOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVmLFVBQUtHLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxRQUFRLEVBQUUsRUFERDtBQUVUQyxNQUFBQSxZQUFZLEVBQUU7QUFGTCxLQUFiO0FBSUEsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQiwrQkFBbkI7QUFOZTtBQU9sQjs7OztXQUVELHFCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYztBQUFDTCxRQUFBQSxRQUFRLEVBQUVJO0FBQVgsT0FBZDtBQUNBLDBCQUFLdEIsS0FBTCw0REFBWXdCLGFBQVosQ0FBMEJGLE9BQTFCO0FBQ0g7OztXQXVCRCxrQkFBUztBQUFBOztBQUFBLHlCQVFELEtBQUt0QixLQVJKO0FBQUEsVUFFRHlCLE9BRkMsZ0JBRURBLE9BRkM7QUFBQSxVQUdESCxPQUhDLGdCQUdEQSxPQUhDO0FBQUEsVUFJREksUUFKQyxnQkFJREEsUUFKQztBQUFBLFVBS0RDLEtBTEMsZ0JBS0RBLEtBTEM7QUFBQSxVQU1EQyxRQU5DLGdCQU1EQSxRQU5DO0FBVUwsVUFBTUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLWixLQUFMLENBQVdDLFFBQWIsSUFBeUJVLFFBQXpCLEdBQW9DLGlCQUFwQyxHQUF3RCxnQkFBM0U7QUFFQSwwQkFDSTtBQUFBLGdDQUNJO0FBQUEsb0JBQVFFO0FBQVIsVUFESixFQUVLLENBQUMsQ0FBQ0gsS0FBRixJQUFXQyxRQUFYLGdCQUFzQjtBQUFLLFVBQUEsU0FBUyxFQUFDLG1CQUFmO0FBQUEsa0NBQ25CO0FBQU8sWUFBQSxLQUFLLEVBQUU7QUFBQ0csY0FBQUEsS0FBSyxFQUFFRjtBQUFSLGFBQWQ7QUFBbUMsWUFBQSxPQUFPLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUNaLEtBQUwsQ0FBV0UsWUFBWCxDQUF3QmEsS0FBeEIsRUFBTjtBQUFBLGFBQTVDO0FBQUEsc0JBQW9GTDtBQUFwRixZQURtQixFQUVsQkMsUUFBUSxnQkFBRyxxQkFBQyxXQUFEO0FBQU0sWUFBQSxLQUFLLEVBQUVDLFVBQWI7QUFBeUIsWUFBQSxJQUFJLEVBQUMsVUFBOUI7QUFBeUMsWUFBQSxJQUFJLEVBQUM7QUFBOUMsWUFBSCxHQUEyRCxJQUZqRDtBQUFBLFVBQXRCLEdBR1EsSUFMYixlQU1JLHFCQUFDLG9CQUFEO0FBQ0ksVUFBQSxPQUFPLEVBQUVKLE9BRGI7QUFFSSxVQUFBLE9BQU8sRUFBRSxDQUNMLG1IQURLLENBRmI7QUFLSSxVQUFBLGNBQWMsRUFBRyxLQUFLTCxXQUwxQjtBQU1JLFVBQUEsSUFBSSxFQUFFO0FBQ0ZhLFlBQUFBLE9BQU8sRUFBRSxLQURQO0FBRUZDLFlBQUFBLFNBQVMsRUFBRSxLQUZUO0FBR0ZDLFlBQUFBLHNCQUFzQixFQUFFLGdDQUFDQyxNQUFELEVBQVk7QUFDaEMsa0JBQU1DLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBSSxDQUFDckMsS0FBTCxDQUFXcUMsTUFBYixHQUFzQixNQUFJLENBQUNyQyxLQUFMLENBQVdxQyxNQUFqQyxhQUE2Q0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxZQUFkLEdBQTZCLEdBQXhDLElBQStDLEVBQTVGLE9BQWY7QUFDQSxlQUFDLENBQUNwQixPQUFGLEdBQVljLE1BQU0sQ0FBQ08sU0FBUCxDQUFpQkMsVUFBakIsQ0FBNEJ0QixPQUE1QixDQUFaLEdBQW1EdUIsV0FBbkQ7QUFDQW5CLGNBQUFBLFFBQVEsR0FBR1UsTUFBTSxDQUFDVSxPQUFQLENBQWUsVUFBZixDQUFILEdBQWdDRCxXQUF4Qzs7QUFDQSxjQUFBLE1BQUksQ0FBQ3RCLFFBQUwsQ0FBYztBQUFDSixnQkFBQUEsWUFBWSxFQUFFaUI7QUFBZixlQUFkOztBQUNBQSxjQUFBQSxNQUFNLENBQUNXLEdBQVAsQ0FBV0MsUUFBWCxDQUFvQlosTUFBTSxDQUFDYSx1QkFBUCxFQUFwQixFQUFzRCxRQUF0RCxFQUFnRVosTUFBaEU7QUFDSCxhQVRDO0FBVUZhLFlBQUFBLEtBQUssRUFBRSxLQVZMLENBV0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTVCRTtBQU5WLFVBTko7QUFBQSxRQURKO0FBOENIOzs7O0VBOUZtQ0MsS0FBSyxDQUFDQyxTOzs7QUFpRzlDckQsVUFBVSxDQUFDc0QsWUFBWCxHQUEwQjtBQUN0QjVCLEVBQUFBLE9BQU8sRUFBRSwySkFEYTtBQUV0QkQsRUFBQUEsYUFBYSxFQUFFcUIsV0FGTztBQUd0QnZCLEVBQUFBLE9BQU8sRUFBRSxFQUhhO0FBSXRCSSxFQUFBQSxRQUFRLEVBQUUsS0FKWTtBQUt0QkMsRUFBQUEsS0FBSyxFQUFFLEVBTGU7QUFNdEJDLEVBQUFBLFFBQVEsRUFBRSxLQU5ZO0FBT3RCUyxFQUFBQSxNQUFNLEVBQUU7QUFQYyxDQUExQjtBQVVBdEMsVUFBVSxDQUFDdUQsU0FBWCxHQUF1QjtBQUNuQjdCLEVBQUFBLE9BQU8sRUFBRTZCLHNCQUFVQyxNQURBO0FBRW5CL0IsRUFBQUEsYUFBYSxFQUFFOEIsc0JBQVVFLElBRk47QUFHbkJsQyxFQUFBQSxPQUFPLEVBQUVnQyxzQkFBVUMsTUFIQTtBQUluQjdCLEVBQUFBLFFBQVEsRUFBRTRCLHNCQUFVRyxJQUpEO0FBS25COUIsRUFBQUEsS0FBSyxFQUFFMkIsc0JBQVVDLE1BTEU7QUFNbkIzQixFQUFBQSxRQUFRLEVBQUUwQixzQkFBVUcsSUFORDtBQU9uQnBCLEVBQUFBLE1BQU0sRUFBRWlCLHNCQUFVQztBQVBDLENBQXZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7RWRpdG9yfSBmcm9tIFwiQHRpbnltY2UvdGlueW1jZS1yZWFjdFwiO1xyXG5pbXBvcnQge25vb3B9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcclxuaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gXCJ1dWlkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImNyb3NzLWZldGNoXCI7XHJcbmltcG9ydCB7SWNvbn0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdG1sRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlucHV0VmFsOiBcIlwiLFxyXG4gICAgICAgICAgICBUaW55TWNFZGl0b3I6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJbnB1dCA9IHRoaXMuY2hhbmdlSW5wdXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VJbnB1dChjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXRWYWw6IGNvbnRlbnR9KTtcclxuICAgICAgICB0aGlzLnByb3BzPy5vblZhbHVlQ2hhbmdlKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoUmVxdWVzdCA9IGFzeW5jICh7IHVybCwgcGFyYW1zID0ge30gfSkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdYLVRyYW5zYWN0aW9uLVNvdXJjZSc6IHdpbmRvdy50cmFuc2FjdGlvbl9zb3VyY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1gtVXNlclRva2VuJzogd2luZG93LmdfY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdEpzb24pXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdEpzb24ucmVzdWx0LnNsaWNlKDAsKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICB0b29sYmFyLFxyXG4gICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICByZWFkb25seSxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgICAgICAvLyBoZWlnaHRcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgbGFiZWxDb2xvciA9ICEhdGhpcy5zdGF0ZS5pbnB1dFZhbCAmJiByZXF1aXJlZCA/IFwicmdiKDk5LDExNCwxMTYpXCIgOiBcInJnYigyMDAsNjAsNTQpXCIgXHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZT57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICB7ISFsYWJlbCB8fCByZXF1aXJlZCA/IDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLWxhYmVsLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tjb2xvcjogbGFiZWxDb2xvcn19IG9uQ2xpY2s9eygpID0+IHRoaXMuc3RhdGUuVGlueU1jRWRpdG9yLmZvY3VzKCl9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXF1aXJlZCA/IDxJY29uIGNvbG9yPXtsYWJlbENvbG9yfSBpY29uPVwiYXN0ZXJpc2tcIiBzaXplPVwieHNcIiAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI9e3Rvb2xiYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2lucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmssbGlzdHMsYWR2bGlzdCx0YWJsZSxwb3dlcnBhc3RlLHNlYXJjaHJlcGxhY2UscHJldmlldyxmdWxsc2NyZWVuLGExMXlfZml4ZXMscGxhY2Vob2xkZXIscmVhZG9ubHlub2JvcmRlcixjb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRWRpdG9yQ2hhbmdlID17dGhpcy5jaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBpbml0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNiYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0X2luc3RhbmNlX2NhbGxiYWNrOiAoZWRpdG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSAhIXRoaXMucHJvcHMuaGVpZ2h0ID8gdGhpcy5wcm9wcy5oZWlnaHQgOiBgJHtNYXRoLnJvdW5kKGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0ICogMC42KSAtIDM2fXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhY29udGVudCA/IGVkaXRvci5zZWxlY3Rpb24uc2V0Q29udGVudChjb250ZW50KSA6IG5vb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seSA/IGVkaXRvci5zZXRNb2RlKFwicmVhZG9ubHlcIikgOiBub29wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7VGlueU1jRWRpdG9yOiBlZGl0b3J9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yLmRvbS5zZXRTdHlsZShlZGl0b3IuZ2V0Q29udGVudEFyZWFDb250YWluZXIoKSwgXCJoZWlnaHRcIiwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTklXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGltYWdlc191cGxvYWRfaGFuZGxlcjogKGJsb2JJbmZvLCBzdWNjZXNzLCBmYWlsdXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBzZWxlY3RlZEZpbGUgPSBibG9iSW5mby5ibG9iKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCB1dWlkID0gdXVpZHY0KCkuc3BsaXQoXCItXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBkYXRhLmFwcGVuZCgndGFibGVfbmFtZScsIGBaWl9ZWXN5c19hdHRhY2htZW50YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBkYXRhLmFwcGVuZCgndGFibGVfc3lzX2lkJywgdXVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIHNlbGVjdGVkRmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlBST1NITE9cIiwgdXVpZCwgc2VsZWN0ZWRGaWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoISFzZWxlY3RlZEZpbGUuc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRmlsZS5zaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmZldGNoUmVxdWVzdCh7dXJsOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGkvbm93L2F0dGFjaG1lbnQvdXBsb2FkYCwgcGFyYW1zfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5IdG1sRWRpdG9yLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHRvb2xiYXI6ICdib2xkIGl0YWxpYyB1bmRlcmxpbmUgdW5kbyByZWRvIHwgZm9udHNlbGVjdCBmb250c2l6ZXNlbGVjdCB0YWJsZSB8IGxpbmsgdW5saW5rIHwgY29kZSAgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGJ1bGxpc3QgbnVtbGlzdCB8IGZ1bGxzY3JlZW4nLFxyXG4gICAgb25WYWx1ZUNoYW5nZTogbm9vcCxcclxuICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICByZWFkb25seTogZmFsc2UsXHJcbiAgICBsYWJlbDogXCJcIixcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIGhlaWdodDogXCJcIlxyXG59XHJcblxyXG5IdG1sRWRpdG9yLnByb3BUeXBlcyA9IHtcclxuICAgIHRvb2xiYXI6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvblZhbHVlQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIGNvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICByZWFkb25seTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGhlaWdodDogcHJvcFR5cGVzLnN0cmluZ1xyXG59Il19