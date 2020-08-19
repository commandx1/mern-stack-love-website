import React, { Fragment, useState } from "react";
import Pagination from "../../sayfalama/Pagination";
import Gallery from "./Gallery";
import Container from "../../Container/container";
import PageTitle from "../../Container/PageTitle";

const MainGallery = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPosts, settotalPosts] = useState(null);

  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };
  return (
    <Fragment>
      <PageTitle>Galerimizz</PageTitle>
      <Container>
        <div id="gallery-wrapper">
          <Gallery
            currentPage={currentPage}
            totalPosts={totalPosts}
            settotalPosts={settotalPosts}
          />

          <Pagination
            postsPerPage={16}
            totalPosts={totalPosts}
            paginate={paginate}
          />
        </div>
      </Container>
    </Fragment>
  );
};

export default MainGallery;
