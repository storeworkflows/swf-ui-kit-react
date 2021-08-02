import {useState} from "react";
import {stringToArray} from "../utils";
import {request} from "../../utils/http";
import {List} from "../templates/List";
import {SearchResult} from "../templates/SearchResult";

const GlideList = (props) => {
    const {
        name,
        readonly,
        invalid,
        required,
        message,
        intRef,
        onValueChange
    } = props;

    const [searchValue, setSearchValue] = useState("");

    const [records, setRecords] = useState({
        value: stringToArray(props.value),
        displayValue: stringToArray(props.displayValue)
    });
    const [mockDataCount, setMockDataCount] = useState(0);
    const [showPreloader, setShowPreloader] = useState(false);

    const deleteHandler = (prev, curr, indx) => {
        if (curr !== label) return prev;

        prev.value = records.value.filter((_, i) => i != indx);
        prev.displayValue = records.displayValue.filter((_, i) => i != indx);

        return prev;
    }

    const handleClick = (record) => {
        const {sysId, referenceData} = record;

        const records = {
            value: Array.from(new Set([...records.value, sysId]).filter(Boolean)),
            displayValue: Array.from([...records.displayValue, referenceData[0].value]).filter(Boolean)
        };

        setRecords(_ => records);
    };

    const handleDeleteClick = ({label}) => {
        setRecords(_ => records.displayValue.reduce(deleteHandler, {value: [], displayValue: []}));
        onValueChange(name, records.value.toString(), records.displayValue);
    };

    const onPaste = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const value = event.clipboardData.getData("Text");

        if (!value) return;

        const charsArray = value.split(/,|\\n/).map(chars => chars.trim());

        const fetchedRecords = await request({
            method: "post",
            url: `api/x_aaro2_teamwork/swf_api/list`,
            data: {
                able: reference,
                search_string: charsArray
            }
        });

        setRecords(_ => ({
            value: Array.from(new Set([...records.value, ...fetchedRecords.map(({sysId}) => sysId)])),
            displayValue: Array.from(new Set([...records.displayValue, ...fetchedRecords.map(({referenceData}) => referenceData[0].value)]))
        }));

        onValueChange(name, records.value.filter(Boolean).join(","), records.displayValue.filter(Boolean));
    };

    return <>
        <List
            name={name}
            intRef={intRef}
            value={searchValue}
            label=""
            readonly={readonly}
            onPaste={onPaste}
            invalid={invalid}
            required={required}
            message={message}
            onDelete={handleDeleteClick}
            records={records}
        />
    </>
}