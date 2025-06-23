class UserController {
  /**
   * @param {CreateUser} createUserUseCase 
   */
  constructor(createUserUseCase) {
    this.createUser = createUserUseCase;
  }

  async create(req) {
    try {
      const { name, email } = req;
      const user = await this.createUser.execute(name, email);
      return { status: 201, body: user };
    } catch (error) {
      return { status: 400, body: { error: error.message } };
    }
  }
}

module.exports = UserController;