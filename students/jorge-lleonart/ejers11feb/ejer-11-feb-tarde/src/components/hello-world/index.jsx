// 1. Crear una aplicación de Reactjs, en nuestra  App.js guardaremos una variable de tipo  string que diga "hola Mundo", y la mostraremos en pantalla en un H1.
// 2. Crea un componente react llamado Contenido, el cual recibirá por Props la variable de tipo string que le enviaremos desde App.js. Pintala por pantalla.
// 3. Crea un componente llamado Text el cual será hijo del componente Contenido el cual recibira por Props la variable de tipo string "Hola Mundo" desde App.js y se debe ver por pantalla.
// 4. Crea un componente React llamado Country, el cual recibirá  por Props el siguiente objeto que le enviaremos desde App.js y pintará por pantalla lo siguiente                                let  pais={name_en: "Afghanistan",   name_es: "Afganistán",   dial_code: "+93",code: "AF",  img:"https://www.despertaferro-ediciones.com/wp-content/uploads/2021/08/7408738172_4442b9be54_o.jpg"}


function HelloWorld(){
    return <h1>HOLA MUNDO</h1>
}
export default HelloWorld