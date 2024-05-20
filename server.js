const express = require('express');
const authRoutes = require('./routes/authRoutes');
const pool = require('./config/db')

const app = express();
const port = 3000;

app.use(express.json());

app.use('/auth', authRoutes);

app.listen(port,async () => {

    console.log(`app listening on port ${port}`);
    await pool.connect();
    console.log('Database connected!');
});