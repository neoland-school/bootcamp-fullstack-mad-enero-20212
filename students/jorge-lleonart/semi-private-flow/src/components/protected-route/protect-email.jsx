import {Navigate} from 'react-router-dom';

function ProtectedEmail({children}){
    const email = localStorage.getItem('email'); 
    
    if(email===null){ 
        return <Navigate to={'/login'} replace></Navigate>
    }

    return children; 
}



export default ProtectedEmail;