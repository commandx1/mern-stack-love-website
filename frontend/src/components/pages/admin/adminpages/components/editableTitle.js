import React, { useState, Fragment } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import useHttpClient from "../../../../../hooks/useHttpClient";
import CancelIcon from "@material-ui/icons/Cancel";
import { useStyles } from "../poems/styles";
import Spinner from "../../../../spinner/Spinner";
import { useRouteMatch, useHistory } from "react-router-dom";
import { REACT_APP_BACKEND_URL } from "../../../../../env_variables";

const Title = ({
  element,
  editingId,
  setEditingId,
  index,
  setmessage,
  setShowSnackbar,
  deletingThing,
  fetchedThings,
  setfetchedThings,
  name,
  setmessagee,
}) => {
  const classes = useStyles();
  const [deletingId, setdeletingId] = useState(null);
  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();
  const route = useRouteMatch();
  const history = useHistory();

  const deleteHandler = name
    ? async (aid) => {
        try {
          const res = await sendRequest(
            `${REACT_APP_BACKEND_URL}/about/${name}/${aid}`,
            "DELETE"
          );
          setShowSnackbar(true);
          const updatedData = fetchedThings.filter(
            (about) => about._id !== aid
          );
          setfetchedThings(updatedData);
          setmessagee(res.message);
        } catch (err) {}
      }
    : async (id) => {
        try {
          const res = await sendRequest(
            `${REACT_APP_BACKEND_URL}/${deletingThing}/${id}`,
            "DELETE"
          );
          setShowSnackbar(true);
          const updatedData = fetchedThings.filter((p) => p._id !== id);
          setfetchedThings(updatedData);
          setmessage({
            type: res.message.type,
            content: res.message.content,
          });
        } catch (err) {}
      };

  return (
    <Fragment>
      {isLoading && <Spinner />}
      <div className={classes.titleWrapper}>
        {element._id === deletingId ? (
          <div className={classes.question}>
            <p>Silmek istediginize emin misiniz?</p>
            <IconButton onClick={() => deleteHandler(element._id)}>
              <CheckCircleIcon />
            </IconButton>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                setdeletingId(null);
              }}
            >
              <CancelIcon />
            </IconButton>
          </div>
        ) : (
          <div className={classes.title}>
            {index + 1}
            {") "}
            {editingId === element._id ? (
              <input
                value={element.title}
                style={{ margin: 0 }}
                onChange={(e) => {
                  const updatedData = fetchedThings.map((el) =>
                  element._id === el._id ? { ...el, title: e.target.value } : el
                  );
                  setfetchedThings(updatedData);
                }}
              />
            ) : (
              <p style={{ margin: 0 }}>{element.title}</p>
            )}
            <div style={{ flex: 1 }} />
            <div className={classes.editing}>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  if (editingId) {
                    setEditingId(null);
                    history.push(route.path);
                  } else {
                    setEditingId(element._id);
                    history.push(`${route.path}/${element._id}`);
                  }
                }}
                aria-label="düzenle"
                className={classes.margin}
              >
                <EditIcon className={classes.EditIcon} />
              </IconButton>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  setdeletingId(element._id);
                }}
                aria-label="sil"
                className={classes.margin}
              >
                <DeleteIcon className={classes.deleteIcon} />
              </IconButton>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Title;
