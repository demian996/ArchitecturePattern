const UserRepositoryInterface = require('../../application/interfaces/userRepository.interface');

class UserRepository extends UserRepositoryInterface {
  constructor() {
    super();
    this.users = [];
  }

  async save(user) {
    this.users.push(user);
    return user;
  }

  async findById(id) {
    return this.users.find(u => u.id === id) || null;
  }
}

module.exports = UserRepository;