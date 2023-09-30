INSERT INTO department (dept_name)
VALUES 
('Sales'),
('Human Resoures'),
('Finance'),
('Legal'),
('Engineering'),
('Service');

INSERT INTO roles (title, salary, department_id)
VALUES 
('Sales Person', 80000.00, 1),
('Sales Manager', 100000.00, 1),
('Human Resource Manager', 100000.00, 2),
('Human Resources Specialist' 70000.00, 2),
('Accountant I', 65000.00, 3),
('Accountant II', 70000.00, 3),
('Finance Manager', 110000.00, 3),
('Legal Counsel', 200000.00, 4),
('Legal Aid', 55000.00, 4),
('Software Engineer I', 80000.00, 5),
('Software Engineer II', 100000.00, 5),
('Software Engineer Manager', 130000.00, 5),
('Customer Service Rep', 50000.00, 6),
('Customer Service Manager' 70000.00, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Karthik', 'Singh',12, NULL),
('Joanna','Valdez', 2, NULL),
('Kendra', 'Jones', 3, NULL),
('Anthony', 'Roman' 14, NULL),
('Gabriel', 'Nguyen' 8, NULL),
('Larry', 'Boyd', 7, NULL),
('Weston', 'Smith', 11, 1),
('Michael', 'Chen', 10, 1),
('James', 'Brown', 10, 1),
('Carla', 'Gomez', 11, 1),
('Ashley', 'Dubois', 1, 2),
('Nathan', 'Hansen', 1, 2),
('Joaqin', 'Garcia', 1, 2),
('Heather', 'Woods', 4, 3),
('Kelly', 'Brooks', 4, 3),
('Amber', 'Preciado' 13, 4),
('Dustin', 'Washington', 13, 4),
('Shelly', 'Kennedy', 13, 4),
('Angela', 'Romero', 9, 5),
('Kevin', 'Vu', 9, 5),
('Garth', 'Huntsman', 6, 6),
('Tenile', 'Madison', 5, 6);