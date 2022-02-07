const arr1 = [3, 5, 4]
const arr2 = ['box', 'tube', 'car']

const params = (param1, param2) => {
    return document.write(`${param1 += param2}`)
}

params(arr1, arr2)