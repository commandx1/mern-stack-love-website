import { createContext } from 'react'

export const generalContext = createContext({
  globalState:{},
  functions:{},
  isMuted: false,
  muteHandler: () => {},
  soundHandler: () => {}
});

export const authContext = createContext({
    isLoggedIn: false,
    userId: null,
    name: null,
    login: () => {},
    logout: () => {},
  });


