class User {
  constructor(fname, username,lname,pass) {
    this.FirstName = fname;
    this.userName = username;
    this.lastName = lname;
    this.setUserPassword(pass);
  }
  //get methods
  getFirstName() {
    return this.fname;
  }
  getlastName() {
    return this.lastName;
  }
  getuserName() {
    return this.username;
  }
  getUserPassword() {
    return this.pass;
  }
  //set methods
  setFirstName(fname) {
    this.FirstName = fname;
  }
  setlastName(lname) {
    this.lastName = lname;
  }
  setUserPassword(pass) {
    if(this.validPassword(pass)) {
      this.userPassword = pass;
    } else {
      console.log("Password must have at least 1 uppercase letter, 1 symbol, 2 numbers," 
        + "and have a length of at least 8 characters.");
    }
  }
  //valid password method
  validPassword(pass) {
    if(pass.length >= 8) {
      let upper = 0;
      let numbers = 0;
      let symbols = 0;
      
      for(let i = 0; i<pass.length; i++) {
        if(this.isDigit(pass[i])) {
          numbers++;
        } else if(!this.isLetterOrDigit(pass[i])) {
          symbols++;
        } else if(this.isUpperCase(pass[i])) {
          upper++;
        }
      }

      if(upper >= 1 && numbers >= 2 && symbols >= 1) {
        return true;
      }
    }
    return false;
  }
  //returns if character is a letter
  isUpperCase(char) {
    return (/[A-Z]/).test(char)
  }
  //returns if character is a digit
  isDigit(char) {
    return (/[1-9]/).test(char)
  }
  //returns if character is a letter or digit
  isLetterOrDigit(char) {
    return ((/[a-zA-Z]/).test(char) || (/[1-9]/).test(char))
  }
}


console.log($User);