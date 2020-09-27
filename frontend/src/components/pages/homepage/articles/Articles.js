import React, { useContext, useEffect, useState } from "react";
import {
  generalContext,
  authContext,
} from "../../../../WRAPPERS/Context/myContext";
import useHttpClient from "../../../../hooks/useHttpClient";
import { useStyles } from "./articlesMuiStyles";
import { NavLink } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import Heading from "../components/customHeadingComponent";
import LastMemories from "./lastMemories";
import LastPoem from './lastPoem'

const Articles = () => {
  const { sendRequest, isLoading } = useHttpClient();
  const [poem, setpoem] = useState();
  const general = useContext(generalContext);
  const auth = useContext(authContext);

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
      <Heading title="SON YAZILANLAR" />
      <div className={classes.root} data-aos="fade-up">
        <LastMemories />
        <LastPoem />
      </div>
    </>
  );
};

export default Articles;
