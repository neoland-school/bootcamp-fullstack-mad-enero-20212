# Intro a CSS

<>
=
{}


El css es la segunda tecnología que entiende el navegador. Su función es la de estilizar y personalizar una página web dando:

-espacios
colores
formas
posisionamiento
sombras
animaciones...

A los elementos  HTML, tanto contenedores como contenido.


## Propiedades

Objetivo css es **aplicar propis a elementos HTML**.
Poner... nombre_propiedad: valor_prop;

Una de ellas es y como se escribe:
background-color: black;

# Comenario en css: /*   */
# Comenario en HTML: <!-- -->

## CSS a HTML:

2 maneras 

1. Todos los elementos HTML tienen un atributo "style".
HTML:
        <p style="color;red;font-size;40px;"> Color de texto, y tamano 40px </p>

2. Todos los elementos HTML tienen un atributo "class".
<p class="big-red-text">Color de texto, y tamano 40px</p>

## Clases CSS:

Agrupar y reutilizar las propiedades...

En CSS tienes que escribir...
.big-red-text {
    color:red;
    font-size:40px;
}
... para que se aplique al HTML.

## Como enlazo

1. Utilizando dentro del archivo HTML la etiqueta ..style..
2. Creando un archivo con extensión .css y enlazando, con html ..link..



