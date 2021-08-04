import {useContext, useEffect, useState} from "react";

import {Reference} from "../templates/Reference";
import {LookUpContext} from "../context/LookUpContext";

export const GlideReference = (props) => {
    const {intRef} = props;

    const context = useContext(LookUpContext);

    const {
        props: {
            name,
            onValueChange,
            value = "",
            displayValue = ""
        },
        setSubscriber,
        setFocused,
        setChars
    } = context;

    const [referenceValue, setReferenceValue] = useState({value, displayValue});

    const handleClearValue = () => {
        setReferenceValue(_ => ({value: "", displayValue: ""}));
    }

    const handleClick = (record) => {
        const {sysId, referenceData} = record;
        const [data] = referenceData;

        setReferenceValue(_ => ({value: sysId, displayValue: data?.value}));
        setChars("");
        setFocused(false);
    };

    useEffect(() => {
        onValueChange && onValueChange(name, referenceValue.value.toString(), referenceValue.displayValue);
    }, [referenceValue.value])

    useEffect(() => {
        setSubscriber(handleClick);
    }, [setSubscriber]);

    return <Reference intRef={intRef} referenceValue={referenceValue} onClear={handleClearValue}/>
}