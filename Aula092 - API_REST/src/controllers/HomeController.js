import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Silva',
      email: 'mariasilva@hotmail.com',
      idade: 23,
      peso: 50,
      altura: 1.65,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
