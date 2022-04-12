import {Navigate} from 'react-router-dom';

function ProtectedRoute({children}){
    const isOverAge = localStorage.getItem('age'); 
    
    if(isOverAge<18){ 
        return <Navigate to={'/user-info'} replace></Navigate>
    }

    return children; 
}



export default ProtectedRoute;