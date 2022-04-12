const cars = []

const lambo = {
    marca: 'Lamborghini',
    modelo: 'Spider',
    matricula: '3921ANN',
    img: 'https://gtluxe.com/wp-content/uploads/2015/12/lamborghini-huracan-performante-spyder-gtluxe.jpg',
    'velocidad actual': 100,
    encendido: true
};

document.write(`<img src="${lambo.img}"></img>`)

const seat = {
    marca: 'Seat',
    modelo: 'Leon',
    matricula: '1921ANN',
    img: 'https://www.diariomotor.com/imagenes/2021/03/seat-leon-tgi-gnc-2021-0321-004.jpg',
    'velocidad actual': 90,
    encendido: true
};

const mini = {
    marca: 'Mini',
    modelo: 'Cooper',
    matricula: '3021ANN',
    img: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2020/09/mini-cooper-2077489.jpg',
    'velocidad actual': 0,
    encendido: false
};

const honda = {
    marca: 'Honda',
    modelo: 'Civic',
    matricula: '3928ANN',
    img: 'https://www.honda.es/content/dam/central/cars/Civic-5-door-2020/overview/Civic-5dr-close-contact-mobile.jpg/jcr:content/renditions/m_r.jpg',
    'velocidad actual': 150,
    encendido: true
};

const tesla = {
    marca: 'Tesla',
    modelo: 'Model 3',
    matricula: '0000ANN',
    img: 'https://www.diariomotor.com/imagenes/2021/09/tesla-model-3-oferta-septiembre-2021-portada.jpg',
    'velocidad actual': 120,
    encendido: true
};

cars.push(lambo, seat, mini, honda, tesla)

document.write(`<h1>La velocidad actual del coche 4 es: ${cars[3]['velocidad actual']} km/h</h1>`)

/* 8 */

const getCarByBrand = (car, marca) => {
    const brand = car.filter(c => c.marca === marca)
    return brand
}

getCarByBrand(cars, 'Tesla')

/* 9 */

const cochesEncendidos = obj => obj.filter(c => c.encendido === true)
console.log(cochesEncendidos(cars));

/* 10 */

const velocidadMedia = obj => {
    const velocidades = obj.map(c => c['velocidad actual'])
    const velocidadMedia = velocidades.reduce((acc, prev) => acc + prev) / velocidades.length
    return velocidadMedia
}

console.log(velocidadMedia(cars));
