import React, { useContext, useEffect, useState } from "react";
import PageTitle from "../../Container/PageTitle";
import image from "../../../assets/deneme2.png";
import { authContext } from "../../../WRAPPERS/Context/myContext";
import useHttpClient from "../../../hooks/useHttpClient";
import "./blogpage.css";
import Grid from "@material-ui/core/Grid";
import Container from "../../Container/container";
import BlogNav from "./nav/BlogNav";
import MainFeaturedPost from "./nav/MainFeaturedPost";
import FeaturedPost from "./FeaturedPosts";
import { Route, useRouteMatch } from "react-router-dom";
import Post from './post'
import { REACT_APP_BACKEND_URL, REACT_APP_ASSET_URL} from '../../../env_variables'
import PostsAsCategory from "./postsAsCategory";

const BlogPage = () => {
  const { isLoading, sendRequest } = useHttpClient();
  const [categories, setCategories] = useState([]);
  const auth = useContext(authContext);
  const route = useRouteMatch();
  const mainFeaturedPost = {
    title: "İzmir'in Ülkemizdeki En Yaşanılası Şehir Olduğunun 24 Kanıtı",
    description:
      "Herkesin aklında gerçekleştirmek için yanıp tutuştuğu bir hayal vardır: Tası tarağı toplayıp İzmir'e yerleşmek. Kimileri başarır bunu, kimileri ise asla imkan bulamaz. Bu noktada en şanslı olanlar, halihazırda İzmir'de yaşayan kişilerdir çünkü onlar bilir ki, İzmir'i harika bir şehir haline getiren onlarca özelliği var.",
    image:
      "https://ipektatil.com/wp-content/uploads/2017/12/5a1ec2540f25440f288d63a5.jpg",
    imgText: "İzmir gece resmi",
    linkText: "Devamını oku…",
  };

  const [featuredPosts, setfeaturedPosts] = useState([]);

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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await sendRequest(REACT_APP_BACKEND_URL + "/blog");
        setfeaturedPosts(res.posts);
      } catch (error) {}
    };
    fetchCategories();
  }, []);

  return (
    !isLoading &&
    categories.length > 0 &&
    featuredPosts.length > 0 && (
      <div>
        <PageTitle>Blog</PageTitle>
        <BlogNav isLoding={isLoading} categories={categories} route={route} />
        <Route exact path="/Blog">
          <MainFeaturedPost post={mainFeaturedPost} />
          <Container>
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost
                  route={route.path}
                  image={post.imageUrl}
                  key={post._id}
                  post={post}
                />
              ))}
            </Grid>
          </Container>
        </Route>
        {categories.map((c) => (
          <Route key={c._id} path={`${route.path}/kategori/${c.label}`}>
            <PostsAsCategory route={route} categoryId={c._id}/>
          </Route>
        ))}
        {featuredPosts.map((post) => (
          <Route key={post._id} path={`${route.path}/postId/${post._id}/Başlık/${post.title}`}>
            <Post post={post}/>
          </Route>
        ))}
      </div>
    )
  );
};

export default BlogPage;
