# Componentes

Un componente es una porcion reutilizable de nuestra página web.
En react hay dos tipos de componente:

- Componentes de clase => utilizan una clase JS para describirse. Están en deshuso.

- Componentes de función => utilizan una función JS para describir el component. Son los mas usados en los proyectos actuales.

1 componente consta de 3 partes:

- Su estructura visual === HTML
- Su diseño === CSS
- Si lógica === JS

El HTML y el JS se juntan dentro del archivo .js. A esta sintaxis se le conoce como JSX

[Intro JSX](https://es.reactjs.org/docs/introducing-jsx.html)
[JSX para novatos](https://carlosazaustre.es/jsx-para-novatos)
[JSX tutorial](https://buildwithreact.com/tutorial/jsx)

La sintaxis de JSX es muy muy parecida a HTML pero con 3 tonterías que ayudan a mezclar el JS dentro de ese HTML.

## Estructura de una componente React de función

Un componente de función es una función JS en cuyo return devolvemos el HTML escrito en JSX.

```jsx

function HelloWorld() { // misma sintaxis que las clases

    return <h1>Hello world</h1>; // sintaxis JSX para el HTML
}

function OtherComponent() {

    return (
        <div>
            <h1>Other HEllo</h1>
        </div>
    )
}

function SiblingComponents(){

    return (
        <React.fragment>
            <div></div>
            <div></div>
        </React.fragment>
    )
}


```

Los componentes tienen su propio archivo con extension `.jsx` y su propio archivo css. Además van en su propia carpeta dentro del src.

Como los componentes están en su propio archivo y queremos utilizarlos en otros archivos, necesitamos **exportarlos** para que alguien los **importe**.

Componente Hello

```jsx

function HelloWorld() {
    
    return <h4>Hello</h4>;
}

export default HelloWorld; // exportamos el componente para que otro componente pueda usar

```

¿Como puede un componente usar otro componente?

Son 2 pasos:

1. El componente que usar otro debe importarlo.
2. Para usarlo simplemente tiene que tratarlo como si fuese un elemento del DOM, una etiqueta de HTML con el nombre del componente.

Queremos usar el componente Hello anterior en un componente que le vamos a llamar Parent en este caso

```jsx
import HelloWorld from 'RUTA_ARCHIVO_DEL_COMPONENTE';

function Parent(){
    return (
        <div>
            <h1>Esto es el componente padre</h1>
            <HelloWorld></HelloWorld>
        </div>
    )
}

/**
* <div>
    <h1>Esto es el componente padre</h1>
    <h4>Hello</h4>
</div>
*/
export default Parent;

```
