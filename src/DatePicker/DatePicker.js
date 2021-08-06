import moment from 'moment';
import * as React from 'react';
import propTypes from 'prop-types';
import {
  useCallback, useEffect, useRef, useState,
} from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Popover from '../Popover/Popover';
import SmallCalendar from '../SmallCalendar/SmallCalendar';

import { addCharToDate, getErrorMessages, hasChanges } from './utils';
import { checkDate } from '../SmallCalendar/utils';

const DatePicker = React.forwardRef((props, ref) => {
  const {
    opened, value, format, min, max, visible, invalid,
    manageValue, onValueChange, onValueSet,
    manageInvalid, onInvalid,
    manageOpened, onOpen,
  } = props;

  const [dateValue, setDateValue] = useState(moment(checkDate(value)).format(format));
  const [isOpened, setIsOpened] = useState(opened);
  const [isInvalid, setIsInvalid] = useState(invalid);
  const [errorMessages, setErrorMessages] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => manageOpened && setIsOpened(opened), [manageOpened, opened]);
  useEffect(() => manageInvalid && setIsInvalid(invalid), [manageInvalid, invalid]);

  const setDateFromProps = () => {
    if (moment(value, format, true).isValid()) {
      const errors = getErrorMessages(value, format, min, max);
      invalidInput(errors, value);
      setDateValue(moment(value).format(format));
    } else setDateValue(value);
  };

  const changeValue = (e) => {
    e.preventDefault();
    const input = e.nativeEvent.data;
    const newValue = addCharToDate(format, dateValue, input);

    !manageValue && setDateValue(newValue);

    if (!newValue.length) {
      onValueSet({ value: '' });
      invalidInput([], '');
    } else if (moment(newValue, format, true).isValid()) {
      const errors = getErrorMessages(newValue, format, min, max);
      invalidInput(errors, newValue);

      !errors.length && onValueSet({ value: newValue });
    }

    // onValueChange({oldValue: dateValue, input, newValue});
    onValueChange({ input, newValue });
  };

  const invalidInput = useCallback((errors = [], date) => {
    const isInvalidCurrent = errors.length > 0;
    const hasErrorChanges = hasChanges(errors, errorMessages);

    if (!manageInvalid) {
      setIsInvalid(isInvalidCurrent);
      hasErrorChanges && setErrorMessages(errors);
    }

    if (hasErrorChanges || (isInvalidCurrent !== isInvalid)) {
      onInvalid({
        isInvalid: isInvalidCurrent,
        errors,
        date,
      });
    }
  }, [manageInvalid, onInvalid, isInvalid, errorMessages]);

  const dateSelected = useCallback((date) => {
    const newValue = moment(date).format(format);

    const errors = getErrorMessages(newValue, format, min, max);
    invalidInput(errors, newValue);
    !manageValue && setDateValue(newValue);

    !errors.length && onValueSet({ value: newValue });
    onValueChange({ newValue });
  }, [format, min, max, manageValue, onValueChange, onValueSet, invalidInput]);

  const openCalendar = useCallback((e, onFocusClose) => {
    if (!onFocusClose || isOpened) {
      let openState = isOpened;

      if (!manageOpened) {
        openState = !isOpened;
        setIsOpened(openState);

        const isValidStringDate = moment(dateValue, format).isValid();
        setDateValue(isValidStringDate ? moment(dateValue).format(format) : '');
      }

      onOpen({ openState });
      if (!onFocusClose && !openState) {
        const errors = getErrorMessages(dateValue, format, min, max);
        invalidInput(errors, dateValue);
      }
    }
  }, [isOpened, invalidInput, dateValue, format, min, max, onOpen]);

  const onBlur = (e) => {
    const sameParent = e.target?.parentElement === e.relatedTarget?.parentElement?.parentElement;

    if (!sameParent) {
      const errors = getErrorMessages(dateValue, format, min, max);
      invalidInput(errors, dateValue);
    }
  };

  useEffect(() => manageValue && setDateFromProps(), [value]);

  useEffect(() => {
    setDateFromProps();
    if (inputRef?.current) {
      const inputEl = inputRef.current.querySelector('input');
      inputEl.onclick = () => inputEl.selectionStart = inputEl.selectionEnd = inputEl.value.length;

      inputEl.onkeydown = () => setTimeout(() => inputEl.selectionStart = inputEl.selectionEnd = inputEl.value.length, 0);
    }
  }, []);

  const renderInput = () => {
    const {
      label, message = [], required, readonly, name, className,
    } = props;
    const allMessages = errorMessages.concat(message);
    const dateStr = dateValue.toString();

    return (
      <Input
        label={label}
        placeholder={label ? '' : format}
        value={dateStr}
        name={name}
        manageInvalid
        invalid={isInvalid}
        onInvalid={(e) => invalidInput([e], dateValue)}
        onChange={changeValue}
        onFocus={(e) => openCalendar(e, true)}
        message={allMessages}
        required={required}
        className={className}
        onBlur={onBlur}
        readonly={readonly}
        manageValue
      >
        <Input.End>
          {readonly ? <span /> : (
            <Button
              className="datepicker-button"
              icon="calendar-event"
              variant="tertiary"
              onClick={openCalendar}
            />
          )}
        </Input.End>
      </Input>
    );
  };

  const calendarPositions = [
    { target: 'bottom-end', content: 'top-end' },
    { target: 'top-end', content: 'bottom-end' },
    { target: 'bottom-center', content: 'top-center' },
    { target: 'top-center', content: 'bottom-center' },
    { target: 'center-end', content: 'center-start' },
    { target: 'center-start', content: 'center-end' },
  ];

  const popoverTarget = inputRef?.current?.getElementsByClassName('input-group')[0];
  return (
    visible
            && (
            <div ref={(el) => { inputRef.current = el; ref = { el }; }}>
              {renderInput()}
              {popoverTarget
                    && (
                    <Popover
                      hideTail
                      manageOpened
                      opened={isOpened}
                      positions={calendarPositions}
                      positionTarget={{ current: popoverTarget }}
                      onOuterPopoverClicked={openCalendar}
                    >
                      <Popover.Content>
                        <SmallCalendar
                          onSelected={dateSelected}
                          selectedDate={dateValue}
                          manageValue
                        />
                      </Popover.Content>
                    </Popover>
                    )}
            </div>
            )
  );
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
  onOpen: () => void 0,
  onInvalid: () => void 0,
  onValueSet: () => void 0,
  onValueChange: () => void 0,
  visible: true,
};

DatePicker.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.object]),

  min: propTypes.oneOfType([propTypes.string, propTypes.object]),
  max: propTypes.oneOfType([propTypes.string, propTypes.object]),

  format: propTypes.string,
  required: propTypes.bool,
  readonly: propTypes.bool,
  invalid: propTypes.bool,
  opened: propTypes.bool,
  manageOpened: propTypes.bool,
  manageInvalid: propTypes.bool,
  manageValue: propTypes.bool,
  message: propTypes.arrayOf(propTypes.shape({
    status: propTypes.oneOf(['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue']),
    content: propTypes.string,
    icon: propTypes.string,
    className: propTypes.object,
    iconSize: propTypes.number,
  })),
  onOpen: propTypes.func,
  onInvalid: propTypes.func,
  onValueChange: propTypes.func,
  onValueSet: propTypes.func,
  visible: propTypes.bool,
  className: propTypes.oneOfType([propTypes.string, propTypes.object]),
};

export default DatePicker;
