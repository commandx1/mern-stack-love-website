import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import "./telltales.css";
import { NavLink } from "react-router-dom";
import useHttpClient from '../../../../hooks/useHttpClient'

const MasalInfo = () => {
  const {error, open, clearError, sendRequest, isLoading} =useHttpClient()
  const [fetchedData, setfetchedData] = useState([])

  useEffect(() => {
    const fetchThree = async() => {
      try {
        const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/telltales/getfirstthree')
        setfetchedData(responseData.telltales)
      } catch (error) {}
    }
    fetchThree()
  }, [])
  return (
    !isLoading && fetchedData.length > 0 &&
    <div id="masal-info" data-aos="fade-up">
      <div id="homepage-masal-title">
        <p>.........</p>
        <h2>MASALLAR DiYARI</h2>
        <p>.........</p>
      </div>
      <div className="homepage-masallar">
        {fetchedData.map((m) => (
          <div key={m._id}>
            <p>{m.title}</p>
            <img src={`${process.env.REACT_APP_ASSET_URL}/${m.imageUrl}`} alt={m.title} />
            <NavLink to={`/Masallar/${m.title}`}>
              Masalı okumak için tıklayın...
            </NavLink>
          </div>
        ))}
      </div>
      <NavLink id="masallar-btn" to="/Masallar">
        Masallar sayfasına ilerle
      </NavLink>
    </div>
  );
};

export default MasalInfo;
