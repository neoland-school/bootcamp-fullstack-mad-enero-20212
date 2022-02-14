/* 1 */
const house = {
    name: 'ohana',
    windows: 4,
    available: true,
};

for (const [key, value] of Object.entries(house)) {
    document.write(`<p>${key} : ${value}</p>`);
}
document.write(`<p>${house.windows}</p>`);
document.write(`<p>${house.available}</p>`);

/* 2 */

const str = 'tomate';
const fruit = {
    name: 'tomate',
    color: 'red',
    season: 'summer',
};

const deleteProperty = (obj, property) => {
    return delete obj[property];
};

deleteProperty(fruit, 'season');

/* 3 */

const existsProperty = (obj, property) => {
    return obj.hasOwnProperty(property);
};

console.log(existsProperty(fruit, 'color'));

/* 4 */

const printEntries = (obj) => {
    return document.write(Object.entries(obj));
};

printEntries(fruit);

/* 5 */

const hourExample = '14:36:57';
const printTime = (str) => {
    let hour = str.substring(0, 2);
    let minutes = str.substring(3, 5);
    let seconds = str.substring(6, 8);

    const time = {
        hour: hour,
        minutes: minutes,
        seconds: seconds,
    };
    document.write(`<h1>${Object.entries(time)}`);
    return time;
};

printTime(hourExample);

/* 6 */

const productos = [
    {
        id: 1,
        name: 'Nintendo Switch',
        type: 'consola',
        price: 300,
    },
    {
        id: 2,
        name: 'Taurus 1000',
        type: 'tostadora',
        price: 20,
    },
    {
        id: 3,
        name: 'Thermomix',
        type: 'kitchen robot',
        price: 990,
    },
];

const getTotalPrice = (obj) => {
    const pricesList = obj.map((p) => p.price);
    const totalPrice = pricesList.reduce((acc, prev) => {
        return acc + prev;
    }, 0);
    return totalPrice;
};

const totalProductPrices = getTotalPrice(productos);
document.write(`<h1>Total product prices: ${totalProductPrices} €</h1>`);

/* 7 */

