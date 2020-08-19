import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Input = ({
  placeholder,
  style,
  name,
  label,
  type,
  onChange,
  inputStyle,
  required,
  value,
  bg
}) => {
  const match = useMediaQuery("(max-width: 769px)");
  const yatay = useMediaQuery("(max-height: 350px)");

  let fontsize;
  if (yatay) fontsize = ".7rem";
  else if (match) fontsize = ".9rem";
  else fontsize = "1.3rem";

  let background;
  if (bg) background = bg;
  else background = "#41AD19";

  let color;
  if (background === "white") color = "black";
  else color = "white";

  const [focus, setfocus] = useState(false);
  const useStyles = makeStyles({
    root: {
      textAlign: "center",
      fontSize: fontsize,
    },
    label: {
      textDecoration: "underline",
    },
    input: {
      transition: "300ms",
      width: "100%",
      backgroundColor: focus ? "#EBF39C" : background,
      color: focus ? "black" : color,
      border: ".5px solid green",
      borderRadius: "1rem",
      letterSpacing: "0.04rem",
      fontSize: fontsize,
    },
  });
  const classes = useStyles();
  return (
    <div style={style} className={classes.root}>
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        className={classes.input}
        type={type}
        onChange={onChange}
        onFocus={() => setfocus(true)}
        onBlur={() => setfocus(false)}
        style={inputStyle}
        required={required}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
