class MessageService {
    constructor(messageRepository) {
        this.messageRepository = messageRepository;
    }

    async getWelcomeMessage() {
        try {
            const message = await this.messageRepository.getMessage();
            return {
                success: true,
                data: message
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }
}

module.exports = MessageService;

