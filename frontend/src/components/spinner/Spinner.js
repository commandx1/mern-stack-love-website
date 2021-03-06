import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    top: 0,
    left:0,
    position: "fixed",
  },
}));

export default function LinearIndeterminate({style}) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={style}>
      <LinearProgress color="secondary" />
    </div>
  );
}
