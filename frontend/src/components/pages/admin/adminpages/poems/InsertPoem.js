import React, { useState, useContext } from "react";
import { generalContext } from "../../../../../WRAPPERS/Context/myContext";
import Editor from "../../../../editor/Editor";
import Input from "../../../../formelements/Input";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import { useHistory } from "react-router-dom";
import useHttpClient from "../../../../../hooks/useHttpClient";
import { useForm } from "../../../../../hooks/useForm";
import ImageUpload from "../../../../formelements/imageUpload/imageUpload";

const InsertPoem = () => {
  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();
  const general = useContext(generalContext);
  const history = useHistory();
  const [poem, setpoem] = useState({
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

  const classes = useStyles();

  return (
    <form
      className={classes.form}
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append("title", poem.title);
          formData.append("content", poem.content);
          formData.append("image", formState.inputs.image.value);
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL + "/poems",
            "POST",
            formData
          );
          setpoem({ title: "", content: "" });
          general.functions.poem.addPoem(responseData.poem);
          history.push("/Şiirler");
        } catch (err) {}
        general.functions.poem.addPoem(poem);
        setpoem({ title: "", content: "" });
        // history.push("/Şiirler");
      }}
    >
      <Input
        bg="white"
        label="Şiir Başlığı"
        style={{ marginTop: ".1rem", flex: 1 }}
        inputStyle={{ marginBottom: "1rem" }}
        value={poem.title}
        onChange={(e) =>
          setpoem({ title: e.target.value, content: poem.content })
        }
      />
      <Editor
        type="poem"
        style={{ flex: 15 }}
        value={poem.content}
        onChange={(e, editor) => {
          const data = editor.getData();
          setpoem({ title: poem.title, content: data });
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

export default InsertPoem;
