import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import makeStyles from "@material-ui/styles/makeStyles";
import ActiveThumbnail from "./ActiveThumbnail";
import ThumnailGrid from "./thumbnailGrid";
import { pressArrow } from "./pressArrow";

const Gallery = (props) => {
  const match = useMediaQuery("(max-width:769px)");
  const [myGallery, setMygallery] = useState([]);
  const [numOfLoadedImages, setnumOfLoadedImages] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    thumbnailGallery: {
      height: "90vh",
      width: "100%",
      display: "flex",
    },
    thumbnail: {
      // flex: 1,
      height: "100%",
      width: "100%",
      backgroundColor: "khaki",
      borderRight: "1px solid",
      order: match && 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  });

  const classes = useStyles();

  const [activeText, setActiveText] = useState();
  const [source, setSource] = useState({
    imageUrl: "",
    _id: "",
  });

  //aşagı yukarı ok işaretleri scrollu hareket ettirmesin diye;
  window.addEventListener(
    "keydown",
    function (e) {
      // space and arrow keys
      if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
      }
    },
    false
  );

  window.onkeydown =
    !isLoading &&
    props.totalPosts > 0 &&
    function (e) {
      pressArrow(
        e,
        myGallery,
        numOfLoadedImages,
        setMygallery,
        setSource,
        setActiveText,
        match
      );
    };

  const activeImageChange = (id) => {
    let image;
    myGallery.map((i) => {
      if (i._id === id) image = i;
    });
    const index = myGallery.indexOf(image);
    setActiveText(myGallery[index].content);
    setSource({
      imageUrl: myGallery[index].imageUrl,
      _id: myGallery[index]._id,
    });
    const updatedState = myGallery.map((arr) =>
      arr._id === id ? { ...arr, active: true } : { ...arr, active: false }
    );
    setMygallery(updatedState);
  };
  const updateNumOfLoadedImages = (data) => setnumOfLoadedImages(data);
  const updateSource = (url, id) =>
    setSource({
      imageUrl: url,
      _id: id,
    });
  const updateTotalPosts = (data) => props.settotalPosts(data);
  const updateActiveText = (data) => setActiveText(data);
  const updateMyGallery = (data) => setMygallery(data);
  const updateLoading = (data) => setisLoading(data);

  const deleteImage = (id) => {
    let image;
    myGallery.map((i) => {
      if (i._id === id) image = i;
    });
    const index = myGallery.indexOf(image);
    let updatedGallery = myGallery.filter((image) => image._id !== id);
    // updatedGallery = myGallery.map((image) =>
    //   myGallery.indexOf(image) === index
    //     ? { ...image, active: true }
    //     : { ...image, active: false }
    // );
    setMygallery(updatedGallery);
    // props.setTotalPosts((prev) => prev - 1);
  };

  return (
    <div data-aos="fade-up" style={{ width: "100%", height: "100%" }}>
      <div className={classes.root}>
        <div className={classes.thumbnailGallery}>
          <div className={classes.thumbnail}>
            <ActiveThumbnail
              deleteImage={deleteImage}
              activeId={source._id}
              activeThumb={source.imageUrl}
            />
            <ThumnailGrid
              activeImageChange={activeImageChange}
              images={myGallery}
              currentPage={props.currentPage}
              totalPosts={props.totalPosts}
              updateTotalPosts={updateTotalPosts}
              updateNumOfLoadedImages={updateNumOfLoadedImages}
              updateSource={updateSource}
              updateActiveText={updateActiveText}
              updateMyGallery={updateMyGallery}
              updateLoading={updateLoading}
            />
          </div>
          {/* 
              <div
                className={classes.thumbnail}
                style={{
                  order: match && 1,
                  padding: "3rem",
                  overflowY: match ? "scroll" : "hidden",
                }}
              >
                {activeText}
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
