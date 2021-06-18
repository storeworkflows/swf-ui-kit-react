
import React, {createRef} from 'react';

import { default as Popover} from './Popover';
import Toggle from "../Toggle/Toggle";
import InfoMessage from "../InfoMessage/InfoMessage";

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
        <div style={{width: "800px", height: "100px", padding: "10px"}}>
            Example Content
        </div>
    </Popover.Content>
</Popover>;

export const TargetRef = (args) => {
    class PopoverWithRef extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                styles: {width: "100px", height: "100px", padding: "10px"},
                current: null
            }

            this.popoverRef = createRef();
        }

        shouldComponentUpdate(nextProps, nextState, nextContext) {
            return !_.isEqual(nextState, this.state)
        }


        render () {
           // console.log(this.state.current)
            return (
                <>
                    <InfoMessage content={"Message content"}/>
                    <div ref={el => this.setState({current: el})}>Target by ref</div>
                    {/*{this.state.hasTarget &&*/}
                    <Popover {...this.props}
                             positionTarget={{current: this.state.current}}
                             opened={false}
                             ref={el=> this.popoverRef.current = el}
                    >
                        <Popover.Content>
                            <div style={this.state.styles}
                                 onClick={() => this.setState({
                                     styles: {width: "100px", height: "200px", padding: "10px"}
                                 })}>
                                Example Content
                                <Toggle/>
                            </div>
                        </Popover.Content>
                    </Popover>
                    {/*}*/}
                </>
            );
        }
    };

    return <PopoverWithRef {...args}/>

};
TargetRef.parameters ={
    docs: {
        source: {
            type: 'code'
        }
    }
}








