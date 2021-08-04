function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _propTypes = _interopRequireDefault(require('prop-types'));

const React = _interopRequireWildcard(require('react'));

const _tinymceReact = require('@tinymce/tinymce-react');

const _uuid = require('uuid');
const _jsxRuntime = require('react/jsx-runtime');
const _utils = require('../utils');

const _crossFetch = _interopRequireDefault(require('cross-fetch'));

const _index = require('../index');

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else { obj[key] = value; } return obj;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var { value } = info; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) {
  return function () {
    const self = this; const
      args = arguments; return new Promise((resolve, reject) => { const gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err); } _next(undefined); });
  };
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  const hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() {
    const Super = _getPrototypeOf(Derived); let
      result; if (hasNativeReflectConstruct) { const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

const HtmlEditor = /* #__PURE__ */(function (_React$Component) {
  _inherits(HtmlEditor, _React$Component);

  const _super = _createSuper(HtmlEditor);

  function HtmlEditor(props) {
    let _this;

    _classCallCheck(this, HtmlEditor);

    _this = _super.call(this, props);

    _this.fetchRequest = /* #__PURE__ */(function () {
      const _ref2 = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee(_ref) {
        let url; let _ref$params; let params; let result; let response; let
          resultJson;

        return regeneratorRuntime.wrap((_context) => {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = _ref.url, _ref$params = _ref.params, params = _ref$params === void 0 ? {} : _ref$params;
                _context.next = 3;
                return (0, _crossFetch.default)(url, _objectSpread(_objectSpread({}, params), {}, {
                  credentials: 'same-origin',
                  headers: {
                    'X-Transaction-Source': window.transaction_source,
                    'X-UserToken': window.g_ck,
                    'Content-Type': 'multipart/form-data',
                    Accept: '*/*',
                  },
                }));

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                resultJson = _context.sent;
                result = resultJson.result;
                return _context.abrupt('return', result);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _this.state = {
      inputVal: '',
      TinyMcEditor: null,
    };
    _this.changeInput = _this.changeInput.bind(_assertThisInitialized(_this));

    _this.changeBaseURL();

    return _this;
  }

  _createClass(HtmlEditor, [{
    key: 'changeInput',
    value: function changeInput(content) {
      let _this$props;

      this.setState({
        inputVal: content,
      });
      (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.onValueChange(content);
    },
  }, {
    key: 'ascii_to_hexa',
    value: function ascii_to_hexa(str) {
      const arr1 = [];

      for (let n = 0, l = str.length; n < l; n++) {
        const hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
      }

      return arr1.join('');
    },
  }, {
    key: 'changeBaseURL',
    value: function changeBaseURL() {
      if ('tinymce' in window) {
        window.tinymce.baseURL = HtmlEditor.baseUrl;
      }
    },
  }, {
    key: 'render',
    value: function render() {
      const _this2 = this;

      const _this$props2 = this.props;
      const { toolbar } = _this$props2;
      const { content } = _this$props2;
      const { readonly } = _this$props2;
      const { label } = _this$props2;
      const { required } = _this$props2;
      const labelColor = !!this.state.inputVal && required ? 'rgb(99,114,116)' : 'rgb(200,60,54)';
      return /* #__PURE__ */(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [!!label || required ? /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
          className: 'editor-label-area',
          children: [/* #__PURE__ */(0, _jsxRuntime.jsx)('label', {
            style: {
              color: labelColor,
            },
            onClick: function onClick() {
              return _this2.state.TinyMcEditor.focus();
            },
            children: label,
          }), required ? /* #__PURE__ */(0, _jsxRuntime.jsx)(_index.Icon, {
            color: labelColor,
            icon: 'asterisk',
            size: 'xs',
          }) : null],
        }) : null, /* #__PURE__ */(0, _jsxRuntime.jsx)(_tinymceReact.Editor, {
          toolbar,
          plugins: ['link,lists,advlist,table,powerpaste,searchreplace,preview,fullscreen,a11y_fixes,placeholder,readonlynoborder,code,textcolor'],
          onEditorChange: this.changeInput,
          init: {
            menubar: false,
            statusbar: false,
            remove_script_host: true,
            relative_urls: true,
            convert_urls: false,
            init_instance_callback: function init_instance_callback(editor) {
              const height = _this2.props.height ? _this2.props.height : ''.concat(Math.round(document.body.offsetHeight * 0.6) - 36, 'px');
              content ? editor.selection.setContent(content) : _utils.noop;
              readonly ? editor.setMode('readonly') : _utils.noop;

              _this2.setState({
                TinyMcEditor: editor,
              });

              editor.dom.setStyle(editor.iframeElement, 'height', height);
            },
            width: '99%',
            document_base_url: window.location.origin,
            external_plugins: {
              codemirror: '/scripts/tinymce_default/node_modules/sn-tinymce/js/tinymce/sn_plugins/codemirror/plugin.min.js',
            },
            codemirror: {
              path: 'CodeMirror',
            },
            images_upload_handler: function images_upload_handler(blobInfo, success, failure) {
              const selectedFile = blobInfo.blob();
              const uuid = (0, _uuid.v4)().split('-').join('');
              const formdata = new FormData();
              formdata.append('table_name', 'ZZ_YYsys_attachment');
              formdata.append('table_sys_id', uuid);
              formdata.append('file', new File([selectedFile], blobInfo.filename()));
              (0, _crossFetch.default)('/api/now/attachment/upload', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                  'X-Transaction-Source': window.transaction_source,
                  'X-UserToken': window.g_ck,
                },
                body: formdata,
              }).then((res) => {
                if (res.status === 201) return res.json();
              }).then((resJson) => success(`/sys_attachment.do?sys_id=${resJson.result.sys_id}`));
            },
            setup: function setup(editor) {
              _this2.editor = editor;
              editor.on('init', () => {});
            },
          },
        })],
      });
    },
  }]);

  return HtmlEditor;
}(React.Component));

exports.default = HtmlEditor;
HtmlEditor.baseUrl = '/scripts/tinymce_default/node_modules/sn-tinymce/js/tinymce';
HtmlEditor.defaultProps = {
  toolbar: 'bold italic underline undo redo | forecolor backcolor | fontselect fontsizeselect table | link unlink | code  | alignleft aligncenter alignright | bullist numlist | fullscreen',
  onValueChange: _utils.noop,
  content: '',
  readonly: false,
  label: '',
  required: false,
  height: '',
};
HtmlEditor.propTypes = {
  toolbar: _propTypes.default.string,
  onValueChange: _propTypes.default.func,
  content: _propTypes.default.string,
  readonly: _propTypes.default.bool,
  label: _propTypes.default.string,
  required: _propTypes.default.bool,
  height: _propTypes.default.string,
};
