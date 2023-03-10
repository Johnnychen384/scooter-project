class NextSerial {
  static nextSerial = 0
}



class Scooter{
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
    else if (this.isBroken === true) throw new Error("scooter needs repair")
  }

  dock(station){
    this.station = station
    this.user = null
  }

  chargeBattery() {
    console.log('Starting charge');
    
    setInterval(() => {
      if (this.charge < 100) {
        this.charge += 50;
        console.log(this.charge);
      } else {
        this.charge = 100
        console.log("Charge complete");
        clearInterval();
      }
    }, 2000);  
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
