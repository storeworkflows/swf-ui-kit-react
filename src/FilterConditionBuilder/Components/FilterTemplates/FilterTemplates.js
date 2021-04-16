import * as React from "react";

import PopoverContent from './PopoverContent/PopoverContent';
import { Button, Popover } from "../../../index";

export default class FilterTemplates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popoverToogle: false,
            popoverTarget: null,
            btnRef: null,
            filteredValues: [],
            searchValue: "",
        }
        this.popoverTarget = React.createRef();
    }
    
    managePopover = () => {
        this.setState({popoverToogle: !this.state.popoverToogle});
    }

    findTarget = (elem) => {
        this.popoverTarget.current = elem;
    }

    filterForFilterList = ({value}) => {
        const { filterList } = this.props;
        const searchValue = value.trim();
        const filteredValues = filterList.filter(item => !!item.title.toLowerCase().match(searchValue.toLowerCase()));
        this.setState({filteredValues, searchValue});
    }

    render() {
        const btnStyles = {
            "text-color": "rgb(1,119,142)",
            "hover-text-color": "rgb(1,89,107)",
            "active-text-color": "rgb(1,60,71)"
        }

        const { setQuery, filterList } = this.props;
        const { popoverToogle, popoverTarget, filteredValues, searchValue } = this.state;
        const valuesToShow = (!!filteredValues.length || !!searchValue) ? filteredValues : filterList;

        return(
            <div>
                <div className="popoverTarget" ref={elm => this.findTarget(elm)}>
                    ​​​​​​​​
                    <Button label="Filters" onClick={this.managePopover} ref={e => this.btnRef = e} customStyle={btnStyles} variant="tertiary" />
                </div>
                {popoverToogle && popoverTarget && <Popover opened={popoverToogle} positionTarget={this.popoverTarget} hideTail={false} positions={[{"target":"bottom-end","content":"top-end"}]}>
                    <Popover.Content>
                        <PopoverContent filterList={valuesToShow} setQuery={setQuery} onSearch={this.filterForFilterList} managePopover={this.managePopover} inputValue={searchValue} />
                    </Popover.Content>
                </Popover>}
            </div>
        ) 
    }
}