import React, { useState, createContext } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [isEnter, setIsEnter] = useState(false);

  // handle mouse enter
  const handleMouseEnter = () => {
    setIsEnter(true);
  };
  // handle leave
  const handleMouseLeave = () => {
    setIsEnter(false);
  };

  const values = {
    isEnter,
    handleMouseEnter,
    handleMouseLeave,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default ContextProvider;
