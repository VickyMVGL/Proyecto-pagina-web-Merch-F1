import { Router } from 'express'
import { ControllerProducts } from '../Controllers/Product.mjs';
import { ModelsProducts } from '../Models/Products.mjs'

const router = Router();
const controllerproduct = new ControllerProducts({ ModelsProducts: ModelsProducts})
export const RouterProducts = router;

// GET
RouterProducts.get('/', controllerproduct.getAll);
RouterProducts.get('/:id', controllerproduct.getByID);
RouterProducts.get('/exposor/:exposor', controllerproduct.getByExposor);