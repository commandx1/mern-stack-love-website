import React, { useContext, useState, Fragment, useEffect } from "react";
import { generalContext } from "../../WRAPPERS/Context/myContext";
import useHttpClient from "../../hooks/useHttpClient";
import "./memories.css";
import Container from "../Container/container";
import PageTitle from "../Container/PageTitle";
import MemoryMain from "./MemoryMain";
import NewMemoryForm from "./NewMemoryForm";
import UpdateMemory from "./updateMemoryForm";
import { Route, useRouteMatch, NavLink } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import Snackbar from "../snackbar/Snackbar";
import ErrorModal from "../../components/error/ErrorModal";

const Memories = () => {
  const route = useRouteMatch();
  const general = useContext(generalContext);
  const [openModal, setopenModal] = useState(false);
  const [open2, setopen2] = useState(false);
  const [message, setmessage] = useState({
    type: "",
    content: "",
  });
  const [showSnackbar, setShowSnackbar] = useState(false);

  const fetchedMemories = general.globalState.memories;

  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();

  useEffect(() => setopenModal(sessionStorage.getItem("memory-modal")));
  useEffect(() => {
    const fetchMemories = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/memories`
        );
        general.functions.memory.fetchMemories(responseData.memories);
      } catch (err) {}
    };
    fetchMemories();
  }, [sendRequest]);

  return (
    <Fragment>
       <PageTitle>Anılarımızz</PageTitle>
      <Snackbar
        open={showSnackbar}
        onClose={() => setShowSnackbar(false)}
        message={message.content}
        alert={message.type}
      />
      <ErrorModal open={open} handleClose={clearError} error={error} />
      {isLoading && <Spinner />}
      <Route path={`${route.path}/yeni-anı-ekle`}>
        <NewMemoryForm open={openModal} setOpenModal={setopenModal} />
      </Route>

      {fetchedMemories.map((memory) => (
        <Route key={memory._id} path={`${route.path}/${memory.title}`}>
          <UpdateMemory
            open={open2}
            setmessage={setmessage}
            setShowSnackbar={setShowSnackbar}
            setopen2={setopen2}
            m={memory}
            memories={fetchedMemories}
          />
        </Route>
      ))}
      <Container>
        <div className="new-memory">
          Yeni anı eklemek için{" "}
          <span
            onClick={() => {
              sessionStorage.setItem("memory-modal", true);
              setopenModal(true);
            }}
          >
            <NavLink to={`${route.path}/yeni-anı-ekle`}>tıklayın</NavLink>
          </span>
        </div>

        <div id="memories">
          {fetchedMemories.map((memory) => (
            <MemoryMain
              setmessage={setmessage}
              setShowSnackbar={setShowSnackbar}
              key={memory._id}
              memory={memory}
              setopen2={setopen2}
            />
          ))}
        </div>
      </Container>
    </Fragment>
  );
};

export default Memories;
