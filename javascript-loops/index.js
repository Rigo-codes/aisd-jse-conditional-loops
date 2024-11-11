// const students = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
// console.log("Student List:");

// for (i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }


// const numbers = [10, 15, 20, 25, 30];

// console.log("Even and off numbers:");
// for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(`${numbers[i]} is even`)
//     } else {
//         console.log(`${numbers[i]} is odd`)
//     }
// }

const scores = [45, 62, 85, 30, 75];
console.log("Score status:")
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 60) {
        console.log(`Score ${scores[i]} is a pass.`)
    } else {
        console.log(`Score ${scores[i]} is a fail`)
    }
}

let value = 10;
console.log("Value Doubling Loop:");
while (value < 100) {
    console.log("Value is:" + value);
    value *= 2;
}
