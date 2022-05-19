function returnTwo(num) {
    return 2;
}

function greeting(name) {
    let name = ''
    return "Hello, ${name}."
}

function add(num1, num2){
    return num1 + num2
}
module.exports = {
    returnTwo,
    greeting,
    add
}