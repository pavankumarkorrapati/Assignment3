import { fetchData, getCurrentUser,setCurrentUser} from './main.js'
class Note{
    constructor(note) {
       this.Note = note;
    }
    getComments(){
       return this.note; 
     }
    }


    let comment = document.getElementById("comments");
    if (comment) comment.addEventListener("submit",note1);

    function note1(e){
       e.preventDefault();
      let feedback = document.getElementById("notetaking").value;
      let note = new Note(null,null,feedback);
       let user = getCurrentUser();
       note.userID = user.userID;
  fetchData("/note/create", note, "POST")
  .then((data) => {
    setCurrentUser(data);
    console.log(note);
    window.location.href = "note.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}
    