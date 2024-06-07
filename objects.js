let obj={};
let obj3={
    firstname: "Dav",
    lastname: "mac",
    isActive: true,
    startDate: new Date("Jan 1, 2022"),
    vacationdays: 14
};

console.log(`First Name: ${obj3.firstname}`);
let obj4=obj3;
obj4.lastname="Sak"
console.log(`Last Name : ${obj3.lastname}`);
