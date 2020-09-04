import React, { useReducer, useEffect, useState } from "react";
import { generalContext } from "./Context/myContext";
import { datas } from "./Datas/GlobalData";
import { appReducer } from "./reducers";
import {
  ADD_MEMORY,
  REMOVE_MEMORY,
  UPDATE_MEMORY,
  ADD_ABOUT_ME,
  ADD_ABOUT_HER,
  FETCH_ABOUT_ME,
  FETCH_ABOUT_HER,
  ADD_POEM,
  ADD_TELLTALE,
  FETCH_MEMORIES,
  FETCH_POEMS,
  FETCH_TELLTALES,
  REMOVE_IMAGE_FROM_MEMORY,
  ADD_IMAGE_TO_MEMORY
} from "./types";
import video from "../assets/My Movie.mp4";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const PageContent = (props) => {
  const match = useMediaQuery("(max-width:500px)");
  const [isMuted, setisMuted] = useState(true)

  const muteHandler = () => setisMuted(true)
  const soundHandler = () => setisMuted(false)

  const [globalState, dispatch] = useReducer(appReducer, datas);

  const functions = {
    memory: {
      fetchMemories: (memories) => {
        dispatch({
          type: FETCH_MEMORIES,
          payload: memories,
        });
      },
      addMemory: (newMemory) => {
        dispatch({
          type: ADD_MEMORY,
          payload: newMemory,
        });
      },
      removeMemory: (memoryID) => {
        dispatch({
          type: REMOVE_MEMORY,
          payload: memoryID,
        });
      },
      updateMemory: (memory) => {
        dispatch({
          type: UPDATE_MEMORY,
          payload: memory,
        });
      },
      removeImageFromMemory: (memoryID) => {
        dispatch({
          type: REMOVE_IMAGE_FROM_MEMORY,
          payload: memoryID,
        });
      },
      addImageToMemory: (memory) => {
        dispatch({
          type: ADD_IMAGE_TO_MEMORY,
          payload: memory,
        });
      },
    },
    about: {
      fetchAboutMe: (aboutMe) => {
        dispatch({
          type: FETCH_ABOUT_ME,
          payload: aboutMe
        })
      },
      fetchAboutHer: (aboutHer) => {
        dispatch({
          type: FETCH_ABOUT_HER,
          payload: aboutHer
        })
      },
      addAboutMe: (newAbout) => {
        dispatch({
          type: ADD_ABOUT_ME,
          payload: newAbout,
        });
      },
      addAboutHer: (newAbout) => {
        dispatch({
          type: ADD_ABOUT_HER,
          payload: newAbout,
        });
      },
    },
    poem: {
      fetchPoems: (poems) => {
        dispatch({
          type: FETCH_POEMS,
          payload: poems,
        });
      },
      addPoem: (newPoem) => {
        dispatch({
          type: ADD_POEM,
          payload: newPoem,
        });
      },
    },
    telltale: {
      fetchTelltales: (telltales) => {
        dispatch({
          type: FETCH_TELLTALES,
          payload: telltales
        })
      },
      addTelltale: (newTelltale) => {
        dispatch({
          type: ADD_TELLTALE,
          payload: newTelltale,
        });
      },
    },
  };

  return (
    <generalContext.Provider value={{ globalState: globalState, functions, isMuted, muteHandler, soundHandler }}>
      {/* <video
        style={{
          zIndex: -1,
          minWidth: "100vw",
          position: "fixed",
          minHeight: "100%",
          transform: match && "translateX(-30%)",
        }}
        src={video}
        loop
        autoPlay
        muted = {isMuted}
      /> */}
      {props.children}
    </generalContext.Provider>
  );
};

export default PageContent;
