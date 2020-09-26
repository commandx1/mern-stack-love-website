import React from "react";
import "./isometricCard.css";

const IsometricCard = (props) => {
  return (
      <div className="isometric-card">
        <div className="isometric-imgBx">
          {props.imageUrl ? <img src={`${process.env.REACT_APP_ASSET_URL}/${props.imageUrl}`} alt={props.title} /> : null}
          <h3>{props.title}</h3>
        </div>
        <div className="isometric-content">
          <p>{props.content}</p>
        </div>
      </div>
  );
};

export default IsometricCard;
