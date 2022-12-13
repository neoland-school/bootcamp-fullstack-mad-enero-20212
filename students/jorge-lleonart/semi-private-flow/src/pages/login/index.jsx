import { useNavigate } from "react-router-dom";


function Login(){
    let navigate = useNavigate()
    let handler = e =>{
        const op1 = localStorage.getItem('op1'); 
        const op2 = localStorage.getItem('op2'); 
        e.preventDefault()
        localStorage.setItem('email', e.target.email.value)
        navigate(`/multi?op1=${op1}&op2=${op2}`)
        
    }
    return(
        <form onSubmit={handler}>
            <input type="text" />
            <input type="email" name="email"/>

            <button type="submit">LogIn</button>

        </form>
        
    )
}

export default Login;