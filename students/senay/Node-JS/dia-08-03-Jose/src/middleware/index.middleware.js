

export const middleware = (req, res, next) => {
    res.send('hola desde middleware')
    next()
}
