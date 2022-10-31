# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Link de la aplicación desplegada en heroku: https://ecuapoke.herokuapp.com/

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

## Desarrollo la App Front-end

La construcción de la aplicación esta realizada con react js, bootstrap, Axios, JavaScript, HTML y CSS.

### Creación de proyecto

Se Creó el proyecto con el comando en el instalador de paqutes(npm) "npx create-react-app my-app", con esto se me crea la estructura principal de un proyecto con react js.

### Instalacion de Axios

Se instaló Axios con el comando "npm i axios" para realizar las llamadas a la API rest de pokemones, en este caso solamente se utilizó para el metodo GET.

### Instalación de react Bootstrap

Se instaló react Bootstrap con el comando "npm install react-bootstrap bootstrap" para utilizar los componentes y estilos propios de esta libreria.

### Instalación de react-router

Se instaló react-router con el comando "npm install react-router-dom@6" para manejar todo el routeo de mi aplicación sin que se recargue la página y así obtener un SPA.

### Instalación de Helmet

Se instaló Helmet para manejar el título de cada página de la apliación.

### Creación de servicios

Se creó servicios para obtener los pokemones de la API, y así poder presentarlos en la aplicación.

### Creación de componentes

Se creó componentes que voy a reutilizar en varias partes de la aplicación y así solamente llamar a los que ya existen.

## Creación de Hooks personalizados

Así mismo como los componentes, se pueden crear hooks para poder utilizarlos a nivel de toda la aplicación sin la necesidad de crear varios cada vez que se necesite obtener información en una parte de la app.

## Creación de paginas

Se creó las páginas principales de la app, estas son 3: Home, Detalle y Pagina para ver los resultados de la búsqueda.

## Creación de Context

Se creó hooks de contexto para reutilizar la informacion a nivel de toda la aplicación.
