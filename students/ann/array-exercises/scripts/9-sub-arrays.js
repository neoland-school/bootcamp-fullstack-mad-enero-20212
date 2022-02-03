const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const subarrays = (arr, number) => {

    const parts = Math.floor(arr.length / number)
    const module = arr.length % number
    let newArray = Array(parts).fill(0).map(e => Array(number))

    if (module > 0) {
        newArray[newArray.length] = Array(module)
    }

    let counter = 0
    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray[i].length; j++) {
            newArray[i][j] = arr[counter]
            counter++
            console.log(counter);
        }
    }

    return newArray
}

console.log(subarrays(nums, 4));