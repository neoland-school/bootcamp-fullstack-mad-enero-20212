
const mideleware = (req,res,next) =>{
    res.send('Hello middleware')
    next()
}
export const middlewareLogin = (req,res,next) =>{
    const user ={
        email: req.body.email,
        password: req.body.password
    }
    const nameJson = readFileSync('./products.json',{encoding: 'utf8'});
    const obj= JSON.parse(nameJson)
    if(obj.findIndex(user.email)===-1){
        next()
    }
}

export default mideleware;