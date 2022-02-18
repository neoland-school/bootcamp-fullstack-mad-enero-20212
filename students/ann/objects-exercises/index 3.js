/* create object with demo and hello properties */

const firstObject = {
    demo: 'hi',
    hello: true
}

/* change hello property  */

firstObject.hello = false;

/* create objects that represents countries with some properties */

const spain = {
    name: 'Spain',
    capital: 'Madrid',
    continent: 'Europe',
    SMI: 1074
}

const eeuu = {
    name: 'EEUU',
    capital: 'Washington',
    continent: 'America',
    SMI: 1140
}

const china = {
    name: 'china',
    capital: 'Pekin',
    continent: 'Asia',
    SMI: 281
}

const newZeland = {
    name: 'New Zelaand',
    capital: 'Wellington',
    continent: 'Oceania',
    SMI: 2241
}

const andorra = {
    name: 'Andorra',
    capital: 'Andorra La Vieja',
    continent: 'Europe',
    SMI: 1085
}

/* add countries to an array */
const countries = []
countries.push(spain, eeuu, china, newZeland, andorra)

/* print which countries belongs to Europe */
countries.forEach(c => {
    if (c.continent === 'Europe') document.write(`<li>${c.name} belongs to Europe</li>`)
})

/* print country with the highest SMI salary*/

countries.forEach(c => {
    if (c.SMI > 1500) document.write(`<li>${c.name} has a higher SMI than $1500</li>`)
})