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
          plugins: ["link,lists,advlist,table,powerpaste,searchreplace,preview,fullscreen,a11y_fixes,placeholder,readonlynoborder,code"] // skin="lightgray"
          ,
          onEditorChange: this.changeInput,
          init: {
            menubar: false,
            init_instance_callback: function init_instance_callback(editor) {
              !!_this2.content ? editor.selection.setContent(_this2.content) : _utils.noop;
              _this2.readonly ? editor.setMode("readonly") : _utils.noop;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IdG1sRWRpdG9yL0h0bWxFZGl0b3IuanMiXSwibmFtZXMiOlsiSHRtbEVkaXRvciIsInByb3BzIiwic3RhdGUiLCJpbnB1dFZhbCIsImNoYW5nZUlucHV0IiwiYmluZCIsInRvb2xiYXIiLCJjb250ZW50IiwicmVhZG9ubHkiLCJzZXRTdGF0ZSIsIm9uVmFsdWVDaGFuZ2UiLCJzdHlsZXMiLCJtZW51YmFyIiwiaW5pdF9pbnN0YW5jZV9jYWxsYmFjayIsImVkaXRvciIsInNlbGVjdGlvbiIsInNldENvbnRlbnQiLCJub29wIiwic2V0TW9kZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7O0FBQ2pCLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsUUFBUSxFQUFFO0FBREQsS0FBYjtBQUdBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsK0JBQW5CO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtMLEtBQUwsQ0FBV0ssT0FBMUI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS04sS0FBTCxDQUFXTSxPQUExQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS1AsS0FBTCxDQUFXTyxRQUEzQjtBQVJlO0FBU2xCOzs7O1dBRUQscUJBQVlELE9BQVosRUFBcUI7QUFBQTs7QUFDakIsV0FBS0UsUUFBTCxDQUFjO0FBQUNOLFFBQUFBLFFBQVEsRUFBRUk7QUFBWCxPQUFkO0FBQ0EsMEJBQUtOLEtBQUwsNERBQVlTLGFBQVosQ0FBMEJILE9BQTFCLEVBRmlCLENBR2pCO0FBQ0gsSyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FFQSxrQkFBUztBQUFBOztBQUVMLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBUUk7QUFBUixVQURKLGVBRUkscUJBQUMsb0JBQUQ7QUFDSSxVQUFBLE1BQU0sRUFBQyxrREFEWDtBQUVJLFVBQUEsT0FBTyxFQUFFLEtBQUtMLE9BRmxCO0FBR0ksVUFBQSxPQUFPLEVBQUUsQ0FDTCxtSEFESyxDQUhiLENBTUk7QUFOSjtBQU9JLFVBQUEsY0FBYyxFQUFHLEtBQUtGLFdBUDFCO0FBUUksVUFBQSxJQUFJLEVBQUU7QUFDRlEsWUFBQUEsT0FBTyxFQUFFLEtBRFA7QUFFRkMsWUFBQUEsc0JBQXNCLEVBQUUsZ0NBQUNDLE1BQUQsRUFBWTtBQUNoQyxlQUFDLENBQUMsTUFBSSxDQUFDUCxPQUFQLEdBQWlCTyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFVBQWpCLENBQTRCLE1BQUksQ0FBQ1QsT0FBakMsQ0FBakIsR0FBNkRVLFdBQTdEO0FBQ0EsY0FBQSxNQUFJLENBQUNULFFBQUwsR0FBZ0JNLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLFVBQWYsQ0FBaEIsR0FBNkNELFdBQTdDO0FBQ0gsYUFMQyxDQU1GO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF0QkU7QUFSVixVQUZKO0FBQUEsUUFESjtBQXNDSDs7OztFQS9FbUNFLEtBQUssQ0FBQ0MsUzs7O0FBa0Y5Q3BCLFVBQVUsQ0FBQ3FCLFlBQVgsR0FBMEI7QUFDdEJmLEVBQUFBLE9BQU8sRUFBRSwySkFEYTtBQUV0QkksRUFBQUEsYUFBYSxFQUFFTyxXQUZPO0FBR3RCVixFQUFBQSxPQUFPLEVBQUUsRUFIYTtBQUl0QkMsRUFBQUEsUUFBUSxFQUFFO0FBSlksQ0FBMUI7QUFPQVIsVUFBVSxDQUFDc0IsU0FBWCxHQUF1QjtBQUNuQmhCLEVBQUFBLE9BQU8sRUFBRWdCLHNCQUFVQyxNQURBO0FBRW5CYixFQUFBQSxhQUFhLEVBQUVZLHNCQUFVRSxJQUZOO0FBR25CakIsRUFBQUEsT0FBTyxFQUFFZSxzQkFBVUMsTUFIQTtBQUluQmYsRUFBQUEsUUFBUSxFQUFFYyxzQkFBVUc7QUFKRCxDQUF2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge0VkaXRvcn0gZnJvbSBcIkB0aW55bWNlL3RpbnltY2UtcmVhY3RcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XHJcbmltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJjcm9zcy1mZXRjaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHRtbEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpbnB1dFZhbDogXCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYW5nZUlucHV0ID0gdGhpcy5jaGFuZ2VJbnB1dC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG9vbGJhciA9IHRoaXMucHJvcHMudG9vbGJhcjtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnByb3BzLmNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5yZWFkb25seSA9IHRoaXMucHJvcHMucmVhZG9ubHk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSW5wdXQoY29udGVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0VmFsOiBjb250ZW50fSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcz8ub25WYWx1ZUNoYW5nZShjb250ZW50KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmZXRjaFJlcXVlc3QgPSBhc3luYyAoeyB1cmwsIHBhcmFtcyA9IHt9IH0pID0+IHtcclxuICAgIC8vICAgICBsZXQgcmVzdWx0O1xyXG4gICAgLy8gICAgIHRyeSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAvLyAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAvLyAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgIC8vICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAnWC1UcmFuc2FjdGlvbi1Tb3VyY2UnOiB3aW5kb3cudHJhbnNhY3Rpb25fc291cmNlLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICdYLVVzZXJUb2tlbic6IHdpbmRvdy5nX2NrLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICBjb25zdCByZXN1bHRKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRKc29uKVxyXG4gICAgLy8gICAgICAgICByZXN1bHQgPSByZXN1bHRKc29uLnJlc3VsdC5zbGljZSgwLCk7XHJcbiAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgIGFwaUtleT1cImI2YnBlOTBsdmpkcTdhdHY5ZG1pMjRibDNsNW16ZjVrc2VoOXppYXh6YzJuMHdvelwiXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcj17dGhpcy50b29sYmFyfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rLGxpc3RzLGFkdmxpc3QsdGFibGUscG93ZXJwYXN0ZSxzZWFyY2hyZXBsYWNlLHByZXZpZXcsZnVsbHNjcmVlbixhMTF5X2ZpeGVzLHBsYWNlaG9sZGVyLHJlYWRvbmx5bm9ib3JkZXIsY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBza2luPVwibGlnaHRncmF5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkVkaXRvckNoYW5nZSA9e3RoaXMuY2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51YmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdF9pbnN0YW5jZV9jYWxsYmFjazogKGVkaXRvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgISF0aGlzLmNvbnRlbnQgPyBlZGl0b3Iuc2VsZWN0aW9uLnNldENvbnRlbnQodGhpcy5jb250ZW50KSA6IG5vb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRvbmx5ID8gZWRpdG9yLnNldE1vZGUoXCJyZWFkb25seVwiKSA6IG5vb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGltYWdlc191cGxvYWRfaGFuZGxlcjogKGJsb2JJbmZvLCBzdWNjZXNzLCBmYWlsdXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBzZWxlY3RlZEZpbGUgPSBibG9iSW5mbztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhibG9iSW5mbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZvcm1EYXRhLmFwcGVuZChcInRhYmxlX25hbWVcIiwgXCJzeXNfYXR0YWNobWVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZvcm1EYXRhLmFwcGVuZChcInRhYmxlX3N5c19pZFwiLCB1dWlkdjQoKS5zcGxpdChcIi1cIikuam9pbihcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkhFTExPVEhFUkVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIHNlbGVjdGVkRmlsZS5maWxlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZGF0YTogZm9ybURhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5mZXRjaFJlcXVlc3Qoe3VybDogXCJodHRwczovL2Rldjc4NDkwLnNlcnZpY2Utbm93LmNvbS9hcGkvbm93L2F0dGFjaG1lbnQvdXBsb2FkXCIsIHBhcmFtc30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuSHRtbEVkaXRvci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB0b29sYmFyOiAnYm9sZCBpdGFsaWMgdW5kZXJsaW5lIHVuZG8gcmVkbyB8IGZvbnRzZWxlY3QgZm9udHNpemVzZWxlY3QgdGFibGUgfCBsaW5rIHVubGluayB8IGNvZGUgIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgfCBidWxsaXN0IG51bWxpc3QgfCBmdWxsc2NyZWVuJyxcclxuICAgIG9uVmFsdWVDaGFuZ2U6IG5vb3AsXHJcbiAgICBjb250ZW50OiBcIlwiLFxyXG4gICAgcmVhZG9ubHk6IGZhbHNlXHJcbn1cclxuXHJcbkh0bWxFZGl0b3IucHJvcFR5cGVzID0ge1xyXG4gICAgdG9vbGJhcjogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uVmFsdWVDaGFuZ2U6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgY29udGVudDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbFxyXG59Il19