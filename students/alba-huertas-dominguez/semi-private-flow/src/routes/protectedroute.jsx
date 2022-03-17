import { Navigate,useLocation } from "react-router-dom"
import React from "react";


function ProtectedRoute({children}){ 
    const location = useLocation();
    console.log(location)
const email=localStorage.getItem('email')

  if(email === null ){
     return <Navigate to={`/login${location.search}`}  replace></Navigate>


     
  }
 
   return children

}

export default ProtectedRoute