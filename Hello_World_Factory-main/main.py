from factory.factory import MessageFactory

if __name__ == "__main__":
    lang = input("Enter language (en/es): ")
    try:
        message = MessageFactory.get_message(lang)
        print(message.say_hello())
    except ValueError as e:
        print(f"Error: {e}")
