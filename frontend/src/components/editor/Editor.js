import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "./editor.css";
import { configurations } from "./Configurations";

const Editor = (props) => {
  let toolbar;
  switch (props.type) {
    case "memory":
      toolbar = [
        "heading",
        "|",
        "fontSize",
        "bold",
        "italic",
        "fontColor",
        "fontBackgroundColor",
        "bulletedList",
        "blockQuote",
        "undo",
        "redo",
      ];
      break;
    case "poem":
      toolbar = [
        "bold",
        "italic",
        "fontColor",
        "underline",
        "undo",
        "redo",
      ];
      break;
    case "telltale":
      toolbar = [
        "heading",
        "|",
        "fontSize",
        "bold",
        "italic",
        "fontColor",
        "fontBackgroundColor",
        "alignment",
        "underline",
        "strikeThrough",
        "bulletedList",
        "numberedList",
        "blockQuote",
        "link",
        "undo",
        "redo"
      ];
      break;
    case "blog":
      toolbar = [
        "heading",
        "|",
        "fontSize",
        "bold",
        "italic",
        "fontColor",
        "fontBackgroundColor",
        "alignment",
        "insertTable",
        "insertImage",
        "underline",
        "strikeThrough",
        "bulletedList",
        "numberedList",
        "blockQuote",
        "link",
        "undo",
        "redo"
      ];
      break;

    default:
      break;
  }
  return (
    <div style={props.style}>
      <CKEditor
        onInit={(editor) => {
          // Insert the toolbar before the editable area.
          editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );
        }}
        value={props.value}
        data={props.data}
        onChange={props.onChange}
        editor={DecoupledEditor}
        config={{
          ...configurations,
          toolbar: toolbar
        }}
      />
    </div>
  );
};

export default Editor;
