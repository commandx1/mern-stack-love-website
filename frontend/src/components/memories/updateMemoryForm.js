import React, { useState, useContext } from "react";
import { generalContext } from "../../WRAPPERS/Context/myContext";
import Input from "../formelements/Input";
import makeStyles from "@material-ui/styles/makeStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Modal from "../modal/Modal";
import Button from "@material-ui/core/Button/Button";
import Editor from "../editor/Editor";
import { useForm } from "../../hooks/useForm";
import useHttpClient from "../../hooks/useHttpClient";
import ImageUpload from "../formelements/imageUpload/imageUpload";
import { useHistory } from "react-router-dom";
import Spinner from "../spinner/Spinner";

const UpdateMemory = (props) => {
  const match = useMediaQuery("(max-width: 769px)");
  const yatay = useMediaQuery("(max-height: 375px)");
  const history = useHistory();
  const general = useContext(generalContext);

  const useStyles = makeStyles({
    form: {
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      width: match ? "97%" : "90%",
      height: "92%",
      justifyContent: "space-between",
      textAlign: "center",
      overflowX: "hidden",
    },
    label: {
      textDecoration: "underline",
      margin: ".3rem auto .2rem auto",
      fontSize: yatay ? ".6rem" : "1rem",
    },
    imageDiv: {
      border: "1px solid",
      width: "90%",
      margin: ".5rem auto 1rem",
      paddingTop: "1rem",
      background: "cadetblue",
    },
  });
  const [memory, setmemory] = useState({
    _id: props.m._id,
    title: props.m.title,
    content: props.m.content,
  });

  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const updateMemory = async (m) => {
    try {
      const formData = new FormData();
      formData.append("content", m.content);
      formData.append("title", m.title);
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/memories/${m._id}`,
        "PATCH",
        formData
      );
      responseData.message.type === "success" &&
        general.functions.memory.updateMemory(responseData.memory);
      props.setShowSnackbar(true);
      props.setmessage({
        type: responseData.message.type,
        content: responseData.message.content,
      });
      props.setopen2(false);
      history.goBack();
    } catch (err) {}
  };

  const imageRemoveHandler = async () => {
    try {
      const res = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/memories/image/${props.m._id}`,
        "DELETE"
      );
      general.functions.memory.removeImageFromMemory(props.m._id);
      props.setShowSnackbar(true);
      props.setmessage({
        type: res.message.type,
        content: res.message.content,
      });
      props.setopen2(false);
      history.goBack();
    } catch (err) {}
  };
  const imageInsertHandler = async () => {
    try {
      const formData = new FormData();
      formData.append("image", formState.inputs.image.value);
      const res = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/memories/image/${props.m._id}`,
        "PATCH",
        formData
      );
      console.log(res);
      general.functions.memory.addImageToMemory(res.memory);
      props.setShowSnackbar(true);
      props.setmessage({
        type: res.message.type,
        content: res.message.content,
      });
      props.setopen2(false);
      history.goBack();
    } catch (err) {}
  };

  const classes = useStyles();
  return (
    <Modal path="/Anılar" open={props.open}>
      {isLoading && <Spinner />}
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
          updateMemory(memory);
        }}
      >
        <div className={classes.imageDiv}>
          {props.m.imageUrl ? (
            <Button
              onClick={imageRemoveHandler}
              color="secondary"
              variant="contained"
            >
              Fotoğrafı Kaldır
            </Button>
          ) : (
            <Button
              onClick={imageInsertHandler}
              color="primary"
              variant="contained"
              disabled={!formState.isValid}
            >
              Fotoğrafı ekle
            </Button>
          )}
          <ImageUpload
            updateUrl={props.m.imageUrl}
            id="image"
            onInput={inputHandler}
            center
            errorText="Lütfen Geçerli Bir Resim Yükleyiniz"
          />
        </div>
        <Input
          style={{ flex: 1 }}
          inputStyle={{ textAlign: "center" }}
          label="Anı Başlığı"
          type="text"
          value={memory.title}
          onChange={(e) => setmemory({ ...memory, title: e.target.value })}
        />
        <p className={classes.label}>Anı İçeriği</p>
        <Editor
          style={{ flex: 15 }}
          data={memory.content}
          onChange={(e, editor) => {
            const data = editor.getData();
            setmemory({ ...memory, content: data });
          }}
        />
        <Button
          style={{ flex: 1 }}
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          disabled={
            props.m.title === memory.title && props.m.content === memory.content
              ? true
              : false
          }
        >
          {props.m.title === memory.title && props.m.content === memory.content
            ? "Herhangi bir değişiklik yapılmadı"
            : "Gönder"}
        </Button>
      </form>
    </Modal>
  );
};

export default UpdateMemory;
