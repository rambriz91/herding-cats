const inquirer = require('inquirer');
const mysql = require('mysql2');

//filters managers from db.
const managers = db.query(`SELECT id, CONCAT(first_name , " ", last_name) 
AS manager 
FROM employee 
WHERE role_id IN (12, 2, 3, 14, 8, 7) 
ORDER BY id;`)
;
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
        .then((data) =>{
            const {selection} = data;
            switch (selection) {
                case 'View All Employees':
                    viewEmployees();
                    break;
                case 'Add Employee':
                    
                    break;
                case 'View All Roles':
                    
                    break;
                case 'Add Role':
                    
                    break;
                case 'View All Departments':
                    
                    break;
                case 'Add Department':
                    
                    break;
                case 'Quit':
                    db.end();
                    
                    break;
            }
        })
};

function viewEmployees() {
    const sql = 'SELECT * FROM employee';
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.log(res);
        init();
    });
};

function addEmployee() {
    inquirer
        .prompt(
            {
                type:'input',
                name:'first',
                message:`Enter your employee's first name.`
            },
            {
                type:'input',
                name:'last',
                message:`Enter your employee's last name.`
            },
            {
                type:'list',
                name:'role',
                message: `Enter your employee's role.`,
                choices: []
            }
        );
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (${employee.first_name}, ${employee.last_name}, ${role_id}, ${manager_id})`
}