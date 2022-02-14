const numArray = [4, 23, 23, 1, 4, 56, 43]


const numberPosition = (num, array) => {
    let counter = 0
    for (let i = 0; i < array.length; i++) {

        if (array[i] === num) {
            counter++
            document.write(`<h1>${num} found at position ${i}</h1>`)
        }
    }
    if (counter === 0) {
        document.write(`<h1>number ${num} not found inside the array</h1>`)
    }
}
numberPosition(4, numArray)