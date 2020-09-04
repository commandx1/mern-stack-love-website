import React from "react";
import "./mainImages.css";
import serhat from "../../../../assets/serhat.png";
import ceren from "../../../../assets/ceren.jpg";

const MainImages = () => {
  return (
    <div className="images-container">
      <div className="card" data-aos="fade-left" data-aos-duration="500">
        <h3>Serhat</h3>
        <img src={serhat} alt="serhat" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
          reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Animi, eum!
        </p>
      </div>
      <div id="heart"></div>

      <div className="card" data-aos="fade-right" data-aos-duration="500">
        <h3>Ceren</h3>
        <img src={ceren} alt="ceren" />
        <p>29 Kasım'da dünyaya güneş gibi doğan, sarı bir yavru ceylan...</p>
      </div>
    </div>
  );
};

export default MainImages;
