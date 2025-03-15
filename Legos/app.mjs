import express, {json} from 'express';
import cors from 'cors';
import { LegosRouter } from './MVC/Routers/Lego.mjs';


const PORT = process.env.PORT || 9595;
const app = express();
app.use(cors());
app.use(json());

app.use('/legos', LegosRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});