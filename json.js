//JavaScript object
let employee={
firstname: "David",
lastname: "Tucker",
birthdate: new Date("January 1, 1982"),
numYearsEmployment : 7,
department: "Engineering",
titles: "CTO",
isActive: true,
salary: 100000
};

//Convert to JSON String
let jsonValue= JSON.stringify(employee);
console.log(jsonValue);
jsonValue=JSON.stringify(employee, null, 2);
console.log(jsonValue);

//Convert value back to object
let newEmployee= JSON.parse(jsonValue);
console.log(newEmployee)

let jsonString= `{
    "firstname: "Elizabeth",
    "lastname: "Jones"
}`;
let obj=JSON.parse(jsonString);
console.log(obj);

//Improperly formatted JSON
let notJSON="hello";
let newObj= JSON.parse(notJSON);