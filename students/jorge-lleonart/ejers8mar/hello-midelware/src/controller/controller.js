import { signupModel } from "../model/model.js";

export const signup = (req, res) => {
    signupModel(req.body)
    res.send('Enviado')
    
};

export const login = (req, res) => {
    loginModel(req.body)
    res.send('Logeado')
    
};