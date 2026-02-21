import express from 'express';

const app = express();
const PORT = 1111;

app.get('/products/:id', (req, res) => {
  const { id } = req.params; //Route Params
  res.send(`Produto ${id}`);
});

app.get('/products', (req, res) => {
  const { page, limit } = req.query; //Query Params

  res.send(`Página ${page} de ${limit}`);
});

app.listen(PORT, () => {
  console.log('Servidor iniciando...');
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
