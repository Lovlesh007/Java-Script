// here object is all the property of a person 
// we have to store their differernt properties in different variables
// now suppose if u want to store the properties of a whole organisation
// so u need thousands of variables which is quite not possible
// the another alternate source is to assign a single object and add properties on it


// BY using variables
let name ='Lovlesh Bhatt';
let age = 30;
let address = "Hno 67 kavita colony nangloi delhi 41";
let mothername = 'jyoti bhatt';
let fathername = 'pappu';

console.log(name);
console.log(age);
console.log(address);
console.log(mothername);
console.log(fathername);
console.log(name,age,address,mothername,fathername);


// Now using objects


let person = {
    name: 'Riya bhatt',
    age : 18,
    address : 'cp',
    mothername : 'rajjo',
    fathername :'ratanlaal'
};

console.log(person);
// accessing the name in object
//using dot notaion
person.name ='Shona Bhatt';
person.age ='30';
person.address ='USA CHICAGO';
person.mothername= 'NISHU';
console.log(person);


