import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import Icon from "../../../Icon/Icon";
import findByType, {createSubComponent} from "../../../utils/findByType";
import {getIconByFileType} from "../../utils";

const File = (props) => {
    const { children, className, file, displayValue, icon } = props;

    const renderEnd = () => {
        const end = findByType(children, "End");

        if (!end || end.length < 1) return null;
        return <div className={"swf-file--end"}>{end}</div>
    }

    const fileClasses = classnames(
        className,
        "swf-file"
    )

    let sizeStr = `${(file.size / 1024).toFixed(3)} Kb`

    return <>
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
            {renderEnd()}
        </div>
    </>
}
;

File.End = createSubComponent("End");

File.defaultProps = {
    className: ""
}

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