import { useContext, useEffect, useState } from 'react';
import { stringToArray } from '../utils';
import { request } from '../../utils/http';
import { List } from '../templates/List';
import { LookUpContext } from '../context/LookUpContext';

export const GlideList = (props) => {
  const context = useContext(LookUpContext);

  const { intRef } = props;

  const {
    props: {
      name,
      readonly,
      invalid,
      required,
      message,
      label,
      reference,
      onValueChange,
      value,
      displayValue,
    },
    setFocused,
    setSubscriber,
  } = context;

  const [records, setRecords] = useState({
    value: stringToArray(value, { divider: ',' }),
    displayValue: stringToArray(displayValue, { divider: ',' }),
  });

  const deleteHandler = (label) => (prev, curr, indx) => {
    if (curr !== label) return prev;

    prev.value = records.value.filter((_, i) => i != indx);
    prev.displayValue = records.displayValue.filter((_, i) => i != indx);

    return prev;
  };

  const getValuesArray = (records, record) => {
    if (!records) return { value: [], displayValue: [] };

    console.log('getValuesArray', { records });

    if (records.value.includes(record.sysId)) return records;

    records.value.push(record.sysId);
    records.displayValue.push(record.displayValue);

    return { ...records };
  };

  const handleClick = (record) => {
    const { sysId, referenceData } = record;
    const [data] = referenceData;

    setRecords((_) => getValuesArray(_, { sysId, displayValue: data?.value }));
  };

  const handleDeleteClick = ({ label }) => {
    setRecords((_) => records.displayValue.reduce(deleteHandler(label), { value: [], displayValue: [] }));
  };

  const onPaste = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const value = event.clipboardData.getData('Text');

    if (!value) return;

    setFocused(false);

    const charsArray = value.split(/,|\\n/).map((chars) => chars.trim());

    const { data } = await request({
      method: 'POST',
      url: 'api/x_aaro2_teamwork/swf_api/list',
      data: {
        table: reference,
        search_string: charsArray,
      },
    });

    setRecords((_) => data.reduce((prev, curr) => {
      const { sysId, referenceData } = curr;
      const displayValue = referenceData[0].value;

      return getValuesArray(_, { sysId, displayValue });
    }, {}));

    setFocused(true);
  };

  useEffect(() => {
    onValueChange && onValueChange(name, records.value.toString(), records.displayValue);
  }, [records.value]);

  useEffect(() => {
    setSubscriber(handleClick);
  }, [setSubscriber]);

  return (
    <List
      name={name}
      intRef={intRef}
      label={label}
      readonly={readonly}
      onPaste={onPaste}
      invalid={invalid}
      required={required}
      message={message}
      onDelete={handleDeleteClick}
      records={records}
    />
  );
};
