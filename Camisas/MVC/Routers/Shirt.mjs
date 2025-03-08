import { Router } from "express";
import { ShirtController } from "../Controllers/shirts.mjs";
import { ShirtModels } from "../Models/shirt.mjs";

const router = Router();
const shirtcontroller = new ShirtController({ ShirtModels: ShirtModels});
export const ShirtRouter = router;

ShirtRouter.get('/', shirtcontroller.getAll);