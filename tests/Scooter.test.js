const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  // modify test name to be more descriptive of what it's testing
  test('does something', () => {
    const newScooter = new Scooter("a")
    expect(newScooter).toBeInstanceOf(Scooter)
  }

  // consider testing the creation of a new Scooter
  // and verifying that its attributes are as expected.
  // additionally consider the testing of the NextSerial functionality
  // by adding multiple scooters and checking their serials
)
})

//Method tests
describe('scooter methods', () => {

  //rent method
  test("Test if rent method works", () => {
    // consider using a more descriptive station name when creating a new Scooter
    // to increase readability
    const newScooter = new Scooter("a")
    // oooo console spy!! Love this.
    const consoleSpy = jest.spyOn(console, 'log');
    newScooter.rent("Johnny")
    expect(consoleSpy).toHaveBeenCalledWith("checked out by Johnny")
    consoleSpy.mockRestore()
  })

  // consider checking all potential error cases, including when charge is low
  test("Test if rent method throws error", () => {
    const newScooter = new Scooter("a")
    newScooter.isBroken = true
    // the rent method takes in a User object, rather than a username
    expect(() => newScooter.rent("Johnny")).toThrowError("scooter needs repair")
  })



  //dock method
  test("Testing the Scooter classes dock method.", () => {
    const newScooter = new Scooter("a")
    newScooter.user = "Johnny"
    // similar comment as above - using a more descriptive station name
    // will help with readability so other devs know that dock takes a station as an arg
    newScooter.dock("b")
    expect(newScooter.station).toBe("b")
  })

  //requestRepair method
  test("Testing the repair method for scooter", () => {
    const newScooter = new Scooter("a")
    newScooter.isBroken = true
    
    // to be honest I didn't know useFakeTimers() existed. well done!
    jest.useFakeTimers()
    newScooter.requestRepair()
    jest.advanceTimersByTime(5000)
    expect(newScooter.isBroken).toBe(false)
    jest.useRealTimers()
  })

  //charge method
  test("Testing scooter charge method", () => {
    let newScooter = new Scooter("a")
    newScooter.charge = 0
    // I'm unsure if this expectation is needed based on the previous line
    expect(newScooter.charge).toBe(0)

    jest.useFakeTimers()
    const consoleSpy = jest.spyOn(console, 'log')

    newScooter.chargeBattery()
    expect(consoleSpy).toHaveBeenCalledWith("Starting charge")

    jest.advanceTimersByTime(6000)

    expect(consoleSpy).toHaveBeenCalledWith("Charge complete")
    expect(newScooter.charge).toBe(100)

    consoleSpy.mockRestore()
    jest.useRealTimers()
  })

})
