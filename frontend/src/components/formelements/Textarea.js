import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

const TextArea = (props) => {
  const [focus, setfocus] = useState(false);
  const useStyles = makeStyles({
    root: {
      display: props.flex && "flex",
      textAlign: "center",
    },
    label: {
      width: "20%",
      textDecoration: "underline",
    },
    textarea: {
      width: !props.flex && "100%",
      textIndent: "1rem",
      backgroundColor: focus ? "#EBF39C" : "#41AD19",
      color: focus ? "black" : "white",
      border: ".5px solid green",
      scrollbarColor: "white",
      borderRadius: "1.1rem",
      letterSpacing: "0.04rem",
      resize: "none",
      fontFamily: 'Open Sans, sans-serif',
      transition: "300ms",
      "&::-webkit-scrollbar": {
          display: "none"
      }
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <label htmlFor={props.name}>{props.label} :</label>
      <textarea
        className={classes.textarea}
        value={props.value}
        onChange={props.onChange}
        onFocus={() => setfocus(true)}
        onBlur={() => setfocus(false)}
        style={props.style}
        placeholder={props.placeholder}
        required={props.required}
        name={props.name}
        cols={props.cols}
        rows={props.rows}
      />
    </div>
  );
};

export default TextArea;
