import propTypes from "prop-types";
import * as React from "react";

import {Editor} from "@tinymce/tinymce-react";
import {noop} from "../../lib/utils";
import {v4 as uuidv4} from "uuid";
import fetch from "cross-fetch";
import {Icon} from "../index";

export default class HtmlEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: "",
            TinyMcEditor: null
        }
        this.changeInput = this.changeInput.bind(this);
    }

    changeInput(content) {
        this.setState({inputVal: content});
        this.props?.onValueChange(content);
    }

    fetchRequest = async ({ url, params = {} }) => {
        let result;
        try {
            const response = await fetch(url, {
                ...params,
                credentials: 'same-origin',
                headers: {
                    'X-Transaction-Source': window.transaction_source,
                    'X-UserToken': window.g_ck,
                    'Content-Type': 'multipart/form-data'
                },
            });
            const resultJson = await response.json();
            console.log(resultJson)
            result = resultJson.result.slice(0,);
        } catch (e) {
            console.error(e)
        }
        return result;
    }

    render() {
        const {
            toolbar,
            content,
            readonly,
            label,
            required,
            // height
        } = this.props;

        const labelColor = !!this.state.inputVal && required ? "rgb(99,114,116)" : "rgb(200,60,54)" 

        return(
            <>
                <style>{styles}</style>
                {!!label || required ? <div className="editor-label-area">
                    <label style={{color: labelColor}} onClick={() => this.state.TinyMcEditor.focus()}>{label}</label>
                    {required ? <Icon color={labelColor} icon="asterisk" size="xs" /> : null}
                </div> : null}
                <Editor
                    toolbar={toolbar}
                    plugins={[
                        "link,lists,advlist,table,powerpaste,searchreplace,preview,fullscreen,a11y_fixes,placeholder,readonlynoborder,code"
                    ]}
                    onEditorChange ={this.changeInput}
                    init={{
                        menubar: false,
                        statusbar: false,
                        init_instance_callback: (editor) => {
                            const height = !!this.props.height ? this.props.height : `${Math.round(document.body.offsetHeight * 0.6) - 36}px`;
                            !!content ? editor.selection.setContent(content) : noop;
                            readonly ? editor.setMode("readonly") : noop;
                            this.setState({TinyMcEditor: editor})
                            editor.dom.setStyle(editor.getContentAreaContainer(), "height", height);
                        },
                        width: "99%",
                        // images_upload_handler: (blobInfo, success, failure) => {
                        //     const selectedFile = blobInfo.blob();
                        //     const uuid = uuidv4().split("-").join("");
                        //     const data = new FormData();
                        //     data.append('table_name', `ZZ_YYsys_attachment`);
                        //     data.append('table_sys_id', uuid);
                        //     data.append('file', selectedFile);
                        //     console.log("PROSHLO", uuid, selectedFile)
                        //     const params = {
                        //         method: "POST",
                        //         data
                        //     }
                        //     // console.log(this);
                        //     if (!!selectedFile.size) {
                        //         console.log(selectedFile.size);
                        //         this.fetchRequest({url: `${window.location.origin}/api/now/attachment/upload`, params})
                        //     }
                        // }
                    }}
                />
            </>
        );
    }
}

HtmlEditor.defaultProps = {
    toolbar: 'bold italic underline undo redo | fontselect fontsizeselect table | link unlink | code  | alignleft aligncenter alignright | bullist numlist | fullscreen',
    onValueChange: noop,
    content: "",
    readonly: false,
    label: "",
    required: false,
    height: ""
}

HtmlEditor.propTypes = {
    toolbar: propTypes.string,
    onValueChange: propTypes.func,
    content: propTypes.string,
    readonly: propTypes.bool,
    label: propTypes.string,
    required: propTypes.bool,
    height: propTypes.string
}