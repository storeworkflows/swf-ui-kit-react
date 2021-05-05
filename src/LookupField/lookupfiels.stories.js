import React from 'react';

import { default as LookupField} from './LookupField';
import { rest } from 'msw';

export default {
    title: 'swf-ui-kit/Input/LookupField',
    component: LookupField,
    parameters: {
        msw: [
            rest.get('/api/now/graphql', (req, res, ctx) => {
                return res(
                    ctx.json({
                        firstName: 'Neil',
                        lastName: 'Maverick',
                    }),
                );
            }),
        ]
    },
};

const payload = {
    JavaScript: 3390991,
    'C++': 44974,
    TypeScript: 15530,
    CoffeeScript: 12253,
    Python: 9383,
    C: 5341,
    Shell: 5115,
    HTML: 3420,
    CSS: 3171,
    Makefile: 189,
};

const Template = (args) => {
    return <LookupField {...args}/>;
}

export const Default = Template.bind({});
Default.args = {
    label: "LookupField"
}


