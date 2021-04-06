import * as React from "react";
import FilterBreadcrumbItem from "./FilterBreadCrumbItem/FilterBreadcrumbItem";

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
                                <FilterBreadcrumbItem itemData={el} itemIndex={index} onBreadcrumbItemClicked={breadcrumbItemClicked} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}