import {Button, Input} from "../../index";
import * as React from "react";

const Reference = (props) => {
    const {
        inputRef,
        value,
        label,
        name,
        onChange,
        readonly,
        onInvalid,
        invalid,
        required,
        message
    } = props;

    const showDeleteButton = !!value;

    return <Input
        internalRef={inputRef}
        className="swf-reference--input"
        value={value}
        label={label}
        manageValue={true}
        name={name}
        onInput={onChange}
        readonly={readonly}
        onInvalid={onInvalid}
        invalid={invalid}
        required={required}
        message={message}
    >
        {!readonly && <Input.End>{showDeleteButton &&
        <Button bare variant="tertiary" icon="x" size="md" tooltipContent="Clear"
                onClick={clearValue}/>}</Input.End>}
    </Input>
}