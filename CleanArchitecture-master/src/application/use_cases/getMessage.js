class GetMessage {
    constructor(messageRepository) {
        this.messageRepository = messageRepository;
    }

    execute() {
        return this.messageRepository.getMessage();
    }
}

module.exports = GetMessage;

