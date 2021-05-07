
import React, {createRef} from 'react';

import { default as Popover} from './Popover';
import Toggle from "../Toggle/Toggle";

export default {
    title: 'swf-ui-kit/Containers/Popover',
    component: Popover,
    args: {
        positions: [
            {
                target: "bottom-start",
                content: "top-start"
            },
            {
                target: "center-end",
                content: "center-start"
            }
        ],
        hideTail: true
    }
};


export const Default = (args) => <Popover {...args}>
    <Popover.Target>
        Target
    </Popover.Target>
    <Popover.Content>
        <div style={{width: "100px", height: "100px", padding: "10px"}}>
            Example Content
        </div>
    </Popover.Content>
</Popover>;

export const TargetRef = (args) => {
    class PopoverWithRef extends React.Component{
        constructor(props) {
            super(props);
            this.target = createRef();
            this.state = {
                hasTarget: false
            }
        }

        componentDidMount() {
            if(this.target && this.target.current){
                this.setState({hasTarget: true})
            }
        }

        render () {
            return (
                <>
                    <div ref={el => this.target.current = el}>Target by ref</div>
                    {this.state.hasTarget &&
                    <Popover {...this.props}
                             positionTarget={{current: this.target.current}}
                    >
                        <Popover.Content>
                            <div style={{width: "100px", height: "100px", padding: "10px"}}>
                                Example Content
                                <Toggle/>
                            </div>
                        </Popover.Content>
                    </Popover>
                    }
                </>
            );
        }
    }

    return <PopoverWithRef {...args}/>

};
TargetRef.parameters ={
    docs: {
        source: {
            type: 'code'
        }
    }
}








