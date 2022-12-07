const con = require("./db_connect");

// Table Creation 
async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS comments(
    noteID INT NOT NULL AUTO_INCREMENT,
    Note VARCHAR(255) NOT NULL UNIQUE,
    FOREIGN KEY (Note) REFERENCES users(userName)
    );`
  await con.query(sql);
}
createTable();

// grabbing all note in database
async function getAllNotes() {
  const sql = `SELECT * FROM notes;`;
  let comments = await con.query(sql);
  console.log(comments)
}

// Create  User - Registering
async function register(comment) {
  
  const sql = `INSERT INTO comments Note)
    VALUES ("${comment.Note}");
  `
  await con.query(sql);
  return await login(comment);
}



const notes = [
    {
        NoteId: 1,
        notetake:"hi" 
    },
    {
        NoteId: 2,
        notetake:"hello pavan" 
    }
];

function getAllNotes() {

    return notes;
    
  }

module.exports = { getAllNotes};