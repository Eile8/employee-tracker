/*Ask questions in the terminal
const inquirer = require ('inquirer');
//const fs = require('fs')


//Questions that will appear in the terminal
function questions() {
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: 'what would you like to do?',
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
        },
    ]).then((answers) => {
        console.log("I got it!")
    })
}
questions()
       /* if (answers.options==="view all departments") {
            //sql: table shows dept names and ids
        } else if (answers.options==="view all roles") {
            //sql: table shows job title, role id, dept of the role, salary of the role
        } else if (answers.options === "view all employees") {
            //sql: table shows employee data (ids, first and last names, job titles, dept, salaries, and managers)
        } else if (answers.options === "add a department") {
            const department = await inquirer 
            .prompt ([
                {
                    type: "input",
                    name: "dept", 
                    message: "What is your department?"
                }
            ]) //add input to sql database
        } else if (answers.options==="add a role") {
            const role = await inquirer 
            .prompt ({
                {
                    type:"input",
                    name: "role",
                    message: "What is your role?",
                },
                {
                    type: "input", 
                    name: "deptName", 
                    message: "What department?",


                },
                {
                    type: "input", 
                    name: "salary", 
                    message: "What is your salary?",
                },
            })
        } else if (answers.options==="add an employee") {
            const employee = await inquirer 
            .prompt ([
                {
                    type: "input", 
                    name: "firstName", 
                    message: "What is your first name?"
                }, 
                {
                    type: "input", 
                    name: "lastName", 
                    message: "What is your last name?"
                }, 
                {
                    type: "input", 
                    name: "role", 
                    message: "What is your role?"
                }, 
                {
                    type: "input", 
                    name: "manager", 
                    message: "Who is your manager?"
                }
            ])
        } else if (answers.options==="update an employee role") {
            const update = await inquirer
            .prompt ([
                {
                    type: "list", 
                    name: "update", 
                    choices: [/*select from the existing employee list in sql?!]*/



//Gather all the inputs from the user and then populate into the table in sql. . 
/*then((answers)=> {
    console.log(answers)
    
    fs.writeFile('README.md', markdown(answers), function (err) {
        if (err) throw err;
        console.log(markdown);
    }); 
}
*/