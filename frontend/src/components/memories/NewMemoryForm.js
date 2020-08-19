import React, { useState, useContext } from "react";
import Input from "../formelements/Input";
import { generalContext, authContext } from "../../WRAPPERS/Context/myContext";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Modal from "../modal/Modal";
import Editor from "../editor/Editor";
import { useForm } from "../../hooks/useForm";
import ImageUpload from "../formelements/imageUpload/imageUpload";
import useHttpClient from "../../hooks/useHttpClient";
import Spinner from "../spinner/Spinner";
import Backdrop from "../backdrop/backdrop";
import { useHistory } from "react-router-dom";
import {REACT_APP_ASSET_URL, REACT_APP_BACKEND_URL} from '../../env_variables'

const NewMemoryForm = (props) => {
  const match = useMediaQuery("(max-width: 769px)");
  const yatay = useMediaQuery("(max-height: 375px)");
  const auth = useContext(authContext);
  const general = useContext(generalContext);
  const history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
    {
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );
  const [memory, setmemory] = useState({
    title: "",
    content: "",
  });

  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();

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
  });

  const submit = async (e) => {
    e.preventDefault();
    sessionStorage.removeItem("memory-modal");
    try {
      const formData = new FormData();
      formData.append("image", formState.inputs.image.value);
      formData.append("username", auth.name);
      formData.append("kullanici", auth.userId);
      formData.append("content", memory.content);
      formData.append("title", memory.title);
      const responseData = await sendRequest(
        REACT_APP_BACKEND_URL + "/memories",
        "POST",
        formData
      );
      setmemory({ title: "", content: "" });
      inputHandler("image", "", false);
      props.setOpenModal(false);
      general.functions.memory.addMemory(responseData.memory);
      history.push('/Anılar')
    } catch (err) {}
  };

  const classes = useStyles();

  let backdrop;
  backdrop = (
    <Backdrop
      backdropClickHandler={() => {
        sessionStorage.removeItem("memory-modal");
        history.push("/Anılar");
        props.setOpenModal(false);
      }}
    />
  );

  return (
    <>
      {" "}
      {props.open && backdrop}
      <Modal open={props.open}>
        {isLoading && <Spinner />}
        <form className={classes.form} onSubmit={submit}>
          <Input
            required
            placeholder=""
            style={{ marginTop: ".1rem" }}
            bg="white"
            inputStyle={{
              color: "black",
              textAlign: "center",
            }}
            label="Anı Başlığı"
            type="text"
            name="memory-header"
            value={memory.title}
            onChange={(e) => setmemory({ ...memory, title: e.target.value })}
          />
          <p className={classes.label}>Anı İçeriği</p>
          <Editor
            type="memory"
            data={memory.content}
            onChange={(e, editor) => {
              const data = editor.getData();
              setmemory({ ...memory, content: data });
            }}
          />
          <ImageUpload
            id="image"
            onInput={inputHandler}
            center
            errorText="Lütfen Geçerli Bir Resim Yükleyiniz"
          />
          <Button
            style={{ flex: 1 }}
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
          >
            Gönder
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default NewMemoryForm;
