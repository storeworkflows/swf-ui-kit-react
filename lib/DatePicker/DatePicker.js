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

const _Input = _interopRequireDefault(require('../Input/Input'));

const _Button = _interopRequireDefault(require('../Button/Button'));

const _Popover = _interopRequireDefault(require('../Popover/Popover'));

const _SmallCalendar = _interopRequireDefault(require('../SmallCalendar/SmallCalendar'));

const _jsxRuntime = require('react/jsx-runtime');
const _utils = require('./utils');

const _utils2 = require('../SmallCalendar/utils');

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

const DatePicker = /* #__PURE__ */React.forwardRef((props, _ref) => {
  let _inputRef$current;

  const { opened } = props;
  const { value } = props;
  const { format } = props;
  const { min } = props;
  const { max } = props;
  const { visible } = props;
  const { invalid } = props;
  const { manageValue } = props;
  const { onValueChange } = props;
  const { onValueSet } = props;
  const { manageInvalid } = props;
  const { onInvalid } = props;
  const { manageOpened } = props;
  const { onOpen } = props;

  const _useState = (0, React.useState)((0, _moment.default)((0, _utils2.checkDate)(value)).format(format));
  const _useState2 = _slicedToArray(_useState, 2);
  const dateValue = _useState2[0];
  const setDateValue = _useState2[1];

  const _useState3 = (0, React.useState)(opened);
  const _useState4 = _slicedToArray(_useState3, 2);
  const isOpened = _useState4[0];
  const setIsOpened = _useState4[1];

  const _useState5 = (0, React.useState)(invalid);
  const _useState6 = _slicedToArray(_useState5, 2);
  const isInvalid = _useState6[0];
  const setIsInvalid = _useState6[1];

  const _useState7 = (0, React.useState)([]);
  const _useState8 = _slicedToArray(_useState7, 2);
  const errorMessages = _useState8[0];
  const setErrorMessages = _useState8[1];

  const inputRef = (0, React.useRef)(null);
  (0, React.useEffect)(() => manageOpened && setIsOpened(opened), [manageOpened, opened]);
  (0, React.useEffect)(() => manageInvalid && setIsInvalid(invalid), [manageInvalid, invalid]);

  const setDateFromProps = function setDateFromProps() {
    if ((0, _moment.default)(value, format, true).isValid()) {
      const errors = (0, _utils.getErrorMessages)(value, format, min, max);
      invalidInput(errors, value);
      setDateValue((0, _moment.default)(value).format(format));
    } else setDateValue(value);
  };

  const changeValue = function changeValue(e) {
    e.preventDefault();
    const input = e.nativeEvent.data;
    const newValue = (0, _utils.addCharToDate)(format, dateValue, input);
    !manageValue && setDateValue(newValue);

    if (!newValue.length) {
      onValueSet({
        value: '',
      });
      invalidInput([], '');
    } else if ((0, _moment.default)(newValue, format, true).isValid()) {
      const errors = (0, _utils.getErrorMessages)(newValue, format, min, max);
      invalidInput(errors, newValue);
      !errors.length && onValueSet({
        value: newValue,
      });
    } // onValueChange({oldValue: dateValue, input, newValue});

    onValueChange({
      input,
      newValue,
    });
  };

  var invalidInput = (0, React.useCallback)(function () {
    const errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    const date = arguments.length > 1 ? arguments[1] : undefined;
    const isInvalidCurrent = errors.length > 0;
    const hasErrorChanges = (0, _utils.hasChanges)(errors, errorMessages);

    if (!manageInvalid) {
      setIsInvalid(isInvalidCurrent);
      hasErrorChanges && setErrorMessages(errors);
    }

    if (hasErrorChanges || isInvalidCurrent !== isInvalid) {
      onInvalid({
        isInvalid: isInvalidCurrent,
        errors,
        date,
      });
    }
  }, [manageInvalid, onInvalid, isInvalid, errorMessages]);
  const dateSelected = (0, React.useCallback)((date) => {
    const newValue = (0, _moment.default)(date).format(format);
    const errors = (0, _utils.getErrorMessages)(newValue, format, min, max);
    invalidInput(errors, newValue);
    !manageValue && setDateValue(newValue);
    !errors.length && onValueSet({
      value: newValue,
    });
    onValueChange({
      newValue,
    });
  }, [format, min, max, manageValue, onValueChange, onValueSet, invalidInput]);
  const openCalendar = (0, React.useCallback)((e, onFocusClose) => {
    if (!onFocusClose || isOpened) {
      let openState = isOpened;

      if (!manageOpened) {
        openState = !isOpened;
        setIsOpened(openState);
        const isValidStringDate = (0, _moment.default)(dateValue, format).isValid();
        setDateValue(isValidStringDate ? (0, _moment.default)(dateValue).format(format) : '');
      }

      onOpen({
        openState,
      });

      if (!onFocusClose && !openState) {
        const errors = (0, _utils.getErrorMessages)(dateValue, format, min, max);
        invalidInput(errors, dateValue);
      }
    }
  }, [isOpened, invalidInput, dateValue, format, min, max, onOpen]);

  const onBlur = function onBlur(e) {
    let _e$target; let _e$relatedTarget; let
      _e$relatedTarget$pare;

    const sameParent = ((_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.parentElement) === ((_e$relatedTarget = e.relatedTarget) === null || _e$relatedTarget === void 0 ? void 0 : (_e$relatedTarget$pare = _e$relatedTarget.parentElement) === null || _e$relatedTarget$pare === void 0 ? void 0 : _e$relatedTarget$pare.parentElement);

    if (!sameParent) {
      const errors = (0, _utils.getErrorMessages)(dateValue, format, min, max);
      invalidInput(errors, dateValue);
    }
  };

  (0, React.useEffect)(() => manageValue && setDateFromProps(), [value]);
  (0, React.useEffect)(() => {
    setDateFromProps();

    if (inputRef !== null && inputRef !== void 0 && inputRef.current) {
      const inputEl = inputRef.current.querySelector('input');

      inputEl.onclick = function () {
        return inputEl.selectionStart = inputEl.selectionEnd = inputEl.value.length;
      };

      inputEl.onkeydown = function () {
        return setTimeout(() => inputEl.selectionStart = inputEl.selectionEnd = inputEl.value.length, 0);
      };
    }
  }, []);

  const renderInput = function renderInput() {
    const { label } = props;
    const _props$message = props.message;
    const message = _props$message === void 0 ? [] : _props$message;
    const { required } = props;
    const { readonly } = props;
    const { name } = props;
    const { className } = props;
    const allMessages = errorMessages.concat(message);
    const dateStr = dateValue.toString();
    return /* #__PURE__ */(0, _jsxRuntime.jsx)(_Input.default, {
      label,
      placeholder: label ? '' : format,
      value: dateStr,
      name,
      manageInvalid: true,
      invalid: isInvalid,
      onInvalid: function onInvalid(e) {
        return invalidInput([e], dateValue);
      },
      onChange: changeValue,
      onFocus: function onFocus(e) {
        return openCalendar(e, true);
      },
      message: allMessages,
      required,
      className,
      onBlur,
      readonly,
      manageValue: true,
      children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_Input.default.End, {
        children: readonly ? /* #__PURE__ */(0, _jsxRuntime.jsx)('span', {}) : /* #__PURE__ */(0, _jsxRuntime.jsx)(_Button.default, {
          className: 'datepicker-button',
          icon: 'calendar-event',
          variant: 'tertiary',
          onClick: openCalendar,
        }),
      }),
    });
  };

  const calendarPositions = [{
    target: 'bottom-end',
    content: 'top-end',
  }, {
    target: 'top-end',
    content: 'bottom-end',
  }, {
    target: 'bottom-center',
    content: 'top-center',
  }, {
    target: 'top-center',
    content: 'bottom-center',
  }, {
    target: 'center-end',
    content: 'center-start',
  }, {
    target: 'center-start',
    content: 'center-end',
  }];
  const popoverTarget = inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.getElementsByClassName('input-group')[0];
  return visible && /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
    ref: function ref(el) {
      inputRef.current = el;
      _ref = {
        el,
      };
    },
    children: [renderInput(), popoverTarget && /* #__PURE__ */(0, _jsxRuntime.jsx)(_Popover.default, {
      hideTail: true,
      manageOpened: true,
      opened: isOpened,
      positions: calendarPositions,
      positionTarget: {
        current: popoverTarget,
      },
      onOuterPopoverClicked: openCalendar,
      children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_Popover.default.Content, {
        children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_SmallCalendar.default, {
          onSelected: dateSelected,
          selectedDate: dateValue,
          manageValue: true,
        }),
      }),
    })],
  });
});
DatePicker.defaultProps = {
  value: new Date(),
  format: 'YYYY-MM-DD',
  required: false,
  readonly: false,
  invalid: false,
  opened: false,
  manageOpened: false,
  manageInvalid: false,
  manageValue: false,
  onOpen: function onOpen() {
    return void 0;
  },
  onInvalid: function onInvalid() {
    return void 0;
  },
  onValueSet: function onValueSet() {
    return void 0;
  },
  onValueChange: function onValueChange() {
    return void 0;
  },
  visible: true,
};
DatePicker.propTypes = {
  name: _propTypes.default.string,
  label: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  min: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  max: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  format: _propTypes.default.string,
  required: _propTypes.default.bool,
  readonly: _propTypes.default.bool,
  invalid: _propTypes.default.bool,
  opened: _propTypes.default.bool,
  manageOpened: _propTypes.default.bool,
  manageInvalid: _propTypes.default.bool,
  manageValue: _propTypes.default.bool,
  message: _propTypes.default.arrayOf(_propTypes.default.shape({
    status: _propTypes.default.oneOf(['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue']),
    content: _propTypes.default.string,
    icon: _propTypes.default.string,
    className: _propTypes.default.object,
    iconSize: _propTypes.default.number,
  })),
  onOpen: _propTypes.default.func,
  onInvalid: _propTypes.default.func,
  onValueChange: _propTypes.default.func,
  onValueSet: _propTypes.default.func,
  visible: _propTypes.default.bool,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
};
const _default = DatePicker;
exports.default = _default;
