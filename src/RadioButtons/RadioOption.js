import * as React from 'react';
import propTypes from 'prop-types';

import classnames from 'classnames';
import isEqual from 'react-fast-compare';
import { noop } from '../utils';

const RadioOption = React.forwardRef((props, ref) => {
  const {
    id,
    checked,
    readonly,
    disabled,
    name,
    value,
    label,
    onChangeAction,
    onInvalidAction,
    invalid,
    isHorizontal,
    required,
    className,
  } = props;

  const optionClasses = classnames(
    className,
    'radio-option-container',
    {
      disabled,
      readonly,
      invalid,
      horizontal: isHorizontal,
    },
  );

  const canChangeValue = !readonly && !disabled;
  return (
    <div
      className={optionClasses}
      onClick={() => canChangeValue && onChangeAction({ id, name, value })}
      ref={ref}
    >
      <input
        className={classnames('radio-option', { checked })}
        type="radio"
        id={id}
        checked={checked}
        value={value || label || ''}
        disabled={disabled}
        readOnly={readonly}
        name={name}
        required={required}
        onChange={() => void 0}
        onInvalid={(e) => onInvalidAction({ e, id })}
      />
      <label className="radio-option-label">{label}</label>
    </div>
  );
});

RadioOption.defaultProps = {
  name: '',
  label: '',
  className: '',
  onChangeAction: noop,
  onInvalidAction: noop,
};

RadioOption.propTypes = {
  id: propTypes.string,
  label: propTypes.string,
  value: propTypes.string,
  checked: propTypes.bool,
  readonly: propTypes.bool,
  disabled: propTypes.bool,
  invalid: propTypes.bool,
  isHorizontal: propTypes.bool,
  name: propTypes.string,
  onChangeAction: propTypes.func,
  onInvalidAction: propTypes.func,
  required: propTypes.bool,
  className: propTypes.oneOfType([propTypes.object, propTypes.string]),
};

export default React.memo(RadioOption, (prev, next) => isEqual(prev, next));
