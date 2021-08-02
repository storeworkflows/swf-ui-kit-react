import {IReferenceInput} from "./types";
import {FC} from "react";
import {ReferenceInput} from "./ReferenceInput";
import {SearchResults} from "./SearchResults";


export const Reference: FC<IReferenceInput> = (props) => {
    const {inputRef} = props;

    return <>
        <ReferenceInput {...props}/>
        <SearchResults
            target={inputRef}
            show={false}
            loading={false}
            results={[]}
            onClick={() => ""}
        />
    </>
};