
const middlerware  = (req,res,next) => {
    res.send('hola mundo router middlerware');
    next();
    };

export default middlerware


