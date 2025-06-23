
## 📄 `factory/README.md`

# Factory Pattern - Hello World in Multiple Languages

This project demonstrates the **Factory Design Pattern** by creating message objects in different languages without exposing the creation logic to the client.

## 🏭 What is the Factory Pattern?

The **Factory Pattern** is a creational design pattern that provides an interface for creating objects, allowing subclasses or factory classes to decide which class to instantiate.

### How it works here:

- The user inputs a language (`es` or `en`).
- The **Factory** returns the appropriate implementation of the `Message` class.
- Each implementation provides the "Hello World" message in a specific language.

## 🚀 How to Run

```bash
cd factory
python main.py
