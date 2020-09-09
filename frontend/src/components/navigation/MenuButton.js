import React, { useState, useContext } from "react";
import { authContext, generalContext } from "../../WRAPPERS/Context/myContext";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { NavLink } from "react-router-dom";
import heart from "../../assets/menu-heart.png";
import Notification from "../notifications/notification";

const Deneme = () => {
  const [a, setA] = useState(false);
  const auth = useContext(authContext);
  const general = useContext(generalContext);
  const matches = useMediaQuery("(min-width:769px)");
  const yatay = useMediaQuery("(min-width:600px) and (max-width: 700px)");

  const useStyles = makeStyles({
    button: {
      height: "50px",
      width: "50px",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      justifyContent: !a && "space-around",
      padding: "11px",
      paddingTop: a && "20px",
      boxSizing: "border-box",
      position: "fixed",
      top: matches ? 90 : 10,
      right: matches ? 90 : 10,
      zIndex: 502,
      backgroundColor: "#EB5757",
    },
    line: {
      width: "28px",
      height: "2px",
      backgroundColor: "black",
      transition: "all ease 400ms",
    },
    before: {
      transform: "rotate(135deg)",
    },
    after: {
      transform: "rotate(-135deg)",
    },
    trans: {
      backgroundColor: "transparent",
      transition: "0ms",
    },
    bg: {
      width: "50px",
      height: "50px",
      background: "#EB5757",
      borderRadius: "50%",
      position: "fixed",
      right: matches ? 90 : 10,
      top: matches ? 90 : 10,
      transform: a && "scale(80)",
      transition: "all ease 600ms",
      zIndex: 500,
      display: matches && "none",
      opacity: 0.9,
    },
    menu: {
      width: "100%",
      transform: a ? "translateX(0)" : "translateX(-200%)",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 0,
      opacity: a ? 1 : 0,
      pointerEvents: a ? "visible" : "none",
      transition: "600ms",
      display: "flex",
      justifyContent: "center",
      zIndex: 501,
      fontFamily: "Sriracha, cursive",
      "& button": {
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontFamily: "Sriracha, cursive",
        width: !matches && "100vw",
      },
    },
    navMenu: {
      backgroundImage: matches && `url(${heart})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "60%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    list: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      marginRight: "40px",
    },
    item: {
      listStyleType: "none",
      fontSize: matches ? "1.5em" : "1.1em",
      color: "white",
      textTransform: "uppercase",
      marginTop: ".1rem",
      textDecoration: "none",
      "&:hover": {
        color: "#454D7D",
        transition: "all ease 400ms",
      },
    },
  });

  const classes = useStyles();
  return (
    <div>
      <button onClick={() => setA(!a)} className={classes.button}>
        <div className={`${classes.line} ${a && classes.before}`} />
        <div className={`${classes.line} ${a && classes.trans}`} />
        <div className={`${classes.line} ${a && classes.after}`} />
      </button>

      <div onClick={() => setA(!a)} className={classes.bg} />

      <div className={classes.menu}>
        <div className={classes.navMenu}>
          <ul className={classes.list}>
            {auth.isLoggedIn ? (
              <>
                <Notification />
                <NavLink className={classes.item} to="/">
                  Anasayfa
                </NavLink>
                <NavLink className={classes.item} to="/Hakkımızda">
                  Hakkımızda
                </NavLink>
                <NavLink className={classes.item} to="/Şiirler">
                  Şiirler
                </NavLink>
                <NavLink className={classes.item} to="/Anılar">
                  Anılar
                </NavLink>
                <NavLink className={classes.item} to="/Masallar">
                  Masallar
                </NavLink>
                <NavLink className={classes.item} to="/Galeri">
                  Galeri
                </NavLink>
                <NavLink className={classes.item} to="/Blog">
                  Blog
                </NavLink>
                <NavLink className={classes.item} to="/Admin">
                  Admin Paneli
                </NavLink>
                <NavLink
                  onClick={() => {
                    sessionStorage.removeItem("id");
                    sessionStorage.removeItem("name");
                    localStorage.removeItem("id");
                    localStorage.removeItem("name");
                    auth.logout();
                  }}
                  className={classes.item}
                  to="/"
                >
                  Çıkış
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className={classes.item} to="/">
                  Giriş
                </NavLink>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Deneme;
