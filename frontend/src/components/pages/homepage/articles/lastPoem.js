import React, { useEffect, useState } from "react";
import useHttpClient from "../../../../hooks/useHttpClient";
import { useStyles } from "./articlesMuiStyles";
import { NavLink } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const LastPoem = () => {
  const { sendRequest, isLoading } = useHttpClient();
  const [poem, setpoem] = useState();

  useEffect(() => {
    const fetchFirstPoem = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/poems/getfirst`
        );
        setpoem(responseData.poem[0]);
      } catch (err) {}
    };
    fetchFirstPoem();
  }, [sendRequest]);

  const classes = useStyles();

  return (
    <div className={classes.lasts}>
      <h3 style={{ color: "red", textTransform: "uppercase" }}>Son Şiir</h3>
      {!isLoading && poem && (
        <div style={{ fontFamily: "Dancing Script" }}>
          {ReactHtmlParser(poem.content)}
        </div>
      )}
      <NavLink
        to="/Şiirler"
        style={{ margin: "1rem auto .5rem" }}
        className="neon-button anilar"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Şiirler
      </NavLink>
    </div>
  );
};

export default LastPoem;
