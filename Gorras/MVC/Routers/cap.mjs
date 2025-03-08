import { Router } from "express";
import { CapsController} from "../Controller/caps.mjs";
import { CapsModels } from "../Models/cap.mjs";

const router = Router();
const capscontroller = new CapsController({CapsModels: CapsModels});
export const CapsRouter = router;

// GET
CapsRouter.get("/", capscontroller.getAll);
CapsRouter.get("/:id", capscontroller.getByID);
CapsRouter.get("/name/:name", capscontroller.getByName);
CapsRouter.get("/price/:price", capscontroller.getByPrice);
CapsRouter.get("/exposor/:exposor", capscontroller.getByExposor);
CapsRouter.get("/:id&:price", capscontroller.getByIDAndPrice);
CapsRouter.get("/:id&:name", capscontroller.getByIDAndName);