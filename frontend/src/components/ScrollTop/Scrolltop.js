import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import BackToTop from "react-back-to-top-button";
import "./scrolltop.css"

const Scrolltop = () => (
  <BackToTop showOnScrollUp showAt={100} speed={1500} easing="easeInOutQuint">
    <div className="scroll-top-div">
      <ArrowUpwardIcon />
    </div>
  </BackToTop>
);

export default Scrolltop;
