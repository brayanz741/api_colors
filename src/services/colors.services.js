const conex = require('../database/db.js');

(async () => {
	try {
		fconex = await conex.connection();
	} catch (error) {
		console.log(error);
		throw error;
	}
})();

exports.getColors = async function () {
	try {
		const [rows, fields] = await fconex.query('SELECT id,name,color FROM colors');
		return rows;
	} catch (error) {
		console.log(error);
	}
};

exports.getColorsPerPage = async function (page, limit = 5) {
	try {
		const [rows, fields] = await fconex.query('SELECT id,name,color FROM colors LIMIT ?, ?', [(page - 1) * limit, limit]);
		return rows;
	} catch (error) {
		console.log(error);
	}
};

exports.getColorsCounter = async function () {
	try {
		const [rows, fields] = await fconex.query('SELECT COUNT(*) AS counter FROM colors');
		return rows[0].counter;
	} catch (error) {
		console.log(error);
	}
};

exports.getColorById = async function (id) {
	try {
		const [rows, fields] = await fconex.query('SELECT * FROM colors WHERE id = ?', [id]);
		return rows;
	} catch (error) {
		console.log(error);
	}
};

exports.createColor = async function (color) {
	try {
		const [rows, fields] = await fconex.query('INSERT INTO colors SET ?', color);
		return rows;
	} catch (error) {
		console.log(error);
	}
};
