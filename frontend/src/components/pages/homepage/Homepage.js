import React, { Fragment, useState } from "react";
import Slider from "./Slider/Slider";
import MainImages from "./images/MainImages";
import StartingDate from "./StartingDate";
import GallerySummary from "./GallerySummary";
import Articles from "./Articles";
import TelltalesInfo from "./masal/telltasleInfo";
import Posts from "./posts/posts";
import IsometricCard from "../../isometricCard/isometricCard";

const Homepage = () => {
  return (
    <Fragment>
      <Slider />
      <MainImages />
      <StartingDate />
      <GallerySummary />
      <Articles />
      <TelltalesInfo />
      <Posts />
    </Fragment>
  );
};

export default Homepage;
