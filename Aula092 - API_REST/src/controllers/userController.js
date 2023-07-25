import User from '../models/user';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
      console.log(e);
    }
  }
}
// O QUE FALTA FAZER
// INDEX
async index(req, res){
  try {
    const usuarios = await User.findAll();
    return res.json(usuarios)
  }catch (e){
    return res.json(null);
  }
}
// SHOW

// UPDATE

// DELETE
export default new UserController();
