import express, {json} from 'express';
import cors from 'cors';
import { RouterProducts } from './MVC/Routes/Product.mjs';

const PORT = process.env.PORT || 1000;
const app = express();
app.use(cors());
app.use(json());

app.use('/products', RouterProducts);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})