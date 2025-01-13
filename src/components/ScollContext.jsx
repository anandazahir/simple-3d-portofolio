import React, { createContext, useContext } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children, scroll }) => {
  return (
    <ScrollContext.Provider value={scroll}>{children}</ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};
