const Message = require('../../core/entities/message');

class MessageRepository {
    getMessage() {
        // En un caso real, esto podría venir de una base de datos
        return Promise.resolve(new Message("¡Hola Mundo!"));
    }
}

module.exports = MessageRepository;

