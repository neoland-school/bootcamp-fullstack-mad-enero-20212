import { useNavigate, useSearchParams } from "react-router-dom";




function Accept (){
    const navigate = useNavigate();
    const [searchparams] = useSearchParams();


    const condition = ()=>{

        //guardar la info en el local y redirigir a la pagina por defecto. 
        localStorage.setItem('acceptance',true); // lo de aceptance me lo invento. es la clave para poder coger la informacion
        navigate( searchparams.get('redirect')??'/');// lo de redirect es el nombre que le pongo yo, clave, para que el redirija, en la pagina privada donde yo quiera, con use location


    }
  



    return (
    <section>
    
    <h1>+18</h1>
    <button onClick={condition}>aceptar mayor de edad</button>
    </section>
    )
}


export default Accept