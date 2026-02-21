import express from 'express';
import { myMiddleware } from './middlewares/myMiddleware';
import { routes } from './routes';

const app = express();
app.use(express.json());
const PORT = 1111;

//Dessa forma aplicamos o middleware de forma global.
app.use(myMiddleware);

//Routes
app.use(routes);

app.listen(PORT, () => {
  console.log('Servidor iniciando...');
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
