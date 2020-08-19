import React, { Fragment, useContext, useEffect } from "react";
import { generalContext } from "../../../WRAPPERS/Context/myContext";
import Container from "../../Container/container";
import video from "../../../assets/VID-20200627-WA0006.mp4";
import video2 from "../../../assets/VID-20190929-WA0056.mp4";
import useHttpClient from "../../../hooks/useHttpClient";
import Spinner from '../../spinner/Spinner'
import ReactHtmlParser from 'react-html-parser'
import "./about.css";
import { REACT_APP_BACKEND_URL} from '../../../env_variables'
 
const About = () => {
  const general = useContext(generalContext);
  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();
  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const responseData = await sendRequest(
          `${REACT_APP_BACKEND_URL}/about/serhat`
        );
        general.functions.about.fetchAboutMe(responseData.abouts);
      } catch (err) {}
    };
    fetchPoems();
  }, [sendRequest]);
  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const responseData = await sendRequest(
          `${REACT_APP_BACKEND_URL}/about/ceren`
        );
        general.functions.about.fetchAboutHer(responseData.abouts);
      } catch (err) {}
    };
    fetchPoems();
  }, [sendRequest]);
  return (
    !isLoading && general.globalState.aboutMe && general.globalState.aboutHer &&
    <Fragment>
      {isLoading && <Spinner />}
      <header id="myHeader">
        <div className="overlay"></div>
        <video src={video} autoPlay muted loop />
      </header>
      <Container>
          <h3 className="about-h3">SERHAT BELEN</h3>
          <div className="about-content">
            {general.globalState.aboutMe.map((a) => (
              <div key={a._id} className="abouts">
                <h4>{a.title}</h4>
                {ReactHtmlParser(a.content)}
              </div>
            ))}
          </div>
      </Container>
      <header id="myHeader2">
        <div className="overlay"></div>
        <video src={video2} autoPlay muted loop />
      </header>
      <Container>
          <h3 className="about-h3">CEREN DİLMAÇ</h3>
          <div className="about-content">
            {general.globalState.aboutHer.map((a) => (
              <div key={a._id} className="abouts">
                <h4>{a.title}</h4>
                {ReactHtmlParser(a.content)}
              </div>
            ))}
          </div>
      </Container>
    </Fragment>
  );
};

export default About;
