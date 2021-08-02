import {MutableRefObject} from "react";

export type Message = {
    status: "yellow" | "red" | "green" | "blue" | "grey" | "grey-blue",
    content: string,
    icon: string,
    className: object,
    iconSize: number,
    delay: number
}

interface ILookup {
    value: string,
    label: string,
    name: string,
    message: Message[],

    readonly: boolean,
    invalid: boolean,
    required: boolean,

    onChange: (args: any[]) => any,
    onInvalid: (args: any[]) => any
}

export interface IReference extends ILookup {};

export interface IRefInput extends ILookup{
    inputRef: MutableRefObject<any>,
    className: string,
    onPaste?: React.ClipboardEvent
}

export interface IList extends ILookup {
    count: string
}