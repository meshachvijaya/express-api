import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js'

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`server run on http://localhost:${port}`);
})