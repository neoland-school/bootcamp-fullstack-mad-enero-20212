/**
 * PROBLEMA GORDO: El Tetris ---> Ni de coña!
 *  1. CREACION DEL TABLERO
 *      - Grid de 10x20 === 200 casillas ==> Utilizar divs. --> utilizamos JS para crear 200 divs
 *      - dos constantes BOARD_WIDTH (ancho === nº columnas) y BOARD_HEIGHT (alto === filas)
 *      - generateBoardBlock === genera una celda
 *      - drawBoard === genera un tablero ===> tendrá un bucle (200 vueltas, realmente tiene que dar width*height)
 *  2. GENERACION DE PIEZAS
 *  3. MOVER PIEZAS
 *  4. GAME LOOP
 *  5. INICIALIZAR JUEGO
 *  6. SCORING Y LA ELIMINACION DE LA FILA
 *  7. MUSICA
 * 
 */

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

// no tiene parametros de entrada y devuelve un elemento del DOM que es una pieza del tablero
function generateBoardBlock(){ 
    const cellOutter = document.createElement('div');
    cellOutter.classList.add('board__cell');
    const cellInner = document.createElement('div');
    cellInner.classList.add('board__inner-cell');
    cellOutter.appendChild(cellInner);

    return cellOutter;
}

function drawBoard(containerClass, width, height){
    const boardContainer = document.querySelector(`.${containerClass}`); // obtengo el board
    for(let i=0; i< width*height; i++){ // tantos divs como mi tamaño de tablero
        const nextCell = generateBoardBlock();
        boardContainer.appendChild(nextCell);
    }
}

// probamos que pintamos un tablero
drawBoard('board__container', BOARD_WIDTH, BOARD_HEIGHT);
