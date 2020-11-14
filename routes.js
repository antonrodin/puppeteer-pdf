const express = require('express');
const router = express.Router();
const PDFController = require('./controllers/PDFController')

router.get('/', (req, res) => {
    res.render('home')
});

// Rutas para las facturas
router.get('/factura', PDFController.factura);
router.get('/descargar', PDFController.descargar);

module.exports = router;