const WriteMessageCommand = require('./src/commands/WriteMessageCommand');
const ReadMessageQuery = require('./src/queries/ReadMessageQuery');
const { MessageCommandHandler, MessageQueryHandler } = require('./src/handlers/MessageHandlers');

// Instanciar handlers
const commandHandler = new MessageCommandHandler();
const queryHandler = new MessageQueryHandler();

// Ejemplo de uso
const writeCommand = new WriteMessageCommand("¡Hola Mundo!");
commandHandler.handle(writeCommand);

const readQuery = new ReadMessageQuery();
const message = queryHandler.handle(readQuery);
console.log("Mensaje leído:", message);

