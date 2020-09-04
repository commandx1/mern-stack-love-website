import React, { useState, useContext } from "react";
import { generalContext } from "../../../../../WRAPPERS/Context/myContext";
import Editor from "../../../../editor/Editor";
import Input from "../../../../formelements/Input";
import Button from "@material-ui/core/Button/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import { useForm } from "../../../../../hooks/useForm";
import useHttpClient from "../../../../../hooks/useHttpClient";
import ImageUpload from "../../../../formelements/imageUpload/imageUpload";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  form: {
    flex: "1 1",
    display: "flex",
    flexDirection: "column",
    paddingBottom: ".5rem",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    textAlign: "center",
    overflowX: "hidden",
  },
  label: {
    textDecoration: "underline",
    margin: ".3rem auto .2rem auto",
    fontSize: "1rem",
  },
});

const InsertTelltale = () => {
  const history = useHistory();
  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();
  const general = useContext(generalContext);
  const [masal, setmasal] = useState({
    title: "",
    content: "",
  });

  const [formState, inputHandler, setFormData] = useForm(
    {
      image: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const classes = useStyles();

  return (
    <form
      className={classes.form}
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append("title", masal.title);
          formData.append("content", masal.content);
          formData.append("image", formState.inputs.image.value);
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL + "/telltales",
            "POST",
            formData
          );
          setmasal({ title: "", content: "" });
          console.log(responseData.telltale);
          general.functions.telltale.addTelltale(responseData.telltale);
          history.push("/Masallar");
        } catch (err) {}
      }}
    >
      <Input
        required
        label="Masal Başlığı"
        placeholder="Masal Başlığı Giriniz..."
        bg="white"
        inputStyle={{
          marginBottom: "1rem",
          textAlign: "center",
          color: "black",
        }}
        value={masal.title}
        onChange={(e) =>
          setmasal({ title: e.target.value, content: masal.content })
        }
      />
      <label style={{ textDecoration: "underline", fontSize: "1.2rem" }}>
        İçerik
      </label>
      <Editor
        type="telltale"
        value={masal.content}
        onChange={(e, editor) => {
          const data = editor.getData();
          setmasal({ title: masal.title, content: data });
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
        size="medium"
        color="primary"
        fullWidth
        type="submit"
      >
        Gönder
      </Button>
    </form>
  );
};

export default InsertTelltale;
