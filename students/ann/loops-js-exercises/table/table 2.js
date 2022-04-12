const columns = parseInt(prompt('Insert number of columns'));
const rows = parseInt(prompt('Insert number of rows'));

document.write(`<table>`)
for (let i = 0; i < rows; i++) {
    document.write(`<tr>`)
    for (let j = 0; j < columns; j++) {
        document.write(`<td>example</td>`)
    }
    document.write(`</tr>`)
}
document.write(`</table>`)