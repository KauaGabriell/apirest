import express, { Request, Response, NextFunction } from 'express';
import { myMiddleware } from './middlewares/myMiddleware';
import { routes } from './routes';

const app = express();
app.use(express.json());
const PORT = 1111;

//Dessa forma aplicamos o middleware de forma global.
app.use(myMiddleware);

//Routes
app.use(routes);

//Tratamento de exceções
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: error.message });
});

app.listen(PORT, () => {
  console.log('Servidor iniciando...');
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
