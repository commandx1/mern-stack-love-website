import React, { useContext, useState, Fragment } from "react";
import { authContext } from "../../WRAPPERS/Context/myContext";
import { useHistory } from "react-router-dom";
import useHttpClient from "../../hooks/useHttpClient";
import TextField from "@material-ui/core/TextField";
import Button from "../formelements/Button";
import "./login.css";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ErrorModal from "../../components/error/ErrorModal";
import Spinner from "../../components/spinner/Spinner";
import {REACT_APP_BACKEND_URL} from "../../env_variables"

const Login = () => {
  const history = useHistory();
  const [user, setuser] = useState({
    username: "",
    password: "",
  });
  const [checked, setchecked] = useState(false);
  const auth = useContext(authContext);
  const { isLoading, sendRequest, open, clearError, error } = useHttpClient();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const responseData = await sendRequest(
        REACT_APP_BACKEND_URL + "/users/login",
        "POST",
        JSON.stringify({
          username: user.username,
          password: user.password,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      auth.login(responseData.user.id, responseData.user.name);
      // alert(responseData.message);
      history.push("/");
      if (checked) {
        localStorage.setItem("id", responseData.user.id);
        localStorage.setItem("name", responseData.user.name);
      } else {
        sessionStorage.setItem("id", responseData.user.id);
        sessionStorage.setItem("name", responseData.user.name);
      }
    } catch (err) {}
  };

  let form = (
    <form id="login-form" onSubmit={submit}>
      <LockOpenIcon />
      <TextField
        required
        type="text"
        label="username"
        value={user.username}
        onChange={(e) => setuser({ ...user, username: e.target.value })}
      />
      <TextField
        required
        type="password"
        label="şifre"
        value={user.password}
        onChange={(e) => setuser({ ...user, password: e.target.value })}
      />
      <div style={{ display: "flex", marginTop: "1rem" }}>
        <label htmlFor="check">Beni Hatırla</label>
        <input
          id="check"
          type="checkbox"
          checked={checked}
          onChange={() => setchecked(!checked)}
        />
      </div>

      <Button type="submit">Giriş Yap</Button>
      <p id="hesabım-yok">şifremi unuttum</p>
    </form>
  );
  return (
    <Fragment>
      <ErrorModal open={open} handleClose={clearError} error={error} />
      {isLoading && <Spinner />}
      <div id="login-page">{form}</div>
    </Fragment>
  );
};

export default Login;
