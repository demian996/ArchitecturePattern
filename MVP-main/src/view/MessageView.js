class MessageView {
    displayMessage(message) {
        console.log("Vista:", message);
    }

    getUserInput() {
        // En un caso real, esto podría ser una entrada del usuario
        return "¡Hola Mundo desde el usuario!";
    }
}

module.exports = MessageView;

