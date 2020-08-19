import React, { useState } from "react";

const TextEditor = () => {
  const [state, setstate] = useState("");
  const [focus, setfocus] = useState(false);

  window.onkeydown = (e) => {
    if (focus) if (e.keyCode === 13) {
        setstate(state + "<br/>")
    }
  };

  return (
    <div>
      <textarea
        onFocus={() => setfocus(true)}
        onBlur={() => setfocus(false)}
        name="textarea"
        id="textarea"
        cols="30"
        rows="10"
        onChange={(e) => setstate(e.target.value)}
        value={state.replace(/(<([^>]+)>)/ig,"")}
      /> <br/>
      {state}
    </div>
  );
};

export default TextEditor;
