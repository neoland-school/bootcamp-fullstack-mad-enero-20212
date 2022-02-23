import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const userData = useState({});
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}

export default UserContext;

export { UserProvider };
