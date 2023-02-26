const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {
      a: [],
      b: [],
      c: []
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
    if(username in this.registeredUsers){
      this.registeredUsers[username].login()

    } else {
      throw new Error("Username or password is incorrect.")
    }
  }

  logoutUser(username){
    if(username in this.registeredUsers){
      this.registeredUsers[username].logout()
      console.log("user is logged out")

    } else throw new Error("no such user is logged in")
  }

  createScooter(station) {
    if(station in this.station){
      const newScooter = new Scooter(station)
      this.station[station].push(newScooter)
      console.log("created new scooter")
      return newScooter

    } else {
      throw new Error("no such station")
    }

  }


  dockScooter(scooter, station){
    if(station in this.station){
      if(!this.station[station].includes(scooter)){
        this.station[station].push(scooter)
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
