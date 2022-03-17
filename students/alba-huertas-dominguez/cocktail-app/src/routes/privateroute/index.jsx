import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"

function PrivateRoute({children}){ 

  const age = localStorage.getItem('acceptance');
  const location =useLocation();
  if(age === null || !age){
     return <Navigate to={`/accept?redirect=${location.pathname+location.search}`} state={{from:location}} replace></Navigate>

   }
   return children

}

export default PrivateRoute