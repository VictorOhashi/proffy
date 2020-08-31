import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(routes);

console.log('Listening on port 3333');

app.listen(3333);
