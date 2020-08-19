import React from "react";
import "./notfound.css";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import {NavLink} from "react-router-dom"

const NotFound = () => {
  return (
    <div id="not-found">
      <div id="hata-mesaj">
        <h3>
          SAYFA BULUNAMADI... <SentimentVeryDissatisfiedIcon />
        </h3>
        <p>Hata Kodu: 404</p>
        <p>Lütfen adresi kontrol edip tekrar deneyiniz.</p>
        <p>Anasayfaya yönlendirilmek için <NavLink to="/">tıklayınız</NavLink></p>
      </div>
    </div>
  );
};

export default NotFound;
