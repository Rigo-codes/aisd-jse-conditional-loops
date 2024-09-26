// 1. Looping Through Student Names
const students = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
console.log("Student List:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// 2. Looping Through Numbers and Checking Even or Odd
const numbers = [10, 15, 20, 25, 30];
console.log("Even and Odd Numbers:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i] + " is even");
  } else {
    console.log(numbers[i] + " is odd");
  }
}

// 3. Checking Passing Scores
const scores = [45, 62, 85, 30, 75];
console.log("Score Status:");
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 60) {
    console.log("Score " + scores[i] + " is a pass");
  } else {
    console.log("Score " + scores[i] + " is a fail");
  }
}

// 4. Using a While Loop to Double a Value
let value = 10;
console.log("Value Doubling Loop:");
while (value < 100) {
  console.log("Value is: " + value);
  value *= 2; // double the value in each iteration
}
