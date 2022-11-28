const con = require("./db_connect");

async function createTable() {
let sql = `CREATE TABLE IF NOT EXISTS users (
  userID INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  CONSTRAINT userPK PRIMARY KEY (userID) 
);`
await con.query(sql);
}
createTable();

async function registerUser() {
  const sql = `INSERT INTO users 
          (userName, password)
          VALUES("pac","pass");
          `
     await con.query(sql);     
}

registerUser();


async function getAllUsers(){
  const sql = `SELECT * FROM users;`;
  let users = await con.query(sql);
  console.log(users);
}


const users = [
  {
    userId: 12345,
    userName: "cathy123",
    password: "icecream"
  },
  {
    userId: 55555,
    userName: "fredburger",
    password: "badpassword"
  },
  {
    userId: 23412,
    userName: "bobbyjones",
    password: "hi"
  }
];

function getAllUsers() {

  return users;

}

module.exports = { getAllUsers};