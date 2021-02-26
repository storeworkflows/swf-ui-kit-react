import * as React from "react";
import propTypes from "prop-types";
import Popover from "../Popover/Popover";

class Tooltip extends React.Component {
    constructor(props) {
        super(props);
        const {targetRef, opened} = this.props;

        this.state = {
            opened: opened,
            targetElement:  targetRef

        }

        this.renderContent = this.renderContent.bind(this);
        this.targetHovered = this.targetHovered.bind(this);
    }

    renderContent = () => {
        const {content, container} = this.props;
        if(!content)
            return container.current
        else
            return <span>{content}</span>
    }

    targetHovered = () => {
        if(!this.state.opened) {
            setTimeout(() =>
                    this.setState({opened: false}) ,
                    this.props.delay);

            this.setState({
                opened: true
            })

        }
    }


    componentDidMount(){
        if(!this.props.manageOpened)
        {
            let target = this.state.targetElement;
            target.current.onmouseover = () => this.targetHovered();
            this.setState({targetElement : target});
        }
    }


    render() {
        const {
            position,
            roundBorder,
            targetRef,
            content,
            container
        } = this.props;

        let hasContent = content!==undefined || !container!==undefined;

        if(hasContent)
            return (
                <>
                    <Popover
                        manageOpened={true}
                        opened={this.state.opened}
                        positions={position}
                        roundBorder={roundBorder}
                        positionTarget={targetRef}
                        hideTail={true}
                    >
                        <Popover.Content>
                            {this.renderContent()}
                        </Popover.Content>
                    </Popover>
                </>
            );
        else
            return null;
    }
};

Tooltip.defaultProps = {
    delay: 700,
    manageOpened: false,
    opened: false,
    targetRef: propTypes.oneOfType([
        propTypes.func,
        propTypes.shape({ current: propTypes.any })
    ]),
    position:
        [{ target:"top-center", content: "bottom-center"},
            { target: "bottom-center", content: "top-center"},
            { target: "center-end", content:"center-start"},
            { target: "center-start", content: "center-end"},
            { target: "top-end", content: "top-start"},
            { target: "bottom-end", content:"bottom-start"},
            { target: "top-start", content: "top-end"},
            { target: "bottom-start", content: "bottom-end"}],
    roundBorder: true,
    content: propTypes.string,
}

Tooltip.propTypes = {
    manageOpened: propTypes.bool,
    opened: propTypes.bool,
    targetRef: propTypes.oneOfType([
        propTypes.func,
        propTypes.shape({ current: propTypes.any })
    ]),
    position: propTypes.arrayOf(propTypes.shape({
        target: propTypes.string,
        content: propTypes.string,
    })),
    roundBorder: propTypes.bool,
    content: propTypes.string,
    container: propTypes.oneOfType([
        propTypes.func,
        propTypes.shape({ current: propTypes.any })
    ])
}

export default Tooltip