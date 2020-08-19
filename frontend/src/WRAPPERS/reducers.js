import {
  ADD_MEMORY,
  REMOVE_MEMORY,
  UPDATE_MEMORY,
  ADD_ABOUT_ME,
  ADD_ABOUT_HER,
  FETCH_ABOUT_HER,
  FETCH_ABOUT_ME,
  ADD_POEM,
  ADD_TELLTALE,
  FETCH_MEMORIES,
  FETCH_POEMS,
  FETCH_TELLTALES
} from "./types";




const fetchTelltales = (telltales, state) => {
  return {
    ...state,
    telltales: telltales,
  };
};


const fetchMemories = (memories, state) => {
  return {
    ...state,
    memories: memories,
  };
};
const fetchPoems = (poems, state) => {
  return {
    ...state,
    poems,
  };
};
const fetchAboutMe = (aboutMe, state) => {
  return {
    ...state,
    aboutMe,
  };
};
const fetchAboutHer = (aboutHer, state) => {
  return {
    ...state,
    aboutHer,
  };
};

const addMemory = (newMemory, state) => {
  const updatedMemories = [
    {
      _id: newMemory._id,
      title: newMemory.title,
      content: newMemory.content,
      date: newMemory.date,
      update: newMemory.update,
      username: newMemory.username,
      imageUrl: newMemory.imageUrl
    },
    ...state.memories,
  ];
  return {
    ...state,
    memories: updatedMemories,
  };
};

const addAboutMe = (newAbout, state) => {
  const updatedAboutMe = [
    ...state.aboutMe,
    {
      title: newAbout.title,
      content: newAbout.content
    }
  ]
  return {
    ...state,
    aboutMe: updatedAboutMe,
  };
};

const addAboutHer = (newAbout, state) => {
  const updatedAboutHer = [
    ...state.aboutHer,
    {
      title: newAbout.title,
      content: newAbout.content
    }
  ]
  return {
    ...state,
    aboutHer: updatedAboutHer,
  };
};
const addPoem = (newPoem, state) => {
  const updatedPoems = [
    ...state.poems,
    {
      id: Math.random(),
      title: newPoem.title,
      content: newPoem.content,
      imageUrl: newPoem.imageUrl
    },
  ];
  return {
    ...state,
    poems: updatedPoems,
  };
};

const addTelltale = (newTelltale, state) => {
  const updatedTelltales = [
    ...state.telltales,
    {
      _id: newTelltale._id,
      title: newTelltale.title,
      content: newTelltale.content,
      imageUrl: newTelltale.imageUrl && newTelltale.imageUrl
    },
  ];
  return {
    ...state,
    telltales: updatedTelltales,
  };
};

const removeMemory = (memoryID, state) => {
  const updatedMemories = state.memories.filter((m) => m._id !== memoryID);
  return { ...state, memories: updatedMemories };
};

const updateMemory = (memory, state) => {
  let memories = state.memories.filter((m) => m._id !== memory._id);
  let updatedMemories = memories.unshift(memory);
  updatedMemories = memories.map((m) =>
    m._id === memory._id
      ? {
          title: memory.title,
          content: memory.content,
          update: memory.update,
          imageUrl: memory.imageUrl,
          ...memory,
        }
      : m
  );
  return {
    ...state,
    memories: updatedMemories,
  };
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case FETCH_MEMORIES:
      return fetchMemories(action.payload, state);
    case FETCH_ABOUT_ME:
      return fetchAboutMe(action.payload, state);
    case FETCH_ABOUT_HER:
      return fetchAboutHer(action.payload, state);
    case ADD_MEMORY:
      return addMemory(action.payload, state);
    case REMOVE_MEMORY:
      return removeMemory(action.payload, state);
    case UPDATE_MEMORY:
      return updateMemory(action.payload, state);
    case ADD_ABOUT_ME:
      return addAboutMe(action.payload, state);
    case ADD_ABOUT_HER:
      return addAboutHer(action.payload, state);
    case FETCH_POEMS:
      return fetchPoems(action.payload, state);
    case ADD_POEM:
      return addPoem(action.payload, state);
    case ADD_TELLTALE:
      return addTelltale(action.payload, state);
    case FETCH_TELLTALES:
      return fetchTelltales(action.payload, state);
    default:
      return state;
  }
};
