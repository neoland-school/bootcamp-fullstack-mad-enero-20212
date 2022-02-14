const subgenres = ['punk', 'metal', 'hardcore'];

const genres = [subgenres, 'pop', 'country']

const band = ['metallica', genres]

document.write(`<h1>${band[0]} ${band[1][0][1]}</h1>`)

