// Write the sayHello function that takes one argument, which is the object containing the person's data. If the passed object has the property name, your function should be written in the console "Hello, name!". If not, the function has to write only "Hello!". An example of an object to call a function is const person = {name: "Jill", age: 25, hobby: "sports"}.

const person = {
    name: "Jill",
    age: 25,
    hobby: "sports"
}

const sayHello = function (person) {
    if (typeof name !== 'undefined') {
        console.log(`Hello ${person.name} !`)
    } else {
        console.log("Hello!")
    };
}