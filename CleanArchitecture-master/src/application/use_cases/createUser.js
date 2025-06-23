const User = require('../../core/user.entity');
const UserRepositoryInterface = require('../interfaces/userRepository.interface');

class CreateUser {
  /**
   * @param {UserRepositoryInterface} userRepository 
   */
  constructor(userRepository) {
    this.userRepo = userRepository;
  }

  async execute(name, email) {
    const id = Date.now().toString();
    const user = new User(id, name, email);
    user.validate();
    return this.userRepo.save(user);
  }
}

module.exports = CreateUser;