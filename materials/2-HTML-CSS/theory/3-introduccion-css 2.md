# Introducción a CSS

El CSS es la segunda tecnología que entiende el navegador. Su función es la de estilizar y personalizar una página web dando:

- Espacios
- colores
- formas
- posiionamiento
- sombras
- animaciones
- ...

A los elementos HTML, tanto contenedores como contenido.

## Propiedades

Para poder utilizar CSS necesito conocer las posibles propiedades que le puedo aplicar.

El objetivo con CSS es **aplicarle propiedades a elementos HTML**.

¿Que estructura tiene una propiedad CSS?

Las propiedades CSS tienen una estructura concreta. Básicamente tenemos que poner

> *nombre_prop*: *valor_prop*;

```css
background-color: black; /* Cambio el color de fondo por negro */
```

[Ref Todas las propiedades](https://www.w3schools.com/cssref/)

## Aplicando CSS en el HTML

Tenemos 2 maneras de aplicar CSS a los elementos HTML.

1. Todas los elementos HTML tienen un atributo `style`. En ese atributo style puedo aplicar todas las propiedades CSS que quiera a ese elemento HTML

    ```html
        <!-- En este caso estamos aplicando al p dos propiedades CSS. Con la etiqueta style solo se aplica a ese p y a ningun otro -->
        <p style="color:red;font-size:40px;">Esto es un texto de color rojo y tiene un tamaño de letra de 40px</p>
    ```

2. Todos los elementos HTML tienen un atributo `class`. En este atributo podemos poner los nombre de clases css.

    ```html
        <!-- Esto tambien es un texto de color rojo y de tamaño 40px, porque en algún lado de nuestro código hemos creado una clase CSS de la siguiente manera:
            .big-red-text {
                color:red;
                font-size:40px;
            }
         -->
       <p class="big-red-text otra-clase-css">Esto es un texto de color rojo y tiene un tamaño de letra de 40px</p>
    ```

## ¿Qué es una Clase CSS?

Es una forma de agrupar y reutilizar un conjunto de propiedades CSS. Puedo definir las propiedades que va a tener la clase a nivel general y asignarselas a varios elementos HTML a ala vez.

```css
.big-red-text {
    color:red;
    font-size:40px;
}

```

## ¿Como enlazo CSS (que no sea style) con HTML?

Tenemos dos formas:

1. Utilizando dentro de el archivo HTML la etiqueta `style`.

2. Creando un archivo con extensión `.css` y enlazando, con la etiqueta HTML `link`, el archivo con el HTML. (Esta va a ser la forma que más vamos a utilizar).
