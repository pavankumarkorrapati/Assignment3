import { fetchData, getnotes } from './main.js'
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
      let note = new Note(feedback);

  fetchData("/note/create", note, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "note.html";
  })
  .catch((err) => {
    let q = document.querySelector('.error');
    q.innerHTML = err.message;
  }) 
}
    