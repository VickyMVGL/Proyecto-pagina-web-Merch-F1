import { Router } from "express";
import { JacketController } from "../Controllers/jackets.mjs";
import { JacketModels } from "../Models/jacket.mjs";

const router = Router();
const Jacketcontroller = new JacketController({ JacketModels: JacketModels});
export const JacketRouter = router;

// GET

JacketRouter.get('/', Jacketcontroller.getAll);
JacketRouter.get('/:id', Jacketcontroller.getByID);
JacketRouter.get("/price/:price", Jacketcontroller.getByPrice);
JacketRouter.get('/exposor/:exposor', Jacketcontroller.getByExposor);
JacketRouter.get('/:id&:price', Jacketcontroller.getByIDAndPrice);