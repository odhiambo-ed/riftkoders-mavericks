// Create an array of objects to represent a list of to-do items
let toDoList = [
    { description: "Buy groceries", completed: false },
    { description: "Walk the dog", completed: true },
    { description: "Finish the project report", completed: false },
    { description: "Call mom", completed: true },
    { description: "Read a book", completed: false }
];

function addTodo(list) {
    description = prompt("Enter a Task:")
    list.push({ description: description, completed: false })
}
addTodo(toDoList)
console.log(toDoList)
