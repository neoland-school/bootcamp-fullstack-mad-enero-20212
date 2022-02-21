// ejercicios 17/02/2022
// El proyecto de hoy será crear una App React de Pokemon , para la realización de este proyecto usaremos la api de pokemon PokeApi (https://pokeapi.co/), los pasos a seguir serán los siguientes:
// Vamos a crear una app React llamada PokeAppi la cual tendra tres  componentes una Poke Card,  una PokeList y un Nav.
// Nuestro componente PokeList va a hacer un llamado fetch a la siguiente url ("https://pokeapi.co/api/v2/pokemon") y deberá guardar en un array de objetos pokemons con el id, name, el sprites_front_default y los types, para esto es necesario revisar los datos que nos devuelve la api con ese llamado y en la documentación.
// Una vez tengamos nuestro array de objetos nuestro componente PokeCard va a recicibr el objeto de PokeList y  pintar una card de pokemon como en la imagen.
// Nuestro componente Nav debera tener un buscador como en la imagen y deberá filtrar los pokemons por su nombre.
// la ruta solo te devuelve los primeros 20 pokemons en una llamada (a esto se le conoce como paginación). Añadir botones de next y prev para que te vaya solicitando los siguientes pokemons o vuelva a los anteriores.
// Como habran notado los datos no nos llegan en orden, es decir no se pinta el id 1 luego 2 ,3 etc, debemos solucionar esto, para eso podemos invetigar sobre Promise.allSettled().
// Al hacer hover sobre la imagen de las cards esta deberá cambiar a una de tipo sprites.front_shiny.

