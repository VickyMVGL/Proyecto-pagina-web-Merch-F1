import express, {json} from 'express';
import cors from 'cors';
import { userRouter } from './MVC/Routers/users.mjs';

const PORT = process.env.PORT || 7575;
const app = express();
app.use(cors());
app.use(json());

app.use('/Users', userRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});