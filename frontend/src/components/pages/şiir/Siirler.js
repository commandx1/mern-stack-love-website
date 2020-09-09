import React, { useContext, useState, Fragment, useEffect } from "react";
import { generalContext } from "../../../WRAPPERS/Context/myContext";
import "./siirler.css";
import Container from "../../Container/container";
import PageTitle from "../../Container/PageTitle";
import useHttpClient from "../../../hooks/useHttpClient";
import ReactHtmlParser from "react-html-parser";

const Siirler = () => {
  const general = useContext(generalContext);
  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();
  const fetchedPoems = general.globalState.poems;

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/poems`
        );
        general.functions.poem.fetchPoems(responseData.poems);
      } catch (err) {}
    };
    fetchPoems();
  }, [sendRequest]);

  return (
    <Fragment>
      <PageTitle>Şiirlerimizz</PageTitle>
      <Container>
        <div id="siirler">
          {fetchedPoems.map((siir) => (
            <div key={siir._id} className="siir-card">
              {siir.imageUrl ? (
                <div
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_ASSET_URL}/${siir.imageUrl})`,
                    width: "100%",
                    height: "200px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    marginBottom: "1.5rem"
                  }}
                />
              ) : null}
              <h3>{siir.title}</h3>
              {ReactHtmlParser(siir.content)}
            </div>
          ))}
        </div>
      </Container>
    </Fragment>
  );
};

export default Siirler;
