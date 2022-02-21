# Creando Páginas (Router)

En react una página es un **componente de react** con el HTML que contiene esa página.

Para diferenciarlos de los componentes que son una porción de una página (los que metíamos en la carpeta components), lo que hacemos es crear estos componentes de página en una carpeta llamada (pages).

Lo siguiente que tenemos que hacer es definir las URL's de las páginas y asociarlas con su componente de página, es decir, indicarle a react que cuando el usuario navege al path `/home` se pinte el componente `Home`.

Para hacer esto necesitamos una librería npm que se llama `react-router-dom`. La versión actual es la 6.

La web de la librería, donde tenemos un tutorial muy recomendado y toda información sobre la librería es [Esta](https://reactrouter.com/)

[Tutorial](https://reactrouter.com/docs/en/v6/getting-started/tutorial)

Para definir páginas tenemos 3 actores/actrices:

1. Componente de página
2. Registro de la ruta (una URL a que componente corresponde)
3. Donde queramos navegar, registrar el enlace (lo que sería un `a` de HTML)

## Instalación de la librería

Para ello necesitaré un proyecto react (`npx create-react-app _nombre_app_`)

Lo siguiente que debo de hacer es instalar el `react-router-dom` como dependencia npm

> npm install react-router-dom

o

> npm i react-router-dom

## Hello world

Los pasos para integrar el react-router-dom son los siguientes:

1. En el **App.js**, añadimos un componente llamado `BrowserRouter` de la librería react-router-dom. Toda nuestra aplicación estará dentro de este componente. Esto le indica a React que existe un router.
2. Crear un componente react para la página que queramos registrar (`Home`) dentro de la carpeta pages. Dentro de este componete irá el HTML de la página.
3. Registrar la ruta. Para ello en el App.js, utilizaremos el componente `Routes` de la librería react-router-dom. Dentro de este componente es donde definiremos las rutas de primer nivel de nuestra app web.
4. Para una ruta concreta, dentro del componente Routes, debemos llamar al componente `Route` de la librería react-router-dom. Este componente tiene varias props. La primera intesante es `path`, de tipo string, que contiene la URL de la ruta (ej: '/home'). Además existe otra prop que se llama `element`, de tipo componente react, en el cual le indicamos el Componente que se utilizará en esa ruta (`Home`) (el del punto 2)
5. Para poder crear un componente que permita al usuario de la web navegar (el `a` de HTML) debemos usar el componente `Link` de la librería react-router-dom donde queramos ese enlace. Este componente tiene varias props. La más importante es la propiedad `to`, de tipo string, que es el path donde debe navegar ese link

[Ref](https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app)

