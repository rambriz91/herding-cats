const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded( {extended: false}));
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Null',
    database: 'employees_db'
});

app.get('/api/employees', (req, res) => {
    console.log('Hello World')
});

app.post('/api/employees', (req, res) => {
    const { body } = req;
    const sql = `INSERT INTO employee () 
        VALUES (?)`
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});