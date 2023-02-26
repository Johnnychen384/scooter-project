const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe("Test scooterApp", () => {


// register user
test("Test ScooterApp class's register method", () => {
    const newScooterApp = new ScooterApp()
    const consoleSpy = jest.spyOn(console, 'log');
    newScooterApp.registerUser("asd", 123, 22)
    expect(consoleSpy).toHaveBeenCalledWith("user has been registered")
    consoleSpy.mockRestore()
})

// log in

// log out

// rent scooter

// dock scooter


    
})