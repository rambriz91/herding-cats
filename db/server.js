const express = require('express');
const mysql = require('mysql2');
const {init} = require('./inquirer')

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded( {extended: false}));
app.use(express.json());

//insert mysql password to create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Foolish1',
    database: 'employees_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Accessing employee database');
    init();
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

module.exports = {db};