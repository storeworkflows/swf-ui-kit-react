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

const _findByType = _interopRequireDefault(require('../utils/findByType'));

const _Button = _interopRequireDefault(require('../Button/Button'));

const _reactFastCompare = _interopRequireDefault(require('react-fast-compare'));

const _jsxRuntime = require('react/jsx-runtime');
const _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) {
  let _i = arr && (typeof Symbol !== 'undefined' && arr[Symbol.iterator] || arr['@@iterator']); if (_i == null) return; const _arr = []; let _n = true; let _d = false; let _s; let
    _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr;
}

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const AccordionItem = /* #__PURE__ */React.memo(/* #__PURE__ */React.forwardRef((props, ref) => {
  const { manageOpened } = props;
  const { onClick } = props;
  const { onSelected } = props;
  const { opened } = props;
  const { children } = props;
  const { className } = props;
  const { label } = props;
  const { triggerIcon } = props;
  const { iconToStart } = props;
  const { headerClassName } = props;
  const { isLastItem } = props;
  const { isFirstItem } = props;
  const { id } = props;

  const _useState = (0, React.useState)(opened);
  const _useState2 = _slicedToArray(_useState, 2);
  const isOpened = _useState2[0];
  const setIsOpened = _useState2[1];

  const itemClicked = function itemClicked() {
    onClick({
      opened: manageOpened ? opened : !isOpened,
    });
    !manageOpened && setIsOpened(!isOpened);
    onSelected({
      key: id,
    });
  };

  const renderHeader = function renderHeader() {
    const header = (0, _findByType.default)(children, 'Header');
    if (!header || !header.length) {
      return /* #__PURE__ */(0, _jsxRuntime.jsx)('label', {
        children: label,
      });
    }
    return header;
  };

  const renderContent = function renderContent() {
    if (!children) return;
    const header = (0, _findByType.default)(children, 'Header');
    let contentElements = React.Children.toArray(children).slice();

    if (header && header.length) {
      const headerType = header[0].type;
      contentElements = contentElements.filter((child) => child.type !== headerType);
    }

    if (contentElements.length) {
      return /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
        className: 'accordion-content',
        children: contentElements,
      });
    }
    return null;
  };

  const renderIcon = function renderIcon() {
    const classes = (0, _classnames.default)({
      'trigger-icon': true,
      left: iconToStart,
      right: !iconToStart,
    });
    return /* #__PURE__ */(0, _jsxRuntime.jsx)(_Button.default, {
      className: classes,
      icon: triggerIcon,
      variant: 'tertiary',
    });
  };

  const currentOpened = manageOpened ? opened : isOpened;
  const itemStyles = (0, _classnames.default)(className, {
    'accordion-item': true,
    last: isLastItem,
    first: isFirstItem,
  });
  const headerContentStyles = (0, _classnames.default)({
    'accordion-header-content': true,
    left: !iconToStart,
    right: iconToStart,
    opened: currentOpened,
  });
  return /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
    className: itemStyles,
    ref,
    children: [/* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
      className: (0, _classnames.default)(headerClassName, 'accordion-item-header'),
      onClick: itemClicked,
      children: [iconToStart && renderIcon(), /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
        className: headerContentStyles,
        children: renderHeader(),
      }), !iconToStart && renderIcon()],
    }), currentOpened && renderContent()],
  });
}), (prev, next) => (0, _reactFastCompare.default)(prev, next));
AccordionItem.defaultProps = {
  triggerIcon: 'chevron-down',
  className: '',
  onClick: _utils.noop,
  onSelected: _utils.noop,
  headerClassName: '',
  id: '-1',
};
AccordionItem.propTypes = {
  label: _propTypes.default.string,
  opened: _propTypes.default.bool,
  manageOpened: _propTypes.default.bool,
  onSelected: _propTypes.default.func,
  onClick: _propTypes.default.func,
  triggerIcon: _propTypes.default.string,
  iconToStart: _propTypes.default.bool,
  isLastItem: _propTypes.default.bool,
  isFirstItem: _propTypes.default.bool,
  className: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  headerClassName: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  id: _propTypes.default.string,
};
const _default = AccordionItem;
exports.default = _default;
