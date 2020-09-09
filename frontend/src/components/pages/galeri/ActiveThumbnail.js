import React, { Fragment, useState } from "react";
import "./ActiveThumbnail.css";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import useHttpClient from "../../../hooks/useHttpClient";
import DeleteModal from "../../deleteModal/deleteModal";
import Spinner from "../../spinner/Spinner";
import Snackbar from "../../snackbar/Snackbar";

const ActiveThumbnail = (props) => {
  const { isLoading, open, error, sendRequest, clearError } = useHttpClient();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openSnackbar, setopenSnackbar] = useState(false);
  const [message, setmessage] = useState({
    type: "",
    content: "",
  });

  const handleOpen = () => {
    setOpenDeleteModal(true);
  };

  const handleClose = () => {
    setOpenDeleteModal(false);
  };

  const deleteHandler = async (id) => {
    handleClose();
    try {
      const res = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/upload/${id}`,
        "DELETE"
      );
      props.deleteImage(id);
      setopenSnackbar(true)
      setmessage({
        type: res.message.type,
        content: res.message.content,
      });
    } catch (err) {}
  };
  
  return (
    <Fragment>
      <Snackbar
        open={openSnackbar}
        onClose={() => setopenSnackbar(false)}
        message={message.content}
        alert={message.type}
      />
      {isLoading && <Spinner />}
      <DeleteModal
        element="Fotoğrafı"
        elementId={props.activeId}
        open={openDeleteModal}
        handleClose={handleClose}
        handleOpen={handleOpen}
        deleteHandler={deleteHandler}
      />
      <div className="active-thumbail" style={{backgroundImage:`url(${process.env.REACT_APP_ASSET_URL}/${props.activeThumb})`}}>
        <DeleteIcon color="secondary" onClick={() => handleOpen()} />
        {/* <img src={`${process.env.REACT_APP_ASSET_URL}/${props.activeThumb}`} alt="name" /> */}
      </div>
    </Fragment>
  );
};

export default ActiveThumbnail;
