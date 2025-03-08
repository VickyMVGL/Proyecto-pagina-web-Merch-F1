import express, {json} from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 7575;
const app = express();
app.use(cors());
app.use(json());

app.use('/jackets',)