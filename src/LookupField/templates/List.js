import * as React from 'react';
import { useContext } from 'react';
import LazyLoad from 'react-lazyload';

import { LookUpContext } from '../context/LookUpContext';
import { Record } from './PillRecord';
import { Input } from '../../index';

const Spinner = () => (<span>...</span>);

export const List = (props) => {
  const {
    intRef,
    records = [],
    onInvalid,
    onPaste,
    onDelete,
  } = props;

  const {
    props: {name, invalid, required, message, readonly, label}, chars, setChars,
  } = useContext(LookUpContext);

  const handleInput = (event) => {
    setChars(event.target.value);
  };

  return (
    <Input
      internalRef={intRef}
      className="swf-reference--input"
      value={chars}
      containerClass="list-field-group"
      label={`${label} ${records.value.length} selected`}
      manageValue
      name={name}
      onInput={handleInput}
      readonly={readonly}
      onInvalid={onInvalid}
      onPaste={onPaste}
      invalid={invalid}
      required={required}
      message={message}
    >
      <Input.Start>
        {records.displayValue.map((label) => (
            <LazyLoad key={label} placeholder={<Spinner />} offset={100} overflow once>
              <Record key={label} label={label} onDelete={onDelete} />
            </LazyLoad>
        ))}
      </Input.Start>
    </Input>
  );
};
