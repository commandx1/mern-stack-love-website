import React from "react";

const Gallery = (props) => {
  return (
    <div className="boxbox">
      {!props.isLoading &&
        props.myGallery.length > 0 &&
        props.myGallery.map((item, index) => (
          <span
            style={{
              transform: `rotateY(calc(${
                index + 1
              } * 45deg)) translateZ(400px)`,
              backgroundImage: `url(${process.env.REACT_APP_ASSET_URL}/${item.imageUrl})`,
            }}
          />
        ))}
    </div>
  );
};

export default Gallery;
