
let semaforo = (prompt("Indica la luz del semaforo: verde, ambar intermitente, ambar o rojo"));


if( semaforo === "rojo"){document.write('<div class=container1>rojo</div>');
}else if(semaforo ==="verde"){document.write("<div class=container2>verde</div>");
}if(semaforo === "ambar"){document.write("<div class=container3>ambar</div>");
}else{document.write("<div class=container4>ambar intermitente</div>")
}
