import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { authContext } from "../../WRAPPERS/Context/myContext";
import Badge from "@material-ui/core/Badge";
import NotificationIcon from "@material-ui/icons/Notifications";
import Delete from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton/IconButton";
import { useMediaQuery, Divider } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useHttpClient from "../../hooks/useHttpClient";
import Spinner from "../spinner/Spinner";
import { useHistory } from "react-router-dom";

export default function SimpleBadge() {
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    icon: {
      color: "white",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      height: "50vh",
      overflowY: "auto",
      minWidth: "30vw",
      width: match && "90%",
      backgroundColor: "#EFE5E2",
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(1),
      position: "relative",
    },
    delete: {
      cursor: "pointer",
      transition: "all ease 400ms",
      color: "red",
      "&:hover": {
        transform: "scale(1.25)",
      },
    },
  }));

  const match = useMediaQuery("(max-width: 769px)");

  const [notifications, setNotifications] = useState([]);
  const [count, setcount] = useState(0);
  const auth = useContext(authContext);
  const { sendRequest, isLoading } = useHttpClient();
  const [showNotifications, setshowNotifications] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/notifications/${auth.userId}`
        );
        let x = 0
        res.notifications.map((n) => x = n.read === false ? x + 1 : x)
        setcount(x)


        setNotifications(res.notifications);
      } catch (error) {}
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <IconButton
        aria-label="notification"
        onClick={(e) => {
          setshowNotifications(true);
        }}
      >
        <Badge badgeContent={count} color="primary">
          <NotificationIcon className={classes.icon} />
        </Badge>
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={showNotifications}
        onClose={() => setshowNotifications(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showNotifications}>
          <div className={classes.paper}>
            {isLoading && <Spinner style={{ position: "absolute" }} />}
            {!isLoading &&
              notifications.length > 0 &&
              notifications.map((option, index) => (
                <div key={option._id}>
                  <div className={classes.item}>
                    <input
                      checked={option.read}
                      value={option.read}
                      onChange={async (event) => {
                        try {
                          const res = await sendRequest(
                            `${process.env.REACT_APP_BACKEND_URL}/notifications/${option._id}`,
                            "PATCH",
                            JSON.stringify({
                              read: event.target.checked,
                            }),
                            { "Content-Type": "application/json" }
                          );
                          res.notification.read
                            ? setcount(count > 0 ? count - 1 : 0)
                            : setcount(count + 1);
                          const updated = notifications.map((n) =>
                            n._id === option._id
                              ? { ...n, read: res.notification.read }
                              : n
                          );
                          setNotifications(updated);
                        } catch (error) {}
                      }}
                      style={{ flex: 1 }}
                      type="checkbox"
                      name="read-nofitication"
                    />

                    <div
                      style={
                        option.read
                          ? {
                              opacity: 0.5,
                              color: "gray",
                              flex: 15,
                              textDecoration: "line-through",
                            }
                          : { flex: 15 }
                      }
                    >
                      <div style={{ width: "100%", display: "flex" }}>
                        <div>{option.content}</div>
                        <div style={{ flex: 1 }} />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center"
                          }}
                        >
                          ({option.date})
                          <span
                            style={{
                              cursor: "pointer",
                              textDecoration: "underline",
                              margin: "0 5px",
                            }}
                            onClick={() => {
                              setshowNotifications(false);
                              history.push(option.redirect);
                            }}
                          >
                            ilerle
                          </span>
                        </div>
                      </div>
                    </div>
                    <Delete
                      className={classes.delete}
                      onClick={async () => {
                        try {
                          const res = await sendRequest(
                            `${process.env.REACT_APP_BACKEND_URL}/notifications/${option._id}`,
                            "DELETE"
                          );
                          setNotifications(
                            notifications.filter((n) => n._id !== option._id)
                          );
                          setcount(count > 0 ? count - 1 : 0);
                        } catch (error) {}
                      }}
                    />
                  </div>
                  {index + 1 <= notifications.length ? <Divider /> : null}
                </div>
              ))}
            {notifications.length === 0 && "Bildirim yok bebeim."}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
