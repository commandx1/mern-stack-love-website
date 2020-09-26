import React, { useEffect, useState } from "react";
import useHttpClient from "../../../../hooks/useHttpClient";
import htmlParser from "react-html-parser";
import { NavLink } from "react-router-dom";
import IsometricCard from "../../../isometricCard/isometricCard";
import BlogHeading from "../components/blogHeading";

const Posts = () => {
  const { sendRequest, isLoading } = useHttpClient();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMemories = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/blog/first-three`
        );
        setPosts(responseData.posts);
      } catch (err) {}
    };
    fetchMemories();
  }, []);

  return (
    <>
      <BlogHeading />
      <div className="isometric-container">
        {!isLoading &&
          posts.length > 0 &&
          posts.map((post) => (
            <IsometricCard
              imageUrl={post.imageUrl}
              title={post.title}
              content={htmlParser(post.content.substring(0, 200) + "...")}
            />
          ))}
      </div>
      <div style={{ width: "100%", textAlign: "center", marginTop: "2rem" }}>
        <NavLink className="neon-button" to="/Blog">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Blog sayfasına ilerle
        </NavLink>
      </div>
    </>
  );
};

export default Posts;
