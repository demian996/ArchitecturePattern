const MessageService = require('../application/MessageService');

class MessageController {
  constructor() {
    this.messageService = new MessageService();
  }

  getHello(req, res) {
    try {
      const language = req.query.lang || 'es';
      const message = this.messageService.getHelloMessage(language);
      
      res.json({
        success: true,
        data: {
          message: message.content,
          language: message.language,
          timestamp: message.timestamp,
          formatted: message.getFormattedMessage()
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  getAllMessages(req, res) {
    try {
      const messages = this.messageService.getAllMessages();
      
      res.json({
        success: true,
        data: messages.map(msg => ({
          message: msg.content,
          language: msg.language,
          timestamp: msg.timestamp,
          formatted: msg.getFormattedMessage()
        }))
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }
}

module.exports = MessageController;