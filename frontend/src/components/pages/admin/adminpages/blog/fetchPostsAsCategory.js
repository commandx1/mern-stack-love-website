import React, { useEffect, useState, Fragment, useContext } from "react";
import EditablePost from "../components/editables";
import useHttpClient from "../../../../../hooks/useHttpClient";
import Spinner from "../../../../spinner/Spinner";
import { authContext } from "../../../../../WRAPPERS/Context/myContext";

const FetchPostsAsCategory = (props) => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const auth = useContext(authContext);
  const [message, setmessage] = useState({
    type: "",
    content: "",
  });
  const [state, setState] = useState([]);

  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/blog/category/${props.categoryId}/user/${auth.userId}/`
        );
        setState(responseData.posts);
      } catch (err) {}
    };
    fetchPosts();
  }, [sendRequest]);

  const onClose = () => setShowSnackbar(false);

  const updateState = (res) => {
    const updatedState = state.map((el) =>
      el._id === res.post._id
        ? {
            ...el,
            title: res.post.title,
            content: res.post.content,
            imageUrl: res.post.imageUrl,
          }
        : el
    );
    setState(updatedState);
    state !== updatedState && console.log("eşit degil");
  };

  const removeImageFromElement = (postId) => {
    const updatedState = state.map((p) =>
      p._id === postId ? { ...p, imageUrl: "" } : p
    );
    setState(updatedState);
  };

  const addImageToMemory = (res) => {
    const updatedState = state.map((p) =>
      p._id === res.post._id ? { ...p, imageUrl: res.post.imageUrl } : p
    );
    setState(updatedState);
  };

  return (
    <div>
      {isLoading && <Spinner />}
      <EditablePost
        addImageToMemory={addImageToMemory}
        removeImageFromElement={removeImageFromElement}
        goTo="/Blog/postId"
        updateState={updateState}
        onClose={onClose}
        showSnackbar={showSnackbar}
        setShowSnackbar={setShowSnackbar}
        message={message.content}
        messageType={message.type}
        setmessage={setmessage}
        fetchedThings={state}
        setfetchedThings={setState}
        deletingThing="blog"
        errorText={`${props.title} kategorisine ait hiç yazınız yok 😢`}
      />
    </div>
  );
};

export default FetchPostsAsCategory;
