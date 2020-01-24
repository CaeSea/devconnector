const express = require('express');
const connectDb = require('./config/db');

const app = express();
connectDb();

app.get('/', (req, res) => res.send('Hello there!'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Port ${PORT} is listening...`));
