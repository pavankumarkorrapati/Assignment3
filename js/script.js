const Register = document.getElementById('register');

if(Register) Register.addEventListener('submit',Registration);

function Registration(e){

let Fname = document.getElementById("fname").value;
let Lname = document.getElementById("lname").value;
let Username = document.getElementById("username").value;
let Password = document.getElementById("pass").value;
console.log("first name:"+ Fname);
console.log("last name:"+ Lname);
console.log("username:"+ Username);
console.log("password:"+ Password);
}