import {Button, Input} from "../index";
import * as React from "react";


const

export const List = (props) => {

    const showPreloader = () => preloader;

    return <>
        <Input
            internalRef={inputRef}
            className="swf-reference--input"
            value={referenceRecord.displayValue}
            containerClass={"list-field-group" }
            label={`${label} ${count} selected`}
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
            {showPreloader && showPreloader(repeat)}
            {!showPreloader && renderListPills()}
            {!readonly && <Input.End>{showDeleteButton &&
            <Button bare variant="tertiary" icon="x" size="md" tooltipContent="Clear"
                    onClick={clearValue}/>}</Input.End>}
        </Input>
    </>
};