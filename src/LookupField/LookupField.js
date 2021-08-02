import * as React from "react";
import propTypes from "prop-types";
import graphqlRequest from "../utils/graphqlRequest/graphqlRequest";
import {query} from "./requests/graphql/template";
import _ from "lodash";
import {Button, Input, Preloader} from "../index";
import Result from "./Result";
import Pill from "../Pill/Pill";
import Popover from "../Popover/Popover";
import PropTypes from "prop-types";
import {useEffect, useRef, useState} from "react";

const LookupField = React.forwardRef((props, ref) => {
    const {
        type, value, displayValue, onValueChange, name, readonly, reference,
        internalRef, visible, onInvalid, message, label, invalid, required,
        tableRecordSysId, table
    } = props;

    const controllerRef = useRef(null);
    const inputRef = useRef(null);

    const isList = type === "glide_list";

    const [records, setRecords] = useState([]);
    const [referenceRecord, setReferenceRecord] = useState({
        sysId: isList ? "" : value || null,
        displayValue: isList ? "" : displayValue || ""
    });
    const [listRecords, setListRecords] = useState({
        value: value?.split(",").filter(Boolean) || [],
        displayValue: displayValue?.split(",").filter(Boolean) || []
    })
    const [searchValue, setSearchValue] = useState("");
    const [matchesCount, setMatchesCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [focused, setFocused] = useState(false);
    const [preloader, setPreloader] = useState(false);
    const [repeat, setRepeat] = useState(0);

    const makeRequest = async (chars) => {
        const response = await graphqlRequest({
            operationName: "reference",
            query,
            variables: {
                chars,
                encodedRecord: "",
                field: name,
                ignoreRefQual: false,
                paginationLimit: 25,
                serializedChanges: "{}",
                sortBy: "",
                sys_id: tableRecordSysId,
                table: table
            },
            params: {
                signal: controllerRef.current.signal
            }
        });
        return await response.json();
    }

    const getReferenceList = async (value) => {
        try {
            setLoading(true);
            setRecords([]);
            setLoaded(false);

            const data = await makeRequest(value);

            const {
                referenceDataList,
                referenceRecentDataList,
                totalCount
            } = _.get(data, "[0].data.GlideLayout_Query.referenceDataRetriever");

            setLoading(false);
            setRecords([...referenceDataList, ...referenceRecentDataList]);
            setLoaded(true);
            setMatchesCount(totalCount)

        } catch (error) {
            console.error(error);
        }
    }

    const onChange = (event) => {
        const {target: {value}} = event;
        if (controllerRef?.current) {
            controllerRef.current.abort();
        }
        setReferenceRecord({
            sysId: null,
            displayValue: value
        })

        controllerRef.current = new AbortController();
        getReferenceList(value).then();
    }

    const referenceHandleClick = (record) => {
        const {sysId, referenceData} = record;

        setReferenceRecord({
            sysId,
            displayValue: referenceData[0].value
        });
        setLoaded(false)
        onValueChange(name, sysId, referenceData[0].value);
    }

    const listHandleClick = (record) => {
        const {sysId, referenceData} = record;

        var records = {
            value: Array.from(new Set([].concat(listRecords.value, [sysId]))).filter(Boolean),
            displayValue: Array.from(new Set([].concat(listRecords.displayValue, [referenceData[0].value]))).filter(Boolean)
        };

        setListRecords(_ => records);
        setReferenceRecord({
            sysId: null,
            displayValue: ""
        });
        setLoaded(false);
        onValueChange(name, records.value.filter(Boolean).join(","), records.displayValue.filter(Boolean).join(","));
    }

    const deleteValue = ({label}) => {
        var records = listRecords.displayValue.reduce(function (prev,curr, indx) {
            if (curr !== label) return prev;

            prev.value = listRecords.value.filter((_, i) => i != indx);
            prev.displayValue = listRecords.displayValue.filter((_, i) => i != indx);

            return prev;
        }, {value: [], displayValue: []});

        setListRecords(_ => records);
        onValueChange(name, records.value.toString(), records.displayValue);
    }

    const onClick = (record) => {
        const isReference = type === "reference"
        return isReference ? referenceHandleClick(record) : listHandleClick(record)
    }

    const showPreloader = (repeat = 4) => {
        return <Input.Start>
            <Preloader count={repeat}
                       flexDirectionGeneral="row"
                       mainStyles={{backgroundColor: "transparent"}}
                       items={[
                           {
                               repeat: 1,
                               width: "6rem",
                               height: "2rem",
                               itemStyles: {justifyContent: "space-between"},
                               round: false
                           },
                       ]}/>
        </Input.Start>
    }

    const onFocus = (event) => {
        setFocused(true)
        if (controllerRef?.current) {
            controllerRef.current.abort();
        }

        controllerRef.current = new AbortController();
        !readonly && getReferenceList("**");
    }

    const onBlur = (event) => {
        setFocused(false)
    }

    const onPaste = async (event) => {
        if (!isList) return

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

        const records = {
            value: Array.from(new Set([...records.value, ...data.map(({sysId}) => sysId)])),
            displayValue: Array.from(new Set([...records.displayValue, ... data.map(({referenceData}) => referenceData[0].value)]))
        }

        setListRecords(records);
        setReferenceRecord({
            sysId: null,
            displayValue: ""
        });
        setLoaded(false)

        onValueChange(name, records.value.filter(Boolean).join(","), records.displayValue.filter(Boolean));
    }

    useEffect(() => {
        const isList = type === "glide_list";

        if (isList) {
            var _value$split, _displayValue$split;

            const needUseLocalRecords = listRecords.value.toString().length > value.length;

            if (needUseLocalRecords) return setListRecords({
                ...listRecords,
                loading: false,
                focused: false
            });

            setListRecords({
                value: (value || "").split(","),
                displayValue: (displayValue || "").split(","),
                loading: false,
                focused: false
            });
        }
    }, [type, value, displayValue])

    const renderListPills = () =>{
        return <Input.Start>
            {listRecords.displayValue.map((label) => {
                    if (!label) return null;
                    return <Pill
                        key={label}
                        label={label}
                        canDismiss={true}
                        onDelete={deleteValue}/>
                })
            }
        </Input.Start>

    }

    const clearValue = () => {
        setListRecords({
            value: "",
            displayValue: []
        })
        onValueChange(name, "", []);
    }

    const hasMatches = matchesCount > 0;

    const showResults = loading || (loaded && focused);

    const hasValue = Boolean(referenceRecord.sysId);

    const showDeleteButton = !isList && hasValue && !readonly;

    const count = listRecords?.displayValue.filter(Boolean).length;

    return (
        visible ?
            <>
                <div className="swf-reference" tabIndex="0" onFocus={onFocus} onBlur={onBlur}
                     ref={elm => internalRef.current = elm}
                >
                    <Input
                        internalRef={inputRef}
                        className="swf-reference--input"
                        value={referenceRecord.displayValue}
                        containerClass={isList ? "list-field-group" : ""}
                        label={`${label} ${isList ? count + " selected" : ""}`}
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
                        {preloader && showPreloader(repeat)}
                        {isList && !preloader && renderListPills()}
                        {!readonly && <Input.End>{showDeleteButton &&
                        <Button bare variant="tertiary" icon="x" size="md" tooltipContent="Clear"
                                onClick={clearValue}/>}</Input.End>}
                    </Input>
                    {inputRef?.current &&
                    <Popover
                        hideTail
                        manageOpened
                        opened={showResults}
                        positionTarget={inputRef}
                        positions={[
                            {target: "bottom-center", content: "top-center"},
                            {target: "top-center", content: "bottom-center"}
                        ]}

                    >
                        {/*style={{width: `${this.inputRef?.current?.offsetWidth - 16}px`}}*/}
                        <Popover.Content>
                            <ul className="result" style={{width: `${inputRef?.current?.offsetWidth - 16}px`}}>
                                {loading ? <span className="message">Loading...</span> : null}
                                {loaded && !hasMatches ? <span className="message">No Results Found</span> : null}
                                {loaded && <Result records={records} onClick={onClick}/>}
                            </ul>
                        </Popover.Content>
                    </Popover>
                    }
                </div>
            </>
            : null
    )

});

LookupField.defaultProps = {
    label: "",
    name: "default",
    onValueChange: () => void 0,
    declarativeUiActions: [],
    type: "reference",
    readonly: false,
    required: false,
    invalid: false,
    onInvalid: () => void 0,
    message: [],
    visible: true,
    internalRef: React.createRef()
}

LookupField.propTypes = {
    onValueChange: propTypes.func,
    value: propTypes.string,
    displayValue: propTypes.string,
    declarativeUiActions: propTypes.array,
    label: propTypes.string,
    name: propTypes.string,
    type: propTypes.oneOf(["reference", "glide_list"]),
    table: propTypes.string,
    tableRecordSysId: propTypes.string,
    readonly: propTypes.bool,
    required: propTypes.bool,
    invalid: propTypes.bool,
    onInvalid: propTypes.func,
    message: PropTypes.arrayOf(PropTypes.shape({
        status: PropTypes.oneOf(["critical", "warning", "positive", "info", "suggestion"]),
        content: PropTypes.string,
        icon: PropTypes.string,
        className: propTypes.object,
        iconSize: PropTypes.number
    })),
    visible: propTypes.bool,
    internalRef: PropTypes.oneOfType([
        propTypes.func,
        propTypes.shape({current: propTypes.any})
    ])
}


export default LookupField