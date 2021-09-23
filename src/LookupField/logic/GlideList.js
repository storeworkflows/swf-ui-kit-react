import {useContext, useEffect, useState} from 'react';
import {stringToArray} from '../utils';
import {request} from '../../utils/http';
import {List} from '../templates/List';
import {LookUpContext} from '../context/LookUpContext';

export const GlideList = (props) => {
    const context = useContext(LookUpContext);

    const {intRef} = props;

    const {
        props: {
            name,
            reference,
            onValueChange,
            value,
            displayValue,
        },
        setFocused,
        setSubscriber,
    } = context;

    const [records, setRecords] = useState({
        value: stringToArray(value, {divider: ','}),
        displayValue: stringToArray(displayValue, {divider: ','}),
    });

    const deleteHandler = (label) => (prev, curr, indx) => {
        if (curr !== label) return prev;

        prev.value = records.value.filter((_, i) => i !== indx);
        prev.displayValue = records.displayValue.filter((_, i) => i !== indx);

        return prev;
    };

    const getValuesArray = (records, record) => {
        if (!records) return {value: [], displayValue: []};

        if (records.value.includes(record.sysId)) return records;

        records.value.push(record.sysId);
        records.displayValue.push(record.displayValue);

        return {...records};
    };

    const handleClick = (record) => {
        const {sysId, referenceData} = record;
        const [data] = referenceData;

        setRecords((_) => {
            const newRecords = getValuesArray(_, {sysId, displayValue: data?.value});

            onValueChange && onValueChange(name, newRecords.value.toString(), newRecords.displayValue);

            return newRecords;
        });
    };

    const handleDeleteClick = ({label}) => {
        setRecords((_) => {
            const newRecords = records.displayValue.reduce(deleteHandler(label), {value: [], displayValue: []});

            onValueChange && onValueChange(name, newRecords.value.toString(), newRecords.displayValue);

            return newRecords;
        });
    };

    const onPaste = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const value = event.clipboardData.getData('Text');

        if (!value) return;

        setFocused(false);

        const charsArray = value.split(/,|\\n/).map((chars) => chars.trim());

        const {data} = await request({
            method: 'POST',
            url: 'api/x_aaro2_teamwork/swf_api/list',
            data: {
                table: reference,
                search_string: charsArray,
            },
        });

        const records = data.reduce((prev, curr) => {
            const {sysId, referenceData} = curr;
            const displayValue = referenceData[0].value;

            return getValuesArray(prev, {sysId, displayValue});
        }, {value: [], displayValue: []});

        setRecords(_ => records);

        onValueChange && onValueChange(name, records.value.toString(), records.displayValue);

        setFocused(true);
    };

    useEffect(() => {
        if (value === records.value.toString()) return;

        setRecords(_ => ({
            value: stringToArray(value, {divider: ','}),
            displayValue: stringToArray(displayValue, {divider: ','}),
        }))

    }, [value, displayValue]);

    useEffect(() => {
        setSubscriber(handleClick);
    }, [setSubscriber]);

    return (
        <List
            intRef={intRef}
            onPaste={onPaste}
            onDelete={handleDeleteClick}
            records={records}
        />
    );
};
