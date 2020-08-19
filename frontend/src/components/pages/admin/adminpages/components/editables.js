import React, { useState, Fragment, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "../poems/styles";
import Title from "./editableTitle";
import Snackbar from "../../../../snackbar/Snackbar";
import Content from "./editableContent";
import { Route, useRouteMatch } from "react-router-dom";

const Editables = ({
  fetchedThings,
  onClose,
  showSnackbar,
  message,
  messageType,
  setmessage,
  setfetchedThings,
  deletingThing,
  errorText,
  setShowSnackbar,
  goTo,
  updateState,
}) => {
  const [editingId, setEditingId] = useState(null);
  const classes = useStyles();
  const route = useRouteMatch();

  return (
    <Fragment>
      <Snackbar
        onClose={onClose}
        open={showSnackbar}
        message={message}
        alert={messageType}
      />
      {fetchedThings.length === 0 && <p>{errorText}</p>}
      {fetchedThings &&
        fetchedThings.map((element, index) => (
          <div key={element._id} className={classes.container}>
            <Paper elevation={4} className={classes.paper}>
              <Title
                index={index}
                element={element}
                editingId={editingId}
                setEditingId={setEditingId}
                setmessage={setmessage}
                deletingThing={deletingThing}
                fetchedThings={fetchedThings}
                setfetchedThings={setfetchedThings}
                setShowSnackbar={setShowSnackbar}
              />
              <Route
                path={`${route.path}/${element._id}`}
                render={() => (
                  <Content
                    goTo={goTo}
                    setEditingId={setEditingId}
                    route={route.path}
                    updateState={updateState}
                    deletingThing={deletingThing}
                    setShowSnackbar={setShowSnackbar}
                    setmessage={setmessage}
                    element={element}
                    fetchedThings={fetchedThings}
                    setfetchedThings={setfetchedThings}
                    editingId={editingId}
                  />
                )}
              />
            </Paper>
          </div>
        ))}
    </Fragment>
  );
};

export default Editables;
