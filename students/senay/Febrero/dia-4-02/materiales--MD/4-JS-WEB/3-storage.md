# Almacenamiento en el navegador

Para almacenar información durante un determinado periodo de tiempo, tenemos varias opciones dentro del navegador.

## Cookies

Son el sistema de almacenamiento más antiguo. Permite almacenar informacion y compartirla con el servidor.

Las cookies para identificarlas se les proporciona un nombre y a esa cookie se le proporciona un valor, que es la información que quiero guardar.

Las cookies son unicas por página web, es decir, una página web no comparte cookies con otra página web.

`document.cookie` es un string que tiene la información de las cookies de esa página web. Los atributos de una cookie son:

- *nombre*
- *valor*
- *expiración*: indica cuando la cookie se auto-elimina.
- *dominio*: DNS al que pertenece la cookie
- *path*: la URL a la que pertene la cookie.
- *secure*: Un booleano que indica si la cookie es solo para cuando carguemos la web en https.
- *httpOnly*: Un booleano que indica si se puede acceder a la cookie via JavaScript o no.

## LocalStorage y SessionStorage

Estos dos elementos nos permiten, al igual que las cookies, almacenar informacion y operar con ella.

En el navegador tenemso dos API's iguales disponibles para poder gestionar esta informacion y hacer el CRUD. Estas API's se encuentrar como propiedades del `window`. Son los siguientes objetos:

- `sessionStorage`
- `localStorage`

Ambas API's se utilizan de la MISMA manera, lo único que cambia es la decisión de usar LocalStorage o SessionStorage.

¿Que las diferencia?

La única diferencia entre ambas es el tiempo que dura (persiste) la información.

En el **Local Storage**, la informacion persiste de manera infinita haste que el usuario decide borrarla en la configuración del navegador o el desarrollador la borra con JS. Es muy útil para guardar información que queramos persistir incluso cuando el usuario apague el ordenador. NO guardar contraseñas ni datos sensibles. Además la información es compartida entre pestañas y ventanas.

En el **Sesion Storage**, la información persiste SOLO en la pestaña actual y se elimina automáticamente cuando el usuario cierra la pestaña en la que está cargando la página web.

### ¿Como se usa este tipo Storage? CRUD

```js

// Creando o modificando una nueva informacion en estos Storages (la C y la U)
/**
 * Este método agrega si no exite o modifica si existe el valor de un dato en el 
 * sessionStorage/localStorage.
 * 
 * La key tiene que ser de tipo string y el valor debe ser uno de los siguientes tipos:
 * String, Boolean o Number
 * */
sessionStorage.setItem('key', _valor_);

sessionStorage.setItem('password', '1234567a'); // esto almacena en la clave 'password' el valor '1234567a'

sessionStorage.setItem('counter', 22); //  esto almacenará en la clave 'counter' el valor 22
sessionStorage.setItem('conditionsAccepted', true); // esto almacenará en la clave 'conditionsAccepted' con un valor 'true'

sessionStorage.setItem('city', {name:'madrid', img: 'jhadaj'}); // ?? [object Object]
sessionStorage.setItem('cities', [{name:'madrid'}, {name:'demo'},{name:'madrid'}]); //?? [object Object],[object Object],[object Object]

// Como recupero una informacion (por clave) (Read)
/**
 * El método getItem devuelve el valor almacenado para una determinada clave o null si la clave no existe. La 'clave' debe ser un string y el 'value' (que es lo que devuelve el getItem)  es siempre de tipo String, por tanto, tendremos que procesar ese dato y hacer las conversiones que sean necesarias
 */
const value = sessionStorage.getItem('clave');

const value = sessionStorage.getItem('password'); // value tendrá el valor '1234567a'
const value = sessionStorage.getItem('counter'); // value tendrá el valor '22'
const value = sessionStorage.getItem('conditionsAccepted'); // value tendrá el valor 'true'
const value = sessionStorage.getItem('city'); // value tendrá el valor '[object Object]' ??
const value = sessionStorage.getItem('notFound'); // value tendrá el valor null

// como elmino una clave (Delete)
/**
 * El metodo removeItem elmina una clave
 */
sessionStorage.removeItem('clave');

```

### ¿Que pasa con los objects y los arrays? Objeto JSON

Para poder almacenar la informacion y luego recuperarla de Objetos y Arrays, necesito una ayuda que me proporciona JavaScript.

En el mundo de la informática existe un formato de informacion llamado JSON. Para trabajar con este formato en JS, el estandar nos da un Objeto llamado `JSON` que tiene principalmente dos operaciones:

- **stringify**: convierte un objeto/array en un string.
- **parse**: convierte un string en un objeto/array.

```js
// almacenar
const data = JSON.stringify({name:'madrid', img: 'jhadaj'}); // convierto primero el ob jeto a string
sessionStorage.setItem('city', data); // ?? '\{"name":"madrid", "img": "jhadaj"\}'
const data = JSON.stringify([{name:'madrid'}, {name:'demo'},{name:'madrid'}]); 
sessionStorage.setItem('cities', data); //?? '[{"name":"madrid"}, {"name":"demo"},{"name":"madrid"}]';

// recuperar

const value = sessionStorage.getItem('city');
const parsedValue = JSON.parse(value); // transformamos el string al tipo original

```
