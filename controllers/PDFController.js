const puppeteer = require('puppeteer');

async function crearFactura(url) {

    // Abrir el navegador
    let navegador = await puppeteer.launch();

    // Creamos una nueva pestaña o pagina
    let pagina = await navegador.newPage();

    // Abrir la url dentro de esta pagina
    await pagina.goto(url);

    // Vamos a crear nuestro PDF
    let pdf = await pagina.pdf();

    // Cerrar el navegador
    navegador.close();

    return pdf;
}

module.exports = {

    factura(req, res) {
        res.render('pdfs/factura', { layout: "pdf" });
    },

    async descargar(req, res) {
        // Crear nustra factura
        let pdf = await crearFactura("http://localhost:3000/factura");

        // Devolver el response como PDF
        res.contentType('application/pdf');
        res.send(pdf);
    }

}