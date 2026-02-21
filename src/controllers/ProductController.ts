import { Request, Response } from 'express';
import { AppError } from '../utils/AppError';

class ProductController {
  index(req: Request, res: Response) {
    const { page, limit } = req.query; //Query Params

    res.send(`Página ${page} de ${limit}`);
  }

  create(req: Request, res: Response) {
    //Dessa forma passamos o middleware de forma local e o "next" fica responsável por "passar" a requisição para a próxima função.
    const { name, price, user_id } = req.body;

    // throw new Error('Erro ao tentar criar um Produto'); //Simulação de Erro para aprendizado de tratamento de exceções

    // throw new AppError('Erro ao criar um Produto'); Simulação de erro com nossa classe de Erro.
  }
}

export { ProductController };
