import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/form';
import CardComponent from './components/card';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavigateBar from './components/nav';
import Listado from './components/home';

// Para el Backend nos debemos crear un proyecto en express js el cual llamaremos user api el cual estara levantado el puerto 4000.
// Nuestra app almacenará la información en un fichero llamado users.json, la información tendrá la siguiente estructura {id:1, name:xxx, lastname:xxx, username:xxx, country:xxx, img:xxx}
// Nuestro metodo Get con el path /users nos debe devolver la información de todos los usuarios.
// Debemos tener un metodo Get que nos devuelva la informacion de un solo usuario o un 404 en caso de q no exista, para eso debemos valernos de los params.
// Nuestro metodo Post nos debe permitir añadir un usuario a nuestro fichero users.json y devuelva un status 201.
// Tendremos un metodo Delete que nos debe permitir eliminar de nuestro fichero un usuario e enviara un status 204 y un metodo Patch que nos permita actualizar la informacion de algun usuario.
// Vamos a crear una App en React que para probar nuestro backend.
// Para ello debemos crearnos una app react que mostrara información de usuarios,  para la maquetación usaremos React-Boostrap ,esta tendrá la siguiente estructura:
// Una pagina Listado  la cual  mostrara en Cards el  username y el pais de todos los usuarios o no mostrara nada si no existieran aun, también tendrá una navegación hacia la pagina  de registro.
// Una pagina para darse de alta  la cual será un formulario donde introduciremos nuestro nombre, apellido, nombre de usuario, email , una url de imagen y el pais.
// Una pagina de details donde se mostrara toda la información incluida la imagen del usuario, a esta accederemos a darle click a la card.
// Nuestra Card del Listado deben tener dos botones uno de delete y otro de update, en el de delete podremos borrar al usuario de nuestro backend y en el de update debe navegar hasta nuestro formulario de registro donde veremos  los datos de ese usuario en los input y actualizaremos los datos.

function App() {
  return (
    <BrowserRouter>
    <NavigateBar></NavigateBar>
      <Routes>
        <Route></Route>
        <Route path='/' element={<Listado/>}></Route>
        <Route path='form' element={<Formulario/>}></Route>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
