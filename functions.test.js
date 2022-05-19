const{
    returnTwo,
    greeting,
    add
} = require ('./functions.js')

test("check to see function returns 2", () => {
    expect(returnTwo()).toEqual((2))
})