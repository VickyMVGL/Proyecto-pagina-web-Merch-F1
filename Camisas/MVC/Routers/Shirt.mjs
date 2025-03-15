import { Router } from "express";
import { ShirtController } from "../Controllers/shirts.mjs";
import { ShirtModels } from "../Models/shirt.mjs";

const router = Router();
const shirtcontroller = new ShirtController({ ShirtModels: ShirtModels});
export const ShirtRouter = router;

// GET

ShirtRouter.get('/', shirtcontroller.getAll);
ShirtRouter.get('/:id', shirtcontroller.getByID);
ShirtRouter.get("/price/:price", shirtcontroller.getByPrice);
ShirtRouter.get('/exposor/:exposor', shirtcontroller.getByExposor);
ShirtRouter.get('/:id&:price', shirtcontroller.getByIDAndPrice);
