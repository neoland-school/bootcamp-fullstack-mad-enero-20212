import { ModelDemo } from "../model/index.js";


export const getDemoCtrl = (req, res) => {
    //esto es la funcion para enviar dede aqui el modelo de req, res, y tambien llevando el modelo, que es donde ponemos lo que queremos hacer.
ModelDemo(req.body);
 

    
    res.send('ok');
};


