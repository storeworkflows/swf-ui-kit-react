function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const React = _interopRequireWildcard(require('react'));

const _classnames = _interopRequireDefault(require('classnames'));

const _Icon = _interopRequireDefault(require('../../../Icon/Icon'));

const _jsxRuntime = require('react/jsx-runtime');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

const DropdownListHeader = /* #__PURE__ */(function (_React$Component) {
  _inherits(DropdownListHeader, _React$Component);

  const _super = _createSuper(DropdownListHeader);

  function DropdownListHeader(props) {
    let _this;

    _classCallCheck(this, DropdownListHeader);

    _this = _super.call(this, props);
    _this.inputRef = /* #__PURE__ */React.createRef();
    return _this;
  }

  _createClass(DropdownListHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      const _this2 = this;

      if (this.inputRef.current) {
        setTimeout(() => _this2.inputRef.current.focus(), 200);
      }
    },
  }, {
    key: 'render',
    value: function render() {
      const _this3 = this;

      const _this$props = this.props;
      const { searchValue } = _this$props;
      const { onSearch } = _this$props;
      const { selectedItem } = _this$props;
      const { itemSelected } = _this$props;
      const { searchBarWidth } = _this$props;
      return /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
        className: 'dropdown-list__header',
        children: [/* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
          className: 'swf-form-group',
          style: {
            maxWidth: searchBarWidth,
          },
          children: /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
            className: 'input-group',
            children: /* #__PURE__ */(0, _jsxRuntime.jsx)('input', {
              type: 'text',
              className: 'form-control',
              autoFocus: true,
              ref: function ref(elm) {
                return _this3.inputRef.current = elm;
              },
              placeholder: 'Search',
              value: searchValue,
              onChange: function onChange(e) {
                return onSearch({
                  value: e.target.value,
                });
              },
            }),
          }),
        }), selectedItem && /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
          className: 'header-breadcrumbs',
          children: selectedItem.map((item, index) => (item.dropdownClicked || index > 0) && /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
            className: (0, _classnames.default)({
              'header-breadcrumbs_item': true,
              '--first-item': index === 0,
            }),
            children: [/* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
              className: 'header-breadcrumbs_item-label',
              onClick: function onClick() {
                return itemSelected({
                  id: item.id,
                  dropdownClicked: false,
                  listIndex: item.listIndex,
                });
              },
              children: item.label,
            }), /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
              className: 'header-breadcrumbs_item-arrow-container',
              onClick: function onClick() {
                return itemSelected({
                  id: item.id,
                  dropdownClicked: true,
                  listIndex: item.listIndex,
                });
              },
              children: item.dropdownClicked && /* #__PURE__ */(0, _jsxRuntime.jsx)(_Icon.default, {
                icon: 'arrow-right',
                size: 'sm',
              }),
            })],
          })),
        })],
      });
    },
  }]);

  return DropdownListHeader;
}(React.Component));

const _default = DropdownListHeader;
exports.default = _default;
