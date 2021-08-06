import React from 'react';

import { default as Input } from './Input';
import { TABLE_CATEGORIES } from '../../.storybook/tableCategories';

export default {
  title: 'swf-ui-kit/Input/Input',
  component: Input,
  argTypes: {
    autofocus: TABLE_CATEGORIES.VALUE,
    label: TABLE_CATEGORIES.VALUE,
    max: TABLE_CATEGORIES.VALUE,
    min: TABLE_CATEGORIES.VALUE,
    maxlength: TABLE_CATEGORIES.VALUE,
    minlength: TABLE_CATEGORIES.VALUE,
    message: TABLE_CATEGORIES.VALUE,
    name: TABLE_CATEGORIES.VALUE,
    pattern: TABLE_CATEGORIES.VALUE,
    placeholder: TABLE_CATEGORIES.VALUE,
    step: TABLE_CATEGORIES.VALUE,
    type: TABLE_CATEGORIES.VALUE,
    value: TABLE_CATEGORIES.VALUE,
    internalRef: TABLE_CATEGORIES.VALUE,
    multiple: TABLE_CATEGORIES.VALUE,

    manageInvalid: TABLE_CATEGORIES.MANAGING,
    manageValue: TABLE_CATEGORIES.MANAGING,

    onInput: TABLE_CATEGORIES.ACTION,
    onChange: TABLE_CATEGORIES.ACTION,
    onFocus: TABLE_CATEGORIES.ACTION,
    onKeyDown: TABLE_CATEGORIES.ACTION,
    onBlur: TABLE_CATEGORIES.ACTION,
    onInvalid: TABLE_CATEGORIES.ACTION,
    onPaste: TABLE_CATEGORIES.ACTION,

    disabled: TABLE_CATEGORIES.STATE,
    invalid: TABLE_CATEGORIES.STATE,
    readonly: TABLE_CATEGORIES.STATE,
    required: TABLE_CATEGORIES.STATE,

    inputClass: TABLE_CATEGORIES.STYLE,
    containerClass: TABLE_CATEGORIES.STYLE,
    className: TABLE_CATEGORIES.STYLE,
  },
};

const Template = (args) => <Input {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  label: 'Label',
};

export const ExpandedInput = (args) => (
  <Input {...args}>
    <Input.Start>
      Start
    </Input.Start>
    <Input.End>
      End
    </Input.End>
  </Input>
);
