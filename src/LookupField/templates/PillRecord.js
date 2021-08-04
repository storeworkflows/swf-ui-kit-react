import Pill from "../../Pill/Pill";
import {Input} from "../../index";
import * as React from "react";

export const Record = (props) => {
    const {label, onDelete} = props;

    if (!label) return null;

    return <Pill
        key={label}
        label={label}
        canDismiss={true}
        onDelete={onDelete}/>
}

export const PillRecords = (props) => {
    const {
        records, onDelete
    } = props;

    return <Input.Start>
        {records.map((label) => <Record label={label} onDelete={onDelete}/>)}
    </Input.Start>
}