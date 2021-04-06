import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import RequiredLabel from "../RequiredLabel/RequiredLabel";
import PropTypes from "prop-types";
import InfoMessage from "../InfoMessage/InfoMessage";
import {getFileExtensions} from "./utils";
import File from "./File";
import Button from "../Button/Button";
import {downloadRequest, uploadRequest, deleteRequest} from "./_requests";
import {GLOBAL_CONSTANTS} from "../Card/constants";
import Preloader from "../Preloader/Preloader";

class Attachment extends React.Component {
    constructor(props) {
        super(props);

        const {invalid, tableName, tableSysId, attachmentSysId} = this.props;
        this.state = {
            invalid: invalid,
            file: undefined,
            focus: false,
            systemMessages: [],
            tableName: tableName,
            tableSysId: tableSysId,
            attachmentSysId: attachmentSysId,
            readolny: false
        }

        this.containerClickedEvent = this.containerClickedEvent.bind(this);
        this.onInvalidEvent = this.onInvalidEvent.bind(this);
        this.onChangeEvent = this.onChangeEvent.bind(this);
        this.onDropEvent = this.onDropEvent.bind(this);

        this.uploadFile = this.uploadFile.bind(this);
        this.downloadFile = this.downloadFile.bind(this);
        this.deleteFile = this.deleteFile.bind(this);

        this.setFocus = this.setFocus.bind(this);
        this.setBlur = this.setBlur.bind(this);
        this.setFile = this.setFile.bind(this);

        this.input = null
    }

    setFile(file){
        const {maxAttachmentSize, contentType, extensions, errorMessagesDelay, readonly, disabled} = this.props
        if(!this.state.file && !this.state.readonly && !readonly && !disabled) {
            this.setBlur();
            const {tableSysId, tableName} = this.state;

            let isFitSize = maxAttachmentSize ? file.size <= maxAttachmentSize : true;
            let isFitType = contentType ? contentType.includes(file.type) : true;
            let isFitExtensions = extensions ? extensions.includes(getFileExtensions(file.name)) : true;

            let errorIcon = "exclamation-circle"
            let errorMessages = []
            let delay = errorMessagesDelay;

            if (!isFitType)
                errorMessages.push({content: `Available types: ${contentType.join(', ')}`, icon: errorIcon, delay: delay})
            if (!isFitSize)
                errorMessages.push({content: `Max file size = ${maxAttachmentSize / 1000} Kb`, icon: errorIcon, delay: delay})
            if (!isFitExtensions)
                errorMessages.push({content: `Available extensions: ${extensions.join(', ')}`, icon: errorIcon, delay: delay})
            if(!tableSysId || !tableName)
                errorMessages.push({content: `Can't upload file`, icon: errorIcon, delay: delay})

            if (errorMessages.length === 0){
                this.uploadFile(file)
            }
            else if(this.input) {
                this.input.value = "";
                this.setState({ systemMessages: errorMessages})
            }
        }
    }

    async uploadFile(file) {
        const {tableSysId, tableName} = this.state;
        this.setState({readonly: true});
        let updatedState = await uploadRequest(file, tableSysId, tableName, this.props.errorMessagesDelay);
        this.setState(updatedState);
        this.setState({readonly: false});

    }

    async deleteFile(e) {
        this.stopEvent(e);
        const {attachmentSysId} = this.state;
        let stateToUpdate = await deleteRequest(attachmentSysId, this.input, this.props.errorMessagesDelay)
        this.setState(stateToUpdate)
    }

    downloadFile(e){
        this.stopEvent(e)
        let file = this.state.file;
        if (window.navigator.msSaveOrOpenBlob)
            window.navigator.msSaveOrOpenBlob(file, file.name);
        else {
            let a = document.createElement("a"),
                url = (file.link) ? file.link : URL.createObjectURL(file);
            a.href = url;
            a.download = file.name;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    }

    stopEvent(e){
        e?.preventDefault();
        e?.stopPropagation();
    }

    setFocus(e){
        this.stopEvent(e);
        this.setState({focus: true});
    }

    setBlur(e){
        this.stopEvent(e);
        this.setState({focus: false});
    }

    onInvalidEvent(e){
        this.stopEvent(e);
        const {manageInvalid, onInvalid} = this.props;

        if(!manageInvalid)
            this.setState({invalid: true})

        onInvalid({event: e});
    }

    onChangeEvent(e){
        this.stopEvent(e);
        this.setFile(this.input?.files[0]);
    }

    onDropEvent(e){
        this.stopEvent(e);
        this.setFile(e.dataTransfer.files[0]);
    }

    containerClickedEvent(e){
        if(!this.state.file) {
            this.setFocus(e);
            if(this.input) {
                console.log(this.input)
                this.input.click();
            }
        }
    }

    componentDidUpdate(){
        const {manageInvalid, invalid} = this.props;

        if(manageInvalid && invalid !== this.state.invalid)
            this.setState({invalid: invalid})
    }

    async componentDidMount() {
        this.setState({readonly: true});
        let updatedState = await downloadRequest(this.state.attachmentSysId, this.props.errorMessagesDelay);
        this.setState(updatedState);
        this.setState({readonly: false});
    }

    renderLabel() {
        const {required, label, labelClassName} = this.props;
        const {invalid} = this.state;
        let labelClasses = classnames(labelClassName, "inp-label");

        return (label ?
            <RequiredLabel
                className={labelClasses}
                required={required}
                invalid={invalid}
                label={label}
                htmlFor={name}
            /> : null)
    }

    renderMessages() {
        const {message} = this.props;
        const {systemMessages} = this.state;
        let allMessages = message.concat(systemMessages);

         return (allMessages.length > 0 ?
                 allMessages.map((el, id) => {
                    return <InfoMessage
                        key={id}
                        iconSize={el.iconSize}
                        className={el.className}
                        content={el.content}
                        icon={el.icon}
                        status={el.status}
                        delay={el.delay}
                    />
                })
            : null
        )
    }

    render() {

        const {
            disabled,
            name,
            readonly,
            required,
            visible,
            className,
            contentType,
            placeholder,
            displayValue
        } = this.props;

        const {invalid, file, focus} = this.state

        let attachClasses =  classnames("attach-container", {
            "--focus": focus,
            "--invalid": invalid,
            "--readonly": readonly,
            "--disabled": disabled
        });

        let negativeButtonStyle = {
            "font-size": '16px'
        }

        return (
            visible ?
                <>

                    <input
                        ref = {el => this.input = el}
                        type="file"
                        name={name}
                        id={name}
                        required={required}
                        disabled={disabled}
                        accept={contentType?.join(',')}
                        hidden
                        onInvalid={this.onInvalidEvent}
                        onChange={this.onChangeEvent}
                    />
                    <div className={classnames("swf-attach-input", className)}>
                        {this.renderLabel()}
                        <div
                            className={attachClasses}
                            onDrop={this.onDropEvent}
                            onDragEnter={this.setFocus}
                            onDragOver={this.setFocus}
                            onDragExit={this.setBlur}
                            onDragLeave={this.setBlur}
                            onClick={this.containerClickedEvent}
                        >

                            {file
                                ? <File displayValue={displayValue} file={file}>
                                    <File.End>
                                        <div>
                                            <Button icon={"x"}
                                                    variant={"inherit"}
                                                    size={"sm"}
                                                    className={"file-button negative"}
                                                    customStyle={negativeButtonStyle}
                                                    onClick={this.deleteFile}
                                            />
                                            <Button icon={"download"}
                                                    variant={"inherit"}
                                                    className={"file-button positive"}
                                                    size={"sm"}
                                                    onClick={this.downloadFile}
                                            />
                                        </div>
                                    </File.End>
                                </File>
                                : placeholder && <span className={"attach-placeholder"}>{placeholder}</span>
                            }
                        </div>
                        {this.renderMessages()}
                    </div>
                </>
                : null
        );
    }
}


Attachment.defaultProps = {
    disabled: false,
    invalid: false,
    manageInvalid: false,
    manageValue: false,
    readonly: false,
    required: false,
    visible: true,
    className: {},
    onInvalid: () => void 0,
    onValueChange: () => void 0,
    labelClassName: {},
    message: [],
    errorMessagesDelay: 4000,
    tableSysId: "8f51828adbc32c905884eb184b9619a5",
    tableName: "x_aaro2_teamwork_container",
    attachmentSysId: "76c68f4adb1ba4905884eb184b96190",
    placeholder: "Space for your file"
    //e09faf12db9fe4905884eb184b9619c1
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
    manageValue: propTypes.bool,

    //description
    contentType: propTypes.arrayOf(propTypes.string),
    extensions: propTypes.arrayOf(propTypes.string),
    displayValue: propTypes.string,
    placeholder: propTypes.string,
    label: propTypes.string,
    name: propTypes.string,
    maxAttachmentSize: propTypes.number,
    message: PropTypes.arrayOf(PropTypes.shape({
        status: PropTypes.oneOf(["critical", "warning", "positive", "info", "suggestion"]),
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