import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/connectDB.js';
import { clerkWebhooks } from './controllers/webhooks.js';

const app = express();

connectDB();
app.use(cors());
app.use(express.json())

app.get('/', (req,res) => res.send("API is working"))

app.post('/webhooks', clerkWebhooks)


const PORT = process.env.PORT || 4600

app.listen(PORT, () => {
    console.log("Server is running...")
})