let wesleyCheruyot = "Kodarit"

console.log(wesleyCheruyot)

let a = "hello"
let b = "world"

console.log(a+ " " +b)

girl = "Natasha"
isFemale = true

if (isFemale) {
    alert("Natasha")
} else {
    alert("Invalid")
}


Grading system

let mark = 80;
let grade = "";

if (mark > 80) {
    grade = "A"
    alert(grade)
} else if (mark >= 70 && mark <= 79) {
    grade = "B"
    alert(grade)
} else if (mark >= 60 && mark <= 69) {
    grade = "C"
    alert(grade)
} else {
    alert("Invalid Input")
}

switch (mark) {
    case 80:
        grade = "A";
        alert(grade);
        break;
    default:
       alert("Invalid Input") 
}

let cars = ["BMW", "Benz", "VW", "Audi"]

for (let i = 0; i < cars.length; i++ ) {
    console.log(i)
}

function sum(a, b) {
   return a + b  
}

alert(sum(10, 50))

answer = prompt("Message to the user", "")


function convertCF(input) {
    return (9 / 5 * input) + 32
}

input = parseInt(prompt("Enter temperature in Celcius:"))

alert("The temp is " + convertCF(input))
