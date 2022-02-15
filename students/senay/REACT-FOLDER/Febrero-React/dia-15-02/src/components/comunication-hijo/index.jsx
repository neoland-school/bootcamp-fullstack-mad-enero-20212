
/**
 * - Hello Comunicación hijo-padre: Crear dos componentes:
 * Un componente hijo que tiene un input. Cuando se escriba en el input, se debe enviar su valor al padre.
 * Un componente padre que tenga el hijo y debajo un p. Este p debe pintar lo que se escriba en el 
 * input del hijo.
 * 
 * PASOS
 *  1 crea un comp.. hijo con input y comprueba si se refleja en el navegador
 *   1.a crea handler que escuche el cambio de valor del input
 *  2 pasa el valor del hijo al padre
 *   2.a 
 */


// function ComunicationHijo({inputHola = () => {}}) {
//     // al input le damos la () onChange y el elemento en esta caso (e) recojera el valor actual del input
//             return (
//                     <input onChange={(e) => inputHola(e.target.value)} type="text" placeholder="Escriba algo" />    
//                 )
//             }
// export default ComunicationHijo;