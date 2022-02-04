const arr = ['hola', 'bonjour', 'hi']
const word = 'bonjour'

const checkWord = (arr, word) => {
    let matched = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) matched++
    }
    const result = matched > 0 ? true : false;
    document.write(`<h1>can you find the word "${word}" in the array? ${result}`)
}


checkWord(arr, word)