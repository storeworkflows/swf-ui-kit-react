import * as React from "react";
import PropTypes from "prop-types";
import {noop} from "../utils";

const Result = (props) => {
    const {records, onClick} = props;

    return <>
        {records.map(record => {
            return (
                <li className="result--item" key={record.sysId}
                    onMouseDown={() => onClick(record)}>
                    {record.referenceData.map((data, index) => {
                        if (index === 0) return <h3 className="main" key={index}>{data.value}</h3>
                        return <span className="additional" key={index}>{data.value}</span>
                    })}
                </li>
            )
        })}
    </>
};

Result.defaultProps = {
    records: [],
    onClick: noop
}

Result.propTypes = {
    records: PropTypes.array,
    onClick: PropTypes.func
}

export default Result