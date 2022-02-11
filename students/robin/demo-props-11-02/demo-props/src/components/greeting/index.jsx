
function Greeting(name) {
    return (

        <div>
            <h1>Hola {name.saludar}</h1>
            {name.saludar.length > 6 && name.extend === true ? <p>Bienvenido a estas clases de react alucinantes.</p>
                                                             : <p>No eres bienvenido porque tu nombre es corto jaja </p> }
        </div>

    )
}

export default Greeting