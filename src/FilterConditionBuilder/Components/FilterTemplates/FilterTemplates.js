import ReactDOM from 'react-dom';
import * as React from "react";

import { Button, Popover } from "../../../index";
import PopoverContent from './PopoverContent/PopoverContent';

export default class FilterTemplates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popoverToogle: false,
            popoverTarget: null,
            btnRef: null
        }
    }
    
    managePopover = () => {
        this.setState({popoverToogle: !this.state.popoverToogle});
    }

    findTarget = (elem) => {
        this.setState({popoverTarget: elem})
    }

    componentDidMount = () => {
        const myHeaders = new Headers();
        myHeaders.append("X-UserToken", window.g_ck);
        // myHeaders.append("Authorization", "Basic c3dmX2RldmVsb3Blcjpzd2ZfZGV2ZWxvcGVy")

        fetch(`${window.location.origin}/api/now/table/sys_filter`, {
            method: "GET",
            headers: myHeaders
        })
        .then(res => res.json())
        .then(jsonRes => this.filterList = jsonRes.result)
    }

    

    render() {
        const btnStyles = {
            "text-color": "rgb(1,119,142)",
            "hover-text-color": "rgb(1,89,107)",
            "active-text-color": "rgb(1,60,71)"
        }

        const { popoverToogle, popoverTarget } = this.state;

        return(
            <div>
                <div className="popoverTarget" ref={this.findTarget}>
                    <Button label="Filters" onClick={this.managePopover} ref={e => this.btnRef = e} customStyle={btnStyles} variant="tertiary" />
                </div>
                {popoverToogle && popoverTarget && <Popover opened={popoverToogle} positionTarget={{current: popoverTarget}} hideTail={false} positions={[{"target":"bottom-end","content":"top-end"}]}>
                    <Popover.Content>
                        <PopoverContent filterList={this.filterList} />
                    </Popover.Content>
                </Popover>}
            </div>
        ) 
    }
}