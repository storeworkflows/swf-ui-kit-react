import {FC} from "react";
import {Input} from "../index";
import {IRefInput} from "./types";


export const ReferenceInput: FC<IRefInput> = (props) => {
    const {
        inputRef,
        className,
        value,
        label,
        name,
        message,
        readonly,
        invalid,
        required,
        onInvalid,
        onChange,
        onPaste
    } = props;

    return <Input
        internalRef={inputRef}
        className="swf-reference--input"
        value={value}
        containerClass={className}
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
    />
};