const arrayTest = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const arrayTest2 = [11, 12, 13, 14, 15, 16, 17, 9, 19, 20]

const isGreaterThanTen = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) counter++
    }
    const result = (counter === 10) ? true : false
    document.write(`<h1>all this numbers are greater than 10? ${result} </h1>`)
}

isGreaterThanTen(arrayTest)
isGreaterThanTen(arrayTest2)