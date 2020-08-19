import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery"

const StartDate = (props) => {
  const match = useMediaQuery("(max-width:769px)");

  const useStyles = makeStyles({
    date: {
      textAlign: "center",
      padding: ".7rem",
      border: "2px solid #bb0d0d",
      color:"black",
      width: "100%",
      fontSize: "1.5rem",
      fontFamily: "Arial",
      fontWeight: 600,
      boxShadow: "-1px 2px 4px rgba(255, 120, 120, .6)"
    },
    root: {
      margin: "10% auto",
      // width: match ? "70%" :"20em",
      maxWidth: "300px",
      display: "flex",
      flexDirection: "column",
    },
    flex1: {
      display: "flex",
      width: "100%",
      height:"60px"
    },
    flex11: {
        borderRight: "2px solid #bb0d0d",
        flex:1
    },
     flex12: {
         flex:1
     },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <div className={`${classes.root} ${props.className}`} data-aos="fade-up" >
        <div className={classes.flex1}>
          <div className={classes.flex11} />
          <div className={classes.flex12} />
        </div>
        <div className={classes.date}>18.06.2019 - Ꝏ </div>
      </div>
    </Fragment>
  );
};

export default StartDate;
