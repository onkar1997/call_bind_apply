// Call
var person1 = {firstName: 'Onkar', lastName: 'Pawar'};
var person2 = {firstName: 'Bhaskar', lastName: 'Pawar'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Hello'); // Hello Onkar Pawar
say.call(person2, 'Hello'); // Hello Bhaskar Pawar


// Apply
var person1 = {firstName: 'Onkar', lastName: 'Pawar'};
var person2 = {firstName: 'Bhaskar', lastName: 'Pawar'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(person1, ['Hello']); // Hello Onkar Pawar
say.apply(person2, ['Hello']); // Hello Bhaskar Pawar


// Bind
var person1 = {firstName: 'Onkar', lastName: 'Pawar'};
var person2 = {firstName: 'Bhaskar', lastName: 'Pawar'};

function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello Onkar Pawar
sayHelloKelly(); // Hello Bhaskar Pawar