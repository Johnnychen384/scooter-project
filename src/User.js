class User {
  // User code here
  constructor(username, password, age){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = false
  }

  login(password){
    if(password == this.password) {
      this.loggedIn = true
      console.log("Successful login")
    }
    else throw new Error("incorrect password")
  }

  logout(){
    this.loggedIn = false
    console.log("user has been logged out.")
  }
}

module.exports = User
