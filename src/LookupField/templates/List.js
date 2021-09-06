import * as React from 'react';
import {useContext, useEffect, useState, useRef, useCallback} from 'react';

import { LookUpContext } from '../context/LookUpContext';
import { Record } from './PillRecord';
import { Input } from '../../index';

export const List = (props) => {
  const {
    intRef,
    records = {value: [], displayValue: []},
    onInvalid,
    onPaste,
    onDelete,
  } = props;

  const [renderedRecords, setRenderedRecords] = useState({value: [], displayValue: []});

  const observerRef = useRef();
  const sliceRange = useRef({start: 0, end: 60});

  const {
    props: {name, invalid, required, message, readonly, label}, chars, setChars,
  } = useContext(LookUpContext);

  const handleInput = (event) => {
    setChars(event.target.value);
  };

  const startObserver = async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 500));

    const pillsContainer = intRef.current.querySelectorAll('.pill');

    Array.from(pillsContainer).forEach(element => observerRef.current.observe(element));
  }

  const intersectionCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const pillsContainer = intRef.current.querySelector('.form-control--start');
        const lastElement = pillsContainer.lastChild;

        if (lastElement === entry.target) {
          sliceRange.current.end = sliceRange.current.end + 60;

          setRenderedRecords(_ => ({ ...records, displayValue: records.displayValue.slice(sliceRange.current.start, sliceRange.current.end)}));
        }
      }
    })
  }, [records.displayValue.toString()]);

  useEffect(() => {
    return () => observerRef.current.disconnect();
  }, [])

  useEffect(() => {
    setRenderedRecords(_ => ({ ...records, displayValue: records.displayValue.slice(sliceRange.current.start, sliceRange.current.end)}));
  }, [records.displayValue.toString()])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionCallback);
    startObserver();
  }, [renderedRecords.displayValue.toString()])

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
        {renderedRecords.displayValue.map((label) => (
              <Record key={label} label={label} onDelete={onDelete} />
        ))}
      </Input.Start>
    </Input>
  );
};
