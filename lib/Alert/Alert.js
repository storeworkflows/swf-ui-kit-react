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

const _classnames2 = _interopRequireDefault(require('classnames'));

const _Icon = _interopRequireDefault(require('../Icon/Icon'));

const _Button = _interopRequireDefault(require('../Button/Button'));

const _TextLink = _interopRequireDefault(require('../TextLink/TextLink'));

const _jsxRuntime = require('react/jsx-runtime');
const _utils = require('./utils');

const _utils2 = require('../utils');

const _reactFastCompare = _interopRequireDefault(require('react-fast-compare'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

const Alert = /* #__PURE__ */React.forwardRef((props, ref) => {
  let _classnames;

  const { action } = props;
  const { content } = props;
  const { header } = props;
  const { icon } = props;
  const { color } = props;
  const { visible } = props;
  const { textLinkProps } = props;
  const { manageExpanded } = props;
  const { manageVisibility } = props;
  const { manageButtonClick } = props;
  const { onTextLinkClicked } = props;
  const { onButtonClick } = props;
  const { onExpandAction } = props;
  const { expanded } = props;
  const { onCloseAction } = props;
  const { delay } = props;
  const { className } = props;
  const { defaultPosition } = props;
  const { verticalPositions } = props;
  const { horizontalPositions } = props;
  const { onVisibilityChange } = props;
  const { textAlignCenter } = props;

  const _useState = (0, React.useState)(false);
  const _useState2 = _slicedToArray(_useState, 2);
  const oneLineText = _useState2[0];
  const setOneLineText = _useState2[1];

  const _useState3 = (0, React.useState)(!expanded);
  const _useState4 = _slicedToArray(_useState3, 2);
  const isOverflowed = _useState4[0];
  const setIsOverflowed = _useState4[1];

  const _useState5 = (0, React.useState)(expanded);
  const _useState6 = _slicedToArray(_useState5, 2);
  const isExpanded = _useState6[0];
  const setIsExpanded = _useState6[1];

  const _useState7 = (0, React.useState)(visible);
  const _useState8 = _slicedToArray(_useState7, 2);
  const isVisible = _useState8[0];
  const setIsVisible = _useState8[1];

  const contentRef = (0, React.useRef)(null);
  const textRef = (0, React.useRef)(null);
  let timer = null;
  const expandedFinal = manageExpanded ? expanded : isExpanded;
  const visibleFinal = manageVisibility ? visible : isVisible;

  const setDelay = function setDelay() {
    if (delay) {
      timer = setTimeout(() => {
        visibleFinal && onCloseAction();
        !manageVisibility && setIsVisible(false);
      }, delay);
    }
  };

  const buttonClicked = function buttonClicked(e) {
    e.preventDefault();

    if (!manageButtonClick) {
      !manageVisibility && setIsVisible(false);
      if (action.href) (0, _utils.openLink)(action.href);
    }

    onButtonClick(e, action);
  };

  const expandAction = function expandAction(e) {
    e.preventDefault();
    let curValue = expandedFinal;

    if (!manageExpanded) {
      curValue = !isExpanded;
      setIsOverflowed(!curValue);
      setIsExpanded(curValue);
    }

    onExpandAction({
      isExpanded: curValue,
    });
  };

  const defineSizes = (0, React.useCallback)(() => {
    const contentEl = contentRef === null || contentRef === void 0 ? void 0 : contentRef.current;
    const text = textRef === null || textRef === void 0 ? void 0 : textRef.current;

    if (contentEl && text) {
      const onlyHeader = header && !content;

      const _oneLineText = !header && text.getBoundingClientRect().height < 32;

      setIsOverflowed(contentEl.scrollHeight < text.scrollHeight);
      setOneLineText(onlyHeader || _oneLineText);
    }
  }, [header, content, contentRef, textRef]);
  (0, React.useEffect)(defineSizes, [content, header]);
  (0, React.useEffect)(() => onVisibilityChange(visibleFinal), [visibleFinal]);
  (0, React.useEffect)(() => manageExpanded && setIsOverflowed(!expanded), [expanded, manageExpanded]);
  (0, React.useEffect)(() => {
    if (manageVisibility && visible) {
      setDelay();
      defineSizes();
    }
  }, [visible, manageVisibility]);
  (0, React.useEffect)(() => {
    defineSizes();
    !manageVisibility && visible && setDelay();
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  const mainContainerClasses = (0, _classnames2.default)(color, className, 'swf-alert-container', (_classnames = {
    '--fixed': !defaultPosition,
    '--alignCenter': !isOverflowed && !expandedFinal,
    '--oneLineContent': oneLineText,
    '--expanded': expandedFinal,
    '--no-icon': !icon,
  }, _defineProperty(_classnames, '--vertical-'.concat(verticalPositions), verticalPositions), _defineProperty(_classnames, '--horizontal-'.concat(horizontalPositions), horizontalPositions), _classnames));
  const alertContentClasses = (0, _classnames2.default)('alert-content', {
    'text-align-center': textAlignCenter,
  });
  const textStyles = (0, _classnames2.default)({
    'text-container': true,
    '--overflowed': isOverflowed,
    '--setToOneLine': header && isOverflowed,
    '--expanded': expandedFinal,
  });
  const showLabel = expandedFinal ? 'less' : 'more';
  const isButtonWithText = action.type === 'acknowledge' || action.type === 'open';
  return visibleFinal && /* #__PURE__ */(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
      className: mainContainerClasses,
      ref,
      children: [icon && /* #__PURE__ */(0, _jsxRuntime.jsx)(_Icon.default, {
        className: 'alert-icon',
        icon,
      }), /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
        className: alertContentClasses,
        ref: function ref(el) {
          return contentRef.current = el;
        },
        children: [header && /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
          className: 'alert-header',
          children: header,
        }), content && /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
          ref: function ref(el) {
            return textRef.current = el;
          },
          className: textStyles,
          children: /* #__PURE__ */(0, _jsxRuntime.jsxs)('p', {
            className: 'alert-text',
            children: [content, ' ', textLinkProps && /* #__PURE__ */(0, _jsxRuntime.jsx)(_TextLink.default, {
              label: textLinkProps.label,
              href: textLinkProps.href,
              openWindows: textLinkProps.openWindows || false,
              download: textLinkProps.download || false,
              onClick: onTextLinkClicked,
            })],
          }),
        }), (isOverflowed || expandedFinal) && /* #__PURE__ */(0, _jsxRuntime.jsx)(_Button.default, {
          className: 'show-more-button',
          variant: 'tertiary',
          onClick: expandAction,
          children: 'Show '.concat(showLabel),
        })],
      }), /* #__PURE__ */(0, _jsxRuntime.jsx)(_Button.default, {
        className: (0, _classnames2.default)('alert-button', {
          dismiss: !isButtonWithText,
        }),
        label: isButtonWithText ? action.label || (action.type === 'acknowledge' ? 'Ok' : 'Open') : undefined,
        icon: !isButtonWithText ? 'x' : undefined,
        size: isButtonWithText ? 'md' : 'lg',
        onClick: buttonClicked,
        variant: 'inherit',
      })],
    }),
  });
});
Alert.defaultProps = {
  color: 'blue',
  action: {
    type: 'dismiss',
  },
  visible: true,
  className: '',
  onVisibilityChange: _utils2.noop,
  onTextLinkClicked: _utils2.noop,
  onExpandAction: _utils2.noop,
  onButtonClick: _utils2.noop,
  onCloseAction: _utils2.noop,
  verticalPositions: 'top',
  horizontalPositions: 'center',
};
Alert.propTypes = {
  action: _propTypes.default.shape({
    type: _propTypes.default.oneOf(['dismiss', 'acknowledge', 'open']).isRequired,
    href: _propTypes.default.string,
    label: _propTypes.default.string,
  }),
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

  /**
   * Can control only if manageExpanded = true
   */
  expanded: _propTypes.default.bool,
  header: _propTypes.default.string,
  icon: _propTypes.default.string,
  textAlignCenter: _propTypes.default.bool,
  manageExpanded: _propTypes.default.bool,
  color: _propTypes.default.oneOf(['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue']),
  textLinkProps: _propTypes.default.shape({
    label: _propTypes.default.string,
    href: _propTypes.default.string,
    openWindows: _propTypes.default.bool,
    download: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  }),
  onVisibilityChange: _propTypes.default.func,
  onExpandAction: _propTypes.default.func,
  onTextLinkClicked: _propTypes.default.func,
  onButtonClick: _propTypes.default.func,

  /**
   *  Can control only if manageVisibility = true
   */
  visible: _propTypes.default.bool,
  manageVisibility: _propTypes.default.bool,

  /**
   * Time before remove (in milliseconds)
   */
  delay: _propTypes.default.number,
  onCloseAction: _propTypes.default.func,
  manageButtonClick: _propTypes.default.bool,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  defaultPosition: _propTypes.default.bool,
  verticalPositions: _propTypes.default.oneOf(['top', 'center', 'bottom']),
  horizontalPositions: _propTypes.default.oneOf(['start', 'center', 'end']),
};

const _default = /* #__PURE__ */React.memo(Alert, (prev, next) => (0, _reactFastCompare.default)(prev, next));

exports.default = _default;
