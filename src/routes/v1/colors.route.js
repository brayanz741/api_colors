const express = require('express');
const router = express.Router();
const colorsController = require('../../controllers/v1/colors.controller.js');

//Colores
router.get('/', colorsController.getColors);
router.get('/pages/:page', colorsController.getColorsPerPage);
router.get('/:id_color', colorsController.getColorById);
router.post('/', colorsController.createColor);

module.exports = router;
