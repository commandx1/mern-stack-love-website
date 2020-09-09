import { createContext } from "react";

export const generalContext = createContext({
  globalState: {},
  functions: {}
});

export const authContext = createContext({
  isLoggedIn: false,
  userId: null,
  name: null,
  login: (value1, value2) => {},
  logout: () => {},
});
