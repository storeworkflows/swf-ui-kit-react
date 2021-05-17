import * as React from "react";
import PropTypes from "prop-types";
import {noop} from "../utils";

class Result extends React.Component {
   constructor(props) {
       super(props);
   }

   render() {
       const {records, onClick} = this.props;
       return (
        <>
            { records.map(record => {
                return (
                    <li className="result--item" key={record.sysId}
                        onMouseDown={() => onClick(record)}>
                        {record.referenceData.map((data, index) => {
                            if (index === 0) return <h3 className="main">{data.value}</h3>
                            return <span className="additional">{data.value}</span>
                        })}
                    </li>
                )
            })}
        </>
       )
   }
}

Result.defaultProps = {
    records: [],
    onClick: noop
}

Result.propTypes = {
    records: PropTypes.array,
    onClick: PropTypes.func
}

export default Result