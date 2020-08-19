import React, { useEffect, useState } from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ReactDom from "react-dom";
import Backdrop from "../backdrop/backdrop";
import {useHistory} from 'react-router-dom'


const Modal = (props) => {
  const match = useMediaQuery("(max-width: 800px) and (min-width: 620px)");
  const match2 = useMediaQuery("(max-width: 500px)");
  const yatay = useMediaQuery("(max-height: 319px)");
  const yatay2 = useMediaQuery("(max-height: 420px)");
  const genis = useMediaQuery("(min-height: 1000px)");
  const [open, setopen] = useState(false);
  const history = useHistory()

  const useStyles = makeStyles({
    root: {
      width: "100%",
      height: "100%",
      position: "fixed",
      left: 0,
      top: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 101,
      pointerEvents: "none",
    },
    modal: {
      pointerEvents: "visible",
      background: "#fe8c00" /* fallback for old browsers */,
      background:
        "-webkit-linear-gradient(to right, #f83600, #fe8c00)" /* Chrome 10-25, Safari 5.1-6 */,
      background:
        "linear-gradient(to right, #70e1f5, #ffd194)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

      color: "black",
      minWidth: "50%",
      width: match2 && "90vw",
      maxWidth: yatay2 ? "70%" : "90%",
      overflowY: yatay ? "scroll" : "hidden",
      height: "80%",
      zIndex: 102,
      alignItems: "center",
      overflow: "hidden",
      justifyContent: "center",
      fontSize: "1.1rem",
      display: "flex",
      transform: open ? "translateY(0)" : "translateY(-1200%)",
      transition: "700ms",
    },
  });

  let backdrop;
  backdrop = (
    <Backdrop
      backdropClickHandler={() => {
        sessionStorage.removeItem("memory-modal");
        history.push(props.path);
        setopen(false);
      }}
    />
  );

  useEffect(() => {
    props.open &&
      setTimeout(() => {
        setopen(true);
      }, 10);
    return () => {
      !props.open && setopen(false);
    };
  });

  const classes = useStyles();

  return ReactDom.createPortal(
    <>
      {open ? backdrop : null}
      <div className={classes.root}>
        <div className={classes.modal}>{props.children}</div>
      </div>
    </>,
    document.getElementById("memories-modal-root")
  );
};

export default Modal;
