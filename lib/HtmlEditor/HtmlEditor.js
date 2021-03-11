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

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    _this.state = {
      inputVal: ""
    };
    _this.changeInput = _this.changeInput.bind(_assertThisInitialized(_this));
    _this.toolbar = _this.props.toolbar;
    _this.content = _this.props.content;
    _this.readonly = _this.props.readonly;
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
    } // fetchRequest = async ({ url, params = {} }) => {
    //     let result;
    //     try {
    //         const response = await fetch(url, {
    //             ...params,
    //             credentials: 'same-origin',
    //             headers: {
    //                 'X-Transaction-Source': window.transaction_source,
    //                 'X-UserToken': window.g_ck,
    //                 'Content-Type': 'multipart/form-data'
    //             },
    //         });
    //         const resultJson = await response.json();
    //         console.log(resultJson)
    //         result = resultJson.result.slice(0,);
    //     } catch (e) {
    //         console.error(e)
    //     }
    //     return result;
    // }

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_tinymceReact.Editor, {
          apiKey: "b6bpe90lvjdq7atv9dmi24bl3l5mzf5kseh9ziaxzc2n0woz",
          toolbar: this.toolbar,
          plugins: ["link,lists,advlist,table,powerpaste,searchreplace,preview,fullscreen,a11y_fixes,placeholder,readonlynoborder,sn_resizer,code"] // skin="lightgray"
          ,
          onEditorChange: this.changeInput,
          init: {
            menubar: false,
            init_instance_callback: function init_instance_callback(editor) {
              !!_this2.content ? editor.insertContent(_this2.content) : null;
              _this2.readonly ? editor.setMode("readonly") : null;
            } // images_upload_handler: (blobInfo, success, failure) => {
            //     const selectedFile = blobInfo;
            //     console.log(blobInfo)
            //     const formData = new FormData();
            //     formData.append("table_name", "sys_attachment");
            //     formData.append("table_sys_id", uuidv4().split("-").join(""));
            //     console.log("HELLOTHERE");
            //     // formData.append("file", selectedFile.file());
            //     const params = {
            //         method: "POST",
            //         data: formData
            //     }
            //     // console.log(this);
            //     this.fetchRequest({url: "https://dev78490.service-now.com/api/now/attachment/upload", params})
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
  readonly: false
};
HtmlEditor.propTypes = {
  toolbar: _propTypes["default"].string,
  onValueChange: _propTypes["default"].func,
  content: _propTypes["default"].string,
  readonly: _propTypes["default"].bool
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IdG1sRWRpdG9yL0h0bWxFZGl0b3IuanMiXSwibmFtZXMiOlsiSHRtbEVkaXRvciIsInByb3BzIiwic3RhdGUiLCJpbnB1dFZhbCIsImNoYW5nZUlucHV0IiwiYmluZCIsInRvb2xiYXIiLCJjb250ZW50IiwicmVhZG9ubHkiLCJzZXRTdGF0ZSIsIm9uVmFsdWVDaGFuZ2UiLCJzdHlsZXMiLCJtZW51YmFyIiwiaW5pdF9pbnN0YW5jZV9jYWxsYmFjayIsImVkaXRvciIsImluc2VydENvbnRlbnQiLCJzZXRNb2RlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJub29wIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7O0FBQ2pCLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsUUFBUSxFQUFFO0FBREQsS0FBYjtBQUdBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsK0JBQW5CO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtMLEtBQUwsQ0FBV0ssT0FBMUI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS04sS0FBTCxDQUFXTSxPQUExQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS1AsS0FBTCxDQUFXTyxRQUEzQjtBQVJlO0FBU2xCOzs7O1dBRUQscUJBQVlELE9BQVosRUFBcUI7QUFBQTs7QUFDakIsV0FBS0UsUUFBTCxDQUFjO0FBQUNOLFFBQUFBLFFBQVEsRUFBRUk7QUFBWCxPQUFkO0FBQ0EsMEJBQUtOLEtBQUwsNERBQVlTLGFBQVosQ0FBMEJILE9BQTFCLEVBRmlCLENBR2pCO0FBQ0gsSyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FFQSxrQkFBUztBQUFBOztBQUVMLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBUUk7QUFBUixVQURKLGVBRUkscUJBQUMsb0JBQUQ7QUFDSSxVQUFBLE1BQU0sRUFBQyxrREFEWDtBQUVJLFVBQUEsT0FBTyxFQUFFLEtBQUtMLE9BRmxCO0FBR0ksVUFBQSxPQUFPLEVBQUUsQ0FDTCw4SEFESyxDQUhiLENBTUk7QUFOSjtBQU9JLFVBQUEsY0FBYyxFQUFHLEtBQUtGLFdBUDFCO0FBUUksVUFBQSxJQUFJLEVBQUU7QUFDRlEsWUFBQUEsT0FBTyxFQUFFLEtBRFA7QUFFRkMsWUFBQUEsc0JBQXNCLEVBQUUsZ0NBQUNDLE1BQUQsRUFBWTtBQUNoQyxlQUFDLENBQUMsTUFBSSxDQUFDUCxPQUFQLEdBQWlCTyxNQUFNLENBQUNDLGFBQVAsQ0FBcUIsTUFBSSxDQUFDUixPQUExQixDQUFqQixHQUFzRCxJQUF0RDtBQUNBLGNBQUEsTUFBSSxDQUFDQyxRQUFMLEdBQWdCTSxNQUFNLENBQUNFLE9BQVAsQ0FBZSxVQUFmLENBQWhCLEdBQTZDLElBQTdDO0FBQ0gsYUFMQyxDQU1GO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF0QkU7QUFSVixVQUZKO0FBQUEsUUFESjtBQXNDSDs7OztFQS9FbUNDLEtBQUssQ0FBQ0MsUzs7O0FBa0Y5Q2xCLFVBQVUsQ0FBQ21CLFlBQVgsR0FBMEI7QUFDdEJiLEVBQUFBLE9BQU8sRUFBRSwySkFEYTtBQUV0QkksRUFBQUEsYUFBYSxFQUFFVSxXQUZPO0FBR3RCYixFQUFBQSxPQUFPLEVBQUUsRUFIYTtBQUl0QkMsRUFBQUEsUUFBUSxFQUFFO0FBSlksQ0FBMUI7QUFPQVIsVUFBVSxDQUFDcUIsU0FBWCxHQUF1QjtBQUNuQmYsRUFBQUEsT0FBTyxFQUFFZSxzQkFBVUMsTUFEQTtBQUVuQlosRUFBQUEsYUFBYSxFQUFFVyxzQkFBVUUsSUFGTjtBQUduQmhCLEVBQUFBLE9BQU8sRUFBRWMsc0JBQVVDLE1BSEE7QUFJbkJkLEVBQUFBLFFBQVEsRUFBRWEsc0JBQVVHO0FBSkQsQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtFZGl0b3J9IGZyb20gXCJAdGlueW1jZS90aW55bWNlLXJlYWN0XCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQge3Y0IGFzIHV1aWR2NH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiY3Jvc3MtZmV0Y2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0bWxFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW5wdXRWYWw6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJbnB1dCA9IHRoaXMuY2hhbmdlSW5wdXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIgPSB0aGlzLnByb3BzLnRvb2xiYXI7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5wcm9wcy5jb250ZW50O1xyXG4gICAgICAgIHRoaXMucmVhZG9ubHkgPSB0aGlzLnByb3BzLnJlYWRvbmx5O1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUlucHV0KGNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dFZhbDogY29udGVudH0pO1xyXG4gICAgICAgIHRoaXMucHJvcHM/Lm9uVmFsdWVDaGFuZ2UoY29udGVudCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmV0Y2hSZXF1ZXN0ID0gYXN5bmMgKHsgdXJsLCBwYXJhbXMgPSB7fSB9KSA9PiB7XHJcbiAgICAvLyAgICAgbGV0IHJlc3VsdDtcclxuICAgIC8vICAgICB0cnkge1xyXG4gICAgLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgLy8gICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgLy8gICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAvLyAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgJ1gtVHJhbnNhY3Rpb24tU291cmNlJzogd2luZG93LnRyYW5zYWN0aW9uX3NvdXJjZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAnWC1Vc2VyVG9rZW4nOiB3aW5kb3cuZ19jayxcclxuICAgIC8vICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcbiAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgY29uc3QgcmVzdWx0SnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0SnNvbilcclxuICAgIC8vICAgICAgICAgcmVzdWx0ID0gcmVzdWx0SnNvbi5yZXN1bHQuc2xpY2UoMCwpO1xyXG4gICAgLy8gICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICBhcGlLZXk9XCJiNmJwZTkwbHZqZHE3YXR2OWRtaTI0YmwzbDVtemY1a3NlaDl6aWF4emMybjB3b3pcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI9e3RoaXMudG9vbGJhcn1cclxuICAgICAgICAgICAgICAgICAgICBwbHVnaW5zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGluayxsaXN0cyxhZHZsaXN0LHRhYmxlLHBvd2VycGFzdGUsc2VhcmNocmVwbGFjZSxwcmV2aWV3LGZ1bGxzY3JlZW4sYTExeV9maXhlcyxwbGFjZWhvbGRlcixyZWFkb25seW5vYm9yZGVyLHNuX3Jlc2l6ZXIsY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBza2luPVwibGlnaHRncmF5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkVkaXRvckNoYW5nZSA9e3RoaXMuY2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51YmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdF9pbnN0YW5jZV9jYWxsYmFjazogKGVkaXRvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgISF0aGlzLmNvbnRlbnQgPyBlZGl0b3IuaW5zZXJ0Q29udGVudCh0aGlzLmNvbnRlbnQpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZG9ubHkgPyBlZGl0b3Iuc2V0TW9kZShcInJlYWRvbmx5XCIpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VzX3VwbG9hZF9oYW5kbGVyOiAoYmxvYkluZm8sIHN1Y2Nlc3MsIGZhaWx1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGJsb2JJbmZvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGJsb2JJbmZvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZm9ybURhdGEuYXBwZW5kKFwidGFibGVfbmFtZVwiLCBcInN5c19hdHRhY2htZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZm9ybURhdGEuYXBwZW5kKFwidGFibGVfc3lzX2lkXCIsIHV1aWR2NCgpLnNwbGl0KFwiLVwiKS5qb2luKFwiXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSEVMTE9USEVSRVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgc2VsZWN0ZWRGaWxlLmZpbGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBkYXRhOiBmb3JtRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmZldGNoUmVxdWVzdCh7dXJsOiBcImh0dHBzOi8vZGV2Nzg0OTAuc2VydmljZS1ub3cuY29tL2FwaS9ub3cvYXR0YWNobWVudC91cGxvYWRcIiwgcGFyYW1zfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5IdG1sRWRpdG9yLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHRvb2xiYXI6ICdib2xkIGl0YWxpYyB1bmRlcmxpbmUgdW5kbyByZWRvIHwgZm9udHNlbGVjdCBmb250c2l6ZXNlbGVjdCB0YWJsZSB8IGxpbmsgdW5saW5rIHwgY29kZSAgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGJ1bGxpc3QgbnVtbGlzdCB8IGZ1bGxzY3JlZW4nLFxyXG4gICAgb25WYWx1ZUNoYW5nZTogbm9vcCxcclxuICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICByZWFkb25seTogZmFsc2VcclxufVxyXG5cclxuSHRtbEVkaXRvci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0b29sYmFyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25WYWx1ZUNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcmVhZG9ubHk6IHByb3BUeXBlcy5ib29sXHJcbn0iXX0=