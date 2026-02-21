import express from 'express';

const app = express();
const PORT = 1111;

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Produto ${id}`);
});

app.listen(PORT, () => {
  console.log('Servidor iniciando...');
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
