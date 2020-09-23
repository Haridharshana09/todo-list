var todos = [
	"clean room",
	"brush teeth",
	"excercie",
	"study some javascript",
	"eat healthy"
];

////////////////////////////////////////

// for loop
for (var i=0; i < todos.length; i++) {
//	adding "!" to all the elements
	todos[i] = todos[i] + "!";
}

// removing last element

// the todos.length value changes with every loop
// for(var i=0; i < todos.length; i++) {
// 	todos.pop();
// }

// initiating the variable outside the loop keeps the value constant,
// else it will change with the loop

// var todosLength = todos.length;
// for(var i=0; i<todosLength; i++) {
// 	todos.pop();
// } 

// for vs for each
var todosLength = todos.length;
for(var i=0; i<todosLength; i++) {
	console.log(todos[i], i);
} 

todos.forEach(function(todo, i) {
	console.log(todo, i);
})

// for each
function logTodos(todo, i) {
	console.log(todo, i);
}

todos.forEach(logTodos);

////////////////////////////////////////

// while loop
// checks the conditon first

var counterOne = 0;
while (counterOne < 10 ) {
	console.log(counterOne);
	counterOne++;
}

////////////////////////////////////////

// do while
// does the work and then checks the condition

var counterTwo = 10;
do {
	console.log(counterTwo);
	counterTwo--;
} while (counterTwo > 0);