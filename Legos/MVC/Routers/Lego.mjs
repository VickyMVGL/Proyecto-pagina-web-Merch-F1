import { Router } from "express";
import { LegosController } from "../Controller/Legos.mjs";
import { LegosModels } from "../Models/Lego.mjs";

const router = Router();
const legocontroller = new LegosController({LegosModels: LegosModels});
export const LegosRouter = router;

// GET
LegosRouter.get("/", legocontroller.getAll);
LegosRouter.get("/:id", legocontroller.getByID);
LegosRouter.get("/name/:name", legocontroller.getByName);
LegosRouter.get("/price/:price", legocontroller.getByPrice);
LegosRouter.get("/exposor/:exposor", legocontroller.getByExposor);
LegosRouter.get("/:id&:price", legocontroller.getByIDAndPrice);
LegosRouter.get("/:id&:name", legocontroller.getByIDAndName);