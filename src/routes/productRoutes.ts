import { myMiddleware } from '../middlewares/myMiddleware';
import express from 'express';

const productsRoutes = express.Router();

productsRoutes.get('/:id', (req, res) => {
  const { id } = req.params; //Route Params
  res.send(`Produto ${id}`);
});

productsRoutes.get('/', (req, res) => {
  const { page, limit } = req.query; //Query Params

  res.send(`Página ${page} de ${limit}`);
});

productsRoutes.post('/', myMiddleware, (req, res) => {
  //Dessa forma passamos o middleware de forma local e o "next" fica responsável por "passar" a requisição para a próxima função.
  const { name, price, user_id } = req.body;

  res.status(200).json({ name, price, user_id: req.user_id });
});

export default productsRoutes;
