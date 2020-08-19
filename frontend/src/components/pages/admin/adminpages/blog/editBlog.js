import React, { Fragment, useEffect, useState } from "react";
import Nav from "./editBlogNav";
import { Route, useRouteMatch } from "react-router-dom";
import FetchPostsAsCategory from "./fetchPostsAsCategory";
import useHttpClient from "../../../../../hooks/useHttpClient";
import { REACT_APP_BACKEND_URL, REACT_APP_ASSET_URL} from '../../../../../env_variables'
import './style.css'

const categories = [
  { title: "Uzay", value: "space" },
  { title: "Doğa", value: "nature" },
  { title: "Sağlıklı Yaşam", value: "health" },
  { title: "Gezilecek Yerler", value: "travel" },
  { title: "Teknoloji", value: "technology" },
  { title: "Spor", value: "sport" },
];

const EditBlog = () => {
  const route = useRouteMatch();
  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await sendRequest(
           REACT_APP_BACKEND_URL + "/blog/categories"
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
