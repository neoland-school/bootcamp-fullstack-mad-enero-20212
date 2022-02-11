const number = parseInt(prompt('number'))
const midLine = Math.floor(number / 2);

for (let i = 0; i < midLine; i++) {
    document.write(`<div class="container ${i}">`);

    for (let j = i; j >= 0; j--) {
        document.write(`<div class="bar green-bar ${j}" ></div>`);
    }
    document.write(`</div>`);
}


for (let i = midLine; i >= 0; i--) {
    document.write(`<div class="container ${i}">`);

    for (let j = i; j >= 0; j--) {
        document.write(`<div class="bar red-bar ${j}"></div>`);
    }
    document.write(`</div>`);
}