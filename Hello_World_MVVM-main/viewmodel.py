class MessageViewModel:
    def __init__(self, model):
        self._model = model

    def get_message(self):
        return self._model.message
