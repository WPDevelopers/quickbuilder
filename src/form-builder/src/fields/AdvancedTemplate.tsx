import React, { useEffect, useRef, useState } from 'react'
import { Editor as Wysiwyg } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw, ContentState, RawDraftContentState, Modifier, Editor } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { toolbarOptions } from './helpers';
import { useBuilderContext, withLabel } from '../core/hooks';

const AdvancedTemplate = (props) => {
    const builderContext = useBuilderContext();
    const editor = useRef<{editor: Editor}>();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [templateOptions, setTemplateOptions] = useState([]);

    useEffect(() => {
        if (props.value) {
            const { contentBlocks, entityMap } = htmlToDraft(props.value);
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            const editorState = EditorState.createWithContent(contentState);
            setEditorState(editorState);
        }
        // notification-template
        // console.log(builderContext.tabs[2].fields[0].fields);
        let field = getField(builderContext.tabs, 'content_tab')
        field = getField(field, 'content')
        field = getField(field, 'notification-template')
        let options = field.filter(f => f?.options).map(f => f?.options).flat();
        setTemplateOptions(options);

        console.log(field, options);

    }, []);

    useEffect(() => {
        let tempValue = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        props.onChange({
            target: {
                type: 'advanced-template',
                value: tempValue,
                name: props.name
            }
        })
    }, [editorState]);

    const updateEditorState = (editorState) => {
        const raw = convertToRaw(editorState.getCurrentContent());
        const newRaw: RawDraftContentState = {...raw, blocks: raw.blocks.slice(0, 3)};
        const newState = EditorState.createWithContent(convertFromRaw(newRaw));
        console.log(newRaw);
        console.log(newState);
        console.log(' ');
        setEditorState(newState);
    }
    const handleBeforeInput = (chars: string, editorState: EditorState, eventTimeStamp: number) => {
        const raw = convertToRaw(editorState.getCurrentContent());
        if(raw.blocks.length > 3){

            console.log(chars, editorState, raw.blocks.length);
            return 'handled';
        }
    }
    const handleReturn = (e, editorState: EditorState) => {
        const raw = convertToRaw(editorState.getCurrentContent());
        if(raw.blocks.length >= 3){
            e.preventDefault();
            e.stopPropagation();
            console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

            return 'handled';
        }
        console.log(e, raw.blocks, raw.blocks.length);
    }
    const handlePastedText = (text: string, html: string, editorState: EditorState) => {
        const raw = convertToRaw(editorState.getCurrentContent());
        const editorLine = raw.blocks.length;
        const clipboardLine = text.split(/\r\n|\r|\n/).length;

        if(editorLine + clipboardLine > 3){
            return true;
        }
    }
    const getField = (arr, name) => {
        if(arr.length){
            return arr.find(field => field.name == name)?.fields;
        }
        return [];
    }

    const clicked = (value) => {
        const contentState     = editorState.getCurrentContent();
        const sectionState     = editorState.getSelection();
        let nextContentState;
        let nextEditorState = EditorState.createEmpty();
        if (sectionState.isCollapsed()) {
            nextContentState = Modifier.insertText(contentState, sectionState, `{{${value}}}`);
        }
        else{
            nextContentState = Modifier.replaceText(contentState, sectionState, `{{${value}}}`);
        }

        nextEditorState = EditorState.push(editorState,nextContentState,'insert-fragment');
        setEditorState(nextEditorState);
        setTimeout(() => {
            editor.current.editor.focus();
        }, 300);
    }

    return (
        <>
        <Wysiwyg
            ref={editor}
            toolbar={toolbarOptions}
            editorState={editorState}
            toolbarClassName="wprf-editor-toolbar"
            wrapperClassName="wprf-editor wprf-control"
            editorClassName="wprf-editor-main"
            onEditorStateChange={setEditorState}
            handleBeforeInput={handleBeforeInput}
            handleReturn={handleReturn}
            handlePastedText={handlePastedText}
        />
        <div className="template-options">
            Variables:
            {builderContext.eligibleOptions(templateOptions).map(val => {
                if(val.value != 'tag_custom'){
                    return <><span data-value={val.label} onClick={() => clicked(val.value)}>{`{{${val.value}}}`}</span>{" "}</>;
                }
            })}
        </div>
        </>
    );
}

export default AdvancedTemplate;