//#1------------------------------------------------

let employeeListV1 = { 
    "employees" : [
    { "firstName":"Sam" , "department" : "Tech", "designation" : "Manager", "salary" : 40000, "raiseEligible": true} , 
    { "firstName":"Mary" , "department" : "Finance", "designation" : "Trainee", "salary" : 18500, "raiseEligible": true}, 
    {"firstName":"Bill" , "department" : "HR", "designation" : "Executive", "salary" : 21200, "raiseEligible": false}
]};

console.log("Problem 1");
console.log(employeeListV1);

//#2------------------------------------------------

let company = {
    "companyInfo" : [
        {"companyName": "Tech Stars"},
        {"website" : "www.techstars.site"} ,
        {"employeesArr" : employeeListV1}
    
    ]
};

console.log("Problem 2");
console.log(company);

//#3------------------------------------------------

let employeeListV2 = { 
    "employees" : [
    { "firstName":"Sam" , "department" : "Tech", "designation" : "Manager", "salary" : 40000, "raiseEligible": true} , +
    { "firstName":"Mary" , "department" : "Finance", "designation" : "Trainee", "salary" : 18500, "raiseEligible": true}, +
    {"firstName":"Bill" , "department" : "HR", "designation" : "Executive", "salary" : 21200, "raiseEligible": false}
    
]};

function addEmployee(companyObject,name, dept, desig,salary,raiseEligibility) {
    let newEmployee={};
    newEmployee.firstName = name;
    newEmployee.department = dept;
    newEmployee.designation = desig;
    newEmployee.salary = salary;
    newEmployee.raiseEligible = raiseEligibility;

    company.companyInfo[2].employeesArr.employees.push("Anna","Tech","Executive", 25600, false);
}

console.log("Problem 3");
console.log(company);


//#4------------------------------------------------

let salaryCount = 0;
for(let i = 0; i < company.companyInfo[2].employeesArr.employees.length; i++ ){
    salaryCount += company.companyInfo[2].employeesArr.employees[i].salary;
}

console.log("Problem 4");
console.log(salaryCount);

//#5------------------------------------------------

function raiseSalary(percentageDecimal){
    
    //for each employee 
    for (let i = 0; i < company.companyInfo[2].employeesArr.employees.length; i++){
        //if the employee is eligible for a raise:
        if(company.companyInfo[2].employeesArr.employees[i].raiseEligible == true)
        {
            //update their salary based on their percentage
            company.companyInfo[2].employeesArr.employees[i].salary += company.companyInfo[2].employeesArr.employees[i].salary * percentageDecimal;
        }
    }

}

//call function with ten percent raise
raiseSalary(0.1);

console.log("Problem 5");
console.log(salaryCount);

//#6------------------------------------------------
//for each employee 

//for each employee 
for (let i = 0; i < company.companyInfo[2].employeesArr.employees.length; i++){
    //if the employee is eligible for a raise:
    if(company.companyInfo[2].employeesArr.employees[i].firstName == "Anna" || company.companyInfo[2].employeesArr.employees[i].name == "Sam")
    {
        //update their salary based on their percentage
        company.companyInfo[2].employeesArr.employees[i].wfh == true;
    }
    else{
        company.companyInfo[2].employeesArr.employees[i].wfh == false;
    }
}

console.log("Problem 6");
console.log(company);