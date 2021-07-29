import React from "react";
import graphqlRequest from "../utils/graphqlRequest/graphqlRequest";
import { query } from "./datasource";
import _ from "lodash";
import { Button, Input } from "../index";
import Popover from "../Popover/Popover";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const LookupTable = (props) => {
    const {
        onValueChange, name, readonly, table,
        internalRef, onInvalid, message, label,
        invalid, required, searchFields,
        manageValue, value
    } = props;

    const inputRef = useRef(null);
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const makeRequest = async (chars = "", isList = true) => {
        const response = await graphqlRequest({
            operationName: "reference",
            query,
            variables: {
                searchFields: isList ? searchFields : ["sys_id"],
                value: chars,
                table
            },
        });
        return await response.json();
    }

    const getReferenceList = async (value) => {
        try {
            setLoading(true);
            setRecords([]);

            const data = await makeRequest(value);

            const { getListItems } = _.get(data, "[0].data.xAaro2Swf.referenceList");
            setLoading(false);
            setRecords(getListItems)

        } catch (error) {
            console.error(error);
        }
    }

    const getReferenceItem = async (id) => {
        const data = await makeRequest(id, false);
        const { getListItems } = _.get(data, "[0].data.xAaro2Swf.referenceList");
        setSearchValue(getListItems[0].value);
    }

    const onChange = (event) => {
        const { target: { value } } = event;
        setFocused(true)
        setSearchValue(value);
        getReferenceList(value).then();
    }

    const onClick = (record) => {
        setFocused(false);
        setSearchValue(record.value)
        onValueChange(record);
    }

    const onFocus = () => {
        if (focused || searchValue) return;
        !readonly && getReferenceList();
        setFocused(true)
    }

    const clearValue = (e) => {
        setSearchValue("");
        onValueChange(name, "", []);
    }

    useEffect(() => {
        const handler = ({ path }) => {
            if (internalRef && internalRef.current && path.includes(internalRef.current)) return;
            setFocused(false);
        }
        document.addEventListener("click", handler)
        return () => {
            document.removeEventListener("click", handler)
        }
    }, [internalRef]);

    useEffect(() => {
        if(manageValue && value) {
            getReferenceItem(value)
        }
    }, [value, manageValue]);

    return (
        <div
            className="swf-lookup-table"
            ref={elm => internalRef.current = elm}
        >
            <Input
                onFocus={onFocus}
                internalRef={inputRef}
                className="swf-reference--input"
                value={searchValue}
                label={label}
                manageValue
                manageInvalid
                name={name}
                onInput={onChange}
                readonly={readonly}
                onInvalid={onInvalid}
                invalid={invalid}
                required={required}
                message={message}
            >
                {!!searchValue && !readonly && <Input.End>
                    <Button
                        bare icon="x" size="md" variant="tertiary"
                        onClick={clearValue} tooltipContent="Clear"
                    />
                </Input.End>}
            </Input>
            {inputRef && inputRef.current && <Popover
                hideTail
                manageOpened
                opened={focused}
                positionTarget={inputRef}
                positions={[
                    { target: "bottom-start", content: "top-start" },
                    { target: "bottom-start", content: "top-start" },
                ]}
                contentStyles={{ width: "calc(100% - 2rem)" }}

            >
                <Popover.Content>
                    <div className="result">
                        {loading ? <span className="message">Loading...</span> : null}
                        {!loading && !records.length ? <span className="message">No Results Found</span> : null}
                        {!loading && records.map(record => {
                            const { sys_id, value } = record;
                            return (
                                <div
                                    key={sys_id}
                                    className="result--item"
                                    onClick={() => onClick(record)}
                                >
                                    <span className="additional">{value}</span>
                                </div>
                            )
                        })}
                    </div>
                </Popover.Content>
            </Popover>
            }
        </div>
    )

};

LookupTable.defaultProps = {
    onValueChange: () => void 0,
    searchFields:[],
    name: "",
    readonly: false,
    table: "",
    internalRef: React.createRef(),
    onInvalid: () => void 0,
    message: [],
    label: "",
    invalid: false,
    required: false,
    value: "",
    manageValue: false,
}

LookupTable.PropTypes = {
    value: PropTypes.string,
    manageValue: PropTypes.bool,
    onValueChange: PropTypes.func,
    name: PropTypes.string,
    searchFields: PropTypes.arrayOf(PropTypes.string),
    readonly: PropTypes.bool,
    table: PropTypes.string,
    internalRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any })
    ]),
    onInvalid: PropTypes.func,
    message: PropTypes.arrayOf(PropTypes.shape({
        status: PropTypes.oneOf(["critical", "warning", "positive", "info", "suggestion"]),
        content: PropTypes.string,
        icon: PropTypes.string,
        className: PropTypes.object,
        iconSize: PropTypes.number
    })),
    label: PropTypes.string,
    invalid: PropTypes.bool,
    required: PropTypes.bool,
}


export default LookupTable