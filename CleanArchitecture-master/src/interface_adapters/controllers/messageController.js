class MessageController {
    constructor(getMessageUseCase) {
        this.getMessageUseCase = getMessageUseCase;
    }

    async getMessage() {
        try {
            const message = await this.getMessageUseCase.execute();
            return {
                status: 200,
                body: {
                    message: message.text
                }
            };
        } catch (error) {
            return {
                status: 500,
                body: {
                    error: error.message
                }
            };
        }
    }
}

module.exports = MessageController;

