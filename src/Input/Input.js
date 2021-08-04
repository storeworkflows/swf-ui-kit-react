import * as React from 'react';
import classnames from 'classnames';

import PropTypes from 'prop-types';
import propTypes from 'prop-types';
import { useState } from 'react';
import findByType, { createSubComponent } from '../utils/findByType';
import { noop } from '../utils';
import Icon from '../Icon/Icon';
import InfoMessage from '../InfoMessage/InfoMessage';

const Start = () => null;
const End = () => null;

const Input = (props) => {
  const {
    children, readonly, disabled, manageInvalid, onInvalid, invalid, value, manageValue,
  } = props;

  const [isInvalid, setIsInvalid] = useState(invalid);
  const [hasStart, setHasStart] = useState(false);
  const [hasEnd, setHasEnd] = useState(false);
  const [focused, setFocused] = useState(false);
  const [valueState, setValueState] = useState(value);

  const valueFinal = manageValue ? value : valueState;
  const invalidFinal = manageInvalid ? invalid : isInvalid;

  const renderStart = () => {
    const start = findByType(children, 'Start');
    const classes = classnames({
      'form-control--start': true,
      '--invalid': invalidFinal,
      '--focused': focused,
      '--readonly': readonly,
      '--disabled': disabled,
    });

    if (!start || start.length < 1) return null;

    !hasStart && setHasStart(true);

    return <div className={classes}>{start}</div>;
  };

  const renderEnd = () => {
    const end = findByType(children, 'End');
    const classes = classnames({
      'form-control--end': true,
      '--invalid': invalidFinal,
      '--readonly': readonly,
      '--disabled': disabled,
      '--focused': focused,
    });

    if (!end || end.length < 1) return null;

    !hasEnd && setHasEnd(true);

    return <div className={classes}>{end}</div>;
  };

  // type is one of "onBlur", "onInput", "onFocus"
  const onEvent = (event, type, eventValue = valueFinal) => {
    const canChange = !readonly && !disabled;

    if (!canChange) return;

    !manageValue && setValueState(eventValue);
    setFocused(type !== 'onBlur');
    props[type](event);
  };

  const onInvalidAction = (e) => {
    !manageInvalid && setIsInvalid(true);
    onInvalid(e);
  };

  const {
    label,
    name = 'name',
    placeholder,
    required,
    type,
    step,
    autofocus,
    max,
    min,
    maxlength,
    minlength,
    pattern,
    multiple,
    message,
    className,
    containerClass,
    inputClass,
    onChange, onKeyDown, onPaste,
  } = props;

  const _hasLabel = label !== undefined;
  const _hasMessages = message.length > 0;
  const _moved = focused || valueFinal || hasStart;

  const containerClasses = classnames(className, {
    'swf-form-group': true,
    '--invalid': invalidFinal,
    '--readonly': readonly,
    '--focused': focused,
    [containerClass]: true,
  });

  const labelClasses = classnames({
    'inp-label': true,
    '--moved': _moved,
    '--focused': focused,
    '--invalid': invalidFinal,
    '--readonly': readonly,
  });

  const requiredClasses = classnames({
    'inp-required': true,
    '--focused': focused,
    '--invalid': invalidFinal,
  });

  const inputClasses = classnames({
    'form-control': true,
    'no-start-border': hasStart,
    'no-end-border': hasEnd,
    '--invalid': invalidFinal,
    '--readonly': readonly,
    [inputClass]: true,
  });

  return (
    <>
      <div
        className={containerClasses}
        ref={(elm) => props.internalRef.current = elm}
      >
        {_hasLabel
                && (
                <span className={labelClasses}>
                  <label htmlFor="name">{label}</label>
                  {required && <Icon icon="asterisk" className={requiredClasses} customSize={7} />}
                </span>
                )}
        <div className="input-group">
          {renderStart()}
          <input
            className={inputClasses}
            id="name"
            name={name}
            placeholder={placeholder}
            step={step}
            type={type}
            aria-required={required}
            aria-invalid={invalidFinal}
            aria-readonly={readonly}
            value={valueFinal}
            readOnly={readonly}
            required={required}
            autoFocus={autofocus}
            max={max}
            min={min}
            maxLength={maxlength}
            minLength={minlength}
            pattern={pattern}
            disabled={disabled}
            multiple={multiple}
            onChange={onChange}
            onPaste={onPaste}
            onKeyDown={onKeyDown}
            onFocus={(e) => onEvent(e, 'onFocus')}
            onBlur={(e) => onEvent(e, 'onBlur')}
            onInput={(e) => onEvent(e, 'onInput', e.target.value)}
            onInvalid={onInvalidAction}
          />
          {renderEnd()}
        </div>
        {_hasMessages
                && message.map((el, index) => (el && (
                <InfoMessage
                  {...el}
                  key={index}
                />
                )))}
      </div>
    </>
  );
};

Input.Start = createSubComponent('Start');
Input.End = createSubComponent('End');

Input.defaultProps = {
  autofocus: false,
  disabled: false,
  invalid: false,
  manageInvalid: false,
  message: [],
  multiple: false,
  readonly: false,
  required: false,
  inputClass: '',
  containerClass: '',
  step: 'any',
  type: 'text',
  value: '',
  internalRef: React.createRef(),
  onInput: noop,
  onChange: noop,
  onBlur: noop,
  onFocus: noop,
  onInvalid: noop,
  onKeyDown: noop,
  onPaste: noop,
  className: {},
};

Input.propTypes = {
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  manageInvalid: PropTypes.bool,
  manageValue: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  maxlength: PropTypes.number,
  minlength: PropTypes.number,
  message: PropTypes.arrayOf(PropTypes.shape({
    status: PropTypes.oneOf(['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue']),
    content: PropTypes.string,
    icon: PropTypes.string,
    className: propTypes.object,
    iconSize: PropTypes.number,
    delay: propTypes.number,
  })),
  multiple: PropTypes.bool,
  name: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  inputClass: PropTypes.string,
  containerClass: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  step: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['any']),
  ]),
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'date', 'datetime', 'datetime-local', 'month', 'week', 'time']),
  value: PropTypes.string,
  onInput: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  onInvalid: PropTypes.func,
  onPaste: PropTypes.func,
  internalRef: PropTypes.oneOfType([
    propTypes.func,
    propTypes.shape({ current: propTypes.any }),
  ]),
  className: propTypes.oneOfType([propTypes.string, propTypes.object]),
};

export default Input;
