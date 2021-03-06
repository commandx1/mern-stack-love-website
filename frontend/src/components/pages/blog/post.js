import React, { useState, useContext, useEffect } from "react";
import { authContext } from "../../../WRAPPERS/Context/myContext";
import Container from "../../Container/container";
import Parser from "react-html-parser";
import Button from "@material-ui/core/Button/Button";
import Editor from "../../editor/Editor";
import useHttpClient from "../../../hooks/useHttpClient";
import Spinner from "../../spinner/Spinner";
import Comments from "./comments";

const Post = ({ post }) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const auth = useContext(authContext);
  const { sendRequest, isLoading } = useHttpClient();
  const [comments, setcomments] = useState([]);
  const [comment, setcomment] = useState("");
  const tarih =
    post.date === post.update
      ? `${post.date} tarihinde yayımlandı`
      : `${post.update} tarihinde güncellendi`;

  const addComment = (newComment) => {
    setcomments([...comments, newComment]);
  };
  const sendComment = async (post) => {
    try {
      const res = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/blog/comments",
        "POST",
        JSON.stringify({
          content: comment,
          kullanici: auth.userId,
          username: auth.name,
          post: post._id,
        }),
        { "Content-Type": "application/json" }
      );
      setcomment("");
      setShowCommentForm(false);
      addComment(res.comment);
    } catch (error) {}
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/notifications",
        "POST",
        JSON.stringify({
          userId: auth.userId,
          username: auth.name,
          redirect: `/Blog/postId/${post._id}/Başlık/${post.title}`,
          content: `${auth.name} blogdaki bir posta yorum yaptı.`,
        }),
        { "Content-Type": "application/json" }
      );
    } catch (err) {}
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/blog/comments/post/${post._id}`
        );
        setcomments(responseData.comments);
      } catch (err) {}
    };
    fetchComments();
  }, [post._id]);
  return (
    <Container>
      {isLoading && <Spinner />}
      <div className="selected-post-wrapper">
        <div className="selected-post-published">
          <div>
            {post.username} tarafından {tarih}
          </div>
        </div>
        {post.imageUrl ? (
          <div
            className="post-main_image"
            style={{
              backgroundImage: `url(${process.env.REACT_APP_ASSET_URL}/${post.imageUrl})`,
            }}
          />
        ) : null}
        <div className="selected-post-title">{post.title}</div>

        <div className="selected-post-content">{Parser(post.content)}</div>
        <Comments post={post} comments={comments} setcomments={setcomments} />
        <div style={{ margin: "1rem auto" }}>
          {showCommentForm ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendComment(post);
              }}
              className="comment-form"
            >
              <Editor
                data={comment}
                type="poem"
                onChange={(e, editor) => {
                  const data = editor.getData();
                  setcomment(data);
                }}
              />
              <Button type="submit" variant="contained" color="primary">
                Gönder
              </Button>
              <Button
                onClick={() => setShowCommentForm(false)}
                variant="contained"
                color="secondary"
              >
                Vazgeç
              </Button>
            </form>
          ) : (
            <Button
              color="primary"
              onClick={() => setShowCommentForm(true)}
              variant="contained"
            >
              <span style={{ padding: "0.1rem 1rem" }}>Yorum yap</span>
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Post;
