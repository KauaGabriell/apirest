import express from 'express';
import { myMiddleware } from './middlewares/myMiddleware';

const app = express();
app.use(express.json());
const PORT = 1111;

//Dessa forma aplicamos o middleware de forma global.
app.use(myMiddleware);

app.get('/products/:id', (req, res) => {
  const { id } = req.params; //Route Params
  res.send(`Produto ${id}`);
});

app.get('/products', (req, res) => {
  const { page, limit } = req.query; //Query Params

  res.send(`Página ${page} de ${limit}`);
});

app.post('/products', myMiddleware, (req, res) => { //Dessa forma passamos o middleware de forma local e o "next" fica responsável por "passar" a requisição para a próxima função.
  const { name, price } = req.body;

  res.status(200).json({ name, price });
});

app.listen(PORT, () => {
  console.log('Servidor iniciando...');
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
