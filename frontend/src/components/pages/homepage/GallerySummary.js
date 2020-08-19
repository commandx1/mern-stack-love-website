import React, { useState, useEffect, useContext } from "react";
import { authContext } from "../../../WRAPPERS/Context/myContext";
import makeStyles from "@material-ui/styles/makeStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useHttpClient from "../../../hooks/useHttpClient";
import { NavLink } from "react-router-dom";
import Backdrop from "../../backdrop/backdrop";
import {REACT_APP_BACKEND_URL, REACT_APP_ASSET_URL} from "../../../env_variables"

const GallerySummary = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(authContext);
  const [openImage, setopenImage] = useState(false);
  const [imgSrc, setimgSrc] = useState("");
  const [images, setImages] = useState([]);
  const match = useMediaQuery("(max-width:769px)");
  const match2 = useMediaQuery("(max-width:650px)");

  let BigImageWidth;
  if (match2) {
    BigImageWidth = "75%";
  } else if (match) {
    BigImageWidth = "31%";
  } else BigImageWidth = "27%";

  let imageWidth;
  if (match2) {
    imageWidth = "75px";
  } else if (match) {
    imageWidth = "150px";
  } else imageWidth = "200px";
  const useStyles = makeStyles({
    root: {
      width: "100%",
      backgroundPosition: "center",
      marginTop: "5%",
      padding: "3rem",
      display: "flex",
      flexDirection: "column",
    },
    images: {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    },
    image: {
      margin: match ? "3%" : "1%",
      width: imageWidth,
      border: "1px solid wheat",
      borderRadius: "3rem",
      boxShadow: "2px 3px 1px rgba(255, 255, 255, .5)",
      marginBottom: match && "2rem",
      transition: "400ms",
      cursor: "pointer",
      "&:hover": {
        opacity: "0.7",
        transform: "scale(1.1)",
      },
    },
    link: {
      fontSize: match ? "1.1rem" : "1.6rem",
      fontWeight: 700,
      textDecoration: "none",
      borderRadius: "3rem",
      margin: "3% auto 0",
      padding: "1rem",
      color: "white",
      fontFamily: "Arial",
      background: " #FF0099" /* fallback for old browsers */,
      background:
        "-webkit-linear-gradient(to right, #493240, #FF0099)" /* Chrome 10-25, Safari 5.1-6 */,
      background:
        "linear-gradient(to right, #493240, #FF0099)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      transition: ".5s",
      "&:hover": {
        background: "#1f4037",
        background:
          "-webkit-linear-gradient(to right, #99f2c8, #1f4037)" /* Chrome 10-25, Safari 5.1-6 */,
        background:
          "linear-gradient(to right, #99f2c8, #1f4037)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        color: "black",
      },
    },
    bigImage: {
      position: "fixed",
      display: "flex",
      alignItems: "center",
      width: " 100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 101,
      top: 0,
      left: 0,
      justifyContent: "center",
    },
    img: {
      zIndex: 102,
      pointerEvents: "auto",
      borderRadius: "2rem",
      // width: BigImageWidth,
      maxWidth: match ? "80%" : "90%",
      maxHeight: match ? "80%" : "90%",
      transform: openImage ? "translateX(0)" : "translateX(-400%)",
      transition: "500ms",
    },
  });

  const classes = useStyles();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await sendRequest(REACT_APP_BACKEND_URL + "/upload");
        setImages(res.images);
      } catch (error) {}
    };
    fetchImages();
  }, []);

  return (
    <div>
      {openImage && (
        <Backdrop backdropClickHandler={() => setopenImage(false)} />
      )}
      <div className={classes.bigImage}>
        <img className={classes.img} src={imgSrc} alt="" />
      </div>

      {!isLoading && images.length > 0 && (
        <div className={classes.root}>
          <div className={classes.images}>
            {images.map((image, index) => (
              <div
                key={image._id}
                data-aos={
                  index === 0
                    ? "fade-left"
                    : index === 1
                    ? "zoom"
                    : "fade-right"
                }
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <img
                  onClick={() => {
                    setopenImage(true);
                    setimgSrc(`${REACT_APP_ASSET_URL}/${image.imageUrl}`);
                  }}
                  className={classes.image}
                  src={`${REACT_APP_ASSET_URL}/${image.imageUrl}`}
                  alt="x"
                />
              </div>
            ))}
          </div>
          {auth.isLoggedIn ? (
            <NavLink to="/Galeri" className={classes.link}>
              Galeriye gitmek için tıklayın
            </NavLink>
          ) : (
            <NavLink to="/Login" className={classes.link}>
              Galeriyi görmek için giriş yapmalısınız
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default GallerySummary;
