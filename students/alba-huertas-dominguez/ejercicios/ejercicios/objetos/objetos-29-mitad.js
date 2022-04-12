//Crear un objeto que represente un coche y tenga las propiedades marca, modelo, matricula, una imagen del coche, 
//velocidad actual y algo que me indique si está encendido o apagado, 
//luego Crea un array de objetos coche e imprime por pantalla   la velocidad del 4º coche.(medium)

const coche1 = {
	marca:'audi' ,
	modelo:'modeloaudi',
	matricula: '123456z',
	velocidad:150



}
const coche2 = {
	marca:'bmw' ,
	modelo:'modelo bmw',
	matricula: '78946w',
	velocidad:180



}
const coche3 = {
	marca:'seat' ,
	modelo:'seat leon',
	matricula: '86453487s',
	velocidad:120



}
const coche4 = {
	marca:'ford' ,
	modelo:'ford focus',
	matricula: '8635488w',
	velocidad:110



}

;
const coches = [coche1,coche2,coche3,coche4];


document.write(coches[3].velocidad)