import React, { useEffect, useState, Fragment } from "react";
import EditableTelltales from "../components/editables";
import useHttpClient from "../../../../../hooks/useHttpClient";
import Spinner from "../../../../spinner/Spinner";

const EditTelltales = () => {
  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();
  const [fetchedTelltales, setfetchedTelltales] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [message, setmessage] = useState({
    type: "",
    content: "",
  });

  useEffect(() => {
    const fetchTelltales = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/telltales`
        );
        setfetchedTelltales(responseData.telltales);
      } catch (err) {}
    };
    fetchTelltales();
  }, [sendRequest]);

  const onClose = () => setShowSnackbar(false);

  const removeImageFromElement = (telltaleId) => {
    const updatedTelltales = fetchedTelltales.map((p) =>
      p._id === telltaleId ? { ...p, imageUrl: "" } : p
    );
    setfetchedTelltales(updatedTelltales);
  };

  const addImageToMemory = (res) => {
    const updatedTelltales = fetchedTelltales.map((p) =>
      p._id === res.telltale._id ? { ...p, imageUrl: res.telltale.imageUrl } : p
    );
    setfetchedTelltales(updatedTelltales);
  };

  return (
    <Fragment>
      {isLoading && <Spinner />}
      <EditableTelltales
        removeImageFromElement={removeImageFromElement}
        addImageToMemory={addImageToMemory}
        onClose={onClose}
        showSnackbar={showSnackbar}
        setShowSnackbar={setShowSnackbar}
        message={message.content}
        messageType={message.type}
        setmessage={setmessage}
        fetchedThings={fetchedTelltales}
        setfetchedThings={setfetchedTelltales}
        deletingThing="telltales"
        errorText="Hiç masal yok 😢"
      />
    </Fragment>
  );
};

export default EditTelltales;
