const number = parseInt(prompt('Insert a number'))


for (let i = 1; i <= 10; i++) {
    document.write(`<p>${number} * ${i} = ${number * i}</p>`)
}