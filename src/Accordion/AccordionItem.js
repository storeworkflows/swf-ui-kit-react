import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import findByType from "../utils/findByType";
import Button from "../Button/Button";

const Header = () => null;

class AccordionItem extends React.Component {

    constructor(props) {
        super(props);
        this.itemClicked = this.itemClicked.bind(this);

        this.state={
            opened: props.opened
        }
    }

    itemClicked(){
        const {opened} = this.state;
        const {manageOpened, onClick, onSelected} = this.props;
        let updateOpened = opened;

        if(!manageOpened){
            updateOpened = !opened;
            this.setState({opened: updateOpened})
        }

        onClick({opened: updateOpened});
        onSelected();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {manageOpened, opened} = this.props

        if(manageOpened && opened !== this.state.opened)
            this.setState({opened: opened});
    }

    renderHeader() {
        const {children, label} = this.props;
        const header = findByType(children, "Header");

        if (!header || header.length<1) return <label>{label}</label>;

        return header
    }

    renderContent() {
        const {children} = this.props;
        const header = findByType(children, "Header");


        let contentElements = [].concat(children);
        if(header && header.length> 0)
            contentElements = contentElements.filter(child => child.type !== header[0].type)

        if(contentElements.length>0)
            return <div className={"accordion-content"}>
                {contentElements}
            </div>;

        return null;
    }

    renderIcon(){
        const {triggerIcon, iconToStart} = this.props;
        let classes = classnames({
            "trigger-icon": true,
            "left": iconToStart,
            "right": !iconToStart
        })

        return <Button
            className = {classes}
            icon={triggerIcon}
            variant={"tertiary"}
        />
    }


    render() {
        const { iconToStart, isLastItem, isFirstItem, className} = this.props;
        const {opened} = this.state;

        const itemStyles =  classnames(
            className,
            {
                "accordion-item": true,
                "last": isLastItem,
                "first": isFirstItem
            })

        const headerContentStyles =  classnames({
                "accordion-header-content": true,
                "left": !iconToStart,
                "right": iconToStart,
                "opened": opened
            })

        return (
            <>
                <div className={itemStyles}>
                    <div
                        className={"accordion-item-header"}
                        onClick={this.itemClicked}
                    >
                        {iconToStart && this.renderIcon()}
                        <div className={headerContentStyles}>
                            {this.renderHeader()}
                        </div>
                        {!iconToStart && this.renderIcon()}
                    </div>
                    { opened && this.renderContent()}
                </div>
            </>
        )
    }
}

AccordionItem.defaultProps = {
    opened: false,
    manageOpened: false,
    triggerIcon: "chevron-down",
    iconToStart: false,
    className: {},
    onClick: () => void 0,
    onSelected: () => void 0,
    isLastItem: false,
    isFirstItem: false
}

AccordionItem.propTypes = {
    label: propTypes.string,
    opened: propTypes.bool,
    manageOpened: propTypes.bool,
    onSelected: propTypes.func,
    onClick: propTypes.func,
    triggerIcon: propTypes.string,
    iconToStart: propTypes.bool,
    isLastItem: propTypes.bool,
    isFirstItem: propTypes.bool,
    className: propTypes.object
}

export default AccordionItem