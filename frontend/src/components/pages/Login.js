import React, { useContext, useState, Fragment } from "react";
import { authContext,generalContext } from "../../WRAPPERS/Context/myContext";
import { useHistory } from "react-router-dom";
import useHttpClient from "../../hooks/useHttpClient";
import TextField from "@material-ui/core/TextField";
import Button from "../formelements/Button";
import "./login.css";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ErrorModal from "../../components/error/ErrorModal";
import Spinner from "../../components/spinner/Spinner";

const Login = () => {
  const history = useHistory();
  const [user, setuser] = useState({
    username: "",
    password: "",
  });
  const [checked, setchecked] = useState(false);
  const auth = useContext(authContext);
  const general = useContext(generalContext);
  const { isLoading, sendRequest, open, clearError, error } = useHttpClient();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/users/login",
        "POST",
        JSON.stringify({
          username: user.username,
          password: user.password,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      if (checked) {
        localStorage.setItem("id", responseData.user.id);
        localStorage.setItem("name", responseData.user.name);
      } else {
        sessionStorage.setItem("id", responseData.user.id);
        sessionStorage.setItem("name", responseData.user.name);
      }
      auth.login(responseData.user.id, responseData.user.name);
      history.push("/");
    } catch (err) {}
  };

  return (
    <Fragment>
      <ErrorModal open={open} handleClose={clearError} error={error} />
      {isLoading && <Spinner />}
      <div className="login-page">
        <div className="form">
          <form onSubmit={submit}>
            <div className="textarea">
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={(e) => setuser({ ...user, username: e.target.value })}
                autoComplete="off"
                required
              />
              <label htmlFor="username" className="label-name">
                <span className="content-name">Kullanıcı Adı</span>
              </label>
            </div>
            <div className="textarea">
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={(e) => setuser({ ...user, password: e.target.value })}
                autoComplete="off"
                required
              />
              <label htmlFor="password" className="label-name">
                <span className="content-name">Şifre</span>
              </label>
            </div>
            <div className="remember-me">
              <input
                type="checkbox"
                name="checkbox"
                checked={checked}
                onChange={() => setchecked(prevState => !prevState)}
              />
              <p>Beni hatırla</p>
            </div>
            <button type="submit" className="btn-login fullwidth">
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
