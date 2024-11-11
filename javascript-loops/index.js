// const students = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
// console.log("Student List:");

// for (i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }


const numbers = [10, 15, 20, 25, 30];

console.log("Even and off numbers:");
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(`${numbers[i]} is even`)
    } else {
        console.log(`${numbers[i]} is odd`)
    }
}