const UserRepository = require('./userRepository');

class InMemoryUserRepository extends UserRepository {
  constructor() {
    super();
    this.users = [];
    this.nextId = 1;
  }

  async getAll() {
    return [...this.users];
  }

  async getById(id) {
    return this.users.find(user => user.id === id) || null;
  }

  async save(user) {
    const newUser = { ...user, id: this.nextId++ };
    this.users.push(newUser);
    return newUser;
  }
}

module.exports = InMemoryUserRepository;