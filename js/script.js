const login1=document.getElementById("login");
const reg=document.getElementById("register");
const Notes = document.getElementById("comments");
if (Notes) Notes.addEventListener('submit',comment);
if(login1) login1.addEventListener('submit',fun2)
if(reg) reg.addEventListener('submit',fun)
function fun2(e)
{
    e.preventDefault();
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;

    class User{
        constructor(email,password)
        {
            this.email=email;
            this.password=password;
        }
    }
   
    const user1=new User(email,password);
    console.log(user1);
    getemail();{
        return this.email;
    }
    setemail(newemail);{
        this.email = newemail;
    }
    user1.email="jghbnj'k;'lkjhg";
    console.log(user1.email);
  }

function fun(e)
{
    e.preventDefault()
    let fname=document.getElementById('fname').value;
    let lname=document.getElementById('lname').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    
    class User{
        constructor(fname,lname,email,password)
        {
            this.firstname=fname;
            this.lastname=lname;
            this.email=email;
            this.password=password;
        }
    }
   
    const user1=new User(fname,lname,email,password);
    console.log(user1);
}

function comment(){
 let Notes = document.getElementById('comment').value;
 console.log("Notes: " + Notes);    
}



