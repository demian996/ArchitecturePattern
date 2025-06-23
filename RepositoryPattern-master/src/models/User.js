class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  validate() {
    if (!this.email.includes('@')) {
      throw new Error("Email inválido");
    }
  }
}

module.exports = User;