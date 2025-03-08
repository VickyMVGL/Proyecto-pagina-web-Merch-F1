import express, {json} from 'express';
import cors from 'cors';



const PORT = process.env.PORT || 8585;
const app = express();
app.use(cors());
app.use(json());

app.use('/caps',);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});