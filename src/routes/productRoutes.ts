import { myMiddleware } from '../middlewares/myMiddleware';
import { ProductController } from '../controllers/ProductController';
import express from 'express';

const productsRoutes = express.Router();
const productsController = new ProductController();

productsRoutes.get('/', productsController.index);
productsRoutes.post('/', myMiddleware, productsController.create);

export default productsRoutes;
