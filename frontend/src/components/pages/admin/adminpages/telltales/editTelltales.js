import React, { useEffect, useState, Fragment } from "react";
import EditableTelltales from "../components/editables";
import useHttpClient from "../../../../../hooks/useHttpClient";
import Spinner from "../../../../spinner/Spinner";
import { REACT_APP_BACKEND_URL, REACT_APP_ASSET_URL} from '../../../../../env_variables'

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
          `${REACT_APP_BACKEND_URL}/telltales`
        );
        setfetchedTelltales(responseData.telltales);
      } catch (err) {}
    };
    fetchTelltales();
  }, [sendRequest]);

  const onClose = () => setShowSnackbar(false);

  return (
    <Fragment>
      {isLoading && <Spinner />}
      <EditableTelltales
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