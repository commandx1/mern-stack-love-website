import React from "react";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Button = (props) => {
  const match = useMediaQuery("(max-width: 824px)");
  const yatay = useMediaQuery("(max-height: 350px)");
  let fontsize;
  if (yatay) fontsize = ".5rem";
  else if (match) fontsize = ".9rem";
  else fontsize = "1.3rem";
  const useStyles = makeStyles({
    button: {
      padding: match ? ".2rem" : ".6rem",
      margin: ".3rem 0",
      fontFamily: "open sans",
      fontSize: fontsize,
      fontWeight: 600,
      color: "wheat",
      backgroundColor: "#0B396F",
      borderRadius: "1rem",
      cursor: "pointer",
      border: "none",
      transition: "300ms",
      "&:hover": {
        backgroundColor: "#568FD4",
        color: "black",
      },
      "&:disabled": { backgroundColor: "gray", color:"white", cursor: "default"},
    },
  });
  const classes = useStyles();
  return (
    <button
      disabled={props.disabled}
      style={props.style}
      onClick={props.onClick}
      type={props.type}
      className={classes.button}
    >
      {props.children}
    </button>
  );
};

export default Button;
