import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import RequiredLabel from "../RequiredLabel/RequiredLabel";
import PropTypes from "prop-types";
import InfoMessage from "../InfoMessage/InfoMessage";
import {checkFileToUpload, getFileExtensions} from "./utils";
import File from "./InnerComponents/File/File";
import Button from "../Button/Button";
import {downloadRequest, uploadRequest, deleteRequest} from "./_requests";
import Preloader from "../Preloader/Preloader";
import Loader from "./InnerComponents/Loader/Loader";
import {useEffect, useRef, useState} from "react";

const Attachment = React.forwardRef((props, ref) => {
    const {
        invalid, tableName, tableSysId, attachmentSysId, value,
        contentType, errorMessagesDelay, readonly, disabled,
        onValueChange, name,
        manageInvalid, onInvalid,
        labelClassName, label, required,
        visible, className, displayValue, message, placeholder
    } = props;

    const [isInvalid, setIsInvalid] = useState(invalid);
    const [file, setFile] = useState(value);
    const [focus, setFocusSate] = useState(false);
    const [systemMessages, setSystemMessages] = useState([]);
    const [tableNameState, setTableNameState] = useState(tableName);
    const [tableSysIdSate, setTableSysIdState] = useState(tableSysId);
    const [attachmentSysIdSate, setAttachSysIdState] = useState(attachmentSysId);
    const [activePreloader, setActivePreloader] = useState(true);
    const [activeDeleting, setActiveDeleting] = useState(false);

    const input = useRef(null)
    const invalidValue = manageInvalid ? input : isInvalid;

    const uploadNewFile = (fileToUpload) => {
        if (!file && !readonly && !disabled) {
            setBlur();
            let errorMessages = checkFileToUpload(fileToUpload, props);

            if (errorMessages.length === 0)
                uploadFile(fileToUpload)

            else if (input?.current) {
                input.current.value = "";
                setSystemMessages(errorMessages);
                setActivePreloader(false);
            }
        }
    }

    const uploadFile = async (file) => {
        let result = await uploadRequest(file, tableSysIdSate, tableNameState, errorMessagesDelay);

        if(result.systemMessages)
            setSystemMessages(result.systemMessages)
        else {
            setSystemMessages([]);
            setFile(file);
            setAttachSysIdState(result.sys_id);
        }
        setActivePreloader(false);
        onValueChange(name, result.attachmentSysId, result.displayValue)
    }

    const deleteFile = async (e) => {
        stopEvent(e);
        setActiveDeleting(true)
        let result = await deleteRequest(attachmentSysIdSate, errorMessagesDelay)

        if(result?.systemMessages)
            setSystemMessages(result.systemMessages)
        else {
            setSystemMessages([]);
            setFile(undefined);
            setAttachSysIdState(undefined);
            if(input?.current) input.current.value = "";
        }
        setActiveDeleting(false)
    }

    const downloadFile = (e) => {
        stopEvent(e)
        if (window.navigator.msSaveOrOpenBlob)
            window.navigator.msSaveOrOpenBlob(file, file.name);
        else {
            let a = document.createElement("a"),
                url = (file.link) ? file.link : URL.createObjectURL(file);
            a.href = url;
            a.download = file.name;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    }

    const stopEvent = (e) => {
        e?.preventDefault();
        e?.stopPropagation();
    }

    const setFocus = (e) => {
        stopEvent(e);

        if (!activePreloader && !activeDeleting && !disabled && !readonly)
            setFocusSate(true)
    }

    const setBlur = (e) => {
        stopEvent(e);
        setFocusSate(false)
    }

    const onInvalidEvent = (event) => {
        stopEvent(event);

       !manageInvalid && setIsInvalid(true);
       onInvalid({event});
    }

    const onChangeEvent = (e) => {
        stopEvent(e);
        setActivePreloader(true)
        uploadNewFile(input?.current?.files[0])
    }

    const onDropEvent = (e) => {
        stopEvent(e);

        if (!activePreloader && !activeDeleting && !disabled && !readonly) {
            setActivePreloader(true)
            uploadNewFile(e.dataTransfer.files[0])
        }
    }

    const containerClickedEvent = (e) => {
        if (!file && !activePreloader && !activeDeleting && !disabled && !readonly) {
            setFocus(e);
            if (input?.current)
                input?.current?.click();
        }
    }

    useEffect(async () => {
        if(attachmentSysIdSate) {
            let result = await downloadRequest(attachmentSysIdSate, errorMessagesDelay);

            if (result.systemMessages)
                setSystemMessages(result.systemMessages)
            else {
                const {
                    file_name, size_bytes, content_type, download_link,
                    tableName, tableSysId, sys_id
                } = result;

                setFile({
                    name: file_name,
                    size: size_bytes,
                    type: content_type,
                    link: download_link
                })
                setTableNameState(tableName);
                setTableSysIdState(tableSysId);
                setAttachSysIdState(sys_id)
            }
        }
        setActivePreloader(false)
    }, [])

    const renderLabel = () => {
        let labelClasses = classnames(labelClassName, "inp-label", {"--readonly": readonly});

        return (label ?
            <RequiredLabel
                className={labelClasses}
                required={required}
                invalid={invalidValue}
                label={label}
                htmlFor={name}
            /> : null)
    }

    const renderPreloader = () => {
        return (
            <Preloader
                count={1}
                items={[
                    {
                        width: "100%", height: "50%", repeat: 3, styles: [
                            {width: "2rem", height: "2rem", borderRadius: "50%"},
                            {width: "7rem", height: "1rem"},
                            {width: "5rem", height: "0.5rem", marginTop: "1.7rem", marginLeft: "-7.1rem"}
                        ]
                    },
                ]}
                height="2.5rem"
                width={"100%"}
                flexDirectionGeneral="row"
                blur="3rem"
                background={false}
                mainStyles={{margin: 0, padding: 0}}
            />
        )
    };

    let attachClasses = classnames("attach-container", {
        "--focus": focus,
        "--invalid": invalidValue,
        "--readonly": readonly,
        "--disabled": disabled
    });

    let negativeButtonStyle = {
        "font-size": '16px'
    }

    let _isFile = !activePreloader && file;
    let _isPlaceholder = !activePreloader && !file && placeholder;

    const _allMessages = message.concat(systemMessages);
    const _hasMassages = _allMessages.length > 0;

    return (
        visible ?
            <>
                <input
                    ref={el => {
                        input.current = el;
                        ref = el;
                    }}
                    type="file"
                    name={name}
                    id={name}
                    required={required}
                    disabled={disabled}
                    accept={contentType?.join(',')}
                    hidden
                    onInvalid={onInvalidEvent}
                    onChange={onChangeEvent}
                />

                <div className={classnames("swf-attach-input", className)}>
                    {renderLabel()}
                    <div
                        className={attachClasses}
                        onDrop={onDropEvent}
                        onDragEnter={setFocus}
                        onDragOver={setFocus}
                        onDragExit={setBlur}
                        onDragLeave={setBlur}
                        onClick={containerClickedEvent}
                    >
                        {activeDeleting && <Loader actionName={"Deleting"}/>}
                        {activePreloader && renderPreloader()}
                        {_isFile &&
                        <File displayValue={displayValue} file={file}>
                            {!readonly &&
                            <File.End>
                                <div>
                                    <Button icon={"x"}
                                            variant={"inherit"}
                                            size={"sm"}
                                            className={"file-button negative"}
                                            customStyle={negativeButtonStyle}
                                            onClick={deleteFile}
                                            disabled={disabled}
                                    />
                                    <Button icon={"download"}
                                            variant={"inherit"}
                                            className={"file-button positive"}
                                            size={"sm"}
                                            onClick={downloadFile}
                                            disabled={disabled}
                                    />
                                </div>
                            </File.End>
                            }
                        </File>
                        }
                        {_isPlaceholder && <span className={"attach-placeholder"}>{placeholder}</span>}
                    </div>
                    {_hasMassages && _allMessages.map((el, id) => <InfoMessage key={id} {...el}/>)}
                </div>

            </>
            : null
    );

});



Attachment.defaultProps = {
    disabled: false,
    invalid: false,
    manageInvalid: false,
    readonly: false,
    required: false,
    visible: true,
    className: {},
    onInvalid: () => void 0,
    onValueChange: () => void 0,
    labelClassName: {},
    message: [],
    errorMessagesDelay: 4000,
};

Attachment.propTypes = {
    //status
    disabled: propTypes.bool,
    invalid: propTypes.bool,
    readonly: propTypes.bool,
    required: propTypes.bool,
    visible: propTypes.bool,

    //events
    onInvalid: propTypes.func,
    onValueChange: propTypes.func,
    manageInvalid: propTypes.bool,

    //description
    contentType: propTypes.arrayOf(propTypes.string),
    extensions: propTypes.arrayOf(propTypes.string),
    displayValue: propTypes.string,
    placeholder: propTypes.string,
    label: propTypes.string,
    name: propTypes.string,
    maxAttachmentSize: propTypes.number,
    message: PropTypes.arrayOf(PropTypes.shape({
        status: PropTypes.oneOf(["yellow" , "red" , "green" , "blue" , "grey" , "grey-blue"]),
        content: PropTypes.string,
        icon: PropTypes.string,
        className: propTypes.object,
        iconSize: PropTypes.number,
        delay: propTypes.number
    })),
    errorMessagesDelay: propTypes.number,

    //input data
    value: propTypes.object,
    tableSysId: propTypes.string,
    tableName: propTypes.string,
    attachmentSysId: propTypes.string,

    //classes
    className: propTypes.oneOfType([propTypes.object, propTypes.string]),
    labelClassName: propTypes.oneOfType([propTypes.object, propTypes.string]),

}


export default Attachment