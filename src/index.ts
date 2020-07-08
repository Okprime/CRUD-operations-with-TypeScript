import * as dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import express from 'express';
import './db-config';
import helmet from "helmet";
import route from './brand-route';

if (!process.env.PORT) {
    console.log(`Error to get ports`);
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const APP_NAME: string = process.env.APP_NAME as string

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(route);

app.listen(PORT, () => {
    console.log(`${APP_NAME} is listening on port ${PORT}`);
});

// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to CRUD operation using TypeScript'));



