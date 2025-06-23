class MessageModel {
    constructor() {
        this.message = "¡Hola Mundo!";
    }

    getMessage() {
        return this.message;
    }

    setMessage(message) {
        this.message = message;
    }
}

module.exports = MessageModel;

