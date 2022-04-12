
import React from 'react';
import './App.css';
import Contenido from './components/contenido/indexcontenido';
import HelloWorld from './components/hello-world';
import Countries from './components/country/country'

let countries = [
  {
    name_en: "Afghanistan",
    name_es: "Afganistán",
    dial_code: "+93",
    code: "AF",
    img: "https://www.despertaferro-ediciones.com/wp-content/uploads/2021/08/7408738172_4442b9be54_o.jpg"
  },
  {
    code: "DZ",
    dial_code: "+213",
    name_en: "Algeria",
    name_es: "Argelia",
    img: "https://www.iflr.com/Media/images/iflr/11-ahmed-data-images/Matouk%20Algeria.jpeg"
  },
  {
    code: "AS",
    dial_code: "+1684",
    name_en: "AmericanSamoa",
    name_es: "Samoa Americana",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e7/AmericanSamoa.jpg"
  },
  {
    code: "AD",
    dial_code: "+376",
    name_en: "Andorra",
    name_es: "Andorra",
    img: "https://estaticos-cdn.sport.es/clip/401ebd76-4d64-44b2-b2f2-f780a22c997d_alta-libre-aspect-ratio_default_0.jpg"
  },
  {
    code: "AO",
    dial_code: "+244",
    name_en: "Angola",
    name_es: "Angola",
    img: "https://www.kayak.es/rimg/dimg/ec/9d/01dfcc84-city-9951-172c0bb1d2b.jpg?width=400&height=300&xhint=1953&yhint=905&crop=true"
  },
  {
    code: "TG",
  dial_code: "+228",
  name_en: "Togo",
  name_es: "Togo",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/2014-06-16_19-07-24_Togo_Maritime_-_Adjogbl%C3%A9.JPG/280px-2014-06-16_19-07-24_Togo_Maritime_-_Adjogbl%C3%A9.JPG"
  }
]

function App() {
  return (
    <React.Fragment>
      <HelloWorld></HelloWorld>
      <Contenido text="Este es el texto que tiene que aparecer"></Contenido>
      {countries
      .map(c => <Countries img={c.img} code={c.code} name_en={c.name_en} dial_code={c.dial_code}></Countries>)
      }


      
    </React.Fragment>
  );
}

export default App;
