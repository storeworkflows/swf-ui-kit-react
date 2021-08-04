import {Button, Input} from "../../index";
import * as React from "react";
import {useContext} from "react";
import {LookUpContext} from "../context/LookUpContext";

export const Reference = (props) => {
    const {
        intRef,
        onClear,
        referenceValue
    } = props;

    const {props: { name, invalid, required, message, readonly, label}, chars, setChars} = useContext(LookUpContext);

    const handleInput = (event) => {
        setChars(event.target.value);
        onClear();
    }

    const showDeleteButton = !!referenceValue.value;

    const showedValue = referenceValue.value ? referenceValue.displayValue : chars;

    return <Input
        internalRef={intRef}
        className="swf-reference--input"
        value={showedValue}
        label={label}
        manageValue={true}
        name={name}
        onInput={handleInput}
        readonly={readonly}
        onInvalid={() => void 0}
        invalid={invalid}
        required={required}
        message={message}
    >
        {!readonly && <Input.End>{showDeleteButton &&
        <Button bare variant="tertiary" icon="x" size="md" tooltipContent="Clear"
                onClick={onClear}/>}</Input.End>}
    </Input>
}