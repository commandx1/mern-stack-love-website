import React, { useEffect, useState } from "react";
import useHttpClient from "../../../hooks/useHttpClient";
import FeaturedPost from "./FeaturedPosts";
import { Grid, Container } from "@material-ui/core";

const PostsAsCategory = ({ categoryId, route }) => {
  const { isLoading, sendRequest } = useHttpClient();
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/blog/category/${categoryId}`
        );
        setposts(res.posts);
        console.log(res);
      } catch (error) {}
    };
    fetchPosts();
  }, []);
  return (
    <Container>
      {!isLoading && posts.length === 0 ? (
        <p style={{textAlign:"center"}}>Bu kategoride yazılmış post bulunamadı 😢 </p>
      ) : (
        <Grid container spacing={4}>
          {posts.map((post) => (
            <FeaturedPost
              route={route.path}
              image={post.imageUrl}
              key={post._id}
              post={post}
            />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default PostsAsCategory;
