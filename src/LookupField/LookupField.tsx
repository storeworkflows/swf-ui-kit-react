import {FC, MutableRefObject} from "react";
import {Message} from "./types";
import {Reference} from "./Reference";
import {List} from "./List";

enum FieldType {
    REFERENCE = "reference",
    LIST = "glide_list"
}

interface LookupField {
    onValueChange: () => void,
    value: string,
    displayValue: string,
    declarativeUiActions: string[],
    label: string,
    name: string,
    type: "reference" | "glide_list",
    table: string,
    tableRecordSysId: string,
    readonly: boolean,
    required: boolean,
    invalid: boolean,
    onInvalid: () => void,
    message: Message[],
    visible: boolean,
    internalRef: MutableRefObject<any>
}

export const LookupField: FC<LookupField> = (props) => {
    const {type, internalRef} = props;

    const onFocus = () => {
    };
    const onBlur = () => {
    };

    const showReference = () => type === FieldType.REFERENCE;
    const showList = () => type === FieldType.LIST;

    return <div className="swf-reference" tabIndex={0} onFocus={onFocus} onBlur={onBlur}
                ref={elm => internalRef.current = elm}
    >
        {
            showReference() && <Reference
                className={""}
                value={}
                label={}
                name={}
                message={}
                readonly={}
                invalid={}
                required={}
                onChange={}
                onInvalid={}
                onPaste={}
            />
        }
        {
            showList() && <List
                count={}
                className={""}
                value={} label={}
                name={}
                message={}
                readonly={}
                invalid={}
                required={}
                onChange={}
                onInvalid={}
                onPaste={}
            />
        }
    </div>
}