/**
 * - Hello Comunicación hijo-padre: Crear dos componentes:
 * Un componente hijo que tiene un input. Cuando se escriba en el input, se debe enviar su valor al padre.
 * Un componente padre que tenga el hijo y debajo un p. Este p debe pintar lo que se escriba en el 
 * input del hijo.
 */
function ComunicationHijo() {

    const handleOnChange=(e) => {
        let inputValue = e.taget.value;
    };
    return (
        <input onChange={handleOnChange} type="text" placeholder="Escriba algo" />
        
    )
}
export default ComunicationHijo;