import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const boolean = useState(false);
  return (
    <AuthContext.Provider value={boolean}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;

export { AuthProvider };
