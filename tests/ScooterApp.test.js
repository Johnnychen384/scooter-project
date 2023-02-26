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


test("Test ScooterApp class's register method to see if it throws error", () => {
    const newScooterApp = new ScooterApp()
    
    expect(() => newScooterApp.registerUser("asd", 123, 10)).toThrowError("too young to register")
})


// log in
test("Test loginUser method from ScooterApp", () => {
    const newScooterApp = new ScooterApp()
    const consoleSpy = jest.spyOn(console, 'log');
    newScooterApp.registerUser("asd", 123, 22)
    newScooterApp.loginUser("asd", 123)

    expect(consoleSpy).toHaveBeenCalledWith("Successful login")
    consoleSpy.mockRestore()

})

test("Test loginUser method from ScooterApp for error", () => {
    const newScooterApp = new ScooterApp()
    
    newScooterApp.registerUser("asd", 123, 22)
    expect(() => newScooterApp.loginUser("asd", 12344)).toThrowError("Username or password is incorrect.")

})

// log out
test("Test logoutUser method", () => {
    const newScooterApp = new ScooterApp()
    const consoleSpy = jest.spyOn(console, 'log');
    newScooterApp.registerUser("asd", 123, 22)
    newScooterApp.loginUser("asd", 123)

    expect(consoleSpy).toHaveBeenCalledWith("Successful login")

    newScooterApp.logoutUser("asd")
    expect(consoleSpy).toHaveBeenCalledWith("user is logged out")

    consoleSpy.mockRestore()
})

test("Test logoutUser method for error", () => {
    const newScooterApp = new ScooterApp()
    const consoleSpy = jest.spyOn(console, 'log');
    newScooterApp.registerUser("asd", 123, 22)
    newScooterApp.loginUser("asd", 123)

    expect(consoleSpy).toHaveBeenCalledWith("Successful login")
    expect(() => newScooterApp.logoutUser("aaa")).toThrowError("no such user is logged in")

    consoleSpy.mockRestore()
})

// rent scooter

// dock scooter


    
})