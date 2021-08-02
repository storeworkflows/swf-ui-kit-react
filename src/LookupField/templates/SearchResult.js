import Popover from "../../Popover/Popover";
import * as React from "react";
import {SearchContent} from "./SearchContent";

export const SearchResult = (props) => {
    const {
        show, target, loading, records, onClick, noResults
    } = props;

    const listWidth = () => target?.current?.offsetWidth - 16;

    const hasTarget = _ => !!target?.current ?? false;

    return <>{hasTarget() &&
    <Popover
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
            <ul className="result" style={{width: `${listWidth()}px`}}>
                <SearchContent
                    loading={loading}
                    noResults={noResults}
                    records={records}
                    onClick={onClick}a
                />
            </ul>
        </Popover.Content>
    </Popover>}
    </>
}