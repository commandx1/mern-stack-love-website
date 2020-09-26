import React, { useContext, useEffect, useState, useRef } from "react";
import { authContext } from "../../WRAPPERS/Context/myContext";
import io from "socket.io-client";
import Container from "../Container/container";
import PageTitle from "../Container/PageTitle";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import "./mesajlasma.css";

let socket;

const Mesajlasma = () => {
  const textareaRef = useRef(null);
  const auth = useContext(authContext);
  // const ENDPOINT = "localhost:5000";
  const ENDPOINT = "/";
  const [state, setstate] = useState([]);
  const [users, setusers] = useState(["Serhat Belen", "Ceren Dilmaç"]);
  const [messages, setmessages] = useState([
    {
      name: "Serhat Belen",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, blanditiis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, blanditiis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, blanditiis.",
    },
    {
      name: "Ceren Dilmaç",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, blanditiis.",
    },
    {
      name: "Ceren Dilmaç",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, blanditiis.",
    },
    {
      name: "Serhat Belen",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, blanditiis.",
    },
    {
      name: "Ceren Dilmaç",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, blanditiis.",
    },
    {
      name: "Serhat Belen",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, blanditiis.",
    },
    {
      name: "Serhat Belen",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, blanditiis.",
    },
  ]);
  const [message, setmessage] = useState("");

  useEffect(() => {
    socket = io.connect(ENDPOINT);
    socket.emit("new user", auth.name);

    socket.on("get users", (data) => {
      setstate(data);
    });

    socket.on("new message", (data) =>
      setmessages((prev) => [...prev, { name: data.user, text: data.msg }])
    );
    return () => {
      window.location.reload();
    };
  }, [ENDPOINT]);

  const submit = () => {
    socket.emit("send message", message);
    setmessage("");
  };

  useEffect(() => {
    const objDiv = document.getElementById("chat");
    objDiv.scrollTop = objDiv.scrollHeight;
  });

  return (
    <>
      <PageTitle>Mesajlarım</PageTitle>
      <Container>
        <div id="messageArea" className="row">
          <div className="message-users">
            <h3>Kullanıcılar</h3>
            <ul id="users">
              {users.map((u, index) => (
                <li
                  key={index}
                  style={
                    state.indexOf(u) !== -1
                      ? { color: "green" }
                      : { color: "black" }
                  }
                >
                  {u}({state.indexOf(u) !== -1 ? "Çevrimiçi" : "Çevrimdışı"})
                </li>
              ))}
            </ul>
          </div>
          <div className="chat" id="chat">
            <div className="message-box">
              {messages.length > 0 &&
                messages.map((msg) => (
                  <p
                    style={
                      auth.name === msg.name
                        ? {
                            backgroundColor: "rgba(140, 120, 0, .7)",
                            marginRight: "auto",
                          }
                        : {
                            color: "white",
                            boxShadow: "1px 1px 10px black",
                            backgroundColor: "rgba(0, 0, 0, .7)",
                            marginLeft: "auto",
                          }
                    }
                  >
                    {msg.name}: {msg.text}
                  </p>
                ))}
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
              textareaRef.current.focus();
            }}
            id="messageForm"
          >
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              required
              id="message"
            ></textarea>
            <IconButton type="submit" className="send-message">
              <SendIcon />
            </IconButton>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Mesajlasma;
