from message.message import Message

class EnglishMessage(Message):
    def say_hello(self):
        return "Hello World"

class SpanishMessage(Message):
    def say_hello(self):
        return "Hola Mundo"
