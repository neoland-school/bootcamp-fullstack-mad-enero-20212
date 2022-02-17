# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

import React, { useState } from "react";

/**
 * 1 crea la () y su html
 * 2 crea una () k manejara/escuchara el button
 * 3 descarga url con fetch copiando de la pagina dada, pero antes lea y entiendela
 * 
 * 
 */


function Sentiment() {
    // let [fetchy, updateFetchy] = useState();
    // console.log(fetchy)
    // useEffect(() => {
    //     // const postRequest = {
    //     //     method: POST
    //     // }
    
    //     fetch('http://text-processing.com/api/sentiment')
    //     .then(r => r.json())
    //     .then(data = data.fetchy)

    // })

    const [sentiment, updateSentiment] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        
        const data = new FormData(e.target); // 1 este formato disponer de los datos del formulario

        fetch('http://text-processing.com/api/sentiment/', { // 2 hasta L36 permite enviar datos con POST
            method: 'POST',
            body: data
        })
            .then(r => r.json()) // 2.a es fetch k haciamos, devuelve formato json
            .then(s => updateSentiment(s.label)); // s.label lo indica la Api Sentiment Analysis
    }
// L43 es el evento k esta mandando el valor del text-area. k a su vez esta acociado a label <= 
    return (
            <React.Fragment>
            <form onSubmit={handleSubmit}> 
                <fieldset>
                    <legend>Analize Sentiment</legend>
                    <label htmlFor="sentiment">Introduzca texto</label>
                    <textarea required name="text" id="sentiment" cols="30" rows="10"></textarea>
                    <button type="submit">Analyze</button>
                </fieldset>
            </form>
            <p>{sentiment}</p>
            </React.Fragment>
    )
}
export default Sentiment; 
