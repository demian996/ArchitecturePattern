const IMessageRepository = require('./IMessageRepository');
const Message = require('../models/message');

class MessageRepository extends IMessageRepository {
    constructor() {
        super();
        // En un caso real, aquí se inicializaría la conexión a la base de datos
    }

    getMessage() {
        // Simulamos obtener un mensaje desde una fuente de datos
        return Promise.resolve(new Message(1, "¡Hola Mundo!"));
    }
}

module.exports = MessageRepository;

