import React from "react";
import "./mainImages.css";
import serhat from "../../../../assets/serhat.png";
import ceren from "../../../../assets/ceren.jpg";
import ImageCard from "./imageCard";

const myArr = [
  {
    id: 1,
    order: 1,
    name: "Serhat",
    imageUrl: serhat,
    animation: "fade-left",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eum!",
  },
  {
    id: 2,
    order: 3,
    name: "Ceren",
    imageUrl: ceren,
    animation: "fade-right",
    content: "29 Kasım'da dünyaya güneş gibi doğan, sarı bir yavru ceylan...",
  },
];


const MainImages = () => {
  return (
    <div className="images-container">
      <div id="heart" />
      {myArr.map((user) => (
        <ImageCard
          style={{ order: user.order }}
          name={user.name}
          imageUrl={user.imageUrl}
          animation={user.animation}
          content={user.content}
        />
      ))}
    </div>
  );
};

export default MainImages;
