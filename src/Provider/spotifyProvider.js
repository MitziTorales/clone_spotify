import React, {createContext, useContext, useReducer} from "react";

export const SpotifyContext = createContext();

export const SpotifyLayer = ({ reducer, initialState, children }) => (
  <SpotifyContext.Provider value={useReducer(reducer, initialState)}>
      {children}
  </SpotifyContext.Provider>  
);

export const useSpotifyLayer = () => useContext(SpotifyContext);
