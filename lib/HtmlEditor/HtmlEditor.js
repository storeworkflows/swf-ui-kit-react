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
      (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.onValueChange(content); // console.log(content);
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
          apiKey: "b6bpe90lvjdq7atv9dmi24bl3l5mzf5kseh9ziaxzc2n0woz",
          toolbar: toolbar,
          plugins: ["link,lists,advlist,table,powerpaste,searchreplace,preview,fullscreen,a11y_fixes,placeholder,readonlynoborder,code"] // skin="lightgray"
          ,
          onEditorChange: this.changeInput,
          init: {
            menubar: false,
            statusbar: false,
            init_instance_callback: function init_instance_callback(editor) {
              !!content ? editor.selection.setContent(content) : _utils.noop;
              readonly ? editor.setMode("readonly") : _utils.noop;

              _this2.setState({
                TinyMcEditor: editor
              });
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
  required: false
};
HtmlEditor.propTypes = {
  toolbar: _propTypes["default"].string,
  onValueChange: _propTypes["default"].func,
  content: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IdG1sRWRpdG9yL0h0bWxFZGl0b3IuanMiXSwibmFtZXMiOlsiSHRtbEVkaXRvciIsInByb3BzIiwiZmV0Y2hSZXF1ZXN0IiwidXJsIiwicGFyYW1zIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwid2luZG93IiwidHJhbnNhY3Rpb25fc291cmNlIiwiZ19jayIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdEpzb24iLCJjb25zb2xlIiwibG9nIiwicmVzdWx0Iiwic2xpY2UiLCJlcnJvciIsInN0YXRlIiwiaW5wdXRWYWwiLCJUaW55TWNFZGl0b3IiLCJjaGFuZ2VJbnB1dCIsImJpbmQiLCJjb250ZW50Iiwic2V0U3RhdGUiLCJvblZhbHVlQ2hhbmdlIiwidG9vbGJhciIsInJlYWRvbmx5IiwibGFiZWwiLCJyZXF1aXJlZCIsImxhYmVsQ29sb3IiLCJzdHlsZXMiLCJjb2xvciIsImZvY3VzIiwibWVudWJhciIsInN0YXR1c2JhciIsImluaXRfaW5zdGFuY2VfY2FsbGJhY2siLCJlZGl0b3IiLCJzZWxlY3Rpb24iLCJzZXRDb250ZW50Iiwibm9vcCIsInNldE1vZGUiLCJ3aWR0aCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7OztBQUNqQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBZW5CQyxZQWZtQjtBQUFBLDBFQWVKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsZ0JBQUFBLEdBQVQsUUFBU0EsR0FBVCxxQkFBY0MsTUFBZCxFQUFjQSxNQUFkLDRCQUF1QixFQUF2QjtBQUFBO0FBQUE7QUFBQSx1QkFHZ0IsNEJBQU1ELEdBQU4sa0NBQ2hCQyxNQURnQjtBQUVuQkMsa0JBQUFBLFdBQVcsRUFBRSxhQUZNO0FBR25CQyxrQkFBQUEsT0FBTyxFQUFFO0FBQ0wsNENBQXdCQyxNQUFNLENBQUNDLGtCQUQxQjtBQUVMLG1DQUFlRCxNQUFNLENBQUNFLElBRmpCO0FBR0wsb0NBQWdCO0FBSFg7QUFIVSxtQkFIaEI7O0FBQUE7QUFHREMsZ0JBQUFBLFFBSEM7QUFBQTtBQUFBLHVCQVlrQkEsUUFBUSxDQUFDQyxJQUFULEVBWmxCOztBQUFBO0FBWURDLGdCQUFBQSxVQVpDO0FBYVBDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWjtBQUNBRyxnQkFBQUEsTUFBTSxHQUFHSCxVQUFVLENBQUNHLE1BQVgsQ0FBa0JDLEtBQWxCLENBQXdCLENBQXhCLENBQVQ7QUFkTztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWdCUEgsZ0JBQUFBLE9BQU8sQ0FBQ0ksS0FBUjs7QUFoQk87QUFBQSxpREFrQkpGLE1BbEJJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BZkk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWYsVUFBS0csS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLFFBQVEsRUFBRSxFQUREO0FBRVRDLE1BQUFBLFlBQVksRUFBRTtBQUZMLEtBQWI7QUFJQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLCtCQUFuQjtBQU5lO0FBT2xCOzs7O1dBRUQscUJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDakIsV0FBS0MsUUFBTCxDQUFjO0FBQUNMLFFBQUFBLFFBQVEsRUFBRUk7QUFBWCxPQUFkO0FBQ0EsMEJBQUt0QixLQUFMLDREQUFZd0IsYUFBWixDQUEwQkYsT0FBMUIsRUFGaUIsQ0FHakI7QUFDSDs7O1dBdUJELGtCQUFTO0FBQUE7O0FBQUEseUJBT0QsS0FBS3RCLEtBUEo7QUFBQSxVQUVEeUIsT0FGQyxnQkFFREEsT0FGQztBQUFBLFVBR0RILE9BSEMsZ0JBR0RBLE9BSEM7QUFBQSxVQUlESSxRQUpDLGdCQUlEQSxRQUpDO0FBQUEsVUFLREMsS0FMQyxnQkFLREEsS0FMQztBQUFBLFVBTURDLFFBTkMsZ0JBTURBLFFBTkM7QUFTTCxVQUFNQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEtBQUtaLEtBQUwsQ0FBV0MsUUFBYixJQUF5QlUsUUFBekIsR0FBb0MsaUJBQXBDLEdBQXdELGdCQUEzRTtBQUVBLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBUUU7QUFBUixVQURKLEVBRUssQ0FBQyxDQUFDSCxLQUFGLElBQVdDLFFBQVgsZ0JBQXNCO0FBQUssVUFBQSxTQUFTLEVBQUMsbUJBQWY7QUFBQSxrQ0FDbkI7QUFBTyxZQUFBLEtBQUssRUFBRTtBQUFDRyxjQUFBQSxLQUFLLEVBQUVGO0FBQVIsYUFBZDtBQUFtQyxZQUFBLE9BQU8sRUFBRTtBQUFBLHFCQUFNLE1BQUksQ0FBQ1osS0FBTCxDQUFXRSxZQUFYLENBQXdCYSxLQUF4QixFQUFOO0FBQUEsYUFBNUM7QUFBQSxzQkFBb0ZMO0FBQXBGLFlBRG1CLEVBRWxCQyxRQUFRLGdCQUFHLHFCQUFDLFdBQUQ7QUFBTSxZQUFBLEtBQUssRUFBRUMsVUFBYjtBQUF5QixZQUFBLElBQUksRUFBQyxVQUE5QjtBQUF5QyxZQUFBLElBQUksRUFBQztBQUE5QyxZQUFILEdBQTJELElBRmpEO0FBQUEsVUFBdEIsR0FHUSxJQUxiLGVBTUkscUJBQUMsb0JBQUQ7QUFDSSxVQUFBLE1BQU0sRUFBQyxrREFEWDtBQUVJLFVBQUEsT0FBTyxFQUFFSixPQUZiO0FBR0ksVUFBQSxPQUFPLEVBQUUsQ0FDTCxtSEFESyxDQUhiLENBTUk7QUFOSjtBQU9JLFVBQUEsY0FBYyxFQUFHLEtBQUtMLFdBUDFCO0FBUUksVUFBQSxJQUFJLEVBQUU7QUFDRmEsWUFBQUEsT0FBTyxFQUFFLEtBRFA7QUFFRkMsWUFBQUEsU0FBUyxFQUFFLEtBRlQ7QUFHRkMsWUFBQUEsc0JBQXNCLEVBQUUsZ0NBQUNDLE1BQUQsRUFBWTtBQUNoQyxlQUFDLENBQUNkLE9BQUYsR0FBWWMsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxVQUFqQixDQUE0QmhCLE9BQTVCLENBQVosR0FBbURpQixXQUFuRDtBQUNBYixjQUFBQSxRQUFRLEdBQUdVLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLFVBQWYsQ0FBSCxHQUFnQ0QsV0FBeEM7O0FBQ0EsY0FBQSxNQUFJLENBQUNoQixRQUFMLENBQWM7QUFBQ0osZ0JBQUFBLFlBQVksRUFBRWlCO0FBQWYsZUFBZDtBQUNILGFBUEM7QUFRRkssWUFBQUEsS0FBSyxFQUFFLEtBUkwsQ0FTRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBMUJFO0FBUlYsVUFOSjtBQUFBLFFBREo7QUE4Q0g7Ozs7RUE5Rm1DQyxLQUFLLENBQUNDLFM7OztBQWlHOUM1QyxVQUFVLENBQUM2QyxZQUFYLEdBQTBCO0FBQ3RCbkIsRUFBQUEsT0FBTyxFQUFFLDJKQURhO0FBRXRCRCxFQUFBQSxhQUFhLEVBQUVlLFdBRk87QUFHdEJqQixFQUFBQSxPQUFPLEVBQUUsRUFIYTtBQUl0QkksRUFBQUEsUUFBUSxFQUFFLEtBSlk7QUFLdEJDLEVBQUFBLEtBQUssRUFBRSxFQUxlO0FBTXRCQyxFQUFBQSxRQUFRLEVBQUU7QUFOWSxDQUExQjtBQVNBN0IsVUFBVSxDQUFDOEMsU0FBWCxHQUF1QjtBQUNuQnBCLEVBQUFBLE9BQU8sRUFBRW9CLHNCQUFVQyxNQURBO0FBRW5CdEIsRUFBQUEsYUFBYSxFQUFFcUIsc0JBQVVFLElBRk47QUFHbkJ6QixFQUFBQSxPQUFPLEVBQUV1QixzQkFBVUMsTUFIQTtBQUluQnBCLEVBQUFBLFFBQVEsRUFBRW1CLHNCQUFVRyxJQUpEO0FBS25CckIsRUFBQUEsS0FBSyxFQUFFa0Isc0JBQVVDLE1BTEU7QUFNbkJsQixFQUFBQSxRQUFRLEVBQUVpQixzQkFBVUc7QUFORCxDQUF2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge0VkaXRvcn0gZnJvbSBcIkB0aW55bWNlL3RpbnltY2UtcmVhY3RcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XHJcbmltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJjcm9zcy1mZXRjaFwiO1xyXG5pbXBvcnQge0ljb259IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHRtbEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpbnB1dFZhbDogXCJcIixcclxuICAgICAgICAgICAgVGlueU1jRWRpdG9yOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hhbmdlSW5wdXQgPSB0aGlzLmNoYW5nZUlucHV0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSW5wdXQoY29udGVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0VmFsOiBjb250ZW50fSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcz8ub25WYWx1ZUNoYW5nZShjb250ZW50KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaFJlcXVlc3QgPSBhc3luYyAoeyB1cmwsIHBhcmFtcyA9IHt9IH0pID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnWC1UcmFuc2FjdGlvbi1Tb3VyY2UnOiB3aW5kb3cudHJhbnNhY3Rpb25fc291cmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICdYLVVzZXJUb2tlbic6IHdpbmRvdy5nX2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRKc29uKVxyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHRKc29uLnJlc3VsdC5zbGljZSgwLCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgdG9vbGJhcixcclxuICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgcmVhZG9ubHksXHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBsYWJlbENvbG9yID0gISF0aGlzLnN0YXRlLmlucHV0VmFsICYmIHJlcXVpcmVkID8gXCJyZ2IoOTksMTE0LDExNilcIiA6IFwicmdiKDIwMCw2MCw1NClcIiBcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIHshIWxhYmVsIHx8IHJlcXVpcmVkID8gPGRpdiBjbGFzc05hbWU9XCJlZGl0b3ItbGFiZWwtYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2NvbG9yOiBsYWJlbENvbG9yfX0gb25DbGljaz17KCkgPT4gdGhpcy5zdGF0ZS5UaW55TWNFZGl0b3IuZm9jdXMoKX0+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlcXVpcmVkID8gPEljb24gY29sb3I9e2xhYmVsQ29sb3J9IGljb249XCJhc3Rlcmlza1wiIHNpemU9XCJ4c1wiIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpS2V5PVwiYjZicGU5MGx2amRxN2F0djlkbWkyNGJsM2w1bXpmNWtzZWg5emlheHpjMm4wd296XCJcclxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyPXt0b29sYmFyfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rLGxpc3RzLGFkdmxpc3QsdGFibGUscG93ZXJwYXN0ZSxzZWFyY2hyZXBsYWNlLHByZXZpZXcsZnVsbHNjcmVlbixhMTF5X2ZpeGVzLHBsYWNlaG9sZGVyLHJlYWRvbmx5bm9ib3JkZXIsY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBza2luPVwibGlnaHRncmF5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkVkaXRvckNoYW5nZSA9e3RoaXMuY2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51YmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzYmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdF9pbnN0YW5jZV9jYWxsYmFjazogKGVkaXRvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgISFjb250ZW50ID8gZWRpdG9yLnNlbGVjdGlvbi5zZXRDb250ZW50KGNvbnRlbnQpIDogbm9vcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5ID8gZWRpdG9yLnNldE1vZGUoXCJyZWFkb25seVwiKSA6IG5vb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtUaW55TWNFZGl0b3I6IGVkaXRvcn0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjk5JVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbWFnZXNfdXBsb2FkX2hhbmRsZXI6IChibG9iSW5mbywgc3VjY2VzcywgZmFpbHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3Qgc2VsZWN0ZWRGaWxlID0gYmxvYkluZm8uYmxvYigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpLnNwbGl0KFwiLVwiKS5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGF0YS5hcHBlbmQoJ3RhYmxlX25hbWUnLCBgWlpfWVlzeXNfYXR0YWNobWVudGApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGF0YS5hcHBlbmQoJ3RhYmxlX3N5c19pZCcsIHV1aWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBzZWxlY3RlZEZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJQUk9TSExPXCIsIHV1aWQsIHNlbGVjdGVkRmlsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKCEhc2VsZWN0ZWRGaWxlLnNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEZpbGUuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5mZXRjaFJlcXVlc3Qoe3VybDogYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXBpL25vdy9hdHRhY2htZW50L3VwbG9hZGAsIHBhcmFtc30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuSHRtbEVkaXRvci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB0b29sYmFyOiAnYm9sZCBpdGFsaWMgdW5kZXJsaW5lIHVuZG8gcmVkbyB8IGZvbnRzZWxlY3QgZm9udHNpemVzZWxlY3QgdGFibGUgfCBsaW5rIHVubGluayB8IGNvZGUgIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgfCBidWxsaXN0IG51bWxpc3QgfCBmdWxsc2NyZWVuJyxcclxuICAgIG9uVmFsdWVDaGFuZ2U6IG5vb3AsXHJcbiAgICBjb250ZW50OiBcIlwiLFxyXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgbGFiZWw6IFwiXCIsXHJcbiAgICByZXF1aXJlZDogZmFsc2VcclxufVxyXG5cclxuSHRtbEVkaXRvci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0b29sYmFyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25WYWx1ZUNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcmVhZG9ubHk6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICByZXF1aXJlZDogcHJvcFR5cGVzLmJvb2xcclxufSJdfQ==