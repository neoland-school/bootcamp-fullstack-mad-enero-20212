
import PropsChild from "../props-child";
import React, {useState} from "react";

function PropsParent() {
    console.log('Pintando el padre');
    let [title, updateTitle] = useState('Mi título de las props'); // variable que usa el padre y las props del hijo ==> se repintan los dos
    let [subtitle, updateSubtitle] = useState('subtitle'); // variable que usa el padre y no las props del hijo ==> Se repintan los dos

    let childTitle = 'Es el title del hijo'; // variable que usa el hijo pero no el padre: no genera ningun cambio ni se repinta ningun componente

    const handleSubmit = e => {
        e.preventDefault();
        // const inputValue = e.target.title.value;
        // updateTitle(inputValue);
        // updateSubtitle(e.target.subtitle.value);
        childTitle=e.target.subtitle.value;
    }

    return (
        <React.Fragment>
            <h1>Desde el padre: {title}</h1>
            <h3>Desde el padre: {subtitle}</h3>
            <PropsChild title={childTitle}></PropsChild>
            <form onSubmit={handleSubmit}>
                <input name="title" type='text'></input>
                <input name="subtitle" type='text'></input>
                <button>Cambiar el título</button>
            </form>
        </React.Fragment>
    )
}

export default PropsParent;