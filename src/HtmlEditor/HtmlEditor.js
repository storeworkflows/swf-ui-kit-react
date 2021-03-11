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
    }

    changeInput(editor) {
        this.setState({inputVal: editor.getData()});
        this.props?.properties?.onValueChange(editor.getData())
    }

    render() {
        return(
            <>
                <style>{styles}</style>
                <Editor
                    apiKey="b6bpe90lvjdq7atv9dmi24bl3l5mzf5kseh9ziaxzc2n0woz"
                    toolbar={this.toolbar}
                    menubar={false}
                />
            </>
        );
    }
}

HtmlEditor.defaultProps = {
    toolbar: 'bold italic underline undo redo | fontselect fontsizeselect table | link unlink | code  | alignleft aligncenter alignright | bullist numlist',
    onValueChange: noop
}

HtmlEditor.propTypes = {
    toolbar: propTypes.string,
    onValueChange: propTypes.func
}