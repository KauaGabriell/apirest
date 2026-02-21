import { Request, Response } from 'express';
import { AppError } from '../utils/AppError';
import { z } from 'zod';

class ProductController {
  index(req: Request, res: Response) {
    const { page, limit } = req.query; //Query Params

    res.send(`Página ${page} de ${limit}`);
  }

  create(req: Request, res: Response) {
    //Schema Zod
    const bodySchema = z.object({
      name: z
        .string({ error: 'Name is Required' })
        .min(5, { error: 'Min lenght is five' }),
      price: z.number({ error: 'Price is required' }),
    });

    const { name, price } = bodySchema.parse(req.body);

    // if (!name) {
    //   throw new AppError('Nome do produto é obrigatórios');
    // }

    // if (!price) {
    //   throw new AppError('Preço do produto é obrigatórios');
    // }

    // if (price < 0) {
    //   throw new AppError('Preço do produto deve ser maior que zero.');
    // }

    // throw new Error('Erro ao tentar criar um Produto'); //Simulação de Erro para aprendizado de tratamento de exceções
    // throw new AppError('Erro ao criar um Produto'); Simulação de erro com nossa classe de Erro.

    res.status(201).json({ name, price, user_id: req.user_id });
  }
}

export { ProductController };
