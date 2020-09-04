import React from "react";
import useMedia from "@material-ui/core/useMediaQuery/useMediaQuery"


const Thumbnail = (props) => {
  const match = useMedia('(max-width:800px')
  const styles = {
    height: '100%',
    // width: match ? "25%" : "12.5%",
    display: "flex",
    position:"relative",
  };
  const imgStyle = {
    maxWidth:"100%",
    margin: "0 auto",
    maxHeight: "100%",
    opacity: props.active ? 1 : 0.1,
    transition: "800ms"
  }
  return (
    <div onClick={() => props.activeImageChange(props.imageId)} style={styles} >
      <img style={imgStyle} src={`${process.env.REACT_APP_ASSET_URL}/${props.imageSrc}`} alt="name" />
    </div>
  );
};

export default Thumbnail;
