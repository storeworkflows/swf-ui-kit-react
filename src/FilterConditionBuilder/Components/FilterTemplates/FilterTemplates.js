import ReactDOM from 'react-dom';
import * as React from "react";

import { Button, Popover } from "../../../index";
import PopoverContent from './PopoverContent/PopoverContent';
import { fetchRequest, prepareQueryParams } from "../../utils/utils"; 

export default class FilterTemplates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popoverToogle: false,
            popoverTarget: null,
            btnRef: null,
            filterList: [],
            filteredValues: [],
            searchValue: "",
        }
    }
    
    managePopover = () => {
        this.setState({popoverToogle: !this.state.popoverToogle});
    }

    findTarget = (elem) => {
        this.setState({popoverTarget: elem})
    }

    componentDidMount  = async () => {
        const myHeaders = new Headers();
        const { table, user } = this.props;
        myHeaders.append("X-UserToken", window.g_ck);
        const queryParams = {
            sysparm_query: `table=${table}^userISEMPTY^ORuser=${user}`,
            sysparm_fields: "filter,sys_id,sys_name,table,title,user,group"
        }

        const query = prepareQueryParams(queryParams)

        await fetchRequest({url: `${window.location.origin}/api/now/table/sys_filter?${query}`, params: {
            method: "GET"
        }})
        .then(res => this.setState({filterList: res}))
    }

    filterForFilterList = ({value}) => {
        const { filterList } = this.state;
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

        const { setQuery } = this.props;
        const { popoverToogle, popoverTarget, filterList, filteredValues, searchValue } = this.state;
        const valuesToShow = (!!filteredValues.length || !!searchValue) ? filteredValues : filterList;

        return(
            <div>
                <div className="popoverTarget" ref={this.findTarget}>
                    <Button label="Filters" onClick={this.managePopover} ref={e => this.btnRef = e} customStyle={btnStyles} variant="tertiary" />
                </div>
                {popoverToogle && popoverTarget && <Popover opened={popoverToogle} positionTarget={{current: popoverTarget}} hideTail={false} positions={[{"target":"bottom-end","content":"top-end"}]}>
                    <Popover.Content>
                        <PopoverContent filterList={valuesToShow} setQuery={setQuery} onSearch={this.filterForFilterList} managePopover={this.managePopover} inputValue={searchValue} />
                    </Popover.Content>
                </Popover>}
            </div>
        ) 
    }
}