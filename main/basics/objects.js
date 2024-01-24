// singleton are created when objects are created using constructors 
// Object.create => this is constructor declaration

// object literals
//here the keys are given nrmlly but at the back they are taken as "empname" "empid"...
 var emp ={
    empname :"lasya",
    "fullName" :"lasya sree" , //for this type of things we can't use old way sometimes
    empid : 123,
    locations : ["hyd","vjy","kkd"],
}
 //to access
console.log(emp.empid); //but this is  a old way 
console.log(emp["empid"]);//given in double quotes bcoz backend code is taken like that
console.log(emp.fullName); // emp["fullName"]

console.log()
