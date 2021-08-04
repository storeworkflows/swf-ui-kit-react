import React from 'react';

import { default as RangeCalendarEl } from './Renge Calendar';

export default {
  title: 'swf-ui-kit/DataVisualisation/RangeCalendar',
  component: RangeCalendarEl,
};

export const Range = (args) => <RangeCalendarEl {...args} />;
Range.args = {
  startDay: new Date('2021-06-10').setHours(0, 0, 0, 0),
  endDay: new Date().setHours(0, 0, 0, 0),
  max: new Date('2021-07-08').setHours(0, 0, 0, 0),
  isFirstSelecting: false,
};
