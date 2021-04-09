import React, { useEffect, useState } from 'react'
import { Editor as Wysiwyg } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { toolbarOptions } from './helpers';
import { withLabel } from '../core/hooks';

const Editor = (props) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
        if (props.value) {
            const { contentBlocks, entityMap } = htmlToDraft(props.value);
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            const editorState = EditorState.createWithContent(contentState);
            setEditorState(editorState);
        }
    }, []);

    useEffect(() => {
        let tempValue = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        props.onChange({
            target: {
                type: 'editor',
                value: tempValue,
                name: props.name
            }
        })
    }, [editorState]);


    return (
        <Wysiwyg
            toolbar={toolbarOptions}
            editorState={editorState}
            toolbarClassName="wprf-editor-toolbar"
            wrapperClassName="wprf-editor wprf-control"
            editorClassName="wprf-editor-main"
            onEditorStateChange={setEditorState}
        />
    );
}

export default withLabel(Editor);