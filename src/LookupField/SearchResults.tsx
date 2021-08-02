
// @ts-nocheck

import {FC, MutableRefObject} from "react";
import Popover from "../Popover/Popover";
import Result from "./Result";
import * as React from "react";

interface ISearchResults {
    target: MutableRefObject<any>,
    show: boolean,
    loading: boolean,
    results: [],
    onClick: (args: any[]) => any
};


export const SearchResults: FC<ISearchResults> = (props) => {
    const {
        target,
        show,
        loading,
        results,
        onClick
    } = props;

    const noResults = () => !loading && results.length == 0;
    const showResults = () => !loading && results.length > 0;

    return <Popover
        hideTail
        manageOpened
        opened={show}
        positionTarget={target}
        positions={[
            {target: "bottom-center", content: "top-center"},
            {target: "top-center", content: "bottom-center"}
        ]}
    >
        <Popover.Content>
            <ul className="result" style={{width: `${target?.current?.offsetWidth - 16}px`}}>
                {loading ? <span className="message">Loading...</span> : null}
                {!loading && noResults() ? <span className="message">No Results Found</span> : null}
                {showResults() && <Result records={results} onClick={onClick}/>}
            </ul>
        </Popover.Content>
    </Popover>
};