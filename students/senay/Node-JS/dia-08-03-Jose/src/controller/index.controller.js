import { ModelDemo } from '../model/index.model.js';


// export const signUp = (res, req) => {
//     signRetrieve(req.body)
//     res.send('Sended')
// }

export const getDemoCtrl = (req, res) => {
    ModelDemo(req.body)
    res.send('ok')
}