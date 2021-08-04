function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const React = _interopRequireWildcard(require('react'));

const _classnames2 = _interopRequireDefault(require('classnames'));

const _jsxRuntime = require('react/jsx-runtime');
const _constants = require('./constants');

const _propTypes = _interopRequireDefault(require('prop-types'));

const _Button = _interopRequireDefault(require('../Button/Button'));

const _findByType = _interopRequireWildcard(require('../utils/findByType'));

const _utils = require('../utils');

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

const Modal = function Modal(props) {
  let _classnames;

  const modalRef = (0, React.useRef)(null);

  const _useState = (0, React.useState)(_constants.SWF_MODAL.MODAL_SIZE.DEFAULT);
  const _useState2 = _slicedToArray(_useState, 2);
  const currentStatus = _useState2[0];
  const setCurrentStatus = _useState2[1];

  const _useState3 = (0, React.useState)(true);
  const _useState4 = _slicedToArray(_useState3, 2);
  const openModal = _useState4[0];
  const setOpenModal = _useState4[1];

  const _useState5 = (0, React.useState)(true);
  const _useState6 = _slicedToArray(_useState5, 2);
  const mobileFooterOpened = _useState6[0];
  const setMobileFooterOpened = _useState6[1];

  const { showPrint } = props;
  const { closeRef } = props;
  const { manageOpened } = props;
  const { onClose } = props;
  const { display } = props;
  const { headerElements } = props;
  const { animation } = props;
  const { children } = props;
  const { onSizeChanged } = props;

  const expand = function expand() {
    const isFullSize = currentStatus === _constants.SWF_MODAL.MODAL_SIZE.FULL;
    const modalNode = modalRef === null || modalRef === void 0 ? void 0 : modalRef.current.querySelector('.modal-dialog');

    if (isFullSize) {
      modalNode.removeAttribute('style');
      setCurrentStatus(_constants.SWF_MODAL.MODAL_SIZE.DEFAULT);
      return;
    }

    modalNode.setAttribute('style', 'width: 100%; height: 98%;');
    setCurrentStatus(_constants.SWF_MODAL.MODAL_SIZE.FULL);
  };

  const desktopButtons = function desktopButtons() {
    const isFullSize = currentStatus === _constants.SWF_MODAL.MODAL_SIZE.FULL;
    const status = isFullSize ? _constants.SWF_MODAL.MODAL_SIZE.DEFAULT : _constants.SWF_MODAL.MODAL_SIZE.FULL;
    return /* #__PURE__ */(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [showPrint && isFullSize && /* #__PURE__ */(0, _jsxRuntime.jsx)(_Button.default, {
        icon: 'printer',
        variant: 'tertiary',
        bare: true,
        size: 'md',
        configAria: {
          button: {
            'aria-label': 'Print',
          },
        },
        tooltipContent: 'Print',
        onClick: function onClick() {
          return window.print();
        },
      }), /* #__PURE__ */(0, _jsxRuntime.jsx)(_Button.default, {
        icon: isFullSize ? 'arrows-angle-contract' : 'arrows-angle-expand',
        variant: 'tertiary',
        bare: true,
        size: 'md',
        configAria: {
          button: {
            'aria-label': 'Expand',
          },
        },
        tooltipContent: isFullSize ? 'Collapse' : 'Expand',
        onClick: function onClick() {
          return setCurrentStatus(status);
        },
      }), /* #__PURE__ */(0, _jsxRuntime.jsx)(_Button.default, {
        icon: 'x',
        innerRef: closeRef,
        variant: 'tertiary',
        bare: true,
        size: 'md',
        slot: 'trigger',
        configAria: {
          button: {
            'aria-label': 'Close',
          },
        },
        tooltipContent: 'Close',
        onClick: function onClick() {
          !manageOpened && setOpenModal(false);
          onClose();
        },
      })],
    });
  };

  const mobileButtons = function mobileButtons() {
    return /* #__PURE__ */(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_Button.default, {
        icon: 'three-dots',
        variant: 'tertiary',
        bare: true,
        size: 'md',
        configAria: {
          button: {
            'aria-label': 'Show Actions',
          },
        },
        tooltipContent: 'Show Actions',
        onClick: function onClick() {
          return setMobileFooterOpened(true);
        },
      }),
    });
  };

  (0, React.useEffect)(() => {
    onSizeChanged(currentStatus);
  }, [currentStatus]);
  (0, React.useEffect)(() => {
    let _modalRef$current;

    modalRef === null || modalRef === void 0 ? void 0 : (_modalRef$current = modalRef.current) === null || _modalRef$current === void 0 ? void 0 : _modalRef$current.addEventListener('click', (event) => {
      mobileFooterOpened && setMobileFooterOpened(false);
    });

    if (mobileFooterOpened) {
      let _modalRef$current2; let _modalRef$current2$qu; let
        _modalRef$current3;

      const footerContentHeight = modalRef === null || modalRef === void 0 ? void 0 : (_modalRef$current2 = modalRef.current) === null || _modalRef$current2 === void 0 ? void 0 : (_modalRef$current2$qu = _modalRef$current2.querySelector('.footer-content')) === null || _modalRef$current2$qu === void 0 ? void 0 : _modalRef$current2$qu.offsetHeight;
      modalRef === null || modalRef === void 0 ? void 0 : (_modalRef$current3 = modalRef.current) === null || _modalRef$current3 === void 0 ? void 0 : _modalRef$current3.style.setProperty('--swf-modal-footer-height', `${footerContentHeight}px`);
    }
  }, [mobileFooterOpened]);
  const isFullSize = currentStatus === _constants.SWF_MODAL.MODAL_SIZE.FULL;
  const showModal = manageOpened ? props.openModal : openModal;

  const isMobile = _constants.SWF_MODAL.MOBILE_REGEXP.test(navigator.userAgent);

  return showModal ? /* #__PURE__ */(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
      className: (0, _classnames2.default)('swf-modal-overlay', isMobile && '--mobile'),
      ref: function ref(elm) {
        return modalRef.current = elm;
      },
      children: /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
        className: (0, _classnames2.default)({
          modal: true,
          '--animated': animation,
          '--mobile': isMobile,
          '--desktop': !isMobile,
        }),
        children: /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
          className: (0, _classnames2.default)((_classnames = {
            'modal-dialog': true,
          }, _defineProperty(_classnames, '--'.concat(display), true), _defineProperty(_classnames, '--full-'.concat(isMobile ? 'mobile' : 'desktop'), isMobile || isFullSize), _classnames)),
          children: [/* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
            className: (0, _classnames2.default)({
              'modal-header': true,
              '--mobile': isMobile,
              '--desktop-content': !isMobile && headerElements === 2,
              '--desktop': !isMobile && headerElements === 3,
            }),
            children: [/* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
              className: 'additional-buttons',
              children: (0, _findByType.default)(children, ' '),
            }), /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
              className: 'main-buttons',
              children: isMobile ? mobileButtons() : desktopButtons(),
            }), /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
              className: 'header-content',
              children: (0, _findByType.default)(children, 'Header'),
            })],
          }), /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
            className: 'modal-body',
            children: (0, _findByType.default)(children, 'Body'),
          }), isMobile ? /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
            className: (0, _classnames2.default)({
              'menu-background': true,
              '--active': mobileFooterOpened,
            }),
          }) : '', /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
            className: (0, _classnames2.default)({
              'modal-footer': true,
              '--mobile': isMobile,
              '--active': mobileFooterOpened,
            }),
            children: isMobile ? /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
              className: 'footer-content',
              children: [(0, _findByType.default)(children, 'Footer'), (0, _findByType.default)(children, 'HeaderButtons')],
            }) : (0, _findByType.default)(children, 'Footer'),
          })],
        }),
      }),
    }),
  }) : null;
};

Modal.Buttons = (0, _findByType.createSubComponent)('Buttons');
Modal.Header = (0, _findByType.createSubComponent)('Header');
Modal.Body = (0, _findByType.createSubComponent)('Body');
Modal.Footer = (0, _findByType.createSubComponent)('Footer');
Modal.defaultProps = {
  openModal: false,
  showPopover: false,
  manageOpened: false,
  onClose: _utils.noop,
  popoverContent: {},
  display: 'grid',
  headerElements: 2,
  showPrint: false,
  closeRef: /* #__PURE__ */React.createRef(),
  withAnimation: false,
  onSizeChanged: _utils.noop,
};
Modal.propTypes = {
  openModal: _propTypes.default.bool,
  showPopover: _propTypes.default.bool,
  manageOpened: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  popoverContent: _propTypes.default.shape({
    tagline: _propTypes.default.object,
    content: _propTypes.default.object,
    actions: _propTypes.default.object,
  }),
  animation: _propTypes.default.bool,
  display: _propTypes.default.oneOf(['block', 'inline', 'inline-block', 'grid', 'flex', 'inline-grid', 'inline-flex', 'none']),
  headerElements: _propTypes.default.number,
  showPrint: _propTypes.default.bool,
  closeRef: _propTypes.default.object,
  onSizeChanged: _propTypes.default.func,
};
const _default = Modal;
exports.default = _default;
