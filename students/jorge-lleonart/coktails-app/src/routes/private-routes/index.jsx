import { Navigate } from "react-router-dom"
import {useContent } from "react";


function PrivateRoute({children}){ //deconstruyo el objeto para obtener el chidren del component
    // en este compoenente quiero que si no estamos logados, navegamos al login. Si estamos logados pintamos al children.
    // ¿como pinto el children?
    
        const user = localStorage.getItem('user'); //obtego el local Storage 
        const location = useLocation(); //obtenemos el objeto navegacion del BOM para pasarselo al componente Navigate
    
        if (user===null){ //Si el usuario no está logado redirijo al login
            return <Navigate to='/login' state={{from: location}} replace/>; // es un compoennte DOM que realiza navegación de manera automática
        }
    
        //¿Como pinto el children?
        return children; // esto devuelve el DOM que se haya puesto como children al usarse este componente
    }
    
export default PrivateRoute;