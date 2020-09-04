import React, { useContext, Fragment, useState } from "react";
import { authContext } from "../../../WRAPPERS/Context/myContext";
import Parser from "react-html-parser";
import Button from "@material-ui/core/Button/Button";
import DeleteModal from "../../deleteModal/deleteModal";
import Snackbar from "../../snackbar/Snackbar";
import useHttpClient from "../../../hooks/useHttpClient";
import Spinner from "../../spinner/Spinner";
import Replies from "./replies";

const Comments = ({ comments, setcomments }) => {
  const auth = useContext(authContext);
  const { sendRequest, isLoading } = useHttpClient();
  const [openModal, setopenModal] = useState(false);
  const [showSnackbar, setshowSnackbar] = useState(false);
  const [message, setmessage] = useState({
    type: "",
    content: "",
  });

  const deleteHandler = async (cid) => {
    setopenModal(false);
    try {
      const res = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/blog/comments/${cid}`,
        "DELETE"
      );
      setshowSnackbar(true);
      const updatedData = comments.filter((comment) => comment._id !== cid);
      setcomments(updatedData);
      setmessage({
        type: res.message.type,
        content: res.message.content,
      });
    } catch (err) {}
  };

  return (
    <Fragment>
      {isLoading && <Spinner />}
      {comments.length > 0 &&
        comments.map((c) => (
          <Fragment key={c._id}>
            <Snackbar
              onClose={() => setshowSnackbar(false)}
              open={showSnackbar}
              message={message.content}
              alert={message.type}
            />
            {c.username === auth.name ? (
              <div className="delete-comment">
                <Button
                  onClick={() => setopenModal(true)}
                  variant="contained"
                  color="secondary"
                >
                  Yorumu Sil
                </Button>
              </div>
            ) : null}
            <div
              key={c._id}
              style={{
                // textAlign: c.username === auth.name ? "left" : "right",
              }}
              className={
                c.username === auth.name
                  ? "post-comment myBg"
                  : "post-comment yourBg"
              }
            >
              <div
                className="comment-infos"
                style={
                  c.username === auth.name
                    ? { left: "1rem" }
                    : { right: "1rem" }
                }
              >
                <div className="comment-publisher">{c.username}</div>
                <div className="comment-time">({c.date})</div>
              </div>
              <div className="comment-content">
                {Parser(c.content)}
                <Replies comment={c} />
              </div>
            </div>
            <DeleteModal
              element="Yorumu"
              elementId={c._id}
              deleteHandler={deleteHandler}
              open={openModal}
              handleClose={() => setopenModal(false)}
            />
          </Fragment>
        ))}
    </Fragment>
  );
};

export default Comments;
