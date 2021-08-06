import * as React from 'react';
import Pill from '../../Pill/Pill';
import { Input } from '../../index';

export const Record = (props) => {
  const { label, onDelete } = props;

  if (!label) return null;

  return (
    <Pill
      key={label}
      label={label}
      canDismiss
      onDelete={onDelete}
    />
  );
};

export const PillRecords = (props) => {
  const {
    records, onDelete,
  } = props;

  return (
    <Input.Start>
      {records.map((label) => <Record label={label} onDelete={onDelete} />)}
    </Input.Start>
  );
};
