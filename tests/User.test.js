const User = require('../src/User')

// User tests here
describe("User methods", () => {


// test username
test("Test users username property", () => {
    const newUser = new User("Johnny", 123, 1)
    expect(newUser.username).toBe("Johnny")
})

// test password
test("Test users password property", () => {
    const newUser = new User("Johnny", 123, 1)
    expect(newUser.password).toBe(123)
})

// test age
test("Test users age property", () => {
    const newUser = new User("Johnny", 123, 1)
    expect(newUser.age).toBe(1)
})

// test login
test("Test login method for user class", () => {
    const newUser = new User("Johnny", 123, 1)
    const consoleSpy = jest.spyOn(console, 'log')
    newUser.login(123)

    expect(consoleSpy).toHaveBeenCalledWith("Successful login")
})

test("Test if login method fails for user class", () => {
    const newUser = new User("Johnny", 123, 1)
    expect(() => newUser.login(1)).toThrowError("incorrect password")
})

// test logout
test("Test logout method for user class", () => {
    const newUser = new User("Johnny", 123, 1)
    const consoleSpy = jest.spyOn(console, 'log')
    newUser.logout()

    expect(consoleSpy).toHaveBeenCalledWith("user has been logged out.")
})

})