import React, { useState } from "react";
import useHttpClient from "../../../../../hooks/useHttpClient";
import { NavLink } from "react-router-dom";
import { useForm } from "../../../../../hooks/useForm";
import Snackbar from "../../../../snackbar/Snackbar";
import InsertImage from "./insertImage";
import { REACT_APP_BACKEND_URL, REACT_APP_ASSET_URL} from '../../../../../env_variables'

const InserPhotoGallery = () => {
  const [message, setmessage] = useState("");
  const [openSnacbar, setopenSnacbar] = useState(false);
  const [showLink, setshowLink] = useState(false);

  const [formState, inputHandler, setFormData] = useForm(
    {
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", formState.inputs.image.value);
      const responseData = await sendRequest(
        REACT_APP_BACKEND_URL + "/upload",
        "POST",
        formData
      );
      setmessage(responseData.message);
      setopenSnacbar(true);
      setshowLink(true);
    } catch (err) {}
  };
  return (
    <div>
      <Snackbar
        message={message}
        open={openSnacbar}
        onClose={() => setopenSnacbar(false)}
        alert="success"
      />
      <InsertImage
        submit={submit}
        formState={formState}
        inputHandler={inputHandler}
      />
      {showLink ? (
        <NavLink
          style={{ float: "right", color: "black", fontSize: "1.3rem", marginTop:".5rem" }}
          to="/Galeri"
        >
          Galeriye gitmek için tıklayabilirsiniz.
        </NavLink>
      ) : null}
    </div>
  );
};

export default InserPhotoGallery;
