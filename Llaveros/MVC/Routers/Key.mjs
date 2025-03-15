import {Router} from 'express';
import { KeysControllers } from '../Controller/Key.mjs';
import { KeysModels } from '../Models/Keys.mjs';

const router = Router();
const keycontrollers = new KeysControllers({KeysModels: KeysModels});
export const KeysRouter = router;

// GET
KeysRouter.get("/", keycontrollers.getAll);
KeysRouter.get("/:id", keycontrollers.getByID);
KeysRouter.get("/name/:name", keycontrollers.getByName);
KeysRouter.get("/price/:price", keycontrollers.getByPrice);
KeysRouter.get("/exposor/:exposor", keycontrollers.getByExposor);
KeysRouter.get("/:id&:price", keycontrollers.getByIDAndPrice);
KeysRouter.get("/:id&:name", keycontrollers.getByIDAndName);