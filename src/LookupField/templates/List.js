import * as React from 'react';
import { useContext } from 'react';
import LazyLoad from 'react-lazyload';

import { LookUpContext } from '../context/LookUpContext';
import { Record } from './PillRecord';
import { Input } from '../../index';

const Spinner = () => (
    <div className="post loading">
      <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
      >
        <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#49d1e0"
            strokeWidth="10"
            r="35"
            strokeDasharray="164.93361431346415 56.97787143782138"
            transform="rotate(275.845 50 50)"
        >
          <animateTransform
              attributeName="transform"
              type="rotate"
              calcMode="linear"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
);

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
