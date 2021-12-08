const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let fullTeam = [];

function kickPrompt() {

    return inquirer.prompt ([
{ 
type:"list",
message: "Choose the employee work role",
name: "workrole",
choices: ["Manager", "Engineer", "Intern"]
}

    ]).then(response => {


        if(response.choices === "Manager") {

            kickManager();
    } else if (response.choices === "Engineer") {

        kickEngineer();

    } else if (response.choices ==="Engineer") {

      kickEngineer();


    } else 

        kickIntern();

});
}

function kickManager() {


    return inquirer.prompt([
 { 
     type: "input",
     message: "Manager Name:",
     name: "name"
         

},

{ 

    type: "input",
    message: "Manager ID:",
    name: "id"


},
{  
    type: "input",
    message: "Manager Email:",
    name: "email"
},
{

    type:"input",
    message: " Manager Office Number:",
    name: "officeNumber"

},

{
 
  type: "list",
  message: "Choose type of next employee",
  name: "workroleNew",
  choices: ["Manager", "Engineer", "Intern", "None"]

}

    ]).then(response => {

         fullTeam.push(new Manager(response.name, response.id, response.email, response.officeNumber))
         if(response.workroleNew === "Manager") {

            kickManager();

         } else if(response.workroleNew === "Engineer") {

            kickEngineer();
         } else if(response.workroleNew === "Intern") {

            kickIntern();
         } else {

            buildPage()
         }
    });

};

function kickEngineer () {


    return inquirer.prompt([
        {
            type: "input",
            message: "Engineer Name:",
            name: "name"
},
{
  type: "input",
  message: "Engineer ID:",
  name: "id"


},
{
 type: "input",
 message: "Engineer Email:",
 name: "email"


},
{
  type: "input"
  message:"Engineer Github Username:",
  name: "github"

},
{

    type: "list",
    message: "Choose employee type",
    name: "workroleNew",
    choices: ["Manager", "Engineer","Intern", "None"]
}

    ]).then(response => {

        fullTeam.push(new Engineer(response.name, response.id, response.email, response.github))
        if(response.workroleNew === "Manager") {

            kickManager();
        } else if(response.workroleNew === "Engineer") {
            kickEngineer();

    } else if(response.workroleNew === "Intern") {

        kickIntern();
    } else {
        buildPage()
    }
    })
};

function teamProfiles(){

let cardString = "";
for(i = 0 ; i < fullTeam.length; i++) {
cardString = cardString + `<div class="card bg-secondary text-white" style="width: 18rem;">
<h5 class="card-header bg-primary">${fullTeam[i].name}</h5>
<h6 class="card-header card-subtitle mb-2 bg-primary">${fullTeam[i].getRole() === "Engineer" ? `<i class="fas fa-glasses"></i>`:" "}
${fullTeam[i].getRole() === "Intern"? `<i class="fas fa-user-graduate"></i>` : " " }
${fullTeam[i].getRole() === "Manager"? `<i class="fas fa-mug-hot"></i>` : "" } ${fullTeam[i].getRole()}
</h6>
<div class="card-body">
<p class="card-text">ID: ${fullTeam[i].id}</p>
<p class="card-text">Email: ${fullTeam[i].email}</p>
<p class="card-text">${fullTeam[i].getValue()}</p>
</div>
</div>`

}


return cardString;

}


function buildPage() {

let htmlString = `<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge>
<meta name="viewport" content=width=device-width, initial-scale=1.0">
<title>Team Builder</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
            <script
            src="https://use.fontawesome.com/releases/v5.15.2/js/all.js"
            data-auto-a11y="true">
            </script>
            <style>
           .page-header {
               padding:15px;
           }
           .card {

            margin: 0 auto;
            margin-bottom: 5px;
            margin-top: 5px;
            box-shadow: 3px 5px #888888;
           }
     </style>
     </head>
     <body>
     <div class="container-fluid">
     
     <div class="page-header bg-danger text-white text-center">
      <h2> My Team </h2>
     </div>
     ${teamProfiles()}
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
crossorigin="anonymous"></script> 
</body>
</html>`


fs.writeFile("dist/MyTeam.html", htmlString, (err) => {
if (err)
console.log(err);
else {

    console.log("File written successfully/n");

}


});

}


