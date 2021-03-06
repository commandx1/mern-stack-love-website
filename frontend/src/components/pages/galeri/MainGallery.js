import React, { Fragment, useState, useEffect } from "react";
import Pagination from "../../sayfalama/Pagination";
import useHttpClient from "../../../hooks/useHttpClient";
import PageTitle from "../../Container/PageTitle";
import "./deneme.css";
import Gallery from "./Gallery";

const MainGallery = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPosts, settotalPosts] = useState(null);
  const [myGallery, setmyGallery] = useState([]);

  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  const { isLoading, error, sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/upload/${currentPage}`
        );
        settotalPosts(responseData.total);
        const updatedState = responseData.images.map((a) =>
          responseData.images.indexOf(a) === 0
            ? { ...a, active: true }
            : { ...a, active: false }
        );
        setmyGallery(updatedState);
      } catch (err) {}
    };
    fetchPoems();
  }, [currentPage]);

  return (
    <Fragment>
      <PageTitle>Galerimizz</PageTitle>
      <div id="gallery-wrapper">
        <Gallery myGallery={myGallery} isLoading={isLoading} />
        <Pagination
          style={{ position: "absolute", top: "80%" }}
          postsPerPage={8}
          totalPosts={totalPosts}
          paginate={paginate}
        />
      </div>
    </Fragment>
  );
};

export default MainGallery;
