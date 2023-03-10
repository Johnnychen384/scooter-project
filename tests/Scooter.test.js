const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('does something', () => {
    // edit this to be a real test!

    const newScooter = new Scooter("a")
    expect(newScooter).toBeInstanceOf(Scooter)
  }
)
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method
  test("Test if rent method works", () => {
    const newScooter = new Scooter("a")
    const consoleSpy = jest.spyOn(console, 'log');
    newScooter.rent("Johnny")
    expect(consoleSpy).toHaveBeenCalledWith("checked out by Johnny")
    consoleSpy.mockRestore()
  })

  test("Test if rent method throws error", () => {
    const newScooter = new Scooter("a")
    newScooter.isBroken = true
    expect(() => newScooter.rent("Johnny")).toThrowError("scooter needs repair")
  })



  //dock method
  test("Testing the Scooter classes dock method.", () => {
    const newScooter = new Scooter("a")
    newScooter.user = "Johnny"
    newScooter.dock("b")
    expect(newScooter.station).toBe("b")
  })

  //requestRepair method
  test("Testing the repair method for scooter", () => {
    const newScooter = new Scooter("a")
    newScooter.isBroken = true
    
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
