class MessagePresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    showMessage() {
        const message = this.model.getMessage();
        this.view.displayMessage(message);
    }

    updateMessage() {
        const newMessage = this.view.getUserInput();
        this.model.setMessage(newMessage);
        this.showMessage();
    }
}

module.exports = MessagePresenter;

