import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import Icon from "../../../Icon/Icon";
import findByType, {createSubComponent} from "../../../utils/findByType";
import {getIconByFileType} from "../../utils";

const End = () => null;

class File extends React.Component {
    constructor(props) {
        super(props);
        this.renderEnd = this.renderEnd.bind(this);
    }

    renderEnd(){
        const {children} = this.props;
        const end = findByType(children, "End");

        if (!end || end.length<1) return null;

        return <div className={"swf-file--end"}>{end}</div>
    }

    render() {

        const {
            className,
            file,
            displayValue,
            icon
        } = this.props;

        const fileClasses = classnames(
            className,
            "swf-file"
        )

        let sizeStr = `${(file.size/1000).toFixed(3)} Kb`

        return  <>
            <div className={fileClasses}>
                <Icon
                    className={"file-icon"}
                    icon={icon || getIconByFileType(file.type)}
                    customSize={30}
                />
                <div className={"file-info-container"}>
                    <div className={"file-header"}>{displayValue || file.name}</div>
                    <div className={"file-size"}>{sizeStr}</div>
                </div>
                {this.renderEnd()}
            </div>
        </>

    }
};

File.End = createSubComponent("End");

File.propTypes = {
    file: propTypes.shape({
        name: propTypes.string,
        size: propTypes.number,
        type: propTypes.string,
    }),
    displayValue: propTypes.string,
    icon: propTypes.string,
    className: propTypes.oneOfType([propTypes.string, propTypes.object])
}



export default File