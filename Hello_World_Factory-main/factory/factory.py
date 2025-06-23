from implementations.implementations import EnglishMessage, SpanishMessage

class MessageFactory:
    @staticmethod
    def get_message(language_code):
        if language_code == "en":
            return EnglishMessage()
        elif language_code == "es":
            return SpanishMessage()
        else:
            raise ValueError("Unsupported language. Use 'en' or 'es'.")
