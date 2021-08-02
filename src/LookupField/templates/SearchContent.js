import Result from "../Result";
import * as React from "react";

export const SearchContent = (props) => {
    const {loading, noResults, records, onClick} = props;

    if (loading) <span className="message">Loading...</span>;

    if (noResults) <span className="message">No Results Found</span>

    return <Result records={records} onClick={onClick}/>
}