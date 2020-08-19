import React, { useState, useContext, useEffect, Fragment } from "react";
import { authContext } from "../../../WRAPPERS/Context/myContext";
import {REACT_APP_ASSET_URL, REACT_APP_BACKEND_URL} from "../../../env_variables";
import Snackbar from "../../snackbar/Snackbar";
import Parser from "react-html-parser";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Button from "@material-ui/core/Button/Button";
import Editor from "../../editor/Editor";
import useHttpClient from "../../../hooks/useHttpClient";
import Spinner from "../../spinner/Spinner";
import DeleteModal from "../../deleteModal/deleteModal";
import DeleteIcon from "@material-ui/icons/DeleteForeverOutlined";

const Replies = (props) => {
  const auth = useContext(authContext);
  const { sendRequest, isLoading } = useHttpClient();
  const [replies, setreplies] = useState([]);
  const [reply, setreply] = useState("");
  const [openModal, setopenModal] = useState(false);
  const [showReplyForm, setshowReplyForm] = useState(false);
  const [showSnackbar, setshowSnackbar] = useState(false);
  const [message, setmessage] = useState({
    type: "",
    content: "",
  });

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const responseData = await sendRequest(
          `${REACT_APP_BACKEND_URL}/blog/replies/comment/${props.comment._id}`
        );
        setreplies(responseData.replies);
      } catch (err) {}
    };
    fetchComments();
  }, [props.comment._id]);

  function addReply(newReply) {
    setreplies([...replies, newReply]);
  }

  const sendReply = async () => {
    try {
      const res = await sendRequest(
        "${REACT_APP_BACKEND_URL}/blog/replies",
        "POST",
        JSON.stringify({
          content: reply,
          kullanici: auth.userId,
          username: auth.name,
          comment: props.comment._id,
        }),
        { "Content-Type": "application/json" }
      );
      setreply("");
      setshowReplyForm(false);
      addReply(res.reply);
    } catch (error) {}
  };

  const deleteHandler = async (rid) => {
    console.log(rid)
    setopenModal(false);
    try {
      const res = await sendRequest(
        `${REACT_APP_BACKEND_URL}/blog/replies/${rid}`,
        "DELETE"
      );
      setshowSnackbar(true);
      const updatedData = replies.filter((reply) => reply._id !== rid);
      setreplies(updatedData);
      setmessage({
        type: res.message.type,
        content: res.message.content,
      });
    } catch (err) {}
  };

  return (
    <Fragment>
      <Snackbar
        onClose={() => setshowSnackbar(false)}
        open={showSnackbar}
        message={message.content}
        alert={message.type}
      />
      {isLoading && <Spinner />}
      {!isLoading &&
        replies.length > 0 &&
        replies.map((reply) => (
          <div
            className={
              auth.name === reply.username ? "reply-myBg" : "reply-yourBg"
            }
            key={reply._id}
          >
            <DeleteModal
              element="Cevabı"
              elementId={reply._id}
              deleteHandler={deleteHandler}
              open={openModal}
              handleClose={() => setopenModal(false)}
            />
            <div className="reply" >
              {auth.name === reply.username ? (
                <IconButton
                  onClick={() => setopenModal(true)}
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <DeleteIcon />
                </IconButton>
              ) : null}

              {reply.username + ` (${reply.date}) ` + ": "}
              <div style={{ marginLeft: ".5rem" }}>{Parser(reply.content)}</div>
            </div>
          </div>
        ))}
      {showReplyForm ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendReply();
          }}
          className="comment-form"
        >
          <Editor
            data={reply}
            type="poem"
            onChange={(e, editor) => {
              const data = editor.getData();
              setreply(data);
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Gönder
          </Button>
          <Button
            onClick={() => setshowReplyForm(false)}
            variant="contained"
            color="secondary"
          >
            Vazgeç
          </Button>
        </form>
      ) : (
        <Button
          style={{ marginTop: ".5rem" }}
          color="primary"
          onClick={() => setshowReplyForm(true)}
          variant="contained"
        >
          <span style={{ padding: "0.1rem 1rem" }}>Cevapla</span>
        </Button>
      )}
    </Fragment>
  );
};

export default Replies;
