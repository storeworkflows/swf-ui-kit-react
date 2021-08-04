function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _moment = _interopRequireDefault(require('moment'));

const React = _interopRequireWildcard(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _CalendarMonth = _interopRequireDefault(require('./InnerComponents/CalendarMonth'));

const _ArrowButton = _interopRequireDefault(require('./InnerComponents/ArrowButton'));

const _jsxRuntime = require('react/jsx-runtime');
const _utils = require('./utils');

const _reactFastCompare = _interopRequireDefault(require('react-fast-compare'));

const _utils2 = require('../utils');

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) {
  let _i = arr && (typeof Symbol !== 'undefined' && arr[Symbol.iterator] || arr['@@iterator']); if (_i == null) return; const _arr = []; let _n = true; let _d = false; let _s; let
    _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr;
}

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const SmallCalendar = /* #__PURE__ */React.forwardRef((props, ref) => {
  const { selectedDate } = props;
  const { onSelected } = props;
  const { manageValue } = props;

  const _useWrappedState = (0, _utils.useWrappedState)(selectedDate, _utils.checkDate);
  const _useWrappedState2 = _slicedToArray(_useWrappedState, 2);
  const selected = _useWrappedState2[0];
  const setSelectedDate = _useWrappedState2[1];

  const _useWrappedState3 = (0, _utils.useWrappedState)(selectedDate, _utils.getDefinedDate);
  const _useWrappedState4 = _slicedToArray(_useWrappedState3, 2);
  const openedDateValue = _useWrappedState4[0];
  const setOpenedDateValue = _useWrappedState4[1];

  (0, React.useEffect)(() => {
    if (manageValue) {
      setSelectedDate(selectedDate);
      setOpenedDateValue(selectedDate);
    }
  }, [selectedDate, manageValue]);
  const selectAction = (0, React.useCallback)((date) => {
    if (!manageValue) {
      setSelectedDate(date);
      setOpenedDateValue(date);
    }

    onSelected(date);
  }, [manageValue, onSelected]);
  const changeMonth = (0, React.useCallback)((e, isNext, selectedDate) => {
    e === null || e === void 0 ? void 0 : e.stopPropagation();
    const additionValue = isNext ? 1 : -1;
    const changedTo = (0, _moment.default)(openedDateValue).add(additionValue, 'month');

    if (selectedDate) {
      !manageValue && setSelectedDate(selectedDate);
      onSelected(selectedDate);
    }

    setOpenedDateValue(changedTo.toDate());
  }, [openedDateValue]);
  return /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
    ref,
    children: /* #__PURE__ */(0, _jsxRuntime.jsxs)(_CalendarMonth.default, {
      openedDate: openedDateValue,
      selectedDate: selected,
      onSelected: selectAction,
      manageSelected: true,
      children: [/* #__PURE__ */(0, _jsxRuntime.jsx)(_CalendarMonth.default.HeaderStart, {
        children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_ArrowButton.default, {
          onClick: changeMonth,
        }),
      }), /* #__PURE__ */(0, _jsxRuntime.jsx)(_CalendarMonth.default.HeaderEnd, {
        children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_ArrowButton.default, {
          isNext: true,
          onClick: changeMonth,
        }),
      })],
    }),
  });
});
SmallCalendar.defaultProps = {
  openedDate: null,
  onSelected: _utils2.noop,
};
SmallCalendar.propTypes = {
  selectedDate: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.object]),
  onSelected: _propTypes.default.func,
  manageValue: _propTypes.default.bool,
};

const _default = /* #__PURE__ */React.memo(SmallCalendar, (prev, next) => (0, _reactFastCompare.default)(prev, next));

exports.default = _default;
