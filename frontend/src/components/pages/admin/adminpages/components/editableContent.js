import React, { Fragment, useState, useEffect } from "react";
import { Collapse, Button } from "@material-ui/core";
import Editor from "../../../../editor/Editor";
import { useStyles } from "../poems/styles";
import useHttpClient from "../../../../../hooks/useHttpClient";
import { useForm } from "../../../../../hooks/useForm";
import Spinner from "../../../../spinner/Spinner";
import ImageUpload from "../../../../formelements/imageUpload/imageUpload";
import { useHistory } from "react-router-dom";

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
  goTo,
  removeImageFromElement,
  addImageToMemory
}) => {
  const history = useHistory();
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
  const [deneme, setdeneme] = useState(false);
  const submit = async (element) => {
    try {
      const formData = new FormData();
      formData.append("title", element.title);
      formData.append("content", element.content);
      const res = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/${deletingThing}/${element._id}`,
        "PATCH",
        formData
      );
      setmessage({
        type: res.message.type,
        content: res.message.content,
      });
      setShowSnackbar(true);
      res.message.type === "success" && updateState(res);
      res.message.type === "success" && goTo
        ? history.push(`${goTo}/${res.post._id}/Başlık/${res.post.title}`)
        : history.push(route);
      setEditingId(null);
    } catch (err) {}
  };
  const imageRemoveHandler = async() => {
    try {
      const res = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/${deletingThing}/image/${element._id}`,
        "DELETE"
      );
      removeImageFromElement(element._id);
      setShowSnackbar(true);
      setmessage({
        type: res.message.type,
        content: res.message.content,
      });
      setEditingId(null);
      history.goBack();
    } catch (err) {}
  };

  const imageInsertHandler = async () => {
    try {
      const formData = new FormData();
      formData.append("image", formState.inputs.image.value);
      const res = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/${deletingThing}/image/${element._id}`,
        "PATCH",
        formData
      );
      addImageToMemory(res);
      setShowSnackbar(true);
      setmessage({
        type: res.message.type,
        content: res.message.content,
      });
      setEditingId(null);
      history.goBack();
    } catch (err) {}
  };

  useEffect(() => {
    element._id === editingId ? setdeneme(true) : setdeneme(false);
  }, []);

  return (
    <Fragment>
      {isLoading && <Spinner />}
      <Collapse className={classes.collapse} in={deneme} collapsedHeight={0}>
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
          <div className={classes.imageDiv}>
            {element.imageUrl ? (
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
              updateUrl={element.imageUrl}
              id="image"
              onInput={inputHandler}
              center
              errorText="Lütfen Geçerli Bir Resim Yükleyiniz"
            />
          </div>
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
