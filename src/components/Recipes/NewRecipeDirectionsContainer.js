import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css'

const NewRecipeDirectionsContainer = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());


  const onBoldClick = () => {
    RichUtils.toggleInlineStyle(editorState, 'BOLD');
  }

  return (
    <div>
      <button onClick={onBoldClick}>Bold</button>
      <Editor editorState={editorState} onChange={setEditorState} />;

    </div>
  )



}

export default NewRecipeDirectionsContainer;