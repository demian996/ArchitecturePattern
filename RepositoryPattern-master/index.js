const MessageRepository = require('./src/repositories/messageRepository');
const MessageService = require('./src/services/messageService');

// Crear instancias
const messageRepository = new MessageRepository();
const messageService = new MessageService(messageRepository);

// Obtener y mostrar el mensaje
messageService.getWelcomeMessage()
    .then(result => {
        if (result.success) {
            console.log("Mensaje recibido:", result.data.text);
        } else {
            console.error("Error:", result.error);
        }
    });