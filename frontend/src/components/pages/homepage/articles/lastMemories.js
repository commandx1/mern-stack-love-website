import React, { useEffect, useState } from "react";
import useHttpClient from "../../../../hooks/useHttpClient";
import { useStyles } from "./articlesMuiStyles";
import { NavLink } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const LastMemories = () => {
  const { sendRequest, isLoading } = useHttpClient();
  const [threeMemories, setthreeMemories] = useState();

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

  const classes = useStyles();

  return (
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
    </div>
  );
};

export default LastMemories;
