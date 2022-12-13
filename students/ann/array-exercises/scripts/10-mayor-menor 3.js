const array = [3, 22, 6, 2, 84]

const mayorMenor = (arr) => {
    const newArray = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                let n = arr[i];
                arr[i] = arr[j]
                arr[j] = n
            }
        }
    }
    document.write(`<h1>Array ordenado: ${arr}</h1>`)
}



mayorMenor(array)