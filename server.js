const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Rutas
app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})