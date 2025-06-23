const MessageRepository = require('./src/infrastructure/repositories/messageRepository');
const GetMessage = require('./src/application/use_cases/getMessage');
const MessageController = require('./src/interface_adapters/controllers/messageController');

// Configurar dependencias
const messageRepository = new MessageRepository();
const getMessageUseCase = new GetMessage(messageRepository);
const messageController = new MessageController(getMessageUseCase);

// Usar el controlador
messageController.getMessage()
  .then(response => {
    console.log(`Status: ${response.status}`);
    console.log("Mensaje:", response.body.message);
  });
