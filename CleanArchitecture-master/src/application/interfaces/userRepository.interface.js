class UserRepositoryInterface {
  save(user) {
    throw new Error("Método save() no implementado");
  }
  
  findById(id) {
    throw new Error("Método findById() no implementado");
  }
}

module.exports = UserRepositoryInterface;