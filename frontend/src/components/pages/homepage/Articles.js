import React, { useContext, useEffect, useState } from "react";
import {
  generalContext,
  authContext,
} from "../../../WRAPPERS/Context/myContext";
import useHttpClient from "../../../hooks/useHttpClient";
import { useStyles } from "./articlesMuiStyles";
import { NavLink } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import Heading from "./components/customHeadingComponent";

const Articles = () => {
  const { sendRequest, isLoading } = useHttpClient();
  const [threeMemories, setthreeMemories] = useState();
  const [poem, setpoem] = useState();
  const general = useContext(generalContext);
  const auth = useContext(authContext);

  useEffect(() => {
    const fetchMemories = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/memories/getfirstthree`
        );
        setthreeMemories(responseData.memories);
      } catch (err) {}
    };
    fetchMemories();
  }, [sendRequest]);

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
    <>
    <Heading title="SON PAYLAŞIMLAR"/>
    <div className={classes.root} data-aos="fade-up">
      <div className={classes.lasts}>
        <h3 style={{ color: "red", textTransform: "uppercase" }}>Son Anılar</h3>
        {!isLoading &&
          threeMemories &&
          threeMemories.map((memory, index) => (
            <div key={index}>
              {memory.title}
              {ReactHtmlParser(memory.content.substr(0, 200) + "...")}
              <div className={classes.date}>
                {memory.username} - {memory.update}
              </div>
              <hr></hr>
            </div>
          ))}
        {auth.isLoggedIn ? (
          <NavLink
            to="/Anılar"
            style={{ margin: "1rem auto .5rem" }}
            className="neon-button anilar"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Anılar
          </NavLink>
        ) : null}
      </div>
      {!isLoading && poem && (
        <div className={classes.lasts}>
          <h3 style={{ color: "red", textTransform: "uppercase" }}>Son Şiir</h3>
          <div style={{ fontFamily: "Dancing Script" }}>
            {ReactHtmlParser(poem.content)}
          </div>
          {auth.isLoggedIn ? (
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
          ) : null}
        </div>
      )}
    </div>
    </>
  );
};

export default Articles;
