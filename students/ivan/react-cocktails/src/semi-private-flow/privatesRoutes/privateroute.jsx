import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const location = useLocation();
  const year = parseInt(new Date().getFullYear());
  console.log(year);
  const age = parseInt(localStorage.getItem("bornYear"));
  console.log(age);
  if (age + 18 > year || !age) {
    return (
      <Navigate to="/userdata" state={{ form: location }} replace></Navigate>
    );
  }
  return children;
}

export default PrivateRoute;
