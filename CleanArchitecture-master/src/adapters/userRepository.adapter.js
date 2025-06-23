// Implementación concreta para almacenamiento
class InMemoryUserRepository {
  constructor() {
    this.users = [];
  }

  async save(user) {
    this.users.push(user);
    return user;
  }
}

module.exports = InMemoryUserRepository;