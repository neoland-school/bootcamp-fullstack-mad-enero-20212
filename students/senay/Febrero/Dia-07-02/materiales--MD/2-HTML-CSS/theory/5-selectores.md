# Selectores

Los selectores de CSS son los que nos permiten seleccionar elementos HTML cuando utilizar el CSS desde una **etiqueta** `style` o un archivo css externo.

¿Que estructura tienen los selectores?

```css
/*
A todos los elementos que cumplan con el selector se les aplicarán
Las propiedas CSS que tenga en su bloque
*/
_selector_ {
    _prop_1_: _value_;
    _prop_2_: _value_;
    ...
}

```

## ¿Que Selectores existen?

- **Selector de etiqueta**: Nos permite seleccionar todos los elementos HTML de un cierto tipo y aplicarles las mismas propiedades CSS a todos.

```css
/* Todos los p's de mi página serían de color rojo */
p {
    color: red;
}

div {
    width: 100px;
    height: 100px;
}

```

- **Selector de id**: Todos los elementos HTML tienen la posibilidad de añadirles un atributo `id`. Este ID identifica al elemento HTML en toda mi página web. Desde CSS podría seleccionar un elemento concreto que tenga un id concreto. Para ello tengo que usar el caracter `#` seguido del ID.

```html
<style>
    #MI_ID_MOLON_UNICO{
        padding: 4px;
    }
</style>
<button id="MI_ID_MOLON_UNICO">Do stuff</button>

```

- **Selector de clase**: Las clases css nos permiten asociar un alias que podamos reutilizar en diferentes elementos HTML a través de su atributo class. Una vez creadas mis alias puedo en el CSS relacionarlos utilizando el `.` seguido del nombre de la clase.

```html
<style>
    .bg_red{
        background-color: red;
    }

    .box {
        width: 50px;
        height: 100px;
    }
</style>
<button class="bg_red">Do stuff</button>
<button>Do Other stuff</button>
<button class="bg_red">Do Last stuff</button>
<div class="bg_red box"></div>
```

- **Selector universal**: Este selector nos ayuda a seleccionar TODOS los elementos HTML de mi página web. Se utiliza el caracter `*`. Tiene un caso de uso claro y muy habitual conocido como `resets de css`

```css
/* Resets de CSS básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

```

- **Selector de atributo**: Permite seleccionar elementos HTML por atributo. En HTML además podemos crear atributos customizados (suelen empezar por **data-**) y seleccionarlos en CSS con este selector de atributo. Para utilizar el selector de atributo envolveremos el nombre y el valor de altributo entre corchetes `[_nombre_=_valor]`

Ejemplo 1: Atributos que ya existen en HTML

```css

[type=text]{
    /* aplicar propiedades a cualquier elemento HTML cuyo */
    border: 5px solid black;
}

```

Ejemplo 2: Creo mi propio atributo

```html
<style>
   [data-my-attr]{ /* Esto afecta tanto al p->1 como al p->3 como al p->4 */
       margin: 4px;
   }

   [data-my-attr='hola'] { /* Solo afecta al p->1 */
       color: red;
       margin: 2px;
   }

   [data-my-attr='adios'] { /* Solo al p->3 y p->4 */
       color: green;
   }
</style>

<p data-my-attr="hola">1</p>
<p>2</p>
<p data-my-attr="adios">3</p>
<p data-my-attr="adios">4</p>
```

### Agrupando selectores

Imaginamos que tenemos el siguiente caso:

```css

.demo {
    color: red;
    margin: 4px;
    padding: 18px;
    width: 300px;
    ...
}


input {
    color: red;
    margin: 4px;
    padding: 18px;
    width: 300px;
    ...
}

```

Tenemo dos selectores con las mismas propiedas css. En el ejemplo estaríamos escribiendo dos veces el mismo conjunto de propiedades.

En CSS este caso de DRY (Don't repeat yourself) se puede solucionar con la agrupación de selectores, que consiste en separar los selector por ','

```css

.demo, input {
    color: red;
    margin: 4px;
    padding: 18px;
    width: 300px;
    ...
}

```
