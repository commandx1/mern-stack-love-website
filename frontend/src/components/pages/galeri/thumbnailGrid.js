import React, { useEffect } from "react";
import Thumbnail from "./thumbnail";
import useHttpClient from "../../../hooks/useHttpClient";

const ThumbnailGrid = (props) => {
  const style = {
    height: "25%",
    width: "100%",
    background: "#844",
    display: "flex",
    flexWrap: "wrap",
    overflow:"auto",
    flexDirection:"column"
  };

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  isLoading ? props.updateLoading(true) : props.updateLoading(false)
  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/upload/${props.currentPage}`
        );
        props.updateNumOfLoadedImages(responseData.images.length);
        props.updateSource(responseData.images[0].imageUrl,responseData.images[0]._id);
        props.updateTotalPosts(responseData.total);
        props.updateActiveText(responseData.images[0].content);
        const updatedState = responseData.images.map((a) =>
          responseData.images.indexOf(a) === 0
            ? { ...a, active: true }
            : { ...a, active: false }
        );
        props.updateMyGallery(updatedState);
      } catch (err) {}
    };
    fetchPoems();
  }, [props.currentPage, props.images.length]);


  return (
    <div style={style}>
      {isLoading ? <div className="loader-wrapper"><div className="loader"></div></div> :
      props.images.map((image) => (
        <Thumbnail
          active={image.active}
          key={image._id}
          activeImageChange={props.activeImageChange}
          imageId={image._id}
          imageSrc={image.imageUrl}
        />
      ))}
    </div>
  );
};

export default ThumbnailGrid;
