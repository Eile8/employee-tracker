/* Insert the actual data, so it populates when runing the api in Insomnia*/

USE employees_db

INSERT INTO department(id, department_name)
VALUES
       (1, "customer service"),
       (2, "accounting"),
       (3, "health"),


INSERT INTO roleName (id, department_id, title, salary)
VALUES (1, "sales", 5090),
       (2, "fiscal agent", 5560),
       (3, "assistant", 7000),

INSERT INTO employee (id, roleName_id, first_name, last_name, manager_id)
VALUES (1, "Alex", "Ender", 6879),
       (2, "Chris", "Tine" 5560),
       (3, "Eliza", "Beth", 7001),
