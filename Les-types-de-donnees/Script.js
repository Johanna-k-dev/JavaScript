//Afficher le type de chacune des variables dans la console

const firstname = "Michel";
const lastname = "Polnareff";
let age = 123;
const isUserLoggedIn = false;
const account = undefined;
let account2;
const myVar = null;
const user = {
    firstname: "Michel",
    lastname: "Polnareff",
    email: "mich-mich@pol.com"
}
const colors = ['red', 'blue', 'green'];
const onSayHello = function sayHello() {
    return 'Hello';
}

console.log(typeof firstname);
console.log(typeof lastname);
console.log(typeof age);
console.log(typeof isUserLoggedIn);
console.log(typeof account);
console.log(typeof account2);
console.log(typeof myVar);
console.log(typeof user);
console.log(typeof user.firstname);
console.log(typeof user.lastname);
console.log(typeof user.email);
console.log(typeof colors);
console.log(typeof colors.value);
console.log(typeof onSayHello);
console.log(typeof onSayHello.value);

