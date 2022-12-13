import {helloModel} from '../model/model.js'


export const helloWorld = (req, res) => { // el res req se hace en el controller
    // res.send('hola mundo')
// }
    // const hello = helloModel();
    // res.send(hello)
    res.send(helloModel())
};