/* 1 */

let arr = [];

for (let i = 0; i < 5; i++) {
    const userNumber = parseFloat(prompt('Give me a number'));
    arr[i] = userNumber;
}

document.write(`<h1>${arr}</h1>`);