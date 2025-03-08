import express, {json} from 'express';
import cors from 'cors';
import {JacketRouter} from './MVC/Routers/jacket.mjs';


const PORT = process.env.PORT || 7575;
const app = express();
app.use(cors());
app.use(json());

app.use('/jackets', JacketRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});