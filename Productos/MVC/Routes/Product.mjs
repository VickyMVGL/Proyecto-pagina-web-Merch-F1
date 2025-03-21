import { Router } from 'express'
import { ProductController } from '../controllers/ProductController.js'
import { ModelsProducts } from '../Models/Products.mjs'

const router = Router();
const controllerproduct = new ProductController({ ModelsProducts: ModelsProducts});
export const RouterProducts = router;

// GET
RouterProducts.get('/', controllerproduct.getAll);
RouterProducts.get('/:id', controllerproduct.getByID);
RouterProducts.get('/exposor/:exposor', controllerproduct.getByExposor);