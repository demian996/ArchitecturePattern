const MessageModel = require('./src/model/MessageModel');
const MessageView = require('./src/view/MessageView');
const MessagePresenter = require('./src/presenter/MessagePresenter');

// Crear instancias
const model = new MessageModel();
const view = new MessageView();
const presenter = new MessagePresenter(model, view);

// Mostrar mensaje inicial
presenter.showMessage();

// Actualizar y mostrar nuevo mensaje
presenter.updateMessage();

