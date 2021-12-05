const colorsService = require('../../services/colors.services.js');

exports.getColors = async (req, res) => {
	try {
		const colors = await colorsService.getColors();
		res.status(200).json({
			data: colors,
			message: 'Colors listed',
		});
	} catch (error) {
		console.log(error);
	}
};

exports.getColorsPerPage = async (req, res) => {
	try {
		const limit = 5;
		const colors = await colorsService.getColorsPerPage(req.params.page, limit);
		const counter = await colorsService.getColorsCounter();
		let counters = {
			total_fields: counter,
			showing: limit,
			total_pages: Math.ceil(counter / limit),
			current_page: req.params.page * 1,
			remaining_fields: counter - req.params.page * limit < 0 ? 0 : counter - req.params.page * limit,
		};
		res.status(200).json({
			data: colors,
			counters,
			message: 'Colors listed',
		});
	} catch (error) {
		console.log(error);
	}
};

exports.getColorById = async (req, res) => {
	try {
		const { id_color } = req.params;
		const colors = await colorsService.getColorById(id_color);
		res.status(200).json({
			data: colors,
			message: 'Colors listed',
		});
	} catch (error) {
		console.log(error);
	}
};

exports.createColor = async (req, res) => {
	try {
		console.log(req.params);
		const { name, year, color, pantone_value } = req.body;
		if (isNaN(year)) {
			res.status(400).json({
				message: 'Year must be a number',
			});
			return;
		}
		if (color.charAt(0) != '#') {
			res.status(400).json({
				message: 'Color must be a hexadecimal',
			});
			return;
		}
		if (pantone_value.charAt(2) != '-') {
			res.status(400).json({
				message: 'Pantone value must be a valid pantone value',
			});
			return;
		}
		const colors = await colorsService.createColor({ name, year, color, pantone_value });
		res.status(200).json({
			data: colors,
			message: 'Color created',
		});
	} catch (error) {
		console.log(error);
	}
};
