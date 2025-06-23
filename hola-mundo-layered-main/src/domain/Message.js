class Message {
  constructor(content, language = 'es') {
    this.content = content;
    this.language = language;
    this.timestamp = new Date();
  }

  getFormattedMessage() {
    return `[${this.timestamp.toISOString()}] ${this.content}`;
  }
}

module.exports = Message;