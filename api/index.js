import './config/instrument.js';
import express from 'express';
import bodyParser from 'body-parser'; 
import cors from 'cors'; 
import connectDB from './config/mongodb.js';
import { config } from 'dotenv'; 
import * as Sentry from "@sentry/node";
config();
const app = express();

app.use(bodyParser.json()); 
app.use(cors()); 

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js app!');
});
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });
connectDB();

const PORT = process.env.PORT || 3000; 
//asign sentry after port//
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});