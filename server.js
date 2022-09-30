const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
// const path = require("path");
require("dotenv").config();
// requiring mysql 
const mysql = require('mysql2');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connection to the mysql database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PW,
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// test get route
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// GET all the candidates
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// GET a single candidate 
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err)
    }
    console.log(row);
});

// DELETE a candidate 
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(result);
// })

// Default response for any other request (Not found)
app.use((req, res) => {
    res.status(404).end()
})

// function to start the server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});