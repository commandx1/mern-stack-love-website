import React, { Fragment, useState } from "react";
import { Collapse, Button } from "@material-ui/core";
import Editor from "../../../../editor/Editor";
import { useStyles } from "../poems/styles";
import useHttpClient from "../../../../../hooks/useHttpClient";
import Spinner from "../../../../spinner/Spinner";
import Snackbar from "../../../../snackbar/Snackbar";
import {REACT_APP_BACKEND_URL} from '../../../../../env_variables'

const EditablePoemContent = ({
  p,
  fetchedPoems,
  setfetchedPoems,
  editingId,
  name
}) => {
  const classes = useStyles();

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [message, setmessage] = useState("");
  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();

  const submit = async (p) => {
    try {
      const res = await sendRequest(
        `${REACT_APP_BACKEND_URL}/about/${name}/${p._id}`,
        "PATCH",
        JSON.stringify({
          title: p.title,
          content: p.content,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      setmessage(res.message);
      setShowSnackbar(true);
    } catch (err) {}
  };
  const onClose = () => setShowSnackbar(false);

  return (
    <Fragment>
      <Snackbar
        onClose={onClose}
        open={showSnackbar}
        message={message}
        alert={message === "Değişiklik yapmadınız.🤔" ? "warning" : "success"}
      />
      {isLoading && <Spinner />}
      <Collapse
        className={classes.collapse}
        in={p._id === editingId ? true : false}
        collapsedHeight={0}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(p);
            console.log(p);
          }}
        >
          <Editor
            style={{ flex: 15 }}
            data={p.content}
            onChange={(e, editor) => {
              const data = editor.getData();
              const updatedData = fetchedPoems.map((poem) =>
                p._id === poem._id ? { ...poem, content: data } : poem
              );
              setfetchedPoems(updatedData);
            }}
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

export default EditablePoemContent;
