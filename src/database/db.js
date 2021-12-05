/**Variables de librerias */
const dotenv = require('dotenv');
const mysql = require('mysql2/promise');
dotenv.config();

/**Declaración y exportación de la conexión a bd */
exports.connection = async function () {
	try {
		const connectionData = {
			host: process.env._HOSTDB_,
			user: process.env._USERDB_,
			password: process.env._PASSDB_,
			database: process.env._DB_,
		};

		const connectionPool = await mysql.createPool(connectionData);
		return connectionPool;
	} catch (error) {
		console.log(error);
	}
};
