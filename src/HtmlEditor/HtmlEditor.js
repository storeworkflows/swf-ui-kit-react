import propTypes from "prop-types";
import * as React from "react";

import {Editor} from "@tinymce/tinymce-react";
import {noop} from "../../lib/utils";
import {v4 as uuidv4} from "uuid";
import styles from "./styles.css";
import fetch from "cross-fetch";

export default class HtmlEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ""
        }
        this.changeInput = this.changeInput.bind(this);
        this.toolbar = this.props.toolbar;
        this.content = this.props.content;
        this.readonly = this.props.readonly;
    }

    changeInput(content) {
        this.setState({inputVal: content});
        this.props?.onValueChange(content);
        // console.log(content);
    }

    // fetchRequest = async ({ url, params = {} }) => {
    //     let result;
    //     try {
    //         const response = await fetch(url, {
    //             ...params,
    //             credentials: 'same-origin',
    //             headers: {
    //                 'X-Transaction-Source': window.transaction_source,
    //                 'X-UserToken': window.g_ck,
    //                 'Content-Type': 'multipart/form-data'
    //             },
    //         });
    //         const resultJson = await response.json();
    //         console.log(resultJson)
    //         result = resultJson.result.slice(0,);
    //     } catch (e) {
    //         console.error(e)
    //     }
    //     return result;
    // }

    render() {

        return(
            <>
                <style>{styles}</style>
                <Editor
                    apiKey="b6bpe90lvjdq7atv9dmi24bl3l5mzf5kseh9ziaxzc2n0woz"
                    toolbar={this.toolbar}
                    plugins={[
                        "link,lists,advlist,table,powerpaste,searchreplace,preview,fullscreen,a11y_fixes,placeholder,readonlynoborder,code"
                    ]}
                    // skin="lightgray"
                    onEditorChange ={this.changeInput}
                    init={{
                        menubar: false,
                        init_instance_callback: (editor) => {
                            !!this.content ? editor.selection.setContent(this.content) : noop;
                            this.readonly ? editor.setMode("readonly") : noop;
                        },
                        // images_upload_handler: (blobInfo, success, failure) => {
                        //     const selectedFile = blobInfo;

                        //     console.log(blobInfo)
                            
                        //     const formData = new FormData();
                        //     formData.append("table_name", "sys_attachment");
                        //     formData.append("table_sys_id", uuidv4().split("-").join(""));
                        //     console.log("HELLOTHERE");
                        //     // formData.append("file", selectedFile.file());
                        //     const params = {
                        //         method: "POST",
                        //         data: formData
                        //     }
                        //     // console.log(this);
                        //     this.fetchRequest({url: "https://dev78490.service-now.com/api/now/attachment/upload", params})
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
    readonly: false
}

HtmlEditor.propTypes = {
    toolbar: propTypes.string,
    onValueChange: propTypes.func,
    content: propTypes.string,
    readonly: propTypes.bool
}