const User = require('../src/User')

// User tests here
describe("User methods", () => {


// test username
test("Test users username property", () => {
    const newUser = new User("Johnny", 123, 1)
    expect(newUser.username).toBe("Johnny")
})

// test password

// test age

// test login

// test logout

})