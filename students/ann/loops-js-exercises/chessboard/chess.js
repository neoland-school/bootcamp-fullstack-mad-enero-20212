
const n = parseInt(prompt('give me a number'))


for (let i = 0; i < n; i++) {
    document.write(`<section class="row${i}">`)

    if (i % 2 === 0) {
        for (let j = 0; j < n; j++) {

            if (j % 2 === 0) {
                document.write(`<div class="chess chess-color-light"></div>`)
            } else {
                document.write(`<div class="chess chess-color-dark"></div>`)
            }
        }
    } else {
        for (let j = 0; j < n; j++) {
            if (j % 2 !== 0) {
                document.write(`<div class="chess chess-color-light"></div>`)
            } else {
                document.write(`<div class="chess chess-color-dark"></div>`)
            }
        }
    }
    document.write(`</section>`)
}
