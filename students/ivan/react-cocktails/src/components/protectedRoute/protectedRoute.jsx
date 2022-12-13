import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexto/contexto";

function ProtectedRoute({ children }) {
  const [auth] = useContext(AuthContext);
  console.log(auth);
  if (!auth) {
    return <Navigate to="/"></Navigate>;
  }

  return children;
}

export default ProtectedRoute;
