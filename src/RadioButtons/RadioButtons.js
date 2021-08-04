import * as React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import { useCallback, useState } from 'react';
import RadioOption from './RadioOption.js';
import { RADIO_BUTTONS_LAYOUT } from './constants';
import RequiredLabel from '../RequiredLabel/RequiredLabel';
import { noop } from '../utils';

const RadioButtons = React.forwardRef((props, ref) => {
  const {
    value, invalid, manageValue, onChange, readonly, manageInvalid, onInvalid, layout, required,
  } = props;

  const [selectedValue, setSelectedValue] = useState(value);
  const [isInvalid, setIsInvalid] = useState(invalid);

  const selectedFinal = manageValue ? value : selectedValue;
  const invalidFinal = manageInvalid ? invalid : isInvalid;

  const optionClicked = useCallback((option) => {
    if (!readonly) {
      !manageValue && setSelectedValue(option.id);
      onChange(option);
    }
  }, [readonly, manageValue, onChange]);

  const optionInvalid = useCallback((e) => {
    !manageInvalid && setIsInvalid(true);
    onInvalid(e);
  }, [manageInvalid, onInvalid]);

  const renderValue = (option, name) => {
    const {
      id, label, value, checked, readonly, disabled,
    } = option;

    const isChecked = selectedFinal ? selectedFinal === id : checked;
    const isHorizontal = layout === RADIO_BUTTONS_LAYOUT.horizontal;

    return (
      <RadioOption
        key={id}
        id={id}
        label={label}
        value={value}
        checked={isChecked}
        readonly={readonly || props.readonly}
        disabled={disabled || props.disabled}
        required={required}
        invalid={invalidFinal}
        name={name}
        onChangeAction={optionClicked}
        onInvalidAction={optionInvalid}
        isHorizontal={isHorizontal}
      />
    );
  };

  const {
    label, name, options, visible,
    className, labelClassName,
  } = props;

  return (
    visible
      ? (
        <>
          <div className={classnames(className, 'radio-buttons-container')} ref={ref}>
            <div className={classnames({
              'radio-buttons-header': true,
              invalid: invalidFinal,
            })}
            >
              {(label || required)
                        && (
                        <RequiredLabel
                          className={labelClassName}
                          invalid={invalidFinal}
                          required={required}
                          label={label}
                        />
                        )}
            </div>
            <div className="group-of-radio-buttons">
              {options.map((option) => renderValue(option, name))}
            </div>
          </div>
        </>
      )
      : null
  );
});

RadioButtons.defaultProps = {
  disabled: false,
  layout: RADIO_BUTTONS_LAYOUT.vertical,
  manageValue: false,
  options: [],
  readonly: false,
  required: false,
  manageInvalid: false,
  visible: true,
  onChange: noop,
  onInvalid: noop,
  className: {},
  labelClassName: {},
};

RadioButtons.propTypes = {
  disabled: propTypes.bool,
  invalid: propTypes.bool,
  label: propTypes.string,
  layout: propTypes.oneOf(
    [RADIO_BUTTONS_LAYOUT.vertical, RADIO_BUTTONS_LAYOUT.horizontal],
  ),
  manageValue: propTypes.bool,
  manageInvalid: propTypes.bool,
  name: propTypes.string,
  options: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      label: propTypes.string,
      value: propTypes.string,
      checked: propTypes.bool,
      readonly: propTypes.bool,
      disabled: propTypes.bool,
    }),
  ),
  readonly: propTypes.bool,
  required: propTypes.bool,
  value: propTypes.string,
  onChange: propTypes.func,
  onInvalid: propTypes.func,
  visible: propTypes.bool,
  className: propTypes.object,
  labelClassName: propTypes.object,
};

export default RadioButtons;
