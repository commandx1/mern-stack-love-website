import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, useMediaQuery } from "@material-ui/core";
import "./deleteModal.css";

export default function DeleteModal({
  open,
  handleClose,
  deleteHandler,
  elementId,
  element,
}) {
  const match = useMediaQuery("(max-width: 769px)");

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      width: match && "90%",
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      color: '#050505',
      '& p': {
        margin: '1rem auto'
      }
    },
  }));

  const classes = useStyles();

  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <p id="transition-modal-title">
              <span style={{fontWeight: 'bold'}}>{element}</span> silmek istediğinize emin misiniz? 🤔
            </p>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => deleteHandler(elementId)}
            >
              Sil
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleClose()}
            >
              Vazgeç
            </Button>
          </div>
        </Fade>
      </Modal>
  );
}
