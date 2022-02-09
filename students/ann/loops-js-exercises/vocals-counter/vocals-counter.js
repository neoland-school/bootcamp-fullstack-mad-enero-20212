const word = prompt('insert a word')
let counter = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i].match(/[aeiou]/i)) {
        counter++
    }
}

document.write(`<p>number of vocals: ${counter}</p>`)