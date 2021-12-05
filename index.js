/**Variables de librerias */
const dotenv = require('dotenv');
const express = require('express');
const httpContext = require('express-http-context');
const https = require('https');

/**Variables del script */
const app = express();

app.use(httpContext.middleware);
app.use(express.json());

/** Variables de archivos para rutas */
const colorsRoutes = require('./src/routes/v1/colors.route.js');

/**Rutas */
app.use('/v1/colors', colorsRoutes);

const PORT = process.env.HTTP_PORT || 8080;

app.listen(PORT, () => {
	console.log('Server is up and running on port number ' + PORT);
});
