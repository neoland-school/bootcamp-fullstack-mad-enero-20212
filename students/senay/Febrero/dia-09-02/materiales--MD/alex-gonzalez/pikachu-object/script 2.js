
function generateHTMLInfoContainer(title, value){
    return `
    <div class="info__container">
        <p>${title}</p>
        <p>${value}</p>
    </div>
    `
}

function generateHTMLStatInfoContainer(title, value){
    return `
    <div class="info__container">
        <p>${title}</p>
        <div>
            <p>${value}</p>
        </div>
    </div>
    `
}


function generateHTMLMove(move){
    return `
        <tr>
            <td>${move.version_group_details[0].level_learned_at}</td>
            <td>${move.move.name.toUpperCase().replaceAll('-', ' ')}</td>
            <td>${move.version_group_details[0].move_learn_method.name}</td>
        </tr>
    `;
}


let htmlOutput = `
<header class="header">
    <h1>Pokédex</h1>
</header>
`;


/** MAIN SECTION */
htmlOutput += `<main>`
// pokemon es la constante declarada en el otro archivo js
htmlOutput += `<h2 class="pokemon__name">${pokemon.name}</h2>`; 

htmlOutput += `<div class="info">`;

htmlOutput += `<section class="general-info">`;

htmlOutput += generateHTMLInfoContainer('ID', `#${pokemon.id}`);
htmlOutput += generateHTMLInfoContainer('Height', `${pokemon.height/10}m`);
htmlOutput += generateHTMLInfoContainer('Weight', `${pokemon.weight/10}Kg`);

htmlOutput += '</section>';

htmlOutput += '<section class="image">';
htmlOutput += `<img src="${pokemon.sprites.other['official-artwork'].front_default}" />`;
htmlOutput += '</section>';

htmlOutput+= `
<section class="stats">
    <h3>Base</h3>
`;

htmlOutput += pokemon.stats.reduce((acc,s) => acc + generateHTMLStatInfoContainer(s.stat.name, s.base_stat), '');

htmlOutput += '</section>';
htmlOutput += '</div>';

htmlOutput += `<section class="moves">`;
htmlOutput += `<table>
    <thead>
        <th>Level</th>
        <th>Move</th>
        <th>Method</th>
    </thead>
    <tbody>
        ${pokemon.moves.reduce((acc, m) => acc + generateHTMLMove(m) , '')}
    </tbody>
</table>`;
htmlOutput += '</section>';

htmlOutput += '</main>';

document.write(htmlOutput);
