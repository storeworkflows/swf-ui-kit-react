import * as React from "react";
import classnames from "classnames";

import Icon from "../../../Icon/Icon";



class DropdownListHeader extends React.Component {
    constructor(props) {
        super(props);
        this.searchRef = React.createRef();
    }

    componentDidMount() {
        !!this.searchRef.current ? setTimeout(() => this.searchRef.current.focus(), 100) : () => void 0;
    }

    render() {
        const {searchValue, onSearch, selectedItem, itemSelected} = this.props;

        return(
            <div className="dropdown-list__header">
                <div className="swf-form-group">
                    <div className="input-group">
                        <input type="text" className="form-control" ref={this.searchRef} autoFocus={true} placeholder="Search" value={searchValue} onChange={(e) => onSearch({value: e.target.value})} />
                    </div>
                </div>
                {(selectedItem) && <div className="header-breadcrumbs">
                    {selectedItem.map((item, index) => (
                        (item.dropdownClicked || index > 0) && <div className={
                            classnames({"header-breadcrumbs_item": true, "--first-item": index === 0})}>
                            <div className="header-breadcrumbs_item-label" onClick={() => itemSelected({id: item.id, dropdownClicked: false, listIndex: item.listIndex})}>{item.label}</div>
                            <div className="header-breadcrumbs_item-arrow-container" onClick={() => itemSelected({id: item.id, dropdownClicked: true, listIndex: item.listIndex})}>
                                {item.dropdownClicked && <Icon icon="arrow-right" size="sm"/>}
                            </div>
                        </div>
                        ))
                    }
                </div>}
            </div>
        );
    }
}

export default DropdownListHeader;