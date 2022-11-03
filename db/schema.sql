/* 3 tables 
1. department: 
- id: INT PRIMARY KEY
- name: VARCHAR(30)
2. ROLE: 
- id: INT PRIMARY KEY
- title: VARCHAR(30)
- salary: DECIMAL
- department_id: INT
3. employee: 
- id: INT PRIMARY KEY
- first_name: VARCHAR(30)
- last_name: VARCHAR(30)
- role_id: INT(30)
- manager_id: INT (NULL IF EMPLOYEE HAS NO MANAGER)
*/

/* Create new name for this database */
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

/* table for department*/
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30)
);

/* table for role*/
CREATE TABLE roleName (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_id INT,
  title VARCHAR(30),
  salary INTEGER,
  FOREIGN KEY(department_id)
  REFERENCES department(id)
  /*ON DELETE SET NULL*/
);

/* table for employee*/
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  manager_id INT,
  roleName_id INT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  FOREIGN KEY(roleName_id)
  REFERENCES roleName(id)
  /*ON DELETE SET NULL*/
);