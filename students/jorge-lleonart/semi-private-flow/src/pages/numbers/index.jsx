import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Numbers(){
    const navigate = useNavigate();
    const multiplicacion = e=>{    
        e.preventDefault()
        localStorage.setItem('op1', e.target.numero1.value)
        localStorage.setItem('op2', e.target.numero2.value)
        navigate('/login')
    }

    return(
        <form onSubmit={multiplicacion}>
            <input type="number" name="numero1"/>
            <input type="number" name="numero2"/>

            <button type="submit">Enviar</button>

        </form>
    )
}

export default Numbers;