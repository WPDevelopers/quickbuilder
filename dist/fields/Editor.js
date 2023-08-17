import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { createElement, useState, useEffect } from 'react';
import { Editor as Editor$1 } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { addFilter } from '@wordpress/hooks';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '@babel/runtime/helpers/defineProperty';
import 'lodash-es';
import '@wordpress/api-fetch';
import 'intersect';
import '@wordpress/i18n';
import '../core/hooks/useBuilderContext.js';
import 'sweetalert2';
import '@wordpress/data';
import withLabel from '../core/hooks/withLabel.js';
import '@babel/runtime/helpers/extends';
import 'classnames';

var _Editor = function _Editor(props) {
  var _useState = useState(EditorState.createEmpty()),
    _useState2 = _slicedToArray(_useState, 2),
    editorState = _useState2[0],
    setEditorState = _useState2[1];
  var toolbarOptions = {
    options: ['inline', 'blockType', 'textAlign', 'colorPicker', 'link'],
    inline: {
      options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace']
    },
    blockType: {
      inDropdown: true,
      options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined
    }
  };
  useEffect(function () {
    if (props.value) {
      var _htmlToDraft = htmlToDraft(props.value),
        contentBlocks = _htmlToDraft.contentBlocks,
        entityMap = _htmlToDraft.entityMap;
      var contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      var _editorState = EditorState.createWithContent(contentState);
      setEditorState(_editorState);
    }
  }, []);
  useEffect(function () {
    var tempValue = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    props.onChange({
      target: {
        type: 'editor',
        value: tempValue,
        name: props.name
      }
    });
  }, [editorState]);
  return createElement(Editor$1, {
    placeholder: props === null || props === void 0 ? void 0 : props.placeholder,
    toolbar: toolbarOptions,
    editorState: editorState,
    toolbarClassName: "wprf-editor-toolbar",
    wrapperClassName: "wprf-editor wprf-control",
    editorClassName: "wprf-editor-main",
    onEditorStateChange: setEditorState
  });
};
var Editor = withLabel(_Editor);
addFilter('custom_field', 'wprf', function (field, type, props) {
  if ('editor' === type) {
    return createElement(Editor, props);
  }
  return field;
});

export { Editor as default };
