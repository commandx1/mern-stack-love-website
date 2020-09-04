import React, { useContext, useEffect, useState } from "react";
import { generalContext, authContext } from "../../../WRAPPERS/Context/myContext"
import useHttpClient from '../../../hooks/useHttpClient'
import {useStyles} from './articlesMuiStyles'
import { NavLink } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ReactHtmlParser from "react-html-parser"

const Articles = () => {
  const {sendRequest, isLoading} = useHttpClient()
  const [threeMemories, setthreeMemories] = useState()
  const [poem, setpoem] = useState()
  const general = useContext(generalContext);
  const auth = useContext(authContext);
 
  useEffect(() => {
    const fetchMemories = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/memories/getfirstthree`,
        );
        setthreeMemories(responseData.memories)
      } catch (err) {}
    };
    fetchMemories();
  }, [sendRequest]);

  useEffect(() => {
    const fetchFirstPoem = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/poems/getfirst`,
        );
        setpoem(responseData.poem[0])
      } catch (err) {}
    };
    fetchFirstPoem();
  }, [sendRequest]);

  const classes = useStyles();

  return (
    <div className={classes.root} data-aos="fade-up">
      <div className={classes.lasts} >
        <h3 style={{ color: "red", textTransform: "uppercase" }}>Son Anılar</h3>
        {!isLoading && threeMemories && threeMemories.map((memory, index) => (
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
          <NavLink to="/Anılar">
            <button className={classes.links}>
              <ChevronLeftIcon />
              Anılar
              <ChevronRightIcon />
            </button>
          </NavLink>
        ) : null}
      </div>
      {!isLoading && poem &&
      <div className={classes.lasts}>
        <h3 style={{ color: "red", textTransform: "uppercase" }}>Son Şiir</h3>
          <div style={{ paddingBottom: "15px" }}>
            {ReactHtmlParser(poem.content)}
          </div>
        {auth.isLoggedIn ? (
          <NavLink to="/Şiirler">
            <button className={classes.links}>
              <ChevronLeftIcon />
              Şiirler
              <ChevronRightIcon />
            </button>
          </NavLink>
        ) : null}
      </div>}
    </div>
  );
};

export default Articles;
