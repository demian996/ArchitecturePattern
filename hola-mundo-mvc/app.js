const express = require('express');
const path = require('path');
const helloController = require('./controllers/helloController');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', helloController.getHello);
app.get('/hello/:name?', helloController.getHelloWithName);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;