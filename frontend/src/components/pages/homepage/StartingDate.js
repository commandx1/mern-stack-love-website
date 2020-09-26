import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery'

const StartDate = (props) => {
  const matches = useMediaQuery("(max-width:769px)");

  const useStyles = makeStyles({
    date: {
      textAlign: "center",
      padding: "1rem",
      border: "2px solid #03e9f4",
      color:"#c8c8c8",
      fontSize: matches ? "1rem" : "1.5rem",
      fontFamily: "Arial",
      fontWeight: 600,
      boxShadow: "0px 0px 10px #03E9F4"
    },
    root: {
      height: '50vh',
      width: '100%',
      display: "flex",
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center'
    },
    flex1: {
      display: "flex",
      width: "100%",
      height:"60px"
    },
    flex11: {
        borderRight: "2px solid #03e9f4",
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
