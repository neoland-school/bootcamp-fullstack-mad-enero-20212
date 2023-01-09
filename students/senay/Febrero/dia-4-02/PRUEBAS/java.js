class Animales {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    canta() {
        return `${this.nombre} puede cantar`;
    }

    baila() {
        return `${this.nombre} puede bailar`;
    }
}

let bongo = new Animales("Bongo", "Peludo");
console.log(bongo);
document.write(bongo);