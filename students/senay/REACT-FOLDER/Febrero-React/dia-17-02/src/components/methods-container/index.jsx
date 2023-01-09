// import MethodPost from "./method-post";
// import MethodPut from './method-put';
// import MethodDelete from './method-delete';
// import MethodPostKo from './method-post-ko';

/**
 * Crear en beeceptor 4 endpoints:
POST, PUT y DELETE devolviendo un 200 en este path (/hello-ok). El body que devolváis lo dejo a vuestra elección.
POST devolviendo un 400  en este path (/hello-ko). El body que devolváis lo dejo a vuestra elección.
POST: Cuando se pulse el botón de Post Ok se deberá realizar una llamada POST a vuestro /hello-ok y se deberá pintar la respuesta en el HTML. Si la respuesta es vacía, se debe poner Empty Response en el pre . Se tiene que pintar también el código de respuesta HTTP recibido
PUT: Cuando se pulse el botón de Put Ok se deberá realizar una llamada PUT a vuestro /hello-ok y se deberá pintar la respuesta en el HTML. Si la respuesta es vacía, se debe poner Empty Response en el pre .Se tiene que pintar también el código de respuesta HTTP recibido
DELETE: Cuando se pulse el botón de Delete Ok se deberá realizar una llamada DELETE a vuestro /hello-ok y se deberá pintar la respuesta en el HTML. Si la respuesta es vacía, se debe poner Empty Response en el pre . Se tiene que pintar también el código de respuesta HTTP recibido
POST: Cuando se pulse el botón de Post ko se deberá realizar una llamada POST a vuestro /hello-koy  se deberá pintar la respuesta en el HTML. Si la respuesta es vacía, se debe poner Empty Response en el pre .Se tiene que pintar también el código de respuesta HTTP recibido. Hint: Ojo con está que no es un 200
 *   useEffect(() => {
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error('could not reach the  data for that resourse')
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null)
        })
 */
function MethodsContainer() {

    useEffect(() => {
        fetch('https://senayr.free.beeceptor.com/hello-ok', { method: 'POST' })
        .then(res => {
            if (!res.ok) {
                throw Error('Empty response')
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null)
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
            
        })
    }, []);
// const mPost = await fetch('https://senayr.free.beeceptor.com/hello-ok', { method: 'POST' })
//     await(mPost => mPost.json())

    return (
            <div className="methods-container">
                {/* <MethodPost></MethodPost>
                <MethodPut></MethodPut>
                <MethodDelete></MethodDelete>
                <MethodPostKo></MethodPostKo> */}

                <button>POST ok</button>
                <button>Put ok</button>
                <button>DELETE ok</button>
                <button>POST ko</button>
                <pre>
                    <p></p>
                </pre>
            </div>
    )
}
export default MethodsContainer;