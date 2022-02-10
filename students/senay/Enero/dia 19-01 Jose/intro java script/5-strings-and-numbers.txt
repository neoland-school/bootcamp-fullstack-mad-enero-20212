# Strings y Numbers

## Strings

Los strings son tipos de datos que representan cadenas de caracteres.

Por el mero hecho de ser strings, tienen disponibles una serie de operaciones a las que podemos acceder utilizando el caracter `.`.

[REF](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Template literal

Cuando tenemos concatenaciones muy grandes o textos con saltos de línea, utilizar las comillas se vuelve muy tedioso y poco legible.

```js

let a = `<p class="` + varClass+ '">' + textoP + '</p>';

let a = `
         <p class="${varClass}">${textoP}</p>
         <ul>
            <li>${textoLi}</li>
        </ul>
         `;


```

## Number

PAra hacer operaciones con numbers un poco más complejas, tenemos la utilidad Math

[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
