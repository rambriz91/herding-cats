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
('Sales Person', 80,000, 1),
('Sales Manager', 100,000, 1),
('Human Resource Manager', 100,000, 2),
('Human Resources Specialist' 70,000, 2),
('Accountant I', 65,000, 3),
('Accountant II', 70,000, 3),
('Finance Manager', 110,000, 3),
('Legal Counsel', 200,000, 4),
('Legal Aid', 55,000, 4),
('Software Engineer I', 80,000, 5),
('Software Engineer II', 100,000, 5),
('Software Engineer Manager', 130,000, 5),
('Customer Service Rep', 50,000, 6),
('Customer Service Manager' 70,000, 6);

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