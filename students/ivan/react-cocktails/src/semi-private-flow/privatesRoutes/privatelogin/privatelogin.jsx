import { Navigate, useLocation } from "react-router-dom";

function PrivateLogin({ children }) {
  const location = useLocation();
  const email = localStorage.getItem("email");
  console.log(email);
  console.log(location);
  if (!email || email === null) {
    return (
      <Navigate
        to={`/login${location.search}`}
        state={{ form: location }}
        replace
      ></Navigate>
    );
  }
  return children;
}

export default PrivateLogin;
