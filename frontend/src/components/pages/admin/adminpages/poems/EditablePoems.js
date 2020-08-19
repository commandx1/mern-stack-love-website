import React, { useEffect, useState, Fragment } from "react";
import EditablePoems from "../components/editables";
import useHttpClient from "../../../../../hooks/useHttpClient";
import Spinner from "../../../../spinner/Spinner";
import { REACT_APP_BACKEND_URL, REACT_APP_ASSET_URL} from '../../../../../env_variables'

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
          `${REACT_APP_BACKEND_URL}/poems`
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
    setfetchedPoems(updated)
  };

  return (
    <Fragment>
      {isLoading && <Spinner />}
      <EditablePoems
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
