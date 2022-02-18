import { useState } from "react";


function InputText(prop) {

    return <input onKeyUp={e =>prop.text_prop(e.target.value)} type="text" placeholder="Escriba aquí" name="inputText"></input>
}

export default InputText;


