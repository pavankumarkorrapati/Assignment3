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