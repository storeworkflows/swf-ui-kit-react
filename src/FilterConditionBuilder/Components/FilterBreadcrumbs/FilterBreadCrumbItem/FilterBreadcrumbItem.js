import * as React from "react";

export default class FilterBreadcrumbItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    breadcrumbItemClicked = (data, operation) => {
        const { clickBtn } = this.props;
        clickBtn({action: "breadcrumbs", payload: { data, operation }});
    }

    render() {
        const { itemData, itemIndex } = this.props;


        if (!itemData.label) return;

        return(
            <div className="item-container">
                {itemIndex !== 0 && 
                <>
                    <span
                        className="bread-arrow"
                        aria-describedby="tooltipArrow"
                        onClick={() => this.breadcrumbItemClicked(itemData, "remove-next")}
                    >
                        &gt;
                    </span>
                </>}
                <>
                    <span
                        className="label"
                        aria-describedby="tooltipLabel"
                        onClick={() => this.breadcrumbItemClicked(itemData, "remove-subsequent")}
                    >
                        {itemData.label}
                    </span>
                </>
            </div>
            
        );
    }
}