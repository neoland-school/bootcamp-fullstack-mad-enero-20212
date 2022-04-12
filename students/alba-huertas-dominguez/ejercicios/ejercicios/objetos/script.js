

const coche1 = {
	marca:'audi' ,
	modelo:'modelo audi',
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

const coches = [coche1,coche2,coche3,coche4];


function marca (a,b){
const mcoche = a.filter(v => v.marca === b)
return mcoche
}

document.write(marca(coches,"audi"));



