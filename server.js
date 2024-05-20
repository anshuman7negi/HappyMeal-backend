const express = require('express');
const pool = require('./config/db')

const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.send("hello world!");
})

app.listen(port,async () => {

    console.log(`app listening on port ${port}`);
    await pool.connect();
    console.log('Database connected!');
});