# Introduccion

ReactJS es una libreria (set de funciones y utilidades) que te permiten construir de manera rápida aplicaciones web (su interfaz de usuario).

Se desarrolla por facebook y se libera en 2009.

Tiene unas reglas de juego (basadas en HTML, CSS y JS) que hay que conocer.

## SPA vs MPA

Existen fundamentalmente dos tipos de web:

- SPA: (Single Page Application) Este tipo de web se caracteriza por tener TODA la aplicación y TODAS sus páginas en una UNICA página web. Cuando el usuario entra en nuestra APP web descarga todos los JS, CSS y HTML de todas las páginas y con JS cambia de una pagina a otra. Utilizaremos Angular o **React** para construir este tipo de App.

- MPA: (Multiple Page App) Este tipo (las primitivas) se caracterizad en que cada página es un documento HTML diferente y cada vez que cambio de página lo que estoy haciendo es ir al servidor a por el HTML de la nueva página. Utilizaremos lenguajes de servidor como PHP o puramente un archivo HTML por cada página.

![SPAvsMPA](https://dz2cdn1.dzone.com/storage/temp/13596577-traditional-and-spa.jpg)

## NPM

Es un gestor de paquetes y librerías que nos ayuda a utilizar esas librerías en nuestro proyecto ofreciendo comandos para instalar y desinstalar.

Para poder usar npm lo primero que necesitamos es un **PROYECTO NPM**.

¿Como creo un proyecto npm?

Para ello debemos ejecutar en nuestra carpeta de proyecto el siguiente comando:

> npm init

Este comando lanzará un cuestionario que debemos responder y cuando terminemos habrá generado un archivo llamado `package.json`. Este archivo es el que indica que estamos en un proyecto npm.

¿Que puedo hacer con NPM?

- Instalar una librería: Podemos añadir una librería del mercado que hay en npm ejecutando el comando:

    > npm install _nombre_paquete_npm_
    > npm i _nombre_paquete_npm_
    > npm i _nombre_paquete_npm_1_ _nombre_paquete_npm_2_ _nombre_paquete_npm_3_

- Desinstalar una librería: Elmina de nuestro proyecto una librería que ya tuviesemos

    > npm uninstall _nombre_paquete_npm_
    > npm uninstall _nombre_paquete_npm_1_ _nombre_paquete_npm_2_ _nombre_paquete_npm_3_

¿De donde saco el nombre de un paquete?

Tengo que irme a npm a la página del paquete y ahi podré obtener su nombre.

## Creación de un proyecto en ReactJS

Es un proyecto NPM, pero para evitar siempre tener que hacer el `npm init` y todos los `npm install` para tener un proyecto react, existe una librería que ya nos ayuda con eso.

Se llama `create-react-app`.

```bash

npx create-react-app _nombre_app_
cd _nombre_app_
npm start

```

[Ref](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
