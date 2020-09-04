import React, { Fragment, useEffect, useState } from "react";
import Nav from "./editBlogNav";
import { Route, useRouteMatch } from "react-router-dom";
import FetchPostsAsCategory from "./fetchPostsAsCategory";
import useHttpClient from "../../../../../hooks/useHttpClient";
import './style.css'

const EditBlog = () => {
  const route = useRouteMatch();
  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await sendRequest(
           process.env.REACT_APP_BACKEND_URL + "/blog/categories"
        );
        setCategories(res.categories);
      } catch (error) {}
    };
    fetchCategories();
  }, []);

  return (
    !isLoading &&
    categories.length > 0 && (
      <Fragment>
        <Nav route={route} categories={categories} />

        {categories.map((c) => (
          <Route key={c._id} path={`${route.path}/${c.label}`}>
            <h3 className="route-edit_blog-h3">{c.label}</h3>
            <FetchPostsAsCategory title={c.label} categoryId={c._id} />
          </Route>
        ))}
      </Fragment>
    )
  );
};

export default EditBlog;
