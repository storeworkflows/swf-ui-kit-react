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
                const hasAdditionalInfo = record.referenceData.length > 1;

                return (
                    <li className="result--item" key={record.sysId}
                        onMouseDown={() => onClick(record)}>
                        <h3 className="main">{record.referenceData[0].value}</h3>
                        {hasAdditionalInfo && <span className="additional">{record.referenceData[1].value}</span> }
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