# Especificidad, Cascada y Herencia

## Especificidad

A Una propiedad CSS se le asigna un valor "numérico" por parte del navegador para indicar cuanto de especifica es para un determinado elemento HTML.

Este valor sirve para que en caso de colisión de una misma propiedad para un mismo elemento, el navegador es capaz de decidir cual poner si una u otra

Veamos un ejemplo:

```css

p {
    color: blue;
}

.paragraph {
    color: green;
}

```

```html
<p class="paragraph">¿De que color es este párrafo?</p>
```

Para poder resolver el conflicto el navegador se queda con la propiedad que tiene más especificidad, es decir, la que es más específica para el elemento (en este caso el elemento p). La propiedad color es más específica ene l selector de clase, ya que puede haber p's que no tengan la clase.

Para calcular el número de especificidad de una propiedad tenemos que validar el selector donde se encuentrar.

- Universal: 0 puntos
- Etiqueta o pseudo-elemento: 1 punto
- clase, pseudo-clase o atributo: 10 puntos
- ID: 100 puntos
- Style: 1000 puntos.
- !important: 10000 puntos.

Ejemplo: `p {}` las propiedades que tenga ese selector tendrán una especificidad de 1 y la de `.paragraph {}` tendrán una especificidad de 10 puntos.

En selectores combinados, **se van sumando las especificidades**.

## Cascada

La cascada en CSS indica que a igual especificidad, la propiedad CSS que gana la "batalla" sería la última en cargar dentro del navegador.

```css

.class_1{
    color: blue; /* 10 especificidad */
}

.class_2 {
    color: red; /* 10 especificidad. Esta es la ganadora por cascada */
}

```

## Herencia

En general las propiedades se asignan a elementos concretos de HTML, pero hay ciertas propiedades que se heredan de padres a hijo. En concreto se hereda el valor del elemento ascendente más cercano y asi podemos en partes del DOM sobreescribir el valor.

El listado de propiedades que se heredan es:

[Props de herencia](https://gist.github.com/dcneiner/1137601)
