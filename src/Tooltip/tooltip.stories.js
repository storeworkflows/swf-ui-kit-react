import React, { createRef } from 'react';

import { default as Tooltip } from './Tooltip';

export default {
  title: 'swf-ui-kit/Containers/Tooltip',
  component: Tooltip,
  parameters: {
    docs: { source: { type: 'code' } },
  },
};

export const Default = (args) => {
  class TooltipWithRef extends React.Component {
    constructor(props) {
      super(props);
      this.target = createRef();
      this.state = {
        hasTarget: false,
      };
    }

    componentDidMount() {
      if (this.target && this.target.current) {
        this.setState({ hasTarget: true });
      }
    }

    render() {
      return (
        <>
          <div
            ref={(el) => this.target.current = el}
            style={{
              width: '100px', height: '50px', color: 'white', background: 'black',
            }}
          >
            Target
          </div>
          {this.state.hasTarget
                        && (
                        <Tooltip
                          {...this.props}
                          targetRef={{ current: this.target.current }}
                        >
                          <Tooltip.Content>
                            <div style={{ width: '100px', height: '100px', padding: '10px' }}>
                              Example Content
                            </div>
                          </Tooltip.Content>
                        </Tooltip>
                        )}
        </>
      );
    }
  }

  return <TooltipWithRef {...args} />;
};
