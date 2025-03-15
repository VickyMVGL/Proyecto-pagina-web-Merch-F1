import express, {json} from 'express';
import cors from 'cors';
import { ShirtRouter } from './MVC/Routers/Shirt.mjs';

const PORT = process.env.PORT || 2005;

const app = express();

app.use(cors());
app.use(json());

app.use('/shirts', ShirtRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});