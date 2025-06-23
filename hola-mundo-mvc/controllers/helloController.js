const HelloModel = require('../models/HelloModel');

const helloController = {
    // Mostrar página principal
    getHello: (req, res) => {
        const data = HelloModel.getDefaultMessage();
        res.render('hello', { 
            title: 'Hola Mundo MVC',
            message: data.message,
            timestamp: data.timestamp
        });
    },

    // Mostrar saludo personalizado
    getHelloWithName: (req, res) => {
        const name = req.params.name || 'Visitante';
        const data = HelloModel.getPersonalizedMessage(name);
        res.render('hello', { 
            title: 'Hola Mundo MVC',
            message: data.message,
            timestamp: data.timestamp
        });
    }
};

module.exports = helloController;