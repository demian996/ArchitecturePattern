class UserService {
  constructor(userRepository) {
    this.userRepo = userRepository;
  }

  async createUser(name, email) {
    if (!name || !email) throw new Error("Datos incompletos");
    
    const newUser = { name, email };
    return this.userRepo.save(newUser);
  }

  async listUsers() {
    return this.userRepo.getAll();
  }
}

module.exports = UserService;