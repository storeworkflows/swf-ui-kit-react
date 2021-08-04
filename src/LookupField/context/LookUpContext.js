import { createContext } from 'react';
import { noop } from '../../utils';

const initialValue = {
  props: {
    type: '',
    value: '',
    displayValue: '',
    onValueChange: noop,
    name: '',
    readonly: false,
    reference: '',
    internalRef: null,
    visible: false,
    onInvalid: noop,
    message: null,
    label: '',
    invalid: false,
    required: false,
    tableRecordSysId: '',
    table: '',
  },
  chars: '**',
  setChars: noop,
  loading: false,
  focused: false,
  setFocused: noop,
  isGlideList: false,
  isReference: true,
};

export const LookUpContext = createContext(initialValue);
