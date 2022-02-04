const arr = [3, 22, 6, 2, 84]

const greaterThanTen = (arr) => {
    let contador = 0;
    let array10 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            array10[contador] = arr[i]
            contador++
        }
    }
    document.write(`<h1>Array ordenado: ${array10}</h1>`)
}

greaterThanTen(arr)