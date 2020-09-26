import React, { useEffect, useState } from "react";
import "./telltales.css";
import { NavLink } from "react-router-dom";
import useHttpClient from "../../../../hooks/useHttpClient";
import TelltaleHeading from "../components/telltaleHeading";

const MasalInfo = () => {
  const { sendRequest, isLoading } = useHttpClient();
  const [fetchedData, setfetchedData] = useState([]);

  useEffect(() => {
    const fetchThree = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/telltales/getfirstthree"
        );
        setfetchedData(responseData.telltales);
      } catch (error) {}
    };
    fetchThree();
  }, []);
  return (
    <>
      <TelltaleHeading />
      {!isLoading && fetchedData.length > 0 && (
        <div id="masal-info">
          <div className="homepage-masallar" data-aos="fade-up">
            {fetchedData.map((m) => (
              <div key={m._id}>
                <p>{m.title}</p>
                <img
                  src={`${process.env.REACT_APP_ASSET_URL}/${m.imageUrl}`}
                  alt={m.title}
                />
                <NavLink to={`/Masallar/${m.id}/${m.title}`}>
                  Masalı okumak için tıklayın...
                </NavLink>
              </div>
            ))}
          </div>
          <NavLink className="neon-button" to="/Masallar">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Masallar sayfasına ilerle
          </NavLink>
        </div>
      )}
    </>
  );
};

export default MasalInfo;
