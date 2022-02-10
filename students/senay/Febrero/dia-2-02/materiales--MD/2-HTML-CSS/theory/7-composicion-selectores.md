# Composición

Podemos combinar los selectores vistos en clase para crear selectores mucho más potentes:

## Combinar sin dejar espacio (afecta al mismoa elemento)

```css

input.my-class {
    /* Las propiedades que yo ponga aqui afectarán a cualquier input de mi web que tenga la clase my-class*/
    /*
        <input class="my-class"> (Este input es al que le afectan las propiedades CSS)
            <label>
                <p class="my-class">A este p no se ve afectado</p>
                <button class="my-class">Este button tampoco está afectado</button>
            </label>
        </input>
    */
    /*Estas propiedades tendrán una especificidad de: 11*/
}

.one-class.second-class {
    /* Las propiedades que yo ponga aqui afectaran a cualquier elemento HTML que tenga las clases one-class y second-class */
    /* Especificidad: 20 */
}

input[type="email"].my-class {
    /* Las propiedades que yo ponga aqui afectarán a cualquier input de tipo email de mi web que tenga la clase my-class*/
    /* Especificidad: 21 */
}

```

## Combinación con espacio (Selector de descendencia)

```css

input .my-class{
    /* Afectará a todos los descendientes (no solo hijos directos) de mis inputs que tengan la clase `my-class` */
    /*
        <input>
            <label>
                <p class="my-class">A este p es al que le afectan las propiedades</p>
                <button class="my-class">Este button tb está afectado</button>
            </label>
        </input>
        <p class="my-class">A este p NO le afectan</p>
    */
    /* Especificidad: 11 */
}


```

## Combinación Selector hijo (>)

Selecciona SOLO los hijos directos.

```css

.my-class > a {
    /* Estas propiedades solo afectan a los enlaces que sean hijos directos de un elemento HTML que tenga la clase `my-class` */

    /* 
        <section class="my-class">
            <a href="...">Este a SI que está afectado</a>
            <p>Esto es un p con enlace 
                <a href="...">Este a NO está afectado</a>
            </p>
        </section>

    */
}

```

## Selector de hermano adjacente (+)

Este selector afecta al elemento hermano de otro selector que esté inmediatamente a continuación

```css

div + p {
  background-color: yellow;
}

```

![Ejemplo](https://miro.medium.com/max/875/1*6ZqTke0Xxx2cqG0BKW1Pgw.png)

Solo afecta al p de `banana` ya que es el uníco p hermano de un div que va inmediatamente a continuación.

## Selector de hermanos general (~)

Selecciona TODOS los hermanos que estén por debajo que cumplan los selectores.

```css

div ~ p {
  background-color: yellow;
}

```

![Ejemplo](https://miro.medium.com/max/3000/1*nP_JuBuL32UkoIVY9nJdzg.png)

Afectará a los dós ultimos p's porque son los unicos p's hermanos a continuación de un div

[Symbols CSS](https://levelup.gitconnected.com/understanding-use-of-the-and-symbols-in-css-selectors-95552eb436f5)
