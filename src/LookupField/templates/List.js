import {Button, Input} from "../../index";
import * as React from "react";
import {PillRecords} from "./PillRecord";

export const List = (props) => {
    const {
        intRef,
        value,
        label,
        name,
        records,
        onChange,
        readonly,
        onInvalid,
        onPaste,
        invalid,
        required,
        message,
        onDelete
    } = props;

    return <Input
        internalRef={intRef}
        className="swf-reference--input"
        value={value}
        containerClass="list-field-group"
        label={label}
        manageValue={true}
        name={name}
        onInput={onChange}
        readonly={readonly}
        onInvalid={onInvalid}
        onPaste={onPaste}
        invalid={invalid}
        required={required}
        message={message}
    >
        <PillRecords records={records} onDelete={onDelete}/>
    </Input>
}