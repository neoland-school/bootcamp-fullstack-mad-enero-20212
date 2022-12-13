import { createContext, useState } from "react";

const NumberContext = createContext();

function NumberProvider({ children }) {
  const number = useState(0);
  return (
    <NumberContext.Provider value={number}>{children}</NumberContext.Provider>
  );
}

export default NumberContext;

export { NumberProvider };
