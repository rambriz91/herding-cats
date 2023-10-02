const inquirer = require('inquirer');
const mysql = require('mysql2');

//insert mysql password to create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Foolish1',
    database: 'employees_db'
});

//connects the user to the employee database.
db.connect((err) => {
    if (err) throw err;
    console.log('Accessing employee database');
    console.log('🐈🐈‍🐈🐈‍🐈🐈‍🐈🐈‍🐈🐈‍🐈');
    init();
});

//initializes the app on npm start.
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
                    addEmployee();
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
                    console.log('bye! 😊')
                    
                    break;
            }
        })
};

function viewEmployees() {
    const sql = 'SELECT * FROM employee';
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    });
};

function addEmployee() {
    let roles = [];
    let managers = [];

    async function getManagersAndRoles() {
        try {
                // Query for managers.
            const managersQuery = await new Promise((resolve, reject) => {
                db.query(`SELECT id, CONCAT(first_name , " ", last_name) AS name 
                FROM employee 
                WHERE role_id IN (12, 2, 3, 14, 8, 7) 
                ORDER BY id`, (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });

            managers = managersQuery.map(({ id, name }) => ({
                name,
                value: id,
            }));

             // Query for roles.
            const rolesQuery = await new Promise((resolve, reject) => {
                db.query("SELECT id, title FROM roles", (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });

            roles = rolesQuery.map(({ id, title }) => ({
                name: title,
                value: id,
            }));

            // Prompt for user input once both queries are complete.
            promptUserInput();
        } catch (err) {
            console.error(err);
        }
    }
    
    // Function to prompt user input.
    function promptUserInput() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'first',
                    message: `Enter your employee's first name.`,
                },
                {
                    type: 'input',
                    name: 'last',
                    message: `Enter your employee's last name.`,
                },
                {
                    type: 'list',
                    name: 'role',
                    message: `Enter your employee's role.`,
                    choices: roles,
                },
                {
                    type: 'list',
                    name: 'manager',
                    message: `Enter this employee's manager.`,
                    choices: [
                        { name: 'None', value: null },
                        ...managers,
                    ],
                },
            ])
            .then((data) => {
                const { first, last, role, manager } = data;
                const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES (?, ?, ?, ?)`;
                const values = [first, last, role, manager];
                db.query(sql, values, (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(`${first} ${last} added to the employee database.`);
                        init();
                    }
                });
            });
    }

    // Call the function to get managers and roles.
    getManagersAndRoles();
}
    