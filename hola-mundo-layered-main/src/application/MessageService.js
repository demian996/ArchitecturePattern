const Message = require('../domain/Message');

class MessageService {
  getHelloMessage(language = 'es') {
    const messages = {
      'es': 'Hola Mundo',
      'en': 'Hello World',
      'fr': 'Bonjour le Monde'
    };

    const content = messages[language] || messages['es'];
    return new Message(content, language);
  }

  getAllMessages() {
    return [
      this.getHelloMessage('es'),
      this.getHelloMessage('en'),
      this.getHelloMessage('fr')
    ];
  }
}

module.exports = MessageService;