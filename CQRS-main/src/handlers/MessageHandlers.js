class MessageCommandHandler {
    handle(command) {
        // En un caso real, aquí se escribiría en una base de datos
        console.log(`Guardando mensaje: ${command.message}`);
    }
}

class MessageQueryHandler {
    handle(query) {
        // En un caso real, aquí se leería de una base de datos
        return "¡Hola Mundo!";
    }
}

module.exports = { MessageCommandHandler, MessageQueryHandler };

