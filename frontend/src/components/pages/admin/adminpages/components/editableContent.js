import React, { Fragment, useState, useEffect } from "react";
import { Collapse, Button } from "@material-ui/core";
import Editor from "../../../../editor/Editor";
import { useStyles } from "../poems/styles";
import useHttpClient from "../../../../../hooks/useHttpClient";
import { useForm } from "../../../../../hooks/useForm";
import Spinner from "../../../../spinner/Spinner";
import ImageUpload from "../../../../formelements/imageUpload/imageUpload";
import {useHistory} from "react-router-dom"
import { REACT_APP_BACKEND_URL } from "../../../../../env_variables";

const Content = ({
  element,
  fetchedThings,
  setfetchedThings,
  editingId,
  setmessage,
  setShowSnackbar,
  deletingThing,
  updateState, 
  route,
  setEditingId,
  goTo
}) => {
  const history = useHistory()
  const classes = useStyles();

  const [formState, inputHandler, setFormData] = useForm(
    {
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();
const [deneme, setdeneme] = useState(false)
  const submit = async (element) => {
    try {
      const formData = new FormData();
      formData.append("title", element.title);
      formData.append("content", element.content);
      formData.append("image", formState.inputs.image.value);
      const res = await sendRequest(
        `${REACT_APP_BACKEND_URL}/${deletingThing}/${element._id}`,
        "PATCH",
        formData
      );
      setmessage({
        type:res.message.type,
        content: res.message.content
      })
      setShowSnackbar(true);
      res.message.type === "success" && updateState(res)
      res.message.type === "success" && goTo ? history.push(`${goTo}/${res.post._id}/Başlık/${res.post.title}`)
      : history.push(route)
      setEditingId(null)
    } catch (err) {}
  };

  useEffect(() => {
    element._id === editingId ? setdeneme(true) : setdeneme(false)
  }, [])
  return (
    <Fragment>
      {isLoading && <Spinner />}
      <Collapse
        className={classes.collapse}
        in={deneme}
        collapsedHeight={0}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(element);
          }}
        >
          <Editor
            style={{ flex: 15 }}
            data={element.content}
            onChange={(e, editor) => {
              const data = editor.getData();
              const updatedData = fetchedThings.map((poem) =>
              element._id === poem._id ? { ...poem, content: data } : poem
              );
              setfetchedThings(updatedData);
            }}
          />
          <ImageUpload
            updateUrl={element.imageUrl}
            id="image"
            onInput={inputHandler}
            center
            errorText="Lütfen Geçerli Bir Resim Yükleyiniz"
          />
          <Button
            variant="contained"
            size="medium"
            color="primary"
            fullWidth
            type="submit"
          >
            Gönder
          </Button>
        </form>
      </Collapse>
    </Fragment>
  );
};

export default Content;
