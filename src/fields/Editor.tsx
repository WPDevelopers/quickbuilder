import React, { useEffect, useState } from 'react'
import { Editor as Wysiwyg } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { addFilter } from "@wordpress/hooks";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { withLabel } from '../core/hooks';

const _Editor = (props) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const toolbarOptions = {
		options: ['inline', 'blockType', 'textAlign', 'colorPicker', 'link'],
		inline: {
			options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
		},
		blockType: {
			inDropdown: true,
			options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
			className: undefined,
			component: undefined,
			dropdownClassName: undefined,
		},
	};

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
            placeholder={props?.placeholder}
            toolbar={toolbarOptions}
            editorState={editorState}
            toolbarClassName="wprf-editor-toolbar"
            wrapperClassName="wprf-editor wprf-control"
            editorClassName="wprf-editor-main"
            onEditorStateChange={setEditorState}
        />
    );
}

const Editor = withLabel(_Editor);
export default Editor;

addFilter('custom_field', 'wprf', (field, type, props) => {
  if ('editor' === type) {
    return <Editor {...props} />;
  }
  return field;
});
