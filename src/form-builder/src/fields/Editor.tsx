import React, { useEffect, useState } from 'react'
import { Editor as Wysiwyg } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = (props) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    useEffect(() => {
        // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    }, [editorState]);
    return (
        <div>
            <Wysiwyg
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={setEditorState}
            />
        </div>
    );
}

export default Editor;