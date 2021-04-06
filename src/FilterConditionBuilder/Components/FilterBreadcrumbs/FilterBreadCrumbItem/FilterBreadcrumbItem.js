import * as React from "react";

import Tooltip from "../../../../Tooltip/Tooltip";

export default class FilterBreadcrumbItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowTargetRef: null,
            labelTargetRef: null
        }
    }
    
    breadcrumbItemClicked = (data, operation) => {
        const { onBreadcrumbItemClicked } = this.props;
        onBreadcrumbItemClicked({data, operation});
    }

    setArrowTargetRef = (ref) => setTimeout(() => this.setState({ arrowTargetRef: ref }));
    setLabelTargetRef = (ref) => setTimeout(() => this.setState({ labelTargetRef: ref }));

    render() {
        const { itemData, itemIndex } = this.props;


        if (!itemData.label) return;

        return(
            <div className="item-container">
                {itemIndex !== 0 && 
                <>
                    {/* {this.state.arrowTargetRef && <Tooltip
                        id="tooltipArrow"
                        targetRef={this.state.arrowTargetRef}
                        position={["bottom-center top-center"]}
                        content="Remove next condition"
                        delay={300}
                    />} */}
                    <span
                        className="bread-arrow"
                        aria-describedby="tooltipArrow"
                        ref={this.setArrowTargetRef}
                        onClick={() => this.breadcrumbItemClicked(itemData, "remove-next")}
                    >
                        &gt;
                    </span>
                </>}
                <>
                    {/* {this.state.labelTargetRef && <Tooltip
                        id="tooltipLabel"
                        targetRef={this.state.labelTargetRef}
                        position={["bottom-center top-center"]}
                        content="Click to remove subsequent conditions"
                        delay={300}
                    />} */}
                    <span
                        className="label"
                        aria-describedby="tooltipLabel"
                        ref={this.setLabelTargetRef}
                        onClick={() => this.breadcrumbItemClicked(itemData, "remove-subsequent")}
                    >
                        {itemData.label}
                    </span>
                </>
            </div>
            
        );
    }
}