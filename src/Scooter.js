class NextSerial {
  static nextSerial = 0
}



class Scooter extends NextSerial{
  // scooter code here
  constructor(station){
    this.station = station
    this.user = null
    this.serial = NextSerial.nextSerial += 1
    this.charge = 100
    this.isBroken = false
  }

  rent(user){
    if(this.charge >= 20 && !this.isBroken) {
      this.user = user
      console.log("checked out by " + this.user)
    }
    else if (this.charge < 20) throw new Error("scooter needs to charge")
    else throw new Error("scooter needs repair")
  }

  dock(station){
    this.station = station
    this.user = null
  }

  charge() {
    console.log('Starting charge');
    
    setInterval(() => {
      this.charge += 10
      console.log(this.charge)
    }, 2000)

    this.charge = 100
    console.log('Charge complete');   
  }

  requestRepair(){
    console.log("Starting repair...")
    setTimeout(() => {
      console.log("Repairs complete")
      this.isBroken = false
    }, 5000)
  }
}


module.exports = Scooter
