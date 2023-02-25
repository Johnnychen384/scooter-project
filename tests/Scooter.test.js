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

  //dock method

  //requestRepair method

  //charge method

})
