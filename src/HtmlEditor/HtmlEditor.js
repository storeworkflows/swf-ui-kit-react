import propTypes from "prop-types";
import * as React from "react";

import {Editor} from "@tinymce/tinymce-react";
import {noop} from "../../lib/utils";
import styles from "./styles.css";

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
        console.log(content);
    }

    render() {
        return(
            <>
                <style>{styles}</style>
                <Editor
                    apiKey="b6bpe90lvjdq7atv9dmi24bl3l5mzf5kseh9ziaxzc2n0woz"
                    toolbar={this.toolbar}
                    plugins={[
                        "link,lists,advlist,table,powerpaste,searchreplace,preview,fullscreen,a11y_fixes,placeholder,readonlynoborder,sn_resizer,code"
                    ]}
                    // skin="lightgray"
                    onEditorChange ={this.changeInput}
                    init={{
                        menubar: false,
                        init_instance_callback: (editor) => {
                            !!this.content ? editor.insertContent(this.content) : null;
                            this.readonly ? editor.setMode("readonly") : null;
                        }
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