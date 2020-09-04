import React, { useContext, useState, Fragment } from "react";
import ReactHtmlParser from "react-html-parser";
import { generalContext, authContext } from "../../WRAPPERS/Context/myContext";
import { Route, NavLink, useHistory, useRouteMatch } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import useHttpClient from "../../hooks/useHttpClient";
import Spinner from "../spinner/Spinner";
import Modal from "@material-ui/core/Modal/Modal";
import DeleteModal from "../deleteModal/deleteModal";

const MemoryMain = (props) => {
  const route = useRouteMatch();
  const auth = useContext(authContext);
  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();
  const general = useContext(generalContext);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpen = () => {
    setOpenDeleteModal(true);
  };

  const handleClose = () => {
    setOpenDeleteModal(false);
  };

  let memoryFooter;
  if (props.memory.date === props.memory.update)
    memoryFooter = (
      <div className="memory-date">
        {props.memory.date} tarihinde yayımlandı {props.memory.username}
      </div>
    );
  else
    memoryFooter = (
      <div className="memory-date update-day">
        {props.memory.update} tarihinde güncellendi {props.memory.username}
      </div>
    );

  const deleteMemory = async (mid) => {
    handleClose();
    try {
      const res = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/memories/${mid}`, "DELETE");
      props.setShowSnackbar(true);
      props.setmessage({
        type: res.message.type,
        content: res.message.content,
      });
      general.functions.memory.removeMemory(mid);
    } catch (err) {}
  };

  return (
    <Fragment>
      {isLoading && <Spinner />}
      <DeleteModal
        element={`${props.memory.title} isimli anıyı`}
        elementId={props.memory._id}
        open={openDeleteModal}
        handleClose={handleClose}
        deleteHandler={deleteMemory}
      />
      <div key={props.memory._id} className="memory-main">
        {auth.name === props.memory.username ? (
          <>
            <div id="delete-memory" onClick={handleOpen}>
              <DeleteIcon />
            </div>

            <NavLink to={`${route.path}/${props.memory.title}`}>
              <button onClick={() => props.setopen2(true)}>Güncelle</button>
            </NavLink>
          </>
        ) : null}
        <div className="memory-header">{props.memory.title}</div>
        <div className="memory-content">
          {ReactHtmlParser(props.memory.content)}
        </div>
        {props.memory.imageUrl ? (
          <img
            src={`${process.env.REACT_APP_ASSET_URL}/${props.memory.imageUrl}`}
            style={{ maxHeight: "40vh", maxWidth: "100%", margin: "1rem auto" }}
          />
        ) : null}

        {memoryFooter}
      </div>
    </Fragment>
  );
};

export default MemoryMain;
