const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded( {extended: false}));
app.use(express.json());

//insert mysql password to create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Accessing employee database');
    init();
})

function init() {
    inquirer
        .prompt({
            type: 'list',
            name: 'selection',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'Quit'
            ]
        })
}

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