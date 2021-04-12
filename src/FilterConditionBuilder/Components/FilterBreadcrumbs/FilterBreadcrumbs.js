import * as React from "react";
import FilterBreadcrumbItem from "./FilterBreadCrumbItem/FilterBreadcrumbItem";
import {v4 as uuidv4} from "uuid";

export default class FilterBreadcrumbs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { items, breadcrumbItemClicked } = this.props;
        return (
            <div className="breadcrumbs-container">
                {
                    items.map((el, index) => {
                        return (
                            <div className="item-container" key={el.id}>
                                <FilterBreadcrumbItem itemData={el} key={uuidv4()} itemIndex={index} onBreadcrumbItemClicked={breadcrumbItemClicked} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}