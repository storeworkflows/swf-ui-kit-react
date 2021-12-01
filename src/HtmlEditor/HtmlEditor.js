import propTypes from "prop-types";
import * as React from "react";

import {Editor} from "@tinymce/tinymce-react";
import {noop} from "../utils";
import {v4 as uuidv4} from "uuid";
import fetch from "cross-fetch";
import {Icon} from "../index";

export default class HtmlEditor extends React.Component {
    static baseUrl = "/scripts/tinymce_default/node_modules/sn-tinymce/js/tinymce";

    constructor(props) {
        super(props);
        this.state = {
            inputVal: "",
            TinyMcEditor: null
        }
        this.changeInput = this.changeInput.bind(this);
        this.changeBaseURL();
    }

    changeInput(content) {
        this.setState({inputVal: content});
        this.props?.onValueChange(content);
    }

    ascii_to_hexa(str) {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++)
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   }

   changeBaseURL() {
        if ("tinymce" in window) {
            window.tinymce.baseURL = HtmlEditor.baseUrl;
        }
   }

    fetchRequest = async ({ url, params = {} }) => {
        let result;
        const response = await fetch(url, {
            ...params,
            credentials: 'same-origin',
            headers: {
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck,
                'Content-Type': 'multipart/form-data',
                'Accept': "*/*"
            },
        });
        const resultJson = await response.json();
        result = resultJson.result;

        return result;
    }

    render() {
        const {
            toolbar,
            content,
            readonly,
            label,
            required
        } = this.props;

        const labelColor = !!this.state.inputVal && required ? "rgb(99,114,116)" : "rgb(200,60,54)";
        const height = !!this.props.height ? this.props.height : `${Math.round(document.body.offsetHeight * 0.6) - 36}px`;

        this.state.TinyMcEditor && this.state.TinyMcEditor.theme.resizeTo('99%', height)

        return(
            <div className='swf-html-editor'>
                {!!label || required ? <div className="editor-label-area">
                    <label style={{color: labelColor}} onClick={() => this.state.TinyMcEditor.focus()}>{label}</label>
                    {required ? <Icon color={labelColor} icon="asterisk" size="xs" /> : null}
                </div> : null}
                <Editor
                    toolbar={toolbar}
                    plugins={[
                        "link,lists,advlist,table,powerpaste,searchreplace,preview,fullscreen,a11y_fixes,placeholder,readonlynoborder,code,textcolor"
                    ]}
                    onEditorChange ={this.changeInput}
                    init={{
                        menubar: false,
                        statusbar: false,
                        remove_script_host: true,
                        relative_urls: true,
                        convert_urls: false,
                        init_instance_callback: (editor) => {
                            !!content ? editor.selection.setContent(content) : noop;
                            readonly ? editor.setMode("readonly") : noop;
                            this.setState({TinyMcEditor: editor})
                            editor.dom.setStyle(editor.iframeElement, "height", height);
                        },
                        width: "99%",
                        document_base_url: window.location.origin,
                        external_plugins: {
                            codemirror:
                                '/scripts/tinymce_default/node_modules/sn-tinymce/js/tinymce/sn_plugins/codemirror/plugin.min.js'
                        },
                        codemirror: {
                            path: 'CodeMirror'
                        },
                        images_upload_handler: (blobInfo, success, failure) => {
                            const selectedFile = blobInfo.blob();
                            const uuid = uuidv4().split("-").join("");

                            const formdata = new FormData();

                            formdata.append('table_name', `ZZ_YYsys_attachment`);
                            formdata.append('table_sys_id', uuid);
                            formdata.append('file', new File([selectedFile], blobInfo.filename()));
                            fetch(`/api/now/attachment/upload`, {
                                method: "POST",
                                credentials: 'same-origin',
                                headers: {
                                    'X-Transaction-Source': window.transaction_source,
                                    'X-UserToken': window.g_ck
                                },
                                body: formdata
                            })
                            .then(res => {
                                if (res.status === 201)
                                    return res.json();
                            })
                            .then(resJson => success("/sys_attachment.do?sys_id=" + resJson.result.sys_id))
                        },
                        setup: editor => {
                            this.editor = editor;
                            editor.on("init", () => {})
                        }
                    }}
                />
            </div>
        );
    }
}

HtmlEditor.defaultProps = {
    toolbar: 'bold italic underline undo redo | forecolor backcolor | fontselect fontsizeselect table | link unlink | code  | alignleft aligncenter alignright | bullist numlist | fullscreen',
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
