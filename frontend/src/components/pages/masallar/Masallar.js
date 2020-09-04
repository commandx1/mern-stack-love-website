import React, { useContext, useEffect } from "react";
import Container from "../../Container/container";
import { generalContext } from "../../../WRAPPERS/Context/myContext";
import "./masallar.css";
import useHttpClient from '../../../hooks/useHttpClient'
import PageTitle from "../../Container/PageTitle";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import parser from "react-html-parser";

const Masallar = () => {
  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();
  const general = useContext(generalContext);
  const params = useRouteMatch();
  const masallar = general.globalState.telltales;


  useEffect(() => {
    const fetchTelltales = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/telltales`
        );
        general.functions.telltale.fetchTelltales(responseData.telltales);
      } catch (err) {}
    };
    fetchTelltales();
  }, []);

  return (
    <>
      <PageTitle>Masallar</PageTitle>
      <Container>
        <div className="masallar-main">
          <div className="masallar-titles">
            {masallar.slice(0, 10).map((m) => (
              <div key={m._id} className="masallar-title">
                <NavLink
                  to={`${params.path}/${m._id}/${m.title}`}
                >
                  {m.title}
                </NavLink>
              </div>
            ))}
          </div>
          <div className="masallar-titles">
            {masallar.slice(10, 20).map((m) => (
              <div key={m._id} className="masallar-title">
                <NavLink to={`${params.path}/${m._id}/${m.title}`}>
                  {m.title}
                </NavLink>
              </div>
            ))}
          </div>

          <div className="masallar-titles">
            {masallar.slice(20, 30).map((m) => (
              <div key={m._id} className="masallar-title">
                <NavLink to={`${params.path}/${m._id}/${m.title}`}>
                  {m.title}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <div className="masallar-hr">
          <hr />
        </div>

        {masallar.map((m) => (
          <Route key={m._id} path={`${params.path}/${m._id}/${m.title}`}>
            <div>
              <h3 className="masal-title">{m.title}</h3>
              <img src={`${process.env.REACT_APP_ASSET_URL}/${m.imageUrl}`} alt={m.title} />{" "}
              <div className="masallar-content">{parser(m.content)}</div>
            </div>
          </Route>
        ))}
      </Container>
    </>
  );
};

export default Masallar;
