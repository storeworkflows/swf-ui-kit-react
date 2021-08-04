function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _classnames = _interopRequireDefault(require('classnames'));

const _uuid = require('uuid');

const _propTypes = _interopRequireDefault(require('prop-types'));

const _reactDom = _interopRequireDefault(require('react-dom'));

const React = _interopRequireWildcard(require('react'));

const _jsxRuntime = require('react/jsx-runtime');
const _utils = require('./utils');

const _Popover = _interopRequireDefault(require('../../../Popover/Popover'));

const _DropdownList = _interopRequireDefault(require('./DropdownList'));

const _Icon = _interopRequireDefault(require('../../../Icon/Icon'));

const _DropdownListHeader = _interopRequireDefault(require('./DropdownListHeader'));

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

const ExpandDropdown = /* #__PURE__ */(function (_React$Component) {
  _inherits(ExpandDropdown, _React$Component);

  const _super = _createSuper(ExpandDropdown);

  function ExpandDropdown(props) {
    let _this;

    _classCallCheck(this, ExpandDropdown);

    _this = _super.call(this, props);

    _this.getWidth = function (_ref) {
      const { elm } = _ref;
      if (_this.state.clientWidth !== elm.clientWidth) {
        _this.setState({
          clientWidth: elm.clientWidth,
        });
      }
    };

    _this.getDropdownContainerWidth = function (width) {
      _this.setState({
        containerWidth: width,
      });
    };

    _this.onSearch = function (_ref2) {
      const { value } = _ref2;
      const _this$props = _this.props;
      const { lists } = _this$props;
      const { selectedItems } = _this$props;
      const searchValue = value.trim();
      const filteredList = lists.map((list, index) => ({
        items: [].concat(_toConsumableArray([selectedItems[index]].filter(Boolean)), _toConsumableArray(list.items.filter((item) => {
          const itemsToReturn = selectedItems[index] ? !!item.label.toLowerCase().match(searchValue.toLowerCase()) && selectedItems[index].id !== item.id : !!item.label.toLowerCase().match(searchValue.toLowerCase());
          return itemsToReturn;
        }))),
      }));

      _this.setState({
        searchValue,
        filteredList,
      });
    };

    _this.itemSelected = _this.itemSelected.bind(_assertThisInitialized(_this));
    _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
    _this.dropdownClicked = _this.dropdownClicked.bind(_assertThisInitialized(_this));
    _this.state = {
      opened: _this.props.opened,
      selectedItems: _this.props.selectedItems,
      itemsContainerRef: null,
      containerWidth: 0,
      selectedItem: _this.props.selectedItem,
      searchValue: '',
      filteredList: [],
      clickedFields: [],
      clientWidth: 0,
    };
    _this.dropdownRef = null;
    _this.itemsContainerRef = null;
    _this.firstListRef = /* #__PURE__ */React.createRef();
    return _this;
  }

  _createClass(ExpandDropdown, [{
    key: 'dropdownClicked',
    value: function dropdownClicked() {
      const _this$props2 = this.props;
      const { manageOpened } = _this$props2;
      const { onOpened } = _this$props2;
      const { scrollToSelected } = _this$props2;
      const currentOpened = this.state.opened;
      const container = this.itemsContainerRef;

      if (!manageOpened) {
        if (!currentOpened && container && scrollToSelected) container.scrollTop = (0, _utils.calculateScroll)(container, this.state.selectedItems);
        this.setState({
          opened: !currentOpened,
        });
      }

      if (onOpened) {
        onOpened({
          opened: currentOpened,
        });
      }
    },
  }, {
    key: 'itemSelected',
    value: function itemSelected(_ref3) {
      const { id } = _ref3;
      const { dropdownClicked } = _ref3;
      const { listIndex } = _ref3;
      const _this$props3 = this.props;
      const { manageSelectedItems } = _this$props3;
      const { onItemSelected } = _this$props3;
      const { manageOpened } = _this$props3;
      const { updateSelectedItem } = _this$props3;
      const { selectedItem } = _this$props3;
      const { items } = this.props.lists[listIndex];

      const item = _objectSpread(_objectSpread({}, items.find((item) => item.id === id)), {}, {
        listIndex,
        dropdownClicked,
      });

      const currentSelectedIds = this.state.selectedItems.map((item) => item.id);
      updateSelectedItem({
        item,
        command: 'push',
      });

      if (selectedItem.items) {
        if (selectedItem.items[selectedItem.items.length - 1].listIndex >= listIndex) {
          updateSelectedItem({
            item,
            command: 'same_list_index',
            listIndex,
          });
        }
      }

      if (!manageSelectedItems) {
        this.setState({
          selectedItems: [id],
        });
        if (!dropdownClicked && !manageOpened) {
          this.setState({
            opened: false,
          });
        }
      }

      if (onItemSelected) {
        onItemSelected({
          clickedItem: _objectSpread(_objectSpread({}, (0, _utils.getItemById)(id, items)), {}, {
            listIndex,
            dropdownClicked,
          }),
          selectedItems: currentSelectedIds,
          isReferenceClicked: dropdownClicked,
        });
      }
    },
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      const _this$props4 = this.props;
      const { opened } = _this$props4;
      const { selectedItems } = _this$props4;
      const { manageOpened } = _this$props4;
      const { manageSelectedItems } = _this$props4;
      const { scrollToSelected } = _this$props4;
      const { lists } = _this$props4;
      const container = this.itemsContainerRef;

      if (manageOpened && opened !== this.state.opened) {
        if (this.state.opened && container && scrollToSelected) container.scrollTop = (0, _utils.calculateScroll)(container, this.state.selectedItems);
        this.setState({
          opened,
        });
      }

      if (manageSelectedItems && selectedItems !== this.state.selectedItems) {
        this.setState({
          selectedItems,
        });
      }
      if (prevProps.lists !== lists) {
        this.onSearch({
          value: this.state.searchValue,
        });
      }
    },
  }, {
    key: 'renderItems',
    value: function renderItems(_ref4) {
      const _this2 = this;

      const { autofocus } = _ref4;
      const _this$props5 = this.props;
      const { expandIcon } = _this$props5;
      const { lists } = _this$props5;
      const { selectedItems } = _this$props5;
      const { selectedItem } = _this$props5;
      const _this$state = this.state;
      const { opened } = _this$state;
      const { filteredList } = _this$state;
      const { searchValue } = _this$state;
      const { clientWidth } = _this$state;
      const key = (0, _uuid.v4)();
      const listStyles = {
        '--popover-border-radius': '0 0 0.5rem 0.5rem',
        '--popover-border': '1px solid rgb(228, 230, 231)',
        '--popover-shadow': 'none',
        padding: '0',
        width: 'max-content',
        maxWidth: '800px',
      };
      const valueToShow = !!searchValue && !!filteredList.length ? filteredList : lists;
      return /* #__PURE__ */(0, _jsxRuntime.jsx)(_Popover.default, {
        positionTarget: this.dropdownRef,
        manageOpened: true,
        opened,
        hideTail: true,
        onOuterPopoverClicked: function onOuterPopoverClicked() {
          return _this2.dropdownClicked();
        },
        positions: [{
          target: 'bottom-start',
          content: 'top-start',
        }],
        contentStyles: listStyles,
        children: /* #__PURE__ */(0, _jsxRuntime.jsxs)(_Popover.default.Content, {
          children: [/* #__PURE__ */(0, _jsxRuntime.jsx)(_DropdownListHeader.default, {
            onSearch: this.onSearch,
            searchBarWidth: clientWidth,
            searchValue,
            selectedItem: selectedItem.items,
            itemSelected: this.itemSelected,
          }), /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
            className: 'dropdown-items-container',
            style: {
              display: 'grid',
              gridAutoFlow: 'column',
            },
            children: valueToShow.map((list, index) => opened && /* #__PURE__ */(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
              children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_DropdownList.default, {
                onSelectAction: _this2.itemSelected,
                items: list.items,
                selectedItems,
                expandIcon,
                listIndex: index,
                autofocus,
                getWidth: _this2.getWidth,
              }, index + (0, _uuid.v4)().split('-').join('')),
            })),
          })],
        }),
      });
    },
  }, {
    key: 'render',
    value: function render() {
      const _this3 = this;

      const _this$props6 = this.props;
      const { disabled } = _this$props6;
      const { placeholder } = _this$props6;
      const { name } = _this$props6;
      const { selectedItem } = _this$props6;
      const _this$state2 = this.state;
      const { selectedItems } = _this$state2;
      const { opened } = _this$state2;
      const hasSelected = selectedItems && selectedItems.length > 0 && !!selectedItem.label;
      const hasLabel = hasSelected || placeholder;
      const buttonClasses = (0, _classnames.default)({
        'dropdown-button': true,
        opened,
        disabled,
      });
      const labelClasses = (0, _classnames.default)({
        'dropdown-label': true,
        placeholder: !hasSelected,
      });
      return /* #__PURE__ */(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
          className: 'swf-expand-dropdown-container',
          ref: function ref(el) {
            return _this3.dropdownRef = {
              current: el,
            };
          },
          children: [/* #__PURE__ */(0, _jsxRuntime.jsx)('input', {
            type: 'hidden',
            name,
          }), /* #__PURE__ */(0, _jsxRuntime.jsxs)('button', {
            onClick: this.dropdownClicked,
            disabled,
            className: buttonClasses,
            children: [hasLabel && /* #__PURE__ */(0, _jsxRuntime.jsx)('span', {
              className: labelClasses,
              children: hasSelected ? selectedItem.label : placeholder,
            }), /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
              className: 'dropdown-caret',
              children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_Icon.default, {
                icon: 'caret-down-fill',
                customSize: 12,
              }),
            })],
          }), this.dropdownRef && this.state.opened && this.renderItems({
            autofocus: true,
          })],
        }),
      });
    },
  }]);

  return ExpandDropdown;
}(React.Component));

ExpandDropdown.defaultProps = {
  disabled: false,
  scrollToSelected: true,
  items: [],
  manageOpened: false,
  manageSelectedItems: false,
  opened: false,
  selectedItems: [],
  selectedItem: {},
  expandIcon: '',
  referenceTableFieldsData: [],
};
ExpandDropdown.propTypes = {
  selectedItem: _propTypes.default.object,
  name: _propTypes.default.string,
  scrollToSelected: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    label: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    reference: _propTypes.default.string,
  })),
  manageOpened: _propTypes.default.bool,
  manageSelectedItems: _propTypes.default.bool,
  opened: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  selectedItems: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  onOpened: _propTypes.default.func,
  onItemSelected: _propTypes.default.func,
  expandIcon: _propTypes.default.string,
};
const _default = ExpandDropdown;
exports.default = _default;
