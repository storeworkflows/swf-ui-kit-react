import {FC, useRef} from "react";
import {ReferenceInput} from "./ReferenceInput";
import {SearchResults} from "./SearchResults";
import {IList} from "./types";

export const List: FC<IList> = (props) => {
    const {
        value,
        label,
        count,
        name,
        message,
        readonly,
        invalid,
        required,
        onInvalid,
        onChange
    } = props;

    const inputRef = useRef(null);

    const handleClick = () => {

    };

    const handlePast = () => {

    };

    const handleDelete = () => {

    };

    const onPaste = async (event: React.ClipboardEvent<Element>) => {
        event.preventDefault();
        event.stopPropagation();

        const value = event.clipboardData.getData("Text");

        if (!value) return;

        setFocused(false);
        setPreloader(true);

        const charsArray = value.split(/,|\\n/).map(chars => chars.trim());

        setFocused(false);
        setPreloader(true);
        setRepeat(charsArray.length)

        const result = await fetch(`api/x_aaro2_teamwork/swf_api/list`, {
            method: "post",
            credentials: 'same-origin',
            body: JSON.stringify({
                table: reference,
                search_string: charsArray
            }),
            headers: {
                'content-type': "application/json",
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck
            }
        });

        const data = await result.json();

        setFocused(false);
        setPreloader(false);

        const listRecords = {
            value: Array.from(new Set([...listRecords.value, ...data.map(({sysId}) => sysId)])),
            displayValue: Array.from(new Set([...listRecords.displayValue, ... data.map(({referenceData}) => referenceData[0].value)]))
        }

        setListRecords(listRecords);
        setReferenceRecord({
            sysId: null,
            displayValue: ""
        });
        setLoaded(false)

        onValueChange(name, listRecords.value.filter(Boolean).join(","), listRecords.displayValue.filter(Boolean));
    }

    return <>
        <ReferenceInput
            inputRef={inputRef}
            className={"list-field-group"}
            value={value}
            label={`${label} ${count} selected`}
            name={name}
            message={message}
            readonly={readonly}
            invalid={invalid}
            required={required}
            onChange={onChange}
            onInvalid={onInvalid}
            onPaste={onPaste}
        />
        <SearchResults
            target={inputRef}
            show={false}
            loading={false}
            results={[]}
            onClick={() => ""}
        />
    </>
}