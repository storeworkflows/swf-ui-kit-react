import {useMemo, useRef, useState} from "react";
import {glRequest} from "./requests/graphql/request";
import {GlideList} from "./logic/GlideList";
import {SearchResult} from "./templates/SearchResult";
import propTypes from "prop-types";
import PropTypes from "prop-types";
import {LookUpProvider} from "./context/LookUpProvider";

export const LookupField = (props) => {
    <LookUpProvider>
        <Field />
    </LookUpProvider>
}

export const Field = (props) => {
    const {
        type, value, displayValue, onValueChange, name, readonly, reference,
        internalRef, visible, onInvalid, message, label, invalid, required,
        tableRecordSysId, table
    } = props;
    const target = useRef();

    const results = useMemo(() => {
        glRequest({
            chars,
            name,
            sys_id: tableRecordSysId,
            table
        })
    }, [chars]);

    const handleSearchClick = (record) => {

    }

    const isGlideList = type === "glide_list";
    const isReference = !isGlideList;

    return <>
        {
            visible && <div className="swf-reference" tabIndex="0" onFocus={onFocus} onBlur={onBlur}
                            ref={elm => internalRef.current = elm}
            >
                {isGlideList && <GlideList
                    onValueChange={onValueChange}
                    readonly={readonly}
                    required={required}
                    message={message}
                    invali={invalid}
                    intRef={target}
                    name={name}
                />}
                <SearchResult
                    show={true}
                    target={target}
                    loading={true}
                    results={results}
                    onClick={handleSearchClick}
                />
            </div>
        }
    </>
}