const isArrayOrNot = param => {
    return Array.isArray(param) ? true : false;
}

document.write(`<h1>${isArrayOrNot([1, 2, 3])}</h2>`)