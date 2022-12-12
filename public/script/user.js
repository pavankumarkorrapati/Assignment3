import { fetchData, setCurrentUser } from './main.js'

class User{
    constructor(Firstname,Lastname,Username,Password){
          this.firstName = Firstname;
          this.lastName = Lastname;
          this.userName = Username;
          this.password = Password;
         
    }
       getFirstName(){
        return this.Firstname;
       }

       getLastName(){
        return this.Lastname;
       }
         
       getUserName(){
        return this.Username;
       }

       getPassWord(){
        return this.Password;
       }

}

let Register = document.getElementById("register");
if(Register) Register.addEventListener('submit',registration);

function registration(e){
    e.preventDefault();

    let Firstname = document.getElementById("fname").value;
    let Lastname = document.getElementById("lname").value;
    let Username = document.getElementById("email").value;
    let Password = document.getElementById("password").value;
    let user = new User(Firstname,Lastname,Username,Password);

   

    fetchData("/user/register", user, "POST")
    .then((data) => {
      console.log(data)
      setCurrentUser(data);
      window.location.href = "note.html";
    })
    .catch((err) =>{
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })
}

//Login javascript

let Login = document.getElementById("login");
if (Login) Login.addEventListener("submit",Loggin);
   
   
   function Loggin(e){
   e.preventDefault();
   
   let Username = document.getElementById("email").value;
   let Password = document.getElementById("password").value;
   let user = new User(Username,Password);
   
   fetchData("/user/login", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "note.html";
  })
  .catch((err) =>{
    let q = document.querySelector('.error');
    q.innerHTML = err.message;
  })

   }





