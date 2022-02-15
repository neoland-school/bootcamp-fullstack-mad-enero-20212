
// 7. Crea una pagina web de tipo portafolio  donde haya un componente llamado Nav, un componente para  el contenido principal llamado Main, un componete para un SideBar y un componente para el Footer,  el fonts deberá ser Open Sans,  ejemplo: (editado) 

// 1- Crear una app en react llamada demo-props
// 2- Crear un componente llamado greeting que pinte un h1 con el texto hola
// 3- Mostrar ese componente en el App.js
// 4- Vamos a conseguir que el saludo del componente greeting sea variable. Para ello debemos permitir que el componente reciba una prop llamada name con el nombre a saludar. Añadir en el H1 el nombre para que el componente diga Hola Alex  si la prop tiene el valor Alex. Crear en el App.js varios componentes Greeting con diferentes nombres a saludar.
// 5. Crear una variable Array de strings en el componente App.js con los nombres de los alumnos y profesores de clase. Pintar en el App.js un componente por cada elemento del array saludando a cada alumno y profesor.
// 6. Vamos a generar un renderizado condicional. En el componente de greeting vamos a añadir otra prop booleana llamada extended que si está a true, pintaremos un saludo extendido y sino un saludo simple. Un saludo extendido implica que además del h1, tendremos un p cuyo texto será Bienvenido a estas clases de react alucinantes.
// 7. Modificar el listado de saludos del punto 5 para que los nombres que tengan una longitud menor a 6 caracteres pinte el saludo extendido
import './App.css';
import Greeting from './components/greeting';


function App() {
  let arrMajetes = [ 'kokitoPesao', 'Alex', 'Alba', 'Sergio,', 'Hector','cristina', 'andrea' ]

  return (
    <>
      {arrMajetes.map(c,i=><Greeting  extends={i} name={c}></Greeting>)}

    </>

  );
}

export default App;
