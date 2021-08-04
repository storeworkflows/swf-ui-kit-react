function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const React = _interopRequireWildcard(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _classnames = _interopRequireDefault(require('classnames'));

const _Icon = _interopRequireDefault(require('../Icon/Icon'));

const _Popover = _interopRequireDefault(require('../Popover/Popover'));

const _DropdownItem = _interopRequireDefault(require('./DropdownItem'));

const _InfoMessage = _interopRequireDefault(require('../InfoMessage/InfoMessage'));

const _RequiredLabel = _interopRequireDefault(require('../RequiredLabel/RequiredLabel'));

const _jsxRuntime = require('react/jsx-runtime');
const _utils = require('./utils');

const _constants = require('./constants');

const _utils2 = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else { obj[key] = value; } return obj;
}

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) {
  let _i = arr && (typeof Symbol !== 'undefined' && arr[Symbol.iterator] || arr['@@iterator']); if (_i == null) return; const _arr = []; let _n = true; let _d = false; let _s; let
    _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr;
}

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const Dropdown = /* #__PURE__ */React.forwardRef((props, ref) => {
  const { opened } = props;
  const { invalid } = props;
  const { selectedItems } = props;
  const { items } = props;
  const { visible } = props;
  const { manageInvalid } = props;
  const { onInvalid } = props;
  const { manageOpened } = props;
  const { onOpened } = props;
  const { manageSelectedItems } = props;
  const { onItemSelected } = props;
  const { select } = props;
  const { autoWidth } = props;
  const { onClick } = props;

  const _useState = (0, React.useState)(opened);
  const _useState2 = _slicedToArray(_useState, 2);
  const isOpened = _useState2[0];
  const setIsOpened = _useState2[1];

  const _useState3 = (0, React.useState)(invalid);
  const _useState4 = _slicedToArray(_useState3, 2);
  const isInvalid = _useState4[0];
  const setIsInvalid = _useState4[1];

  const _useState5 = (0, React.useState)(208);
  const _useState6 = _slicedToArray(_useState5, 2);
  const dropdownWidth = _useState6[0];
  const setDropdownWidth = _useState6[1];

  const _useState7 = (0, React.useState)((0, _utils.getCorrectSelected)(items, selectedItems));
  const _useState8 = _slicedToArray(_useState7, 2);
  const selectedItemsState = _useState8[0];
  const setSelectedItemState = _useState8[1];

  const dropdownRef = (0, React.useRef)(null);
  const itemsContainerRef = (0, React.useRef)(null);
  const itemToScroll = (0, React.useRef)(null);
  const invalidValue = manageInvalid ? invalid : isInvalid;
  const openedValue = manageOpened ? opened : isOpened;
  const selectsItemsValue = manageSelectedItems ? selectedItems : selectedItemsState;

  const onInvalidAction = function onInvalidAction(e) {
    onInvalid(e);
    !manageInvalid && setIsInvalid(true);
  };

  const dropdownClicked = function dropdownClicked(e) {
    onClick(e);
    const makeOpened = items && items.length && !isOpened;
    onOpened({
      opened: manageOpened ? opened : makeOpened,
    });
    !manageOpened && setIsOpened(makeOpened);
  };

  const itemSelected = (0, React.useCallback)((_ref) => {
    const { id } = _ref;
    let currentSelectedIds = selectsItemsValue;

    if (!manageSelectedItems) {
      currentSelectedIds = (0, _utils.getUpdatedSelectedItems)(selectsItemsValue, select, id);
      setSelectedItemState(currentSelectedIds);
    }

    if (select !== _constants.DROPDOWN.SELECT.MULTI) {
      !manageOpened && setIsOpened(false);
      onOpened(manageOpened);
    }

    onItemSelected({
      clickedItem: (0, _utils.getItemById)(id, items),
      selectedItems: currentSelectedIds,
    });
  }, [onItemSelected, selectsItemsValue, manageSelectedItems, select, manageOpened, onOpened, items]);
  (0, React.useEffect)(() => {
    if (openedValue && itemToScroll !== null && itemToScroll !== void 0 && itemToScroll.current) itemToScroll.current.scrollIntoView();
  }, [isOpened, opened]);
  (0, React.useEffect)(() => dropdownRef.current && setDropdownWidth(dropdownRef.current.offsetWidth), [dropdownRef.current, autoWidth]);

  const renderItems = function renderItems() {
    const { scrollToSelected } = props;
    const { itemClassName } = props;
    const listStyles = {
      '--popover-border-radius': '0 0 0.5rem 0.5rem',
      '--popover-border': '1px solid rgb(228, 230, 231)',
      '--popover-shadow': 'none',
      padding: '0',
      width: 'calc( '.concat(dropdownWidth, 'px - 2px)'),
      maxHeight: '15rem',
    };
    return /* #__PURE__ */(0, _jsxRuntime.jsx)(_Popover.default, {
      hideTail: true,
      manageOpened: true,
      opened: openedValue,
      positions: [{
        target: 'bottom-start',
        content: 'top-start',
      }],
      positionTarget: dropdownRef,
      onOuterPopoverClicked: dropdownClicked,
      contentStyles: listStyles,
      children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_Popover.default.Content, {
        children: /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
          className: 'dropdown-items-container',
          ref: function ref(el) {
            return itemsContainerRef.current = el;
          },
          children: items.map((item) => {
            const { id } = item;
            const { disabled } = item;
            const isItemToScroll = scrollToSelected && id === selectsItemsValue[0];
            return /* #__PURE__ */(0, React.createElement)(_DropdownItem.default, _objectSpread(_objectSpread({}, item), {}, {
              key: id,
              ref: function ref(el) {
                if (isItemToScroll) itemToScroll.current = el;
              },
              onSelectAction: itemSelected,
              disabled: props.disabled || disabled,
              isSelected: selectsItemsValue.includes(id),
              className: itemClassName,
            }));
          }),
        }),
      }),
    });
  };

  const renderElement = function renderElement() {
    const { disabled } = props;
    const { placeholder } = props;
    const { name } = props;
    const { label } = props;
    const { required } = props;
    const { message } = props;
    const { className } = props;
    const { labelClassName } = props;
    const { hideCaret } = props;
    const hasSelected = selectsItemsValue && selectsItemsValue.length;
    const buttonClasses = (0, _classnames.default)({
      'dropdown-button': true,
      opened: openedValue,
      disabled,
      invalid: invalidValue,
      hideCaret,
    });
    const labelClasses = (0, _classnames.default)({
      'dropdown-label': true,
      placeholder: !hasSelected,
    });
    const containerClasses = (0, _classnames.default)('swf-dropdown-main-container', 'dropdown-container', {
      '--autoWidth': autoWidth,
    }, className);
    return /* #__PURE__ */(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
        className: containerClasses,
        ref,
        children: [/* #__PURE__ */(0, _jsxRuntime.jsx)('input', {
          type: 'hidden',
          name,
          required,
          onInvalid: onInvalidAction,
          value: selectsItemsValue,
        }), label && /* #__PURE__ */(0, _jsxRuntime.jsx)(_RequiredLabel.default, {
          label,
          required,
          invalid: invalidValue,
          className: labelClassName,
        }), /* #__PURE__ */(0, _jsxRuntime.jsxs)('button', {
          onClick: dropdownClicked,
          disabled,
          className: buttonClasses,
          ref: function ref(el) {
            return dropdownRef.current = el;
          },
          children: [/* #__PURE__ */(0, _jsxRuntime.jsx)('span', {
            className: labelClasses,
            children: (0, _utils.getDisplayValue)(selectsItemsValue, items, placeholder),
          }), !hideCaret && /* #__PURE__ */(0, _jsxRuntime.jsx)(_Icon.default, {
            className: 'dropdown-caret',
            icon: 'caret-down-fill',
            customSize: 12,
          })],
        }), (dropdownRef === null || dropdownRef === void 0 ? void 0 : dropdownRef.current) && renderItems(), message.map((el) =>
        /* #__PURE__ */(0, _jsxRuntime.jsx)(_InfoMessage.default, _objectSpread({}, el)))],
      }),
    });
  };

  return visible ? renderElement() : null;
});
Dropdown.defaultProps = {
  disabled: false,
  scrollToSelected: true,
  items: [],
  manageOpened: false,
  manageSelectedItems: false,
  opened: false,
  selectedItems: [],
  required: false,
  invalid: false,
  message: [],
  className: {},
  labelClassName: {},
  itemClassName: {},
  visible: true,
  manageInvalid: true,
  onOpened: function onOpened() {
    return _utils2.noop;
  },
  onInvalid: function onInvalid() {
    return _utils2.noop;
  },
  onItemSelected: function onItemSelected() {
    return _utils2.noop;
  },
  onClick: function onClick() {
    return _utils2.noop;
  },
  select: _constants.DROPDOWN.SELECT.SINGLE,
  hideCaret: false,
};
const dropdownItem = {
  id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  label: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  sublabel: _propTypes.default.string,
  number: _propTypes.default.number,
  icon: _propTypes.default.string,
};
const dropdownSection = {
  id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  label: _propTypes.default.string,
  children: _propTypes.default.arrayOf(_propTypes.default.shape(dropdownItem)),
};
const messageItem = {
  status: _propTypes.default.oneOf(['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue']),
  content: _propTypes.default.string,
  icon: _propTypes.default.string,
  className: _propTypes.default.object,
  iconSize: _propTypes.default.number,
  delay: _propTypes.default.number,
};
Dropdown.propTypes = {
  // basic props
  name: _propTypes.default.string,
  label: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  items: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.shape(dropdownItem), _propTypes.default.shape(dropdownSection)])),
  selectedItems: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  message: _propTypes.default.arrayOf(_propTypes.default.shape(messageItem)),
  // display characteristic
  select: _propTypes.default.oneOf([_constants.DROPDOWN.SELECT.NONE, _constants.DROPDOWN.SELECT.SINGLE, _constants.DROPDOWN.SELECT.MULTI]),
  visible: _propTypes.default.bool,
  scrollToSelected: _propTypes.default.bool,
  opened: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  invalid: _propTypes.default.bool,
  required: _propTypes.default.bool,
  hideCaret: _propTypes.default.bool,
  // action props
  manageOpened: _propTypes.default.bool,
  manageInvalid: _propTypes.default.bool,
  manageSelectedItems: _propTypes.default.bool,
  onOpened: _propTypes.default.func,
  onInvalid: _propTypes.default.func,
  onItemSelected: _propTypes.default.func,
  onClick: _propTypes.default.func,
  // style
  className: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  labelClassName: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  itemClassName: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  autoWidth: _propTypes.default.bool,
};
const _default = Dropdown;
exports.default = _default;
