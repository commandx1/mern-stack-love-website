import React, { useEffect, useState, Fragment } from "react";
import EditablePoems from "../components/editables";
import useHttpClient from "../../../../../hooks/useHttpClient";
import Spinner from "../../../../spinner/Spinner";

const EditPoems = () => {
  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();
  const [fetchedPoems, setfetchedPoems] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [message, setmessage] = useState({
    type: "",
    content: "",
  });

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/poems`
        );
        setfetchedPoems(responseData.poems);
      } catch (err) {}
    };
    fetchPoems();
  }, [sendRequest]);

  const onClose = () => setShowSnackbar(false);

  const updateState = (res) => {
    const updated = fetchedPoems.map((f) =>
      f._id === res.poem._id
        ? {
            ...f,
            title: res.poem.title,
            content: res.poem.content,
            imageUrl: res.poem.imageUrl,
          }
        : f
    );
    setfetchedPoems(updated);
  };

  const removeImageFromElement = (poemId) => {
    const updatedPoems = fetchedPoems.map((p) =>
      p._id === poemId ? { ...p, imageUrl: "" } : p
    );
    setfetchedPoems(updatedPoems);
  };

  const addImageToMemory = (res) => {
    const updatedPoems = fetchedPoems.map((p) =>
      p._id === res.poem._id ? { ...p, imageUrl: res.poem.imageUrl } : p
    );
    setfetchedPoems(updatedPoems);
  };

  return (
    <Fragment>
      {isLoading && <Spinner />}
      <EditablePoems
        editorType="poem"
        addImageToMemory={addImageToMemory}
        removeImageFromElement={removeImageFromElement}
        updateState={updateState}
        onClose={onClose}
        showSnackbar={showSnackbar}
        setShowSnackbar={setShowSnackbar}
        message={message.content}
        messageType={message.type}
        setmessage={setmessage}
        fetchedThings={fetchedPoems}
        setfetchedThings={setfetchedPoems}
        deletingThing="poems"
        errorText="Hiç şiir yok 😢"
      />
    </Fragment>
  );
};

export default EditPoems;
