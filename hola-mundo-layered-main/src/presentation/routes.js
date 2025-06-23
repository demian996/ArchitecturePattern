const express = require('express');
const MessageController = require('./MessageController');

const router = express.Router();
const messageController = new MessageController();

router.get('/hello', (req, res) => messageController.getHello(req, res));
router.get('/messages', (req, res) => messageController.getAllMessages(req, res));

module.exports = router;