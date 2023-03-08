const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {
      // similar comment to Scooter class - consider changing
      // station names to be more descriptive
      "a": [],
      "b": [],
      "c": []
    }

    this.registeredUsers = {}
  }

  registerUser(username, password, age){
    if(age >= 18){

      // instead of iterating through the entire registeredUsers object,
      // could we use a different method here to determine whether 
      // a username is a key included in the registeredUsers object?
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
    // let's verify if this user is logged in as well, before we attempt to log out
    if(user){
      // consider user.logout() here - we have already defined 
      // this.registeredUsers[username] above
      this.registeredUsers[username].logout()
      console.log("user is logged out")

    } else throw new Error("no such user is logged in")
  }

  createScooter(station) {
    const stationsArr = Object.keys(this.stations)
    if(stationsArr.includes(station)){
      const newScooter = new Scooter(station)
      this.stations[station].push(newScooter)
      // make sure to set newScooter.station here as well
      console.log("created new scooter")
      return newScooter

    } else {
      throw new Error("no such station")
    }

  }


  dockScooter(scooter, station){
    // for consistency, consider using the same strategy to check
    // whether a station exists (align with strategy from line 68-69)
    if(station in this.stations){
      if(!this.stations[station].includes(scooter)){
        this.stations[station].push(scooter)
        // note to call scooter.dock() here as well
        console.log("scooter is docked")

      } else {
        throw new Error("scooter already at station")
      }

    } else {
      throw new Error("no such station")
    }

  }


  rentScooter(scooter, user){
    // let's also check beforehand if the scooter's station exists,
    // and whether the scooter's station attribute is null
    // (that will determine whether the scooter is rented) - 
    // this is different from when scooter's station is not null 
    // but doesn't exist in its station's array

    // do we need to iterate through this.stations?
    // we have the scooter's station attribute
    for(let arr in this.stations){
      if(arr.includes(scooter)){
        scooter.rent(user)
        // instead of scooter.pop(), we'd need to remove the specific 
        // scooter from the appropriate stations array.
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
