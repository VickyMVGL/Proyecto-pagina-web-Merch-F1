import express, {json} from 'express';
import cors from 'cors';


const PORT = process.env.PORT || 5555;
const app = express();
app.use(cors());
app.use(json());

app.use('/keys',);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});