// let fruits = ["Berry", "Apple", "Banana", "Cherry", "Orange"];

fruits.push("Orange")
fruits.pop()
fruits.shift()
fruits.unshift("Berry")

newFruits = fruits.slice(2,4)


let i;

for (i = 0 ; i <= newFruits.length; i++) {
    console.log(newFruits[i])
}

alert(fruits.length)

for (item of fruits) {
    console.log(item)
}

alert(fruits[1])
console.log(fruits[1])

let person = { firstName: "John", lastName: "Doe", age: 30, isStudent: false };

alert(person.firstName)

let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 23 }
];

alert(students[2].name)