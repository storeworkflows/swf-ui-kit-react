import Pill from "../../Pill/Pill";
import {Input} from "../../index";
import * as React from "react";

const Record = (props) => {
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

    <Input.Start>
        {records.map((label) => <Record label={label} onDelete={onDelete}/>)}
    </Input.Start>
}