const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {
      "a": [],
      "b": [],
      "c": []
    }

    this.registeredUsers = {}
  }

  registerUser(username, password, age){
    if(age >= 18){

      for(let object in this.registeredUsers){
        if(object.username === username){
          throw new Error("already registered")
        } 
      }

      this.registeredUsers[username] = new User(username, password, age)
      console.log("user has been registered")
      return this.registeredUsers[username]

    } else if (age < 18) {
      throw new Error("too young to register")

    }
  }

  loginUser(username, password){
    let user = this.registeredUsers[username];
    if (!user) {
      throw new Error("Username or password is incorrect.");
    }
    
    try {
      user.login(password);
      console.log("Successful login");
      return user;
    } catch (error) {
      throw new Error("Username or password is incorrect.");
    }
  }

  logoutUser(username){
    const user = this.registeredUsers[username]
    if(user){
      this.registeredUsers[username].logout()
      console.log("user is logged out")

    } else throw new Error("no such user is logged in")
  }

  createScooter(station) {
    const stationsArr = Object.keys(this.stations)
    if(stationsArr.includes(station)){
      const newScooter = new Scooter(station)
      this.stations[station].push(newScooter)
      console.log("created new scooter")
      return newScooter

    } else {
      throw new Error("no such station")
    }

  }


  dockScooter(scooter, station){
    if(station in this.stations){
      if(!this.stations[station].includes(scooter)){
        this.stations[station].push(scooter)
        console.log("scooter is docked")

      } else {
        throw new Error("scooter already at station")
      }

    } else {
      throw new Error("no such station")
    }

  }


  rentScooter(scooter, user){
    for(let arr in this.stations){
      if(arr.includes(scooter)){
        scooter.rent(user)
        scooter.pop()
        console.log("scooter is rented")
        return 
      } 
    }

    throw new Error("scooter already rented")

  }

  print(){
    
    console.log("Registered Users: ")
    for(let user in this.registeredUsers){
      console.log(user)
    }


    console.log("Stations:")
    for(let station in this.stations){
      console.log(station + ": " + station.length)
    }
  }
}

module.exports = ScooterApp
