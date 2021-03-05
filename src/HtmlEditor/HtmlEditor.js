import propTypes from "prop-types";
import * as React from "react";

import ClassicEditor from "ckeditor5/packages/ckeditor5-build-classic/build/ckeditor";
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

    componentDidMount() {
        ClassicEditor.create(this.ckRef, {
            toolbar: this.toolbar,
            fontSize: [
                8, 10, 12, 14, 18, 24, 36
            ],
            save: (editor) => {
                this.changeInput(editor);
            }
        })
    }

    changeInput(editor) {
        this.setState({inputVal: editor.getData()});
    }

    render() {
        return(
            <>
                <style>{styles}</style>
                <div ref={ elem => this.ckRef = elem } />
            </>
        );
    }
}

HtmlEditor.defaultProps = {
    toolbar: [ 'bold', 'italic', "underline", "undo", "redo", "|", "fontFamily" , "fontSize" , 'insertTable', "|", 'link', "|", "code", "|", "alignment:left", "alignment:center", "alignment:right", "|", 'bulletedList', 'numberedList', "imageUpload" ]
}

HtmlEditor.propTypes = {
    toolbar: propTypes.arrayOf(propTypes.string)
}