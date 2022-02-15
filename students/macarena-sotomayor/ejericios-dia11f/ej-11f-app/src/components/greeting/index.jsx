function Greeting(props) {
    return (<article>
        <h1 className="saludExtensds">Nos alengranos de verte,{props.extend} </h1>
        <p>{props.name}</p>
    </article>
    )


}

export default Greeting;