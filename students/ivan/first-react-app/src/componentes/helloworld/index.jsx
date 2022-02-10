/***
 * 
 1- Crea tu primer  componente react  llamado Helloword, utilizando JSX que 
 devuelva un H1 que tenga como texto `hola mundo`.

 2- Agregale al  componente Helloword dos parrafos con lorem y 
 visualizado en pantalla.
 */

 function HelloWorld(){

    return (
        <div>

        <h1>Hola Mundo</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five</p>

        </div>

    )
 };

 export default HelloWorld;