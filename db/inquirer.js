const inquirer = require('inquirer');
const mysql = require('mysql2');
const {db} = require('./server');
const { QueryTypes } = require('sequelize');

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
                    connection.end();
                    
                    break;
            }
        })
};

function viewEmployees() {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.log(res);
        init();
    });
};

module.exports = {init};