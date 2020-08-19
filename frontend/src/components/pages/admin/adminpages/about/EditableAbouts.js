import React, { useState, useContext, useEffect, Fragment } from "react";
import { authContext } from "../../../../../WRAPPERS/Context/myContext";
import useHttpClient from "../../../../../hooks/useHttpClient";
import Paper from "@material-ui/core/Paper";
import EditableAboutContent from "./EditableAboutContent";
import { useStyles } from "../poems/styles";
import Spinner from "../../../../spinner/Spinner";
import AboutTitle from "../components/editableTitle";
import Snackbar from "../../../../snackbar/Snackbar";
import {REACT_APP_BACKEND_URL} from "../../../../../env_variables"

const EditablePoems = () => {
  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();
  const [fetchedAbouts, setfetchedAbouts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [message, setmessage] = useState("");
  const auth = useContext(authContext);
  const classes = useStyles();

  let name;
  if (auth.name === "Serhat Belen") name = "ceren";
  if (auth.name === "Ceren Dilmaç") name = "serhat";

  useEffect(() => {
    const fetchAbouts = async () => {
      try {
        const responseData = await sendRequest(
          `${REACT_APP_BACKEND_URL}/about/${name}`
        );
        setfetchedAbouts(responseData.abouts);
      } catch (err) {}
    };
    fetchAbouts();
  }, [sendRequest]);

  const onClose = () => setShowSnackbar(false);

  return (
    <Fragment>
      <Snackbar
        onClose={onClose}
        open={showSnackbar}
        message={message}
        alert="error"
      />
      {isLoading && <Spinner />}
      {fetchedAbouts.length === 0 && <p>Hiç Şiir Yok !</p>}
      {fetchedAbouts &&
        fetchedAbouts.map((p, index) => (
          <div key={p._id} className={classes.container}>
            <Paper elevation={4} className={classes.paper}>
              <AboutTitle
                setmessagee={setmessage}
                index={index}
                fetchedThings={fetchedAbouts}
                setfetchedThings={setfetchedAbouts}
                element={p}
                editingId={editingId}
                setShowSnackbar={setShowSnackbar}
                setEditingId={setEditingId}
                name={name}
              />
              <EditableAboutContent
                name={name}
                p={p}
                fetchedPoems={fetchedAbouts}
                setfetchedPoems={setfetchedAbouts}
                editingId={editingId}
              />
            </Paper>
          </div>
        ))}
    </Fragment>
  );
};

export default EditablePoems;
