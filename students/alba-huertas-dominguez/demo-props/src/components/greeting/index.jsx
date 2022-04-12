import './stylesheet.css'



function Greeting(props){
    return(
<>
    <h1>Hola {props.name}</h1>
{ props.extended? <p>Bienvenido a estas clases de react alucinantes</p>:''}
    </>
    )

    }

export default Greeting