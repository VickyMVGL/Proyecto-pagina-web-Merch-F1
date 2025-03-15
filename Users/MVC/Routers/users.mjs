import {Router} from 'express';
import { UserController } from '../Controller/user.mjs';
import { UserRepository } from '../Models/user-reposity.mjs';

const router = Router();
const usercontroller = new UserController({UserRepository: UserRepository});
export const userRouter = router;

// POST
router.post('/register', usercontroller.createUser);
router.post('/login', usercontroller.Login);