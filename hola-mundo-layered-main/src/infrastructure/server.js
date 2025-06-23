const express = require('express');
const routes = require('../presentation/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Hola Mundo - Layered Architecture',
    endpoints: {
      hello: '/api/hello?lang=es|en|fr',
      all_messages: '/api/messages'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`Visita: http://localhost:${PORT}`);
});