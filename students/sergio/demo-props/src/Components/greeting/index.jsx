

function PrintH1(props){

    
    
    return (<div>
        
        <h1>Hola {props.name}</h1>
        <p>{props.extended === true ? 'Bienvenido a estas clases de react alucinantes' : ''}</p>
      
        </div>);
    
}

export default PrintH1;