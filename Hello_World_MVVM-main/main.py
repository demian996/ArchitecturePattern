from model import MessageModel
from viewmodel import MessageViewModel
from view import ConsoleView

if __name__ == "__main__":
    model = MessageModel()
    viewmodel = MessageViewModel(model)
    view = ConsoleView(viewmodel)
    view.render()
