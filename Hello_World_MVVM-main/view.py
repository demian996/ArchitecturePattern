class ConsoleView:
    def __init__(self, viewmodel):
        self._viewmodel = viewmodel

    def render(self):
        print(self._viewmodel.get_message())
