import React, { useState, useContext, useEffect } from "react";
import {
  generalContext,
  authContext,
} from "../../../../../WRAPPERS/Context/myContext";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Input from "../../../../formelements/Input";
import Textarea from "../../../../formelements/Textarea";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useHttpClient from "../../../../../hooks/useHttpClient";
import ErrorModal from "../../../../error/ErrorModal";
import Spinner from "../../../../spinner/Spinner";
import {REACT_APP_BACKEND_URL} from '../../../../../env_variables';

const InsertAbout = () => {
  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();
  const match = useMediaQuery("(min-width: 768px)");
  const general = useContext(generalContext);
  const [count, setcount] = useState(null);
  const auth = useContext(authContext);
  const history = useHistory();
  const [message, setmessage] = useState("");
  const [about, setabout] = useState({
    title: "",
    content: "",
  });

  let name;
  if (auth.name === "Serhat Belen") name = "ceren";
  if (auth.name === "Ceren Dilmaç") name = "serhat";

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const responseData = await sendRequest(
          `${REACT_APP_BACKEND_URL}/about/${name}`
        );

        setcount(responseData.abouts.length);
      } catch (err) {}
    };
    fetchPoems();
  }, [sendRequest]);

  const submit = async (e) => {
    e.preventDefault();
    if (count > 5)
      setmessage(
        "En fazla altı adet yazı paylaşılabilir. Maksimum sayıya ulaştınız..."
      );
    else {
      try {
        const responseData = await sendRequest(
          `${REACT_APP_BACKEND_URL}/about/${name}`,
          "POST",
          JSON.stringify({
            title: about.title,
            content: about.content,
          }),
          { "Content-Type": "application/json" }
        );
        setabout({ title: "", content: "" });
        if (name === "serhat")
          general.functions.about.addAboutMe(responseData.about);
        if (name === "ceren")
          general.functions.about.addAboutHer(responseData.about);
      } catch (err) {}
      history.push("/Hakkımızda");
    }
  };

  return (
    <form style={{ textAlign: "center" }} onSubmit={submit}>
      {isLoading && <Spinner />}
      <ErrorModal
        open={message ? true : false}
        handleClose={() => {
          setmessage();
          setabout({ title: "", content: "" });
        }}
        error={message}
      />
      <ErrorModal open={open} handleClose={clearError} error={error} />
      <Input
        required
        inputStyle={{ marginBottom: "1rem", textTransform: "capitalize" }}
        type="text"
        value={about.title}
        label="Başlık"
        onChange={(e) =>
          setabout({ title: e.target.value, content: about.content })
        }
      />
      <Textarea
        required
        rows={10}
        style={{
          marginBottom: "1rem",
          fontSize: "1rem",
          fontFamily: "'Roboto', sans-serif",
        }}
        label="İçerik"
        onChange={(e) =>
          setabout({ title: about.title, content: e.target.value })
        }
        value={about.content}
      />
      <Button
        className="insert-about-button"
        style={{ flex: 1 }}
        variant="contained"
        color="primary"
        fullWidth
        type="submit"
      >
        Gönder
      </Button>
    </form>
  );
};

export default InsertAbout;
