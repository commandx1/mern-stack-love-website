import React from "react";

const ImageCard = (props) => {
  return (
    <div style={props.style} className="card" data-aos={props.animation} data-aos-duration="500">
      <h3>{props.name}</h3>
      <img src={props.imageUrl} alt={props.name} />
      <p>{props.content}</p>
    </div>
  );
};

export default ImageCard;
