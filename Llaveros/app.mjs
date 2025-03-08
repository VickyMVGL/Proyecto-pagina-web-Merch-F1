import express, {json} from 'express';
import cors from 'cors';
import { KeysRouter } from './MVC/Routers/Key.mjs';


const PORT = process.env.PORT || 5555;
const app = express();
app.use(cors());
app.use(json());

app.use('/keys', KeysRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});